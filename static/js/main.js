!function () {
    function t(t, e, i, n) {
        Object.defineProperty(t, e, {
            get: i,
            set: n,
            enumerable: !0,
            configurable: !0
        })
    }
    function e(t, e) {
        return Object.keys(e).forEach((function (i) {
            "default" === i || "__esModule" === i || t.hasOwnProperty(i) || Object.defineProperty(t, i, {
                enumerable: !0,
                get: function () {
                    return e[i]
                }
            })
        }
        )),
            t
    }
    var i = {};
    t(i, "popperGenerator", (function () {
        return Dt
    }
    )),
        t(i, "detectOverflow", (function () {
            return bt
        }
        )),
        t(i, "createPopperBase", (function () {
            return St
        }
        )),
        t(i, "createPopper", (function () {
            return Nt
        }
        )),
        t(i, "createPopperLite", (function () {
            return It
        }
        ));
    var n = {};
    t(n, "top", (function () {
        return s
    }
    )),
        t(n, "bottom", (function () {
            return o
        }
        )),
        t(n, "right", (function () {
            return r
        }
        )),
        t(n, "left", (function () {
            return a
        }
        )),
        t(n, "auto", (function () {
            return l
        }
        )),
        t(n, "basePlacements", (function () {
            return c
        }
        )),
        t(n, "start", (function () {
            return h
        }
        )),
        t(n, "end", (function () {
            return u
        }
        )),
        t(n, "clippingParents", (function () {
            return d
        }
        )),
        t(n, "viewport", (function () {
            return f
        }
        )),
        t(n, "popper", (function () {
            return p
        }
        )),
        t(n, "reference", (function () {
            return m
        }
        )),
        t(n, "variationPlacements", (function () {
            return g
        }
        )),
        t(n, "placements", (function () {
            return _
        }
        )),
        t(n, "beforeRead", (function () {
            return b
        }
        )),
        t(n, "read", (function () {
            return v
        }
        )),
        t(n, "afterRead", (function () {
            return y
        }
        )),
        t(n, "beforeMain", (function () {
            return w
        }
        )),
        t(n, "main", (function () {
            return E
        }
        )),
        t(n, "afterMain", (function () {
            return A
        }
        )),
        t(n, "beforeWrite", (function () {
            return O
        }
        )),
        t(n, "write", (function () {
            return T
        }
        )),
        t(n, "afterWrite", (function () {
            return C
        }
        )),
        t(n, "modifierPhases", (function () {
            return x
        }
        ));
    var s = "top"
        , o = "bottom"
        , r = "right"
        , a = "left"
        , l = "auto"
        , c = [s, o, r, a]
        , h = "start"
        , u = "end"
        , d = "clippingParents"
        , f = "viewport"
        , p = "popper"
        , m = "reference"
        , g = c.reduce((function (t, e) {
            return t.concat([e + "-" + h, e + "-" + u])
        }
        ), [])
        , _ = [].concat(c, [l]).reduce((function (t, e) {
            return t.concat([e, e + "-" + h, e + "-" + u])
        }
        ), [])
        , b = "beforeRead"
        , v = "read"
        , y = "afterRead"
        , w = "beforeMain"
        , E = "main"
        , A = "afterMain"
        , O = "beforeWrite"
        , T = "write"
        , C = "afterWrite"
        , x = [b, v, y, w, E, A, O, T, C]
        , k = {};
    function L(t) {
        return t ? (t.nodeName || "").toLowerCase() : null
    }
    function D(t) {
        if (null == t)
            return window;
        if ("[object Window]" !== t.toString()) {
            var e = t.ownerDocument;
            return e && e.defaultView || window
        }
        return t
    }
    function S(t) {
        return t instanceof D(t).Element || t instanceof Element
    }
    function N(t) {
        return t instanceof D(t).HTMLElement || t instanceof HTMLElement
    }
    function I(t) {
        return "undefined" != typeof ShadowRoot && (t instanceof D(t).ShadowRoot || t instanceof ShadowRoot)
    }
    t(k, "applyStyles", (function () {
        return P
    }
    )),
        t(k, "arrow", (function () {
            return Z
        }
        )),
        t(k, "computeStyles", (function () {
            return it
        }
        )),
        t(k, "eventListeners", (function () {
            return st
        }
        )),
        t(k, "flip", (function () {
            return vt
        }
        )),
        t(k, "hide", (function () {
            return Et
        }
        )),
        t(k, "offset", (function () {
            return At
        }
        )),
        t(k, "popperOffsets", (function () {
            return Ot
        }
        )),
        t(k, "preventOverflow", (function () {
            return Tt
        }
        ));
    var P = {
        name: "applyStyles",
        enabled: !0,
        phase: "write",
        fn: function (t) {
            var e = t.state;
            Object.keys(e.elements).forEach((function (t) {
                var i = e.styles[t] || {}
                    , n = e.attributes[t] || {}
                    , s = e.elements[t];
                N(s) && L(s) && (Object.assign(s.style, i),
                    Object.keys(n).forEach((function (t) {
                        var e = n[t];
                        !1 === e ? s.removeAttribute(t) : s.setAttribute(t, !0 === e ? "" : e)
                    }
                    )))
            }
            ))
        },
        effect: function (t) {
            var e = t.state
                , i = {
                    popper: {
                        position: e.options.strategy,
                        left: "0",
                        top: "0",
                        margin: "0"
                    },
                    arrow: {
                        position: "absolute"
                    },
                    reference: {}
                };
            return Object.assign(e.elements.popper.style, i.popper),
                e.styles = i,
                e.elements.arrow && Object.assign(e.elements.arrow.style, i.arrow),
                function () {
                    Object.keys(e.elements).forEach((function (t) {
                        var n = e.elements[t]
                            , s = e.attributes[t] || {}
                            , o = Object.keys(e.styles.hasOwnProperty(t) ? e.styles[t] : i[t]).reduce((function (t, e) {
                                return t[e] = "",
                                    t
                            }
                            ), {});
                        N(n) && L(n) && (Object.assign(n.style, o),
                            Object.keys(s).forEach((function (t) {
                                n.removeAttribute(t)
                            }
                            )))
                    }
                    ))
                }
        },
        requires: ["computeStyles"]
    };
    function j(t) {
        return t.split("-")[0]
    }
    var M = Math.max
        , H = Math.min
        , B = Math.round;
    function R(t, e) {
        void 0 === e && (e = !1);
        var i = t.getBoundingClientRect()
            , n = 1
            , s = 1;
        if (N(t) && e) {
            var o = t.offsetHeight
                , r = t.offsetWidth;
            r > 0 && (n = B(i.width) / r || 1),
                o > 0 && (s = B(i.height) / o || 1)
        }
        return {
            width: i.width / n,
            height: i.height / s,
            top: i.top / s,
            right: i.right / n,
            bottom: i.bottom / s,
            left: i.left / n,
            x: i.left / n,
            y: i.top / s
        }
    }
    function W(t) {
        var e = R(t)
            , i = t.offsetWidth
            , n = t.offsetHeight;
        return Math.abs(e.width - i) <= 1 && (i = e.width),
            Math.abs(e.height - n) <= 1 && (n = e.height),
        {
            x: t.offsetLeft,
            y: t.offsetTop,
            width: i,
            height: n
        }
    }
    function $(t, e) {
        var i = e.getRootNode && e.getRootNode();
        if (t.contains(e))
            return !0;
        if (i && I(i)) {
            var n = e;
            do {
                if (n && t.isSameNode(n))
                    return !0;
                n = n.parentNode || n.host
            } while (n)
        }
        return !1
    }
    function z(t) {
        return D(t).getComputedStyle(t)
    }
    function q(t) {
        return ["table", "td", "th"].indexOf(L(t)) >= 0
    }
    function F(t) {
        return ((S(t) ? t.ownerDocument : t.document) || window.document).documentElement
    }
    function U(t) {
        return "html" === L(t) ? t : t.assignedSlot || t.parentNode || (I(t) ? t.host : null) || F(t)
    }
    function V(t) {
        return N(t) && "fixed" !== z(t).position ? t.offsetParent : null
    }
    function K(t) {
        for (var e = D(t), i = V(t); i && q(i) && "static" === z(i).position;)
            i = V(i);
        return i && ("html" === L(i) || "body" === L(i) && "static" === z(i).position) ? e : i || function (t) {
            var e = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
            if (-1 !== navigator.userAgent.indexOf("Trident") && N(t) && "fixed" === z(t).position)
                return null;
            for (var i = U(t); N(i) && ["html", "body"].indexOf(L(i)) < 0;) {
                var n = z(i);
                if ("none" !== n.transform || "none" !== n.perspective || "paint" === n.contain || -1 !== ["transform", "perspective"].indexOf(n.willChange) || e && "filter" === n.willChange || e && n.filter && "none" !== n.filter)
                    return i;
                i = i.parentNode
            }
            return null
        }(t) || e
    }
    function X(t) {
        return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y"
    }
    function Y(t, e, i) {
        return M(t, H(e, i))
    }
    function Q(t) {
        return Object.assign({}, {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }, t)
    }
    function G(t, e) {
        return e.reduce((function (e, i) {
            return e[i] = t,
                e
        }
        ), {})
    }
    var Z = {
        name: "arrow",
        enabled: !0,
        phase: "main",
        fn: function (t) {
            var e, i = t.state, n = t.name, l = t.options, h = i.elements.arrow, u = i.modifiersData.popperOffsets, d = j(i.placement), f = X(d), p = [a, r].indexOf(d) >= 0 ? "height" : "width";
            if (h && u) {
                var m = function (t, e) {
                    return Q("number" != typeof (t = "function" == typeof t ? t(Object.assign({}, e.rects, {
                        placement: e.placement
                    })) : t) ? t : G(t, c))
                }(l.padding, i)
                    , g = W(h)
                    , _ = "y" === f ? s : a
                    , b = "y" === f ? o : r
                    , v = i.rects.reference[p] + i.rects.reference[f] - u[f] - i.rects.popper[p]
                    , y = u[f] - i.rects.reference[f]
                    , w = K(h)
                    , E = w ? "y" === f ? w.clientHeight || 0 : w.clientWidth || 0 : 0
                    , A = v / 2 - y / 2
                    , O = m[_]
                    , T = E - g[p] - m[b]
                    , C = E / 2 - g[p] / 2 + A
                    , x = Y(O, C, T)
                    , k = f;
                i.modifiersData[n] = ((e = {})[k] = x,
                    e.centerOffset = x - C,
                    e)
            }
        },
        effect: function (t) {
            var e = t.state
                , i = t.options.element
                , n = void 0 === i ? "[data-popper-arrow]" : i;
            null != n && ("string" != typeof n || (n = e.elements.popper.querySelector(n))) && $(e.elements.popper, n) && (e.elements.arrow = n)
        },
        requires: ["popperOffsets"],
        requiresIfExists: ["preventOverflow"]
    };
    function J(t) {
        return t.split("-")[1]
    }
    var tt = {
        top: "auto",
        right: "auto",
        bottom: "auto",
        left: "auto"
    };
    function et(t) {
        var e, i = t.popper, n = t.popperRect, l = t.placement, c = t.variation, h = t.offsets, d = t.position, f = t.gpuAcceleration, p = t.adaptive, m = t.roundOffsets, g = t.isFixed, _ = h.x, b = void 0 === _ ? 0 : _, v = h.y, y = void 0 === v ? 0 : v, w = "function" == typeof m ? m({
            x: b,
            y: y
        }) : {
            x: b,
            y: y
        };
        b = w.x,
            y = w.y;
        var E = h.hasOwnProperty("x")
            , A = h.hasOwnProperty("y")
            , O = a
            , T = s
            , C = window;
        if (p) {
            var x = K(i)
                , k = "clientHeight"
                , L = "clientWidth";
            if (x === D(i) && "static" !== z(x = F(i)).position && "absolute" === d && (k = "scrollHeight",
                L = "scrollWidth"),
                l === s || (l === a || l === r) && c === u)
                T = o,
                    y -= (g && C.visualViewport ? C.visualViewport.height : x[k]) - n.height,
                    y *= f ? 1 : -1;
            if (l === a || (l === s || l === o) && c === u)
                O = r,
                    b -= (g && C.visualViewport ? C.visualViewport.width : x[L]) - n.width,
                    b *= f ? 1 : -1
        }
        var S, N = Object.assign({
            position: d
        }, p && tt), I = !0 === m ? function (t) {
            var e = t.x
                , i = t.y
                , n = window.devicePixelRatio || 1;
            return {
                x: B(e * n) / n || 0,
                y: B(i * n) / n || 0
            }
        }({
            x: b,
            y: y
        }) : {
            x: b,
            y: y
        };
        return b = I.x,
            y = I.y,
            f ? Object.assign({}, N, ((S = {})[T] = A ? "0" : "",
                S[O] = E ? "0" : "",
                S.transform = (C.devicePixelRatio || 1) <= 1 ? "translate(" + b + "px, " + y + "px)" : "translate3d(" + b + "px, " + y + "px, 0)",
                S)) : Object.assign({}, N, ((e = {})[T] = A ? y + "px" : "",
                    e[O] = E ? b + "px" : "",
                    e.transform = "",
                    e))
    }
    var it = {
        name: "computeStyles",
        enabled: !0,
        phase: "beforeWrite",
        fn: function (t) {
            var e = t.state
                , i = t.options
                , n = i.gpuAcceleration
                , s = void 0 === n || n
                , o = i.adaptive
                , r = void 0 === o || o
                , a = i.roundOffsets
                , l = void 0 === a || a
                , c = {
                    placement: j(e.placement),
                    variation: J(e.placement),
                    popper: e.elements.popper,
                    popperRect: e.rects.popper,
                    gpuAcceleration: s,
                    isFixed: "fixed" === e.options.strategy
                };
            null != e.modifiersData.popperOffsets && (e.styles.popper = Object.assign({}, e.styles.popper, et(Object.assign({}, c, {
                offsets: e.modifiersData.popperOffsets,
                position: e.options.strategy,
                adaptive: r,
                roundOffsets: l
            })))),
                null != e.modifiersData.arrow && (e.styles.arrow = Object.assign({}, e.styles.arrow, et(Object.assign({}, c, {
                    offsets: e.modifiersData.arrow,
                    position: "absolute",
                    adaptive: !1,
                    roundOffsets: l
                })))),
                e.attributes.popper = Object.assign({}, e.attributes.popper, {
                    "data-popper-placement": e.placement
                })
        },
        data: {}
    }
        , nt = {
            passive: !0
        };
    var st = {
        name: "eventListeners",
        enabled: !0,
        phase: "write",
        fn: function () { },
        effect: function (t) {
            var e = t.state
                , i = t.instance
                , n = t.options
                , s = n.scroll
                , o = void 0 === s || s
                , r = n.resize
                , a = void 0 === r || r
                , l = D(e.elements.popper)
                , c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
            return o && c.forEach((function (t) {
                t.addEventListener("scroll", i.update, nt)
            }
            )),
                a && l.addEventListener("resize", i.update, nt),
                function () {
                    o && c.forEach((function (t) {
                        t.removeEventListener("scroll", i.update, nt)
                    }
                    )),
                        a && l.removeEventListener("resize", i.update, nt)
                }
        },
        data: {}
    }
        , ot = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        };
    function rt(t) {
        return t.replace(/left|right|bottom|top/g, (function (t) {
            return ot[t]
        }
        ))
    }
    var at = {
        start: "end",
        end: "start"
    };
    function lt(t) {
        return t.replace(/start|end/g, (function (t) {
            return at[t]
        }
        ))
    }
    function ct(t) {
        var e = D(t);
        return {
            scrollLeft: e.pageXOffset,
            scrollTop: e.pageYOffset
        }
    }
    function ht(t) {
        return R(F(t)).left + ct(t).scrollLeft
    }
    function ut(t) {
        var e = z(t)
            , i = e.overflow
            , n = e.overflowX
            , s = e.overflowY;
        return /auto|scroll|overlay|hidden/.test(i + s + n)
    }
    function dt(t) {
        return ["html", "body", "#document"].indexOf(L(t)) >= 0 ? t.ownerDocument.body : N(t) && ut(t) ? t : dt(U(t))
    }
    function ft(t, e) {
        var i;
        void 0 === e && (e = []);
        var n = dt(t)
            , s = n === (null == (i = t.ownerDocument) ? void 0 : i.body)
            , o = D(n)
            , r = s ? [o].concat(o.visualViewport || [], ut(n) ? n : []) : n
            , a = e.concat(r);
        return s ? a : a.concat(ft(U(r)))
    }
    function pt(t) {
        return Object.assign({}, t, {
            left: t.x,
            top: t.y,
            right: t.x + t.width,
            bottom: t.y + t.height
        })
    }
    function mt(t, e) {
        return e === f ? pt(function (t) {
            var e = D(t)
                , i = F(t)
                , n = e.visualViewport
                , s = i.clientWidth
                , o = i.clientHeight
                , r = 0
                , a = 0;
            return n && (s = n.width,
                o = n.height,
                /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (r = n.offsetLeft,
                    a = n.offsetTop)),
            {
                width: s,
                height: o,
                x: r + ht(t),
                y: a
            }
        }(t)) : S(e) ? function (t) {
            var e = R(t);
            return e.top = e.top + t.clientTop,
                e.left = e.left + t.clientLeft,
                e.bottom = e.top + t.clientHeight,
                e.right = e.left + t.clientWidth,
                e.width = t.clientWidth,
                e.height = t.clientHeight,
                e.x = e.left,
                e.y = e.top,
                e
        }(e) : pt(function (t) {
            var e, i = F(t), n = ct(t), s = null == (e = t.ownerDocument) ? void 0 : e.body, o = M(i.scrollWidth, i.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0), r = M(i.scrollHeight, i.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0), a = -n.scrollLeft + ht(t), l = -n.scrollTop;
            return "rtl" === z(s || i).direction && (a += M(i.clientWidth, s ? s.clientWidth : 0) - o),
            {
                width: o,
                height: r,
                x: a,
                y: l
            }
        }(F(t)))
    }
    function gt(t, e, i) {
        var n = "clippingParents" === e ? function (t) {
            var e = ft(U(t))
                , i = ["absolute", "fixed"].indexOf(z(t).position) >= 0 && N(t) ? K(t) : t;
            return S(i) ? e.filter((function (t) {
                return S(t) && $(t, i) && "body" !== L(t)
            }
            )) : []
        }(t) : [].concat(e)
            , s = [].concat(n, [i])
            , o = s[0]
            , r = s.reduce((function (e, i) {
                var n = mt(t, i);
                return e.top = M(n.top, e.top),
                    e.right = H(n.right, e.right),
                    e.bottom = H(n.bottom, e.bottom),
                    e.left = M(n.left, e.left),
                    e
            }
            ), mt(t, o));
        return r.width = r.right - r.left,
            r.height = r.bottom - r.top,
            r.x = r.left,
            r.y = r.top,
            r
    }
    function _t(t) {
        var e, i = t.reference, n = t.element, l = t.placement, c = l ? j(l) : null, d = l ? J(l) : null, f = i.x + i.width / 2 - n.width / 2, p = i.y + i.height / 2 - n.height / 2;
        switch (c) {
            case s:
                e = {
                    x: f,
                    y: i.y - n.height
                };
                break;
            case o:
                e = {
                    x: f,
                    y: i.y + i.height
                };
                break;
            case r:
                e = {
                    x: i.x + i.width,
                    y: p
                };
                break;
            case a:
                e = {
                    x: i.x - n.width,
                    y: p
                };
                break;
            default:
                e = {
                    x: i.x,
                    y: i.y
                }
        }
        var m = c ? X(c) : null;
        if (null != m) {
            var g = "y" === m ? "height" : "width";
            switch (d) {
                case h:
                    e[m] = e[m] - (i[g] / 2 - n[g] / 2);
                    break;
                case u:
                    e[m] = e[m] + (i[g] / 2 - n[g] / 2)
            }
        }
        return e
    }
    function bt(t, e) {
        void 0 === e && (e = {});
        var i = e
            , n = i.placement
            , a = void 0 === n ? t.placement : n
            , l = i.boundary
            , h = void 0 === l ? d : l
            , u = i.rootBoundary
            , g = void 0 === u ? f : u
            , _ = i.elementContext
            , b = void 0 === _ ? p : _
            , v = i.altBoundary
            , y = void 0 !== v && v
            , w = i.padding
            , E = void 0 === w ? 0 : w
            , A = Q("number" != typeof E ? E : G(E, c))
            , O = b === p ? m : p
            , T = t.rects.popper
            , C = t.elements[y ? O : b]
            , x = gt(S(C) ? C : C.contextElement || F(t.elements.popper), h, g)
            , k = R(t.elements.reference)
            , L = _t({
                reference: k,
                element: T,
                strategy: "absolute",
                placement: a
            })
            , D = pt(Object.assign({}, T, L))
            , N = b === p ? D : k
            , I = {
                top: x.top - N.top + A.top,
                bottom: N.bottom - x.bottom + A.bottom,
                left: x.left - N.left + A.left,
                right: N.right - x.right + A.right
            }
            , P = t.modifiersData.offset;
        if (b === p && P) {
            var j = P[a];
            Object.keys(I).forEach((function (t) {
                var e = [r, o].indexOf(t) >= 0 ? 1 : -1
                    , i = [s, o].indexOf(t) >= 0 ? "y" : "x";
                I[t] += j[i] * e
            }
            ))
        }
        return I
    }
    var vt = {
        name: "flip",
        enabled: !0,
        phase: "main",
        fn: function (t) {
            var e = t.state
                , i = t.options
                , n = t.name;
            if (!e.modifiersData[n]._skip) {
                for (var u = i.mainAxis, d = void 0 === u || u, f = i.altAxis, p = void 0 === f || f, m = i.fallbackPlacements, b = i.padding, v = i.boundary, y = i.rootBoundary, w = i.altBoundary, E = i.flipVariations, A = void 0 === E || E, O = i.allowedAutoPlacements, T = e.options.placement, C = j(T), x = m || (C === T || !A ? [rt(T)] : function (t) {
                    if (j(t) === l)
                        return [];
                    var e = rt(t);
                    return [lt(t), e, lt(e)]
                }(T)), k = [T].concat(x).reduce((function (t, i) {
                    return t.concat(j(i) === l ? function (t, e) {
                        void 0 === e && (e = {});
                        var i = e
                            , n = i.placement
                            , s = i.boundary
                            , o = i.rootBoundary
                            , r = i.padding
                            , a = i.flipVariations
                            , l = i.allowedAutoPlacements
                            , h = void 0 === l ? _ : l
                            , u = J(n)
                            , d = u ? a ? g : g.filter((function (t) {
                                return J(t) === u
                            }
                            )) : c
                            , f = d.filter((function (t) {
                                return h.indexOf(t) >= 0
                            }
                            ));
                        0 === f.length && (f = d);
                        var p = f.reduce((function (e, i) {
                            return e[i] = bt(t, {
                                placement: i,
                                boundary: s,
                                rootBoundary: o,
                                padding: r
                            })[j(i)],
                                e
                        }
                        ), {});
                        return Object.keys(p).sort((function (t, e) {
                            return p[t] - p[e]
                        }
                        ))
                    }(e, {
                        placement: i,
                        boundary: v,
                        rootBoundary: y,
                        padding: b,
                        flipVariations: A,
                        allowedAutoPlacements: O
                    }) : i)
                }
                ), []), L = e.rects.reference, D = e.rects.popper, S = new Map, N = !0, I = k[0], P = 0; P < k.length; P++) {
                    var M = k[P]
                        , H = j(M)
                        , B = J(M) === h
                        , R = [s, o].indexOf(H) >= 0
                        , W = R ? "width" : "height"
                        , $ = bt(e, {
                            placement: M,
                            boundary: v,
                            rootBoundary: y,
                            altBoundary: w,
                            padding: b
                        })
                        , z = R ? B ? r : a : B ? o : s;
                    L[W] > D[W] && (z = rt(z));
                    var q = rt(z)
                        , F = [];
                    if (d && F.push($[H] <= 0),
                        p && F.push($[z] <= 0, $[q] <= 0),
                        F.every((function (t) {
                            return t
                        }
                        ))) {
                        I = M,
                            N = !1;
                        break
                    }
                    S.set(M, F)
                }
                if (N)
                    for (var U = function (t) {
                        var e = k.find((function (e) {
                            var i = S.get(e);
                            if (i)
                                return i.slice(0, t).every((function (t) {
                                    return t
                                }
                                ))
                        }
                        ));
                        if (e)
                            return I = e,
                                "break"
                    }, V = A ? 3 : 1; V > 0; V--) {
                        if ("break" === U(V))
                            break
                    }
                e.placement !== I && (e.modifiersData[n]._skip = !0,
                    e.placement = I,
                    e.reset = !0)
            }
        },
        requiresIfExists: ["offset"],
        data: {
            _skip: !1
        }
    };
    function yt(t, e, i) {
        return void 0 === i && (i = {
            x: 0,
            y: 0
        }),
        {
            top: t.top - e.height - i.y,
            right: t.right - e.width + i.x,
            bottom: t.bottom - e.height + i.y,
            left: t.left - e.width - i.x
        }
    }
    function wt(t) {
        return [s, r, o, a].some((function (e) {
            return t[e] >= 0
        }
        ))
    }
    var Et = {
        name: "hide",
        enabled: !0,
        phase: "main",
        requiresIfExists: ["preventOverflow"],
        fn: function (t) {
            var e = t.state
                , i = t.name
                , n = e.rects.reference
                , s = e.rects.popper
                , o = e.modifiersData.preventOverflow
                , r = bt(e, {
                    elementContext: "reference"
                })
                , a = bt(e, {
                    altBoundary: !0
                })
                , l = yt(r, n)
                , c = yt(a, s, o)
                , h = wt(l)
                , u = wt(c);
            e.modifiersData[i] = {
                referenceClippingOffsets: l,
                popperEscapeOffsets: c,
                isReferenceHidden: h,
                hasPopperEscaped: u
            },
                e.attributes.popper = Object.assign({}, e.attributes.popper, {
                    "data-popper-reference-hidden": h,
                    "data-popper-escaped": u
                })
        }
    };
    var At = {
        name: "offset",
        enabled: !0,
        phase: "main",
        requires: ["popperOffsets"],
        fn: function (t) {
            var e = t.state
                , i = t.options
                , n = t.name
                , o = i.offset
                , l = void 0 === o ? [0, 0] : o
                , c = _.reduce((function (t, i) {
                    return t[i] = function (t, e, i) {
                        var n = j(t)
                            , o = [a, s].indexOf(n) >= 0 ? -1 : 1
                            , l = "function" == typeof i ? i(Object.assign({}, e, {
                                placement: t
                            })) : i
                            , c = l[0]
                            , h = l[1];
                        return c = c || 0,
                            h = (h || 0) * o,
                            [a, r].indexOf(n) >= 0 ? {
                                x: h,
                                y: c
                            } : {
                                x: c,
                                y: h
                            }
                    }(i, e.rects, l),
                        t
                }
                ), {})
                , h = c[e.placement]
                , u = h.x
                , d = h.y;
            null != e.modifiersData.popperOffsets && (e.modifiersData.popperOffsets.x += u,
                e.modifiersData.popperOffsets.y += d),
                e.modifiersData[n] = c
        }
    };
    var Ot = {
        name: "popperOffsets",
        enabled: !0,
        phase: "read",
        fn: function (t) {
            var e = t.state
                , i = t.name;
            e.modifiersData[i] = _t({
                reference: e.rects.reference,
                element: e.rects.popper,
                strategy: "absolute",
                placement: e.placement
            })
        },
        data: {}
    };
    var Tt = {
        name: "preventOverflow",
        enabled: !0,
        phase: "main",
        fn: function (t) {
            var e = t.state
                , i = t.options
                , n = t.name
                , l = i.mainAxis
                , c = void 0 === l || l
                , u = i.altAxis
                , d = void 0 !== u && u
                , f = i.boundary
                , p = i.rootBoundary
                , m = i.altBoundary
                , g = i.padding
                , _ = i.tether
                , b = void 0 === _ || _
                , v = i.tetherOffset
                , y = void 0 === v ? 0 : v
                , w = bt(e, {
                    boundary: f,
                    rootBoundary: p,
                    padding: g,
                    altBoundary: m
                })
                , E = j(e.placement)
                , A = J(e.placement)
                , O = !A
                , T = X(E)
                , C = "x" === T ? "y" : "x"
                , x = e.modifiersData.popperOffsets
                , k = e.rects.reference
                , L = e.rects.popper
                , D = "function" == typeof y ? y(Object.assign({}, e.rects, {
                    placement: e.placement
                })) : y
                , S = "number" == typeof D ? {
                    mainAxis: D,
                    altAxis: D
                } : Object.assign({
                    mainAxis: 0,
                    altAxis: 0
                }, D)
                , N = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null
                , I = {
                    x: 0,
                    y: 0
                };
            if (x) {
                if (c) {
                    var P, B = "y" === T ? s : a, R = "y" === T ? o : r, $ = "y" === T ? "height" : "width", z = x[T], q = z + w[B], F = z - w[R], U = b ? -L[$] / 2 : 0, V = A === h ? k[$] : L[$], Q = A === h ? -L[$] : -k[$], G = e.elements.arrow, Z = b && G ? W(G) : {
                        width: 0,
                        height: 0
                    }, tt = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0
                    }, et = tt[B], it = tt[R], nt = Y(0, k[$], Z[$]), st = O ? k[$] / 2 - U - nt - et - S.mainAxis : V - nt - et - S.mainAxis, ot = O ? -k[$] / 2 + U + nt + it + S.mainAxis : Q + nt + it + S.mainAxis, rt = e.elements.arrow && K(e.elements.arrow), at = rt ? "y" === T ? rt.clientTop || 0 : rt.clientLeft || 0 : 0, lt = null != (P = null == N ? void 0 : N[T]) ? P : 0, ct = z + ot - lt, ht = Y(b ? H(q, z + st - lt - at) : q, z, b ? M(F, ct) : F);
                    x[T] = ht,
                        I[T] = ht - z
                }
                if (d) {
                    var ut, dt = "x" === T ? s : a, ft = "x" === T ? o : r, pt = x[C], mt = "y" === C ? "height" : "width", gt = pt + w[dt], _t = pt - w[ft], vt = -1 !== [s, a].indexOf(E), yt = null != (ut = null == N ? void 0 : N[C]) ? ut : 0, wt = vt ? gt : pt - k[mt] - L[mt] - yt + S.altAxis, Et = vt ? pt + k[mt] + L[mt] - yt - S.altAxis : _t, At = b && vt ? function (t, e, i) {
                        var n = Y(t, e, i);
                        return n > i ? i : n
                    }(wt, pt, Et) : Y(b ? wt : gt, pt, b ? Et : _t);
                    x[C] = At,
                        I[C] = At - pt
                }
                e.modifiersData[n] = I
            }
        },
        requiresIfExists: ["offset"]
    };
    function Ct(t, e, i) {
        void 0 === i && (i = !1);
        var n, s, o = N(e), r = N(e) && function (t) {
            var e = t.getBoundingClientRect()
                , i = B(e.width) / t.offsetWidth || 1
                , n = B(e.height) / t.offsetHeight || 1;
            return 1 !== i || 1 !== n
        }(e), a = F(e), l = R(t, r), c = {
            scrollLeft: 0,
            scrollTop: 0
        }, h = {
            x: 0,
            y: 0
        };
        return (o || !o && !i) && (("body" !== L(e) || ut(a)) && (c = (n = e) !== D(n) && N(n) ? {
            scrollLeft: (s = n).scrollLeft,
            scrollTop: s.scrollTop
        } : ct(n)),
            N(e) ? ((h = R(e, !0)).x += e.clientLeft,
                h.y += e.clientTop) : a && (h.x = ht(a))),
        {
            x: l.left + c.scrollLeft - h.x,
            y: l.top + c.scrollTop - h.y,
            width: l.width,
            height: l.height
        }
    }
    function xt(t) {
        var e = new Map
            , i = new Set
            , n = [];
        function s(t) {
            i.add(t.name),
                [].concat(t.requires || [], t.requiresIfExists || []).forEach((function (t) {
                    if (!i.has(t)) {
                        var n = e.get(t);
                        n && s(n)
                    }
                }
                )),
                n.push(t)
        }
        return t.forEach((function (t) {
            e.set(t.name, t)
        }
        )),
            t.forEach((function (t) {
                i.has(t.name) || s(t)
            }
            )),
            n
    }
    var kt = {
        placement: "bottom",
        modifiers: [],
        strategy: "absolute"
    };
    function Lt() {
        for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
            e[i] = arguments[i];
        return !e.some((function (t) {
            return !(t && "function" == typeof t.getBoundingClientRect)
        }
        ))
    }
    function Dt(t) {
        void 0 === t && (t = {});
        var e = t
            , i = e.defaultModifiers
            , n = void 0 === i ? [] : i
            , s = e.defaultOptions
            , o = void 0 === s ? kt : s;
        return function (t, e, i) {
            void 0 === i && (i = o);
            var s, r, a = {
                placement: "bottom",
                orderedModifiers: [],
                options: Object.assign({}, kt, o),
                modifiersData: {},
                elements: {
                    reference: t,
                    popper: e
                },
                attributes: {},
                styles: {}
            }, l = [], c = !1, h = {
                state: a,
                setOptions: function (i) {
                    var s = "function" == typeof i ? i(a.options) : i;
                    u(),
                        a.options = Object.assign({}, o, a.options, s),
                        a.scrollParents = {
                            reference: S(t) ? ft(t) : t.contextElement ? ft(t.contextElement) : [],
                            popper: ft(e)
                        };
                    var r = function (t) {
                        var e = xt(t);
                        return x.reduce((function (t, i) {
                            return t.concat(e.filter((function (t) {
                                return t.phase === i
                            }
                            )))
                        }
                        ), [])
                    }(function (t) {
                        var e = t.reduce((function (t, e) {
                            var i = t[e.name];
                            return t[e.name] = i ? Object.assign({}, i, e, {
                                options: Object.assign({}, i.options, e.options),
                                data: Object.assign({}, i.data, e.data)
                            }) : e,
                                t
                        }
                        ), {});
                        return Object.keys(e).map((function (t) {
                            return e[t]
                        }
                        ))
                    }([].concat(n, a.options.modifiers)));
                    return a.orderedModifiers = r.filter((function (t) {
                        return t.enabled
                    }
                    )),
                        a.orderedModifiers.forEach((function (t) {
                            var e = t.name
                                , i = t.options
                                , n = void 0 === i ? {} : i
                                , s = t.effect;
                            if ("function" == typeof s) {
                                var o = s({
                                    state: a,
                                    name: e,
                                    instance: h,
                                    options: n
                                })
                                    , r = function () { };
                                l.push(o || r)
                            }
                        }
                        )),
                        h.update()
                },
                forceUpdate: function () {
                    if (!c) {
                        var t = a.elements
                            , e = t.reference
                            , i = t.popper;
                        if (Lt(e, i)) {
                            a.rects = {
                                reference: Ct(e, K(i), "fixed" === a.options.strategy),
                                popper: W(i)
                            },
                                a.reset = !1,
                                a.placement = a.options.placement,
                                a.orderedModifiers.forEach((function (t) {
                                    return a.modifiersData[t.name] = Object.assign({}, t.data)
                                }
                                ));
                            for (var n = 0; n < a.orderedModifiers.length; n++)
                                if (!0 !== a.reset) {
                                    var s = a.orderedModifiers[n]
                                        , o = s.fn
                                        , r = s.options
                                        , l = void 0 === r ? {} : r
                                        , u = s.name;
                                    "function" == typeof o && (a = o({
                                        state: a,
                                        options: l,
                                        name: u,
                                        instance: h
                                    }) || a)
                                } else
                                    a.reset = !1,
                                        n = -1
                        }
                    }
                },
                update: (s = function () {
                    return new Promise((function (t) {
                        h.forceUpdate(),
                            t(a)
                    }
                    ))
                }
                    ,
                    function () {
                        return r || (r = new Promise((function (t) {
                            Promise.resolve().then((function () {
                                r = void 0,
                                    t(s())
                            }
                            ))
                        }
                        ))),
                            r
                    }
                ),
                destroy: function () {
                    u(),
                        c = !0
                }
            };
            if (!Lt(t, e))
                return h;
            function u() {
                l.forEach((function (t) {
                    return t()
                }
                )),
                    l = []
            }
            return h.setOptions(i).then((function (t) {
                !c && i.onFirstUpdate && i.onFirstUpdate(t)
            }
            )),
                h
        }
    }
    var St = Dt()
        , Nt = Dt({
            defaultModifiers: [st, Ot, it, P, At, vt, Tt, Z, Et]
        })
        , It = Dt({
            defaultModifiers: [st, Ot, it, P]
        });
    e(i, n),
        e(i, k);
    const Pt = "transitionend"
        , jt = t => {
            let e = t.getAttribute("data-bs-target");
            if (!e || "#" === e) {
                let i = t.getAttribute("href");
                if (!i || !i.includes("#") && !i.startsWith("."))
                    return null;
                i.includes("#") && !i.startsWith("#") && (i = `#${i.split("#")[1]}`),
                    e = i && "#" !== i ? i.trim() : null
            }
            return e
        }
        , Mt = t => {
            const e = jt(t);
            return e && document.querySelector(e) ? e : null
        }
        , Ht = t => {
            const e = jt(t);
            return e ? document.querySelector(e) : null
        }
        , Bt = t => {
            t.dispatchEvent(new Event(Pt))
        }
        , Rt = t => !(!t || "object" != typeof t) && (void 0 !== t.jquery && (t = t[0]),
            void 0 !== t.nodeType)
        , Wt = t => Rt(t) ? t.jquery ? t[0] : t : "string" == typeof t && t.length > 0 ? document.querySelector(t) : null
        , $t = (t, e, i) => {
            Object.keys(i).forEach((n => {
                const s = i[n]
                    , o = e[n]
                    , r = o && Rt(o) ? "element" : null == (a = o) ? `${a}` : {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase();
                var a;
                if (!new RegExp(s).test(r))
                    throw new TypeError(`${t.toUpperCase()}: Option "${n}" provided type "${r}" but expected type "${s}".`)
            }
            ))
        }
        , zt = t => !(!Rt(t) || 0 === t.getClientRects().length) && "visible" === getComputedStyle(t).getPropertyValue("visibility")
        , qt = t => !t || t.nodeType !== Node.ELEMENT_NODE || (!!t.classList.contains("disabled") || (void 0 !== t.disabled ? t.disabled : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled")))
        , Ft = t => {
            if (!document.documentElement.attachShadow)
                return null;
            if ("function" == typeof t.getRootNode) {
                const e = t.getRootNode();
                return e instanceof ShadowRoot ? e : null
            }
            return t instanceof ShadowRoot ? t : t.parentNode ? Ft(t.parentNode) : null
        }
        , Ut = () => { }
        , Vt = t => {
            t.offsetHeight
        }
        , Kt = () => {
            const { jQuery: t } = window;
            return t && !document.body.hasAttribute("data-bs-no-jquery") ? t : null
        }
        , Xt = []
        , Yt = () => "rtl" === document.documentElement.dir
        , Qt = t => {
            var e;
            e = () => {
                const e = Kt();
                if (e) {
                    const i = t.NAME
                        , n = e.fn[i];
                    e.fn[i] = t.jQueryInterface,
                        e.fn[i].Constructor = t,
                        e.fn[i].noConflict = () => (e.fn[i] = n,
                            t.jQueryInterface)
                }
            }
                ,
                "loading" === document.readyState ? (Xt.length || document.addEventListener("DOMContentLoaded", (() => {
                    Xt.forEach((t => t()))
                }
                )),
                    Xt.push(e)) : e()
        }
        , Gt = t => {
            "function" == typeof t && t()
        }
        , Zt = (t, e, i = !0) => {
            if (!i)
                return void Gt(t);
            const n = (t => {
                if (!t)
                    return 0;
                let { transitionDuration: e, transitionDelay: i } = window.getComputedStyle(t);
                const n = Number.parseFloat(e)
                    , s = Number.parseFloat(i);
                return n || s ? (e = e.split(",")[0],
                    i = i.split(",")[0],
                    1e3 * (Number.parseFloat(e) + Number.parseFloat(i))) : 0
            }
            )(e) + 5;
            let s = !1;
            const o = ({ target: i }) => {
                i === e && (s = !0,
                    e.removeEventListener(Pt, o),
                    Gt(t))
            }
                ;
            e.addEventListener(Pt, o),
                setTimeout((() => {
                    s || Bt(e)
                }
                ), n)
        }
        , Jt = (t, e, i, n) => {
            let s = t.indexOf(e);
            if (-1 === s)
                return t[!i && n ? t.length - 1 : 0];
            const o = t.length;
            return s += i ? 1 : -1,
                n && (s = (s + o) % o),
                t[Math.max(0, Math.min(s, o - 1))]
        }
        , te = /[^.]*(?=\..*)\.|.*/
        , ee = /\..*/
        , ie = /::\d+$/
        , ne = {};
    let se = 1;
    const oe = {
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }
        , re = /^(mouseenter|mouseleave)/i
        , ae = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
    function le(t, e) {
        return e && `${e}::${se++}` || t.uidEvent || se++
    }
    function ce(t) {
        const e = le(t);
        return t.uidEvent = e,
            ne[e] = ne[e] || {},
            ne[e]
    }
    function he(t, e, i = null) {
        const n = Object.keys(t);
        for (let s = 0, o = n.length; s < o; s++) {
            const o = t[n[s]];
            if (o.originalHandler === e && o.delegationSelector === i)
                return o
        }
        return null
    }
    function ue(t, e, i) {
        const n = "string" == typeof e
            , s = n ? i : e;
        let o = pe(t);
        return ae.has(o) || (o = t),
            [n, s, o]
    }
    function de(t, e, i, n, s) {
        if ("string" != typeof e || !t)
            return;
        if (i || (i = n,
            n = null),
            re.test(e)) {
            const t = t => function (e) {
                if (!e.relatedTarget || e.relatedTarget !== e.delegateTarget && !e.delegateTarget.contains(e.relatedTarget))
                    return t.call(this, e)
            }
                ;
            n ? n = t(n) : i = t(i)
        }
        const [o, r, a] = ue(e, i, n)
            , l = ce(t)
            , c = l[a] || (l[a] = {})
            , h = he(c, r, o ? i : null);
        if (h)
            return void (h.oneOff = h.oneOff && s);
        const u = le(r, e.replace(te, ""))
            , d = o ? function (t, e, i) {
                return function n(s) {
                    const o = t.querySelectorAll(e);
                    for (let { target: r } = s; r && r !== this; r = r.parentNode)
                        for (let a = o.length; a--;)
                            if (o[a] === r)
                                return s.delegateTarget = r,
                                    n.oneOff && me.off(t, s.type, e, i),
                                    i.apply(r, [s]);
                    return null
                }
            }(t, i, n) : function (t, e) {
                return function i(n) {
                    return n.delegateTarget = t,
                        i.oneOff && me.off(t, n.type, e),
                        e.apply(t, [n])
                }
            }(t, i);
        d.delegationSelector = o ? i : null,
            d.originalHandler = r,
            d.oneOff = s,
            d.uidEvent = u,
            c[u] = d,
            t.addEventListener(a, d, o)
    }
    function fe(t, e, i, n, s) {
        const o = he(e[i], n, s);
        o && (t.removeEventListener(i, o, Boolean(s)),
            delete e[i][o.uidEvent])
    }
    function pe(t) {
        return t = t.replace(ee, ""),
            oe[t] || t
    }
    const me = {
        on(t, e, i, n) {
            de(t, e, i, n, !1)
        },
        one(t, e, i, n) {
            de(t, e, i, n, !0)
        },
        off(t, e, i, n) {
            if ("string" != typeof e || !t)
                return;
            const [s, o, r] = ue(e, i, n)
                , a = r !== e
                , l = ce(t)
                , c = e.startsWith(".");
            if (void 0 !== o) {
                if (!l || !l[r])
                    return;
                return void fe(t, l, r, o, s ? i : null)
            }
            c && Object.keys(l).forEach((i => {
                !function (t, e, i, n) {
                    const s = e[i] || {};
                    Object.keys(s).forEach((o => {
                        if (o.includes(n)) {
                            const n = s[o];
                            fe(t, e, i, n.originalHandler, n.delegationSelector)
                        }
                    }
                    ))
                }(t, l, i, e.slice(1))
            }
            ));
            const h = l[r] || {};
            Object.keys(h).forEach((i => {
                const n = i.replace(ie, "");
                if (!a || e.includes(n)) {
                    const e = h[i];
                    fe(t, l, r, e.originalHandler, e.delegationSelector)
                }
            }
            ))
        },
        trigger(t, e, i) {
            if ("string" != typeof e || !t)
                return null;
            const n = Kt()
                , s = pe(e)
                , o = e !== s
                , r = ae.has(s);
            let a, l = !0, c = !0, h = !1, u = null;
            return o && n && (a = n.Event(e, i),
                n(t).trigger(a),
                l = !a.isPropagationStopped(),
                c = !a.isImmediatePropagationStopped(),
                h = a.isDefaultPrevented()),
                r ? (u = document.createEvent("HTMLEvents"),
                    u.initEvent(s, l, !0)) : u = new CustomEvent(e, {
                        bubbles: l,
                        cancelable: !0
                    }),
                void 0 !== i && Object.keys(i).forEach((t => {
                    Object.defineProperty(u, t, {
                        get: () => i[t]
                    })
                }
                )),
                h && u.preventDefault(),
                c && t.dispatchEvent(u),
                u.defaultPrevented && void 0 !== a && a.preventDefault(),
                u
        }
    }
        , ge = new Map
        , _e = {
            set(t, e, i) {
                ge.has(t) || ge.set(t, new Map);
                const n = ge.get(t);
                n.has(e) || 0 === n.size ? n.set(e, i) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(n.keys())[0]}.`)
            },
            get: (t, e) => ge.has(t) && ge.get(t).get(e) || null,
            remove(t, e) {
                if (!ge.has(t))
                    return;
                const i = ge.get(t);
                i.delete(e),
                    0 === i.size && ge.delete(t)
            }
        };
    class be {
        dispose() {
            _e.remove(this._element, this.constructor.DATA_KEY),
                me.off(this._element, this.constructor.EVENT_KEY),
                Object.getOwnPropertyNames(this).forEach((t => {
                    this[t] = null
                }
                ))
        }
        _queueCallback(t, e, i = !0) {
            Zt(t, e, i)
        }
        static getInstance(t) {
            return _e.get(Wt(t), this.DATA_KEY)
        }
        static getOrCreateInstance(t, e = {}) {
            return this.getInstance(t) || new this(t, "object" == typeof e ? e : null)
        }
        static get VERSION() {
            return "5.1.3"
        }
        static get NAME() {
            throw new Error('You have to implement the static method "NAME", for each component!')
        }
        static get DATA_KEY() {
            return `bs.${this.NAME}`
        }
        static get EVENT_KEY() {
            return `.${this.DATA_KEY}`
        }
        constructor(t) {
            (t = Wt(t)) && (this._element = t,
                _e.set(this._element, this.constructor.DATA_KEY, this))
        }
    }
    const ve = (t, e = "hide") => {
        const i = `click.dismiss${t.EVENT_KEY}`
            , n = t.NAME;
        me.on(document, i, `[data-bs-dismiss="${n}"]`, (function (i) {
            if (["A", "AREA"].includes(this.tagName) && i.preventDefault(),
                qt(this))
                return;
            const s = Ht(this) || this.closest(`.${n}`);
            t.getOrCreateInstance(s)[e]()
        }
        ))
    }
        ;
    class ye extends be {
        static get NAME() {
            return "alert"
        }
        close() {
            if (me.trigger(this._element, "close.bs.alert").defaultPrevented)
                return;
            this._element.classList.remove("show");
            const t = this._element.classList.contains("fade");
            this._queueCallback((() => this._destroyElement()), this._element, t)
        }
        _destroyElement() {
            this._element.remove(),
                me.trigger(this._element, "closed.bs.alert"),
                this.dispose()
        }
        static jQueryInterface(t) {
            return this.each((function () {
                const e = ye.getOrCreateInstance(this);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
                        throw new TypeError(`No method named "${t}"`);
                    e[t](this)
                }
            }
            ))
        }
    }
    ve(ye, "close"),
        Qt(ye);
    const we = '[data-bs-toggle="button"]';
    class Ee extends be {
        static get NAME() {
            return "button"
        }
        toggle() {
            this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"))
        }
        static jQueryInterface(t) {
            return this.each((function () {
                const e = Ee.getOrCreateInstance(this);
                "toggle" === t && e[t]()
            }
            ))
        }
    }
    function Ae(t) {
        return "true" === t || "false" !== t && (t === Number(t).toString() ? Number(t) : "" === t || "null" === t ? null : t)
    }
    function Oe(t) {
        return t.replace(/[A-Z]/g, (t => `-${t.toLowerCase()}`))
    }
    me.on(document, "click.bs.button.data-api", we, (t => {
        t.preventDefault();
        const e = t.target.closest(we);
        Ee.getOrCreateInstance(e).toggle()
    }
    )),
        Qt(Ee);
    const Te = {
        setDataAttribute(t, e, i) {
            t.setAttribute(`data-bs-${Oe(e)}`, i)
        },
        removeDataAttribute(t, e) {
            t.removeAttribute(`data-bs-${Oe(e)}`)
        },
        getDataAttributes(t) {
            if (!t)
                return {};
            const e = {};
            return Object.keys(t.dataset).filter((t => t.startsWith("bs"))).forEach((i => {
                let n = i.replace(/^bs/, "");
                n = n.charAt(0).toLowerCase() + n.slice(1, n.length),
                    e[n] = Ae(t.dataset[i])
            }
            )),
                e
        },
        getDataAttribute: (t, e) => Ae(t.getAttribute(`data-bs-${Oe(e)}`)),
        offset(t) {
            const e = t.getBoundingClientRect();
            return {
                top: e.top + window.pageYOffset,
                left: e.left + window.pageXOffset
            }
        },
        position: t => ({
            top: t.offsetTop,
            left: t.offsetLeft
        })
    }
        , Ce = {
            find: (t, e = document.documentElement) => [].concat(...Element.prototype.querySelectorAll.call(e, t)),
            findOne: (t, e = document.documentElement) => Element.prototype.querySelector.call(e, t),
            children: (t, e) => [].concat(...t.children).filter((t => t.matches(e))),
            parents(t, e) {
                const i = [];
                let n = t.parentNode;
                for (; n && n.nodeType === Node.ELEMENT_NODE && 3 !== n.nodeType;)
                    n.matches(e) && i.push(n),
                        n = n.parentNode;
                return i
            },
            prev(t, e) {
                let i = t.previousElementSibling;
                for (; i;) {
                    if (i.matches(e))
                        return [i];
                    i = i.previousElementSibling
                }
                return []
            },
            next(t, e) {
                let i = t.nextElementSibling;
                for (; i;) {
                    if (i.matches(e))
                        return [i];
                    i = i.nextElementSibling
                }
                return []
            },
            focusableChildren(t) {
                const e = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map((t => `${t}:not([tabindex^="-"])`)).join(", ");
                return this.find(e, t).filter((t => !qt(t) && zt(t)))
            }
        }
        , xe = "carousel"
        , ke = {
            interval: 5e3,
            keyboard: !0,
            slide: !1,
            pause: "hover",
            wrap: !0,
            touch: !0
        }
        , Le = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean",
            touch: "boolean"
        }
        , De = "next"
        , Se = "prev"
        , Ne = "left"
        , Ie = "right"
        , Pe = {
            ArrowLeft: Ie,
            ArrowRight: Ne
        }
        , je = "slid.bs.carousel"
        , Me = "active"
        , He = ".active.carousel-item";
    class Be extends be {
        static get Default() {
            return ke
        }
        static get NAME() {
            return xe
        }
        next() {
            this._slide(De)
        }
        nextWhenVisible() {
            !document.hidden && zt(this._element) && this.next()
        }
        prev() {
            this._slide(Se)
        }
        pause(t) {
            t || (this._isPaused = !0),
                Ce.findOne(".carousel-item-next, .carousel-item-prev", this._element) && (Bt(this._element),
                    this.cycle(!0)),
                clearInterval(this._interval),
                this._interval = null
        }
        cycle(t) {
            t || (this._isPaused = !1),
                this._interval && (clearInterval(this._interval),
                    this._interval = null),
                this._config && this._config.interval && !this._isPaused && (this._updateInterval(),
                    this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
        }
        to(t) {
            this._activeElement = Ce.findOne(He, this._element);
            const e = this._getItemIndex(this._activeElement);
            if (t > this._items.length - 1 || t < 0)
                return;
            if (this._isSliding)
                return void me.one(this._element, je, (() => this.to(t)));
            if (e === t)
                return this.pause(),
                    void this.cycle();
            const i = t > e ? De : Se;
            this._slide(i, this._items[t])
        }
        _getConfig(t) {
            return t = {
                ...ke,
                ...Te.getDataAttributes(this._element),
                ..."object" == typeof t ? t : {}
            },
                $t(xe, t, Le),
                t
        }
        _handleSwipe() {
            const t = Math.abs(this.touchDeltaX);
            if (t <= 40)
                return;
            const e = t / this.touchDeltaX;
            this.touchDeltaX = 0,
                e && this._slide(e > 0 ? Ie : Ne)
        }
        _addEventListeners() {
            this._config.keyboard && me.on(this._element, "keydown.bs.carousel", (t => this._keydown(t))),
                "hover" === this._config.pause && (me.on(this._element, "mouseenter.bs.carousel", (t => this.pause(t))),
                    me.on(this._element, "mouseleave.bs.carousel", (t => this.cycle(t)))),
                this._config.touch && this._touchSupported && this._addTouchEventListeners()
        }
        _addTouchEventListeners() {
            const t = t => this._pointerEvent && ("pen" === t.pointerType || "touch" === t.pointerType)
                , e = e => {
                    t(e) ? this.touchStartX = e.clientX : this._pointerEvent || (this.touchStartX = e.touches[0].clientX)
                }
                , i = t => {
                    this.touchDeltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - this.touchStartX
                }
                , n = e => {
                    t(e) && (this.touchDeltaX = e.clientX - this.touchStartX),
                        this._handleSwipe(),
                        "hover" === this._config.pause && (this.pause(),
                            this.touchTimeout && clearTimeout(this.touchTimeout),
                            this.touchTimeout = setTimeout((t => this.cycle(t)), 500 + this._config.interval))
                }
                ;
            Ce.find(".carousel-item img", this._element).forEach((t => {
                me.on(t, "dragstart.bs.carousel", (t => t.preventDefault()))
            }
            )),
                this._pointerEvent ? (me.on(this._element, "pointerdown.bs.carousel", (t => e(t))),
                    me.on(this._element, "pointerup.bs.carousel", (t => n(t))),
                    this._element.classList.add("pointer-event")) : (me.on(this._element, "touchstart.bs.carousel", (t => e(t))),
                        me.on(this._element, "touchmove.bs.carousel", (t => i(t))),
                        me.on(this._element, "touchend.bs.carousel", (t => n(t))))
        }
        _keydown(t) {
            if (/input|textarea/i.test(t.target.tagName))
                return;
            const e = Pe[t.key];
            e && (t.preventDefault(),
                this._slide(e))
        }
        _getItemIndex(t) {
            return this._items = t && t.parentNode ? Ce.find(".carousel-item", t.parentNode) : [],
                this._items.indexOf(t)
        }
        _getItemByOrder(t, e) {
            const i = t === De;
            return Jt(this._items, e, i, this._config.wrap)
        }
        _triggerSlideEvent(t, e) {
            const i = this._getItemIndex(t)
                , n = this._getItemIndex(Ce.findOne(He, this._element));
            return me.trigger(this._element, "slide.bs.carousel", {
                relatedTarget: t,
                direction: e,
                from: n,
                to: i
            })
        }
        _setActiveIndicatorElement(t) {
            if (this._indicatorsElement) {
                const e = Ce.findOne(".active", this._indicatorsElement);
                e.classList.remove(Me),
                    e.removeAttribute("aria-current");
                const i = Ce.find("[data-bs-target]", this._indicatorsElement);
                for (let e = 0; e < i.length; e++)
                    if (Number.parseInt(i[e].getAttribute("data-bs-slide-to"), 10) === this._getItemIndex(t)) {
                        i[e].classList.add(Me),
                            i[e].setAttribute("aria-current", "true");
                        break
                    }
            }
        }
        _updateInterval() {
            const t = this._activeElement || Ce.findOne(He, this._element);
            if (!t)
                return;
            const e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
            e ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval,
                this._config.interval = e) : this._config.interval = this._config.defaultInterval || this._config.interval
        }
        _slide(t, e) {
            const i = this._directionToOrder(t)
                , n = Ce.findOne(He, this._element)
                , s = this._getItemIndex(n)
                , o = e || this._getItemByOrder(i, n)
                , r = this._getItemIndex(o)
                , a = Boolean(this._interval)
                , l = i === De
                , c = l ? "carousel-item-start" : "carousel-item-end"
                , h = l ? "carousel-item-next" : "carousel-item-prev"
                , u = this._orderToDirection(i);
            if (o && o.classList.contains(Me))
                return void (this._isSliding = !1);
            if (this._isSliding)
                return;
            if (this._triggerSlideEvent(o, u).defaultPrevented)
                return;
            if (!n || !o)
                return;
            this._isSliding = !0,
                a && this.pause(),
                this._setActiveIndicatorElement(o),
                this._activeElement = o;
            const d = () => {
                me.trigger(this._element, je, {
                    relatedTarget: o,
                    direction: u,
                    from: s,
                    to: r
                })
            }
                ;
            if (this._element.classList.contains("slide")) {
                o.classList.add(h),
                    Vt(o),
                    n.classList.add(c),
                    o.classList.add(c);
                const t = () => {
                    o.classList.remove(c, h),
                        o.classList.add(Me),
                        n.classList.remove(Me, h, c),
                        this._isSliding = !1,
                        setTimeout(d, 0)
                }
                    ;
                this._queueCallback(t, n, !0)
            } else
                n.classList.remove(Me),
                    o.classList.add(Me),
                    this._isSliding = !1,
                    d();
            a && this.cycle()
        }
        _directionToOrder(t) {
            return [Ie, Ne].includes(t) ? Yt() ? t === Ne ? Se : De : t === Ne ? De : Se : t
        }
        _orderToDirection(t) {
            return [De, Se].includes(t) ? Yt() ? t === Se ? Ne : Ie : t === Se ? Ie : Ne : t
        }
        static carouselInterface(t, e) {
            const i = Be.getOrCreateInstance(t, e);
            let { _config: n } = i;
            "object" == typeof e && (n = {
                ...n,
                ...e
            });
            const s = "string" == typeof e ? e : n.slide;
            if ("number" == typeof e)
                i.to(e);
            else if ("string" == typeof s) {
                if (void 0 === i[s])
                    throw new TypeError(`No method named "${s}"`);
                i[s]()
            } else
                n.interval && n.ride && (i.pause(),
                    i.cycle())
        }
        static jQueryInterface(t) {
            return this.each((function () {
                Be.carouselInterface(this, t)
            }
            ))
        }
        static dataApiClickHandler(t) {
            const e = Ht(this);
            if (!e || !e.classList.contains("carousel"))
                return;
            const i = {
                ...Te.getDataAttributes(e),
                ...Te.getDataAttributes(this)
            }
                , n = this.getAttribute("data-bs-slide-to");
            n && (i.interval = !1),
                Be.carouselInterface(e, i),
                n && Be.getInstance(e).to(n),
                t.preventDefault()
        }
        constructor(t, e) {
            super(t),
                this._items = null,
                this._interval = null,
                this._activeElement = null,
                this._isPaused = !1,
                this._isSliding = !1,
                this.touchTimeout = null,
                this.touchStartX = 0,
                this.touchDeltaX = 0,
                this._config = this._getConfig(e),
                this._indicatorsElement = Ce.findOne(".carousel-indicators", this._element),
                this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0,
                this._pointerEvent = Boolean(window.PointerEvent),
                this._addEventListeners()
        }
    }
    me.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", Be.dataApiClickHandler),
        me.on(window, "load.bs.carousel.data-api", (() => {
            const t = Ce.find('[data-bs-ride="carousel"]');
            for (let e = 0, i = t.length; e < i; e++)
                Be.carouselInterface(t[e], Be.getInstance(t[e]))
        }
        )),
        Qt(Be);
    const Re = "collapse"
        , We = "bs.collapse"
        , $e = {
            toggle: !0,
            parent: null
        }
        , ze = {
            toggle: "boolean",
            parent: "(null|element)"
        }
        , qe = "show"
        , Fe = "collapse"
        , Ue = "collapsing"
        , Ve = "collapsed"
        , Ke = ":scope .collapse .collapse"
        , Xe = '[data-bs-toggle="collapse"]';
    class Ye extends be {
        static get Default() {
            return $e
        }
        static get NAME() {
            return Re
        }
        toggle() {
            this._isShown() ? this.hide() : this.show()
        }
        show() {
            if (this._isTransitioning || this._isShown())
                return;
            let t, e = [];
            if (this._config.parent) {
                const t = Ce.find(Ke, this._config.parent);
                e = Ce.find(".collapse.show, .collapse.collapsing", this._config.parent).filter((e => !t.includes(e)))
            }
            const i = Ce.findOne(this._selector);
            if (e.length) {
                const n = e.find((t => i !== t));
                if (t = n ? Ye.getInstance(n) : null,
                    t && t._isTransitioning)
                    return
            }
            if (me.trigger(this._element, "show.bs.collapse").defaultPrevented)
                return;
            e.forEach((e => {
                i !== e && Ye.getOrCreateInstance(e, {
                    toggle: !1
                }).hide(),
                    t || _e.set(e, We, null)
            }
            ));
            const n = this._getDimension();
            this._element.classList.remove(Fe),
                this._element.classList.add(Ue),
                this._element.style[n] = 0,
                this._addAriaAndCollapsedClass(this._triggerArray, !0),
                this._isTransitioning = !0;
            const s = `scroll${n[0].toUpperCase() + n.slice(1)}`;
            this._queueCallback((() => {
                this._isTransitioning = !1,
                    this._element.classList.remove(Ue),
                    this._element.classList.add(Fe, qe),
                    this._element.style[n] = "",
                    me.trigger(this._element, "shown.bs.collapse")
            }
            ), this._element, !0),
                this._element.style[n] = `${this._element[s]}px`
        }
        hide() {
            if (this._isTransitioning || !this._isShown())
                return;
            if (me.trigger(this._element, "hide.bs.collapse").defaultPrevented)
                return;
            const t = this._getDimension();
            this._element.style[t] = `${this._element.getBoundingClientRect()[t]}px`,
                Vt(this._element),
                this._element.classList.add(Ue),
                this._element.classList.remove(Fe, qe);
            const e = this._triggerArray.length;
            for (let t = 0; t < e; t++) {
                const e = this._triggerArray[t]
                    , i = Ht(e);
                i && !this._isShown(i) && this._addAriaAndCollapsedClass([e], !1)
            }
            this._isTransitioning = !0;
            this._element.style[t] = "",
                this._queueCallback((() => {
                    this._isTransitioning = !1,
                        this._element.classList.remove(Ue),
                        this._element.classList.add(Fe),
                        me.trigger(this._element, "hidden.bs.collapse")
                }
                ), this._element, !0)
        }
        _isShown(t = this._element) {
            return t.classList.contains(qe)
        }
        _getConfig(t) {
            return (t = {
                ...$e,
                ...Te.getDataAttributes(this._element),
                ...t
            }).toggle = Boolean(t.toggle),
                t.parent = Wt(t.parent),
                $t(Re, t, ze),
                t
        }
        _getDimension() {
            return this._element.classList.contains("collapse-horizontal") ? "width" : "height"
        }
        _initializeChildren() {
            if (!this._config.parent)
                return;
            const t = Ce.find(Ke, this._config.parent);
            Ce.find(Xe, this._config.parent).filter((e => !t.includes(e))).forEach((t => {
                const e = Ht(t);
                e && this._addAriaAndCollapsedClass([t], this._isShown(e))
            }
            ))
        }
        _addAriaAndCollapsedClass(t, e) {
            t.length && t.forEach((t => {
                e ? t.classList.remove(Ve) : t.classList.add(Ve),
                    t.setAttribute("aria-expanded", e)
            }
            ))
        }
        static jQueryInterface(t) {
            return this.each((function () {
                const e = {};
                "string" == typeof t && /show|hide/.test(t) && (e.toggle = !1);
                const i = Ye.getOrCreateInstance(this, e);
                if ("string" == typeof t) {
                    if (void 0 === i[t])
                        throw new TypeError(`No method named "${t}"`);
                    i[t]()
                }
            }
            ))
        }
        constructor(t, e) {
            super(t),
                this._isTransitioning = !1,
                this._config = this._getConfig(e),
                this._triggerArray = [];
            const i = Ce.find(Xe);
            for (let t = 0, e = i.length; t < e; t++) {
                const e = i[t]
                    , n = Mt(e)
                    , s = Ce.find(n).filter((t => t === this._element));
                null !== n && s.length && (this._selector = n,
                    this._triggerArray.push(e))
            }
            this._initializeChildren(),
                this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()),
                this._config.toggle && this.toggle()
        }
    }
    me.on(document, "click.bs.collapse.data-api", Xe, (function (t) {
        ("A" === t.target.tagName || t.delegateTarget && "A" === t.delegateTarget.tagName) && t.preventDefault();
        const e = Mt(this);
        Ce.find(e).forEach((t => {
            Ye.getOrCreateInstance(t, {
                toggle: !1
            }).toggle()
        }
        ))
    }
    )),
        Qt(Ye);
    const Qe = "dropdown"
        , Ge = "Escape"
        , Ze = "Space"
        , Je = "ArrowUp"
        , ti = "ArrowDown"
        , ei = new RegExp("ArrowUp|ArrowDown|Escape")
        , ii = "click.bs.dropdown.data-api"
        , ni = "keydown.bs.dropdown.data-api"
        , si = "show"
        , oi = '[data-bs-toggle="dropdown"]'
        , ri = ".dropdown-menu"
        , ai = Yt() ? "top-end" : "top-start"
        , li = Yt() ? "top-start" : "top-end"
        , ci = Yt() ? "bottom-end" : "bottom-start"
        , hi = Yt() ? "bottom-start" : "bottom-end"
        , ui = Yt() ? "left-start" : "right-start"
        , di = Yt() ? "right-start" : "left-start"
        , fi = {
            offset: [0, 2],
            boundary: "clippingParents",
            reference: "toggle",
            display: "dynamic",
            popperConfig: null,
            autoClose: !0
        }
        , pi = {
            offset: "(array|string|function)",
            boundary: "(string|element)",
            reference: "(string|element|object)",
            display: "string",
            popperConfig: "(null|object|function)",
            autoClose: "(boolean|string)"
        };
    class mi extends be {
        static get Default() {
            return fi
        }
        static get DefaultType() {
            return pi
        }
        static get NAME() {
            return Qe
        }
        toggle() {
            return this._isShown() ? this.hide() : this.show()
        }
        show() {
            if (qt(this._element) || this._isShown(this._menu))
                return;
            const t = {
                relatedTarget: this._element
            };
            if (me.trigger(this._element, "show.bs.dropdown", t).defaultPrevented)
                return;
            const e = mi.getParentFromElement(this._element);
            this._inNavbar ? Te.setDataAttribute(this._menu, "popper", "none") : this._createPopper(e),
                "ontouchstart" in document.documentElement && !e.closest(".navbar-nav") && [].concat(...document.body.children).forEach((t => me.on(t, "mouseover", Ut))),
                this._element.focus(),
                this._element.setAttribute("aria-expanded", !0),
                this._menu.classList.add(si),
                this._element.classList.add(si),
                me.trigger(this._element, "shown.bs.dropdown", t)
        }
        hide() {
            if (qt(this._element) || !this._isShown(this._menu))
                return;
            const t = {
                relatedTarget: this._element
            };
            this._completeHide(t)
        }
        dispose() {
            this._popper && this._popper.destroy(),
                super.dispose()
        }
        update() {
            this._inNavbar = this._detectNavbar(),
                this._popper && this._popper.update()
        }
        _completeHide(t) {
            me.trigger(this._element, "hide.bs.dropdown", t).defaultPrevented || ("ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach((t => me.off(t, "mouseover", Ut))),
                this._popper && this._popper.destroy(),
                this._menu.classList.remove(si),
                this._element.classList.remove(si),
                this._element.setAttribute("aria-expanded", "false"),
                Te.removeDataAttribute(this._menu, "popper"),
                me.trigger(this._element, "hidden.bs.dropdown", t))
        }
        _getConfig(t) {
            if (t = {
                ...this.constructor.Default,
                ...Te.getDataAttributes(this._element),
                ...t
            },
                $t(Qe, t, this.constructor.DefaultType),
                "object" == typeof t.reference && !Rt(t.reference) && "function" != typeof t.reference.getBoundingClientRect)
                throw new TypeError(`${Qe.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
            return t
        }
        _createPopper(t) {
            if (void 0 === i)
                throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
            let e = this._element;
            "parent" === this._config.reference ? e = t : Rt(this._config.reference) ? e = Wt(this._config.reference) : "object" == typeof this._config.reference && (e = this._config.reference);
            const n = this._getPopperConfig()
                , s = n.modifiers.find((t => "applyStyles" === t.name && !1 === t.enabled));
            this._popper = i.createPopper(e, this._menu, n),
                s && Te.setDataAttribute(this._menu, "popper", "static")
        }
        _isShown(t = this._element) {
            return t.classList.contains(si)
        }
        _getMenuElement() {
            return Ce.next(this._element, ri)[0]
        }
        _getPlacement() {
            const t = this._element.parentNode;
            if (t.classList.contains("dropend"))
                return ui;
            if (t.classList.contains("dropstart"))
                return di;
            const e = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
            return t.classList.contains("dropup") ? e ? li : ai : e ? hi : ci
        }
        _detectNavbar() {
            return null !== this._element.closest(".navbar")
        }
        _getOffset() {
            const { offset: t } = this._config;
            return "string" == typeof t ? t.split(",").map((t => Number.parseInt(t, 10))) : "function" == typeof t ? e => t(e, this._element) : t
        }
        _getPopperConfig() {
            const t = {
                placement: this._getPlacement(),
                modifiers: [{
                    name: "preventOverflow",
                    options: {
                        boundary: this._config.boundary
                    }
                }, {
                    name: "offset",
                    options: {
                        offset: this._getOffset()
                    }
                }]
            };
            return "static" === this._config.display && (t.modifiers = [{
                name: "applyStyles",
                enabled: !1
            }]),
            {
                ...t,
                ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(t) : this._config.popperConfig
            }
        }
        _selectMenuItem({ key: t, target: e }) {
            const i = Ce.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter(zt);
            i.length && Jt(i, e, t === ti, !i.includes(e)).focus()
        }
        static jQueryInterface(t) {
            return this.each((function () {
                const e = mi.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t])
                        throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            }
            ))
        }
        static clearMenus(t) {
            if (t && (2 === t.button || "keyup" === t.type && "Tab" !== t.key))
                return;
            const e = Ce.find(oi);
            for (let i = 0, n = e.length; i < n; i++) {
                const n = mi.getInstance(e[i]);
                if (!n || !1 === n._config.autoClose)
                    continue;
                if (!n._isShown())
                    continue;
                const s = {
                    relatedTarget: n._element
                };
                if (t) {
                    const e = t.composedPath()
                        , i = e.includes(n._menu);
                    if (e.includes(n._element) || "inside" === n._config.autoClose && !i || "outside" === n._config.autoClose && i)
                        continue;
                    if (n._menu.contains(t.target) && ("keyup" === t.type && "Tab" === t.key || /input|select|option|textarea|form/i.test(t.target.tagName)))
                        continue;
                    "click" === t.type && (s.clickEvent = t)
                }
                n._completeHide(s)
            }
        }
        static getParentFromElement(t) {
            return Ht(t) || t.parentNode
        }
        static dataApiKeydownHandler(t) {
            if (/input|textarea/i.test(t.target.tagName) ? t.key === Ze || t.key !== Ge && (t.key !== ti && t.key !== Je || t.target.closest(ri)) : !ei.test(t.key))
                return;
            const e = this.classList.contains(si);
            if (!e && t.key === Ge)
                return;
            if (t.preventDefault(),
                t.stopPropagation(),
                qt(this))
                return;
            const i = this.matches(oi) ? this : Ce.prev(this, oi)[0]
                , n = mi.getOrCreateInstance(i);
            if (t.key !== Ge)
                return t.key === Je || t.key === ti ? (e || n.show(),
                    void n._selectMenuItem(t)) : void (e && t.key !== Ze || mi.clearMenus());
            n.hide()
        }
        constructor(t, e) {
            super(t),
                this._popper = null,
                this._config = this._getConfig(e),
                this._menu = this._getMenuElement(),
                this._inNavbar = this._detectNavbar()
        }
    }
    me.on(document, ni, oi, mi.dataApiKeydownHandler),
        me.on(document, ni, ri, mi.dataApiKeydownHandler),
        me.on(document, ii, mi.clearMenus),
        me.on(document, "keyup.bs.dropdown.data-api", mi.clearMenus),
        me.on(document, ii, oi, (function (t) {
            t.preventDefault(),
                mi.getOrCreateInstance(this).toggle()
        }
        )),
        Qt(mi);
    const gi = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"
        , _i = ".sticky-top";
    class bi {
        getWidth() {
            const t = document.documentElement.clientWidth;
            return Math.abs(window.innerWidth - t)
        }
        hide() {
            const t = this.getWidth();
            this._disableOverFlow(),
                this._setElementAttributes(this._element, "paddingRight", (e => e + t)),
                this._setElementAttributes(gi, "paddingRight", (e => e + t)),
                this._setElementAttributes(_i, "marginRight", (e => e - t))
        }
        _disableOverFlow() {
            this._saveInitialAttribute(this._element, "overflow"),
                this._element.style.overflow = "hidden"
        }
        _setElementAttributes(t, e, i) {
            const n = this.getWidth();
            this._applyManipulationCallback(t, (t => {
                if (t !== this._element && window.innerWidth > t.clientWidth + n)
                    return;
                this._saveInitialAttribute(t, e);
                const s = window.getComputedStyle(t)[e];
                t.style[e] = `${i(Number.parseFloat(s))}px`
            }
            ))
        }
        reset() {
            this._resetElementAttributes(this._element, "overflow"),
                this._resetElementAttributes(this._element, "paddingRight"),
                this._resetElementAttributes(gi, "paddingRight"),
                this._resetElementAttributes(_i, "marginRight")
        }
        _saveInitialAttribute(t, e) {
            const i = t.style[e];
            i && Te.setDataAttribute(t, e, i)
        }
        _resetElementAttributes(t, e) {
            this._applyManipulationCallback(t, (t => {
                const i = Te.getDataAttribute(t, e);
                void 0 === i ? t.style.removeProperty(e) : (Te.removeDataAttribute(t, e),
                    t.style[e] = i)
            }
            ))
        }
        _applyManipulationCallback(t, e) {
            Rt(t) ? e(t) : Ce.find(t, this._element).forEach(e)
        }
        isOverflowing() {
            return this.getWidth() > 0
        }
        constructor() {
            this._element = document.body
        }
    }
    const vi = {
        className: "modal-backdrop",
        isVisible: !0,
        isAnimated: !1,
        rootElement: "body",
        clickCallback: null
    }
        , yi = {
            className: "string",
            isVisible: "boolean",
            isAnimated: "boolean",
            rootElement: "(element|string)",
            clickCallback: "(function|null)"
        }
        , wi = "backdrop"
        , Ei = "show"
        , Ai = "mousedown.bs.backdrop";
    class Oi {
        show(t) {
            this._config.isVisible ? (this._append(),
                this._config.isAnimated && Vt(this._getElement()),
                this._getElement().classList.add(Ei),
                this._emulateAnimation((() => {
                    Gt(t)
                }
                ))) : Gt(t)
        }
        hide(t) {
            this._config.isVisible ? (this._getElement().classList.remove(Ei),
                this._emulateAnimation((() => {
                    this.dispose(),
                        Gt(t)
                }
                ))) : Gt(t)
        }
        _getElement() {
            if (!this._element) {
                const t = document.createElement("div");
                t.className = this._config.className,
                    this._config.isAnimated && t.classList.add("fade"),
                    this._element = t
            }
            return this._element
        }
        _getConfig(t) {
            return (t = {
                ...vi,
                ..."object" == typeof t ? t : {}
            }).rootElement = Wt(t.rootElement),
                $t(wi, t, yi),
                t
        }
        _append() {
            this._isAppended || (this._config.rootElement.append(this._getElement()),
                me.on(this._getElement(), Ai, (() => {
                    Gt(this._config.clickCallback)
                }
                )),
                this._isAppended = !0)
        }
        dispose() {
            this._isAppended && (me.off(this._element, Ai),
                this._element.remove(),
                this._isAppended = !1)
        }
        _emulateAnimation(t) {
            Zt(t, this._getElement(), this._config.isAnimated)
        }
        constructor(t) {
            this._config = this._getConfig(t),
                this._isAppended = !1,
                this._element = null
        }
    }
    const Ti = {
        trapElement: null,
        autofocus: !0
    }
        , Ci = {
            trapElement: "element",
            autofocus: "boolean"
        }
        , xi = ".bs.focustrap"
        , ki = "backward";
    class Li {
        activate() {
            const { trapElement: t, autofocus: e } = this._config;
            this._isActive || (e && t.focus(),
                me.off(document, xi),
                me.on(document, "focusin.bs.focustrap", (t => this._handleFocusin(t))),
                me.on(document, "keydown.tab.bs.focustrap", (t => this._handleKeydown(t))),
                this._isActive = !0)
        }
        deactivate() {
            this._isActive && (this._isActive = !1,
                me.off(document, xi))
        }
        _handleFocusin(t) {
            const { target: e } = t
                , { trapElement: i } = this._config;
            if (e === document || e === i || i.contains(e))
                return;
            const n = Ce.focusableChildren(i);
            0 === n.length ? i.focus() : this._lastTabNavDirection === ki ? n[n.length - 1].focus() : n[0].focus()
        }
        _handleKeydown(t) {
            "Tab" === t.key && (this._lastTabNavDirection = t.shiftKey ? ki : "forward")
        }
        _getConfig(t) {
            return t = {
                ...Ti,
                ..."object" == typeof t ? t : {}
            },
                $t("focustrap", t, Ci),
                t
        }
        constructor(t) {
            this._config = this._getConfig(t),
                this._isActive = !1,
                this._lastTabNavDirection = null
        }
    }
    const Di = "modal"
        , Si = ".bs.modal"
        , Ni = "Escape"
        , Ii = {
            backdrop: !0,
            keyboard: !0,
            focus: !0
        }
        , Pi = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean"
        }
        , ji = "hidden.bs.modal"
        , Mi = "show.bs.modal"
        , Hi = "resize.bs.modal"
        , Bi = "click.dismiss.bs.modal"
        , Ri = "keydown.dismiss.bs.modal"
        , Wi = "mousedown.dismiss.bs.modal"
        , $i = "modal-open"
        , zi = "show"
        , qi = "modal-static";
    class Fi extends be {
        static get Default() {
            return Ii
        }
        static get NAME() {
            return Di
        }
        toggle(t) {
            return this._isShown ? this.hide() : this.show(t)
        }
        show(t) {
            if (this._isShown || this._isTransitioning)
                return;
            me.trigger(this._element, Mi, {
                relatedTarget: t
            }).defaultPrevented || (this._isShown = !0,
                this._isAnimated() && (this._isTransitioning = !0),
                this._scrollBar.hide(),
                document.body.classList.add($i),
                this._adjustDialog(),
                this._setEscapeEvent(),
                this._setResizeEvent(),
                me.on(this._dialog, Wi, (() => {
                    me.one(this._element, "mouseup.dismiss.bs.modal", (t => {
                        t.target === this._element && (this._ignoreBackdropClick = !0)
                    }
                    ))
                }
                )),
                this._showBackdrop((() => this._showElement(t))))
        }
        hide() {
            if (!this._isShown || this._isTransitioning)
                return;
            if (me.trigger(this._element, "hide.bs.modal").defaultPrevented)
                return;
            this._isShown = !1;
            const t = this._isAnimated();
            t && (this._isTransitioning = !0),
                this._setEscapeEvent(),
                this._setResizeEvent(),
                this._focustrap.deactivate(),
                this._element.classList.remove(zi),
                me.off(this._element, Bi),
                me.off(this._dialog, Wi),
                this._queueCallback((() => this._hideModal()), this._element, t)
        }
        dispose() {
            [window, this._dialog].forEach((t => me.off(t, Si))),
                this._backdrop.dispose(),
                this._focustrap.deactivate(),
                super.dispose()
        }
        handleUpdate() {
            this._adjustDialog()
        }
        _initializeBackDrop() {
            return new Oi({
                isVisible: Boolean(this._config.backdrop),
                isAnimated: this._isAnimated()
            })
        }
        _initializeFocusTrap() {
            return new Li({
                trapElement: this._element
            })
        }
        _getConfig(t) {
            return t = {
                ...Ii,
                ...Te.getDataAttributes(this._element),
                ..."object" == typeof t ? t : {}
            },
                $t(Di, t, Pi),
                t
        }
        _showElement(t) {
            const e = this._isAnimated()
                , i = Ce.findOne(".modal-body", this._dialog);
            this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.append(this._element),
                this._element.style.display = "block",
                this._element.removeAttribute("aria-hidden"),
                this._element.setAttribute("aria-modal", !0),
                this._element.setAttribute("role", "dialog"),
                this._element.scrollTop = 0,
                i && (i.scrollTop = 0),
                e && Vt(this._element),
                this._element.classList.add(zi);
            this._queueCallback((() => {
                this._config.focus && this._focustrap.activate(),
                    this._isTransitioning = !1,
                    me.trigger(this._element, "shown.bs.modal", {
                        relatedTarget: t
                    })
            }
            ), this._dialog, e)
        }
        _setEscapeEvent() {
            this._isShown ? me.on(this._element, Ri, (t => {
                this._config.keyboard && t.key === Ni ? (t.preventDefault(),
                    this.hide()) : this._config.keyboard || t.key !== Ni || this._triggerBackdropTransition()
            }
            )) : me.off(this._element, Ri)
        }
        _setResizeEvent() {
            this._isShown ? me.on(window, Hi, (() => this._adjustDialog())) : me.off(window, Hi)
        }
        _hideModal() {
            this._element.style.display = "none",
                this._element.setAttribute("aria-hidden", !0),
                this._element.removeAttribute("aria-modal"),
                this._element.removeAttribute("role"),
                this._isTransitioning = !1,
                this._backdrop.hide((() => {
                    document.body.classList.remove($i),
                        this._resetAdjustments(),
                        this._scrollBar.reset(),
                        me.trigger(this._element, ji)
                }
                ))
        }
        _showBackdrop(t) {
            me.on(this._element, Bi, (t => {
                this._ignoreBackdropClick ? this._ignoreBackdropClick = !1 : t.target === t.currentTarget && (!0 === this._config.backdrop ? this.hide() : "static" === this._config.backdrop && this._triggerBackdropTransition())
            }
            )),
                this._backdrop.show(t)
        }
        _isAnimated() {
            return this._element.classList.contains("fade")
        }
        _triggerBackdropTransition() {
            if (me.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented)
                return;
            const { classList: t, scrollHeight: e, style: i } = this._element
                , n = e > document.documentElement.clientHeight;
            !n && "hidden" === i.overflowY || t.contains(qi) || (n || (i.overflowY = "hidden"),
                t.add(qi),
                this._queueCallback((() => {
                    t.remove(qi),
                        n || this._queueCallback((() => {
                            i.overflowY = ""
                        }
                        ), this._dialog)
                }
                ), this._dialog),
                this._element.focus())
        }
        _adjustDialog() {
            const t = this._element.scrollHeight > document.documentElement.clientHeight
                , e = this._scrollBar.getWidth()
                , i = e > 0;
            (!i && t && !Yt() || i && !t && Yt()) && (this._element.style.paddingLeft = `${e}px`),
                (i && !t && !Yt() || !i && t && Yt()) && (this._element.style.paddingRight = `${e}px`)
        }
        _resetAdjustments() {
            this._element.style.paddingLeft = "",
                this._element.style.paddingRight = ""
        }
        static jQueryInterface(t, e) {
            return this.each((function () {
                const i = Fi.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === i[t])
                        throw new TypeError(`No method named "${t}"`);
                    i[t](e)
                }
            }
            ))
        }
        constructor(t, e) {
            super(t),
                this._config = this._getConfig(e),
                this._dialog = Ce.findOne(".modal-dialog", this._element),
                this._backdrop = this._initializeBackDrop(),
                this._focustrap = this._initializeFocusTrap(),
                this._isShown = !1,
                this._ignoreBackdropClick = !1,
                this._isTransitioning = !1,
                this._scrollBar = new bi
        }
    }
    me.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', (function (t) {
        const e = Ht(this);
        ["A", "AREA"].includes(this.tagName) && t.preventDefault(),
            me.one(e, Mi, (t => {
                t.defaultPrevented || me.one(e, ji, (() => {
                    zt(this) && this.focus()
                }
                ))
            }
            ));
        const i = Ce.findOne(".modal.show");
        i && Fi.getInstance(i).hide();
        Fi.getOrCreateInstance(e).toggle(this)
    }
    )),
        ve(Fi),
        Qt(Fi);
    const Ui = "offcanvas"
        , Vi = {
            backdrop: !0,
            keyboard: !0,
            scroll: !1
        }
        , Ki = {
            backdrop: "boolean",
            keyboard: "boolean",
            scroll: "boolean"
        }
        , Xi = "show"
        , Yi = ".offcanvas.show"
        , Qi = "hidden.bs.offcanvas";
    class Gi extends be {
        static get NAME() {
            return Ui
        }
        static get Default() {
            return Vi
        }
        toggle(t) {
            return this._isShown ? this.hide() : this.show(t)
        }
        show(t) {
            if (this._isShown)
                return;
            if (me.trigger(this._element, "show.bs.offcanvas", {
                relatedTarget: t
            }).defaultPrevented)
                return;
            this._isShown = !0,
                this._element.style.visibility = "visible",
                this._backdrop.show(),
                this._config.scroll || (new bi).hide(),
                this._element.removeAttribute("aria-hidden"),
                this._element.setAttribute("aria-modal", !0),
                this._element.setAttribute("role", "dialog"),
                this._element.classList.add(Xi);
            this._queueCallback((() => {
                this._config.scroll || this._focustrap.activate(),
                    me.trigger(this._element, "shown.bs.offcanvas", {
                        relatedTarget: t
                    })
            }
            ), this._element, !0)
        }
        hide() {
            if (!this._isShown)
                return;
            if (me.trigger(this._element, "hide.bs.offcanvas").defaultPrevented)
                return;
            this._focustrap.deactivate(),
                this._element.blur(),
                this._isShown = !1,
                this._element.classList.remove(Xi),
                this._backdrop.hide();
            this._queueCallback((() => {
                this._element.setAttribute("aria-hidden", !0),
                    this._element.removeAttribute("aria-modal"),
                    this._element.removeAttribute("role"),
                    this._element.style.visibility = "hidden",
                    this._config.scroll || (new bi).reset(),
                    me.trigger(this._element, Qi)
            }
            ), this._element, !0)
        }
        dispose() {
            this._backdrop.dispose(),
                this._focustrap.deactivate(),
                super.dispose()
        }
        _getConfig(t) {
            return t = {
                ...Vi,
                ...Te.getDataAttributes(this._element),
                ..."object" == typeof t ? t : {}
            },
                $t(Ui, t, Ki),
                t
        }
        _initializeBackDrop() {
            return new Oi({
                className: "offcanvas-backdrop",
                isVisible: this._config.backdrop,
                isAnimated: !0,
                rootElement: this._element.parentNode,
                clickCallback: () => this.hide()
            })
        }
        _initializeFocusTrap() {
            return new Li({
                trapElement: this._element
            })
        }
        _addEventListeners() {
            me.on(this._element, "keydown.dismiss.bs.offcanvas", (t => {
                this._config.keyboard && "Escape" === t.key && this.hide()
            }
            ))
        }
        static jQueryInterface(t) {
            return this.each((function () {
                const e = Gi.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
                        throw new TypeError(`No method named "${t}"`);
                    e[t](this)
                }
            }
            ))
        }
        constructor(t, e) {
            super(t),
                this._config = this._getConfig(e),
                this._isShown = !1,
                this._backdrop = this._initializeBackDrop(),
                this._focustrap = this._initializeFocusTrap(),
                this._addEventListeners()
        }
    }
    me.on(document, "click.bs.offcanvas.data-api", '[data-bs-toggle="offcanvas"]', (function (t) {
        const e = Ht(this);
        if (["A", "AREA"].includes(this.tagName) && t.preventDefault(),
            qt(this))
            return;
        me.one(e, Qi, (() => {
            zt(this) && this.focus()
        }
        ));
        const i = Ce.findOne(Yi);
        i && i !== e && Gi.getInstance(i).hide();
        Gi.getOrCreateInstance(e).toggle(this)
    }
    )),
        me.on(window, "load.bs.offcanvas.data-api", (() => Ce.find(Yi).forEach((t => Gi.getOrCreateInstance(t).show())))),
        ve(Gi),
        Qt(Gi);
    const Zi = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"])
        , Ji = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i
        , tn = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i
        , en = (t, e) => {
            const i = t.nodeName.toLowerCase();
            if (e.includes(i))
                return !Zi.has(i) || Boolean(Ji.test(t.nodeValue) || tn.test(t.nodeValue));
            const n = e.filter((t => t instanceof RegExp));
            for (let t = 0, e = n.length; t < e; t++)
                if (n[t].test(i))
                    return !0;
            return !1
        }
        , nn = {
            "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
            a: ["target", "href", "title", "rel"],
            area: [],
            b: [],
            br: [],
            col: [],
            code: [],
            div: [],
            em: [],
            hr: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            i: [],
            img: ["src", "srcset", "alt", "title", "width", "height"],
            li: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            small: [],
            span: [],
            sub: [],
            sup: [],
            strong: [],
            u: [],
            ul: []
        };
    function sn(t, e, i) {
        if (!t.length)
            return t;
        if (i && "function" == typeof i)
            return i(t);
        const n = (new window.DOMParser).parseFromString(t, "text/html")
            , s = [].concat(...n.body.querySelectorAll("*"));
        for (let t = 0, i = s.length; t < i; t++) {
            const i = s[t]
                , n = i.nodeName.toLowerCase();
            if (!Object.keys(e).includes(n)) {
                i.remove();
                continue
            }
            const o = [].concat(...i.attributes)
                , r = [].concat(e["*"] || [], e[n] || []);
            o.forEach((t => {
                en(t, r) || i.removeAttribute(t.nodeName)
            }
            ))
        }
        return n.body.innerHTML
    }
    const on = "tooltip"
        , rn = new Set(["sanitize", "allowList", "sanitizeFn"])
        , an = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "(array|string|function)",
            container: "(string|element|boolean)",
            fallbackPlacements: "array",
            boundary: "(string|element)",
            customClass: "(string|function)",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            allowList: "object",
            popperConfig: "(null|object|function)"
        }
        , ln = {
            AUTO: "auto",
            TOP: "top",
            RIGHT: Yt() ? "left" : "right",
            BOTTOM: "bottom",
            LEFT: Yt() ? "right" : "left"
        }
        , cn = {
            animation: !0,
            template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            selector: !1,
            placement: "top",
            offset: [0, 0],
            container: !1,
            fallbackPlacements: ["top", "right", "bottom", "left"],
            boundary: "clippingParents",
            customClass: "",
            sanitize: !0,
            sanitizeFn: null,
            allowList: nn,
            popperConfig: null
        }
        , hn = {
            HIDE: "hide.bs.tooltip",
            HIDDEN: "hidden.bs.tooltip",
            SHOW: "show.bs.tooltip",
            SHOWN: "shown.bs.tooltip",
            INSERTED: "inserted.bs.tooltip",
            CLICK: "click.bs.tooltip",
            FOCUSIN: "focusin.bs.tooltip",
            FOCUSOUT: "focusout.bs.tooltip",
            MOUSEENTER: "mouseenter.bs.tooltip",
            MOUSELEAVE: "mouseleave.bs.tooltip"
        }
        , un = "fade"
        , dn = "show"
        , fn = "show"
        , pn = "out"
        , mn = ".tooltip-inner"
        , gn = ".modal"
        , _n = "hide.bs.modal"
        , bn = "hover"
        , vn = "focus";
    class yn extends be {
        static get Default() {
            return cn
        }
        static get NAME() {
            return on
        }
        static get Event() {
            return hn
        }
        static get DefaultType() {
            return an
        }
        enable() {
            this._isEnabled = !0
        }
        disable() {
            this._isEnabled = !1
        }
        toggleEnabled() {
            this._isEnabled = !this._isEnabled
        }
        toggle(t) {
            if (this._isEnabled)
                if (t) {
                    const e = this._initializeOnDelegatedTarget(t);
                    e._activeTrigger.click = !e._activeTrigger.click,
                        e._isWithActiveTrigger() ? e._enter(null, e) : e._leave(null, e)
                } else {
                    if (this.getTipElement().classList.contains(dn))
                        return void this._leave(null, this);
                    this._enter(null, this)
                }
        }
        dispose() {
            clearTimeout(this._timeout),
                me.off(this._element.closest(gn), _n, this._hideModalHandler),
                this.tip && this.tip.remove(),
                this._disposePopper(),
                super.dispose()
        }
        show() {
            if ("none" === this._element.style.display)
                throw new Error("Please use show on visible elements");
            if (!this.isWithContent() || !this._isEnabled)
                return;
            const t = me.trigger(this._element, this.constructor.Event.SHOW)
                , e = Ft(this._element)
                , n = null === e ? this._element.ownerDocument.documentElement.contains(this._element) : e.contains(this._element);
            if (t.defaultPrevented || !n)
                return;
            "tooltip" === this.constructor.NAME && this.tip && this.getTitle() !== this.tip.querySelector(mn).innerHTML && (this._disposePopper(),
                this.tip.remove(),
                this.tip = null);
            const s = this.getTipElement()
                , o = (t => {
                    do {
                        t += Math.floor(1e6 * Math.random())
                    } while (document.getElementById(t));
                    return t
                }
                )(this.constructor.NAME);
            s.setAttribute("id", o),
                this._element.setAttribute("aria-describedby", o),
                this._config.animation && s.classList.add(un);
            const r = "function" == typeof this._config.placement ? this._config.placement.call(this, s, this._element) : this._config.placement
                , a = this._getAttachment(r);
            this._addAttachmentClass(a);
            const { container: l } = this._config;
            _e.set(s, this.constructor.DATA_KEY, this),
                this._element.ownerDocument.documentElement.contains(this.tip) || (l.append(s),
                    me.trigger(this._element, this.constructor.Event.INSERTED)),
                this._popper ? this._popper.update() : this._popper = i.createPopper(this._element, s, this._getPopperConfig(a)),
                s.classList.add(dn);
            const c = this._resolvePossibleFunction(this._config.customClass);
            c && s.classList.add(...c.split(" ")),
                "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach((t => {
                    me.on(t, "mouseover", Ut)
                }
                ));
            const h = this.tip.classList.contains(un);
            this._queueCallback((() => {
                const t = this._hoverState;
                this._hoverState = null,
                    me.trigger(this._element, this.constructor.Event.SHOWN),
                    t === pn && this._leave(null, this)
            }
            ), this.tip, h)
        }
        hide() {
            if (!this._popper)
                return;
            const t = this.getTipElement();
            if (me.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented)
                return;
            t.classList.remove(dn),
                "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach((t => me.off(t, "mouseover", Ut))),
                this._activeTrigger.click = !1,
                this._activeTrigger.focus = !1,
                this._activeTrigger.hover = !1;
            const e = this.tip.classList.contains(un);
            this._queueCallback((() => {
                this._isWithActiveTrigger() || (this._hoverState !== fn && t.remove(),
                    this._cleanTipClass(),
                    this._element.removeAttribute("aria-describedby"),
                    me.trigger(this._element, this.constructor.Event.HIDDEN),
                    this._disposePopper())
            }
            ), this.tip, e),
                this._hoverState = ""
        }
        update() {
            null !== this._popper && this._popper.update()
        }
        isWithContent() {
            return Boolean(this.getTitle())
        }
        getTipElement() {
            if (this.tip)
                return this.tip;
            const t = document.createElement("div");
            t.innerHTML = this._config.template;
            const e = t.children[0];
            return this.setContent(e),
                e.classList.remove(un, dn),
                this.tip = e,
                this.tip
        }
        setContent(t) {
            this._sanitizeAndSetContent(t, this.getTitle(), mn)
        }
        _sanitizeAndSetContent(t, e, i) {
            const n = Ce.findOne(i, t);
            e || !n ? this.setElementContent(n, e) : n.remove()
        }
        setElementContent(t, e) {
            if (null !== t)
                return Rt(e) ? (e = Wt(e),
                    void (this._config.html ? e.parentNode !== t && (t.innerHTML = "",
                        t.append(e)) : t.textContent = e.textContent)) : void (this._config.html ? (this._config.sanitize && (e = sn(e, this._config.allowList, this._config.sanitizeFn)),
                            t.innerHTML = e) : t.textContent = e)
        }
        getTitle() {
            const t = this._element.getAttribute("data-bs-original-title") || this._config.title;
            return this._resolvePossibleFunction(t)
        }
        updateAttachment(t) {
            return "right" === t ? "end" : "left" === t ? "start" : t
        }
        _initializeOnDelegatedTarget(t, e) {
            return e || this.constructor.getOrCreateInstance(t.delegateTarget, this._getDelegateConfig())
        }
        _getOffset() {
            const { offset: t } = this._config;
            return "string" == typeof t ? t.split(",").map((t => Number.parseInt(t, 10))) : "function" == typeof t ? e => t(e, this._element) : t
        }
        _resolvePossibleFunction(t) {
            return "function" == typeof t ? t.call(this._element) : t
        }
        _getPopperConfig(t) {
            const e = {
                placement: t,
                modifiers: [{
                    name: "flip",
                    options: {
                        fallbackPlacements: this._config.fallbackPlacements
                    }
                }, {
                    name: "offset",
                    options: {
                        offset: this._getOffset()
                    }
                }, {
                    name: "preventOverflow",
                    options: {
                        boundary: this._config.boundary
                    }
                }, {
                    name: "arrow",
                    options: {
                        element: `.${this.constructor.NAME}-arrow`
                    }
                }, {
                    name: "onChange",
                    enabled: !0,
                    phase: "afterWrite",
                    fn: t => this._handlePopperPlacementChange(t)
                }],
                onFirstUpdate: t => {
                    t.options.placement !== t.placement && this._handlePopperPlacementChange(t)
                }
            };
            return {
                ...e,
                ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(e) : this._config.popperConfig
            }
        }
        _addAttachmentClass(t) {
            this.getTipElement().classList.add(`${this._getBasicClassPrefix()}-${this.updateAttachment(t)}`)
        }
        _getAttachment(t) {
            return ln[t.toUpperCase()]
        }
        _setListeners() {
            this._config.trigger.split(" ").forEach((t => {
                if ("click" === t)
                    me.on(this._element, this.constructor.Event.CLICK, this._config.selector, (t => this.toggle(t)));
                else if ("manual" !== t) {
                    const e = t === bn ? this.constructor.Event.MOUSEENTER : this.constructor.Event.FOCUSIN
                        , i = t === bn ? this.constructor.Event.MOUSELEAVE : this.constructor.Event.FOCUSOUT;
                    me.on(this._element, e, this._config.selector, (t => this._enter(t))),
                        me.on(this._element, i, this._config.selector, (t => this._leave(t)))
                }
            }
            )),
                this._hideModalHandler = () => {
                    this._element && this.hide()
                }
                ,
                me.on(this._element.closest(gn), _n, this._hideModalHandler),
                this._config.selector ? this._config = {
                    ...this._config,
                    trigger: "manual",
                    selector: ""
                } : this._fixTitle()
        }
        _fixTitle() {
            const t = this._element.getAttribute("title")
                , e = typeof this._element.getAttribute("data-bs-original-title");
            (t || "string" !== e) && (this._element.setAttribute("data-bs-original-title", t || ""),
                !t || this._element.getAttribute("aria-label") || this._element.textContent || this._element.setAttribute("aria-label", t),
                this._element.setAttribute("title", ""))
        }
        _enter(t, e) {
            e = this._initializeOnDelegatedTarget(t, e),
                t && (e._activeTrigger["focusin" === t.type ? vn : bn] = !0),
                e.getTipElement().classList.contains(dn) || e._hoverState === fn ? e._hoverState = fn : (clearTimeout(e._timeout),
                    e._hoverState = fn,
                    e._config.delay && e._config.delay.show ? e._timeout = setTimeout((() => {
                        e._hoverState === fn && e.show()
                    }
                    ), e._config.delay.show) : e.show())
        }
        _leave(t, e) {
            e = this._initializeOnDelegatedTarget(t, e),
                t && (e._activeTrigger["focusout" === t.type ? vn : bn] = e._element.contains(t.relatedTarget)),
                e._isWithActiveTrigger() || (clearTimeout(e._timeout),
                    e._hoverState = pn,
                    e._config.delay && e._config.delay.hide ? e._timeout = setTimeout((() => {
                        e._hoverState === pn && e.hide()
                    }
                    ), e._config.delay.hide) : e.hide())
        }
        _isWithActiveTrigger() {
            for (const t in this._activeTrigger)
                if (this._activeTrigger[t])
                    return !0;
            return !1
        }
        _getConfig(t) {
            const e = Te.getDataAttributes(this._element);
            return Object.keys(e).forEach((t => {
                rn.has(t) && delete e[t]
            }
            )),
                (t = {
                    ...this.constructor.Default,
                    ...e,
                    ..."object" == typeof t && t ? t : {}
                }).container = !1 === t.container ? document.body : Wt(t.container),
                "number" == typeof t.delay && (t.delay = {
                    show: t.delay,
                    hide: t.delay
                }),
                "number" == typeof t.title && (t.title = t.title.toString()),
                "number" == typeof t.content && (t.content = t.content.toString()),
                $t(on, t, this.constructor.DefaultType),
                t.sanitize && (t.template = sn(t.template, t.allowList, t.sanitizeFn)),
                t
        }
        _getDelegateConfig() {
            const t = {};
            for (const e in this._config)
                this.constructor.Default[e] !== this._config[e] && (t[e] = this._config[e]);
            return t
        }
        _cleanTipClass() {
            const t = this.getTipElement()
                , e = new RegExp(`(^|\\s)${this._getBasicClassPrefix()}\\S+`, "g")
                , i = t.getAttribute("class").match(e);
            null !== i && i.length > 0 && i.map((t => t.trim())).forEach((e => t.classList.remove(e)))
        }
        _getBasicClassPrefix() {
            return "bs-tooltip"
        }
        _handlePopperPlacementChange(t) {
            const { state: e } = t;
            e && (this.tip = e.elements.popper,
                this._cleanTipClass(),
                this._addAttachmentClass(this._getAttachment(e.placement)))
        }
        _disposePopper() {
            this._popper && (this._popper.destroy(),
                this._popper = null)
        }
        static jQueryInterface(t) {
            return this.each((function () {
                const e = yn.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t])
                        throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            }
            ))
        }
        constructor(t, e) {
            if (void 0 === i)
                throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
            super(t),
                this._isEnabled = !0,
                this._timeout = 0,
                this._hoverState = "",
                this._activeTrigger = {},
                this._popper = null,
                this._config = this._getConfig(e),
                this.tip = null,
                this._setListeners()
        }
    }
    Qt(yn);
    const wn = {
        ...yn.Default,
        placement: "right",
        offset: [0, 8],
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
    }
        , En = {
            ...yn.DefaultType,
            content: "(string|element|function)"
        }
        , An = {
            HIDE: "hide.bs.popover",
            HIDDEN: "hidden.bs.popover",
            SHOW: "show.bs.popover",
            SHOWN: "shown.bs.popover",
            INSERTED: "inserted.bs.popover",
            CLICK: "click.bs.popover",
            FOCUSIN: "focusin.bs.popover",
            FOCUSOUT: "focusout.bs.popover",
            MOUSEENTER: "mouseenter.bs.popover",
            MOUSELEAVE: "mouseleave.bs.popover"
        };
    class On extends yn {
        static get Default() {
            return wn
        }
        static get NAME() {
            return "popover"
        }
        static get Event() {
            return An
        }
        static get DefaultType() {
            return En
        }
        isWithContent() {
            return this.getTitle() || this._getContent()
        }
        setContent(t) {
            this._sanitizeAndSetContent(t, this.getTitle(), ".popover-header"),
                this._sanitizeAndSetContent(t, this._getContent(), ".popover-body")
        }
        _getContent() {
            return this._resolvePossibleFunction(this._config.content)
        }
        _getBasicClassPrefix() {
            return "bs-popover"
        }
        static jQueryInterface(t) {
            return this.each((function () {
                const e = On.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t])
                        throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            }
            ))
        }
    }
    Qt(On);
    const Tn = "scrollspy"
        , Cn = ".bs.scrollspy"
        , xn = {
            offset: 10,
            method: "auto",
            target: ""
        }
        , kn = {
            offset: "number",
            method: "string",
            target: "(string|element)"
        }
        , Ln = "dropdown-item"
        , Dn = "active"
        , Sn = ".nav-link"
        , Nn = ".nav-link, .list-group-item, .dropdown-item"
        , In = "position";
    class Pn extends be {
        static get Default() {
            return xn
        }
        static get NAME() {
            return Tn
        }
        refresh() {
            const t = this._scrollElement === this._scrollElement.window ? "offset" : In
                , e = "auto" === this._config.method ? t : this._config.method
                , i = e === In ? this._getScrollTop() : 0;
            this._offsets = [],
                this._targets = [],
                this._scrollHeight = this._getScrollHeight();
            Ce.find(Nn, this._config.target).map((t => {
                const n = Mt(t)
                    , s = n ? Ce.findOne(n) : null;
                if (s) {
                    const t = s.getBoundingClientRect();
                    if (t.width || t.height)
                        return [Te[e](s).top + i, n]
                }
                return null
            }
            )).filter((t => t)).sort(((t, e) => t[0] - e[0])).forEach((t => {
                this._offsets.push(t[0]),
                    this._targets.push(t[1])
            }
            ))
        }
        dispose() {
            me.off(this._scrollElement, Cn),
                super.dispose()
        }
        _getConfig(t) {
            return (t = {
                ...xn,
                ...Te.getDataAttributes(this._element),
                ..."object" == typeof t && t ? t : {}
            }).target = Wt(t.target) || document.documentElement,
                $t(Tn, t, kn),
                t
        }
        _getScrollTop() {
            return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
        }
        _getScrollHeight() {
            return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
        }
        _getOffsetHeight() {
            return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
        }
        _process() {
            const t = this._getScrollTop() + this._config.offset
                , e = this._getScrollHeight()
                , i = this._config.offset + e - this._getOffsetHeight();
            if (this._scrollHeight !== e && this.refresh(),
                t >= i) {
                const t = this._targets[this._targets.length - 1];
                this._activeTarget !== t && this._activate(t)
            } else {
                if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0)
                    return this._activeTarget = null,
                        void this._clear();
                for (let e = this._offsets.length; e--;) {
                    this._activeTarget !== this._targets[e] && t >= this._offsets[e] && (void 0 === this._offsets[e + 1] || t < this._offsets[e + 1]) && this._activate(this._targets[e])
                }
            }
        }
        _activate(t) {
            this._activeTarget = t,
                this._clear();
            const e = Nn.split(",").map((e => `${e}[data-bs-target="${t}"],${e}[href="${t}"]`))
                , i = Ce.findOne(e.join(","), this._config.target);
            i.classList.add(Dn),
                i.classList.contains(Ln) ? Ce.findOne(".dropdown-toggle", i.closest(".dropdown")).classList.add(Dn) : Ce.parents(i, ".nav, .list-group").forEach((t => {
                    Ce.prev(t, ".nav-link, .list-group-item").forEach((t => t.classList.add(Dn))),
                        Ce.prev(t, ".nav-item").forEach((t => {
                            Ce.children(t, Sn).forEach((t => t.classList.add(Dn)))
                        }
                        ))
                }
                )),
                me.trigger(this._scrollElement, "activate.bs.scrollspy", {
                    relatedTarget: t
                })
        }
        _clear() {
            Ce.find(Nn, this._config.target).filter((t => t.classList.contains(Dn))).forEach((t => t.classList.remove(Dn)))
        }
        static jQueryInterface(t) {
            return this.each((function () {
                const e = Pn.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t])
                        throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            }
            ))
        }
        constructor(t, e) {
            super(t),
                this._scrollElement = "BODY" === this._element.tagName ? window : this._element,
                this._config = this._getConfig(e),
                this._offsets = [],
                this._targets = [],
                this._activeTarget = null,
                this._scrollHeight = 0,
                me.on(this._scrollElement, "scroll.bs.scrollspy", (() => this._process())),
                this.refresh(),
                this._process()
        }
    }
    me.on(window, "load.bs.scrollspy.data-api", (() => {
        Ce.find('[data-bs-spy="scroll"]').forEach((t => new Pn(t)))
    }
    )),
        Qt(Pn);
    const jn = "active"
        , Mn = "fade"
        , Hn = "show"
        , Bn = ".active"
        , Rn = ":scope > li > .active";
    class Wn extends be {
        static get NAME() {
            return "tab"
        }
        show() {
            if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains(jn))
                return;
            let t;
            const e = Ht(this._element)
                , i = this._element.closest(".nav, .list-group");
            if (i) {
                const e = "UL" === i.nodeName || "OL" === i.nodeName ? Rn : Bn;
                t = Ce.find(e, i),
                    t = t[t.length - 1]
            }
            const n = t ? me.trigger(t, "hide.bs.tab", {
                relatedTarget: this._element
            }) : null;
            if (me.trigger(this._element, "show.bs.tab", {
                relatedTarget: t
            }).defaultPrevented || null !== n && n.defaultPrevented)
                return;
            this._activate(this._element, i);
            const s = () => {
                me.trigger(t, "hidden.bs.tab", {
                    relatedTarget: this._element
                }),
                    me.trigger(this._element, "shown.bs.tab", {
                        relatedTarget: t
                    })
            }
                ;
            e ? this._activate(e, e.parentNode, s) : s()
        }
        _activate(t, e, i) {
            const n = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? Ce.children(e, Bn) : Ce.find(Rn, e))[0]
                , s = i && n && n.classList.contains(Mn)
                , o = () => this._transitionComplete(t, n, i);
            n && s ? (n.classList.remove(Hn),
                this._queueCallback(o, t, !0)) : o()
        }
        _transitionComplete(t, e, i) {
            if (e) {
                e.classList.remove(jn);
                const t = Ce.findOne(":scope > .dropdown-menu .active", e.parentNode);
                t && t.classList.remove(jn),
                    "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1)
            }
            t.classList.add(jn),
                "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0),
                Vt(t),
                t.classList.contains(Mn) && t.classList.add(Hn);
            let n = t.parentNode;
            if (n && "LI" === n.nodeName && (n = n.parentNode),
                n && n.classList.contains("dropdown-menu")) {
                const e = t.closest(".dropdown");
                e && Ce.find(".dropdown-toggle", e).forEach((t => t.classList.add(jn))),
                    t.setAttribute("aria-expanded", !0)
            }
            i && i()
        }
        static jQueryInterface(t) {
            return this.each((function () {
                const e = Wn.getOrCreateInstance(this);
                if ("string" == typeof t) {
                    if (void 0 === e[t])
                        throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            }
            ))
        }
    }
    me.on(document, "click.bs.tab.data-api", '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', (function (t) {
        if (["A", "AREA"].includes(this.tagName) && t.preventDefault(),
            qt(this))
            return;
        Wn.getOrCreateInstance(this).show()
    }
    )),
        Qt(Wn);
    const $n = "toast"
        , zn = "hide"
        , qn = "show"
        , Fn = "showing"
        , Un = {
            animation: "boolean",
            autohide: "boolean",
            delay: "number"
        }
        , Vn = {
            animation: !0,
            autohide: !0,
            delay: 5e3
        };
    class Kn extends be {
        static get DefaultType() {
            return Un
        }
        static get Default() {
            return Vn
        }
        static get NAME() {
            return $n
        }
        show() {
            if (me.trigger(this._element, "show.bs.toast").defaultPrevented)
                return;
            this._clearTimeout(),
                this._config.animation && this._element.classList.add("fade");
            this._element.classList.remove(zn),
                Vt(this._element),
                this._element.classList.add(qn),
                this._element.classList.add(Fn),
                this._queueCallback((() => {
                    this._element.classList.remove(Fn),
                        me.trigger(this._element, "shown.bs.toast"),
                        this._maybeScheduleHide()
                }
                ), this._element, this._config.animation)
        }
        hide() {
            if (!this._element.classList.contains(qn))
                return;
            if (me.trigger(this._element, "hide.bs.toast").defaultPrevented)
                return;
            this._element.classList.add(Fn),
                this._queueCallback((() => {
                    this._element.classList.add(zn),
                        this._element.classList.remove(Fn),
                        this._element.classList.remove(qn),
                        me.trigger(this._element, "hidden.bs.toast")
                }
                ), this._element, this._config.animation)
        }
        dispose() {
            this._clearTimeout(),
                this._element.classList.contains(qn) && this._element.classList.remove(qn),
                super.dispose()
        }
        _getConfig(t) {
            return t = {
                ...Vn,
                ...Te.getDataAttributes(this._element),
                ..."object" == typeof t && t ? t : {}
            },
                $t($n, t, this.constructor.DefaultType),
                t
        }
        _maybeScheduleHide() {
            this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout((() => {
                this.hide()
            }
            ), this._config.delay)))
        }
        _onInteraction(t, e) {
            switch (t.type) {
                case "mouseover":
                case "mouseout":
                    this._hasMouseInteraction = e;
                    break;
                case "focusin":
                case "focusout":
                    this._hasKeyboardInteraction = e
            }
            if (e)
                return void this._clearTimeout();
            const i = t.relatedTarget;
            this._element === i || this._element.contains(i) || this._maybeScheduleHide()
        }
        _setListeners() {
            me.on(this._element, "mouseover.bs.toast", (t => this._onInteraction(t, !0))),
                me.on(this._element, "mouseout.bs.toast", (t => this._onInteraction(t, !1))),
                me.on(this._element, "focusin.bs.toast", (t => this._onInteraction(t, !0))),
                me.on(this._element, "focusout.bs.toast", (t => this._onInteraction(t, !1)))
        }
        _clearTimeout() {
            clearTimeout(this._timeout),
                this._timeout = null
        }
        static jQueryInterface(t) {
            return this.each((function () {
                const e = Kn.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t])
                        throw new TypeError(`No method named "${t}"`);
                    e[t](this)
                }
            }
            ))
        }
        constructor(t, e) {
            super(t),
                this._config = this._getConfig(e),
                this._timeout = null,
                this._hasMouseInteraction = !1,
                this._hasKeyboardInteraction = !1,
                this._setListeners()
        }
    }
    ve(Kn),
        Qt(Kn),
        document.addEventListener("DOMContentLoaded", (() => { }
        ))
}();
//# sourceMappingURL=main.js.map



