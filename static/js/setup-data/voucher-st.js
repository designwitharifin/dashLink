$(document).ready(function () {
    $.getJSON("/data/data_voucher.json", function (data) {
        var itemCards = "";

        // Looping data load by src /data/data_voucher.json
        $.each(data.voucher, function (index, voucher) {
            // Html for card view data
            itemCards += `
                <div class="col-xl-6 col-md-12 col-12">
                    <div class="card">
                        <div class="card-body py-4">
                            <div class="d-md-none">
                                <div
                                    class="d-flex align-items-center mt-5 mb-3 lh-none text-heading d-block display-5 ls-tight mb-0">
                                    <span
                                        class="font-semibold text-2xl align-self-start mt-1 mt-sm-1 me-1">${currency}</span>
                                    <span>${voucher.total}</span>
                                </div>
                            </div>
                            <div class="d-flex align-items-center justify-content-between mb-5">
                                <div class="flex-1">
                                    <h6 class="h5 font-semibold mb-1">${voucher.data}</h6>
                                    <p class="text-sm text-muted">The perfect way to get started.</p>
                                </div>
                                <div class="ms-auto d-none d-md-block">
                                    <div
                                        class="d-flex align-items-center mt-5 mb-3 lh-none text-heading d-block h2 ls-tight mb-0">
                                        <span
                                            class="font-semibold text-sm align-self-start mt-1 mt-sm-1 me-1">${currency}</span>
                                        <span>${voucher.total}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex align-items-center justify-content-between mb-1"><span
                                    class="text-sm text-muted font-semibold text-heading d-block">${voucher.limit}</span>
                                <span class="text-sm text-muted ls-tight d-block">Up to <span>${voucher.devices}</span>
                                    Devices</span>
                            </div>
                            <hr class="my-4">
                            <div class="d-flex align-items-center justify-content-between">
                                <a href="#" class="btn btn-sm btn-neutral ms-auto" data-bs-target="#voucherDetailsModal" onclick="showVoucherDetails(${voucher.id})">Buy now</a>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });

        $("#itemCards").html(itemCards);
    });

    $("#orderForm").on("submit", function (event) {
        event.preventDefault();
        if (validateForm()) {
            var voucherId = parseInt($("#voucherId").val(), 10);
            submitOrder(voucherId);
        }
    });
});

// Show detail data by id and classname
function showVoucherDetails(voucherId) {
    $.getJSON("/data/data_voucher.json", function (data) {
        var voucher = data.voucher.find(function (item) {
            return item.id === voucherId;
        });

        $(".voucherLimit").text(voucher.limit);
        $(".voucherDevices").text(voucher.devices);
        $(".voucherData").text(voucher.data);
        $(".voucherPrice").text(voucher.total);
        $(".currency").text(currency);
        $("#voucherId").val(voucherId);
        $("#voucherDetailsModal").modal("show");
    });
}

// Submit input order to WhatsApp
function submitOrder(voucherId) {
    var user = $("#orderUser").val();
    // Get the selected value from the <select> element
    var payment = $('input[name="payment"]:checked').val();

    $.getJSON("/data/data_voucher.json", function (data) {
        // Find the voucher based on voucherId
        var voucher = data.voucher.find(function (item) {
            return item.id === voucherId;
        });

        if (user !== "") {
            /* Final WhatsApp URL */
            var walink = "https://api.whatsapp.com/send";
            var phone = whatsAppNumber;
            var header = voucherHeader;
            var walinkUser = "*User*: " + user;
            var walinkData = "*Voucher*: " + voucher.data;
            var walinkLimit = "*Limit*: " + voucher.limit;
            var walinkPrice = "*Price*:" + currency + voucher.total;
            var walinkPay = "*Payment method*: " + payment;

            /* Construct WhatsApp URL */
            var blanter_whatsapp = walink + "?phone=" + phone + "&text=" + encodeURIComponent(header + "\n\n" + walinkUser + "\n" + walinkData + "\n" + walinkLimit + "\n" + walinkPrice + "\n" + walinkPay);

            /* Open WhatsApp window */
            window.open(blanter_whatsapp, "_blank");

            /* If success ridirect to success page*/
            setTimeout(function () {
                window.location.href = "order-success.html";
            }, 1000); // Change the delay time as desired
        } else {
            setTimeout(function () {
                window.location.href = "voucher.html";
            }, 1000); // Change the delay time as desired
        }
    });
}


// Form input validate
function validateForm() {
    var user = $("#orderUser").val().trim();
    var payment = $("#paymentMethod option:selected").val(); // Get the selected value from the <select> element

    if (user === "") {
        alert("Please enter your name.");
        return false;
    }

    if (payment === "") { // Check if no payment method is selected
        alert("Please select a payment method.");
        return false;
    }

    return true;
}



