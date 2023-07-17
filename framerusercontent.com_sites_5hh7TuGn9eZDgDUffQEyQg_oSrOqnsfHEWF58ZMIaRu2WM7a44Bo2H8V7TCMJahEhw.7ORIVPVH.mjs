import {
    b as Mt
} from "./chunk-LQB3L6ZF.mjs";
import {
    a as zt
} from "./chunk-RVWTSSFU.mjs";
import {
    a as Sr,
    b as e,
    c as d
} from "./chunk-353XP7WQ.mjs";
import {
    A as Ke,
    B as Ft,
    C as kt,
    F as Sa,
    G as ue,
    H as ve,
    I as Rt,
    K as o,
    N as Y,
    O as Gr,
    P as E,
    Q as Zr,
    R as ge,
    S as La,
    T as xe,
    U as ke,
    W as fe,
    Y as We,
    aa as K,
    b as _t,
    ba as R,
    c as F,
    ca as ze,
    d as ba,
    da as Fa,
    ea as ka,
    f as _a,
    fa as Ra,
    g as $,
    ga as se,
    h as Ca,
    ha as Qr,
    j as ce,
    ja as er,
    k as J,
    ka as pe,
    l as ee,
    la as M,
    m as Cr,
    ma as D,
    n as de,
    na as re,
    o as Ct,
    oa as he,
    p as H,
    q as ae,
    s as Yr,
    t as Br,
    u as n,
    v as Xr,
    w as G,
    x as St,
    y as Ue,
    z as Lt
} from "./chunk-OQBS4ZV5.mjs";
import {
    b as _,
    c as v
} from "./chunk-ELYU6EKT.mjs";
var Nt = '"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    hr = {
        position: "relative",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    jt = { ...hr,
        borderRadius: 6,
        background: "rgba(136, 85, 255, 0.3)",
        color: "#85F",
        border: "1px dashed #85F",
        flexDirection: "column"
    },
    Lr = {
        onClick: {
            type: o.EventHandler
        },
        onMouseEnter: {
            type: o.EventHandler
        },
        onMouseLeave: {
            type: o.EventHandler
        }
    },
    Fn = {
        type: o.Number,
        title: "Font Size",
        min: 2,
        max: 200,
        step: 1,
        displayStepper: !0
    },
    $r = {
        font: {
            type: o.Boolean,
            title: "Font",
            defaultValue: !1,
            disabledTitle: "Default",
            enabledTitle: "Custom"
        },
        fontFamily: {
            type: o.String,
            title: "Family",
            placeholder: "Inter",
            hidden: ({
                font: r
            }) => !r
        },
        fontWeight: {
            type: o.Enum,
            title: "Weight",
            options: [100, 200, 300, 400, 500, 600, 700, 800, 900],
            optionTitles: ["Thin", "Extra-light", "Light", "Regular", "Medium", "Semi-bold", "Bold", "Extra-bold", "Black"],
            hidden: ({
                font: r
            }) => !r
        }
    };

function Vt(r, t) {
    return Ma(!0, r, t)
}

function Ut(r, t) {
    return Ma(!1, r, t)
}

function Ma(r, t, a = !0) {
    let i = Gr();
    J(() => {
        a && i === r && t()
    }, [i])
}

function Jr(r) {
    let t = H(null);
    return t.current === null && (t.current = r()), t.current
}
var kn = () => {
        if (typeof _ < "u") {
            let r = _.userAgent.toLowerCase();
            return (r.indexOf("safari") > -1 || r.indexOf("framermobile") > -1 || r.indexOf("framerx") > -1) && r.indexOf("chrome") < 0
        } else return !1
    },
    Wt = () => de(() => kn(), []);
var Rn = {
    100: "Thin",
    200: "Extra-light",
    300: "Light",
    400: "Regular",
    500: "Medium",
    600: "Semi-bold",
    700: "Bold",
    800: "Extra-bold",
    900: "Black"
};

function Tt(r) {
    let {
        fontFamily: t = "Inter",
        fontSize: a = 16,
        fontWeight: i = 400,
        font: m = !1
    } = r, l = Rn[i], p = `"${t} ${l}", "${t}", ${Nt}`, y = t ? {
        fontSize: a,
        fontWeight: i,
        fontFamily: p
    } : {
        fontSize: a,
        fontWeight: i
    }, x = async () => {
        await pe.loadWebFontsFromSelectors([`CUSTOM;${t}`, `CUSTOM;${t} ${l}`, `GF;${t}-${l.toLowerCase()}`]).catch(g => console.error(g))
    };
    return J(() => {
        m && x()
    }, [m, t, i]), y
}

function Fr() {
    return de(() => ve.current() === ve.canvas, [])
}

function rr(r) {
    let {
        borderRadius: t,
        isMixedBorderRadius: a,
        topLeftRadius: i,
        topRightRadius: m,
        bottomRightRadius: l,
        bottomLeftRadius: p
    } = r;
    return de(() => a ? `${i}px ${m}px ${l}px ${p}px` : `${t}px`, [t, a, i, m, l, p])
}
var tr = {
    borderRadius: {
        title: "Radius",
        type: o.FusedNumber,
        toggleKey: "isMixedBorderRadius",
        toggleTitles: ["Radius", "Radius per corner"],
        valueKeys: ["topLeftRadius", "topRightRadius", "bottomRightRadius", "bottomLeftRadius"],
        valueLabels: ["TL", "TR", "BR", "BL"],
        min: 0
    }
};

function Ht(r) {
    let {
        padding: t,
        paddingPerSide: a,
        paddingTop: i,
        paddingRight: m,
        paddingBottom: l,
        paddingLeft: p
    } = r;
    return de(() => a ? `${i}px ${m}px ${l}px ${p}px` : t, [t, a, i, m, l, p])
}
var Et = {
    padding: {
        type: o.FusedNumber,
        toggleKey: "paddingPerSide",
        toggleTitles: ["Padding", "Padding per side"],
        valueKeys: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"],
        valueLabels: ["T", "R", "B", "L"],
        min: 0,
        title: "Padding"
    }
};
var Mn = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    zn = /^https?:\/\/([^\/]+)[^\?]+\??(.+)$/,
    Nn = r => Mn.test(String(r).toLowerCase()),
    jn = r => {
        var t;
        let [, a, i] = (t = r.replace("&amp;", "&").match(zn)) !== null && t !== void 0 ? t : [null, null, null];
        return [a, new URLSearchParams(i)]
    },
    Pt = K(function({
        url: t,
        input: a,
        button: i,
        layout: m,
        style: l,
        gap: p,
        onSubmit: y,
        ...x
    }) {
        let [g, u] = ae(a.value), [s, S] = ae(!1), [w, h] = ae(!1), [j, f] = ae(!1), L = de(() => ve.current() === ve.canvas, []), {
            fontFamily: c,
            fontSize: C,
            fontWeight: N
        } = Tt(x), V = rr(x), q = Ht(x), b = ce(O => O === "" || !Nn(O) ? (S(!0), !1) : !0, []), z = ce(O => {
            S(!1), u(O.target.value)
        }, []), A = ce(() => {
            event.preventDefault();
            let [O, ne] = jn(t);
            !b(g) || !O || !ne ? h(!1) : (ne.set("MERGE0", g), fetch(`https://${O}/subscribe/post`, {
                method: "POST",
                mode: "no-cors",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
                },
                body: ne.toString()
            }).then(_e => {
                f(!0), y()
            }).catch(() => {
                h(!1)
            }))
        }, [t, g]), P = ce(() => {
            h(!0)
        }, []);
        return e(n.div, {
            style: { ...l,
                ...hr,
                "--framer-mailchimp-placeholder-color": a.placeholderColor
            },
            children: j ? e(n.div, {
                style: {
                    height: "60px",
                    width: "60px",
                    background: i.fill,
                    color: i.color,
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                },
                initial: {
                    scale: 0
                },
                animate: {
                    scale: 1
                },
                transition: {
                    duration: .3
                },
                children: e("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "28",
                    height: "28",
                    children: e("path", {
                        d: "M 2 14 L 10 22 L 26 6",
                        fill: "transparent",
                        strokeWidth: "4",
                        stroke: "currentColor",
                        strokeLinecap: "round"
                    })
                })
            }) : d("form", {
                style: {
                    width: "100%",
                    display: "grid",
                    gap: p,
                    gridTemplateColumns: m === "vertical" ? "1fr" : "1fr max-content",
                    gridTemplateRows: m === "vertical" ? "1fr 1fr" : "1fr"
                },
                onSubmit: A,
                method: "POST",
                children: [e("div", {
                    style: {
                        position: "absolute",
                        visibility: "hidden"
                    },
                    "aria-hidden": "true",
                    children: e("input", {
                        type: "text",
                        name: "b_1487cc549a49109c00fe60a80_93cd7be172",
                        tabIndex: -1
                    })
                }), e("input", {
                    type: "email",
                    name: "email",
                    placeholder: a.placeholder,
                    value: L ? a.value : g,
                    className: "framer-mailchimp-input",
                    onChange: z,
                    style: { ...Na,
                        padding: q,
                        borderRadius: V,
                        fontFamily: c,
                        fontWeight: N,
                        fontSize: C,
                        background: a.fill,
                        color: a.color,
                        boxShadow: `inset 0 0 0 1px ${s?a.error:"transparent"}`
                    }
                }), d("div", {
                    style: {
                        position: "relative"
                    },
                    children: [e(n.input, {
                        type: "submit",
                        value: i.label,
                        onClick: P,
                        style: { ...Na,
                            cursor: "pointer",
                            borderRadius: V,
                            padding: q,
                            fontFamily: c,
                            fontWeight: i.fontWeight,
                            fontSize: C,
                            background: i.fill,
                            color: i.color,
                            zIndex: 1
                        },
                        transition: {
                            type: "ease",
                            duration: .3
                        },
                        whileHover: {
                            opacity: .8
                        }
                    }), w && e("div", {
                        style: {
                            borderRadius: V,
                            position: "absolute",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "100%",
                            height: "100%",
                            left: 0,
                            top: 0,
                            zIndex: 2,
                            color: i.color,
                            background: i.fill
                        },
                        children: e(n.div, {
                            style: {
                                height: 16,
                                width: 16
                            },
                            initial: {
                                rotate: 0
                            },
                            animate: {
                                rotate: 360
                            },
                            transition: {
                                duration: 2,
                                repeat: 1 / 0
                            },
                            children: d("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "16",
                                height: "16",
                                children: [e("path", {
                                    d: "M 8 0 C 3.582 0 0 3.582 0 8 C 0 12.419 3.582 16 8 16 C 12.418 16 16 12.419 16 8 C 15.999 3.582 12.418 0 8 0 Z M 8 14 C 4.687 14 2 11.314 2 8 C 2 4.687 4.687 2 8 2 C 11.314 2 14 4.687 14 8 C 14 11.314 11.314 14 8 14 Z",
                                    fill: "currentColor",
                                    opacity: "0.2"
                                }), e("path", {
                                    d: "M 8 0 C 12.418 0 15.999 3.582 16 8 C 16 8 16 9 15 9 C 14 9 14 8 14 8 C 14 4.687 11.314 2 8 2 C 4.687 2 2 4.687 2 8 C 2 8 2 9 1 9 C 0 9 0 8 0 8 C 0 3.582 3.582 0 8 0 Z",
                                    fill: "currentColor"
                                })]
                            })
                        })
                    })]
                })]
            })
        })
    }, [".framer-mailchimp-input::placeholder { color: var(--framer-mailchimp-placeholder-color) !important; }"]);
Pt.defaultProps = {
    fontSize: 16,
    fontFamily: "Inter",
    fontWeight: 400,
    padding: 15,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 8,
    topLeftRadius: 8,
    topRightRadius: 8,
    bottomRightRadius: 8,
    bottomLeftRadius: 8,
    gap: 15
};
Y(Pt, {
    url: {
        title: "URL",
        placeholder: "https://***.us6.list-manage.com/subscribe/post?u=***",
        type: o.String,
        description: "Create a [Mailchimp](https://mailchimp.com/) account and copy your embedded form URL. [Learn more\u2026](https://www.framer.com/sites/integrations/mailchimp/)"
    },
    layout: {
        title: "Layout",
        type: o.Enum,
        options: ["horizontal", "vertical"],
        displaySegmentedControl: !0
    },
    input: {
        title: "Input",
        type: o.Object,
        controls: {
            placeholder: {
                title: "Placeholder",
                type: o.String,
                defaultValue: "email@framer.com"
            },
            placeholderColor: {
                title: " ",
                type: o.Color,
                defaultValue: "rgba(0, 0, 0, 0.3)"
            },
            value: {
                title: "Value",
                type: o.String
            },
            fill: {
                title: "Fill",
                type: o.Color,
                defaultValue: "#EBEBEB"
            },
            color: {
                title: "Text",
                type: o.Color,
                defaultValue: "#000"
            },
            error: {
                title: "Error",
                type: o.Color,
                defaultValue: "#EE4444"
            }
        }
    },
    button: {
        title: "Button",
        type: o.Object,
        controls: {
            label: {
                title: "Label",
                type: o.String,
                defaultValue: "Sign Up"
            },
            fontWeight: { ...$r.fontWeight,
                defaultValue: 600
            },
            fill: {
                title: "Fill",
                type: o.Color,
                defaultValue: "#000"
            },
            color: {
                title: "Text",
                type: o.Color,
                defaultValue: "#FFF"
            }
        }
    },
    ...$r,
    fontSize: {
        title: "Font Size",
        type: o.Number,
        displayStepper: !0,
        defaultValue: 16
    },
    ...Et,
    ...tr,
    gap: {
        title: "Gap",
        type: o.Number,
        displayStepper: !0,
        min: 0
    },
    onSubmit: {
        type: o.EventHandler
    }
});
var Na = {
        WebkitAppearance: "none",
        width: "100%",
        lineHeight: "1.4em",
        outline: "none",
        border: "none"
    },
    Dt = Pt;
var It = r => r instanceof Yr;

function ja(r, t) {
    let a = H(t),
        i = H(),
        m = H(!1),
        l = ve.current() === ve.canvas,
        p = t ? .onChangeDeps ? t.onChangeDeps : [],
        y = ce(t ? .onChange, [...p]),
        x = ce(u => {
            var s;
            return !((s = a.current) === null || s === void 0) && s.transform ? a.current.transform(u) : u
        }, []),
        g = Jr(() => It(r) ? r : Br(x(r)));
    return J(() => {
        if (!It(r) && m.current) {
            var u, s;
            let w = x(r);
            if ((u = i.current) === null || u === void 0 || u.stop(), y && y(w, g), !((s = a.current) === null || s === void 0) && s.animate && !l) {
                var S;
                i.current = Rt(g, w, (S = a.current) === null || S === void 0 ? void 0 : S.transition)
            } else g.set(w)
        }
        m.current = !0
    }, [r, ...p]), g
}
var Ie;
(function(r) {
    r.Fill = "fill", r.Contain = "contain", r.Cover = "cover", r.None = "none", r.ScaleDown = "scale-down"
})(Ie || (Ie = {}));
var Te;
(function(r) {
    r.Video = "Upload", r.Url = "URL"
})(Te || (Te = {}));

function Vn(r) {
    let {
        width: t,
        height: a,
        topLeft: i,
        topRight: m,
        bottomRight: l,
        bottomLeft: p,
        id: y,
        children: x,
        ...g
    } = r;
    return g
}

function He(r) {
    let t = Vn(r);
    return e(Un, { ...t
    })
}
var Va = !1,
    Un = Ca(function(t) {
        let {
            srcType: a,
            srcFile: i,
            srcUrl: m,
            playing: l,
            canvasPlay: p,
            muted: y,
            playsinline: x,
            controls: g,
            progress: u,
            objectFit: s,
            backgroundColor: S,
            radius: w,
            topLeft: h,
            topRight: j,
            bottomRight: f,
            bottomLeft: L,
            isMixed: c,
            onSeeked: C,
            onPause: N,
            onPlay: V,
            onEnd: q,
            onClick: b,
            onMouseEnter: z,
            onMouseLeave: A,
            onMouseDown: P,
            onMouseUp: O,
            poster: ne,
            restartOnEnter: _e,
            posterEnabled: we,
            startTime: Ee,
            volume: Ge,
            loop: Ce
        } = t, be = Gr(), T = H(), sr = Wt(), Z = H(!1), Ze = H(null), Se = H(null), Ne = Fr(), le = rr(t), Me = Ee === 100 ? 99.9 : Ee, Qe = !Ne || p, $e = de(() => l, []), yr = de(() => Ne ? !0 : y, [Ne, y]), Pe = ce(te => {
            if (!T.current) return;
            let vr = (te === 1 ? .999 : te) * T.current.duration,
                pt = Math.abs(T.current.currentTime - vr) < .1;
            T.current.duration > 0 && !pt && (T.current.currentTime = vr)
        }, []), Q = ce(() => {
            !(T.current.currentTime > 0 && T.current.onplaying && !T.current.paused && !T.current.ended && T.current.readyState > T.current.HAVE_CURRENT_DATA) && T.current && !Z.current && be && (Z.current = !0, T.current.play().catch(vr => {}).finally(() => Z.current = !1))
        }, []), je = ce(() => {
            !T.current || Z.current || T.current.pause()
        }, []);
        J(() => {
            l && Qe ? Q() : je()
        }, [l, p]), J(() => {
            Va ? Pe(Me * .01) : Va = !0
        }, [Ee, i, m]);
        let De = ja(u, {
            transform: te => te * .01,
            onChange: te => {
                Pe(te)
            }
        });
        Lt(De, "change", te => {
            Ne || Pe(te)
        }), Vt(() => {
            Ze.current !== null && T.current && (!Se && Ce || !Ze.current) && Q()
        }), Ut(() => {
            T.current && (Se.current = T.current.ended, Ze.current = T.current.paused, je())
        });
        let Pr = de(() => {
            if (a === Te.Url) return m;
            if (a === Te.Video) return i
        }, [a, i, m]);
        return J(() => {
            sr && T.current && $e && setTimeout(() => Q(), 50)
        }, []), J(() => {
            T.current && !y && (T.current.volume = Ge / 100)
        }, [Ge]), e("video", {
            onClick: b,
            onMouseEnter: z,
            onMouseLeave: A,
            onMouseDown: P,
            onMouseUp: O,
            src: Pr,
            loop: Ce,
            ref: T,
            onSeeked: te => C ? .(te),
            onPause: te => N ? .(te),
            onPlay: te => V ? .(te),
            onEnded: te => q ? .(te),
            autoPlay: $e && Qe,
            poster: we ? ne : void 0,
            onLoadedData: () => {
                T.current && T.current.currentTime < .3 && Pe(Me * .01), Qe && T.current && $e && Q()
            },
            controls: g,
            muted: yr,
            playsInline: x,
            style: {
                width: "100%",
                height: "100%",
                borderRadius: le,
                display: "block",
                objectFit: s,
                backgroundColor: S,
                objectPosition: "50% 50%"
            }
        })
    });
He.displayName = "Video";
He.defaultProps = {
    srcType: Te.Url,
    srcUrl: "https://assets.mixkit.co/videos/preview/mixkit-ice-cream-glass-of-red-soda-5094-small.mp4",
    srcFile: "",
    posterEnabled: !1,
    controls: !1,
    autoPlay: !0,
    canvasPlay: !1,
    loop: !0,
    muted: !0,
    playsinline: !0,
    restartOnEnter: !1,
    objectFit: Ie.Cover,
    backgroundColor: "rgba(0,0,0,0)",
    radius: 0,
    volume: 25,
    startTime: 0
};
Y(He, {
    srcType: {
        type: o.Enum,
        displaySegmentedControl: !0,
        title: "Source",
        options: [Te.Url, Te.Video]
    },
    srcUrl: {
        type: o.String,
        title: " ",
        placeholder: "../example.mp4",
        hidden(r) {
            return r.srcType === Te.Video
        },
        description: "Hosted video file URL. For Youtube, use the Youtube component."
    },
    srcFile: {
        type: o.File,
        title: " ",
        allowedFileTypes: ["mp4"],
        hidden(r) {
            return r.srcType === Te.Url
        }
    },
    playing: {
        type: o.Boolean,
        title: "Playing",
        enabledTitle: "Yes",
        disabledTitle: "No"
    },
    posterEnabled: {
        type: o.Boolean,
        title: "Poster",
        enabledTitle: "Yes",
        disabledTitle: "No"
    },
    poster: {
        type: o.Image,
        title: " ",
        hidden: ({
            posterEnabled: r
        }) => !r
    },
    backgroundColor: {
        type: o.Color,
        title: "Background"
    },
    ...tr,
    startTime: {
        title: "Start Time",
        type: o.Number,
        min: 0,
        max: 100,
        step: .1,
        unit: "%"
    },
    loop: {
        type: o.Boolean,
        title: "Loop",
        enabledTitle: "Yes",
        disabledTitle: "No"
    },
    objectFit: {
        type: o.Enum,
        title: "Fit",
        options: [Ie.Cover, Ie.Fill, Ie.Contain, Ie.ScaleDown, Ie.None]
    },
    canvasPlay: {
        type: o.Boolean,
        title: "On Canvas",
        enabledTitle: "Play",
        disabledTitle: "Pause",
        hidden(r) {
            return r.autoPlay === !1
        }
    },
    controls: {
        type: o.Boolean,
        title: "Controls",
        enabledTitle: "Show",
        disabledTitle: "Hide"
    },
    muted: {
        type: o.Boolean,
        title: "Muted",
        enabledTitle: "Yes",
        disabledTitle: "No"
    },
    volume: {
        type: o.Number,
        max: 100,
        min: 0,
        unit: "%",
        hidden: ({
            muted: r
        }) => r
    },
    onEnd: {
        type: o.EventHandler
    },
    onSeeked: {
        type: o.EventHandler
    },
    onPause: {
        type: o.EventHandler
    },
    onPlay: {
        type: o.EventHandler
    },
    ...Lr
});
var qe;
(function(r) {
    r.Normal = "Off", r.Auto = "On", r.Loop = "Loop"
})(qe || (qe = {}));
var Ae;
(function(r) {
    r.High = "High Quality", r.Medium = "Medium Quality", r.Low = "Low Quality", r.Off = "Off"
})(Ae || (Ae = {}));
var ar;
(function(r) {
    r.WebP = "webp", r.JPG = "jpg"
})(ar || (ar = {}));

function ur({
    url: r,
    play: t,
    shouldMute: a,
    thumbnail: i,
    isRed: m,
    onClick: l,
    onMouseEnter: p,
    onMouseLeave: y,
    onMouseDown: x,
    onMouseUp: g,
    ...u
}) {
    let s = Fr(),
        S = t !== qe.Normal,
        w = s || i !== Ae.Off && !S,
        [h, j] = Ct(() => !0, !1),
        [f, L] = Ct(() => !0, !w),
        [c, C] = ae(!1),
        N = rr(u),
        V = N !== "0px 0px 0px 0px" && N !== "0px";
    if (r === "") return e(Pn, {});
    let q = Tn(r);
    if (q === void 0) return e(Dn, {
        message: "Invalid Youtube URL."
    });
    let [b, z] = q, A = Hn(b, i, En() ? ar.WebP : ar.JPG), P = z.searchParams;
    return P.set("iv_load_policy", "3"), P.set("rel", "0"), P.set("modestbranding", "1"), P.set("playsinline", "1"), (S || w) && P.set("autoplay", "1"), S && a && P.set("mute", "1"), t === qe.Loop && (P.set("loop", "1"), P.set("playlist", b)), m || P.set("color", "white"), d("article", {
        onPointerEnter: () => C(!0),
        onPointerLeave: () => C(!1),
        onPointerOver: j,
        onClick: L,
        style: { ...An,
            borderRadius: N,
            transform: V && f ? "translateZ(0.000001px)" : "unset",
            cursor: "pointer",
            overflow: "hidden"
        },
        children: [h && e("link", {
            rel: "preconnect",
            href: "https://www.youtube.com"
        }), h && e("link", {
            rel: "preconnect",
            href: "https://www.google.com"
        }), e("div", {
            style: { ...Wa,
                background: w ? `center / cover url(${A}) no-repeat` : void 0
            }
        }), f ? e("iframe", {
            style: Wa,
            src: z.href,
            frameBorder: "0",
            allow: "presentation; fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
            onClick: l,
            onMouseEnter: p,
            onMouseLeave: y,
            onMouseDown: x,
            onMouseUp: g
        }) : e(In, {
            onClick: L,
            isHovered: c,
            isRed: m
        })]
    })
}
ur.displayName = "YouTube";
Y(ur, {
    url: {
        type: o.String,
        title: "Video"
    },
    play: {
        type: o.Enum,
        title: "Autoplay",
        options: Object.values(qe)
    },
    shouldMute: {
        title: "Mute",
        type: o.Boolean,
        enabledTitle: "Yes",
        disabledTitle: "No",
        hidden(r) {
            return r.play === qe.Normal
        }
    },
    thumbnail: {
        title: "Thumbnail",
        description: "Showing a thumbnail improves performance.",
        type: o.Enum,
        options: Object.values(Ae),
        hidden(r) {
            return r.play !== qe.Normal
        }
    },
    isRed: {
        title: "Color",
        type: o.Boolean,
        enabledTitle: "Red",
        disabledTitle: "White"
    },
    ...tr,
    ...Lr
});
var Wn = {
    url: "https://youtu.be/smPos0mJvh8",
    play: qe.Normal,
    shouldMute: !0,
    thumbnail: Ae.Medium,
    isRed: !0
};
ur.defaultProps = Wn;

function Tn(r) {
    let t;
    try {
        t = new URL(r)
    } catch {
        let a = qt(r);
        return [r, a]
    }
    if (t.hostname === "youtube.com" || t.hostname === "www.youtube.com" || t.hostname === "youtube-nocookie.com" || t.hostname === "www.youtube-nocookie.com") {
        let a = t.pathname.slice(1).split("/");
        if (a[0] === "watch") {
            let i = t.searchParams.get("v"),
                m = qt(i);
            return [i, m]
        }
        if (a[0] === "embed") return [a[1], t]
    }
    if (t.hostname === "youtu.be") {
        let a = t.pathname.slice(1),
            i = qt(a);
        return [a, i]
    }
}

function qt(r) {
    return new URL(`https://www.youtube.com/embed/${r}`)
}

function Hn(r, t, a = ar.JPG) {
    let i = ar.WebP ? "https://i.ytimg.com/vi_webp/" : "https://i.ytimg.com/vi/",
        m = ar.WebP ? "webp" : "jpg";
    switch (t) {
        case Ae.Low:
            return `${i}${r}/hqdefault.${m}`;
        case Ae.Medium:
            return `${i}${r}/sddefault.${m}`;
        case Ae.High:
            return `${i}${r}/maxresdefault.${m}`;
        default:
            return `${i}${r}/0.${m}`
    }
}
var Ua;

function En() {
    if (!v) return !0;
    if (Ua !== void 0) return Ua;
    let r = document.createElement("canvas");
    return r.getContext && r.getContext("2d") ? r.toDataURL("image/webp").indexOf("data:image/webp") == 0 : !1
}

function Pn() {
    return e("div", {
        style: { ...jt,
            overflow: "hidden"
        },
        children: e("div", {
            style: Ta,
            children: "To embed a Youtube video, add the URL to the properties\xA0panel."
        })
    })
}

function Dn({
    message: r
}) {
    return e("div", {
        className: "framerInternalUI-errorPlaceholder",
        style: { ...hr,
            overflow: "hidden"
        },
        children: d("div", {
            style: Ta,
            children: ["Error: ", r]
        })
    })
}

function In({
    onClick: r,
    isHovered: t,
    isRed: a
}) {
    return e("button", {
        onClick: r,
        "aria-label": "Play",
        style: qn,
        children: d("svg", {
            height: "100%",
            version: "1.1",
            viewBox: "0 0 68 48",
            width: "100%",
            children: [e("path", {
                d: "M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z",
                fill: t ? a ? "#f00" : "#000" : "#212121",
                fillOpacity: t && a ? 1 : .8,
                style: {
                    transition: "fill .1s cubic-bezier(0.4, 0, 1, 1), fill-opacity .1s cubic-bezier(0.4, 0, 1, 1)"
                }
            }), e("path", {
                d: "M 45,24 27,14 27,34",
                fill: "#fff"
            })]
        })
    })
}
var qn = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 68,
        height: 48,
        padding: 0,
        border: "none",
        background: "transparent",
        cursor: "pointer"
    },
    An = {
        position: "relative",
        width: "100%",
        height: "100%"
    },
    Ta = {
        textAlign: "center",
        minWidth: 140
    },
    Wa = {
        position: "absolute",
        top: 0,
        left: 0,
        height: "100%",
        width: "100%"
    };
var kr = r => r;
var Kr = {
    ms: r => 1e3 * r,
    s: r => r / 1e3
};

function At(r, t) {
    return t ? r * (1e3 / t) : 0
}
var Ha = (r, t, a) => (((1 - 3 * a + 3 * t) * r + (3 * a - 6 * t)) * r + 3 * t) * r,
    On = 1e-7,
    Yn = 12;

function Bn(r, t, a, i, m) {
    let l, p, y = 0;
    do p = t + (a - t) / 2, l = Ha(p, i, m) - r, l > 0 ? a = p : t = p; while (Math.abs(l) > On && ++y < Yn);
    return p
}

function Rr(r, t, a, i) {
    if (r === t && a === i) return kr;
    let m = l => Bn(l, 0, 1, r, a);
    return l => l === 0 || l === 1 ? l : Ha(m(l), t, i)
}
var Sd = {
    ease: Rr(.25, .1, .25, 1),
    "ease-in": Rr(.42, 0, 1, 1),
    "ease-in-out": Rr(.42, 0, .58, 1),
    "ease-out": Rr(0, 0, .58, 1)
};

function Ea(r, t) {
    var a = {};
    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && t.indexOf(i) < 0 && (a[i] = r[i]);
    if (r != null && typeof Object.getOwnPropertySymbols == "function") {
        var m = 0;
        for (i = Object.getOwnPropertySymbols(r); m < i.length; m++) t.indexOf(i[m]) < 0 && Object.prototype.propertyIsEnumerable.call(r, i[m]) && (a[i[m]] = r[i[m]])
    }
    return a
}
var gr = {};
Object.defineProperty(gr, "__esModule", {
    value: !0
});
gr.warning = function() {};
gr.invariant = function() {};
var Md = gr.__esModule,
    zd = gr.warning,
    $n = gr.invariant;
var Jn = 5;

function et(r, t, a) {
    let i = Math.max(t - Jn, 0);
    return At(a - r(i), t - i)
}
var xr = {
        stiffness: 100,
        damping: 10,
        mass: 1
    },
    Kn = (r = xr.stiffness, t = xr.damping, a = xr.mass) => t / (2 * Math.sqrt(r * a));

function eo(r, t, a) {
    return r < t && a >= t || r > t && a <= t
}
var Yt = ({
        stiffness: r = xr.stiffness,
        damping: t = xr.damping,
        mass: a = xr.mass,
        from: i = 0,
        to: m = 1,
        velocity: l = 0,
        restSpeed: p = 2,
        restDistance: y = .5
    } = {}) => {
        l = l ? Kr.s(l) : 0;
        let x = {
                done: !1,
                hasReachedTarget: !1,
                current: i,
                target: m
            },
            g = m - i,
            u = Math.sqrt(r / a) / 1e3,
            s = Kn(r, t, a),
            S;
        if (s < 1) {
            let w = u * Math.sqrt(1 - s * s);
            S = h => m - Math.exp(-s * u * h) * ((s * u * g - l) / w * Math.sin(w * h) + g * Math.cos(w * h))
        } else S = w => m - Math.exp(-u * w) * (g + (u * g - l) * w);
        return w => {
            x.current = S(w);
            let h = w === 0 ? l : et(S, w, x.current),
                j = Math.abs(h) <= p,
                f = Math.abs(m - x.current) <= y;
            return x.done = j && f, x.hasReachedTarget = eo(i, m, x.current), x
        }
    },
    Pa = ({
        from: r = 0,
        velocity: t = 0,
        power: a = .8,
        decay: i = .325,
        bounceDamping: m,
        bounceStiffness: l,
        changeTarget: p,
        min: y,
        max: x,
        restDistance: g = .5,
        restSpeed: u
    }) => {
        i = Kr.ms(i);
        let s = {
                hasReachedTarget: !1,
                done: !1,
                current: r,
                target: r
            },
            S = b => y !== void 0 && b < y || x !== void 0 && b > x,
            w = b => y === void 0 ? x : x === void 0 || Math.abs(y - b) < Math.abs(x - b) ? y : x,
            h = a * t,
            j = r + h,
            f = p === void 0 ? j : p(j);
        s.target = f, f !== j && (h = f - r);
        let L = b => -h * Math.exp(-b / i),
            c = b => f + L(b),
            C = b => {
                let z = L(b),
                    A = c(b);
                s.done = Math.abs(z) <= g, s.current = s.done ? f : A
            },
            N, V, q = b => {
                S(s.current) && (N = b, V = Yt({
                    from: s.current,
                    to: w(s.current),
                    velocity: et(c, b, s.current),
                    damping: m,
                    stiffness: l,
                    restDistance: g,
                    restSpeed: u
                }))
            };
        return q(0), b => {
            let z = !1;
            return !V && N === void 0 && (z = !0, C(b), q(b)), N !== void 0 && b > N ? (s.hasReachedTarget = !0, V(b - N)) : (s.hasReachedTarget = !1, !z && C(b), s)
        }
    },
    Ot = 10,
    ro = 1e4;

function Da(r) {
    let t, a = Ot,
        i = r(0),
        m = [i.current];
    for (; !i.done && a < ro;) i = r(a), m.push(i.done ? i.target : i.current), t === void 0 && i.hasReachedTarget && (t = a), a += Ot;
    let l = a - Ot;
    return m.length === 1 && m.push(i.current), {
        keyframes: m,
        duration: l / 1e3,
        overshootDuration: (t ? ? l) / 1e3
    }
}
var to = ["", "X", "Y", "Z"],
    ao = ["translate", "scale", "rotate", "skew"];
var Ia = {
        syntax: "<angle>",
        initialValue: "0deg",
        toDefaultUnit: r => r + "deg"
    },
    io = {
        translate: {
            syntax: "<length-percentage>",
            initialValue: "0px",
            toDefaultUnit: r => r + "px"
        },
        rotate: Ia,
        scale: {
            syntax: "<number>",
            initialValue: 1,
            toDefaultUnit: kr
        },
        skew: Ia
    },
    no = new Map,
    oo = r => `--motion-${r}`,
    Ba = ["x", "y", "z"];
ao.forEach(r => {
    to.forEach(t => {
        Ba.push(r + t), no.set(oo(r + t), io[r])
    })
});
var t0 = new Set(Ba);
var qa = r => document.createElement("div").animate(r, {
        duration: .001
    }),
    Aa = {
        cssRegisterProperty: () => typeof CSS < "u" && Object.hasOwnProperty.call(CSS, "registerProperty"),
        waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate"),
        partialKeyframes: () => {
            try {
                qa({
                    opacity: [1]
                })
            } catch {
                return !1
            }
            return !0
        },
        finished: () => Boolean(qa({
            opacity: [0, 1]
        }).finished)
    },
    Bt = {},
    so = {};
for (let r in Aa) so[r] = () => (Bt[r] === void 0 && (Bt[r] = Aa[r]()), Bt[r]);

function Xa(r, t) {
    var a;
    return typeof r == "string" ? t ? ((a = t[r]) !== null && a !== void 0 || (t[r] = document.querySelectorAll(r)), r = t[r]) : r = document.querySelectorAll(r) : r instanceof Element && (r = [r]), Array.from(r || [])
}

function Ga(r) {
    let t = new WeakMap;
    return (a = {}) => {
        let i = new Map,
            m = (p = 0, y = 100, x = 0, g = !1) => {
                let u = `${p}-${y}-${x}-${g}`;
                return i.has(u) || i.set(u, r(Object.assign({
                    from: p,
                    to: y,
                    velocity: x,
                    restSpeed: g ? .05 : 2,
                    restDistance: g ? .01 : .5
                }, a))), i.get(u)
            },
            l = p => (t.has(p) || t.set(p, Da(p)), t.get(p));
        return {
            createAnimation: (p, y, x, g, u) => {
                var s, S;
                let w, h = p.length;
                if (x && h <= 2 && p.every(mo)) {
                    let f = p[h - 1],
                        L = h === 1 ? null : p[0],
                        c = 0,
                        C = 0,
                        N = u ? .generator;
                    if (N) {
                        let {
                            animation: b,
                            generatorStartTime: z
                        } = u, A = b ? .startTime || z || 0, P = b ? .currentTime || performance.now() - A, O = N(P).current;
                        C = (s = L) !== null && s !== void 0 ? s : O, (h === 1 || h === 2 && p[0] === null) && (c = et(ne => N(ne).current, P, O))
                    } else C = (S = L) !== null && S !== void 0 ? S : parseFloat(y());
                    let V = m(C, f, c, g ? .includes("scale")),
                        q = l(V);
                    w = Object.assign(Object.assign({}, q), {
                        easing: "linear"
                    }), u && (u.generator = V, u.generatorStartTime = performance.now())
                } else w = {
                    easing: "ease",
                    duration: l(m(0, 100)).overshootDuration
                };
                return w
            }
        }
    }
}
var mo = r => typeof r != "string",
    a0 = Ga(Yt),
    i0 = Ga(Pa),
    lo = {
        any: 0,
        all: 1
    };

function fo(r, t, {
    root: a,
    margin: i,
    amount: m = "any"
} = {}) {
    if (typeof IntersectionObserver > "u") return () => {};
    let l = Xa(r),
        p = new WeakMap,
        y = g => {
            g.forEach(u => {
                let s = p.get(u.target);
                if (u.isIntersecting !== Boolean(s))
                    if (u.isIntersecting) {
                        let S = t(u);
                        typeof S == "function" ? p.set(u.target, S) : x.unobserve(u.target)
                    } else s && (s(u), p.delete(u.target))
            })
        },
        x = new IntersectionObserver(y, {
            root: a,
            rootMargin: i,
            threshold: typeof m == "number" ? m : lo[m]
        });
    return l.forEach(g => x.observe(g)), () => x.disconnect()
}
var rt = new WeakMap,
    Oe;

function po(r, t) {
    if (t) {
        let {
            inlineSize: a,
            blockSize: i
        } = t[0];
        return {
            width: a,
            height: i
        }
    }
    return r instanceof SVGElement && "getBBox" in r ? r.getBBox() : {
        width: r.offsetWidth,
        height: r.offsetHeight
    }
}

function co({
    target: r,
    contentRect: t,
    borderBoxSize: a
}) {
    var i;
    (i = rt.get(r)) === null || i === void 0 || i.forEach(m => {
        m({
            target: r,
            contentSize: t,
            get size() {
                return po(r, a)
            }
        })
    })
}

function ho(r) {
    r.forEach(co)
}

function uo() {
    typeof ResizeObserver < "u" && (Oe = new ResizeObserver(ho))
}

function go(r, t) {
    Oe || uo();
    let a = Xa(r);
    return a.forEach(i => {
        let m = rt.get(i);
        m || (m = new Set, rt.set(i, m)), m.add(t), Oe ? .observe(i)
    }), () => {
        a.forEach(i => {
            let m = rt.get(i);
            m ? .delete(t), m ? .size || Oe ? .unobserve(i)
        })
    }
}
var tt = new Set,
    Mr;

function xo() {
    Mr = () => {
        let r = {
                width: v.innerWidth,
                height: v.innerHeight
            },
            t = {
                target: v,
                size: r,
                contentSize: r
            };
        tt.forEach(a => a(t))
    }, v.addEventListener("resize", Mr)
}

function wo(r) {
    return tt.add(r), Mr || xo(), () => {
        tt.delete(r), !tt.size && Mr && (Mr = void 0)
    }
}

function Za(r, t) {
    return typeof r == "function" ? wo(r) : go(r, t)
}

function Xt(r, t, a) {
    r.dispatchEvent(new CustomEvent(t, {
        detail: {
            originalEvent: a
        }
    }))
}

function Oa(r, t, a) {
    r.dispatchEvent(new CustomEvent(t, {
        detail: {
            originalEntry: a
        }
    }))
}
var yo = {
        isActive: r => Boolean(r.inView),
        subscribe: (r, {
            enable: t,
            disable: a
        }, {
            inViewOptions: i = {}
        }) => {
            let {
                once: m
            } = i, l = Ea(i, ["once"]);
            return fo(r, p => {
                if (t(), Oa(r, "viewenter", p), !m) return y => {
                    a(), Oa(r, "viewleave", y)
                }
            }, l)
        }
    },
    Ya = (r, t, a) => i => {
        (!i.pointerType || i.pointerType === "mouse") && (a(), Xt(r, t, i))
    },
    vo = {
        isActive: r => Boolean(r.hover),
        subscribe: (r, {
            enable: t,
            disable: a
        }) => {
            let i = Ya(r, "hoverstart", t),
                m = Ya(r, "hoverend", a);
            return r.addEventListener("pointerenter", i), r.addEventListener("pointerleave", m), () => {
                r.removeEventListener("pointerenter", i), r.removeEventListener("pointerleave", m)
            }
        }
    },
    bo = {
        isActive: r => Boolean(r.press),
        subscribe: (r, {
            enable: t,
            disable: a
        }) => {
            let i = l => {
                    a(), Xt(r, "pressend", l), v.removeEventListener("pointerup", i)
                },
                m = l => {
                    t(), Xt(r, "pressstart", l), v.addEventListener("pointerup", i)
                };
            return r.addEventListener("pointerdown", m), () => {
                r.removeEventListener("pointerdown", m), v.removeEventListener("pointerup", i)
            }
        }
    },
    _o = {
        inView: yo,
        hover: vo,
        press: bo
    },
    n0 = ["initial", "animate", ...Object.keys(_o), "exit"];
var at = () => typeof document == "object";

function Co() {
    if (at()) {
        if (typeof document.hidden < "u") return "visibilitychange";
        if (typeof document.msHidden < "u") return "msvisibilitychange";
        if (typeof document.webkitHidden < "u") return "webkitvisibilitychange"
    }
}

function So() {
    if (at()) {
        if (typeof document.hidden < "u") return "hidden";
        if (typeof document.msHidden < "u") return "msHidden";
        if (typeof document.webkitHidden < "u") return "webkitHidden"
    }
}

function Qa() {
    if (at()) return !document[So()]
}

function $a() {
    if (!at()) return;
    let [r, t] = ae(Qa()), a = () => t(Qa());
    return J(() => {
        let i = Co();
        return document.addEventListener(i, a, !1), () => {
            document.removeEventListener(i, a)
        }
    }), r
}

function ie(r) {
    let {
        slots: t,
        startFrom: a,
        direction: i,
        effectsOptions: m,
        autoPlayControl: l,
        dragControl: p,
        alignment: y,
        gap: x,
        padding: g,
        paddingPerSide: u,
        paddingTop: s,
        paddingRight: S,
        paddingBottom: w,
        paddingLeft: h,
        itemAmount: j,
        fadeOptions: f,
        intervalControl: L,
        transitionControl: c,
        arrowOptions: C,
        borderRadius: N,
        progressOptions: V,
        style: q
    } = r, {
        effectsOpacity: b,
        effectsScale: z,
        effectsRotate: A,
        effectsPerspective: P,
        effectsHover: O
    } = m, {
        fadeContent: ne,
        overflow: _e,
        fadeWidth: we,
        fadeInset: Ee,
        fadeAlpha: Ge
    } = f, {
        showMouseControls: Ce,
        arrowSize: be,
        arrowRadius: T,
        arrowFill: sr,
        leftArrow: Z,
        rightArrow: Ze,
        arrowShouldSpace: Se = !0,
        arrowShouldFadeIn: Ne = !1,
        arrowPosition: le,
        arrowPadding: Me,
        arrowGap: Qe,
        arrowPaddingTop: $e,
        arrowPaddingRight: yr,
        arrowPaddingBottom: Pe,
        arrowPaddingLeft: Q
    } = C, {
        showProgressDots: je,
        dotSize: De,
        dotsInset: Pr,
        dotsRadius: ia,
        dotsPadding: te,
        dotsGap: vr,
        dotsFill: pt,
        dotsBackground: Ki,
        dotsActiveOpacity: en,
        dotsOpacity: rn,
        dotsBlur: na
    } = V, tn = u ? `${s}px ${S}px ${w}px ${h}px` : `${g}px`, Je = ve.current() === ve.canvas, mr = _t.count(t) > 0, B = i === "left" || i === "right", Dr = i === "right" || i === "bottom";
    if (!mr) return d("section", {
        style: Lo,
        children: [e("div", {
            style: Fo,
            children: "\u2B50\uFE0F"
        }), e("p", {
            style: ko,
            children: "Connect to Content"
        }), e("p", {
            style: Ro,
            children: "Add layers or components to make infinite auto-playing slideshows."
        })]
    });
    let br = H(null),
        oe = de(() => t.map(W => _a()), [t]),
        ct = H(void 0),
        [X, an] = ae({
            parent: null,
            children: null,
            item: null,
            itemWidth: null,
            itemHeight: null
        }),
        [nn, oa] = ae(!1),
        [on, sa] = ae(l),
        [sn, ma] = ae(!1),
        [lr, la] = ae(!1),
        dt = [],
        fa = 4;
    Je && (fa = 1);
    let pa = ce(() => {
        kt.read(() => {
            if (mr && br.current) {
                let W = t.length - 1,
                    Fe = B ? br.current.offsetWidth : br.current.offsetHeight,
                    ye = oe[0].current ? B ? oe[0].current.offsetLeft : oe[0].current.offsetTop : 0,
                    dr = (oe[W].current ? B ? oe[W].current.offsetLeft + oe[W].current.offsetWidth : oe[W].current.offsetTop + oe[W].current.offsetHeight : 0) - ye + x,
                    Ar = oe[0].current ? B ? oe[0].current.offsetWidth : oe[0].current.offsetHeight : 0,
                    vt = oe[0].current ? oe[0].current.offsetWidth : 0,
                    bt = oe[0].current ? oe[0].current.offsetHeight : 0;
                an({
                    parent: Fe,
                    children: dr,
                    item: Ar,
                    itemWidth: vt,
                    itemHeight: bt
                })
            }
        })
    }, [mr]);
    Cr(() => {
        mr && pa()
    }, [mr, j]);
    let ht = H(!0);
    J(() => Za(br.current, ({
        contentSize: W
    }) => {
        !ht.current && (W.width || W.height) && (pa(), la(!0)), ht.current = !1
    }), []), J(() => {
        if (lr) {
            let W = setTimeout(() => la(!1), 500);
            return () => clearTimeout(W)
        }
    }, [lr]);
    let fr = t ? .length,
        Ir = Je ? 0 : X ? .children,
        ut = X ? .item + x,
        mn = a * ut,
        [Le, _r] = ae(a + fr),
        [ln, ca] = ae(!1),
        da = $a(),
        ha = Dr ? 1 : -1,
        pr = St(Ir),
        ua = B ? -a * (X ? .itemWidth + x) : -a * (X ? .itemHeight + x),
        gt = () => ha * Le * ut,
        xt = Je ? 0 : Ue(pr, W => {
            let Fe = Ke(-Ir, -Ir * 2, W);
            return isNaN(Fe) ? 0 : Fe
        }),
        fn = Ke(0, fr, Le),
        pn = Ke(0, -fr, Le);
    Cr(() => {
        X ? .children !== null && !ht.current && lr && pr.set(gt())
    }, [X, Ir, ha, mn, Le, ut, lr]);
    let ga = () => {
            Je || !mr || !X.parent || ln || (pr.get() !== gt() && Ft(pr, gt(), c), l && on && (ct.current = setTimeout(() => {
                _r(Le + 1), ga()
            }, L * 1e3)))
        },
        cr = W => {
            _r(Dr ? Le - W : Le + W)
        },
        cn = W => {
            let Fe = Ke(0, fr, Le),
                ye = Ke(0, -fr, Le),
                Ve = W - Fe,
                dr = W - Math.abs(ye);
            _r(Dr ? Le - dr : Le + Ve)
        },
        dn = () => {
            ca(!0)
        },
        hn = (W, {
            offset: Fe,
            velocity: ye
        }) => {
            ca(!1);
            let Ve = B ? Fe.x : Fe.y,
                dr = 200,
                Ar = B ? ye.x : ye.y,
                vt = Ve < -X.item / 2,
                bt = Ve > X.item / 2,
                Ln = Math.abs(Ve),
                Or = Math.round(Ln / X.item),
                va = Or === 0 ? 1 : Or;
            Ar > dr ? cr(-va) : Ar < -dr ? cr(va) : (vt && cr(Or), bt && cr(-Or))
        };
    J(() => {
        if (!(!da || lr)) return ga(), () => ct.current && clearTimeout(ct.current)
    }, [dt, da, lr]);
    let un = 0,
        xa = `calc(${100/j}% - ${x}px + ${x/j}px)`;
    for (let W = 0; W < fa; W++) dt.push(..._t.map(t, (Fe, ye) => {
        let Ve;
        return ye === 0 && (Ve = oe[0]), ye === t.length - 1 && (Ve = oe[1]), e(No, {
            ref: oe[ye],
            slideKey: W + ye + "lg",
            index: W,
            width: B && j > 1 ? xa : "100%",
            height: B ? "100%" : j > 1 ? xa : "100%",
            size: X,
            child: Fe,
            numChildren: t ? .length,
            wrappedValue: xt,
            childCounter: un++,
            gap: x,
            isCanvas: Je,
            isHorizontal: B,
            effectsOpacity: b,
            effectsScale: z,
            effectsRotate: A,
            children: W + ye
        }, W + ye + "lg")
    }));
    let gn = B ? "to right" : "to bottom",
        wa = we / 2,
        xn = 100 - we / 2,
        wn = zo(Ee, 0, wa),
        yn = 100 - Ee,
        wt = `linear-gradient(${gn}, rgba(0, 0, 0, ${Ge}) ${wn}%, rgba(0, 0, 0, 1) ${wa}%, rgba(0, 0, 0, 1) ${xn}%, rgba(0, 0, 0, ${Ge}) ${yn}%)`,
        yt = [],
        qr = {};
    if (je) {
        for (let W = 0; W < t ? .length; W++) yt.push(e(jo, {
            dotStyle: { ...Uo,
                width: De,
                height: De,
                backgroundColor: pt
            },
            buttonStyle: Gt,
            selectedOpacity: en,
            opacity: rn,
            onClick: () => cn(W),
            wrappedIndex: fn,
            wrappedIndexInverted: pn,
            total: fr,
            index: W,
            gap: vr,
            padding: te,
            isHorizontal: B,
            isInverted: Dr
        }, W));
        na > 0 && (qr.backdropFilter = qr.WebkitBackdropFilter = qr.MozBackdropFilter = `blur(${na}px)`)
    }
    let vn = p ? {
            drag: B ? "x" : "y",
            onDragStart: dn,
            onDragEnd: hn,
            dragDirectionLock: !0,
            values: {
                x: pr,
                y: pr
            },
            dragMomentum: !1
        } : {},
        bn = le === "top-left" || le === "top-mid" || le === "top-right",
        _n = le === "bottom-left" || le === "bottom-mid" || le === "bottom-right",
        Cn = le === "top-left" || le === "bottom-left",
        Sn = le === "top-right" || le === "bottom-right",
        ya = le === "top-mid" || le === "bottom-mid" || le === "auto";
    return d("section", {
        style: { ...Ja,
            padding: tn,
            WebkitMaskImage: ne ? wt : void 0,
            MozMaskImage: ne ? wt : void 0,
            maskImage: ne ? wt : void 0,
            opacity: X ? .item !== null ? 1 : 0,
            userSelect: "none"
        },
        onMouseEnter: () => {
            oa(!0), O || sa(!1)
        },
        onMouseLeave: () => {
            oa(!1), O || sa(!0)
        },
        onMouseDown: W => {
            W.preventDefault(), ma(!0)
        },
        onMouseUp: () => ma(!1),
        children: [e("div", {
            style: {
                width: "100%",
                height: "100%",
                margin: 0,
                padding: "inherit",
                position: "absolute",
                inset: 0,
                overflow: _e ? "visible" : "hidden",
                borderRadius: N,
                userSelect: "none",
                perspective: P
            },
            children: e(n.ul, {
                ref: br,
                ...vn,
                style: { ...Ja,
                    gap: x,
                    placeItems: y,
                    x: B ? Je ? ua : xt : 0,
                    y: B ? 0 : Je ? ua : xt,
                    flexDirection: B ? "row" : "column",
                    transformStyle: A !== 0 ? "preserve-3d" : void 0,
                    cursor: p ? sn ? "grabbing" : "grab" : "auto",
                    userSelect: "none",
                    ...q
                },
                children: dt
            })
        }), d("fieldset", {
            style: { ...Mo
            },
            "aria-label": "Slideshow pagination controls",
            className: "framer--slideshow-controls",
            children: [d(n.div, {
                style: {
                    position: "absolute",
                    display: "flex",
                    flexDirection: B ? "row" : "column",
                    justifyContent: Se ? "space-between" : "center",
                    gap: Se ? "unset" : Qe,
                    opacity: Ne ? 0 : 1,
                    alignItems: "center",
                    inset: Me,
                    top: Se ? Me : bn ? $e : "unset",
                    left: Se ? Me : Cn ? Q : ya ? 0 : "unset",
                    right: Se ? Me : Sn ? yr : ya ? 0 : "unset",
                    bottom: Se ? Me : _n ? Pe : "unset"
                },
                animate: Ne && {
                    opacity: nn ? 1 : 0
                },
                transition: c,
                children: [e(n.button, {
                    type: "button",
                    style: { ...Gt,
                        backgroundColor: sr,
                        width: be,
                        height: be,
                        borderRadius: T,
                        rotate: B ? 0 : 90,
                        display: Ce ? "block" : "none",
                        pointerEvents: "auto"
                    },
                    onClick: () => cr(-1),
                    "aria-label": "Previous",
                    whileTap: {
                        scale: .9
                    },
                    transition: {
                        duration: .15
                    },
                    children: e("img", {
                        width: be,
                        height: be,
                        src: Z || "https://framerusercontent.com/images/6tTbkXggWgQCAJ4DO2QEdXXmgM.svg",
                        alt: "Back Arrow"
                    })
                }), e(n.button, {
                    type: "button",
                    style: { ...Gt,
                        backgroundColor: sr,
                        width: be,
                        height: be,
                        borderRadius: T,
                        rotate: B ? 0 : 90,
                        display: Ce ? "block" : "none",
                        pointerEvents: "auto"
                    },
                    onClick: () => cr(1),
                    "aria-label": "Next",
                    whileTap: {
                        scale: .9
                    },
                    transition: {
                        duration: .15
                    },
                    children: e("img", {
                        width: be,
                        height: be,
                        src: Ze || "https://framerusercontent.com/images/11KSGbIZoRSg4pjdnUoif6MKHI.svg",
                        alt: "Next Arrow"
                    })
                })]
            }), yt.length > 1 ? e("div", {
                style: { ...Vo,
                    left: B ? "50%" : Pr,
                    top: B ? "unset" : "50%",
                    transform: B ? "translateX(-50%)" : "translateY(-50%)",
                    flexDirection: B ? "row" : "column",
                    bottom: B ? Pr : "unset",
                    borderRadius: ia,
                    backgroundColor: Ki,
                    userSelect: "none",
                    ...qr
                },
                children: yt
            }) : null]
        })]
    })
}
ie.defaultProps = {
    direction: "left",
    dragControl: !1,
    startFrom: 0,
    itemAmount: 1,
    infinity: !0,
    gap: 10,
    padding: 10,
    autoPlayControl: !0,
    effectsOptions: {
        effectsOpacity: 1,
        effectsScale: 1,
        effectsRotate: 0,
        effectsPerspective: 1200,
        effectsHover: !0
    },
    transitionControl: {
        type: "spring",
        stiffness: 200,
        damping: 40
    },
    fadeOptions: {
        fadeContent: !1,
        overflow: !1,
        fadeWidth: 25,
        fadeAlpha: 0,
        fadeInset: 0
    },
    arrowOptions: {
        showMouseControls: !0,
        arrowShouldFadeIn: !1,
        arrowShouldSpace: !0,
        arrowFill: "rgba(0,0,0,0.2)",
        arrowSize: 40
    },
    progressOptions: {
        showProgressDots: !0
    }
};
Y(ie, {
    slots: {
        type: o.Array,
        title: "Content",
        control: {
            type: o.ComponentInstance
        }
    },
    direction: {
        type: o.Enum,
        title: "Direction",
        options: ["left", "right", "top", "bottom"],
        optionIcons: ["direction-left", "direction-right", "direction-up", "direction-down"],
        optionTitles: ["Left", "Right", "Top", "Bottom"],
        displaySegmentedControl: !0,
        defaultValue: ie.defaultProps.direction
    },
    autoPlayControl: {
        type: o.Boolean,
        title: "Auto Play",
        defaultValue: !0
    },
    intervalControl: {
        type: o.Number,
        title: "Interval",
        defaultValue: 1.5,
        min: .5,
        max: 10,
        step: .1,
        displayStepper: !0,
        unit: "s",
        hidden: r => !r.autoPlayControl
    },
    dragControl: {
        type: o.Boolean,
        title: "Draggable",
        defaultValue: !1
    },
    startFrom: {
        type: o.Number,
        title: "Current",
        min: 0,
        max: 10,
        displayStepper: !0,
        defaultValue: ie.defaultProps.startFrom
    },
    effectsOptions: {
        type: o.Object,
        title: "Effects",
        controls: {
            effectsOpacity: {
                type: o.Number,
                title: "Opacity",
                defaultValue: ie.defaultProps.effectsOptions.effectsOpacity,
                min: 0,
                max: 1,
                step: .01,
                displayStepper: !0
            },
            effectsScale: {
                type: o.Number,
                title: "Scale",
                defaultValue: ie.defaultProps.effectsOptions.effectsScale,
                min: 0,
                max: 1,
                step: .01,
                displayStepper: !0
            },
            effectsPerspective: {
                type: o.Number,
                title: "Perspective",
                defaultValue: ie.defaultProps.effectsOptions.effectsPerspective,
                min: 200,
                max: 2e3,
                step: 1
            },
            effectsRotate: {
                type: o.Number,
                title: "Rotate",
                defaultValue: ie.defaultProps.effectsOptions.effectsRotate,
                min: -180,
                max: 180,
                step: 1
            },
            effectsHover: {
                type: o.Boolean,
                title: "On Hover",
                enabledTitle: "Play",
                disabledTitle: "Pause",
                defaultValue: ie.defaultProps.effectsOptions.effectsHover
            }
        }
    },
    alignment: {
        type: o.Enum,
        title: "Align",
        options: ["flex-start", "center", "flex-end"],
        optionIcons: {
            direction: {
                right: ["align-top", "align-middle", "align-bottom"],
                left: ["align-top", "align-middle", "align-bottom"],
                top: ["align-left", "align-center", "align-right"],
                bottom: ["align-left", "align-center", "align-right"]
            }
        },
        defaultValue: "center",
        displaySegmentedControl: !0
    },
    itemAmount: {
        type: o.Number,
        title: "Items",
        min: 1,
        max: 10,
        displayStepper: !0,
        defaultValue: ie.defaultProps.itemAmount
    },
    gap: {
        type: o.Number,
        title: "Gap",
        min: 0
    },
    padding: {
        title: "Padding",
        type: o.FusedNumber,
        toggleKey: "paddingPerSide",
        toggleTitles: ["Padding", "Padding per side"],
        defaultValue: 0,
        valueKeys: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"],
        valueLabels: ["T", "R", "B", "L"],
        min: 0
    },
    borderRadius: {
        type: o.Number,
        title: "Radius",
        min: 0,
        max: 500,
        displayStepper: !0,
        defaultValue: 0
    },
    transitionControl: {
        type: o.Transition,
        defaultValue: ie.defaultProps.transitionControl,
        title: "Transition"
    },
    fadeOptions: {
        type: o.Object,
        title: "Clipping",
        controls: {
            fadeContent: {
                type: o.Boolean,
                title: "Fade",
                defaultValue: !1
            },
            overflow: {
                type: o.Boolean,
                title: "Overflow",
                enabledTitle: "Show",
                disabledTitle: "Hide",
                defaultValue: !1,
                hidden(r) {
                    return r.fadeContent === !0
                }
            },
            fadeWidth: {
                type: o.Number,
                title: "Width",
                defaultValue: 25,
                min: 0,
                max: 100,
                unit: "%",
                hidden(r) {
                    return r.fadeContent === !1
                }
            },
            fadeInset: {
                type: o.Number,
                title: "Inset",
                defaultValue: 0,
                min: 0,
                max: 100,
                unit: "%",
                hidden(r) {
                    return r.fadeContent === !1
                }
            },
            fadeAlpha: {
                type: o.Number,
                title: "Opacity",
                defaultValue: 0,
                min: 0,
                max: 1,
                step: .05,
                hidden(r) {
                    return r.fadeContent === !1
                }
            }
        }
    },
    arrowOptions: {
        type: o.Object,
        title: "Arrows",
        controls: {
            showMouseControls: {
                type: o.Boolean,
                title: "Show",
                defaultValue: ie.defaultProps.arrowOptions.showMouseControls
            },
            arrowFill: {
                type: o.Color,
                title: "Fill",
                hidden: r => !r.showMouseControls,
                defaultValue: ie.defaultProps.arrowOptions.arrowFill
            },
            leftArrow: {
                type: o.Image,
                title: "Previous",
                hidden: r => !r.showMouseControls
            },
            rightArrow: {
                type: o.Image,
                title: "Next",
                hidden: r => !r.showMouseControls
            },
            arrowSize: {
                type: o.Number,
                title: "Size",
                min: 0,
                max: 200,
                displayStepper: !0,
                defaultValue: ie.defaultProps.arrowOptions.arrowSize,
                hidden: r => !r.showMouseControls
            },
            arrowRadius: {
                type: o.Number,
                title: "Radius",
                min: 0,
                max: 500,
                defaultValue: 40,
                hidden: r => !r.showMouseControls
            },
            arrowShouldFadeIn: {
                type: o.Boolean,
                title: "Fade In",
                defaultValue: !1,
                hidden: r => !r.showMouseControls
            },
            arrowShouldSpace: {
                type: o.Boolean,
                title: "Distance",
                enabledTitle: "Space",
                disabledTitle: "Group",
                defaultValue: ie.defaultProps.arrowOptions.arrowShouldSpace,
                hidden: r => !r.showMouseControls
            },
            arrowPosition: {
                type: o.Enum,
                title: "Position",
                options: ["auto", "top-left", "top-mid", "top-right", "bottom-left", "bottom-mid", "bottom-right"],
                optionTitles: ["Center", "Top Left", "Top Middle", "Top Right", "Bottom Left", "Bottom Middle", "Bottom Right"],
                hidden: r => !r.showMouseControls || r.arrowShouldSpace
            },
            arrowPadding: {
                type: o.Number,
                title: "Inset",
                min: -100,
                max: 100,
                defaultValue: 20,
                displayStepper: !0,
                hidden: r => !r.showMouseControls || !r.arrowShouldSpace
            },
            arrowPaddingTop: {
                type: o.Number,
                title: "Top",
                min: -500,
                max: 500,
                defaultValue: 0,
                displayStepper: !0,
                hidden: r => !r.showMouseControls || r.arrowShouldSpace || r.arrowPosition === "auto" || r.arrowPosition === "bottom-mid" || r.arrowPosition === "bottom-left" || r.arrowPosition === "bottom-right"
            },
            arrowPaddingBottom: {
                type: o.Number,
                title: "Bottom",
                min: -500,
                max: 500,
                defaultValue: 0,
                displayStepper: !0,
                hidden: r => !r.showMouseControls || r.arrowShouldSpace || r.arrowPosition === "auto" || r.arrowPosition === "top-mid" || r.arrowPosition === "top-left" || r.arrowPosition === "top-right"
            },
            arrowPaddingRight: {
                type: o.Number,
                title: "Right",
                min: -500,
                max: 500,
                defaultValue: 0,
                displayStepper: !0,
                hidden: r => !r.showMouseControls || r.arrowShouldSpace || r.arrowPosition === "auto" || r.arrowPosition === "top-left" || r.arrowPosition === "top-mid" || r.arrowPosition === "bottom-left" || r.arrowPosition === "bottom-mid"
            },
            arrowPaddingLeft: {
                type: o.Number,
                title: "Left",
                min: -500,
                max: 500,
                defaultValue: 0,
                displayStepper: !0,
                hidden: r => !r.showMouseControls || r.arrowShouldSpace || r.arrowPosition === "auto" || r.arrowPosition === "top-right" || r.arrowPosition === "top-mid" || r.arrowPosition === "bottom-right" || r.arrowPosition === "bottom-mid"
            },
            arrowGap: {
                type: o.Number,
                title: "Gap",
                min: 0,
                max: 100,
                defaultValue: 10,
                displayStepper: !0,
                hidden: r => !r.showMouseControls || r.arrowShouldSpace
            }
        }
    },
    progressOptions: {
        type: o.Object,
        title: "Dots",
        controls: {
            showProgressDots: {
                type: o.Boolean,
                title: "Show",
                defaultValue: !1
            },
            dotSize: {
                type: o.Number,
                title: "Size",
                min: 1,
                max: 100,
                defaultValue: 10,
                displayStepper: !0,
                hidden: r => !r.showProgressDots || r.showScrollbar
            },
            dotsInset: {
                type: o.Number,
                title: "Inset",
                min: -100,
                max: 100,
                defaultValue: 10,
                displayStepper: !0,
                hidden: r => !r.showProgressDots || r.showScrollbar
            },
            dotsGap: {
                type: o.Number,
                title: "Gap",
                min: 0,
                max: 100,
                defaultValue: 10,
                displayStepper: !0,
                hidden: r => !r.showProgressDots || r.showScrollbar
            },
            dotsPadding: {
                type: o.Number,
                title: "Padding",
                min: 0,
                max: 100,
                defaultValue: 10,
                displayStepper: !0,
                hidden: r => !r.showProgressDots || r.showScrollbar
            },
            dotsFill: {
                type: o.Color,
                title: "Fill",
                defaultValue: "#fff",
                hidden: r => !r.showProgressDots || r.showScrollbar
            },
            dotsBackground: {
                type: o.Color,
                title: "Backdrop",
                defaultValue: "rgba(0,0,0,0.2)",
                hidden: r => !r.showProgressDots || r.showScrollbar
            },
            dotsRadius: {
                type: o.Number,
                title: "Radius",
                min: 0,
                max: 200,
                defaultValue: 50,
                hidden: r => !r.showProgressDots || r.showScrollbar
            },
            dotsOpacity: {
                type: o.Number,
                title: "Opacity",
                min: 0,
                max: 1,
                defaultValue: .5,
                step: .1,
                displayStepper: !0,
                hidden: r => !r.showProgressDots || r.showScrollbar
            },
            dotsActiveOpacity: {
                type: o.Number,
                title: "Current",
                min: 0,
                max: 1,
                defaultValue: 1,
                step: .1,
                displayStepper: !0,
                hidden: r => !r.showProgressDots || r.showScrollbar
            },
            dotsBlur: {
                type: o.Number,
                title: "Blur",
                min: 0,
                max: 50,
                defaultValue: 0,
                step: 1,
                hidden: r => !r.showProgressDots || r.showScrollbar
            }
        }
    }
});
var Ja = {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: "100%",
        maxWidth: "100%",
        maxHeight: "100%",
        placeItems: "center",
        margin: 0,
        padding: 0,
        listStyleType: "none",
        textIndent: "none"
    },
    Lo = {
        display: "flex",
        width: "100%",
        height: "100%",
        placeContent: "center",
        placeItems: "center",
        flexDirection: "column",
        color: "#96F",
        background: "rgba(136, 85, 255, 0.1)",
        fontSize: 11,
        overflow: "hidden",
        padding: "20px 20px 30px 20px"
    },
    Fo = {
        fontSize: 32,
        marginBottom: 10
    },
    ko = {
        margin: 0,
        marginBottom: 10,
        fontWeight: 600,
        textAlign: "center"
    },
    Ro = {
        margin: 0,
        opacity: .7,
        maxWidth: 180,
        lineHeight: 1.5,
        textAlign: "center"
    },
    Gt = {
        border: "none",
        display: "flex",
        placeContent: "center",
        placeItems: "center",
        overflow: "hidden",
        background: "transparent",
        cursor: "pointer",
        margin: 0,
        padding: 0
    },
    Mo = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "absolute",
        pointerEvents: "none",
        userSelect: "none",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        border: 0,
        padding: 0,
        margin: 0
    },
    zo = (r, t, a) => Math.min(Math.max(r, t), a),
    No = $(function(t, a) {
        var i, m;
        let {
            slideKey: l,
            width: p,
            height: y,
            child: x,
            size: g,
            gap: u,
            wrappedValue: s,
            numChildren: S,
            childCounter: w,
            isCanvas: h,
            effects: j,
            effectsOpacity: f,
            effectsScale: L,
            effectsRotate: c,
            isHorizontal: C,
            isLast: N,
            index: V
        } = t, q = (g ? .item + u) * w, b = [-g ? .item, 0, g ? .parent - g ? .item + u, g ? .parent].map(we => we - q), z = !h && Ue(s, b, [-c, 0, 0, c]), A = !h && Ue(s, b, [c, 0, 0, -c]), P = !h && Ue(s, b, [f, 1, 1, f]), O = !h && Ue(s, b, [L, 1, 1, L]), ne = !h && Ue(s, b, [1, 1, 0, 0]), _e = !h && Ue(s, we => we >= b[1] && we <= b[2]);
        return J(() => {
            if (_e) return _e.onChange(we => {
                a.current.setAttribute("aria-hidden", !we)
            })
        }, []), e(G, {
            inherit: "id",
            children: e("li", {
                style: {
                    display: "contents"
                },
                "aria-hidden": V !== 0,
                children: ba(x, {
                    ref: a,
                    key: l + "child",
                    style: { ...(i = x.props) === null || i === void 0 ? void 0 : i.style,
                        flexShrink: 0,
                        userSelect: "none",
                        width: p,
                        height: y,
                        opacity: P,
                        scale: O,
                        originX: C ? ne : .5,
                        originY: C ? .5 : ne,
                        rotateY: C ? z : 0,
                        rotateX: C ? 0 : A
                    }
                }, (m = x.props) === null || m === void 0 ? void 0 : m.children)
            })
        })
    });

function jo({
    selectedOpacity: r,
    opacity: t,
    total: a,
    index: i,
    wrappedIndex: m,
    wrappedIndexInverted: l,
    dotStyle: p,
    buttonStyle: y,
    gap: x,
    padding: g,
    isHorizontal: u,
    isInverted: s,
    ...S
}) {
    let w = m === i;
    s && (w = Math.abs(l) === i);
    let h = x / 2,
        j = !u && i > 0 ? h : g,
        f = !u && i !== a - 1 ? h : g,
        L = u && i !== a - 1 ? h : g,
        c = u && i > 0 ? h : g;
    return e("button", {
        "aria-label": `Scroll to page ${i+1}`,
        type: "button",
        ...S,
        style: { ...y,
            padding: `${j}px ${L}px ${f}px ${c}px`
        },
        children: e(n.div, {
            style: { ...p
            },
            initial: !1,
            animate: {
                opacity: w ? r : t
            },
            transition: {
                duration: .3
            }
        })
    })
}
var Vo = {
        display: "flex",
        placeContent: "center",
        placeItems: "center",
        overflow: "hidden",
        position: "absolute",
        pointerEvents: "auto"
    },
    Uo = {
        borderRadius: "50%",
        background: "white",
        cursor: "pointer",
        border: "none",
        placeContent: "center",
        placeItems: "center",
        padding: 0
    };
var Wo = ["YDeVI0ARO", "mdOybSR7d", "HmPCN96zn"],
    To = {
        HmPCN96zn: "framer-v-1t8ib9e",
        mdOybSR7d: "framer-v-gs6i5m",
        YDeVI0ARO: "framer-v-tmocgv"
    };

function Zt(r, ...t) {
    let a = {};
    return t ? .forEach(i => i && Object.assign(a, r[i])), a
}
var Ho = {
        "Variant 1": "YDeVI0ARO",
        "Variant 2": "mdOybSR7d",
        "Variant 3": "HmPCN96zn"
    },
    Eo = {
        default: {
            damping: 60,
            delay: 0,
            duration: .3,
            ease: [.44, 0, .56, 1],
            mass: 1,
            stiffness: 500,
            type: "spring"
        }
    },
    Po = (r, t) => `perspective(1200px) ${t}`,
    Do = $(function({
        id: r,
        style: t,
        className: a,
        width: i,
        height: m,
        layoutId: l,
        variant: p = "YDeVI0ARO",
        ...y
    }, x) {
        let u = Ho[p] || p,
            {
                baseVariant: s,
                classNames: S,
                gestureVariant: w,
                setGestureState: h,
                setVariant: j,
                transition: f,
                variants: L
            } = se({
                cycleOrder: Wo,
                defaultVariant: "YDeVI0ARO",
                transitions: Eo,
                variant: u,
                variantClassNames: To
            }),
            c = L.join("-") + y.layoutDependency,
            C = ee();
        return e(G, {
            id: l ? ? C,
            children: e(n.div, {
                initial: u,
                animate: L,
                onHoverStart: () => h({
                    isHovered: !0
                }),
                onHoverEnd: () => h({
                    isHovered: !1
                }),
                onTapStart: () => h({
                    isPressed: !0
                }),
                onTap: () => h({
                    isPressed: !1
                }),
                onTapCancel: () => h({
                    isPressed: !1
                }),
                className: E("framer-L9W8r", S),
                style: {
                    display: "contents"
                },
                children: d(n.div, { ...y,
                    className: E("framer-tmocgv", a),
                    "data-framer-name": "Variant 1",
                    layoutDependency: c,
                    layoutId: "YDeVI0ARO",
                    ref: x,
                    style: { ...t
                    },
                    transition: f,
                    ...Zt({
                        HmPCN96zn: {
                            "data-framer-name": "Variant 3"
                        },
                        mdOybSR7d: {
                            "data-framer-name": "Variant 2"
                        }
                    }, s, w),
                    children: [e(M, {
                        __perspectiveFX: !1,
                        __targetOpacity: 1,
                        background: {
                            alt: "",
                            fit: "stretch",
                            intrinsicHeight: 364,
                            intrinsicWidth: 366,
                            pixelHeight: 364,
                            pixelWidth: 366,
                            src: new URL("https://framerusercontent.com/images/B18eEpj0IJ1WUqeu4XzxADJJQ.png").href
                        },
                        className: "framer-14ezdq",
                        "data-framer-name": "Rainbow_tile_light",
                        layoutDependency: c,
                        layoutId: "uBmW4Gvxt",
                        transformTemplate: Po,
                        transition: f
                    }), e(M, {
                        background: {
                            alt: "",
                            fit: "fit",
                            intrinsicHeight: 212,
                            intrinsicWidth: 366,
                            pixelHeight: 212,
                            pixelWidth: 366,
                            src: new URL("https://framerusercontent.com/images/1LeVP7xmG8RrHaXo6sW1wcJxBE.png").href
                        },
                        className: "framer-e5wwdr",
                        "data-framer-name": "Rainbow_tile",
                        layoutDependency: c,
                        layoutId: "jtXF1HALV",
                        transition: f,
                        ...Zt({
                            HmPCN96zn: {
                                background: {
                                    alt: "",
                                    fit: "stretch",
                                    intrinsicHeight: 212,
                                    intrinsicWidth: 366,
                                    pixelHeight: 212,
                                    pixelWidth: 366,
                                    src: new URL("https://framerusercontent.com/images/1LeVP7xmG8RrHaXo6sW1wcJxBE.png").href
                                }
                            },
                            mdOybSR7d: {
                                background: {
                                    alt: "",
                                    fit: "stretch",
                                    intrinsicHeight: 212,
                                    intrinsicWidth: 366,
                                    pixelHeight: 212,
                                    pixelWidth: 366,
                                    src: new URL("https://framerusercontent.com/images/1LeVP7xmG8RrHaXo6sW1wcJxBE.png").href
                                }
                            }
                        }, s, w)
                    }), e(M, {
                        __perspectiveFX: !1,
                        __targetOpacity: 1,
                        background: {
                            alt: "",
                            fit: "fit",
                            intrinsicHeight: 212,
                            intrinsicWidth: 366,
                            pixelHeight: 212,
                            pixelWidth: 366,
                            src: new URL("https://framerusercontent.com/images/1LeVP7xmG8RrHaXo6sW1wcJxBE.png").href
                        },
                        className: "framer-1fqpfw2",
                        "data-framer-name": "Rainbow_tile",
                        layoutDependency: c,
                        layoutId: "C6O1qHW36",
                        transition: f,
                        ...Zt({
                            HmPCN96zn: {
                                background: {
                                    alt: "",
                                    fit: "stretch",
                                    intrinsicHeight: 212,
                                    intrinsicWidth: 366,
                                    pixelHeight: 212,
                                    pixelWidth: 366,
                                    src: new URL("https://framerusercontent.com/images/1LeVP7xmG8RrHaXo6sW1wcJxBE.png").href
                                }
                            },
                            mdOybSR7d: {
                                background: {
                                    alt: "",
                                    fit: "stretch",
                                    intrinsicHeight: 212,
                                    intrinsicWidth: 366,
                                    pixelHeight: 212,
                                    pixelWidth: 366,
                                    src: new URL("https://framerusercontent.com/images/1LeVP7xmG8RrHaXo6sW1wcJxBE.png").href
                                }
                            }
                        }, s, w)
                    })]
                })
            })
        })
    }),
    Io = ['.framer-L9W8r [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }', "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-L9W8r .framer-1eqpqo { display: block; }", ".framer-L9W8r .framer-tmocgv { height: 327px; overflow: visible; position: relative; width: 330px; }", ".framer-L9W8r .framer-14ezdq { aspect-ratio: 1.0122699386503067 / 1; bottom: 0px; flex: none; height: var(--framer-aspect-ratio-supported, 326px); left: 0px; overflow: visible; position: absolute; right: 0px; z-index: 1; }", ".framer-L9W8r .framer-e5wwdr { aspect-ratio: 1.7010309278350515 / 1; bottom: 0px; flex: none; height: var(--framer-aspect-ratio-supported, 194px); left: 0px; overflow: visible; position: absolute; right: 0px; z-index: 1; }", ".framer-L9W8r .framer-1fqpfw2 { aspect-ratio: 1.7010309278350515 / 1; bottom: 0px; flex: none; height: var(--framer-aspect-ratio-supported, 194px); left: 0px; mix-blend-mode: overlay; overflow: visible; position: absolute; right: 0px; z-index: 1; }", ".framer-L9W8r.framer-v-gs6i5m .framer-tmocgv, .framer-L9W8r.framer-v-1t8ib9e .framer-tmocgv { aspect-ratio: 1.0091743119266054 / 1; height: var(--framer-aspect-ratio-supported, 327px); }", ".framer-L9W8r.framer-v-gs6i5m .framer-14ezdq { aspect-ratio: unset; bottom: 19px; height: 217px; }", ".framer-L9W8r.framer-v-gs6i5m .framer-e5wwdr, .framer-L9W8r.framer-v-gs6i5m .framer-1fqpfw2 { aspect-ratio: unset; bottom: 23px; height: 149px; }", ".framer-L9W8r.framer-v-1t8ib9e .framer-14ezdq { aspect-ratio: unset; bottom: 20px; height: 206px; }", ".framer-L9W8r.framer-v-1t8ib9e .framer-e5wwdr, .framer-L9W8r.framer-v-1t8ib9e .framer-1fqpfw2 { aspect-ratio: unset; bottom: 40px; height: 115px; }"],
    zr = K(Do, Io, "framer-L9W8r"),
    Qt = zr;
zr.displayName = "Tile";
zr.defaultProps = {
    height: 327,
    width: 330
};
Y(zr, {
    variant: {
        options: ["YDeVI0ARO", "mdOybSR7d", "HmPCN96zn"],
        optionTitles: ["Variant 1", "Variant 2", "Variant 3"],
        title: "Variant",
        type: o.Enum
    }
});
re(zr, []);
var qo = {
        DHLlBUHwM: {
            hover: !0
        },
        qiqMpTTGR: {
            hover: !0
        }
    },
    Ao = ["DHLlBUHwM", "qiqMpTTGR"],
    Oo = {
        DHLlBUHwM: "framer-v-1k8yd72",
        qiqMpTTGR: "framer-v-1f7y2ay"
    };

function Ka(r, ...t) {
    let a = {};
    return t ? .forEach(i => i && Object.assign(a, r[i])), a
}
var Yo = {
        "Variant 1": "DHLlBUHwM",
        "Variant 2": "qiqMpTTGR"
    },
    Bo = {
        default: {
            damping: 60,
            delay: 0,
            duration: .3,
            ease: [.44, 0, .56, 1],
            mass: 1,
            stiffness: 500,
            type: "spring"
        }
    },
    Xo = r => typeof r == "object" && r !== null && typeof r.src == "string" ? r : typeof r == "string" ? {
        src: r
    } : void 0,
    Go = $(function({
        id: r,
        style: t,
        className: a,
        width: i,
        height: m,
        layoutId: l,
        variant: p = "DHLlBUHwM",
        image: y = {
            src: new URL("https://framerusercontent.com/images/M8WgsXKbfVICn88J5pfzu2PFvI.png").href
        },
        tap: x,
        link: g,
        ...u
    }, s) {
        let w = Yo[p] || p,
            {
                baseVariant: h,
                classNames: j,
                gestureVariant: f,
                setGestureState: L,
                setVariant: c,
                transition: C,
                variants: N
            } = se({
                cycleOrder: Ao,
                defaultVariant: "DHLlBUHwM",
                enabledGestures: qo,
                transitions: Bo,
                variant: w,
                variantClassNames: Oo
            }),
            V = N.join("-") + u.layoutDependency,
            {
                activeVariantCallback: q,
                delay: b
            } = ze(h),
            z = q(async (...ne) => {
                if (x && await x(...ne) === !1) return !1
            }),
            A = () => !(f === "qiqMpTTGR-hover" || h === "qiqMpTTGR"),
            P = () => f === "qiqMpTTGR-hover" || h === "qiqMpTTGR",
            O = ee();
        return e(G, {
            id: l ? ? O,
            children: e(n.div, {
                initial: w,
                animate: N,
                onHoverStart: () => L({
                    isHovered: !0
                }),
                onHoverEnd: () => L({
                    isHovered: !1
                }),
                onTapStart: () => L({
                    isPressed: !0
                }),
                onTap: () => L({
                    isPressed: !1
                }),
                onTapCancel: () => L({
                    isPressed: !1
                }),
                className: E("framer-QKwLG", j),
                style: {
                    display: "contents"
                },
                children: e(xe, {
                    href: g,
                    smoothScroll: !0,
                    children: d(n.a, { ...u,
                        className: `${E("framer-1k8yd72",a)} framer-1nybd1m`,
                        "data-framer-name": "Variant 1",
                        "data-highlight": !0,
                        layoutDependency: V,
                        layoutId: "DHLlBUHwM",
                        onTap: z,
                        ref: s,
                        style: { ...t
                        },
                        transition: C,
                        ...Ka({
                            "DHLlBUHwM-hover": {
                                "data-framer-name": void 0
                            },
                            "qiqMpTTGR-hover": {
                                "data-framer-name": void 0
                            },
                            qiqMpTTGR: {
                                "data-framer-name": "Variant 2"
                            }
                        }, h, f),
                        children: [A() && e(M, {
                            background: {
                                alt: "",
                                fit: "fit",
                                intrinsicHeight: 200,
                                intrinsicWidth: 200,
                                pixelHeight: 200,
                                pixelWidth: 200,
                                sizes: "74px",
                                ...Xo(y)
                            },
                            className: "framer-1mfp0ix",
                            layoutDependency: V,
                            layoutId: "txAeuEpjw",
                            style: {
                                opacity: 1
                            },
                            transition: C,
                            variants: {
                                "DHLlBUHwM-hover": {
                                    opacity: .6
                                }
                            }
                        }), P() && e(M, {
                            background: {
                                alt: "",
                                fit: "fit",
                                intrinsicHeight: 430,
                                intrinsicWidth: 1080,
                                pixelHeight: 430,
                                pixelWidth: 1080,
                                src: new URL("https://framerusercontent.com/images/B4wmvZBVcCUFFUMkppr5SoUNSs.png").href,
                                srcSet: `${new URL("https://framerusercontent.com/images/B4wmvZBVcCUFFUMkppr5SoUNSs.png?scale-down-to=512").href} 512w, ${new URL("https://framerusercontent.com/images/B4wmvZBVcCUFFUMkppr5SoUNSs.png?scale-down-to=1024").href} 1024w, ${new URL("https://framerusercontent.com/images/B4wmvZBVcCUFFUMkppr5SoUNSs.png").href} 1080w`
                            },
                            className: "framer-13cx4y7",
                            layoutDependency: V,
                            layoutId: "k54jQsy72",
                            style: {
                                opacity: 1
                            },
                            transition: C,
                            variants: {
                                "qiqMpTTGR-hover": {
                                    opacity: .8
                                }
                            },
                            ...Ka({
                                qiqMpTTGR: {
                                    background: {
                                        alt: "",
                                        fit: "fit",
                                        intrinsicHeight: 430,
                                        intrinsicWidth: 1080,
                                        pixelHeight: 430,
                                        pixelWidth: 1080,
                                        sizes: "125px",
                                        src: new URL("https://framerusercontent.com/images/B4wmvZBVcCUFFUMkppr5SoUNSs.png").href,
                                        srcSet: `${new URL("https://framerusercontent.com/images/B4wmvZBVcCUFFUMkppr5SoUNSs.png?scale-down-to=512").href} 512w, ${new URL("https://framerusercontent.com/images/B4wmvZBVcCUFFUMkppr5SoUNSs.png?scale-down-to=1024").href} 1024w, ${new URL("https://framerusercontent.com/images/B4wmvZBVcCUFFUMkppr5SoUNSs.png").href} 1080w`
                                    }
                                }
                            }, h, f)
                        })]
                    })
                })
            })
        })
    }),
    Zo = ['.framer-QKwLG [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }', "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-QKwLG .framer-1nybd1m { display: block; }", ".framer-QKwLG .framer-1k8yd72 { align-content: flex-start; align-items: flex-start; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 44px; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; text-decoration: none; width: min-content; }", ".framer-QKwLG .framer-1mfp0ix { aspect-ratio: 1.6818181818181819 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 44px); overflow: hidden; position: relative; width: 74px; }", ".framer-QKwLG .framer-13cx4y7 { aspect-ratio: 2.840909090909091 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 44px); overflow: hidden; position: relative; width: 125px; }", ".framer-QKwLG .framer-v-1k8yd72 .framer-1k8yd72, .framer-QKwLG .framer-v-1f7y2ay .framer-1k8yd72 { cursor: pointer; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-QKwLG .framer-1k8yd72 { gap: 0px; } .framer-QKwLG .framer-1k8yd72 > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-QKwLG .framer-1k8yd72 > :first-child { margin-top: 0px; } .framer-QKwLG .framer-1k8yd72 > :last-child { margin-bottom: 0px; } }"],
    Nr = K(Go, Zo, "framer-QKwLG"),
    it = Nr;
Nr.displayName = "Logo";
Nr.defaultProps = {
    height: 44,
    width: 74
};
Y(Nr, {
    variant: {
        options: ["DHLlBUHwM", "qiqMpTTGR"],
        optionTitles: ["Variant 1", "Variant 2"],
        title: "Variant",
        type: o.Enum
    },
    AyRzxu74J: {
        __defaultAssetReference: "data:framer/asset-reference,M8WgsXKbfVICn88J5pfzu2PFvI.png?originalFilename=dd_logo_small.png&preferredSize=auto",
        title: "Image",
        type: o.ResponsiveImage
    },
    VwZB4Om0s: {
        title: "Tap",
        type: o.EventHandler
    },
    T5ggt80Z4: {
        title: "Link",
        type: o.Link
    }
});
re(Nr, []);
var Qo = {
        hnItdHda8: {
            hover: !0
        },
        JwsU0JvA7: {
            hover: !0
        }
    },
    $o = ["hnItdHda8", "JwsU0JvA7"],
    Jo = {
        hnItdHda8: "framer-v-wi0dj",
        JwsU0JvA7: "framer-v-gf9l19"
    };

function Ko(r, ...t) {
    let a = {};
    return t ? .forEach(i => i && Object.assign(a, r[i])), a
}
var es = {
        "Variant 1": "hnItdHda8",
        "Variant 2": "JwsU0JvA7"
    },
    rs = {
        default: {
            damping: 60,
            delay: 0,
            duration: .3,
            ease: [.44, 0, .56, 1],
            mass: 1,
            stiffness: 500,
            type: "spring"
        }
    },
    ts = (r, t) => `translateY(-50%) ${t}`,
    as = $(function({
        id: r,
        style: t,
        className: a,
        width: i,
        height: m,
        layoutId: l,
        variant: p = "hnItdHda8",
        title: y = "ComponentS",
        link: x,
        ...g
    }, u) {
        let S = es[p] || p,
            {
                baseVariant: w,
                classNames: h,
                gestureVariant: j,
                setGestureState: f,
                setVariant: L,
                transition: c,
                variants: C
            } = se({
                cycleOrder: $o,
                defaultVariant: "hnItdHda8",
                enabledGestures: Qo,
                transitions: rs,
                variant: S,
                variantClassNames: Jo
            }),
            N = C.join("-") + g.layoutDependency,
            V = ee();
        return e(G, {
            id: l ? ? V,
            children: e(n.div, {
                initial: S,
                animate: C,
                onHoverStart: () => f({
                    isHovered: !0
                }),
                onHoverEnd: () => f({
                    isHovered: !1
                }),
                onTapStart: () => f({
                    isPressed: !0
                }),
                onTap: () => f({
                    isPressed: !1
                }),
                onTapCancel: () => f({
                    isPressed: !1
                }),
                className: E("framer-QTU9w", h),
                style: {
                    display: "contents"
                },
                children: e(xe, {
                    href: x,
                    children: e(n.a, { ...g,
                        className: `${E("framer-wi0dj",a)} framer-1blsoys`,
                        "data-border": !0,
                        "data-framer-name": "Variant 1",
                        layoutDependency: N,
                        layoutId: "hnItdHda8",
                        ref: u,
                        style: {
                            "--border-bottom-width": "1px",
                            "--border-color": "rgba(255, 255, 255, 0.1)",
                            "--border-left-width": "0px",
                            "--border-right-width": "0px",
                            "--border-style": "solid",
                            "--border-top-width": "0px",
                            backgroundColor: "rgba(255, 255, 255, 0)",
                            ...t
                        },
                        transition: c,
                        variants: {
                            "hnItdHda8-hover": {
                                backgroundColor: "rgba(255, 255, 255, 0.1)"
                            },
                            "JwsU0JvA7-hover": {
                                backgroundColor: "rgba(255, 255, 255, 0.1)"
                            },
                            JwsU0JvA7: {
                                "--border-bottom-width": "0px"
                            }
                        },
                        ...Ko({
                            "hnItdHda8-hover": {
                                "data-framer-name": void 0
                            },
                            "JwsU0JvA7-hover": {
                                "data-framer-name": void 0
                            },
                            JwsU0JvA7: {
                                "data-framer-name": "Variant 2"
                            }
                        }, w, j),
                        children: e(D, {
                            __fromCanvasComponent: !0,
                            children: e(F, {
                                children: e(n.h2, {
                                    style: {
                                        "--font-selector": "R0Y7TWFucm9wZS04MDA=",
                                        "--framer-font-family": '"Manrope", sans-serif',
                                        "--framer-font-size": "14px",
                                        "--framer-font-weight": "800",
                                        "--framer-letter-spacing": "-0.5px",
                                        "--framer-line-height": "1.5em",
                                        "--framer-text-alignment": "center",
                                        "--framer-text-color": "var(--extracted-1of0zx5)",
                                        "--framer-text-transform": "uppercase"
                                    },
                                    children: "ComponentS"
                                })
                            }),
                            className: "framer-36umam",
                            fonts: ["GF;Manrope-800"],
                            layoutDependency: N,
                            layoutId: "nC2sq1C4I",
                            style: {
                                "--extracted-1of0zx5": "rgb(255, 255, 255)",
                                "--framer-link-text-color": "rgb(0, 153, 255)",
                                "--framer-link-text-decoration": "underline",
                                "--framer-paragraph-spacing": "0px"
                            },
                            text: y,
                            transformTemplate: ts,
                            transition: c,
                            verticalAlignment: "top",
                            withExternalLayout: !0
                        })
                    })
                })
            })
        })
    }),
    is = ['.framer-QTU9w [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }', "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-QTU9w .framer-1blsoys { display: block; }", ".framer-QTU9w .framer-wi0dj { height: 44px; overflow: visible; position: relative; text-decoration: none; width: 300px; }", ".framer-QTU9w .framer-36umam { flex: none; height: auto; left: 0px; position: absolute; top: 48%; white-space: pre; width: auto; }", ".framer-QTU9w .framer-v-wi0dj .framer-wi0dj, .framer-QTU9w .framer-v-gf9l19 .framer-wi0dj { cursor: pointer; }", ".framer-QTU9w.framer-v-wi0dj.hover .framer-36umam, .framer-QTU9w.framer-v-gf9l19.hover .framer-36umam { left: 20px; top: 48%; }"],
    jr = K(as, is, "framer-QTU9w"),
    wr = jr;
jr.displayName = "Menu Button";
jr.defaultProps = {
    height: 44,
    width: 300
};
Y(jr, {
    variant: {
        options: ["hnItdHda8", "JwsU0JvA7"],
        optionTitles: ["Variant 1", "Variant 2"],
        title: "Variant",
        type: o.Enum
    },
    KkmgU0RZ7: {
        defaultValue: "ComponentS",
        displayTextArea: !1,
        title: "Title",
        type: o.String
    },
    LnqZlrF_a: {
        title: "Link",
        type: o.Link
    }
});
re(jr, [{
    family: "Manrope",
    moduleAsset: {
        localModuleIdentifier: "local-module:canvasComponent/X21BokTsG:default",
        url: "https://fonts.gstatic.com/s/manrope/v14/xn7_YHE41ni1AdIRqAuZuw1Bx9mbZk59E-_F87jxeN7B.ttf"
    },
    style: "normal",
    url: "https://fonts.gstatic.com/s/manrope/v14/xn7_YHE41ni1AdIRqAuZuw1Bx9mbZk59E-_F87jxeN7B.ttf",
    weight: "800"
}]);
var ns = {
        hZBoHaAj4: {
            hover: !0
        },
        YtOjYGg0y: {
            hover: !0
        }
    },
    os = ["hZBoHaAj4", "YtOjYGg0y"],
    ss = {
        hZBoHaAj4: "framer-v-s8ei7o",
        YtOjYGg0y: "framer-v-17znkr3"
    };

function ei(r, ...t) {
    let a = {};
    return t ? .forEach(i => i && Object.assign(a, r[i])), a
}
var ms = {
        "Variant 1": "hZBoHaAj4",
        "Variant 2": "YtOjYGg0y"
    },
    ls = {
        default: {
            damping: 60,
            delay: 0,
            duration: .3,
            ease: [.44, 0, .56, 1],
            mass: 1,
            stiffness: 500,
            type: "spring"
        }
    },
    fs = $(function({
        id: r,
        style: t,
        className: a,
        width: i,
        height: m,
        layoutId: l,
        variant: p = "hZBoHaAj4",
        title: y = "Components",
        tap: x,
        link: g,
        ...u
    }, s) {
        let w = ms[p] || p,
            {
                baseVariant: h,
                classNames: j,
                gestureVariant: f,
                setGestureState: L,
                setVariant: c,
                transition: C,
                variants: N
            } = se({
                cycleOrder: os,
                defaultVariant: "hZBoHaAj4",
                enabledGestures: ns,
                transitions: ls,
                variant: w,
                variantClassNames: ss
            }),
            V = N.join("-") + u.layoutDependency,
            {
                activeVariantCallback: q,
                delay: b
            } = ze(h),
            z = q(async (...P) => {
                if (x && await x(...P) === !1) return !1
            }),
            A = ee();
        return e(G, {
            id: l ? ? A,
            children: e(n.div, {
                initial: w,
                animate: N,
                onHoverStart: () => L({
                    isHovered: !0
                }),
                onHoverEnd: () => L({
                    isHovered: !1
                }),
                onTapStart: () => L({
                    isPressed: !0
                }),
                onTap: () => L({
                    isPressed: !1
                }),
                onTapCancel: () => L({
                    isPressed: !1
                }),
                className: E("framer-j4njV", j),
                style: {
                    display: "contents"
                },
                children: e(xe, {
                    href: g,
                    smoothScroll: !0,
                    ...ei({
                        YtOjYGg0y: {
                            openInNewTab: !0
                        }
                    }, h, f),
                    children: e(n.a, { ...u,
                        className: `${E("framer-s8ei7o",a)} framer-1n91g88`,
                        "data-border": !0,
                        "data-framer-name": "Variant 1",
                        "data-highlight": !0,
                        layoutDependency: V,
                        layoutId: "hZBoHaAj4",
                        onTap: z,
                        ref: s,
                        style: {
                            "--border-bottom-width": "1px",
                            "--border-color": "rgba(255, 255, 255, 0)",
                            "--border-left-width": "1px",
                            "--border-right-width": "1px",
                            "--border-style": "solid",
                            "--border-top-width": "1px",
                            backgroundColor: "rgba(0, 0, 0, 0)",
                            borderBottomLeftRadius: 10,
                            borderBottomRightRadius: 10,
                            borderTopLeftRadius: 10,
                            borderTopRightRadius: 10,
                            ...t
                        },
                        transition: C,
                        variants: {
                            "hZBoHaAj4-hover": {
                                "--border-color": "rgba(255, 255, 255, 0.2)",
                                backgroundColor: "rgba(0, 0, 0, 0.2)"
                            },
                            "YtOjYGg0y-hover": {
                                "--border-bottom-width": "0px",
                                "--border-left-width": "0px",
                                "--border-right-width": "0px",
                                "--border-top-width": "0px",
                                backgroundColor: "rgb(255, 0, 183)"
                            }
                        },
                        ...ei({
                            "hZBoHaAj4-hover": {
                                "data-framer-name": void 0
                            },
                            "YtOjYGg0y-hover": {
                                "data-framer-name": void 0
                            },
                            YtOjYGg0y: {
                                "data-framer-name": "Variant 2"
                            }
                        }, h, f),
                        children: e(D, {
                            __fromCanvasComponent: !0,
                            children: e(F, {
                                children: e(n.h2, {
                                    style: {
                                        "--font-selector": "R0Y7UG9wcGlucy03MDA=",
                                        "--framer-font-family": '"Poppins", "Poppins Placeholder", sans-serif',
                                        "--framer-font-size": "20px",
                                        "--framer-font-weight": "700",
                                        "--framer-letter-spacing": "-0.5px",
                                        "--framer-line-height": "1.5em",
                                        "--framer-text-alignment": "center",
                                        "--framer-text-color": "var(--extracted-1of0zx5)"
                                    },
                                    children: "Components"
                                })
                            }),
                            className: "framer-y652ae",
                            fonts: ["GF;Poppins-700"],
                            layoutDependency: V,
                            layoutId: "OpxuqlY9a",
                            style: {
                                "--extracted-1of0zx5": "rgba(255, 255, 255, 0.7)",
                                "--framer-link-text-color": "rgb(0, 153, 255)",
                                "--framer-link-text-decoration": "underline",
                                "--framer-paragraph-spacing": "0px"
                            },
                            text: y,
                            transition: C,
                            variants: {
                                "YtOjYGg0y-hover": {
                                    "--extracted-1of0zx5": "rgb(255, 255, 255)"
                                },
                                YtOjYGg0y: {
                                    "--extracted-1of0zx5": "rgba(255, 0, 183, 0.7)"
                                }
                            },
                            verticalAlignment: "top",
                            withExternalLayout: !0
                        })
                    })
                })
            })
        })
    }),
    ps = ['.framer-j4njV [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }', "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-j4njV .framer-1n91g88 { display: block; }", ".framer-j4njV .framer-s8ei7o { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 8px 16px 8px 16px; position: relative; text-decoration: none; width: min-content; will-change: transform; }", ".framer-j4njV .framer-y652ae { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", ".framer-j4njV .framer-v-s8ei7o .framer-s8ei7o, .framer-j4njV .framer-v-17znkr3 .framer-s8ei7o { cursor: pointer; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-j4njV .framer-s8ei7o { gap: 0px; } .framer-j4njV .framer-s8ei7o > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-j4njV .framer-s8ei7o > :first-child { margin-left: 0px; } .framer-j4njV .framer-s8ei7o > :last-child { margin-right: 0px; } }"],
    Vr = K(fs, ps, "framer-j4njV"),
    ir = Vr;
Vr.displayName = "Button Small";
Vr.defaultProps = {
    height: 46,
    width: 161
};
Y(Vr, {
    variant: {
        options: ["hZBoHaAj4", "YtOjYGg0y"],
        optionTitles: ["Variant 1", "Variant 2"],
        title: "Variant",
        type: o.Enum
    },
    u0VywoTZz: {
        defaultValue: "Components",
        displayTextArea: !1,
        title: "Title",
        type: o.String
    },
    faiP90DPR: {
        title: "Tap",
        type: o.EventHandler
    },
    ySWoE5kHm: {
        title: "Link",
        type: o.Link
    }
});
re(Vr, [{
    family: "Poppins",
    moduleAsset: {
        localModuleIdentifier: "local-module:canvasComponent/yqj5xMuQI:default",
        url: "https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLCz7V1tvFP-KUEg.ttf"
    },
    style: "normal",
    url: "https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLCz7V1tvFP-KUEg.ttf",
    weight: "700"
}]);
var cs = he(it),
    ds = he(ir),
    hs = he(wr),
    us = ["ejPoH7qUS", "EeMktW1Lq", "MBXUuzon5", "P098vHDMn"],
    gs = {
        EeMktW1Lq: "framer-v-1mubtf9",
        ejPoH7qUS: "framer-v-1wcmrk9",
        MBXUuzon5: "framer-v-1k8bma0",
        P098vHDMn: "framer-v-lkcnd1"
    };

function nr(r, ...t) {
    let a = {};
    return t ? .forEach(i => i && Object.assign(a, r[i])), a
}
var xs = {
        "Desktop - full icon": "P098vHDMn",
        "Desktop - small icon": "ejPoH7qUS",
        "Phone Expanded": "MBXUuzon5",
        Phone: "EeMktW1Lq"
    },
    ws = {
        default: {
            damping: 60,
            delay: 0,
            duration: .3,
            ease: [.44, 0, .56, 1],
            mass: 1,
            stiffness: 500,
            type: "spring"
        }
    },
    ys = $(function({
        id: r,
        style: t,
        className: a,
        width: i,
        height: m,
        layoutId: l,
        variant: p = "ejPoH7qUS",
        ...y
    }, x) {
        let u = xs[p] || p,
            {
                baseVariant: s,
                classNames: S,
                gestureVariant: w,
                setGestureState: h,
                setVariant: j,
                transition: f,
                variants: L
            } = se({
                cycleOrder: us,
                defaultVariant: "ejPoH7qUS",
                transitions: ws,
                variant: u,
                variantClassNames: gs
            }),
            c = L.join("-") + y.layoutDependency,
            {
                activeVariantCallback: C,
                delay: N
            } = ze(s),
            V = C(async (...O) => {
                j("MBXUuzon5")
            }),
            q = C(async (...O) => {
                j("EeMktW1Lq")
            }),
            b = () => !!["EeMktW1Lq", "MBXUuzon5"].includes(s),
            z = Sa(),
            A = () => !["EeMktW1Lq", "MBXUuzon5"].includes(s),
            P = ee();
        return e(G, {
            id: l ? ? P,
            children: e(n.div, {
                initial: u,
                animate: L,
                onHoverStart: () => h({
                    isHovered: !0
                }),
                onHoverEnd: () => h({
                    isHovered: !1
                }),
                onTapStart: () => h({
                    isPressed: !0
                }),
                onTap: () => h({
                    isPressed: !1
                }),
                onTapCancel: () => h({
                    isPressed: !1
                }),
                className: E("framer-xYqgC", S),
                style: {
                    display: "contents"
                },
                children: d(n.div, { ...y,
                    className: E("framer-1wcmrk9", a),
                    "data-framer-name": "Desktop - small icon",
                    layoutDependency: c,
                    layoutId: "ejPoH7qUS",
                    ref: x,
                    style: {
                        backgroundColor: "rgba(25, 17, 34, 0.7)",
                        ...t
                    },
                    transition: f,
                    ...nr({
                        EeMktW1Lq: {
                            "data-framer-name": "Phone"
                        },
                        MBXUuzon5: {
                            "data-framer-name": "Phone Expanded"
                        },
                        P098vHDMn: {
                            "data-framer-name": "Desktop - full icon"
                        }
                    }, s, w),
                    children: [b() && d(n.div, {
                        className: "framer-1lw3iz1",
                        layoutDependency: c,
                        layoutId: "ZlaW1d7eR",
                        transition: f,
                        children: [b() && e(n.div, {
                            className: "framer-1j5v8ib-container",
                            layoutDependency: c,
                            layoutId: "LAJk4EfrV-container",
                            transition: f,
                            children: e(it, {
                                height: "100%",
                                id: "LAJk4EfrV",
                                layoutId: "LAJk4EfrV",
                                link: ke({
                                    hash: ":EErfVFecs",
                                    webPageId: "augiA20Il"
                                }, z),
                                style: {
                                    height: "100%",
                                    width: "100%"
                                },
                                variant: "DHLlBUHwM",
                                width: "100%"
                            })
                        }), b() && d(n.div, {
                            className: "framer-1mq03eo",
                            "data-framer-name": "Hamburger",
                            layoutDependency: c,
                            layoutId: "lUWkOx_Wh",
                            transition: f,
                            ...nr({
                                EeMktW1Lq: {
                                    "data-highlight": !0,
                                    onTap: V
                                },
                                MBXUuzon5: {
                                    "data-highlight": !0,
                                    onTap: q
                                }
                            }, s, w),
                            children: [e(n.div, {
                                className: "framer-1sz8jn7",
                                layoutDependency: c,
                                layoutId: "KwzfpYG4Y",
                                style: {
                                    backgroundColor: "rgb(255, 255, 255)",
                                    borderBottomLeftRadius: 30,
                                    borderBottomRightRadius: 30,
                                    borderTopLeftRadius: 30,
                                    borderTopRightRadius: 30,
                                    rotate: 0
                                },
                                transition: f,
                                variants: {
                                    MBXUuzon5: {
                                        rotate: -45
                                    }
                                }
                            }), e(n.div, {
                                className: "framer-hf3in",
                                layoutDependency: c,
                                layoutId: "bfrMt1ycS",
                                style: {
                                    backgroundColor: "rgb(255, 255, 255)",
                                    borderBottomLeftRadius: 30,
                                    borderBottomRightRadius: 30,
                                    borderTopLeftRadius: 30,
                                    borderTopRightRadius: 30,
                                    opacity: 1,
                                    rotate: 0
                                },
                                transition: f,
                                variants: {
                                    MBXUuzon5: {
                                        opacity: 0,
                                        rotate: 45
                                    }
                                }
                            }), e(n.div, {
                                className: "framer-vgsafg",
                                layoutDependency: c,
                                layoutId: "mPuIultrM",
                                style: {
                                    backgroundColor: "rgb(255, 255, 255)",
                                    borderBottomLeftRadius: 30,
                                    borderBottomRightRadius: 30,
                                    borderTopLeftRadius: 30,
                                    borderTopRightRadius: 30,
                                    rotate: 0
                                },
                                transition: f,
                                variants: {
                                    MBXUuzon5: {
                                        rotate: 45
                                    }
                                }
                            })]
                        })]
                    }), A() && e(n.div, {
                        className: "framer-79yaxu-container",
                        layoutDependency: c,
                        layoutId: "nHzMdXMYU-container",
                        transition: f,
                        children: e(it, {
                            height: "100%",
                            id: "nHzMdXMYU",
                            layoutId: "nHzMdXMYU",
                            link: ke({
                                hash: ":EErfVFecs",
                                webPageId: "augiA20Il"
                            }, z),
                            style: {
                                height: "100%",
                                width: "100%"
                            },
                            variant: "DHLlBUHwM",
                            width: "100%",
                            ...nr({
                                P098vHDMn: {
                                    variant: "qiqMpTTGR"
                                }
                            }, s, w)
                        })
                    }), A() && d(n.div, {
                        className: "framer-1779fuo",
                        layoutDependency: c,
                        layoutId: "OclgXl4Cn",
                        transition: f,
                        children: [e(n.div, {
                            className: "framer-ktw371-container",
                            layoutDependency: c,
                            layoutId: "ZtuZ8DPlX-container",
                            transition: f,
                            children: e(ir, {
                                height: "100%",
                                id: "ZtuZ8DPlX",
                                layoutId: "ZtuZ8DPlX",
                                link: ke({
                                    hash: ":uSDNa9hCP",
                                    webPageId: "augiA20Il"
                                }, z),
                                title: "About",
                                variant: "hZBoHaAj4",
                                width: "100%"
                            })
                        }), e(n.div, {
                            className: "framer-1eiall2-container",
                            layoutDependency: c,
                            layoutId: "KsNF3nc50-container",
                            transition: f,
                            children: e(ir, {
                                height: "100%",
                                id: "KsNF3nc50",
                                layoutId: "KsNF3nc50",
                                link: ke({
                                    hash: ":uqxxUL_Gg",
                                    webPageId: "augiA20Il"
                                }, z),
                                title: "Gameplay",
                                variant: "hZBoHaAj4",
                                width: "100%"
                            })
                        }), e(n.div, {
                            className: "framer-11yrmus-container",
                            layoutDependency: c,
                            layoutId: "Khq7_Vmqk-container",
                            transition: f,
                            children: e(ir, {
                                height: "100%",
                                id: "Khq7_Vmqk",
                                layoutId: "Khq7_Vmqk",
                                link: ke({
                                    hash: ":IeC4C8QlR",
                                    webPageId: "augiA20Il"
                                }, z),
                                title: "Screenshots",
                                variant: "hZBoHaAj4",
                                width: "100%"
                            })
                        }), e(n.div, {
                            className: "framer-dem65y-container",
                            layoutDependency: c,
                            layoutId: "Ta5VZWnTi-container",
                            transition: f,
                            children: e(ir, {
                                height: "100%",
                                id: "Ta5VZWnTi",
                                layoutId: "Ta5VZWnTi",
                                link: ke({
                                    hash: ":GWcXixjRQ",
                                    webPageId: "augiA20Il"
                                }, z),
                                title: "Subscribe",
                                variant: "hZBoHaAj4",
                                width: "100%"
                            })
                        })]
                    }), e(n.div, {
                        className: "framer-1lxrfj3-container",
                        layoutDependency: c,
                        layoutId: "h5MfUa1bd-container",
                        transition: f,
                        children: e(ir, {
                            height: "100%",
                            id: "h5MfUa1bd",
                            layoutId: "h5MfUa1bd",
                            link: "https://drive.google.com/file/d/1dWRvuPaaqnk8KW7PQP-QlqAQw5jnBAZn/view?usp=share_link",
                            title: "Presskit",
                            variant: "YtOjYGg0y",
                            width: "100%"
                        })
                    }), b() && e(n.div, {
                        className: "framer-x5kqb3",
                        layoutDependency: c,
                        layoutId: "CsP8goVgf",
                        transition: f,
                        children: d(n.div, {
                            className: "framer-rj8c13",
                            "data-border": !0,
                            layoutDependency: c,
                            layoutId: "hUn8AaXTa",
                            style: {
                                "--border-bottom-width": "1px",
                                "--border-color": "rgba(255, 255, 255, 0.1)",
                                "--border-left-width": "1px",
                                "--border-right-width": "1px",
                                "--border-style": "solid",
                                "--border-top-width": "1px",
                                backdropFilter: "blur(40px)",
                                backgroundColor: "rgba(0, 0, 0, 0.5)",
                                borderBottomLeftRadius: 20,
                                borderBottomRightRadius: 20,
                                borderTopLeftRadius: 20,
                                borderTopRightRadius: 20,
                                opacity: 1,
                                WebkitBackdropFilter: "blur(40px)"
                            },
                            transition: f,
                            variants: {
                                EeMktW1Lq: {
                                    backdropFilter: "blur(80px)",
                                    opacity: 0,
                                    WebkitBackdropFilter: "blur(80px)"
                                },
                                MBXUuzon5: {
                                    backdropFilter: "blur(50px)",
                                    backgroundColor: "rgba(0, 0, 0, 0.8)",
                                    WebkitBackdropFilter: "blur(50px)"
                                }
                            },
                            children: [e(n.div, {
                                className: "framer-1ngywio-container",
                                layoutDependency: c,
                                layoutId: "SaBUXJ5xq-container",
                                transition: f,
                                children: e(wr, {
                                    height: "100%",
                                    id: "SaBUXJ5xq",
                                    layoutId: "SaBUXJ5xq",
                                    title: "Home",
                                    variant: "hnItdHda8",
                                    width: "100%",
                                    ...nr({
                                        EeMktW1Lq: {
                                            style: {
                                                width: "100%"
                                            },
                                            title: "About"
                                        },
                                        MBXUuzon5: {
                                            link: ke({
                                                hash: ":uSDNa9hCP",
                                                webPageId: "augiA20Il"
                                            }, z),
                                            style: {
                                                width: "100%"
                                            },
                                            title: "About"
                                        }
                                    }, s, w)
                                })
                            }), e(n.div, {
                                className: "framer-1xjjf91-container",
                                layoutDependency: c,
                                layoutId: "mf0aPbe3P-container",
                                transition: f,
                                children: e(wr, {
                                    height: "100%",
                                    id: "mf0aPbe3P",
                                    layoutId: "mf0aPbe3P",
                                    title: "ComponentS",
                                    variant: "hnItdHda8",
                                    width: "100%",
                                    ...nr({
                                        EeMktW1Lq: {
                                            style: {
                                                width: "100%"
                                            },
                                            title: "Gameplay"
                                        },
                                        MBXUuzon5: {
                                            link: ke({
                                                hash: ":uqxxUL_Gg",
                                                webPageId: "augiA20Il"
                                            }, z),
                                            style: {
                                                width: "100%"
                                            },
                                            title: "Gameplay"
                                        }
                                    }, s, w)
                                })
                            }), e(n.div, {
                                className: "framer-1ibyuk0-container",
                                layoutDependency: c,
                                layoutId: "F_y75KJHW-container",
                                transition: f,
                                children: e(wr, {
                                    height: "100%",
                                    id: "F_y75KJHW",
                                    layoutId: "F_y75KJHW",
                                    title: "Pricing",
                                    variant: "hnItdHda8",
                                    width: "100%",
                                    ...nr({
                                        EeMktW1Lq: {
                                            style: {
                                                width: "100%"
                                            },
                                            title: "Screenshots"
                                        },
                                        MBXUuzon5: {
                                            link: ke({
                                                hash: ":IeC4C8QlR",
                                                webPageId: "augiA20Il"
                                            }, z),
                                            style: {
                                                width: "100%"
                                            },
                                            title: "Screenshots"
                                        }
                                    }, s, w)
                                })
                            }), e(n.div, {
                                className: "framer-5odj03-container",
                                layoutDependency: c,
                                layoutId: "US4G39jLE-container",
                                transition: f,
                                children: e(wr, {
                                    height: "100%",
                                    id: "US4G39jLE",
                                    layoutId: "US4G39jLE",
                                    title: "Updates",
                                    variant: "hnItdHda8",
                                    width: "100%",
                                    ...nr({
                                        EeMktW1Lq: {
                                            style: {
                                                width: "100%"
                                            },
                                            title: "Subscribe",
                                            variant: "JwsU0JvA7"
                                        },
                                        MBXUuzon5: {
                                            link: ke({
                                                hash: ":GWcXixjRQ",
                                                webPageId: "augiA20Il"
                                            }, z),
                                            style: {
                                                width: "100%"
                                            },
                                            title: "Subscribe",
                                            variant: "JwsU0JvA7"
                                        }
                                    }, s, w)
                                })
                            })]
                        })
                    })]
                })
            })
        })
    }),
    vs = ['.framer-xYqgC [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }', "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-xYqgC .framer-kzoxru { display: block; }", ".framer-xYqgC .framer-1wcmrk9 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; height: 60px; justify-content: space-between; overflow: hidden; padding: 8px 30px 8px 30px; position: relative; width: 1200px; }", ".framer-xYqgC .framer-1lw3iz1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 50px; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 922px; }", ".framer-xYqgC .framer-1j5v8ib-container { cursor: pointer; flex: none; height: 44px; position: relative; width: 75px; }", ".framer-xYqgC .framer-1mq03eo { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 44px); overflow: visible; position: relative; width: 44px; }", ".framer-xYqgC .framer-1sz8jn7 { flex: none; height: 2px; left: 11px; overflow: visible; position: absolute; top: 31px; width: 22px; }", ".framer-xYqgC .framer-hf3in { flex: none; height: 2px; left: 11px; overflow: visible; position: absolute; top: 21px; width: 14px; }", ".framer-xYqgC .framer-vgsafg { flex: none; height: 2px; left: 11px; overflow: visible; position: absolute; top: 11px; width: 22px; }", ".framer-xYqgC .framer-79yaxu-container { cursor: pointer; flex: none; height: 44px; position: relative; width: 130px; }", ".framer-xYqgC .framer-1779fuo { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: min-content; }", ".framer-xYqgC .framer-ktw371-container, .framer-xYqgC .framer-1eiall2-container, .framer-xYqgC .framer-11yrmus-container, .framer-xYqgC .framer-dem65y-container, .framer-xYqgC .framer-1lxrfj3-container { cursor: pointer; flex: none; height: auto; position: relative; width: auto; }", ".framer-xYqgC .framer-x5kqb3 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; gap: 10px; height: min-content; justify-content: center; left: 0px; overflow: visible; padding: 20px 20px 20px 20px; position: absolute; top: 60px; width: 100%; }", ".framer-xYqgC .framer-rj8c13 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 30px 30px 30px 30px; position: relative; width: 1px; will-change: transform; z-index: 1; }", ".framer-xYqgC .framer-1ngywio-container, .framer-xYqgC .framer-1xjjf91-container, .framer-xYqgC .framer-1ibyuk0-container, .framer-xYqgC .framer-5odj03-container { flex: none; height: auto; position: relative; width: auto; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-xYqgC .framer-1lw3iz1, .framer-xYqgC .framer-1779fuo, .framer-xYqgC .framer-x5kqb3, .framer-xYqgC .framer-rj8c13 { gap: 0px; } .framer-xYqgC .framer-1lw3iz1 > *, .framer-xYqgC .framer-x5kqb3 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-xYqgC .framer-1lw3iz1 > :first-child, .framer-xYqgC .framer-1779fuo > :first-child, .framer-xYqgC .framer-x5kqb3 > :first-child { margin-left: 0px; } .framer-xYqgC .framer-1lw3iz1 > :last-child, .framer-xYqgC .framer-1779fuo > :last-child, .framer-xYqgC .framer-x5kqb3 > :last-child { margin-right: 0px; } .framer-xYqgC .framer-1779fuo > * { margin: 0px; margin-left: calc(40px / 2); margin-right: calc(40px / 2); } .framer-xYqgC .framer-rj8c13 > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-xYqgC .framer-rj8c13 > :first-child { margin-top: 0px; } .framer-xYqgC .framer-rj8c13 > :last-child { margin-bottom: 0px; } }", ".framer-xYqgC.framer-v-1mubtf9 .framer-1wcmrk9, .framer-xYqgC.framer-v-1k8bma0 .framer-1wcmrk9 { overflow: visible; padding: 8px 20px 8px 20px; width: 390px; }", ".framer-xYqgC.framer-v-1mubtf9 .framer-1lw3iz1 { gap: 0px; height: min-content; order: 0; width: 117px; }", ".framer-xYqgC.framer-v-1mubtf9 .framer-1j5v8ib-container, .framer-xYqgC.framer-v-1k8bma0 .framer-1j5v8ib-container { aspect-ratio: 1.7045454545454546 / 1; height: 43px; width: var(--framer-aspect-ratio-supported, 73px); }", ".framer-xYqgC.framer-v-1mubtf9 .framer-1mq03eo { cursor: pointer; height: 44px; width: var(--framer-aspect-ratio-supported, 44px); }", ".framer-xYqgC.framer-v-1mubtf9 .framer-1lxrfj3-container, .framer-xYqgC.framer-v-1k8bma0 .framer-1lxrfj3-container { order: 2; }", ".framer-xYqgC.framer-v-1mubtf9 .framer-x5kqb3 { min-height: 368px; order: 4; }", ".framer-xYqgC.framer-v-1mubtf9 .framer-rj8c13 { flex: none; left: -20px; padding: 10px 30px 30px 10px; position: absolute; top: 20px; width: 350px; }", ".framer-xYqgC.framer-v-1mubtf9 .framer-1ngywio-container, .framer-xYqgC.framer-v-1mubtf9 .framer-1xjjf91-container, .framer-xYqgC.framer-v-1mubtf9 .framer-1ibyuk0-container, .framer-xYqgC.framer-v-1mubtf9 .framer-5odj03-container, .framer-xYqgC.framer-v-1k8bma0 .framer-1ngywio-container, .framer-xYqgC.framer-v-1k8bma0 .framer-1xjjf91-container, .framer-xYqgC.framer-v-1k8bma0 .framer-1ibyuk0-container, .framer-xYqgC.framer-v-1k8bma0 .framer-5odj03-container { width: 100%; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-xYqgC.framer-v-1mubtf9 .framer-1lw3iz1 { gap: 0px; } .framer-xYqgC.framer-v-1mubtf9 .framer-1lw3iz1 > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-xYqgC.framer-v-1mubtf9 .framer-1lw3iz1 > :first-child { margin-left: 0px; } .framer-xYqgC.framer-v-1mubtf9 .framer-1lw3iz1 > :last-child { margin-right: 0px; } }", ".framer-xYqgC.framer-v-1k8bma0 .framer-1lw3iz1 { gap: 0px; height: min-content; order: 0; width: min-content; }", ".framer-xYqgC.framer-v-1k8bma0 .framer-1mq03eo { cursor: pointer; }", ".framer-xYqgC.framer-v-1k8bma0 .framer-1sz8jn7, .framer-xYqgC.framer-v-1k8bma0 .framer-vgsafg { top: 21px; }", ".framer-xYqgC.framer-v-1k8bma0 .framer-hf3in { left: 15px; }", ".framer-xYqgC.framer-v-1k8bma0 .framer-x5kqb3 { order: 4; }", ".framer-xYqgC.framer-v-1k8bma0 .framer-rj8c13 { padding: 10px 30px 10px 30px; z-index: 2; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-xYqgC.framer-v-1k8bma0 .framer-1lw3iz1 { gap: 0px; } .framer-xYqgC.framer-v-1k8bma0 .framer-1lw3iz1 > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-xYqgC.framer-v-1k8bma0 .framer-1lw3iz1 > :first-child { margin-left: 0px; } .framer-xYqgC.framer-v-1k8bma0 .framer-1lw3iz1 > :last-child { margin-right: 0px; } }"],
    Ur = K(ys, vs, "framer-xYqgC"),
    $t = Ur;
Ur.displayName = "Tob Bar";
Ur.defaultProps = {
    height: 60,
    width: 1200
};
Y(Ur, {
    variant: {
        options: ["ejPoH7qUS", "EeMktW1Lq", "MBXUuzon5", "P098vHDMn"],
        optionTitles: ["Desktop - small icon", "Phone", "Phone Expanded", "Desktop - full icon"],
        title: "Variant",
        type: o.Enum
    }
});
re(Ur, [...cs, ...ds, ...hs]);
var bs = ["keENZYK4m", "xxCzljjmh"],
    _s = {
        keENZYK4m: "framer-v-n062jy",
        xxCzljjmh: "framer-v-c7aa40"
    };

function Cs(r, ...t) {
    let a = {};
    return t ? .forEach(i => i && Object.assign(a, r[i])), a
}
var Ss = {
        "Variant 1": "keENZYK4m",
        "Variant 2": "xxCzljjmh"
    },
    Ls = {
        default: {
            damping: 60,
            delay: 0,
            duration: .3,
            ease: [.44, 0, .56, 1],
            mass: 1,
            stiffness: 500,
            type: "spring"
        }
    },
    Fs = $(function({
        id: r,
        style: t,
        className: a,
        width: i,
        height: m,
        layoutId: l,
        variant: p = "keENZYK4m",
        ...y
    }, x) {
        let u = Ss[p] || p,
            {
                baseVariant: s,
                classNames: S,
                gestureVariant: w,
                setGestureState: h,
                setVariant: j,
                transition: f,
                variants: L
            } = se({
                cycleOrder: bs,
                defaultVariant: "keENZYK4m",
                transitions: Ls,
                variant: u,
                variantClassNames: _s
            }),
            c = L.join("-") + y.layoutDependency,
            C = () => s !== "xxCzljjmh",
            N = () => s === "xxCzljjmh",
            V = ee();
        return e(G, {
            id: l ? ? V,
            children: e(n.div, {
                initial: u,
                animate: L,
                onHoverStart: () => h({
                    isHovered: !0
                }),
                onHoverEnd: () => h({
                    isHovered: !1
                }),
                onTapStart: () => h({
                    isPressed: !0
                }),
                onTap: () => h({
                    isPressed: !1
                }),
                onTapCancel: () => h({
                    isPressed: !1
                }),
                className: E("framer-DYBtb", S),
                style: {
                    display: "contents"
                },
                children: d(n.div, { ...y,
                    background: {
                        alt: "",
                        fit: "fit",
                        intrinsicHeight: 600,
                        intrinsicWidth: 327,
                        pixelHeight: 600,
                        pixelWidth: 327,
                        src: new URL("https://framerusercontent.com/images/veysd0S9U7780iwjXQiiaueVHE.gif").href,
                        srcSet: `${new URL("https://framerusercontent.com/images/veysd0S9U7780iwjXQiiaueVHE.gif?scale-down-to=512").href} 279w, ${new URL("https://framerusercontent.com/images/veysd0S9U7780iwjXQiiaueVHE.gif").href} 327w`
                    },
                    className: E("framer-n062jy", a),
                    "data-framer-name": "Variant 1",
                    layoutDependency: c,
                    layoutId: "keENZYK4m",
                    ref: x,
                    style: { ...t
                    },
                    transition: f,
                    ...Cs({
                        xxCzljjmh: {
                            "data-framer-name": "Variant 2"
                        }
                    }, s, w),
                    children: [C() && e(M, {
                        background: {
                            alt: "",
                            fit: "fit",
                            intrinsicHeight: 600,
                            intrinsicWidth: 420,
                            pixelHeight: 600,
                            pixelWidth: 420,
                            src: new URL("https://framerusercontent.com/images/JWMDY41qNnluVmAUgV2wv36fajA.gif").href,
                            srcSet: `${new URL("https://framerusercontent.com/images/JWMDY41qNnluVmAUgV2wv36fajA.gif?scale-down-to=512").href} 358w, ${new URL("https://framerusercontent.com/images/JWMDY41qNnluVmAUgV2wv36fajA.gif").href} 420w`
                        },
                        className: "framer-3m18aj",
                        layoutDependency: c,
                        layoutId: "jOHcQ34XJ",
                        transition: f
                    }), N() && e(M, {
                        background: {
                            alt: "",
                            fit: "fit",
                            intrinsicHeight: 600,
                            intrinsicWidth: 420,
                            pixelHeight: 600,
                            pixelWidth: 420,
                            src: new URL("https://framerusercontent.com/images/EPnslf9OJfMiLaHX4lKvZepNkXs.gif").href,
                            srcSet: `${new URL("https://framerusercontent.com/images/EPnslf9OJfMiLaHX4lKvZepNkXs.gif?scale-down-to=512").href} 358w, ${new URL("https://framerusercontent.com/images/EPnslf9OJfMiLaHX4lKvZepNkXs.gif").href} 420w`
                        },
                        className: "framer-1lvtsji",
                        layoutDependency: c,
                        layoutId: "kmURP7DIo",
                        transition: f
                    })]
                })
            })
        })
    }),
    ks = ['.framer-DYBtb [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }', "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-DYBtb .framer-1vpnehi { display: block; }", ".framer-DYBtb .framer-n062jy { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; min-height: 457px; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 312px; }", ".framer-DYBtb .framer-3m18aj, .framer-DYBtb .framer-1lvtsji { bottom: 0px; flex: none; left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; z-index: 1; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-DYBtb .framer-n062jy { gap: 0px; } .framer-DYBtb .framer-n062jy > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-DYBtb .framer-n062jy > :first-child { margin-top: 0px; } .framer-DYBtb .framer-n062jy > :last-child { margin-bottom: 0px; } }"],
    Wr = K(Fs, ks, "framer-DYBtb"),
    Jt = Wr;
Wr.displayName = "Hero";
Wr.defaultProps = {
    height: 457,
    width: 312
};
Y(Wr, {
    variant: {
        options: ["keENZYK4m", "xxCzljjmh"],
        optionTitles: ["Variant 1", "Variant 2"],
        title: "Variant",
        type: o.Enum
    }
});
re(Wr, []);
var Rs = ["PPsrtOdCR", "MQBFpgPnD", "DeJj7tlJW"],
    Ms = {
        DeJj7tlJW: "framer-v-d1k3z9",
        MQBFpgPnD: "framer-v-jv4nu2",
        PPsrtOdCR: "framer-v-182hqci"
    };

function ri(r, ...t) {
    let a = {};
    return t ? .forEach(i => i && Object.assign(a, r[i])), a
}
var zs = {
        "Variant 1": "PPsrtOdCR",
        "Variant 2": "MQBFpgPnD",
        "Variant 3": "DeJj7tlJW"
    },
    Ns = {
        default: {
            damping: 60,
            delay: 0,
            mass: 1,
            stiffness: 500,
            type: "spring"
        }
    };
var js = $(function({
        id: r,
        style: t,
        className: a,
        width: i,
        height: m,
        layoutId: l,
        variant: p = "PPsrtOdCR",
        ...y
    }, x) {
        let u = zs[p] || p,
            {
                baseVariant: s,
                classNames: S,
                gestureVariant: w,
                setGestureState: h,
                setVariant: j,
                transition: f,
                variants: L
            } = se({
                cycleOrder: Rs,
                defaultVariant: "PPsrtOdCR",
                transitions: Ns,
                variant: u,
                variantClassNames: Ms
            }),
            c = L.join("-") + y.layoutDependency,
            C = ee();
        return e(G, {
            id: l ? ? C,
            children: e(n.div, {
                initial: u,
                animate: L,
                onHoverStart: () => h({
                    isHovered: !0
                }),
                onHoverEnd: () => h({
                    isHovered: !1
                }),
                onTapStart: () => h({
                    isPressed: !0
                }),
                onTap: () => h({
                    isPressed: !1
                }),
                onTapCancel: () => h({
                    isPressed: !1
                }),
                className: E("framer-cO4ax", S),
                style: {
                    display: "contents"
                },
                children: d(n.div, { ...y,
                    className: E("framer-182hqci", a),
                    "data-framer-name": "Variant 1",
                    layoutDependency: c,
                    layoutId: "PPsrtOdCR",
                    ref: x,
                    style: {
                        background: "linear-gradient(180deg, hsl(269, 100%, 60%) 0%, hsl(269, 100%, 33%) 100%)",
                        borderBottomLeftRadius: 90,
                        borderBottomRightRadius: 90,
                        borderTopLeftRadius: 90,
                        borderTopRightRadius: 90,
                        ...t
                    },
                    transition: f,
                    ...ri({
                        DeJj7tlJW: {
                            "data-framer-name": "Variant 3"
                        },
                        MQBFpgPnD: {
                            "data-framer-name": "Variant 2"
                        }
                    }, s, w),
                    children: [e(n.div, {
                        className: "framer-1l4uunx",
                        "data-border": !0,
                        layoutDependency: c,
                        layoutId: "d_6WqZhYI",
                        style: {
                            "--border-bottom-width": "17px",
                            "--border-color": "rgb(0, 0, 0)",
                            "--border-left-width": "17px",
                            "--border-right-width": "17px",
                            "--border-style": "solid",
                            "--border-top-width": "17px",
                            background: "linear-gradient(180deg, hsl(269, 100%, 63%) 0%, hsl(269, 100%, 28%) 100%)",
                            borderBottomLeftRadius: 190,
                            borderBottomRightRadius: 190,
                            borderTopLeftRadius: 190,
                            borderTopRightRadius: 190
                        },
                        transition: f,
                        variants: {
                            DeJj7tlJW: {
                                "--border-bottom-width": "21px",
                                "--border-left-width": "21px",
                                "--border-right-width": "21px",
                                "--border-top-width": "21px"
                            },
                            MQBFpgPnD: {
                                "--border-bottom-width": "8px",
                                "--border-left-width": "8px",
                                "--border-right-width": "8px",
                                "--border-top-width": "8px"
                            }
                        }
                    }), e(n.div, {
                        className: "framer-1fjmeaz",
                        layoutDependency: c,
                        layoutId: "JjMQg6AaQ",
                        transition: f,
                        children: e(er, {
                            className: "framer-1wyhiug",
                            "data-framer-name": "framer_site_month",
                            layout: "position",
                            layoutDependency: c,
                            layoutId: "hlmwZTrEy",
                            opacity: 1,
                            svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 79 80"><path d="M 39.98 72.02 C 40.27 72.02 40.55 72.04 40.83 72.08 C 41.11 72.12 41.38 72.19 41.63 72.29 C 41.88 72.39 42.13 72.49 42.36 72.62 C 42.59 72.75 42.79 72.89 42.98 73.04 L 41.56 74.64 C 41.39 74.46 41.17 74.31 40.89 74.17 C 40.61 74.03 40.33 73.97 40.03 73.97 C 39.9 73.97 39.78 74 39.67 74.05 C 39.56 74.1 39.51 74.19 39.51 74.31 C 39.51 74.38 39.53 74.43 39.57 74.48 C 39.61 74.53 39.67 74.57 39.77 74.62 C 39.86 74.67 39.99 74.72 40.16 74.78 C 40.32 74.84 40.53 74.9 40.78 74.98 C 41.02 75.06 41.25 75.15 41.47 75.25 C 41.69 75.36 41.89 75.49 42.06 75.65 C 42.23 75.81 42.37 76 42.47 76.22 C 42.57 76.44 42.63 76.71 42.63 77.02 C 42.63 77.46 42.55 77.84 42.38 78.15 C 42.2 78.46 41.98 78.72 41.7 78.92 C 41.42 79.12 41.1 79.27 40.75 79.36 C 40.4 79.45 40.05 79.5 39.7 79.51 C 39.23 79.51 38.76 79.44 38.27 79.26 C 37.78 79.09 37.35 78.84 36.98 78.5 L 38.44 76.97 C 38.6 77.17 38.8 77.32 39.04 77.42 C 39.28 77.52 39.49 77.57 39.67 77.57 C 39.84 77.57 39.98 77.54 40.09 77.49 C 40.2 77.44 40.25 77.36 40.25 77.24 C 40.25 77.13 40.19 77.05 40.08 77 C 39.97 76.95 39.79 76.88 39.54 76.81 C 39.29 76.73 39.02 76.64 38.74 76.54 C 38.46 76.44 38.2 76.3 37.96 76.14 C 37.72 75.98 37.52 75.77 37.36 75.52 C 37.2 75.28 37.12 74.97 37.12 74.6 C 37.12 74.17 37.19 73.8 37.36 73.48 C 37.53 73.16 37.74 72.89 38.02 72.68 C 38.29 72.47 38.6 72.3 38.95 72.19 C 39.29 72.08 39.65 72.02 40.01 72.02 Z M 35.41 79.09 L 33.03 78.76 L 34.01 71.75 L 36.39 72.08 Z M 29.56 70.62 L 31.85 71.28 L 30.45 76.15 L 32.12 76.63 L 31.56 78.56 L 25.93 76.94 L 26.49 75.01 L 28.16 75.49 Z M 24.37 76.29 L 20 74.14 L 20.87 72.36 L 23.23 73.52 L 23.5 72.97 L 21.28 71.88 L 22.1 70.22 L 24.32 71.31 L 24.61 70.72 L 22.1 69.48 L 22.97 67.7 L 27.49 69.93 L 24.36 76.28 Z M 14.56 65.88 C 14.13 66.24 13.67 66.5 13.19 66.63 C 12.71 66.77 12.24 66.81 11.77 66.75 C 11.3 66.69 10.84 66.53 10.4 66.27 C 9.96 66.01 9.56 65.67 9.2 65.24 C 8.84 64.81 8.57 64.36 8.4 63.88 C 8.22 63.4 8.15 62.92 8.17 62.45 C 8.19 61.97 8.31 61.51 8.53 61.07 C 8.75 60.62 9.08 60.22 9.51 59.86 C 9.94 59.5 10.41 59.24 10.89 59.1 C 11.38 58.95 11.86 58.91 12.34 58.97 C 12.82 59.03 13.28 59.18 13.73 59.44 C 14.18 59.69 14.58 60.03 14.94 60.46 C 15.3 60.89 15.56 61.35 15.73 61.83 C 15.9 62.31 15.97 62.79 15.94 63.28 C 15.91 63.76 15.78 64.23 15.55 64.68 C 15.32 65.13 14.99 65.54 14.55 65.9 Z M 12.94 63.94 C 13.262 63.681 13.482 63.316 13.56 62.91 C 13.59 62.73 13.58 62.54 13.52 62.36 C 13.47 62.18 13.38 62.01 13.25 61.86 C 13.12 61.71 12.97 61.59 12.81 61.51 C 12.65 61.43 12.46 61.39 12.28 61.38 C 12.09 61.38 11.9 61.4 11.71 61.47 C 11.52 61.54 11.33 61.65 11.15 61.8 C 10.98 61.95 10.84 62.11 10.74 62.28 C 10.64 62.46 10.58 62.63 10.56 62.81 C 10.54 62.99 10.56 63.17 10.61 63.35 C 10.66 63.53 10.75 63.69 10.88 63.85 C 11.01 64 11.16 64.12 11.32 64.21 C 11.49 64.3 11.66 64.34 11.84 64.36 C 12.02 64.37 12.2 64.34 12.39 64.27 C 12.58 64.2 12.76 64.1 12.94 63.95 Z M 7.1 56.87 L 6.09 54.96 L 7.81 54.05 L 8.82 55.95 L 10.94 54.83 L 12.04 56.9 L 5.78 60.21 L 3.54 55.99 L 5.3 55.06 L 6.45 57.23 L 7.1 56.88 Z M 7.3 42.29 L 7.57 44.65 L 2.53 45.23 L 2.73 46.96 L 0.73 47.19 L 0.06 41.37 L 2.06 41.14 L 2.26 42.87 Z M 4.75 35.66 L 4.58 37.59 L 7.26 37.82 L 7.05 40.19 L 0 39.57 L 0.21 37.21 L 2.6 37.42 L 2.77 35.49 L 0.38 35.28 L 0.59 32.9 L 7.64 33.52 L 7.43 35.89 Z M 1.14 30.53 L 2.55 25.87 L 4.45 26.44 L 3.69 28.96 L 4.27 29.14 L 4.98 26.78 L 6.75 27.31 L 6.04 29.67 L 6.67 29.86 L 7.48 27.18 L 9.38 27.75 L 7.92 32.58 L 1.14 30.54 Z M 11.09 16.96 L 14.13 19.56 L 12.64 21.21 L 7.38 16.47 L 9.47 14.16 L 13.16 15.76 L 13.19 15.72 L 11.11 12.34 L 13.26 9.95 L 18.52 14.69 L 16.97 16.41 L 14.06 13.69 L 14.01 13.73 L 16.09 17.38 L 14.96 18.63 L 11.12 16.92 Z M 17.07 11.36 C 16.77 10.88 16.58 10.4 16.5 9.9 C 16.42 9.4 16.45 8.93 16.57 8.47 C 16.69 8.01 16.91 7.58 17.22 7.18 C 17.53 6.78 17.92 6.42 18.4 6.12 C 18.87 5.82 19.36 5.61 19.86 5.5 C 20.36 5.39 20.84 5.37 21.31 5.45 C 21.78 5.53 22.22 5.71 22.64 5.99 C 23.05 6.27 23.41 6.65 23.72 7.12 C 24.02 7.6 24.22 8.09 24.3 8.59 C 24.38 9.09 24.36 9.58 24.24 10.04 C 24.12 10.51 23.9 10.95 23.6 11.36 C 23.29 11.77 22.9 12.12 22.43 12.42 C 21.96 12.72 21.47 12.92 20.97 13.03 C 20.47 13.14 19.98 13.14 19.51 13.05 C 19.04 12.96 18.59 12.77 18.17 12.48 C 17.75 12.19 17.39 11.81 17.09 11.33 Z M 19.2 10 C 19.33 10.2 19.47 10.36 19.63 10.48 C 19.79 10.61 19.96 10.69 20.14 10.75 C 20.32 10.8 20.5 10.81 20.69 10.79 C 20.88 10.77 21.06 10.69 21.22 10.59 C 21.39 10.48 21.52 10.35 21.63 10.19 C 21.74 10.03 21.8 9.86 21.83 9.68 C 21.86 9.5 21.86 9.3 21.81 9.1 C 21.77 8.9 21.68 8.7 21.56 8.5 C 21.44 8.31 21.3 8.15 21.14 8.03 C 20.843 7.797 20.462 7.699 20.09 7.76 C 19.91 7.79 19.73 7.86 19.56 7.97 C 19.39 8.08 19.25 8.21 19.15 8.36 C 19.04 8.52 18.97 8.68 18.94 8.86 C 18.91 9.04 18.91 9.22 18.95 9.42 C 18.99 9.62 19.07 9.81 19.2 10 Z M 23.93 3.26 L 26.18 2.5 L 29.24 5.26 L 29.28 5.26 L 28.04 1.88 L 30.18 1.16 L 32.44 7.87 L 30.14 8.65 L 27.2 6.07 L 27.16 6.07 L 28.34 9.25 L 26.2 9.97 L 23.94 3.26 Z M 36.92 7.32 L 34.56 7.61 L 33.94 2.58 L 32.21 2.79 L 31.97 0.79 L 37.79 0.08 L 38.03 2.08 L 36.3 2.29 Z M 43.56 4.72 L 41.63 4.56 L 41.41 7.24 L 39.04 7.05 L 39.61 -0.01 L 41.97 0.18 L 41.78 2.57 L 43.71 2.73 L 43.9 0.34 L 46.28 0.53 L 45.71 7.59 L 43.34 7.4 Z M 54.37 6.95 C 54.523 6.638 54.798 6.403 55.13 6.3 C 55.29 6.25 55.46 6.23 55.64 6.24 C 55.82 6.24 55.99 6.29 56.15 6.37 C 56.31 6.45 56.44 6.55 56.55 6.68 C 56.66 6.81 56.74 6.96 56.8 7.11 C 56.86 7.27 56.88 7.43 56.87 7.6 C 56.87 7.77 56.82 7.94 56.74 8.1 C 56.587 8.412 56.312 8.647 55.98 8.75 C 55.82 8.8 55.66 8.82 55.49 8.81 C 55.32 8.8 55.16 8.76 55 8.68 C 54.688 8.521 54.443 8.255 54.31 7.93 C 54.185 7.605 54.203 7.241 54.36 6.93 Z M 62.3 16.63 C 62.07 16.4 61.89 16.16 61.76 15.89 C 61.62 15.62 61.53 15.35 61.48 15.07 C 61.43 14.79 61.43 14.52 61.46 14.25 C 61.5 13.98 61.58 13.73 61.71 13.5 L 63.7 14.39 C 63.64 14.48 63.61 14.59 63.6 14.69 C 63.6 14.8 63.63 14.9 63.71 14.98 C 63.82 15.09 63.93 15.13 64.04 15.09 C 64.15 15.05 64.26 14.98 64.38 14.87 L 67.61 11.65 L 69.3 13.34 L 66.14 16.49 C 65.91 16.72 65.66 16.92 65.37 17.11 C 65.08 17.3 64.78 17.42 64.45 17.47 C 64.12 17.52 63.77 17.5 63.41 17.38 C 63.05 17.26 62.67 17.01 62.29 16.63 Z M 66.58 21.77 C 66.27 21.31 66.07 20.87 65.97 20.44 C 65.87 20.01 65.85 19.61 65.92 19.24 C 65.99 18.86 66.14 18.52 66.37 18.21 C 66.6 17.9 66.89 17.62 67.24 17.39 L 70.82 15 L 72.14 16.98 L 68.78 19.22 C 68.5 19.41 68.32 19.62 68.25 19.87 C 68.18 20.12 68.23 20.36 68.4 20.61 C 68.57 20.86 68.77 21 69.02 21.03 C 69.27 21.06 69.53 20.98 69.82 20.79 L 73.18 18.55 L 74.5 20.52 L 70.92 22.91 C 70.57 23.14 70.21 23.3 69.82 23.38 C 69.44 23.46 69.06 23.46 68.68 23.38 C 68.3 23.3 67.93 23.12 67.58 22.86 C 67.22 22.6 66.89 22.24 66.58 21.78 Z M 75.61 22.69 L 76.44 24.91 L 73.79 28.07 L 73.79 28.11 L 77.13 26.75 L 77.93 28.86 L 71.31 31.36 L 70.45 29.09 L 72.92 26.06 L 72.92 26.02 L 69.78 27.3 L 68.98 25.19 Z M 78.46 31.22 L 79.21 36.03 L 77.25 36.34 L 76.84 33.74 L 76.24 33.83 L 76.62 36.27 L 74.79 36.56 L 74.41 34.12 L 73.76 34.22 L 74.19 36.99 L 72.23 37.3 L 71.45 32.32 L 78.44 31.22 Z M 75.29 48.33 C 75.35 48.46 75.42 48.57 75.51 48.67 C 75.6 48.77 75.69 48.83 75.8 48.85 C 75.93 48.88 76.05 48.87 76.17 48.81 C 76.29 48.75 76.37 48.64 76.41 48.46 C 76.45 48.27 76.41 48.1 76.3 47.94 C 76.18 47.78 76 47.66 75.75 47.59 L 76.54 45.45 C 76.98 45.6 77.33 45.81 77.61 46.08 C 77.89 46.35 78.1 46.65 78.25 46.98 C 78.4 47.31 78.48 47.67 78.49 48.04 C 78.5 48.41 78.47 48.78 78.38 49.15 C 78.3 49.49 78.17 49.81 78.01 50.13 C 77.84 50.44 77.64 50.71 77.4 50.92 C 77.16 51.14 76.88 51.29 76.55 51.38 C 76.22 51.47 75.86 51.47 75.46 51.38 C 75.17 51.31 74.93 51.21 74.73 51.09 C 74.53 50.96 74.36 50.82 74.22 50.65 C 74.08 50.48 73.97 50.3 73.87 50.11 C 73.77 49.92 73.68 49.72 73.6 49.52 L 73.13 48.34 L 72.56 50.71 L 70.63 50.24 L 71.98 44.66 L 73.78 45.1 L 75.3 48.35 Z M 68.91 53.57 C 69.1 53.18 69.31 52.86 69.55 52.61 C 69.79 52.36 70.05 52.18 70.33 52.05 C 70.61 51.92 70.89 51.84 71.19 51.81 C 71.49 51.78 71.78 51.78 72.07 51.81 C 72.36 51.85 72.64 51.91 72.92 52 C 73.2 52.09 73.45 52.19 73.69 52.31 C 73.93 52.42 74.16 52.56 74.41 52.71 C 74.66 52.86 74.88 53.04 75.09 53.24 C 75.3 53.44 75.48 53.66 75.64 53.91 C 75.8 54.16 75.91 54.43 75.97 54.72 C 76.03 55.01 76.05 55.33 76.01 55.67 C 75.97 56.01 75.86 56.38 75.67 56.77 C 75.39 57.36 75.05 57.79 74.66 58.06 C 74.27 58.33 73.86 58.49 73.43 58.55 C 73 58.6 72.57 58.58 72.14 58.47 C 71.71 58.36 71.31 58.22 70.96 58.05 C 70.73 57.94 70.49 57.8 70.24 57.65 C 69.99 57.5 69.76 57.31 69.55 57.11 C 69.34 56.91 69.15 56.68 68.98 56.44 C 68.81 56.2 68.7 55.92 68.63 55.62 C 68.56 55.32 68.54 55 68.58 54.66 C 68.62 54.32 68.73 53.95 68.91 53.56 Z M 73.81 55.9 C 73.87 55.77 73.88 55.64 73.83 55.51 C 73.77 55.37 73.682 55.244 73.57 55.14 C 73.45 55.02 73.3 54.91 73.13 54.81 C 72.793 54.611 72.438 54.443 72.07 54.31 C 71.893 54.242 71.708 54.195 71.52 54.17 C 71.35 54.15 71.19 54.15 71.06 54.19 C 70.93 54.23 70.83 54.32 70.77 54.45 C 70.71 54.58 70.7 54.71 70.75 54.85 C 70.8 54.98 70.89 55.11 71.02 55.22 C 71.15 55.34 71.3 55.45 71.48 55.55 C 71.65 55.66 71.83 55.75 72 55.83 C 72.17 55.91 72.35 55.98 72.53 56.05 C 72.72 56.12 72.89 56.16 73.06 56.18 C 73.23 56.2 73.37 56.19 73.51 56.15 C 73.64 56.11 73.74 56.02 73.8 55.88 Z M 68.93 61.76 C 68.93 61.9 68.95 62.04 68.99 62.16 C 69.03 62.28 69.1 62.38 69.19 62.45 C 69.3 62.53 69.41 62.57 69.54 62.56 C 69.67 62.55 69.79 62.48 69.9 62.34 C 70.02 62.19 70.05 62.01 70.01 61.82 C 69.96 61.63 69.84 61.45 69.64 61.28 L 71.22 59.63 C 71.56 59.94 71.8 60.28 71.95 60.64 C 72.1 60.99 72.17 61.35 72.17 61.72 C 72.17 62.09 72.1 62.44 71.97 62.79 C 71.84 63.14 71.66 63.46 71.43 63.76 C 71.22 64.04 70.98 64.29 70.7 64.51 C 70.42 64.73 70.13 64.89 69.82 64.99 C 69.51 65.09 69.19 65.12 68.86 65.08 C 68.53 65.04 68.19 64.89 67.86 64.64 C 67.63 64.46 67.44 64.28 67.31 64.08 C 67.18 63.88 67.08 63.68 67.02 63.47 C 66.96 63.26 66.92 63.05 66.91 62.84 C 66.9 62.63 66.89 62.41 66.91 62.19 L 66.95 60.91 L 65.48 62.86 L 63.89 61.66 L 67.35 57.08 L 68.82 58.2 L 68.92 61.78 Z M 62.21 68.16 C 61.873 68.304 61.501 68.346 61.14 68.28 C 60.97 68.25 60.81 68.19 60.66 68.1 C 60.51 68.02 60.38 67.91 60.27 67.78 C 60 67.47 59.83 67.15 59.76 66.81 C 59.7 66.47 59.71 66.14 59.79 65.81 C 59.87 65.48 60.02 65.17 60.23 64.87 C 60.44 64.57 60.68 64.3 60.95 64.07 C 61.22 63.83 61.51 63.63 61.83 63.46 C 62.15 63.29 62.48 63.18 62.81 63.12 C 63.14 63.06 63.49 63.07 63.83 63.13 C 64.17 63.19 64.5 63.34 64.83 63.56 L 63.5 65.41 C 63.34 65.302 63.153 65.243 62.96 65.24 C 62.587 65.242 62.254 65.472 62.12 65.82 C 62.1 65.89 62.09 65.96 62.1 66.03 C 62.1 66.1 62.14 66.17 62.21 66.24 C 62.35 66.4 62.51 66.44 62.7 66.37 C 62.88 66.3 63.09 66.16 63.33 65.95 L 63.84 65.5 L 64.92 66.73 L 64.35 67.23 C 64.16 67.4 64.03 67.56 63.96 67.71 C 63.89 67.86 63.92 68.02 64.05 68.17 C 64.15 68.29 64.27 68.33 64.4 68.29 C 64.53 68.26 64.65 68.19 64.75 68.11 C 64.87 68 64.96 67.86 64.99 67.69 C 65.02 67.52 64.99 67.35 64.89 67.18 L 66.86 66.08 C 67.03 66.45 67.11 66.81 67.12 67.15 C 67.12 67.49 67.08 67.82 66.97 68.12 C 66.86 68.43 66.71 68.71 66.51 68.98 C 66.31 69.25 66.1 69.48 65.86 69.69 C 65.62 69.9 65.36 70.08 65.05 70.24 C 64.75 70.4 64.44 70.51 64.12 70.56 C 63.8 70.61 63.49 70.6 63.19 70.51 C 62.89 70.42 62.61 70.24 62.36 69.96 C 62.1 69.66 61.97 69.35 61.97 69.03 C 61.97 68.71 62.06 68.42 62.23 68.16 L 62.2 68.13 Z M 53.78 72.75 C 53.906 73.075 53.887 73.439 53.73 73.75 C 53.66 73.9 53.55 74.04 53.43 74.16 C 53.174 74.403 52.832 74.532 52.48 74.52 C 52.142 74.499 51.822 74.357 51.58 74.12 C 51.46 74 51.37 73.85 51.3 73.68 C 51.24 73.51 51.21 73.34 51.22 73.17 C 51.22 73 51.27 72.83 51.34 72.69 C 51.41 72.54 51.51 72.41 51.63 72.29 C 51.75 72.17 51.9 72.08 52.06 72.02 C 52.23 71.96 52.4 71.93 52.58 71.93 C 52.76 71.93 52.92 71.97 53.08 72.03 C 53.24 72.09 53.37 72.19 53.5 72.31 C 53.62 72.43 53.71 72.58 53.78 72.75 Z" fill="#7901fa"></path></svg>',
                            svgContentId: 2706395067,
                            transition: f,
                            withExternalLayout: !0,
                            ...ri({
                                DeJj7tlJW: {
                                    svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 107 108"><path d="M 54.15 97.227 C 54.543 97.227 54.922 97.254 55.301 97.308 C 55.681 97.362 56.046 97.456 56.385 97.591 C 56.724 97.726 57.062 97.861 57.374 98.037 C 57.685 98.212 57.956 98.401 58.213 98.604 L 56.29 100.764 C 56.06 100.521 55.762 100.318 55.383 100.129 C 55.003 99.94 54.624 99.859 54.218 99.859 C 54.042 99.859 53.879 99.9 53.73 99.967 C 53.581 100.035 53.514 100.156 53.514 100.318 C 53.514 100.413 53.541 100.48 53.595 100.548 C 53.649 100.615 53.73 100.669 53.866 100.737 C 53.988 100.804 54.164 100.872 54.394 100.953 C 54.611 101.034 54.895 101.115 55.234 101.223 C 55.559 101.331 55.87 101.452 56.168 101.587 C 56.466 101.736 56.737 101.911 56.967 102.127 C 57.198 102.343 57.387 102.6 57.523 102.897 C 57.658 103.194 57.739 103.558 57.739 103.977 C 57.739 104.571 57.631 105.084 57.401 105.502 C 57.157 105.921 56.859 106.272 56.48 106.542 C 56.101 106.812 55.667 107.014 55.193 107.136 C 54.719 107.257 54.245 107.325 53.771 107.338 C 53.134 107.338 52.498 107.244 51.834 107.001 C 51.17 106.771 50.588 106.434 50.087 105.975 L 52.064 103.909 C 52.281 104.179 52.552 104.382 52.877 104.517 C 53.202 104.652 53.486 104.719 53.73 104.719 C 53.961 104.719 54.15 104.679 54.299 104.611 C 54.448 104.544 54.516 104.436 54.516 104.274 C 54.516 104.125 54.435 104.017 54.286 103.95 C 54.137 103.882 53.893 103.788 53.554 103.693 C 53.216 103.585 52.85 103.464 52.471 103.329 C 52.091 103.194 51.739 103.005 51.414 102.789 C 51.089 102.573 50.818 102.289 50.602 101.952 C 50.385 101.628 50.276 101.209 50.276 100.71 C 50.276 100.129 50.371 99.63 50.602 99.198 C 50.832 98.766 51.116 98.401 51.495 98.118 C 51.861 97.834 52.281 97.605 52.755 97.456 C 53.216 97.308 53.703 97.227 54.191 97.227 Z M 47.96 106.771 L 44.737 106.326 L 46.064 96.862 L 49.288 97.308 Z M 40.037 95.337 L 43.139 96.228 L 41.242 102.802 L 43.504 103.45 L 42.746 106.056 L 35.12 103.869 L 35.879 101.263 L 38.141 101.911 Z M 33.007 102.992 L 27.089 100.089 L 28.267 97.686 L 31.463 99.252 L 31.829 98.51 L 28.822 97.038 L 29.933 94.797 L 32.94 96.269 L 33.333 95.472 L 29.933 93.798 L 31.111 91.395 L 37.233 94.406 L 32.994 102.978 Z M 19.721 88.938 C 19.138 89.424 18.515 89.775 17.865 89.95 C 17.215 90.139 16.578 90.193 15.942 90.112 C 15.305 90.031 14.682 89.815 14.086 89.464 C 13.49 89.113 12.948 88.654 12.461 88.074 C 11.973 87.493 11.607 86.886 11.377 86.238 C 11.133 85.59 11.039 84.942 11.066 84.307 C 11.093 83.659 11.255 83.038 11.553 82.444 C 11.851 81.837 12.298 81.297 12.881 80.811 C 13.463 80.325 14.1 79.974 14.75 79.785 C 15.413 79.582 16.064 79.528 16.714 79.609 C 17.364 79.69 17.987 79.893 18.596 80.244 C 19.206 80.581 19.748 81.04 20.235 81.621 C 20.723 82.201 21.075 82.822 21.305 83.47 C 21.535 84.118 21.63 84.766 21.59 85.428 C 21.549 86.076 21.373 86.71 21.061 87.318 C 20.75 87.925 20.303 88.479 19.707 88.965 Z M 17.526 86.319 C 17.963 85.969 18.26 85.477 18.366 84.929 C 18.407 84.686 18.393 84.429 18.312 84.186 C 18.244 83.943 18.122 83.714 17.946 83.511 C 17.77 83.309 17.567 83.147 17.35 83.039 C 17.134 82.931 16.876 82.877 16.632 82.863 C 16.375 82.863 16.118 82.89 15.86 82.985 C 15.603 83.079 15.346 83.228 15.102 83.43 C 14.872 83.633 14.682 83.849 14.547 84.078 C 14.411 84.321 14.33 84.551 14.303 84.794 C 14.276 85.037 14.303 85.28 14.371 85.523 C 14.438 85.766 14.56 85.982 14.736 86.198 C 14.912 86.4 15.115 86.562 15.332 86.684 C 15.562 86.805 15.793 86.859 16.036 86.886 C 16.28 86.9 16.524 86.859 16.781 86.765 C 17.039 86.67 17.283 86.535 17.526 86.333 Z M 9.616 76.775 L 8.248 74.196 L 10.578 72.968 L 11.946 75.533 L 14.817 74.021 L 16.307 76.815 L 7.829 81.284 L 4.795 75.587 L 7.178 74.331 L 8.736 77.261 L 9.616 76.788 Z M 9.887 57.092 L 10.253 60.278 L 3.427 61.061 L 3.698 63.396 L 0.989 63.707 L 0.081 55.85 L 2.79 55.539 L 3.061 57.875 Z M 6.434 48.141 L 6.203 50.747 L 9.833 51.057 L 9.549 54.257 L 0 53.42 L 0.284 50.234 L 3.522 50.517 L 3.752 47.912 L 0.515 47.628 L 0.799 44.415 L 10.348 45.252 L 10.063 48.452 Z M 1.544 41.215 L 3.454 34.924 L 6.027 35.694 L 4.998 39.096 L 5.783 39.339 L 6.745 36.153 L 9.142 36.868 L 8.181 40.054 L 9.034 40.311 L 10.131 36.693 L 12.705 37.462 L 10.727 43.983 L 1.544 41.229 Z M 15.021 22.896 L 19.138 26.406 L 17.12 28.634 L 9.996 22.235 L 12.826 19.116 L 17.824 21.276 L 17.865 21.222 L 15.048 16.659 L 17.96 13.433 L 25.084 19.832 L 22.985 22.154 L 19.043 18.482 L 18.976 18.536 L 21.793 23.463 L 20.262 25.151 L 15.061 22.842 Z M 23.12 15.336 C 22.714 14.688 22.456 14.04 22.348 13.365 C 22.24 12.69 22.28 12.055 22.443 11.434 C 22.605 10.813 22.903 10.233 23.323 9.693 C 23.743 9.153 24.271 8.667 24.922 8.262 C 25.558 7.857 26.222 7.573 26.899 7.425 C 27.576 7.276 28.226 7.249 28.863 7.357 C 29.499 7.465 30.095 7.708 30.664 8.086 C 31.22 8.464 31.707 8.977 32.127 9.612 C 32.533 10.26 32.804 10.921 32.913 11.596 C 33.021 12.271 32.994 12.933 32.831 13.554 C 32.669 14.188 32.371 14.782 31.965 15.336 C 31.545 15.889 31.016 16.362 30.38 16.767 C 29.743 17.172 29.08 17.442 28.402 17.59 C 27.725 17.739 27.062 17.739 26.425 17.617 C 25.788 17.496 25.179 17.239 24.61 16.848 C 24.041 16.456 23.554 15.943 23.147 15.295 Z M 26.005 13.5 C 26.181 13.77 26.371 13.986 26.587 14.148 C 26.804 14.324 27.034 14.432 27.278 14.513 C 27.522 14.58 27.766 14.594 28.023 14.567 C 28.281 14.54 28.524 14.432 28.741 14.297 C 28.971 14.148 29.147 13.973 29.296 13.757 C 29.445 13.541 29.527 13.311 29.567 13.068 C 29.608 12.825 29.608 12.555 29.54 12.285 C 29.486 12.015 29.364 11.745 29.202 11.475 C 29.039 11.219 28.849 11.003 28.633 10.841 C 28.231 10.526 27.715 10.394 27.211 10.476 C 26.967 10.517 26.723 10.611 26.493 10.76 C 26.262 10.908 26.073 11.084 25.937 11.286 C 25.788 11.502 25.694 11.718 25.653 11.961 C 25.612 12.204 25.612 12.447 25.666 12.717 C 25.721 12.987 25.829 13.244 26.005 13.5 Z M 32.412 4.401 L 35.459 3.375 L 39.604 7.101 L 39.658 7.101 L 37.978 2.538 L 40.877 1.566 L 43.938 10.624 L 40.823 11.677 L 36.841 8.194 L 36.786 8.194 L 38.385 12.487 L 35.486 13.459 L 32.425 4.401 Z M 50.006 9.882 L 46.809 10.274 L 45.969 3.483 L 43.626 3.767 L 43.301 1.067 L 51.184 0.108 L 51.509 2.808 L 49.166 3.092 Z M 58.999 6.372 L 56.385 6.156 L 56.087 9.774 L 52.877 9.517 L 53.649 -0.014 L 56.845 0.243 L 56.588 3.469 L 59.202 3.685 L 59.459 0.459 L 62.683 0.715 L 61.911 10.246 L 58.701 9.99 Z M 73.64 9.382 C 73.848 8.961 74.22 8.644 74.67 8.505 C 74.886 8.437 75.117 8.41 75.361 8.424 C 75.604 8.424 75.835 8.491 76.051 8.599 C 76.268 8.707 76.444 8.842 76.593 9.018 C 76.742 9.193 76.85 9.396 76.932 9.598 C 77.013 9.814 77.04 10.03 77.026 10.26 C 77.026 10.489 76.959 10.719 76.85 10.935 C 76.643 11.356 76.271 11.674 75.821 11.812 C 75.604 11.88 75.388 11.907 75.157 11.893 C 74.927 11.88 74.71 11.826 74.494 11.718 C 74.071 11.503 73.739 11.144 73.559 10.705 C 73.39 10.266 73.414 9.776 73.627 9.355 Z M 84.381 22.451 C 84.07 22.14 83.826 21.816 83.65 21.452 C 83.46 21.087 83.338 20.723 83.27 20.345 C 83.203 19.967 83.203 19.602 83.243 19.238 C 83.297 18.873 83.406 18.536 83.582 18.225 L 86.277 19.427 C 86.196 19.548 86.155 19.697 86.142 19.832 C 86.142 19.98 86.182 20.115 86.291 20.223 C 86.44 20.372 86.589 20.426 86.738 20.372 C 86.887 20.318 87.036 20.223 87.198 20.075 L 91.573 15.728 L 93.862 18.009 L 89.582 22.262 C 89.271 22.572 88.932 22.842 88.539 23.099 C 88.146 23.355 87.74 23.517 87.293 23.585 C 86.846 23.652 86.372 23.625 85.884 23.463 C 85.397 23.301 84.882 22.964 84.367 22.451 Z M 90.178 29.39 C 89.758 28.769 89.487 28.175 89.352 27.594 C 89.216 27.014 89.189 26.474 89.284 25.974 C 89.379 25.461 89.582 25.002 89.894 24.584 C 90.205 24.165 90.598 23.787 91.072 23.477 L 95.921 20.25 L 97.709 22.923 L 93.158 25.947 C 92.778 26.204 92.535 26.487 92.44 26.825 C 92.345 27.162 92.413 27.486 92.643 27.824 C 92.873 28.161 93.144 28.35 93.483 28.391 C 93.821 28.431 94.174 28.323 94.566 28.067 L 99.117 25.043 L 100.905 27.702 L 96.056 30.929 C 95.582 31.239 95.095 31.455 94.566 31.563 C 94.052 31.671 93.537 31.671 93.022 31.563 C 92.508 31.455 92.006 31.212 91.532 30.861 C 91.045 30.51 90.598 30.024 90.178 29.403 Z M 102.408 30.632 L 103.533 33.629 L 99.943 37.895 L 99.943 37.949 L 104.467 36.113 L 105.551 38.961 L 96.584 42.336 L 95.42 39.272 L 98.765 35.181 L 98.765 35.127 L 94.512 36.855 L 93.429 34.007 Z M 106.269 42.147 L 107.284 48.64 L 104.63 49.059 L 104.074 45.549 L 103.262 45.67 L 103.776 48.964 L 101.298 49.356 L 100.783 46.062 L 99.903 46.197 L 100.485 49.936 L 97.831 50.355 L 96.774 43.632 L 106.242 42.147 Z M 101.975 65.245 C 102.056 65.421 102.151 65.569 102.273 65.704 C 102.395 65.839 102.517 65.92 102.666 65.947 C 102.842 65.988 103.004 65.974 103.167 65.893 C 103.329 65.812 103.438 65.664 103.492 65.421 C 103.546 65.164 103.492 64.935 103.343 64.719 C 103.181 64.503 102.937 64.341 102.598 64.246 L 103.668 61.357 C 104.264 61.56 104.738 61.843 105.117 62.208 C 105.497 62.572 105.781 62.977 105.984 63.423 C 106.187 63.868 106.296 64.354 106.309 64.854 C 106.323 65.353 106.282 65.853 106.16 66.352 C 106.052 66.811 105.876 67.243 105.659 67.675 C 105.429 68.094 105.158 68.458 104.833 68.742 C 104.508 69.039 104.129 69.241 103.682 69.363 C 103.235 69.484 102.747 69.484 102.205 69.363 C 101.813 69.268 101.487 69.133 101.217 68.971 C 100.946 68.796 100.715 68.607 100.526 68.377 C 100.336 68.148 100.187 67.905 100.052 67.648 C 99.916 67.392 99.794 67.122 99.686 66.852 L 99.049 65.259 L 98.277 68.458 L 95.663 67.824 L 97.492 60.291 L 99.93 60.885 L 101.989 65.272 Z M 93.334 72.32 C 93.591 71.793 93.876 71.361 94.201 71.024 C 94.526 70.686 94.878 70.443 95.257 70.268 C 95.636 70.092 96.016 69.984 96.422 69.944 C 96.828 69.903 97.221 69.903 97.614 69.944 C 98.007 69.998 98.386 70.079 98.765 70.2 C 99.144 70.322 99.483 70.457 99.808 70.619 C 100.133 70.767 100.445 70.956 100.783 71.159 C 101.122 71.361 101.42 71.604 101.704 71.874 C 101.989 72.144 102.232 72.441 102.449 72.779 C 102.666 73.116 102.815 73.481 102.896 73.872 C 102.977 74.264 103.004 74.696 102.95 75.155 C 102.896 75.614 102.747 76.113 102.49 76.64 C 102.111 77.436 101.65 78.017 101.122 78.381 C 100.594 78.746 100.038 78.962 99.456 79.043 C 98.873 79.11 98.291 79.083 97.709 78.935 C 97.126 78.786 96.584 78.597 96.11 78.368 C 95.799 78.219 95.474 78.03 95.135 77.828 C 94.797 77.625 94.485 77.369 94.201 77.099 C 93.916 76.829 93.659 76.518 93.429 76.194 C 93.198 75.87 93.049 75.492 92.955 75.087 C 92.86 74.682 92.833 74.25 92.887 73.791 C 92.941 73.332 93.09 72.833 93.334 72.306 Z M 99.971 75.465 C 100.052 75.29 100.065 75.114 99.998 74.939 C 99.917 74.749 99.797 74.579 99.645 74.439 C 99.483 74.277 99.28 74.129 99.049 73.994 C 98.593 73.724 98.112 73.498 97.614 73.319 C 97.374 73.227 97.124 73.164 96.869 73.13 C 96.639 73.103 96.422 73.103 96.246 73.157 C 96.07 73.211 95.934 73.332 95.853 73.508 C 95.772 73.683 95.758 73.859 95.826 74.048 C 95.894 74.223 96.016 74.399 96.192 74.547 C 96.368 74.709 96.571 74.858 96.815 74.993 C 97.045 75.141 97.289 75.263 97.519 75.371 C 97.749 75.479 97.993 75.573 98.237 75.668 C 98.494 75.762 98.724 75.816 98.955 75.843 C 99.185 75.87 99.375 75.857 99.564 75.803 C 99.74 75.749 99.876 75.627 99.957 75.438 Z M 93.361 83.376 C 93.361 83.565 93.388 83.754 93.442 83.916 C 93.496 84.078 93.591 84.213 93.713 84.308 C 93.862 84.416 94.011 84.47 94.187 84.456 C 94.363 84.443 94.526 84.348 94.675 84.159 C 94.837 83.957 94.878 83.714 94.824 83.457 C 94.756 83.201 94.593 82.958 94.323 82.728 L 96.463 80.501 C 96.923 80.919 97.248 81.378 97.451 81.864 C 97.654 82.337 97.749 82.823 97.749 83.322 C 97.749 83.822 97.654 84.294 97.478 84.767 C 97.302 85.239 97.058 85.671 96.747 86.076 C 96.463 86.454 96.137 86.792 95.758 87.089 C 95.379 87.386 94.986 87.602 94.566 87.737 C 94.146 87.872 93.713 87.912 93.266 87.858 C 92.819 87.804 92.359 87.602 91.912 87.264 C 91.6 87.021 91.343 86.778 91.167 86.508 C 90.991 86.238 90.855 85.968 90.774 85.685 C 90.693 85.401 90.638 85.118 90.625 84.834 C 90.611 84.551 90.598 84.254 90.625 83.957 L 90.679 82.229 L 88.688 84.861 L 86.535 83.241 L 91.221 77.058 L 93.212 78.57 L 93.347 83.403 Z M 84.259 92.016 C 83.802 92.21 83.298 92.267 82.81 92.178 C 82.58 92.138 82.363 92.057 82.16 91.935 C 81.957 91.827 81.781 91.679 81.632 91.503 C 81.266 91.085 81.036 90.653 80.941 90.194 C 80.859 89.735 80.873 89.289 80.981 88.844 C 81.09 88.398 81.293 87.98 81.577 87.575 C 81.862 87.17 82.187 86.805 82.553 86.495 C 82.918 86.171 83.311 85.901 83.744 85.671 C 84.178 85.442 84.625 85.293 85.072 85.212 C 85.519 85.131 85.993 85.145 86.453 85.226 C 86.914 85.307 87.361 85.509 87.808 85.806 L 86.006 88.304 C 85.79 88.158 85.536 88.078 85.275 88.074 C 84.77 88.077 84.319 88.388 84.137 88.857 C 84.11 88.952 84.097 89.046 84.11 89.141 C 84.11 89.235 84.164 89.33 84.259 89.424 C 84.449 89.64 84.665 89.694 84.923 89.6 C 85.167 89.505 85.451 89.316 85.776 89.033 L 86.467 88.425 L 87.93 90.086 L 87.158 90.761 C 86.9 90.99 86.724 91.206 86.629 91.409 C 86.535 91.611 86.575 91.827 86.751 92.03 C 86.887 92.192 87.049 92.246 87.225 92.192 C 87.401 92.151 87.564 92.057 87.699 91.949 C 87.862 91.8 87.984 91.611 88.024 91.382 C 88.065 91.152 88.024 90.923 87.889 90.693 L 90.557 89.208 C 90.787 89.708 90.896 90.194 90.909 90.653 C 90.909 91.112 90.855 91.557 90.706 91.962 C 90.557 92.381 90.354 92.759 90.083 93.123 C 89.812 93.488 89.528 93.798 89.203 94.082 C 88.878 94.365 88.526 94.608 88.106 94.824 C 87.699 95.04 87.279 95.189 86.846 95.256 C 86.413 95.324 85.993 95.31 85.586 95.189 C 85.18 95.067 84.801 94.824 84.462 94.446 C 84.11 94.041 83.934 93.623 83.934 93.191 C 83.934 92.759 84.056 92.367 84.286 92.016 L 84.246 91.976 Z M 72.841 98.213 C 73.011 98.652 72.987 99.142 72.774 99.563 C 72.679 99.765 72.53 99.954 72.367 100.116 C 72.021 100.444 71.557 100.619 71.081 100.602 C 70.622 100.574 70.19 100.382 69.862 100.062 C 69.699 99.9 69.577 99.698 69.482 99.468 C 69.401 99.239 69.36 99.009 69.374 98.78 C 69.374 98.55 69.442 98.321 69.536 98.132 C 69.631 97.929 69.767 97.754 69.929 97.592 C 70.092 97.43 70.295 97.308 70.512 97.227 C 70.742 97.146 70.972 97.106 71.216 97.106 C 71.46 97.106 71.676 97.16 71.893 97.241 C 72.11 97.322 72.286 97.457 72.462 97.619 C 72.625 97.781 72.746 97.983 72.841 98.213 Z" fill="#7901fa"></path></svg>',
                                    svgContentId: 4034866666
                                },
                                MQBFpgPnD: {
                                    svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 41 42"><path d="M 20.749 37.811 C 20.9 37.811 21.045 37.821 21.19 37.842 C 21.336 37.863 21.476 37.9 21.605 37.952 C 21.735 38.005 21.865 38.057 21.984 38.126 C 22.104 38.194 22.207 38.267 22.306 38.346 L 21.569 39.186 C 21.481 39.092 21.367 39.013 21.221 38.939 C 21.076 38.866 20.931 38.834 20.775 38.834 C 20.708 38.834 20.645 38.85 20.588 38.876 C 20.531 38.903 20.505 38.95 20.505 39.013 C 20.505 39.05 20.516 39.076 20.536 39.102 C 20.557 39.128 20.588 39.149 20.64 39.176 C 20.687 39.202 20.754 39.228 20.843 39.26 C 20.926 39.291 21.035 39.323 21.164 39.365 C 21.289 39.407 21.408 39.454 21.522 39.506 C 21.637 39.564 21.74 39.632 21.829 39.716 C 21.917 39.8 21.989 39.9 22.041 40.016 C 22.093 40.131 22.124 40.273 22.124 40.436 C 22.124 40.667 22.083 40.866 21.995 41.029 C 21.901 41.192 21.787 41.328 21.642 41.433 C 21.496 41.538 21.33 41.617 21.149 41.664 C 20.967 41.711 20.785 41.738 20.604 41.743 C 20.36 41.743 20.116 41.706 19.862 41.612 C 19.607 41.522 19.384 41.391 19.192 41.213 L 19.95 40.409 C 20.033 40.514 20.137 40.593 20.261 40.646 C 20.386 40.698 20.495 40.724 20.588 40.724 C 20.676 40.724 20.749 40.709 20.806 40.682 C 20.863 40.656 20.889 40.614 20.889 40.551 C 20.889 40.493 20.858 40.451 20.801 40.425 C 20.744 40.399 20.651 40.362 20.521 40.325 C 20.391 40.283 20.251 40.236 20.106 40.184 C 19.96 40.131 19.825 40.058 19.701 39.974 C 19.576 39.89 19.472 39.779 19.389 39.648 C 19.306 39.522 19.265 39.359 19.265 39.165 C 19.265 38.939 19.301 38.745 19.389 38.577 C 19.478 38.409 19.587 38.267 19.732 38.157 C 19.872 38.047 20.033 37.958 20.215 37.9 C 20.391 37.842 20.578 37.811 20.765 37.811 Z M 18.377 41.522 L 17.142 41.349 L 17.651 37.669 L 18.886 37.842 Z M 15.341 37.075 L 16.53 37.422 L 15.803 39.979 L 16.67 40.231 L 16.379 41.244 L 13.457 40.393 L 13.748 39.38 L 14.615 39.632 Z M 12.648 40.052 L 10.38 38.923 L 10.831 37.989 L 12.056 38.598 L 12.196 38.309 L 11.044 37.737 L 11.47 36.865 L 12.622 37.438 L 12.772 37.128 L 11.47 36.477 L 11.921 35.542 L 14.267 36.713 L 12.643 40.047 Z M 7.556 34.587 C 7.333 34.776 7.095 34.913 6.845 34.981 C 6.596 35.054 6.352 35.075 6.108 35.044 C 5.865 35.012 5.626 34.928 5.397 34.792 C 5.169 34.655 4.962 34.477 4.775 34.251 C 4.588 34.025 4.448 33.789 4.359 33.537 C 4.266 33.285 4.23 33.033 4.24 32.786 C 4.251 32.534 4.313 32.293 4.427 32.062 C 4.541 31.826 4.712 31.616 4.936 31.427 C 5.159 31.238 5.403 31.101 5.652 31.028 C 5.906 30.949 6.155 30.928 6.404 30.959 C 6.653 30.991 6.892 31.07 7.126 31.206 C 7.359 31.337 7.567 31.516 7.754 31.742 C 7.941 31.967 8.075 32.209 8.164 32.461 C 8.252 32.713 8.288 32.965 8.273 33.222 C 8.257 33.474 8.19 33.721 8.07 33.957 C 7.951 34.193 7.78 34.409 7.551 34.598 Z M 6.716 33.568 C 6.883 33.433 6.997 33.241 7.037 33.028 C 7.053 32.933 7.048 32.833 7.017 32.739 C 6.991 32.644 6.944 32.555 6.877 32.476 C 6.809 32.398 6.731 32.335 6.648 32.293 C 6.565 32.251 6.467 32.23 6.373 32.224 C 6.275 32.224 6.176 32.235 6.077 32.272 C 5.979 32.308 5.88 32.366 5.787 32.445 C 5.698 32.524 5.626 32.608 5.574 32.697 C 5.522 32.791 5.491 32.881 5.481 32.975 C 5.47 33.07 5.481 33.164 5.506 33.259 C 5.532 33.353 5.579 33.437 5.647 33.521 C 5.714 33.6 5.792 33.663 5.875 33.71 C 5.963 33.757 6.051 33.778 6.145 33.789 C 6.238 33.794 6.332 33.778 6.43 33.742 C 6.529 33.705 6.622 33.652 6.716 33.574 Z M 3.685 29.857 L 3.161 28.854 L 4.053 28.376 L 4.577 29.374 L 5.678 28.786 L 6.249 29.872 L 3 31.61 L 1.837 29.395 L 2.751 28.906 L 3.347 30.046 L 3.685 29.862 Z M 3.789 22.202 L 3.929 23.441 L 1.313 23.746 L 1.417 24.654 L 0.379 24.775 L 0.031 21.719 L 1.069 21.599 L 1.173 22.507 Z M 2.465 18.722 L 2.377 19.735 L 3.768 19.856 L 3.659 21.1 L 0 20.774 L 0.109 19.535 L 1.349 19.646 L 1.438 18.632 L 0.197 18.522 L 0.306 17.273 L 3.965 17.598 L 3.856 18.842 Z M 0.592 16.028 L 1.323 13.582 L 2.309 13.881 L 1.915 15.204 L 2.216 15.298 L 2.585 14.059 L 3.503 14.338 L 3.135 15.577 L 3.462 15.676 L 3.882 14.269 L 4.868 14.569 L 4.11 17.104 L 0.592 16.033 Z M 5.756 8.904 L 7.333 10.269 L 6.56 11.135 L 3.83 8.647 L 4.915 7.434 L 6.83 8.274 L 6.845 8.253 L 5.766 6.478 L 6.882 5.224 L 9.612 7.712 L 8.807 8.615 L 7.297 7.187 L 7.271 7.208 L 8.351 9.124 L 7.764 9.781 L 5.771 8.883 Z M 8.859 5.964 C 8.703 5.712 8.605 5.46 8.563 5.197 C 8.522 4.935 8.537 4.688 8.6 4.447 C 8.662 4.205 8.776 3.979 8.937 3.769 C 9.098 3.559 9.3 3.37 9.549 3.213 C 9.793 3.055 10.048 2.945 10.307 2.887 C 10.567 2.83 10.816 2.819 11.06 2.861 C 11.304 2.903 11.532 2.998 11.75 3.145 C 11.963 3.292 12.149 3.491 12.31 3.738 C 12.466 3.99 12.57 4.247 12.611 4.51 C 12.653 4.772 12.643 5.029 12.58 5.271 C 12.518 5.518 12.404 5.749 12.248 5.964 C 12.087 6.179 11.885 6.363 11.641 6.52 C 11.397 6.678 11.143 6.783 10.883 6.841 C 10.624 6.898 10.369 6.898 10.125 6.851 C 9.882 6.804 9.648 6.704 9.43 6.552 C 9.212 6.4 9.025 6.2 8.869 5.948 Z M 9.965 5.25 C 10.032 5.355 10.105 5.439 10.188 5.502 C 10.271 5.57 10.359 5.612 10.452 5.644 C 10.546 5.67 10.639 5.675 10.738 5.665 C 10.836 5.654 10.93 5.612 11.013 5.56 C 11.101 5.502 11.169 5.434 11.226 5.35 C 11.283 5.266 11.314 5.176 11.329 5.082 C 11.345 4.987 11.345 4.882 11.319 4.777 C 11.298 4.672 11.252 4.567 11.189 4.462 C 11.127 4.363 11.054 4.279 10.971 4.216 C 10.817 4.093 10.62 4.042 10.426 4.074 C 10.333 4.09 10.24 4.126 10.151 4.184 C 10.063 4.242 9.991 4.31 9.939 4.389 C 9.882 4.473 9.845 4.557 9.83 4.651 C 9.814 4.746 9.814 4.84 9.835 4.945 C 9.856 5.05 9.897 5.15 9.965 5.25 Z M 12.419 1.712 L 13.587 1.313 L 15.175 2.762 L 15.196 2.762 L 14.552 0.987 L 15.663 0.609 L 16.836 4.132 L 15.642 4.541 L 14.116 3.187 L 14.096 3.187 L 14.708 4.856 L 13.597 5.234 L 12.425 1.712 Z M 19.161 3.843 L 17.936 3.995 L 17.614 1.355 L 16.717 1.465 L 16.592 0.415 L 19.613 0.042 L 19.737 1.092 L 18.839 1.202 Z M 22.607 2.478 L 21.605 2.394 L 21.491 3.801 L 20.261 3.701 L 20.557 -0.005 L 21.782 0.095 L 21.683 1.349 L 22.685 1.433 L 22.784 0.179 L 24.019 0.278 L 23.723 3.985 L 22.493 3.885 Z M 28.217 3.649 C 28.297 3.485 28.439 3.361 28.612 3.308 C 28.695 3.281 28.783 3.271 28.876 3.276 C 28.97 3.276 29.058 3.302 29.141 3.344 C 29.224 3.386 29.292 3.439 29.349 3.507 C 29.406 3.575 29.447 3.654 29.478 3.733 C 29.51 3.817 29.52 3.901 29.515 3.99 C 29.515 4.079 29.489 4.169 29.447 4.253 C 29.368 4.416 29.225 4.54 29.053 4.594 C 28.97 4.62 28.887 4.631 28.799 4.625 C 28.71 4.62 28.627 4.599 28.544 4.557 C 28.382 4.473 28.255 4.334 28.186 4.163 C 28.121 3.992 28.131 3.802 28.212 3.638 Z M 32.333 8.731 C 32.214 8.61 32.12 8.484 32.053 8.342 C 31.98 8.201 31.933 8.059 31.907 7.912 C 31.881 7.765 31.881 7.623 31.897 7.481 C 31.918 7.34 31.959 7.208 32.027 7.088 L 33.059 7.555 C 33.028 7.602 33.013 7.66 33.008 7.712 C 33.008 7.77 33.023 7.823 33.065 7.865 C 33.122 7.922 33.179 7.943 33.236 7.922 C 33.293 7.901 33.35 7.865 33.412 7.807 L 35.089 6.116 L 35.966 7.004 L 34.326 8.657 C 34.206 8.778 34.077 8.883 33.926 8.983 C 33.776 9.083 33.62 9.146 33.449 9.172 C 33.277 9.198 33.096 9.188 32.909 9.125 C 32.722 9.062 32.525 8.93 32.328 8.731 Z M 34.554 11.429 C 34.393 11.188 34.289 10.957 34.238 10.731 C 34.186 10.505 34.175 10.295 34.212 10.101 C 34.248 9.901 34.326 9.723 34.445 9.56 C 34.565 9.397 34.715 9.25 34.897 9.13 L 36.755 7.875 L 37.44 8.914 L 35.696 10.09 C 35.551 10.19 35.457 10.3 35.421 10.432 C 35.385 10.563 35.411 10.689 35.499 10.82 C 35.587 10.951 35.691 11.025 35.821 11.041 C 35.95 11.056 36.085 11.014 36.236 10.915 L 37.979 9.739 L 38.665 10.773 L 36.807 12.028 C 36.625 12.148 36.438 12.232 36.236 12.274 C 36.038 12.316 35.841 12.316 35.644 12.274 C 35.447 12.232 35.255 12.138 35.073 12.001 C 34.886 11.865 34.715 11.676 34.554 11.434 Z M 39.241 11.912 L 39.671 13.078 L 38.296 14.737 L 38.296 14.758 L 40.029 14.044 L 40.445 15.151 L 37.009 16.464 L 36.563 15.272 L 37.845 13.681 L 37.845 13.66 L 36.215 14.332 L 35.8 13.225 Z M 40.72 16.391 L 41.109 18.916 L 40.092 19.079 L 39.879 17.714 L 39.568 17.761 L 39.765 19.042 L 38.815 19.194 L 38.618 17.913 L 38.281 17.966 L 38.504 19.42 L 37.486 19.583 L 37.082 16.968 L 40.709 16.391 Z M 39.075 25.373 C 39.106 25.441 39.142 25.499 39.189 25.552 C 39.235 25.604 39.282 25.636 39.339 25.646 C 39.407 25.662 39.469 25.657 39.531 25.625 C 39.594 25.594 39.635 25.536 39.656 25.441 C 39.677 25.342 39.656 25.252 39.599 25.168 C 39.536 25.084 39.443 25.021 39.313 24.985 L 39.723 23.861 C 39.952 23.94 40.133 24.05 40.279 24.192 C 40.424 24.334 40.533 24.491 40.611 24.664 C 40.689 24.838 40.73 25.027 40.735 25.221 C 40.741 25.415 40.725 25.609 40.678 25.804 C 40.637 25.982 40.569 26.15 40.486 26.318 C 40.398 26.481 40.294 26.623 40.17 26.733 C 40.045 26.848 39.9 26.927 39.728 26.974 C 39.557 27.022 39.37 27.022 39.163 26.974 C 39.012 26.938 38.888 26.885 38.784 26.822 C 38.68 26.754 38.592 26.68 38.519 26.591 C 38.447 26.502 38.389 26.407 38.338 26.308 C 38.286 26.208 38.239 26.103 38.197 25.998 L 37.954 25.378 L 37.658 26.623 L 36.656 26.376 L 37.357 23.446 L 38.291 23.677 L 39.08 25.384 Z M 35.763 28.124 C 35.862 27.92 35.971 27.752 36.096 27.62 C 36.22 27.489 36.355 27.395 36.5 27.326 C 36.646 27.258 36.791 27.216 36.947 27.2 C 37.102 27.185 37.253 27.185 37.403 27.2 C 37.554 27.221 37.699 27.253 37.845 27.3 C 37.99 27.347 38.12 27.4 38.244 27.463 C 38.369 27.521 38.488 27.594 38.618 27.673 C 38.748 27.752 38.862 27.846 38.971 27.951 C 39.08 28.056 39.173 28.172 39.256 28.303 C 39.339 28.434 39.396 28.576 39.427 28.728 C 39.459 28.88 39.469 29.048 39.448 29.227 C 39.427 29.405 39.37 29.6 39.272 29.804 C 39.126 30.114 38.95 30.34 38.748 30.482 C 38.545 30.623 38.332 30.707 38.109 30.739 C 37.886 30.765 37.663 30.755 37.44 30.697 C 37.217 30.639 37.009 30.566 36.827 30.476 C 36.708 30.419 36.583 30.345 36.454 30.266 C 36.324 30.188 36.205 30.088 36.096 29.983 C 35.987 29.878 35.888 29.757 35.8 29.631 C 35.712 29.505 35.654 29.358 35.618 29.201 C 35.582 29.043 35.571 28.875 35.592 28.697 C 35.613 28.518 35.67 28.324 35.763 28.119 Z M 38.306 29.347 C 38.338 29.279 38.343 29.211 38.317 29.143 C 38.286 29.069 38.24 29.003 38.182 28.948 C 38.12 28.885 38.042 28.828 37.954 28.775 C 37.779 28.671 37.594 28.583 37.403 28.513 C 37.311 28.477 37.216 28.453 37.118 28.439 C 37.03 28.429 36.947 28.429 36.879 28.45 C 36.812 28.471 36.76 28.518 36.729 28.586 C 36.698 28.654 36.692 28.723 36.718 28.796 C 36.744 28.864 36.791 28.933 36.858 28.99 C 36.926 29.053 37.004 29.111 37.097 29.164 C 37.185 29.221 37.279 29.269 37.367 29.311 C 37.455 29.353 37.549 29.389 37.642 29.426 C 37.741 29.463 37.829 29.484 37.917 29.494 C 38.005 29.505 38.078 29.5 38.151 29.479 C 38.218 29.458 38.27 29.41 38.301 29.337 Z M 35.774 32.424 C 35.774 32.497 35.784 32.571 35.805 32.634 C 35.826 32.697 35.862 32.749 35.909 32.786 C 35.966 32.828 36.023 32.849 36.09 32.844 C 36.158 32.839 36.22 32.802 36.277 32.728 C 36.339 32.65 36.355 32.555 36.334 32.455 C 36.308 32.356 36.246 32.261 36.142 32.172 L 36.962 31.306 C 37.139 31.468 37.263 31.647 37.341 31.836 C 37.419 32.02 37.455 32.209 37.455 32.403 C 37.455 32.597 37.419 32.781 37.352 32.965 C 37.284 33.148 37.191 33.316 37.071 33.474 C 36.962 33.621 36.838 33.752 36.692 33.868 C 36.547 33.983 36.397 34.067 36.236 34.12 C 36.075 34.172 35.909 34.188 35.737 34.167 C 35.566 34.146 35.39 34.067 35.218 33.936 C 35.099 33.841 35.001 33.747 34.933 33.642 C 34.866 33.537 34.814 33.432 34.783 33.322 C 34.751 33.211 34.731 33.101 34.725 32.991 C 34.72 32.881 34.715 32.765 34.725 32.65 L 34.746 31.978 L 33.983 33.001 L 33.158 32.371 L 34.954 29.967 L 35.717 30.555 L 35.769 32.434 Z M 32.286 35.784 C 32.111 35.86 31.918 35.881 31.731 35.847 C 31.643 35.831 31.56 35.8 31.482 35.752 C 31.404 35.71 31.336 35.653 31.279 35.584 C 31.139 35.422 31.051 35.254 31.015 35.075 C 30.984 34.897 30.989 34.723 31.03 34.55 C 31.072 34.377 31.15 34.214 31.259 34.057 C 31.368 33.899 31.492 33.757 31.632 33.637 C 31.772 33.511 31.923 33.406 32.089 33.316 C 32.255 33.227 32.426 33.169 32.598 33.138 C 32.769 33.106 32.951 33.112 33.127 33.143 C 33.303 33.175 33.475 33.253 33.646 33.369 L 32.956 34.34 C 32.873 34.284 32.775 34.252 32.675 34.251 C 32.482 34.252 32.309 34.373 32.239 34.555 C 32.229 34.592 32.224 34.629 32.229 34.666 C 32.229 34.702 32.25 34.739 32.286 34.776 C 32.359 34.86 32.442 34.881 32.541 34.844 C 32.634 34.807 32.743 34.734 32.867 34.624 L 33.132 34.387 L 33.693 35.033 L 33.397 35.296 C 33.298 35.385 33.231 35.469 33.194 35.548 C 33.158 35.626 33.174 35.71 33.241 35.789 C 33.293 35.852 33.355 35.873 33.423 35.852 C 33.49 35.836 33.553 35.8 33.604 35.758 C 33.667 35.7 33.713 35.626 33.729 35.537 C 33.745 35.448 33.729 35.359 33.677 35.269 L 34.699 34.692 C 34.788 34.886 34.829 35.075 34.834 35.254 C 34.834 35.432 34.814 35.605 34.757 35.763 C 34.699 35.926 34.622 36.073 34.518 36.214 C 34.414 36.356 34.305 36.477 34.181 36.587 C 34.056 36.697 33.921 36.792 33.76 36.876 C 33.604 36.96 33.444 37.018 33.277 37.044 C 33.111 37.07 32.951 37.065 32.795 37.018 C 32.639 36.97 32.494 36.876 32.364 36.729 C 32.229 36.571 32.162 36.409 32.162 36.241 C 32.162 36.073 32.208 35.92 32.297 35.784 L 32.281 35.768 Z M 27.911 38.194 C 27.976 38.365 27.967 38.555 27.885 38.719 C 27.849 38.798 27.792 38.871 27.729 38.934 C 27.597 39.061 27.419 39.129 27.236 39.123 C 27.061 39.112 26.895 39.038 26.769 38.913 C 26.707 38.85 26.66 38.771 26.624 38.682 C 26.593 38.593 26.577 38.504 26.583 38.414 C 26.583 38.325 26.608 38.236 26.645 38.162 C 26.681 38.084 26.733 38.015 26.795 37.952 C 26.858 37.889 26.935 37.842 27.018 37.811 C 27.107 37.779 27.195 37.763 27.288 37.763 C 27.382 37.763 27.465 37.784 27.548 37.816 C 27.631 37.847 27.698 37.9 27.766 37.963 C 27.828 38.026 27.875 38.105 27.911 38.194 Z" fill="#7901fa"></path></svg>',
                                    svgContentId: 2654823680
                                }
                            }, s, w)
                        })
                    })]
                })
            })
        })
    }),
    Vs = ['.framer-cO4ax [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }', "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-cO4ax .framer-1di8r3z { display: block; }", ".framer-cO4ax .framer-182hqci { height: 92px; overflow: hidden; position: relative; width: 92px; will-change: transform; }", ".framer-cO4ax .framer-1l4uunx { bottom: 2px; flex: none; left: 2px; overflow: hidden; position: absolute; right: 2px; top: 2px; will-change: transform; }", ".framer-cO4ax .framer-1wfz9ep { aspect-ratio: 0.6666666666666666 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 30px); left: 50%; position: absolute; top: 50%; width: 20px; }", ".framer-cO4ax .framer-1fjmeaz { bottom: 6px; flex: none; left: 6px; overflow: visible; position: absolute; right: 6px; top: 6px; }", ".framer-cO4ax .framer-1wyhiug { flex: none; height: 80px; left: calc(49.36708860759496% - 79px / 2); position: absolute; top: calc(50.00000000000002% - 80px / 2); width: 79px; }", ".framer-cO4ax.framer-v-jv4nu2 .framer-182hqci { aspect-ratio: 1 / 1; height: var(--framer-aspect-ratio-supported, 50px); width: 50px; }", ".framer-cO4ax.framer-v-jv4nu2 .framer-1fjmeaz { aspect-ratio: 1 / 1; bottom: unset; height: var(--framer-aspect-ratio-supported, 38px); }", ".framer-cO4ax.framer-v-jv4nu2 .framer-1wyhiug { height: 42px; left: calc(50.00000000000002% - 41px / 2); top: calc(50.00000000000002% - 42px / 2); width: 41px; }", ".framer-cO4ax.framer-v-d1k3z9 .framer-182hqci { aspect-ratio: 1 / 1; height: var(--framer-aspect-ratio-supported, 122px); width: 122px; }", ".framer-cO4ax.framer-v-d1k3z9 .framer-1fjmeaz { bottom: 0px; left: 0px; right: 0px; top: 0px; }", ".framer-cO4ax.framer-v-d1k3z9 .framer-1wyhiug { height: 108px; left: calc(50.00000000000002% - 107px / 2); top: calc(50.00000000000002% - 108px / 2); width: 107px; }"],
    Tr = K(js, Vs, "framer-cO4ax"),
    Kt = Tr;
Tr.displayName = "Framer - Site of the month - badge";
Tr.defaultProps = {
    height: 92,
    width: 92
};
Y(Tr, {
    variant: {
        options: ["PPsrtOdCR", "MQBFpgPnD", "DeJj7tlJW"],
        optionTitles: ["Variant 1", "Variant 2", "Variant 3"],
        title: "Variant",
        type: o.Enum
    }
});
re(Tr, []);
pe.loadWebFontsFromSelectors([]);
var ti = [],
    ai = [".framer-skoJK .framer-styles-preset-1wicq5s:not(.rich-text-wrapper), .framer-skoJK .framer-styles-preset-1wicq5s.rich-text-wrapper a { --framer-link-current-text-color: #111; --framer-link-current-text-decoration: underline; --framer-link-hover-text-color: #ff00cc; --framer-link-text-color: #ffffff; --framer-link-text-decoration: underline; }"],
    ii = "framer-skoJK";
var Ws = ["LI4GOMhIi", "wSL38TwKg", "ognoranU5"],
    Ts = {
        LI4GOMhIi: "framer-v-11nlve3",
        ognoranU5: "framer-v-eqqjvr",
        wSL38TwKg: "framer-v-l9aazd"
    };

function ni(r, ...t) {
    let a = {};
    return t ? .forEach(i => i && Object.assign(a, r[i])), a
}
var Hs = {
        Desktop: "LI4GOMhIi",
        Phone: "ognoranU5",
        Tablet: "wSL38TwKg"
    },
    Es = {
        default: {
            damping: 60,
            delay: 0,
            duration: .3,
            ease: [.44, 0, .56, 1],
            mass: 1,
            stiffness: 500,
            type: "spring"
        }
    },
    Ps = $(function({
        id: r,
        style: t,
        className: a,
        width: i,
        height: m,
        layoutId: l,
        variant: p = "LI4GOMhIi",
        ...y
    }, x) {
        let u = Hs[p] || p,
            {
                baseVariant: s,
                classNames: S,
                gestureVariant: w,
                setGestureState: h,
                setVariant: j,
                transition: f,
                variants: L
            } = se({
                cycleOrder: Ws,
                defaultVariant: "LI4GOMhIi",
                transitions: Es,
                variant: u,
                variantClassNames: Ts
            }),
            c = L.join("-") + y.layoutDependency,
            C = ee();
        return e(G, {
            id: l ? ? C,
            children: e(n.div, {
                initial: u,
                animate: L,
                onHoverStart: () => h({
                    isHovered: !0
                }),
                onHoverEnd: () => h({
                    isHovered: !1
                }),
                onTapStart: () => h({
                    isPressed: !0
                }),
                onTap: () => h({
                    isPressed: !1
                }),
                onTapCancel: () => h({
                    isPressed: !1
                }),
                className: E("framer-Yku2D", ii, S),
                style: {
                    display: "contents"
                },
                children: d(n.footer, { ...y,
                    className: E("framer-11nlve3", a),
                    "data-border": !0,
                    "data-framer-name": "Desktop",
                    layoutDependency: c,
                    layoutId: "LI4GOMhIi",
                    ref: x,
                    style: {
                        "--border-bottom-width": "0px",
                        "--border-color": "rgba(0, 0, 0, 0.05)",
                        "--border-left-width": "0px",
                        "--border-right-width": "0px",
                        "--border-style": "solid",
                        "--border-top-width": "1px",
                        backgroundColor: "rgb(0, 0, 0)",
                        ...t
                    },
                    transition: f,
                    ...ni({
                        ognoranU5: {
                            "data-framer-name": "Phone"
                        },
                        wSL38TwKg: {
                            "data-framer-name": "Tablet"
                        }
                    }, s, w),
                    children: [d(n.div, {
                        className: "framer-8o4hsi",
                        "data-framer-name": "Horizontal",
                        layoutDependency: c,
                        layoutId: "nX4qRxikA",
                        transition: f,
                        children: [e(M, {
                            background: {
                                alt: "",
                                fit: "fill",
                                intrinsicHeight: 939,
                                intrinsicWidth: 2520,
                                pixelHeight: 939,
                                pixelWidth: 2520,
                                sizes: "400px",
                                src: new URL("https://framerusercontent.com/images/G3rUX3fcjqNlSKmp2VXJfDiIG0.png").href,
                                srcSet: `${new URL("https://framerusercontent.com/images/G3rUX3fcjqNlSKmp2VXJfDiIG0.png?scale-down-to=512").href} 512w, ${new URL("https://framerusercontent.com/images/G3rUX3fcjqNlSKmp2VXJfDiIG0.png?scale-down-to=1024").href} 1024w, ${new URL("https://framerusercontent.com/images/G3rUX3fcjqNlSKmp2VXJfDiIG0.png?scale-down-to=2048").href} 2048w, ${new URL("https://framerusercontent.com/images/G3rUX3fcjqNlSKmp2VXJfDiIG0.png").href} 2520w`
                            },
                            className: "framer-1mtz24z",
                            layoutDependency: c,
                            layoutId: "actV2mga0",
                            transition: f,
                            ...ni({
                                ognoranU5: {
                                    background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 939,
                                        intrinsicWidth: 2520,
                                        pixelHeight: 939,
                                        pixelWidth: 2520,
                                        sizes: "310px",
                                        src: new URL("https://framerusercontent.com/images/G3rUX3fcjqNlSKmp2VXJfDiIG0.png").href,
                                        srcSet: `${new URL("https://framerusercontent.com/images/G3rUX3fcjqNlSKmp2VXJfDiIG0.png?scale-down-to=512").href} 512w, ${new URL("https://framerusercontent.com/images/G3rUX3fcjqNlSKmp2VXJfDiIG0.png?scale-down-to=1024").href} 1024w, ${new URL("https://framerusercontent.com/images/G3rUX3fcjqNlSKmp2VXJfDiIG0.png?scale-down-to=2048").href} 2048w, ${new URL("https://framerusercontent.com/images/G3rUX3fcjqNlSKmp2VXJfDiIG0.png").href} 2520w`
                                    }
                                }
                            }, s, w)
                        }), d(n.div, {
                            className: "framer-10yhrjd",
                            layoutDependency: c,
                            layoutId: "irhS3v78o",
                            transition: f,
                            children: [e(M, {
                                background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 326,
                                    intrinsicWidth: 400,
                                    pixelHeight: 326,
                                    pixelWidth: 400,
                                    src: new URL("https://framerusercontent.com/images/AxcE5yKY5ALucft0IIVHvlyn84Y.png").href
                                },
                                className: "framer-17cll5t",
                                layoutDependency: c,
                                layoutId: "P9F9vpNey",
                                transition: f
                            }), e(D, {
                                __fromCanvasComponent: !0,
                                children: d(F, {
                                    children: [e(n.p, {
                                        style: {
                                            "--font-selector": "R0Y7SW50ZXItNTAw",
                                            "--framer-font-size": "14px",
                                            "--framer-font-weight": "500",
                                            "--framer-line-height": "1.5em",
                                            "--framer-text-alignment": "center",
                                            "--framer-text-color": "var(--extracted-r6o4lv)"
                                        },
                                        children: "\xA9 2023 The Brute Squad"
                                    }), e(n.p, {
                                        style: {
                                            "--font-selector": "R0Y7SW50ZXItNTAw",
                                            "--framer-font-size": "14px",
                                            "--framer-font-weight": "500",
                                            "--framer-line-height": "1.5em",
                                            "--framer-text-alignment": "center",
                                            "--framer-text-color": "var(--extracted-2gxw0f)"
                                        },
                                        children: "All Rights Reserved"
                                    })]
                                }),
                                className: "framer-tyzf5d",
                                fonts: ["GF;Inter-500"],
                                layoutDependency: c,
                                layoutId: "Whx5KgNT1",
                                style: {
                                    "--extracted-2gxw0f": "var(--token-ba0f8505-1870-43c0-8d4e-7d4bc5406462, rgb(153, 153, 153))",
                                    "--extracted-r6o4lv": "var(--token-ba0f8505-1870-43c0-8d4e-7d4bc5406462, rgb(153, 153, 153))",
                                    "--framer-link-hover-text-color": "rgba(153, 153, 153, 0.6)",
                                    "--framer-link-text-decoration": "none",
                                    "--framer-paragraph-spacing": "0px"
                                },
                                transition: f,
                                verticalAlignment: "top",
                                withExternalLayout: !0
                            })]
                        })]
                    }), d(n.div, {
                        className: "framer-12s188n",
                        "data-border": !0,
                        "data-framer-name": "Copyright",
                        layoutDependency: c,
                        layoutId: "Tze0OoMCd",
                        style: {
                            "--border-bottom-width": "0px",
                            "--border-color": "rgba(255, 255, 255, 0.2)",
                            "--border-left-width": "0px",
                            "--border-right-width": "0px",
                            "--border-style": "solid",
                            "--border-top-width": "1px"
                        },
                        transition: f,
                        children: [d(n.div, {
                            className: "framer-6ttb1r",
                            layoutDependency: c,
                            layoutId: "wYVOxgswA",
                            transition: f,
                            children: [e(D, {
                                __fromCanvasComponent: !0,
                                children: e(F, {
                                    children: e(n.p, {
                                        style: {
                                            "--font-selector": "R0Y7SW50ZXItNTAw",
                                            "--framer-font-size": "14px",
                                            "--framer-font-weight": "500",
                                            "--framer-line-height": "1.5em",
                                            "--framer-text-alignment": "left",
                                            "--framer-text-color": "var(--extracted-r6o4lv)"
                                        },
                                        children: "Legal"
                                    })
                                }),
                                className: "framer-1ibivbn",
                                fonts: ["GF;Inter-500"],
                                layoutDependency: c,
                                layoutId: "g7fBPlSYQ",
                                style: {
                                    "--extracted-r6o4lv": "var(--token-ba0f8505-1870-43c0-8d4e-7d4bc5406462, rgb(153, 153, 153))",
                                    "--framer-paragraph-spacing": "0px"
                                },
                                transition: f,
                                verticalAlignment: "top",
                                withExternalLayout: !0
                            }), e(D, {
                                __fromCanvasComponent: !0,
                                children: e(F, {
                                    children: e(n.p, {
                                        style: {
                                            "--font-selector": "R0Y7SW50ZXItNTAw",
                                            "--framer-font-size": "14px",
                                            "--framer-font-weight": "500",
                                            "--framer-line-height": "1.5em",
                                            "--framer-text-alignment": "left",
                                            "--framer-text-color": "var(--extracted-r6o4lv)"
                                        },
                                        children: e(xe, {
                                            href: "https://drive.google.com/file/d/1dWRvuPaaqnk8KW7PQP-QlqAQw5jnBAZn/view?usp=share_link",
                                            openInNewTab: !0,
                                            smoothScroll: !1,
                                            children: e(n.a, {
                                                className: "framer-styles-preset-1wicq5s",
                                                "data-styles-preset": "ro7OPezbn",
                                                children: "Press kit"
                                            })
                                        })
                                    })
                                }),
                                className: "framer-lizbaw",
                                fonts: ["GF;Inter-500"],
                                layoutDependency: c,
                                layoutId: "kL9hteCeW",
                                style: {
                                    "--extracted-r6o4lv": "var(--token-ba0f8505-1870-43c0-8d4e-7d4bc5406462, rgb(153, 153, 153))",
                                    "--framer-paragraph-spacing": "0px"
                                },
                                transition: f,
                                verticalAlignment: "top",
                                withExternalLayout: !0
                            })]
                        }), d(n.div, {
                            className: "framer-mq4m29",
                            "data-framer-name": "Icons",
                            layoutDependency: c,
                            layoutId: "qx92bOevz",
                            transition: f,
                            children: [e(xe, {
                                href: "https://youtube.com/@discodungeon-thegame898",
                                children: e(M, {
                                    as: "a",
                                    background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 60,
                                        intrinsicWidth: 60,
                                        pixelHeight: 60,
                                        pixelWidth: 60,
                                        src: new URL("https://framerusercontent.com/images/H88UnHjBZGmG1ICFb9mUNBXAOM.png").href
                                    },
                                    className: "framer-10sksu2 framer-1l2dp8g",
                                    "data-framer-name": "Youtube",
                                    layoutDependency: c,
                                    layoutId: "vnsMLVetM",
                                    transition: f
                                })
                            }), e(xe, {
                                href: "https://www.facebook.com/DiscoDungeonRoguelike",
                                children: e(M, {
                                    as: "a",
                                    background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 60,
                                        intrinsicWidth: 60,
                                        pixelHeight: 60,
                                        pixelWidth: 60,
                                        src: new URL("https://framerusercontent.com/images/s91T6cT0HRGQ6bJee50nYDD0gM4.png").href
                                    },
                                    className: "framer-1ybd7uj framer-1l2dp8g",
                                    "data-framer-name": "Facebook",
                                    layoutDependency: c,
                                    layoutId: "osM9RRUFY",
                                    transition: f
                                })
                            }), e(xe, {
                                href: "https://www.instagram.com/disco.dungeon",
                                children: e(er, {
                                    as: "a",
                                    className: "framer-1f2ufhc framer-1l2dp8g",
                                    "data-framer-name": "Instagram",
                                    layout: "position",
                                    layoutDependency: c,
                                    layoutId: "m0GVrESvz",
                                    opacity: 1,
                                    radius: 0,
                                    svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20"><path d="M 0 0 L 20 0 L 20 20 L 0 20 Z" fill="transparent"></path><path d="M 7.5 10 C 7.5 8.619 8.619 7.5 10 7.5 C 11.381 7.5 12.5 8.619 12.5 10 C 12.5 11.381 11.381 12.5 10 12.5 C 8.619 12.5 7.5 11.381 7.5 10 Z" fill="rgb(255,255,255)"></path><path d="M 13.438 2.188 L 6.563 2.188 C 4.146 2.188 2.188 4.146 2.188 6.563 L 2.188 13.438 C 2.188 15.854 4.146 17.813 6.563 17.813 L 13.438 17.813 C 15.854 17.813 17.813 15.854 17.813 13.438 L 17.813 6.563 C 17.813 4.146 15.854 2.188 13.438 2.188 Z M 10 13.75 C 7.929 13.75 6.25 12.071 6.25 10 C 6.25 7.929 7.929 6.25 10 6.25 C 12.071 6.25 13.75 7.929 13.75 10 C 13.75 12.071 12.071 13.75 10 13.75 Z M 14.063 6.875 C 13.545 6.875 13.125 6.455 13.125 5.938 C 13.125 5.42 13.545 5 14.063 5 C 14.58 5 15 5.42 15 5.938 C 15 6.455 14.58 6.875 14.063 6.875 Z" fill="rgb(255,255,255)"></path></svg>',
                                    svgContentId: 3498106160,
                                    transition: f,
                                    withExternalLayout: !0
                                })
                            }), e(xe, {
                                href: "https://twitter.com/discodungeon",
                                children: e(er, {
                                    as: "a",
                                    className: "framer-iqzc8u framer-1l2dp8g",
                                    "data-framer-name": "Twitter",
                                    layout: "position",
                                    layoutDependency: c,
                                    layoutId: "XUWkZt4mJ",
                                    opacity: 1,
                                    radius: 0,
                                    svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20"><path d="M 0 0 L 20 0 L 20 20 L 0 20 Z" fill="transparent"></path><path d="M 19.195 6.07 L 16.836 8.422 C 16.367 13.883 11.758 18.125 6.25 18.125 C 5.117 18.125 4.18 17.945 3.469 17.594 C 2.898 17.305 2.664 17 2.602 16.906 C 2.497 16.747 2.47 16.549 2.53 16.368 C 2.589 16.187 2.728 16.043 2.906 15.977 C 2.922 15.969 4.766 15.266 5.961 13.914 C 5.22 13.386 4.568 12.743 4.031 12.008 C 2.961 10.555 1.828 8.031 2.508 4.266 C 2.551 4.038 2.716 3.852 2.938 3.781 C 3.16 3.709 3.404 3.766 3.57 3.93 C 3.594 3.961 6.195 6.523 9.375 7.352 L 9.375 6.875 C 9.381 5.874 9.785 4.917 10.497 4.214 C 11.209 3.51 12.171 3.119 13.172 3.125 C 14.495 3.144 15.711 3.856 16.375 5 L 18.75 5 C 19.002 4.999 19.23 5.15 19.328 5.383 C 19.42 5.618 19.368 5.886 19.195 6.07 Z" fill="rgb(255,255,255)"></path></svg>',
                                    svgContentId: 1793948549,
                                    transition: f,
                                    withExternalLayout: !0
                                })
                            })]
                        })]
                    })]
                })
            })
        })
    }),
    Ds = ['.framer-Yku2D [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }', "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-Yku2D .framer-1l2dp8g { display: block; }", ".framer-Yku2D .framer-11nlve3 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: flex-start; overflow: visible; padding: 60px 40px 30px 60px; position: relative; width: 1200px; }", ".framer-Yku2D .framer-8o4hsi { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: wrap; gap: 10px; height: min-content; justify-content: flex-start; max-width: 1000px; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }", ".framer-Yku2D .framer-1mtz24z { flex: none; height: 133px; overflow: visible; position: relative; width: 400px; }", ".framer-Yku2D .framer-10yhrjd { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 125px; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 168px; }", ".framer-Yku2D .framer-17cll5t { flex: none; height: 64px; overflow: visible; position: relative; width: 70px; }", ".framer-Yku2D .framer-tyzf5d, .framer-Yku2D .framer-1ibivbn, .framer-Yku2D .framer-lizbaw { flex: none; height: auto; overflow: visible; position: relative; white-space: pre; width: auto; }", ".framer-Yku2D .framer-12s188n { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; max-width: 1000px; overflow: visible; padding: 30px 0px 0px 0px; position: relative; width: 100%; }", ".framer-Yku2D .framer-6ttb1r { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 30px; height: 21px; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: min-content; }", ".framer-Yku2D .framer-mq4m29 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: min-content; }", ".framer-Yku2D .framer-10sksu2, .framer-Yku2D .framer-1ybd7uj { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 20px); overflow: visible; position: relative; text-decoration: none; width: 20px; }", ".framer-Yku2D .framer-1f2ufhc, .framer-Yku2D .framer-iqzc8u { flex: none; height: 20px; position: relative; text-decoration: none; width: 20px; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-Yku2D .framer-11nlve3, .framer-Yku2D .framer-8o4hsi, .framer-Yku2D .framer-10yhrjd, .framer-Yku2D .framer-6ttb1r, .framer-Yku2D .framer-mq4m29 { gap: 0px; } .framer-Yku2D .framer-11nlve3 > * { margin: 0px; margin-bottom: calc(60px / 2); margin-top: calc(60px / 2); } .framer-Yku2D .framer-11nlve3 > :first-child, .framer-Yku2D .framer-8o4hsi > :first-child, .framer-Yku2D .framer-10yhrjd > :first-child { margin-top: 0px; } .framer-Yku2D .framer-11nlve3 > :last-child, .framer-Yku2D .framer-8o4hsi > :last-child, .framer-Yku2D .framer-10yhrjd > :last-child { margin-bottom: 0px; } .framer-Yku2D .framer-8o4hsi > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-Yku2D .framer-10yhrjd > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-Yku2D .framer-6ttb1r > * { margin: 0px; margin-left: calc(30px / 2); margin-right: calc(30px / 2); } .framer-Yku2D .framer-6ttb1r > :first-child, .framer-Yku2D .framer-mq4m29 > :first-child { margin-left: 0px; } .framer-Yku2D .framer-6ttb1r > :last-child, .framer-Yku2D .framer-mq4m29 > :last-child { margin-right: 0px; } .framer-Yku2D .framer-mq4m29 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } }", ".framer-Yku2D.framer-v-l9aazd .framer-11nlve3 { width: 810px; }", ".framer-Yku2D.framer-v-eqqjvr .framer-11nlve3 { padding: 60px 40px 30px 40px; width: 390px; }", ".framer-Yku2D.framer-v-eqqjvr .framer-8o4hsi { gap: 40px; }", ".framer-Yku2D.framer-v-eqqjvr .framer-1mtz24z { height: 103px; width: 310px; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-Yku2D.framer-v-eqqjvr .framer-8o4hsi { gap: 0px; } .framer-Yku2D.framer-v-eqqjvr .framer-8o4hsi > * { margin: 0px; margin-bottom: calc(40px / 2); margin-top: calc(40px / 2); } .framer-Yku2D.framer-v-eqqjvr .framer-8o4hsi > :first-child { margin-top: 0px; } .framer-Yku2D.framer-v-eqqjvr .framer-8o4hsi > :last-child { margin-bottom: 0px; } }", ...ai],
    Hr = K(Ps, Ds, "framer-Yku2D"),
    ea = Hr;
Hr.displayName = "Footer Dark";
Hr.defaultProps = {
    height: 469,
    width: 1200
};
Y(Hr, {
    variant: {
        options: ["LI4GOMhIi", "wSL38TwKg", "ognoranU5"],
        optionTitles: ["Desktop", "Tablet", "Phone"],
        title: "Variant",
        type: o.Enum
    }
});
re(Hr, [{
    family: "Inter",
    moduleAsset: {
        localModuleIdentifier: "local-module:canvasComponent/PDqUSEYEu:default",
        url: "https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuI6fMZhrib2Bg-4.ttf"
    },
    style: "normal",
    url: "https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuI6fMZhrib2Bg-4.ttf",
    weight: "500"
}, ...ti]);
pe.loadWebFontsFromSelectors(["GF;Poppins-700"]);
var oi = [{
        family: "Poppins",
        moduleAsset: {
            localModuleIdentifier: "local-module:css/qPoMU7K5U:default",
            url: "https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLCz7V1tvFP-KUEg.ttf"
        },
        style: "normal",
        url: "https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLCz7V1tvFP-KUEg.ttf",
        weight: "700"
    }],
    si = ['.framer-j7r7x .framer-styles-preset-jpaqt6:not(.rich-text-wrapper), .framer-j7r7x .framer-styles-preset-jpaqt6.rich-text-wrapper h1, .framer-j7r7x .framer-styles-preset-jpaqt6.rich-text-wrapper [data-preset-tag="h1"] { --framer-font-family: "Poppins", "Poppins Placeholder", sans-serif; --framer-font-size: 30px; --framer-font-style: normal; --framer-font-weight: 700; --framer-letter-spacing: 0px; --framer-line-height: 1.2em; --framer-paragraph-spacing: 0px; --framer-text-alignment: center; --framer-text-color: #ffffff; --framer-text-decoration: none; --framer-text-transform: uppercase; }', '@media (max-width: 1199px) and (min-width: 810px) { .framer-j7r7x .framer-styles-preset-jpaqt6:not(.rich-text-wrapper), .framer-j7r7x .framer-styles-preset-jpaqt6.rich-text-wrapper h1, .framer-j7r7x .framer-styles-preset-jpaqt6.rich-text-wrapper [data-preset-tag="h1"] { --framer-font-family: "Poppins", "Poppins Placeholder", sans-serif; --framer-font-size: 20px; --framer-font-style: normal; --framer-font-weight: 700; --framer-letter-spacing: 0px; --framer-line-height: 1.2em; --framer-paragraph-spacing: 0px; --framer-text-alignment: center; --framer-text-color: #ffffff; --framer-text-decoration: none; --framer-text-transform: uppercase; } }', '@media (max-width: 809px) and (min-width: 0px) { .framer-j7r7x .framer-styles-preset-jpaqt6:not(.rich-text-wrapper), .framer-j7r7x .framer-styles-preset-jpaqt6.rich-text-wrapper h1, .framer-j7r7x .framer-styles-preset-jpaqt6.rich-text-wrapper [data-preset-tag="h1"] { --framer-font-family: "Poppins", "Poppins Placeholder", sans-serif; --framer-font-size: 17px; --framer-font-style: normal; --framer-font-weight: 700; --framer-letter-spacing: 0px; --framer-line-height: 1.2em; --framer-paragraph-spacing: 0px; --framer-text-alignment: center; --framer-text-color: #ffffff; --framer-text-decoration: none; --framer-text-transform: uppercase; } }'],
    mi = "framer-j7r7x";
var qs = {
        KWCYIZL4Y: {
            hover: !0
        }
    },
    As = ["KWCYIZL4Y"],
    Os = {
        KWCYIZL4Y: "framer-v-pl8k4l"
    };

function Ys(r, ...t) {
    let a = {};
    return t ? .forEach(i => i && Object.assign(a, r[i])), a
}
var Bs = {},
    Xs = {
        default: {
            damping: 60,
            delay: 0,
            duration: .3,
            ease: [.44, 0, .56, 1],
            mass: 1,
            stiffness: 500,
            type: "spring"
        }
    },
    Gs = $(function({
        id: r,
        style: t,
        className: a,
        width: i,
        height: m,
        layoutId: l,
        variant: p = "KWCYIZL4Y",
        title: y = "Click",
        tap: x,
        ...g
    }, u) {
        let S = Bs[p] || p,
            {
                baseVariant: w,
                classNames: h,
                gestureVariant: j,
                setGestureState: f,
                setVariant: L,
                transition: c,
                variants: C
            } = se({
                cycleOrder: As,
                defaultVariant: "KWCYIZL4Y",
                enabledGestures: qs,
                transitions: Xs,
                variant: S,
                variantClassNames: Os
            }),
            N = C.join("-") + g.layoutDependency,
            {
                activeVariantCallback: V,
                delay: q
            } = ze(w),
            b = V(async (...A) => {
                if (x && await x(...A) === !1) return !1
            }),
            z = ee();
        return e(G, {
            id: l ? ? z,
            children: e(n.div, {
                initial: S,
                animate: C,
                onHoverStart: () => f({
                    isHovered: !0
                }),
                onHoverEnd: () => f({
                    isHovered: !1
                }),
                onTapStart: () => f({
                    isPressed: !0
                }),
                onTap: () => f({
                    isPressed: !1
                }),
                onTapCancel: () => f({
                    isPressed: !1
                }),
                className: E("framer-QWVxI", mi, h),
                style: {
                    display: "contents"
                },
                children: e(n.button, { ...g,
                    className: E("framer-pl8k4l", a),
                    "data-border": !0,
                    "data-framer-name": "Variant 1",
                    "data-highlight": !0,
                    "data-reset": "button",
                    layoutDependency: N,
                    layoutId: "KWCYIZL4Y",
                    onTap: b,
                    ref: u,
                    style: {
                        "--border-bottom-width": "1px",
                        "--border-color": "rgba(255, 255, 255, 0.43)",
                        "--border-left-width": "0px",
                        "--border-right-width": "0px",
                        "--border-style": "solid",
                        "--border-top-width": "0px",
                        backgroundColor: "rgb(255, 0, 89)",
                        borderBottomLeftRadius: 10,
                        borderBottomRightRadius: 10,
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                        boxShadow: "0px 1px 10px 0px #ff0059",
                        ...t
                    },
                    transition: c,
                    variants: {
                        "KWCYIZL4Y-hover": {
                            backgroundColor: "rgb(133, 0, 46)"
                        }
                    },
                    ...Ys({
                        "KWCYIZL4Y-hover": {
                            "data-framer-name": void 0
                        }
                    }, w, j),
                    children: e(D, {
                        __fromCanvasComponent: !0,
                        children: e(F, {
                            children: e(n.h1, {
                                className: "framer-styles-preset-jpaqt6",
                                "data-styles-preset": "qPoMU7K5U",
                                children: "Click"
                            })
                        }),
                        className: "framer-19v0bzz",
                        layoutDependency: N,
                        layoutId: "byYS40UnM",
                        style: {
                            "--framer-paragraph-spacing": "0px"
                        },
                        text: y,
                        transition: c,
                        verticalAlignment: "top",
                        withExternalLayout: !0
                    })
                })
            })
        })
    }),
    Zs = ['.framer-QWVxI [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }', "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-QWVxI .framer-4c7gxx { display: block; }", ".framer-QWVxI .framer-pl8k4l { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; padding: 15px 20px 15px 20px; position: relative; width: min-content; }", ".framer-QWVxI .framer-19v0bzz { flex: none; height: auto; overflow: visible; position: relative; white-space: pre; width: auto; }", ".framer-QWVxI .framer-v-pl8k4l .framer-pl8k4l { cursor: pointer; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-QWVxI .framer-pl8k4l { gap: 0px; } .framer-QWVxI .framer-pl8k4l > * { margin: 0px; margin-left: calc(8px / 2); margin-right: calc(8px / 2); } .framer-QWVxI .framer-pl8k4l > :first-child { margin-left: 0px; } .framer-QWVxI .framer-pl8k4l > :last-child { margin-right: 0px; } }", ".framer-QWVxI.framer-v-pl8k4l.hover .framer-pl8k4l { padding: 12px 15px 12px 15px; }", ...si],
    Er = K(Gs, Zs, "framer-QWVxI"),
    nt = Er;
Er.displayName = "Button";
Er.defaultProps = {
    height: 66,
    width: 130
};
Y(Er, {
    tQ7dkQUxz: {
        defaultValue: "Click",
        displayTextArea: !1,
        title: "Title",
        type: o.String
    },
    g9GWkQKpN: {
        title: "Tap",
        type: o.EventHandler
    }
});
re(Er, [...oi]);
pe.loadWebFontsFromSelectors(["GF;Poppins-600"]);
var li = [{
        family: "Poppins",
        moduleAsset: {
            localModuleIdentifier: "local-module:css/fVxnimdqP:default",
            url: "https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLEj6V1tvFP-KUEg.ttf"
        },
        style: "normal",
        url: "https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLEj6V1tvFP-KUEg.ttf",
        weight: "600"
    }],
    fi = ['.framer-80x32 .framer-styles-preset-1wml6uu:not(.rich-text-wrapper), .framer-80x32 .framer-styles-preset-1wml6uu.rich-text-wrapper h2 { --framer-font-family: "Poppins", sans-serif; --framer-font-size: 60px; --framer-font-style: normal; --framer-font-weight: 600; --framer-letter-spacing: -0.5px; --framer-line-height: 1.2em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: #ffffff; --framer-text-decoration: none; --framer-text-transform: none; }', '@media (max-width: 1499px) and (min-width: 1200px) { .framer-80x32 .framer-styles-preset-1wml6uu:not(.rich-text-wrapper), .framer-80x32 .framer-styles-preset-1wml6uu.rich-text-wrapper h2 { --framer-font-family: "Poppins", sans-serif; --framer-font-size: 40px; --framer-font-style: normal; --framer-font-weight: 600; --framer-letter-spacing: -0.5px; --framer-line-height: 1.2em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: #ffffff; --framer-text-decoration: none; --framer-text-transform: none; } }', '@media (max-width: 1199px) and (min-width: 0px) { .framer-80x32 .framer-styles-preset-1wml6uu:not(.rich-text-wrapper), .framer-80x32 .framer-styles-preset-1wml6uu.rich-text-wrapper h2 { --framer-font-family: "Poppins", sans-serif; --framer-font-size: 35px; --framer-font-style: normal; --framer-font-weight: 600; --framer-letter-spacing: -0.5px; --framer-line-height: 1.2em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: #ffffff; --framer-text-decoration: none; --framer-text-transform: none; } }'],
    pi = "framer-80x32";
pe.loadWebFontsFromSelectors(["GF;Inter Tight-800"]);
var ci = [{
        family: "Inter Tight",
        moduleAsset: {
            localModuleIdentifier: "local-module:css/HnnPKMCXX:default",
            url: "https://fonts.gstatic.com/s/intertight/v2/NGSnv5HMAFg6IuGlBNMjxJEL2VmU3NS7Z2mjjwiqXCRToK8EPg.ttf"
        },
        style: "normal",
        url: "https://fonts.gstatic.com/s/intertight/v2/NGSnv5HMAFg6IuGlBNMjxJEL2VmU3NS7Z2mjjwiqXCRToK8EPg.ttf",
        weight: "800"
    }],
    di = ['.framer-RBgl1 .framer-styles-preset-ze47py:not(.rich-text-wrapper), .framer-RBgl1 .framer-styles-preset-ze47py.rich-text-wrapper p, .framer-RBgl1 .framer-styles-preset-ze47py.rich-text-wrapper [data-preset-tag="p"] { --framer-font-family: "Inter Tight", sans-serif; --framer-font-size: 30px; --framer-font-style: normal; --framer-font-weight: 800; --framer-letter-spacing: 0px; --framer-line-height: 1.2em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: #ffffff; --framer-text-decoration: none; --framer-text-transform: none; }', '@media (max-width: 1199px) and (min-width: 810px) { .framer-RBgl1 .framer-styles-preset-ze47py:not(.rich-text-wrapper), .framer-RBgl1 .framer-styles-preset-ze47py.rich-text-wrapper p, .framer-RBgl1 .framer-styles-preset-ze47py.rich-text-wrapper [data-preset-tag="p"] { --framer-font-family: "Inter Tight", sans-serif; --framer-font-size: 24px; --framer-font-style: normal; --framer-font-weight: 800; --framer-letter-spacing: 0px; --framer-line-height: 1.2em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: #ffffff; --framer-text-decoration: none; --framer-text-transform: none; } }', '@media (max-width: 809px) and (min-width: 0px) { .framer-RBgl1 .framer-styles-preset-ze47py:not(.rich-text-wrapper), .framer-RBgl1 .framer-styles-preset-ze47py.rich-text-wrapper p, .framer-RBgl1 .framer-styles-preset-ze47py.rich-text-wrapper [data-preset-tag="p"] { --framer-font-family: "Inter Tight", sans-serif; --framer-font-size: 19px; --framer-font-style: normal; --framer-font-weight: 800; --framer-letter-spacing: 0px; --framer-line-height: 1.2em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: #ffffff; --framer-text-decoration: none; --framer-text-transform: none; } }'],
    hi = "framer-RBgl1";
pe.loadWebFontsFromSelectors(["GF;Poppins-600"]);
var ui = [{
        family: "Poppins",
        moduleAsset: {
            localModuleIdentifier: "local-module:css/kRWXN_imA:default",
            url: "https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLEj6V1tvFP-KUEg.ttf"
        },
        style: "normal",
        url: "https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLEj6V1tvFP-KUEg.ttf",
        weight: "600"
    }],
    gi = ['.framer-Hx86h .framer-styles-preset-sv0fau:not(.rich-text-wrapper), .framer-Hx86h .framer-styles-preset-sv0fau.rich-text-wrapper h1 { --framer-font-family: "Poppins", sans-serif; --framer-font-size: 55px; --framer-font-style: normal; --framer-font-weight: 600; --framer-letter-spacing: 0em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: #ffffff; --framer-text-decoration: none; --framer-text-transform: none; }', '@media (max-width: 1399px) and (min-width: 810px) { .framer-Hx86h .framer-styles-preset-sv0fau:not(.rich-text-wrapper), .framer-Hx86h .framer-styles-preset-sv0fau.rich-text-wrapper h1 { --framer-font-family: "Poppins", sans-serif; --framer-font-size: 40px; --framer-font-style: normal; --framer-font-weight: 600; --framer-letter-spacing: 0em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: #ffffff; --framer-text-decoration: none; --framer-text-transform: none; } }', '@media (max-width: 809px) and (min-width: 0px) { .framer-Hx86h .framer-styles-preset-sv0fau:not(.rich-text-wrapper), .framer-Hx86h .framer-styles-preset-sv0fau.rich-text-wrapper h1 { --framer-font-family: "Poppins", sans-serif; --framer-font-size: 30px; --framer-font-style: normal; --framer-font-weight: 600; --framer-letter-spacing: 0em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: #ffffff; --framer-text-decoration: none; --framer-text-transform: none; } }'],
    xi = "framer-Hx86h";
pe.loadWebFontsFromSelectors(["GF;Poppins-700"]);
var wi = [{
        family: "Poppins",
        moduleAsset: {
            localModuleIdentifier: "local-module:css/qwVKP2Dy8:default",
            url: "https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLCz7V1tvFP-KUEg.ttf"
        },
        style: "normal",
        url: "https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLCz7V1tvFP-KUEg.ttf",
        weight: "700"
    }],
    yi = ['.framer-vddGJ .framer-styles-preset-62l6bb:not(.rich-text-wrapper), .framer-vddGJ .framer-styles-preset-62l6bb.rich-text-wrapper h2 { --framer-font-family: "Poppins", "Poppins Placeholder", sans-serif; --framer-font-size: 60px; --framer-font-style: normal; --framer-font-weight: 700; --framer-letter-spacing: -0.5px; --framer-line-height: 1.2em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: #ffffff; --framer-text-decoration: none; --framer-text-transform: none; }', '@media (max-width: 1199px) and (min-width: 810px) { .framer-vddGJ .framer-styles-preset-62l6bb:not(.rich-text-wrapper), .framer-vddGJ .framer-styles-preset-62l6bb.rich-text-wrapper h2 { --framer-font-family: "Poppins", "Poppins Placeholder", sans-serif; --framer-font-size: 39px; --framer-font-style: normal; --framer-font-weight: 700; --framer-letter-spacing: -0.5px; --framer-line-height: 1.2em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: #ffffff; --framer-text-decoration: none; --framer-text-transform: none; } }', '@media (max-width: 809px) and (min-width: 0px) { .framer-vddGJ .framer-styles-preset-62l6bb:not(.rich-text-wrapper), .framer-vddGJ .framer-styles-preset-62l6bb.rich-text-wrapper h2 { --framer-font-family: "Poppins", "Poppins Placeholder", sans-serif; --framer-font-size: 32px; --framer-font-style: normal; --framer-font-weight: 700; --framer-letter-spacing: -0.5px; --framer-line-height: 1.2em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: #ffffff; --framer-text-decoration: none; --framer-text-transform: none; } }'],
    vi = "framer-vddGJ";
pe.loadWebFontsFromSelectors(["GF;Inter Tight-300"]);
var bi = [{
        family: "Inter Tight",
        moduleAsset: {
            localModuleIdentifier: "local-module:css/xZndidUCt:default",
            url: "https://fonts.gstatic.com/s/intertight/v3/NGSnv5HMAFg6IuGlBNMjxJEL2VmU3NS7Z2mjUQ-qXCRToK8EPg.ttf"
        },
        style: "normal",
        url: "https://fonts.gstatic.com/s/intertight/v3/NGSnv5HMAFg6IuGlBNMjxJEL2VmU3NS7Z2mjUQ-qXCRToK8EPg.ttf",
        weight: "300"
    }],
    _i = ['.framer-8HABM .framer-styles-preset-21ogod:not(.rich-text-wrapper), .framer-8HABM .framer-styles-preset-21ogod.rich-text-wrapper p { --framer-font-family: "Inter Tight", sans-serif; --framer-font-size: 26px; --framer-font-style: normal; --framer-font-weight: 300; --framer-letter-spacing: 0em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: #cd9eff; --framer-text-decoration: none; --framer-text-transform: none; }', '@media (max-width: 1499px) and (min-width: 500px) { .framer-8HABM .framer-styles-preset-21ogod:not(.rich-text-wrapper), .framer-8HABM .framer-styles-preset-21ogod.rich-text-wrapper p { --framer-font-family: "Inter Tight", sans-serif; --framer-font-size: 20px; --framer-font-style: normal; --framer-font-weight: 300; --framer-letter-spacing: 0em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: #cd9eff; --framer-text-decoration: none; --framer-text-transform: none; } }', '@media (max-width: 499px) and (min-width: 0px) { .framer-8HABM .framer-styles-preset-21ogod:not(.rich-text-wrapper), .framer-8HABM .framer-styles-preset-21ogod.rich-text-wrapper p { --framer-font-family: "Inter Tight", sans-serif; --framer-font-size: 18px; --framer-font-style: normal; --framer-font-weight: 300; --framer-letter-spacing: 0em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: #cd9eff; --framer-text-decoration: none; --framer-text-transform: none; } }'],
    Ci = "framer-8HABM";
var rm = he($t),
    tm = Qr($t),
    am = he(Kt),
    Si = Zr(ge),
    Ye = Zr(n.div),
    I = Zr(M),
    im = he(nt),
    nm = he(He),
    om = he(ur),
    sm = he(ie),
    mm = he(Dt),
    lm = he(ea),
    fm = he(Qt),
    pm = Qr(Qt),
    cm = he(Jt),
    dm = Qr(Jt);
var Wi = {
        iRL2gYRtC: "(min-width: 810px) and (max-width: 1023px)",
        sH43zL1oy: "(max-width: 809px)",
        tXpGpVfEc: "(min-width: 1400px)",
        WQLkyLRf1: "(min-width: 1024px) and (max-width: 1399px)"
    },
    aa = () => typeof document < "u",
    Ti = {
        iRL2gYRtC: "framer-v-93rnvh",
        sH43zL1oy: "framer-v-g5j6vk",
        tXpGpVfEc: "framer-v-58buo2",
        WQLkyLRf1: "framer-v-72rtr7"
    };
aa() && ka("WQLkyLRf1", Wi, Ti);
var hm = {
        "Big Desktop": "tXpGpVfEc",
        Desktop: "WQLkyLRf1",
        Phone: "sH43zL1oy",
        Tablet: "iRL2gYRtC"
    },
    um = {
        default: {
            duration: 0
        }
    };

function Li({
    children: r
}) {
    let [t, a] = Ra();
    return r({
        hide: () => a(!1),
        show: () => a(!0),
        toggle: () => a(!t),
        visible: t
    })
}
var Fi = {
        delay: 0,
        duration: 15,
        ease: [0, 0, 1, 1],
        type: "tween"
    },
    gm = {
        opacity: 1,
        rotate: 360,
        scale: 1,
        x: 0,
        y: 0
    },
    ra = (r, t) => `translate(-50%, -50%) ${t}`,
    ot = (r, t) => `translateX(-50%) ${t}`,
    Hi = {
        damping: 28,
        delay: .5,
        mass: .1,
        stiffness: 116,
        type: "spring"
    },
    ki = {
        opacity: 0,
        rotate: 0,
        scale: 1,
        transition: Hi,
        x: 0,
        y: 0
    },
    U = (r, t) => `perspective(1200px) ${t}`,
    Be = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        transition: Hi,
        x: 0,
        y: 0
    },
    Xe = {
        opacity: .001,
        rotate: 0,
        scale: 1,
        x: 0,
        y: 0
    },
    Ri = {
        opacity: 0,
        rotate: 0,
        scale: 1,
        x: 0,
        y: 20
    },
    lt = {
        delay: 0,
        duration: .3,
        ease: [.44, 0, .56, 1],
        type: "tween"
    },
    Mi = {
        opacity: 0,
        rotate: 0,
        scale: 1,
        transition: lt,
        x: 0,
        y: 20
    },
    Ei = {
        damping: 30,
        delay: 0,
        mass: 1,
        stiffness: 400,
        type: "spring"
    },
    zi = {
        opacity: 0,
        rotate: 0,
        scale: 1,
        transition: Ei,
        x: 0,
        y: 0
    },
    Ni = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        transition: Ei,
        x: 0,
        y: 0
    },
    ji = {
        opacity: 0,
        rotate: 0,
        scale: 1,
        x: 0,
        y: 0
    },
    or = (r, t) => `perspective(1200px) translateX(-50%) ${t}`,
    xm = {
        delay: 0,
        duration: 3.4,
        ease: [.44, 0, .56, 1],
        type: "tween"
    },
    wm = {
        opacity: 1,
        rotate: 0,
        rotateX: -10,
        rotateY: 6,
        scale: 1,
        x: 0,
        y: 0
    },
    ta = {
        delay: 0,
        duration: 3.8,
        ease: [.44, 0, .56, 1],
        type: "tween"
    },
    ym = {
        opacity: 1,
        rotate: 0,
        rotateX: 10,
        rotateY: -8,
        scale: 1,
        x: 0,
        y: 0
    },
    vm = {
        delay: 0,
        duration: 3.2,
        ease: [.44, 0, .56, 1],
        type: "tween"
    },
    bm = {
        opacity: 1,
        rotate: 0,
        rotateX: -8,
        rotateY: 6,
        scale: 1,
        x: 0,
        y: 0
    },
    me = {
        opacity: 0,
        rotate: 0,
        scale: .5,
        x: 0,
        y: 0
    },
    _m = {
        delay: .2,
        duration: .3,
        ease: [.44, 0, .56, 1],
        type: "tween"
    },
    Cm = {
        opacity: 1,
        rotate: 0,
        scale: .9,
        x: 10,
        y: 16
    },
    st = (r, t) => `perspective(1200px) translate(-50%, -50%) ${t}`,
    Sm = {
        delay: .3,
        duration: .3,
        ease: [.44, 0, .56, 1],
        type: "tween"
    },
    Lm = {
        opacity: 1,
        rotate: 0,
        scale: .9,
        x: 0,
        y: -14
    },
    Fm = {
        delay: .1,
        duration: .3,
        ease: [.44, 0, .56, 1],
        type: "tween"
    },
    km = {
        delay: 0,
        duration: 4.1,
        ease: [.44, 0, .56, 1],
        type: "tween"
    },
    Rm = {
        opacity: 1,
        rotate: 0,
        scale: .9,
        x: -20,
        y: 16
    },
    Vi = {
        delay: 0,
        duration: 3,
        ease: [.44, 0, .56, 1],
        type: "tween"
    },
    Mm = {
        opacity: 1,
        rotate: 0,
        scale: 1.05,
        x: 0,
        y: -23
    },
    zm = {
        delay: 0,
        duration: 7,
        ease: [.44, 0, .56, 1],
        type: "tween"
    },
    Nm = {
        opacity: 1,
        rotate: 0,
        rotateX: 10,
        rotateY: 20,
        scale: 1,
        x: 0,
        y: 0
    },
    Pi = {
        delay: .25,
        duration: .4,
        ease: [.44, 0, .4, 1.46],
        type: "tween"
    },
    jm = {
        opacity: 0,
        rotate: 0,
        scale: .5,
        transition: Pi,
        x: 0,
        y: 0
    },
    Di = {
        delay: .45,
        duration: .4,
        ease: [.44, 0, .4, 1.46],
        type: "tween"
    },
    Vm = {
        opacity: 0,
        rotate: 0,
        scale: .5,
        transition: Di,
        x: 0,
        y: 0
    },
    Ii = {
        delay: 0,
        duration: .4,
        ease: [.44, 0, .4, 1.46],
        type: "tween"
    },
    Um = {
        opacity: 0,
        rotate: 0,
        scale: .5,
        transition: Ii,
        x: 0,
        y: 0
    },
    qi = {
        delay: .4,
        duration: .4,
        ease: [.44, 0, .4, 1.46],
        type: "tween"
    },
    Wm = {
        opacity: 0,
        rotate: 0,
        scale: .5,
        transition: qi,
        x: 0,
        y: 0
    },
    Ai = {
        delay: .35,
        duration: .4,
        ease: [.44, 0, .4, 1.46],
        type: "tween"
    },
    Tm = {
        opacity: 0,
        rotate: 0,
        scale: .5,
        transition: Ai,
        x: 0,
        y: 0
    },
    Oi = {
        delay: .3,
        duration: .4,
        ease: [.44, 0, .4, 1.46],
        type: "tween"
    },
    Hm = {
        opacity: 0,
        rotate: 0,
        scale: .5,
        transition: Oi,
        x: 0,
        y: 0
    },
    Yi = {
        delay: .65,
        duration: .4,
        ease: [.44, 0, .4, 1.46],
        type: "tween"
    },
    Em = {
        opacity: 0,
        rotate: 0,
        scale: .5,
        transition: Yi,
        x: 0,
        y: 0
    },
    Bi = {
        delay: .05,
        duration: .4,
        ease: [.44, 0, .4, 1.46],
        type: "tween"
    },
    Pm = {
        opacity: 0,
        rotate: 0,
        scale: .5,
        transition: Bi,
        x: 0,
        y: 0
    },
    Xi = {
        delay: .1,
        duration: .4,
        ease: [.44, 0, .4, 1.46],
        type: "tween"
    },
    Dm = {
        opacity: 0,
        rotate: 0,
        scale: .5,
        transition: Xi,
        x: 0,
        y: 0
    },
    Gi = {
        delay: .15,
        duration: .4,
        ease: [.44, 0, .4, 1.46],
        type: "tween"
    },
    Im = {
        opacity: 0,
        rotate: 0,
        scale: .5,
        transition: Gi,
        x: 0,
        y: 0
    },
    qm = (r, t) => `perspective(1200px) ${t} rotate(-1deg)`,
    Zi = {
        delay: .2,
        duration: .4,
        ease: [.44, 0, .4, 1.46],
        type: "tween"
    },
    Am = {
        opacity: 0,
        rotate: 0,
        scale: .5,
        transition: Zi,
        x: 0,
        y: 0
    },
    Qi = {
        delay: .5,
        duration: .4,
        ease: [.44, 0, .4, 1.46],
        type: "tween"
    },
    Om = {
        opacity: 0,
        rotate: 0,
        scale: .5,
        transition: Qi,
        x: 0,
        y: 0
    },
    $i = {
        delay: .55,
        duration: .4,
        ease: [.44, 0, .4, 1.46],
        type: "tween"
    },
    Ym = {
        opacity: 0,
        rotate: 0,
        scale: .5,
        transition: $i,
        x: 0,
        y: 0
    },
    Ji = {
        delay: .6,
        duration: .4,
        ease: [.44, 0, .4, 1.46],
        type: "tween"
    },
    Bm = {
        opacity: 0,
        rotate: 0,
        scale: .5,
        transition: Ji,
        x: 0,
        y: 0
    },
    Xm = {
        opacity: .7,
        rotate: 360,
        scale: 1.1,
        x: 0,
        y: 0
    },
    Gm = {
        delay: 0,
        duration: 5,
        ease: [0, 0, 1, 1],
        type: "tween"
    },
    Zm = {
        opacity: 1,
        rotate: 0,
        scale: 1,
        x: 0,
        y: -870
    },
    Qm = {
        opacity: 1,
        rotate: 0,
        scale: 1,
        x: 0,
        y: -20
    },
    Ui = {
        delay: 0,
        duration: 1.3,
        ease: [.77, -.02, .61, .99],
        type: "tween"
    },
    $m = {
        opacity: 1,
        rotate: 0,
        scale: 1,
        x: 0,
        y: 40
    },
    Jm = {
        opacity: 1,
        rotate: 0,
        scale: 1.2,
        x: 0,
        y: 0
    },
    mt = zt(),
    Km = $(function({
        id: r,
        style: t,
        className: a,
        width: i,
        height: m,
        layoutId: l,
        variant: p = "WQLkyLRf1",
        ...y
    }, x) {
        let u = hm[p] || p;
        Cr(() => {
            let Q = zt();
            if (document.title = Q.title || "", Q.viewport) {
                var je;
                (je = document.querySelector('meta[name="viewport"]')) === null || je === void 0 || je.setAttribute("content", Q.viewport)
            }
            Q.bodyClassName && (Array.from(document.body.classList).filter(De => De.startsWith("framer-body-")).map(De => document.body.classList.remove(De)), document.body.classList.add(Q.bodyClassName))
        }, []);
        let [s, S] = Fa(u, Wi, !1), w = void 0, h = um.default, {
            activeVariantCallback: j,
            delay: f
        } = ze(void 0), L = Q => j(async (...je) => {
            Q.toggle()
        }), c = H(null), C = H(null), N = ue("EErfVFecs"), V = ue("uSDNa9hCP"), q = ue("uqxxUL_Gg"), b = H(null), z = () => ["iRL2gYRtC", "sH43zL1oy"].includes(s) ? !aa() : !0, A = () => ["iRL2gYRtC", "sH43zL1oy"].includes(s) ? !0 : !aa(), P = ue("GJ3JQV6PZ"), O = H(null), ne = ue("FABKx2mKK"), _e = H(null), we = ue("IeC4C8QlR"), Ee = H(null), Ge = ue("WfMsUp0pg"), Ce = H(null), be = ue("Dpmk1ZKmo"), T = H(null), sr = ue("Pyl8njNk5"), Z = H(null), Ze = ue("RnCCIQxvr"), Se = H(null), Ne = ue("GWcXixjRQ"), le = H(null), Me = ue("LSrdL23F6"), Qe = H(null), $e = ue("uiNTvyTv5"), yr = H(null), Pe = ee();
        return e(La.Provider, {
            value: {
                primaryVariantId: "WQLkyLRf1",
                variantClassNames: Ti
            },
            children: e(G, {
                id: l ? ? Pe,
                children: d(n.div, {
                    className: E("framer-3SidF", xi, Ci, hi, pi, vi),
                    style: {
                        display: "contents"
                    },
                    children: [d(n.div, { ...y,
                        className: E("framer-72rtr7", a),
                        ref: x,
                        style: { ...t
                        },
                        children: [e(ge, {
                            className: "framer-1wdt4rs-container",
                            layoutScroll: !0,
                            children: e(R, {
                                breakpoint: s,
                                overrides: {
                                    iRL2gYRtC: {
                                        __framer__variantAppearEffectEnabled: void 0
                                    },
                                    sH43zL1oy: {
                                        __framer__variantAppearEffectEnabled: void 0,
                                        variant: "EeMktW1Lq"
                                    }
                                },
                                children: e(tm, {
                                    __framer__animateOnce: !1,
                                    __framer__targets: [{
                                        ref: c,
                                        target: "ejPoH7qUS"
                                    }, {
                                        ref: C,
                                        target: "P098vHDMn"
                                    }],
                                    __framer__threshold: 0,
                                    __framer__variantAppearEffectEnabled: !0,
                                    height: "100%",
                                    id: "YeBEstzgK",
                                    layoutId: "YeBEstzgK",
                                    style: {
                                        height: "100%",
                                        width: "100%"
                                    },
                                    variant: "ejPoH7qUS",
                                    width: "100%"
                                })
                            })
                        }), d(n.div, {
                            className: "framer-oema18",
                            "data-framer-name": "Header",
                            id: N,
                            name: "Header",
                            ref: c,
                            children: [d(n.div, {
                                className: "framer-pu8lnj",
                                "data-framer-name": "Framer Badge",
                                name: "Framer Badge",
                                children: [e(R, {
                                    breakpoint: s,
                                    overrides: {
                                        sH43zL1oy: {
                                            transformTemplate: ra
                                        }
                                    },
                                    children: e(Si, {
                                        __framer__loop: gm,
                                        __framer__loopEffectEnabled: !0,
                                        __framer__loopRepeatDelay: 0,
                                        __framer__loopRepeatType: "loop",
                                        __framer__loopTransition: Fi,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        className: "framer-hd4p95-container",
                                        children: e(R, {
                                            breakpoint: s,
                                            overrides: {
                                                iRL2gYRtC: {
                                                    variant: "PPsrtOdCR"
                                                },
                                                sH43zL1oy: {
                                                    variant: "MQBFpgPnD"
                                                }
                                            },
                                            children: e(Kt, {
                                                height: "100%",
                                                id: "Ree_P3wYI",
                                                layoutId: "Ree_P3wYI",
                                                style: {
                                                    height: "100%",
                                                    width: "100%"
                                                },
                                                variant: "DeJj7tlJW",
                                                width: "100%"
                                            })
                                        })
                                    })
                                }), e(xe, {
                                    href: "https://www.framer.com/site-of-the-month/benjamin-trigalou",
                                    children: e(n.a, {
                                        className: "framer-1bz53hd framer-lux5qc",
                                        children: e(er, {
                                            className: "framer-1um3dja",
                                            "data-framer-name": "framer_logo",
                                            fill: "black",
                                            intrinsicHeight: 30,
                                            intrinsicWidth: 20,
                                            name: "framer_logo",
                                            svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.91 30.46"><path d="M9.91 30.46 0 20.54V9.91h9.91l10 10.55h-10v10zm10-20.55h-10L0 0h19.91v9.91z"/></svg>',
                                            withExternalLayout: !0
                                        })
                                    })
                                })]
                            }), e(n.div, {
                                className: "framer-v638ot",
                                children: e(M, {
                                    background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 1028,
                                        intrinsicWidth: 2042,
                                        pixelHeight: 1028,
                                        pixelWidth: 2042,
                                        sizes: "min(max(max(100vw, 0px), 1000px), 2042px)",
                                        src: new URL("https://framerusercontent.com/images/N0MzP2d5FjIcxqPNyFkHRUlGhiQ.jpg").href,
                                        srcSet: `${new URL("https://framerusercontent.com/images/N0MzP2d5FjIcxqPNyFkHRUlGhiQ.jpg?scale-down-to=512").href} 512w, ${new URL("https://framerusercontent.com/images/N0MzP2d5FjIcxqPNyFkHRUlGhiQ.jpg?scale-down-to=1024").href} 1024w, ${new URL("https://framerusercontent.com/images/N0MzP2d5FjIcxqPNyFkHRUlGhiQ.jpg").href} 2042w`
                                    },
                                    className: "framer-1epbknj",
                                    "data-framer-name": "header_background",
                                    name: "header_background"
                                })
                            }), d(n.div, {
                                className: "framer-7lev5",
                                transformTemplate: ot,
                                children: [e(R, {
                                    breakpoint: s,
                                    overrides: {
                                        iRL2gYRtC: {
                                            "data-framer-appear-id": "dqkkud",
                                            animate: fe("animate", "dqkkud", Be, "93rnvh"),
                                            initial: fe("initial", "dqkkud", Xe, "93rnvh"),
                                            transformTemplate: We("dqkkud", U)
                                        },
                                        sH43zL1oy: {
                                            "data-framer-appear-id": "1e3ekaz",
                                            animate: fe("animate", "1e3ekaz", Be, "g5j6vk"),
                                            initial: fe("initial", "1e3ekaz", Xe, "g5j6vk"),
                                            transformTemplate: We("1e3ekaz", U)
                                        },
                                        tXpGpVfEc: {
                                            "data-framer-appear-id": "5wsqy6",
                                            animate: fe("animate", "5wsqy6", Be, "58buo2"),
                                            initial: fe("initial", "5wsqy6", Xe, "58buo2"),
                                            transformTemplate: We("5wsqy6", U)
                                        }
                                    },
                                    children: e(Ye, {
                                        __framer__spring: {
                                            damping: 60,
                                            delay: 0,
                                            duration: .3,
                                            ease: [.44, 0, .56, 1],
                                            mass: 1,
                                            stiffness: 500,
                                            type: "spring"
                                        },
                                        __framer__styleTransformEffectEnabled: !0,
                                        __framer__transformTargets: [{
                                            target: {
                                                opacity: 1,
                                                rotate: 0,
                                                rotateX: 0,
                                                rotateY: 0,
                                                scale: 1,
                                                x: 0,
                                                y: 0
                                            }
                                        }, {
                                            target: {
                                                opacity: 0,
                                                rotate: 0,
                                                rotateX: 0,
                                                rotateY: 0,
                                                scale: 1.3,
                                                x: 0,
                                                y: 0
                                            }
                                        }],
                                        __framer__transformTrigger: "onScroll",
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        animate: fe("animate", "k8qu1q", Be, "72rtr7"),
                                        className: "framer-k8qu1q",
                                        "data-framer-appear-id": "k8qu1q",
                                        "data-framer-name": "EmptyFrame",
                                        exit: ki,
                                        initial: fe("initial", "k8qu1q", Xe, "72rtr7"),
                                        name: "EmptyFrame",
                                        transformTemplate: We("k8qu1q", U)
                                    })
                                }), e(R, {
                                    breakpoint: s,
                                    overrides: {
                                        iRL2gYRtC: {
                                            "data-framer-appear-id": "1j6glcm",
                                            animate: fe("animate", "1j6glcm", Be, "93rnvh"),
                                            initial: fe("initial", "1j6glcm", Xe, "93rnvh"),
                                            transformTemplate: We("1j6glcm", U)
                                        },
                                        sH43zL1oy: {
                                            "data-framer-appear-id": "494kvw",
                                            animate: fe("animate", "494kvw", Be, "g5j6vk"),
                                            initial: fe("initial", "494kvw", Xe, "g5j6vk"),
                                            transformTemplate: We("494kvw", U)
                                        },
                                        tXpGpVfEc: {
                                            "data-framer-appear-id": "81slp0",
                                            animate: fe("animate", "81slp0", Be, "58buo2"),
                                            initial: fe("initial", "81slp0", Xe, "58buo2"),
                                            transformTemplate: We("81slp0", U)
                                        }
                                    },
                                    children: e(I, {
                                        __framer__spring: {
                                            damping: 60,
                                            delay: 0,
                                            duration: .3,
                                            ease: [.44, 0, .56, 1],
                                            mass: 1,
                                            stiffness: 500,
                                            type: "spring"
                                        },
                                        __framer__styleTransformEffectEnabled: !0,
                                        __framer__transformTargets: [{
                                            target: {
                                                opacity: 1,
                                                rotate: 0,
                                                rotateX: 0,
                                                rotateY: 0,
                                                scale: 1,
                                                x: 0,
                                                y: 0
                                            }
                                        }, {
                                            target: {
                                                opacity: 0,
                                                rotate: 0,
                                                rotateX: 0,
                                                rotateY: 0,
                                                scale: 1.3,
                                                x: 0,
                                                y: 0
                                            }
                                        }],
                                        __framer__transformTrigger: "onScroll",
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        animate: fe("animate", "vl0y73", Be, "72rtr7"),
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 469.5,
                                            intrinsicWidth: 1260,
                                            pixelHeight: 939,
                                            pixelWidth: 2520,
                                            sizes: "min(max(39.1773vw, 300px), 800px)",
                                            src: new URL("https://framerusercontent.com/images/G3rUX3fcjqNlSKmp2VXJfDiIG0.png?scale-down-to=2048").href,
                                            srcSet: `${new URL("https://framerusercontent.com/images/G3rUX3fcjqNlSKmp2VXJfDiIG0.png?scale-down-to=512").href} 512w, ${new URL("https://framerusercontent.com/images/G3rUX3fcjqNlSKmp2VXJfDiIG0.png?scale-down-to=1024").href} 1024w, ${new URL("https://framerusercontent.com/images/G3rUX3fcjqNlSKmp2VXJfDiIG0.png?scale-down-to=2048").href} 2048w, ${new URL("https://framerusercontent.com/images/G3rUX3fcjqNlSKmp2VXJfDiIG0.png").href} 2520w`
                                        },
                                        className: "framer-vl0y73",
                                        "data-framer-appear-id": "vl0y73",
                                        "data-framer-name": "Logo",
                                        exit: ki,
                                        initial: fe("initial", "vl0y73", Xe, "72rtr7"),
                                        name: "Logo",
                                        transformTemplate: We("vl0y73", U)
                                    })
                                })]
                            })]
                        }), e(n.div, {
                            className: "framer-ta2xhr",
                            "data-framer-name": "Header_bottom",
                            name: "Header_bottom",
                            children: e(R, {
                                breakpoint: s,
                                overrides: {
                                    sH43zL1oy: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 194,
                                            intrinsicWidth: 2042,
                                            pixelHeight: 194,
                                            pixelWidth: 2042,
                                            sizes: "min(max(100vw, 1000px), 2042px)",
                                            src: new URL("https://framerusercontent.com/images/kLl55THCuDBaWzEmddYiAzlW38.jpg").href,
                                            srcSet: `${new URL("https://framerusercontent.com/images/kLl55THCuDBaWzEmddYiAzlW38.jpg?scale-down-to=512").href} 512w, ${new URL("https://framerusercontent.com/images/kLl55THCuDBaWzEmddYiAzlW38.jpg?scale-down-to=1024").href} 1024w, ${new URL("https://framerusercontent.com/images/kLl55THCuDBaWzEmddYiAzlW38.jpg").href} 2042w`
                                        }
                                    }
                                },
                                children: e(M, {
                                    background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 194,
                                        intrinsicWidth: 2042,
                                        pixelHeight: 194,
                                        pixelWidth: 2042,
                                        sizes: "min(max(max(100vw, 0px), 1000px), 2042px)",
                                        src: new URL("https://framerusercontent.com/images/kLl55THCuDBaWzEmddYiAzlW38.jpg").href,
                                        srcSet: `${new URL("https://framerusercontent.com/images/kLl55THCuDBaWzEmddYiAzlW38.jpg?scale-down-to=512").href} 512w, ${new URL("https://framerusercontent.com/images/kLl55THCuDBaWzEmddYiAzlW38.jpg?scale-down-to=1024").href} 1024w, ${new URL("https://framerusercontent.com/images/kLl55THCuDBaWzEmddYiAzlW38.jpg").href} 2042w`
                                    },
                                    className: "framer-18xwxfe",
                                    "data-framer-name": "header_forground",
                                    name: "header_forground"
                                })
                            })
                        }), e(n.header, {
                            className: "framer-15b3ddg",
                            "data-framer-name": "Introduction",
                            id: V,
                            name: "Introduction",
                            ref: C,
                            children: e(M, {
                                background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 837,
                                    intrinsicWidth: 2042,
                                    pixelHeight: 837,
                                    pixelWidth: 2042,
                                    sizes: "min(100vw, 2042px)",
                                    src: new URL("https://framerusercontent.com/images/7T0MBLiIVsTP4gHinsaGL0mIke8.jpg").href,
                                    srcSet: `${new URL("https://framerusercontent.com/images/7T0MBLiIVsTP4gHinsaGL0mIke8.jpg?scale-down-to=512").href} 512w, ${new URL("https://framerusercontent.com/images/7T0MBLiIVsTP4gHinsaGL0mIke8.jpg?scale-down-to=1024").href} 1024w, ${new URL("https://framerusercontent.com/images/7T0MBLiIVsTP4gHinsaGL0mIke8.jpg").href} 2042w`
                                },
                                className: "framer-1q6jqyf",
                                children: e(n.div, {
                                    className: "framer-1gzlo0z",
                                    children: d(Ye, {
                                        __framer__animate: {
                                            transition: lt
                                        },
                                        __framer__animateOnce: !0,
                                        __framer__enter: Ri,
                                        __framer__exit: Mi,
                                        __framer__styleAppearEffectEnabled: !0,
                                        __framer__threshold: .5,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        className: "framer-yx52t4",
                                        transformTemplate: U,
                                        children: [d(n.div, {
                                            className: "framer-112z1mn",
                                            children: [e(D, {
                                                __fromCanvasComponent: !0,
                                                children: e(F, {
                                                    children: d("h1", {
                                                        className: "framer-styles-preset-sv0fau",
                                                        "data-styles-preset": "kRWXN_imA",
                                                        style: {
                                                            "--framer-text-alignment": "center"
                                                        },
                                                        children: [e("span", {
                                                            style: {
                                                                "--framer-text-color": "rgb(255, 255, 255)"
                                                            },
                                                            children: "Welcome to "
                                                        }), e("span", {
                                                            style: {
                                                                "--framer-text-color": "rgb(206, 153, 255)"
                                                            },
                                                            children: "Disco Dungeon"
                                                        }), " an Upcoming Turn-Based Puzzle RPG Adventure"]
                                                    })
                                                }),
                                                className: "framer-fe8vz3",
                                                verticalAlignment: "top",
                                                withExternalLayout: !0
                                            }), e(D, {
                                                __fromCanvasComponent: !0,
                                                children: e(F, {
                                                    children: e("p", {
                                                        className: "framer-styles-preset-21ogod",
                                                        "data-styles-preset": "xZndidUCt",
                                                        style: {
                                                            "--framer-text-alignment": "center"
                                                        },
                                                        children: "Step into the world of Disco Dungeon and immerse yourself in an unparalleled puzzle RPG adventure."
                                                    })
                                                }),
                                                className: "framer-1rnea81",
                                                verticalAlignment: "top",
                                                withExternalLayout: !0
                                            })]
                                        }), e(D, {
                                            __fromCanvasComponent: !0,
                                            children: e(F, {
                                                children: e("p", {
                                                    className: "framer-styles-preset-ze47py",
                                                    "data-styles-preset": "HnnPKMCXX",
                                                    style: {
                                                        "--framer-text-alignment": "center"
                                                    },
                                                    children: "Featured in Godot Showreel 2021"
                                                })
                                            }),
                                            className: "framer-71hpk9",
                                            verticalAlignment: "top",
                                            withExternalLayout: !0
                                        }), d(n.div, {
                                            className: "framer-1lquinw",
                                            children: [e(Li, {
                                                children: Q => e(Sr, {
                                                    children: d(ge, {
                                                        className: "framer-1gia23h-container",
                                                        children: [e(nt, {
                                                            height: "100%",
                                                            id: "ERdlvVdZD",
                                                            layoutId: "ERdlvVdZD",
                                                            style: {
                                                                width: "100%"
                                                            },
                                                            tap: L(Q),
                                                            title: "Trailer",
                                                            width: "100%"
                                                        }), e(Xr, {
                                                            children: Q.visible && e(Sr, {
                                                                children: Mt(d(F, {
                                                                    children: [e(n.div, {
                                                                        animate: {
                                                                            opacity: 1,
                                                                            transition: {
                                                                                delay: 0,
                                                                                duration: .3,
                                                                                ease: [.5, 0, .88, .77],
                                                                                type: "tween"
                                                                            }
                                                                        },
                                                                        className: "framer-1efzas0",
                                                                        exit: {
                                                                            opacity: 0,
                                                                            transition: {
                                                                                delay: 0,
                                                                                duration: 0,
                                                                                ease: [0, 0, 1, 1],
                                                                                type: "tween"
                                                                            }
                                                                        },
                                                                        initial: {
                                                                            opacity: 0
                                                                        },
                                                                        onTap: () => Q.hide()
                                                                    }, "PtnEQ7i_I"), e(R, {
                                                                        breakpoint: s,
                                                                        overrides: {
                                                                            sH43zL1oy: {
                                                                                transformTemplate: ot
                                                                            }
                                                                        },
                                                                        children: e(n.div, {
                                                                            className: "framer-1yvffvx",
                                                                            transformTemplate: ra,
                                                                            children: e(ge, {
                                                                                animate: Ni,
                                                                                className: "framer-1de65tj-container",
                                                                                exit: zi,
                                                                                initial: ji,
                                                                                transformTemplate: U,
                                                                                children: e(He, {
                                                                                    backgroundColor: "rgba(0, 0, 0, 0)",
                                                                                    borderRadius: 30,
                                                                                    bottomLeftRadius: 30,
                                                                                    bottomRightRadius: 30,
                                                                                    canvasPlay: !0,
                                                                                    controls: !0,
                                                                                    height: "100%",
                                                                                    id: "XKeL_TaNG",
                                                                                    isMixedBorderRadius: !1,
                                                                                    layoutId: "XKeL_TaNG",
                                                                                    loop: !0,
                                                                                    muted: !1,
                                                                                    objectFit: "scale-down",
                                                                                    playing: !0,
                                                                                    posterEnabled: !1,
                                                                                    srcType: "URL",
                                                                                    srcUrl: "https://benjamintrigalou.com/dd_trailer.mp4",
                                                                                    startTime: 0,
                                                                                    style: {
                                                                                        width: "100%"
                                                                                    },
                                                                                    topLeftRadius: 30,
                                                                                    topRightRadius: 30,
                                                                                    volume: 50,
                                                                                    width: "100%"
                                                                                })
                                                                            })
                                                                        })
                                                                    })]
                                                                }), document.querySelector("#overlay"))
                                                            })
                                                        })]
                                                    })
                                                })
                                            }), e(Li, {
                                                children: Q => e(Sr, {
                                                    children: d(ge, {
                                                        className: "framer-1jcztul-container",
                                                        children: [e(nt, {
                                                            height: "100%",
                                                            id: "BuxWdHQEE",
                                                            layoutId: "BuxWdHQEE",
                                                            style: {
                                                                width: "100%"
                                                            },
                                                            tap: L(Q),
                                                            title: "Showreel",
                                                            width: "100%"
                                                        }), e(Xr, {
                                                            children: Q.visible && e(Sr, {
                                                                children: Mt(d(F, {
                                                                    children: [e(n.div, {
                                                                        animate: {
                                                                            opacity: 1,
                                                                            transition: {
                                                                                delay: 0,
                                                                                duration: 0,
                                                                                ease: [.5, 0, .88, .77],
                                                                                type: "tween"
                                                                            }
                                                                        },
                                                                        className: "framer-krv0xz",
                                                                        exit: {
                                                                            opacity: 0,
                                                                            transition: {
                                                                                delay: 0,
                                                                                duration: 0,
                                                                                ease: [.12, .23, .5, 1],
                                                                                type: "tween"
                                                                            }
                                                                        },
                                                                        initial: {
                                                                            opacity: 0
                                                                        },
                                                                        onTap: () => Q.hide()
                                                                    }, "BPyK7Ot9e"), e(n.div, {
                                                                        className: "framer-150y1kr",
                                                                        transformTemplate: ra,
                                                                        children: e(ge, {
                                                                            animate: Ni,
                                                                            className: "framer-1x3clgt-container",
                                                                            exit: zi,
                                                                            initial: ji,
                                                                            transformTemplate: U,
                                                                            children: e(R, {
                                                                                breakpoint: s,
                                                                                overrides: {
                                                                                    sH43zL1oy: {
                                                                                        borderRadius: 10,
                                                                                        bottomLeftRadius: 10,
                                                                                        bottomRightRadius: 10,
                                                                                        topLeftRadius: 10,
                                                                                        topRightRadius: 10
                                                                                    }
                                                                                },
                                                                                children: e(ur, {
                                                                                    borderRadius: 30,
                                                                                    bottomLeftRadius: 30,
                                                                                    bottomRightRadius: 30,
                                                                                    height: "100%",
                                                                                    id: "TDDmUKpEj",
                                                                                    isMixedBorderRadius: !1,
                                                                                    isRed: !1,
                                                                                    layoutId: "TDDmUKpEj",
                                                                                    play: "On",
                                                                                    shouldMute: !1,
                                                                                    style: {
                                                                                        height: "100%",
                                                                                        width: "100%"
                                                                                    },
                                                                                    thumbnail: "High Quality",
                                                                                    topLeftRadius: 30,
                                                                                    topRightRadius: 30,
                                                                                    url: "https://youtu.be/BhwMSfX-8iw",
                                                                                    width: "100%"
                                                                                })
                                                                            })
                                                                        })
                                                                    })]
                                                                }), document.querySelector("#overlay"))
                                                            })
                                                        })]
                                                    })
                                                })
                                            })]
                                        })]
                                    })
                                })
                            })
                        }), d(n.div, {
                            className: "framer-to946j",
                            "data-framer-name": "Content",
                            id: q,
                            name: "Content",
                            ref: b,
                            children: [e(n.div, {
                                className: "framer-1eby98a",
                                "data-framer-name": "separator",
                                name: "separator",
                                children: e(n.div, {
                                    className: "framer-1syiz2p"
                                })
                            }), d(n.header, {
                                className: "framer-1i0rx8c",
                                "data-framer-name": "Second section",
                                name: "Second section",
                                children: [e(R, {
                                    breakpoint: s,
                                    overrides: {
                                        sH43zL1oy: {
                                            background: {
                                                alt: "",
                                                fit: "fill",
                                                intrinsicHeight: 1385,
                                                intrinsicWidth: 2848,
                                                loading: "lazy",
                                                pixelHeight: 1385,
                                                pixelWidth: 2848,
                                                sizes: "min((min(100vw, 2400px) - 20px) * 1.6, 2042px)",
                                                src: new URL("https://framerusercontent.com/images/BTFjzy4nvYi5dfnaJzt4FuVEadA.jpg").href,
                                                srcSet: `${new URL("https://framerusercontent.com/images/BTFjzy4nvYi5dfnaJzt4FuVEadA.jpg?scale-down-to=512").href} 512w, ${new URL("https://framerusercontent.com/images/BTFjzy4nvYi5dfnaJzt4FuVEadA.jpg?scale-down-to=1024").href} 1024w, ${new URL("https://framerusercontent.com/images/BTFjzy4nvYi5dfnaJzt4FuVEadA.jpg?scale-down-to=2048").href} 2048w, ${new URL("https://framerusercontent.com/images/BTFjzy4nvYi5dfnaJzt4FuVEadA.jpg").href} 2848w`
                                            }
                                        }
                                    },
                                    children: e(I, {
                                        __framer__adjustPosition: !0,
                                        __framer__offset: 300,
                                        __framer__parallaxTransformEnabled: !0,
                                        __framer__speed: 102,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 1385,
                                            intrinsicWidth: 2848,
                                            loading: "lazy",
                                            pixelHeight: 1385,
                                            pixelWidth: 2848,
                                            sizes: "min(min(100vw, 2400px) - 80px, 2042px)",
                                            src: new URL("https://framerusercontent.com/images/BTFjzy4nvYi5dfnaJzt4FuVEadA.jpg").href,
                                            srcSet: `${new URL("https://framerusercontent.com/images/BTFjzy4nvYi5dfnaJzt4FuVEadA.jpg?scale-down-to=512").href} 512w, ${new URL("https://framerusercontent.com/images/BTFjzy4nvYi5dfnaJzt4FuVEadA.jpg?scale-down-to=1024").href} 1024w, ${new URL("https://framerusercontent.com/images/BTFjzy4nvYi5dfnaJzt4FuVEadA.jpg?scale-down-to=2048").href} 2048w, ${new URL("https://framerusercontent.com/images/BTFjzy4nvYi5dfnaJzt4FuVEadA.jpg").href} 2848w`
                                        },
                                        className: "framer-uq89c8",
                                        "data-framer-name": "background_back",
                                        name: "background_back",
                                        transformTemplate: or
                                    })
                                }), e(R, {
                                    breakpoint: s,
                                    overrides: {
                                        sH43zL1oy: {
                                            background: {
                                                alt: "",
                                                fit: "fill",
                                                intrinsicHeight: 1385,
                                                intrinsicWidth: 2848,
                                                loading: "lazy",
                                                pixelHeight: 1385,
                                                pixelWidth: 2848,
                                                sizes: "min((min(100vw, 2400px) - 20px) * 1.6, 2042px)",
                                                src: new URL("https://framerusercontent.com/images/k1MKmLrJRISZOcehiIDwwMoKN7A.png").href,
                                                srcSet: `${new URL("https://framerusercontent.com/images/k1MKmLrJRISZOcehiIDwwMoKN7A.png?scale-down-to=512").href} 512w, ${new URL("https://framerusercontent.com/images/k1MKmLrJRISZOcehiIDwwMoKN7A.png?scale-down-to=1024").href} 1024w, ${new URL("https://framerusercontent.com/images/k1MKmLrJRISZOcehiIDwwMoKN7A.png?scale-down-to=2048").href} 2048w, ${new URL("https://framerusercontent.com/images/k1MKmLrJRISZOcehiIDwwMoKN7A.png").href} 2848w`
                                            }
                                        }
                                    },
                                    children: e(M, {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 1385,
                                            intrinsicWidth: 2848,
                                            loading: "lazy",
                                            pixelHeight: 1385,
                                            pixelWidth: 2848,
                                            sizes: "min(min(100vw, 2400px) - 80px, 2042px)",
                                            src: new URL("https://framerusercontent.com/images/xtWa6zFAHh0nPMCdhCGUDwU.png").href,
                                            srcSet: `${new URL("https://framerusercontent.com/images/xtWa6zFAHh0nPMCdhCGUDwU.png?scale-down-to=512").href} 512w, ${new URL("https://framerusercontent.com/images/xtWa6zFAHh0nPMCdhCGUDwU.png?scale-down-to=1024").href} 1024w, ${new URL("https://framerusercontent.com/images/xtWa6zFAHh0nPMCdhCGUDwU.png?scale-down-to=2048").href} 2048w, ${new URL("https://framerusercontent.com/images/xtWa6zFAHh0nPMCdhCGUDwU.png").href} 2848w`
                                        },
                                        className: "framer-5qfwc",
                                        "data-framer-name": "background_top",
                                        name: "background_top",
                                        transformTemplate: or
                                    })
                                }), d(n.div, {
                                    className: "framer-1cwl5y5",
                                    "data-framer-name": "Content",
                                    name: "Content",
                                    children: [e(n.div, {
                                        className: "framer-17nm4kd",
                                        children: e(R, {
                                            breakpoint: s,
                                            overrides: {
                                                iRL2gYRtC: {
                                                    background: {
                                                        alt: "",
                                                        fit: "fill",
                                                        loading: "lazy",
                                                        pixelHeight: 600,
                                                        pixelWidth: 300,
                                                        sizes: "min((min(min(min(100vw, 2400px) - 80px, 1900px) * 0.61, 600px) - 140px) * 0.875, 400px)",
                                                        src: new URL("https://framerusercontent.com/images/mvglhsrXE2NmW8fuMgeRWglgJGQ.gif").href,
                                                        srcSet: `${new URL("https://framerusercontent.com/images/mvglhsrXE2NmW8fuMgeRWglgJGQ.gif?scale-down-to=512").href} 256w, ${new URL("https://framerusercontent.com/images/mvglhsrXE2NmW8fuMgeRWglgJGQ.gif").href} 300w`
                                                    }
                                                },
                                                sH43zL1oy: {
                                                    background: {
                                                        alt: "",
                                                        fit: "fill",
                                                        loading: "lazy",
                                                        pixelHeight: 600,
                                                        pixelWidth: 300,
                                                        sizes: "min((min(min(min(100vw, 2400px) - 20px, 1900px), 600px) - 80px) * 0.875, 400px)",
                                                        src: new URL("https://framerusercontent.com/images/mvglhsrXE2NmW8fuMgeRWglgJGQ.gif").href,
                                                        srcSet: `${new URL("https://framerusercontent.com/images/mvglhsrXE2NmW8fuMgeRWglgJGQ.gif?scale-down-to=512").href} 256w, ${new URL("https://framerusercontent.com/images/mvglhsrXE2NmW8fuMgeRWglgJGQ.gif").href} 300w`
                                                    }
                                                },
                                                tXpGpVfEc: {
                                                    background: {
                                                        alt: "",
                                                        fit: "fill",
                                                        loading: "lazy",
                                                        pixelHeight: 600,
                                                        pixelWidth: 300,
                                                        sizes: "min((min(min(min(100vw, 2400px) - 80px, 1900px) * 0.3811, 700px) - 140px) * 0.875, 400px)",
                                                        src: new URL("https://framerusercontent.com/images/mvglhsrXE2NmW8fuMgeRWglgJGQ.gif").href,
                                                        srcSet: `${new URL("https://framerusercontent.com/images/mvglhsrXE2NmW8fuMgeRWglgJGQ.gif?scale-down-to=512").href} 256w, ${new URL("https://framerusercontent.com/images/mvglhsrXE2NmW8fuMgeRWglgJGQ.gif").href} 300w`
                                                    }
                                                }
                                            },
                                            children: e(I, {
                                                __framer__loop: wm,
                                                __framer__loopEffectEnabled: !0,
                                                __framer__loopRepeatDelay: 0,
                                                __framer__loopRepeatType: "mirror",
                                                __framer__loopTransition: xm,
                                                __perspectiveFX: !1,
                                                __targetOpacity: 1,
                                                background: {
                                                    alt: "",
                                                    fit: "fill",
                                                    loading: "lazy",
                                                    pixelHeight: 600,
                                                    pixelWidth: 300,
                                                    sizes: "min((min(min(min(100vw, 2400px) - 80px, 1900px) * 0.3811, 600px) - 140px) * 0.875, 400px)",
                                                    src: new URL("https://framerusercontent.com/images/mvglhsrXE2NmW8fuMgeRWglgJGQ.gif").href,
                                                    srcSet: `${new URL("https://framerusercontent.com/images/mvglhsrXE2NmW8fuMgeRWglgJGQ.gif?scale-down-to=512").href} 256w, ${new URL("https://framerusercontent.com/images/mvglhsrXE2NmW8fuMgeRWglgJGQ.gif").href} 300w`
                                                },
                                                className: "framer-fhvqns",
                                                "data-border": !0,
                                                "data-framer-name": "VideoHolder",
                                                name: "VideoHolder",
                                                transformTemplate: U,
                                                children: e(ge, {
                                                    className: "framer-1ylya7e-container",
                                                    children: e(He, {
                                                        backgroundColor: "rgba(0, 0, 0, 0)",
                                                        borderRadius: 0,
                                                        bottomLeftRadius: 0,
                                                        bottomRightRadius: 0,
                                                        canvasPlay: !0,
                                                        controls: !1,
                                                        height: "100%",
                                                        id: "JSWkQu8ci",
                                                        isMixedBorderRadius: !1,
                                                        layoutId: "JSWkQu8ci",
                                                        loop: !0,
                                                        muted: !0,
                                                        objectFit: "cover",
                                                        playing: !0,
                                                        posterEnabled: !1,
                                                        srcFile: new URL("https://framerusercontent.com/modules/assets/H9bJ930q1Boyp6bFYUugP9GsXY~9iwWkFnUex3x35l5Obl0KLE-ly9G6KylwI5ixxYqlBU.mp4").href,
                                                        srcType: "Upload",
                                                        srcUrl: "https://assets.mixkit.co/videos/preview/mixkit-ice-cream-glass-of-red-soda-5094-small.mp4",
                                                        startTime: 0,
                                                        style: {
                                                            width: "100%"
                                                        },
                                                        topLeftRadius: 0,
                                                        topRightRadius: 0,
                                                        volume: 25,
                                                        width: "100%"
                                                    })
                                                })
                                            })
                                        })
                                    }), z() && e(n.div, {
                                        className: "framer-1roelpq hidden-93rnvh hidden-g5j6vk"
                                    }), d(n.div, {
                                        className: "framer-jjkesf",
                                        children: [e(R, {
                                            breakpoint: s,
                                            overrides: {
                                                iRL2gYRtC: {
                                                    children: e(F, {
                                                        children: e("h2", {
                                                            className: "framer-styles-preset-1wml6uu",
                                                            "data-styles-preset": "fVxnimdqP",
                                                            style: {
                                                                "--framer-text-alignment": "center"
                                                            },
                                                            children: "Intuitive Controls for Effortless Gameplay"
                                                        })
                                                    })
                                                },
                                                sH43zL1oy: {
                                                    children: e(F, {
                                                        children: e("h2", {
                                                            className: "framer-styles-preset-1wml6uu",
                                                            "data-styles-preset": "fVxnimdqP",
                                                            style: {
                                                                "--framer-text-alignment": "center"
                                                            },
                                                            children: "Intuitive Controls for Effortless Gameplay"
                                                        })
                                                    })
                                                }
                                            },
                                            children: e(D, {
                                                __fromCanvasComponent: !0,
                                                children: e(F, {
                                                    children: e("h2", {
                                                        className: "framer-styles-preset-1wml6uu",
                                                        "data-styles-preset": "fVxnimdqP",
                                                        children: "Intuitive Controls for Effortless Gameplay"
                                                    })
                                                }),
                                                className: "framer-vaos0u",
                                                verticalAlignment: "top",
                                                withExternalLayout: !0
                                            })
                                        }), e(R, {
                                            breakpoint: s,
                                            overrides: {
                                                iRL2gYRtC: {
                                                    children: e(F, {
                                                        children: e("p", {
                                                            className: "framer-styles-preset-21ogod",
                                                            "data-styles-preset": "xZndidUCt",
                                                            style: {
                                                                "--framer-text-alignment": "center"
                                                            },
                                                            children: "Simply draw a path with your finger and release to move to the new position. Navigate the dungeons with ease as you strategize your way through each level."
                                                        })
                                                    })
                                                },
                                                sH43zL1oy: {
                                                    children: e(F, {
                                                        children: e("p", {
                                                            className: "framer-styles-preset-21ogod",
                                                            "data-styles-preset": "xZndidUCt",
                                                            style: {
                                                                "--framer-text-alignment": "center"
                                                            },
                                                            children: "Simply draw a path with your finger and release to move to the new position. Navigate the dungeons with ease as you strategize your way through each level."
                                                        })
                                                    })
                                                }
                                            },
                                            children: e(D, {
                                                __fromCanvasComponent: !0,
                                                children: e(F, {
                                                    children: e("p", {
                                                        className: "framer-styles-preset-21ogod",
                                                        "data-styles-preset": "xZndidUCt",
                                                        children: "Simply draw a path with your finger and release to move to the new position. Navigate the dungeons with ease as you strategize your way through each level."
                                                    })
                                                }),
                                                className: "framer-1l7u3oa",
                                                verticalAlignment: "top",
                                                withExternalLayout: !0
                                            })
                                        })]
                                    })]
                                }), A() && e(n.div, {
                                    className: "framer-17l21fw hidden-72rtr7 hidden-58buo2"
                                })]
                            }), e(n.div, {
                                className: "framer-dzi1x4",
                                "data-framer-name": "separator",
                                id: P,
                                name: "separator",
                                ref: O,
                                children: e(n.div, {
                                    className: "framer-nkp9ki"
                                })
                            }), d(n.header, {
                                background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 1385,
                                    intrinsicWidth: 2848,
                                    loading: "lazy",
                                    pixelHeight: 1385,
                                    pixelWidth: 2848,
                                    sizes: "min(100vw, 2400px)",
                                    src: new URL("https://framerusercontent.com/images/0kjclzaE6d1JunKfnpZKtJxNaiM.jpg").href,
                                    srcSet: `${new URL("https://framerusercontent.com/images/0kjclzaE6d1JunKfnpZKtJxNaiM.jpg?scale-down-to=512").href} 512w, ${new URL("https://framerusercontent.com/images/0kjclzaE6d1JunKfnpZKtJxNaiM.jpg?scale-down-to=1024").href} 1024w, ${new URL("https://framerusercontent.com/images/0kjclzaE6d1JunKfnpZKtJxNaiM.jpg?scale-down-to=2048").href} 2048w, ${new URL("https://framerusercontent.com/images/0kjclzaE6d1JunKfnpZKtJxNaiM.jpg").href} 2848w`
                                },
                                className: "framer-1l4437k",
                                "data-framer-name": "Third section",
                                name: "Third section",
                                children: [e(R, {
                                    breakpoint: s,
                                    overrides: {
                                        sH43zL1oy: {
                                            background: {
                                                alt: "",
                                                fit: "fill",
                                                intrinsicHeight: 1385,
                                                intrinsicWidth: 2848,
                                                loading: "lazy",
                                                pixelHeight: 1385,
                                                pixelWidth: 2848,
                                                sizes: "min((min(100vw, 2400px) - 20px) * 1.4, 2042px)",
                                                src: new URL("https://framerusercontent.com/images/uIZKzYnZzDoVpmDdKpLlpitGYPE.jpg").href,
                                                srcSet: `${new URL("https://framerusercontent.com/images/uIZKzYnZzDoVpmDdKpLlpitGYPE.jpg?scale-down-to=512").href} 512w, ${new URL("https://framerusercontent.com/images/uIZKzYnZzDoVpmDdKpLlpitGYPE.jpg?scale-down-to=1024").href} 1024w, ${new URL("https://framerusercontent.com/images/uIZKzYnZzDoVpmDdKpLlpitGYPE.jpg?scale-down-to=2048").href} 2048w, ${new URL("https://framerusercontent.com/images/uIZKzYnZzDoVpmDdKpLlpitGYPE.jpg").href} 2848w`
                                            }
                                        }
                                    },
                                    children: e(I, {
                                        __framer__adjustPosition: !0,
                                        __framer__offset: 500,
                                        __framer__parallaxTransformEnabled: !0,
                                        __framer__speed: 102,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 1385,
                                            intrinsicWidth: 2848,
                                            loading: "lazy",
                                            pixelHeight: 1385,
                                            pixelWidth: 2848,
                                            sizes: "min(min(100vw, 2400px) - 80px, 2042px)",
                                            src: new URL("https://framerusercontent.com/images/uIZKzYnZzDoVpmDdKpLlpitGYPE.jpg").href,
                                            srcSet: `${new URL("https://framerusercontent.com/images/uIZKzYnZzDoVpmDdKpLlpitGYPE.jpg?scale-down-to=512").href} 512w, ${new URL("https://framerusercontent.com/images/uIZKzYnZzDoVpmDdKpLlpitGYPE.jpg?scale-down-to=1024").href} 1024w, ${new URL("https://framerusercontent.com/images/uIZKzYnZzDoVpmDdKpLlpitGYPE.jpg?scale-down-to=2048").href} 2048w, ${new URL("https://framerusercontent.com/images/uIZKzYnZzDoVpmDdKpLlpitGYPE.jpg").href} 2848w`
                                        },
                                        className: "framer-81gh5p",
                                        "data-framer-name": "background_bottom",
                                        name: "background_bottom",
                                        transformTemplate: or
                                    })
                                }), e(R, {
                                    breakpoint: s,
                                    overrides: {
                                        sH43zL1oy: {
                                            background: {
                                                alt: "",
                                                fit: "fill",
                                                intrinsicHeight: 1385,
                                                intrinsicWidth: 2848,
                                                loading: "lazy",
                                                pixelHeight: 1385,
                                                pixelWidth: 2848,
                                                sizes: "min((min(100vw, 2400px) - 20px) * 1.4, 2042px)",
                                                src: new URL("https://framerusercontent.com/images/YTWfz7PFHSGXZnGNxVWS27YZM.png").href,
                                                srcSet: `${new URL("https://framerusercontent.com/images/YTWfz7PFHSGXZnGNxVWS27YZM.png?scale-down-to=512").href} 512w, ${new URL("https://framerusercontent.com/images/YTWfz7PFHSGXZnGNxVWS27YZM.png?scale-down-to=1024").href} 1024w, ${new URL("https://framerusercontent.com/images/YTWfz7PFHSGXZnGNxVWS27YZM.png?scale-down-to=2048").href} 2048w, ${new URL("https://framerusercontent.com/images/YTWfz7PFHSGXZnGNxVWS27YZM.png").href} 2848w`
                                            }
                                        }
                                    },
                                    children: e(M, {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 1385,
                                            intrinsicWidth: 2848,
                                            loading: "lazy",
                                            pixelHeight: 1385,
                                            pixelWidth: 2848,
                                            sizes: "min(min(100vw, 2400px) - 80px, 2042px)",
                                            src: new URL("https://framerusercontent.com/images/YTWfz7PFHSGXZnGNxVWS27YZM.png").href,
                                            srcSet: `${new URL("https://framerusercontent.com/images/YTWfz7PFHSGXZnGNxVWS27YZM.png?scale-down-to=512").href} 512w, ${new URL("https://framerusercontent.com/images/YTWfz7PFHSGXZnGNxVWS27YZM.png?scale-down-to=1024").href} 1024w, ${new URL("https://framerusercontent.com/images/YTWfz7PFHSGXZnGNxVWS27YZM.png?scale-down-to=2048").href} 2048w, ${new URL("https://framerusercontent.com/images/YTWfz7PFHSGXZnGNxVWS27YZM.png").href} 2848w`
                                        },
                                        className: "framer-iemz52",
                                        "data-framer-name": "background_top",
                                        name: "background_top",
                                        transformTemplate: or
                                    })
                                }), d(n.div, {
                                    className: "framer-ftrjx4",
                                    "data-framer-name": "Content",
                                    name: "Content",
                                    children: [d(n.div, {
                                        className: "framer-13vh2sd",
                                        children: [e(R, {
                                            breakpoint: s,
                                            overrides: {
                                                iRL2gYRtC: {
                                                    children: e(F, {
                                                        children: e("h2", {
                                                            className: "framer-styles-preset-1wml6uu",
                                                            "data-styles-preset": "fVxnimdqP",
                                                            style: {
                                                                "--framer-text-alignment": "center"
                                                            },
                                                            children: "Master the Art of Tile Matching & Weapon Charging"
                                                        })
                                                    })
                                                },
                                                sH43zL1oy: {
                                                    children: e(F, {
                                                        children: e("h2", {
                                                            className: "framer-styles-preset-1wml6uu",
                                                            "data-styles-preset": "fVxnimdqP",
                                                            style: {
                                                                "--framer-text-alignment": "center"
                                                            },
                                                            children: "Master the Art of Tile Matching & Weapon Charging"
                                                        })
                                                    })
                                                }
                                            },
                                            children: e(D, {
                                                __fromCanvasComponent: !0,
                                                children: e(F, {
                                                    children: e("h2", {
                                                        className: "framer-styles-preset-1wml6uu",
                                                        "data-styles-preset": "fVxnimdqP",
                                                        children: "Master the Art of Tile Matching & Weapon Charging"
                                                    })
                                                }),
                                                className: "framer-1cyja9d",
                                                verticalAlignment: "top",
                                                withExternalLayout: !0
                                            })
                                        }), e(R, {
                                            breakpoint: s,
                                            overrides: {
                                                iRL2gYRtC: {
                                                    children: e(F, {
                                                        children: e("p", {
                                                            className: "framer-styles-preset-21ogod",
                                                            "data-styles-preset": "xZndidUCt",
                                                            style: {
                                                                "--framer-text-alignment": "center"
                                                            },
                                                            children: "Switch tiles emplacements while moving, and match three tiles of the same color to charge your corresponding weapon. Harness your skills to unleash powerful attacks and overcome varied foes."
                                                        })
                                                    })
                                                },
                                                sH43zL1oy: {
                                                    children: e(F, {
                                                        children: e("p", {
                                                            className: "framer-styles-preset-21ogod",
                                                            "data-styles-preset": "xZndidUCt",
                                                            style: {
                                                                "--framer-text-alignment": "center"
                                                            },
                                                            children: "Switch tiles emplacements while moving, and match three tiles of the same color to charge your corresponding weapon. Harness your skills to unleash powerful attacks and overcome varied foes."
                                                        })
                                                    })
                                                }
                                            },
                                            children: e(D, {
                                                __fromCanvasComponent: !0,
                                                children: e(F, {
                                                    children: e("p", {
                                                        className: "framer-styles-preset-21ogod",
                                                        "data-styles-preset": "xZndidUCt",
                                                        children: "Switch tiles emplacements while moving, and match three tiles of the same color to charge your corresponding weapon. Harness your skills to unleash powerful attacks and overcome varied foes."
                                                    })
                                                }),
                                                className: "framer-yhg5rx",
                                                verticalAlignment: "top",
                                                withExternalLayout: !0
                                            })
                                        })]
                                    }), z() && e(n.div, {
                                        className: "framer-1hkr997 hidden-93rnvh hidden-g5j6vk"
                                    }), e(n.div, {
                                        className: "framer-1lbsrgu",
                                        children: e(R, {
                                            breakpoint: s,
                                            overrides: {
                                                iRL2gYRtC: {
                                                    background: {
                                                        alt: "",
                                                        fit: "fill",
                                                        loading: "lazy",
                                                        pixelHeight: 600,
                                                        pixelWidth: 300,
                                                        sizes: "min((min(min(min(100vw, 2400px) - 80px, 1900px) * 0.61, 600px) - 140px) * 0.875, 400px)",
                                                        src: new URL("https://framerusercontent.com/images/mvglhsrXE2NmW8fuMgeRWglgJGQ.gif").href,
                                                        srcSet: `${new URL("https://framerusercontent.com/images/mvglhsrXE2NmW8fuMgeRWglgJGQ.gif?scale-down-to=512").href} 256w, ${new URL("https://framerusercontent.com/images/mvglhsrXE2NmW8fuMgeRWglgJGQ.gif").href} 300w`
                                                    }
                                                },
                                                sH43zL1oy: {
                                                    background: {
                                                        alt: "",
                                                        fit: "fill",
                                                        loading: "lazy",
                                                        pixelHeight: 600,
                                                        pixelWidth: 300,
                                                        sizes: "min((min(min(min(100vw, 2400px) - 20px, 1900px), 600px) - 80px) * 0.875, 400px)",
                                                        src: new URL("https://framerusercontent.com/images/mvglhsrXE2NmW8fuMgeRWglgJGQ.gif").href,
                                                        srcSet: `${new URL("https://framerusercontent.com/images/mvglhsrXE2NmW8fuMgeRWglgJGQ.gif?scale-down-to=512").href} 256w, ${new URL("https://framerusercontent.com/images/mvglhsrXE2NmW8fuMgeRWglgJGQ.gif").href} 300w`
                                                    }
                                                },
                                                tXpGpVfEc: {
                                                    background: {
                                                        alt: "",
                                                        fit: "fill",
                                                        loading: "lazy",
                                                        pixelHeight: 600,
                                                        pixelWidth: 300,
                                                        sizes: "min((min(min(min(100vw, 2400px) - 80px, 1900px) * 0.3808, 700px) - 140px) * 0.875, 400px)",
                                                        src: new URL("https://framerusercontent.com/images/mvglhsrXE2NmW8fuMgeRWglgJGQ.gif").href,
                                                        srcSet: `${new URL("https://framerusercontent.com/images/mvglhsrXE2NmW8fuMgeRWglgJGQ.gif?scale-down-to=512").href} 256w, ${new URL("https://framerusercontent.com/images/mvglhsrXE2NmW8fuMgeRWglgJGQ.gif").href} 300w`
                                                    }
                                                }
                                            },
                                            children: e(I, {
                                                __framer__loop: ym,
                                                __framer__loopEffectEnabled: !0,
                                                __framer__loopRepeatDelay: 0,
                                                __framer__loopRepeatType: "mirror",
                                                __framer__loopTransition: ta,
                                                __perspectiveFX: !1,
                                                __targetOpacity: 1,
                                                background: {
                                                    alt: "",
                                                    fit: "fill",
                                                    loading: "lazy",
                                                    pixelHeight: 600,
                                                    pixelWidth: 300,
                                                    sizes: "min((min(min(min(100vw, 2400px) - 80px, 1900px) * 0.3808, 600px) - 140px) * 0.875, 400px)",
                                                    src: new URL("https://framerusercontent.com/images/mvglhsrXE2NmW8fuMgeRWglgJGQ.gif").href,
                                                    srcSet: `${new URL("https://framerusercontent.com/images/mvglhsrXE2NmW8fuMgeRWglgJGQ.gif?scale-down-to=512").href} 256w, ${new URL("https://framerusercontent.com/images/mvglhsrXE2NmW8fuMgeRWglgJGQ.gif").href} 300w`
                                                },
                                                className: "framer-lob243",
                                                "data-border": !0,
                                                "data-framer-name": "VideoHolder",
                                                name: "VideoHolder",
                                                transformTemplate: U,
                                                children: e(ge, {
                                                    className: "framer-4y3194-container",
                                                    children: e(He, {
                                                        backgroundColor: "rgba(0, 0, 0, 0)",
                                                        borderRadius: 0,
                                                        bottomLeftRadius: 0,
                                                        bottomRightRadius: 0,
                                                        canvasPlay: !0,
                                                        controls: !1,
                                                        height: "100%",
                                                        id: "hY8Dv5htw",
                                                        isMixedBorderRadius: !1,
                                                        layoutId: "hY8Dv5htw",
                                                        loop: !0,
                                                        muted: !0,
                                                        objectFit: "cover",
                                                        playing: !0,
                                                        posterEnabled: !1,
                                                        srcFile: new URL("https://framerusercontent.com/modules/assets/D5Sg9tE8gQG6ESVXupMXgK61VyQ~xokz5kI4gohBJEGNVHUUZGNPWUK4WjLtuLkE2TkfMS8.mp4").href,
                                                        srcType: "Upload",
                                                        srcUrl: "https://assets.mixkit.co/videos/preview/mixkit-ice-cream-glass-of-red-soda-5094-small.mp4",
                                                        startTime: 0,
                                                        style: {
                                                            width: "100%"
                                                        },
                                                        topLeftRadius: 0,
                                                        topRightRadius: 0,
                                                        volume: 25,
                                                        width: "100%"
                                                    })
                                                })
                                            })
                                        })
                                    })]
                                }), A() && e(n.div, {
                                    className: "framer-1wd7ouk hidden-72rtr7 hidden-58buo2"
                                })]
                            }), e(n.div, {
                                className: "framer-oq14av",
                                "data-framer-name": "separator",
                                id: ne,
                                name: "separator",
                                ref: _e,
                                children: e(n.div, {
                                    className: "framer-1j6dl1f"
                                })
                            }), d(n.header, {
                                className: "framer-rb9igs",
                                "data-framer-name": "Fourth section",
                                name: "Fourth section",
                                children: [e(R, {
                                    breakpoint: s,
                                    overrides: {
                                        sH43zL1oy: {
                                            background: {
                                                alt: "",
                                                fit: "fill",
                                                intrinsicHeight: 1696,
                                                intrinsicWidth: 2848,
                                                loading: "lazy",
                                                pixelHeight: 1696,
                                                pixelWidth: 2848,
                                                sizes: "min((min(100vw, 2400px) - 20px) * 2, 2042px)",
                                                src: new URL("https://framerusercontent.com/images/jl7W1MgbRQYNo0qjpmaUgAGQ.jpg").href,
                                                srcSet: `${new URL("https://framerusercontent.com/images/jl7W1MgbRQYNo0qjpmaUgAGQ.jpg?scale-down-to=512").href} 512w, ${new URL("https://framerusercontent.com/images/jl7W1MgbRQYNo0qjpmaUgAGQ.jpg?scale-down-to=1024").href} 1024w, ${new URL("https://framerusercontent.com/images/jl7W1MgbRQYNo0qjpmaUgAGQ.jpg?scale-down-to=2048").href} 2048w, ${new URL("https://framerusercontent.com/images/jl7W1MgbRQYNo0qjpmaUgAGQ.jpg").href} 2848w`
                                            }
                                        }
                                    },
                                    children: e(M, {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 1696,
                                            intrinsicWidth: 2848,
                                            loading: "lazy",
                                            pixelHeight: 1696,
                                            pixelWidth: 2848,
                                            sizes: "min(min(100vw, 2400px) - 80px, 2042px)",
                                            src: new URL("https://framerusercontent.com/images/jl7W1MgbRQYNo0qjpmaUgAGQ.jpg").href,
                                            srcSet: `${new URL("https://framerusercontent.com/images/jl7W1MgbRQYNo0qjpmaUgAGQ.jpg?scale-down-to=512").href} 512w, ${new URL("https://framerusercontent.com/images/jl7W1MgbRQYNo0qjpmaUgAGQ.jpg?scale-down-to=1024").href} 1024w, ${new URL("https://framerusercontent.com/images/jl7W1MgbRQYNo0qjpmaUgAGQ.jpg?scale-down-to=2048").href} 2048w, ${new URL("https://framerusercontent.com/images/jl7W1MgbRQYNo0qjpmaUgAGQ.jpg").href} 2848w`
                                        },
                                        className: "framer-13glbb",
                                        "data-framer-name": "background_bottom",
                                        name: "background_bottom",
                                        transformTemplate: or
                                    })
                                }), e(R, {
                                    breakpoint: s,
                                    overrides: {
                                        sH43zL1oy: {
                                            background: {
                                                alt: "",
                                                fit: "fill",
                                                intrinsicHeight: 1696,
                                                intrinsicWidth: 2848,
                                                loading: "lazy",
                                                pixelHeight: 1696,
                                                pixelWidth: 2848,
                                                sizes: "min((min(100vw, 2400px) - 20px) * 2, 2042px)",
                                                src: new URL("https://framerusercontent.com/images/CUkKOsaZPcKSSkl2Q2NP5Mo.png").href,
                                                srcSet: `${new URL("https://framerusercontent.com/images/CUkKOsaZPcKSSkl2Q2NP5Mo.png?scale-down-to=512").href} 512w, ${new URL("https://framerusercontent.com/images/CUkKOsaZPcKSSkl2Q2NP5Mo.png?scale-down-to=1024").href} 1024w, ${new URL("https://framerusercontent.com/images/CUkKOsaZPcKSSkl2Q2NP5Mo.png?scale-down-to=2048").href} 2048w, ${new URL("https://framerusercontent.com/images/CUkKOsaZPcKSSkl2Q2NP5Mo.png").href} 2848w`
                                            }
                                        }
                                    },
                                    children: e(M, {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 1696,
                                            intrinsicWidth: 2848,
                                            loading: "lazy",
                                            pixelHeight: 1696,
                                            pixelWidth: 2848,
                                            sizes: "min(min(100vw, 2400px) - 80px, 2042px)",
                                            src: new URL("https://framerusercontent.com/images/CUkKOsaZPcKSSkl2Q2NP5Mo.png").href,
                                            srcSet: `${new URL("https://framerusercontent.com/images/CUkKOsaZPcKSSkl2Q2NP5Mo.png?scale-down-to=512").href} 512w, ${new URL("https://framerusercontent.com/images/CUkKOsaZPcKSSkl2Q2NP5Mo.png?scale-down-to=1024").href} 1024w, ${new URL("https://framerusercontent.com/images/CUkKOsaZPcKSSkl2Q2NP5Mo.png?scale-down-to=2048").href} 2048w, ${new URL("https://framerusercontent.com/images/CUkKOsaZPcKSSkl2Q2NP5Mo.png").href} 2848w`
                                        },
                                        className: "framer-1ori1hz",
                                        "data-framer-name": "background_top",
                                        name: "background_top",
                                        transformTemplate: or
                                    })
                                }), d(n.div, {
                                    className: "framer-fk808e",
                                    "data-framer-name": "Content",
                                    name: "Content",
                                    children: [e(n.div, {
                                        className: "framer-1lhxbjq",
                                        children: e(R, {
                                            breakpoint: s,
                                            overrides: {
                                                iRL2gYRtC: {
                                                    background: {
                                                        alt: "",
                                                        fit: "fill",
                                                        loading: "lazy",
                                                        pixelHeight: 600,
                                                        pixelWidth: 300,
                                                        sizes: "min((min((min(min(100vw, 2400px) - 80px, 1900px) - 80px) * 0.61, 600px) - 80px) * 0.875, 400px)",
                                                        src: new URL("https://framerusercontent.com/images/mvglhsrXE2NmW8fuMgeRWglgJGQ.gif").href,
                                                        srcSet: `${new URL("https://framerusercontent.com/images/mvglhsrXE2NmW8fuMgeRWglgJGQ.gif?scale-down-to=512").href} 256w, ${new URL("https://framerusercontent.com/images/mvglhsrXE2NmW8fuMgeRWglgJGQ.gif").href} 300w`
                                                    }
                                                },
                                                sH43zL1oy: {
                                                    background: {
                                                        alt: "",
                                                        fit: "fill",
                                                        loading: "lazy",
                                                        pixelHeight: 600,
                                                        pixelWidth: 300,
                                                        sizes: "min((min(min(min(100vw, 2400px) - 20px, 1900px), 600px) - 80px) * 0.875, 400px)",
                                                        src: new URL("https://framerusercontent.com/images/mvglhsrXE2NmW8fuMgeRWglgJGQ.gif").href,
                                                        srcSet: `${new URL("https://framerusercontent.com/images/mvglhsrXE2NmW8fuMgeRWglgJGQ.gif?scale-down-to=512").href} 256w, ${new URL("https://framerusercontent.com/images/mvglhsrXE2NmW8fuMgeRWglgJGQ.gif").href} 300w`
                                                    }
                                                },
                                                tXpGpVfEc: {
                                                    background: {
                                                        alt: "",
                                                        fit: "fill",
                                                        loading: "lazy",
                                                        pixelHeight: 600,
                                                        pixelWidth: 300,
                                                        sizes: "min((min((min(min(100vw, 2400px) - 80px, 1900px) - 80px) * 0.38, 700px) - 80px) * 0.875, 400px)",
                                                        src: new URL("https://framerusercontent.com/images/mvglhsrXE2NmW8fuMgeRWglgJGQ.gif").href,
                                                        srcSet: `${new URL("https://framerusercontent.com/images/mvglhsrXE2NmW8fuMgeRWglgJGQ.gif?scale-down-to=512").href} 256w, ${new URL("https://framerusercontent.com/images/mvglhsrXE2NmW8fuMgeRWglgJGQ.gif").href} 300w`
                                                    }
                                                }
                                            },
                                            children: e(I, {
                                                __framer__loop: bm,
                                                __framer__loopEffectEnabled: !0,
                                                __framer__loopRepeatDelay: 0,
                                                __framer__loopRepeatType: "mirror",
                                                __framer__loopTransition: vm,
                                                __perspectiveFX: !1,
                                                __targetOpacity: 1,
                                                background: {
                                                    alt: "",
                                                    fit: "fill",
                                                    loading: "lazy",
                                                    pixelHeight: 600,
                                                    pixelWidth: 300,
                                                    sizes: "min((min((min(min(100vw, 2400px) - 80px, 1900px) - 80px) * 0.38, 600px) - 80px) * 0.875, 400px)",
                                                    src: new URL("https://framerusercontent.com/images/mvglhsrXE2NmW8fuMgeRWglgJGQ.gif").href,
                                                    srcSet: `${new URL("https://framerusercontent.com/images/mvglhsrXE2NmW8fuMgeRWglgJGQ.gif?scale-down-to=512").href} 256w, ${new URL("https://framerusercontent.com/images/mvglhsrXE2NmW8fuMgeRWglgJGQ.gif").href} 300w`
                                                },
                                                className: "framer-12bvop8",
                                                "data-border": !0,
                                                "data-framer-name": "VideoHolder",
                                                name: "VideoHolder",
                                                transformTemplate: U,
                                                children: e(ge, {
                                                    className: "framer-7ppe40-container",
                                                    children: e(He, {
                                                        backgroundColor: "rgba(0, 0, 0, 0)",
                                                        borderRadius: 0,
                                                        bottomLeftRadius: 0,
                                                        bottomRightRadius: 0,
                                                        canvasPlay: !0,
                                                        controls: !1,
                                                        height: "100%",
                                                        id: "IhF8bnNeA",
                                                        isMixedBorderRadius: !1,
                                                        layoutId: "IhF8bnNeA",
                                                        loop: !0,
                                                        muted: !0,
                                                        objectFit: "cover",
                                                        playing: !0,
                                                        posterEnabled: !1,
                                                        srcFile: new URL("https://framerusercontent.com/modules/assets/3YpCV77D981AKWChiCkHvs9KLI~EcjKuRsJhNexHvuvF5wOgjNEL7l-eeVP93-L8tq6WtY.mp4").href,
                                                        srcType: "Upload",
                                                        srcUrl: "https://assets.mixkit.co/videos/preview/mixkit-ice-cream-glass-of-red-soda-5094-small.mp4",
                                                        startTime: 0,
                                                        style: {
                                                            width: "100%"
                                                        },
                                                        topLeftRadius: 0,
                                                        topRightRadius: 0,
                                                        volume: 25,
                                                        width: "100%"
                                                    })
                                                })
                                            })
                                        })
                                    }), z() && e(n.div, {
                                        className: "framer-h2r2le hidden-93rnvh hidden-g5j6vk"
                                    }), d(n.div, {
                                        className: "framer-1772y9t",
                                        children: [e(R, {
                                            breakpoint: s,
                                            overrides: {
                                                iRL2gYRtC: {
                                                    children: e(F, {
                                                        children: e("h2", {
                                                            className: "framer-styles-preset-1wml6uu",
                                                            "data-styles-preset": "fVxnimdqP",
                                                            style: {
                                                                "--framer-text-alignment": "center"
                                                            },
                                                            children: "Engage in Turn-Based Combat with Cunning Enemies"
                                                        })
                                                    })
                                                },
                                                sH43zL1oy: {
                                                    children: e(F, {
                                                        children: e("h2", {
                                                            className: "framer-styles-preset-1wml6uu",
                                                            "data-styles-preset": "fVxnimdqP",
                                                            style: {
                                                                "--framer-text-alignment": "center"
                                                            },
                                                            children: "Engage in Turn-Based Combat with Cunning Enemies"
                                                        })
                                                    })
                                                }
                                            },
                                            children: e(D, {
                                                __fromCanvasComponent: !0,
                                                children: e(F, {
                                                    children: e("h2", {
                                                        className: "framer-styles-preset-1wml6uu",
                                                        "data-styles-preset": "fVxnimdqP",
                                                        children: "Engage in Turn-Based Combat with Cunning Enemies"
                                                    })
                                                }),
                                                className: "framer-1b3upbb",
                                                verticalAlignment: "top",
                                                withExternalLayout: !0
                                            })
                                        }), e(R, {
                                            breakpoint: s,
                                            overrides: {
                                                iRL2gYRtC: {
                                                    children: e(F, {
                                                        children: e("p", {
                                                            className: "framer-styles-preset-21ogod",
                                                            "data-styles-preset": "xZndidUCt",
                                                            style: {
                                                                "--framer-text-alignment": "center"
                                                            },
                                                            children: "Defeat devious enemies in traditional turn-based combat style. Utilize your charged weapons to dominate battles and progress through the devastated world."
                                                        })
                                                    })
                                                },
                                                sH43zL1oy: {
                                                    children: e(F, {
                                                        children: e("p", {
                                                            className: "framer-styles-preset-21ogod",
                                                            "data-styles-preset": "xZndidUCt",
                                                            style: {
                                                                "--framer-text-alignment": "center"
                                                            },
                                                            children: "Defeat devious enemies in traditional turn-based combat style. Utilize your charged weapons to dominate battles and progress through the devastated world."
                                                        })
                                                    })
                                                }
                                            },
                                            children: e(D, {
                                                __fromCanvasComponent: !0,
                                                children: e(F, {
                                                    children: e("p", {
                                                        className: "framer-styles-preset-21ogod",
                                                        "data-styles-preset": "xZndidUCt",
                                                        children: "Defeat devious enemies in traditional turn-based combat style. Utilize your charged weapons to dominate battles and progress through the devastated world."
                                                    })
                                                }),
                                                className: "framer-1lle64f",
                                                verticalAlignment: "top",
                                                withExternalLayout: !0
                                            })
                                        })]
                                    })]
                                }), A() && e(n.div, {
                                    className: "framer-lz6fmn hidden-72rtr7 hidden-58buo2"
                                })]
                            }), e(n.div, {
                                className: "framer-1mj298k",
                                "data-framer-name": "separator",
                                name: "separator",
                                children: e(n.div, {
                                    className: "framer-y6lzce"
                                })
                            }), e(R, {
                                breakpoint: s,
                                overrides: {
                                    sH43zL1oy: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 1397,
                                            intrinsicWidth: 2051,
                                            loading: "lazy",
                                            pixelHeight: 1397,
                                            pixelWidth: 2051,
                                            sizes: "min(min(100vw, 2400px), 2000px)",
                                            src: new URL("https://framerusercontent.com/images/SCQS9MgCjZOz5vkMcCnvKjw5bU.jpg").href,
                                            srcSet: `${new URL("https://framerusercontent.com/images/SCQS9MgCjZOz5vkMcCnvKjw5bU.jpg?scale-down-to=512").href} 512w, ${new URL("https://framerusercontent.com/images/SCQS9MgCjZOz5vkMcCnvKjw5bU.jpg?scale-down-to=1024").href} 1024w, ${new URL("https://framerusercontent.com/images/SCQS9MgCjZOz5vkMcCnvKjw5bU.jpg?scale-down-to=2048").href} 2048w, ${new URL("https://framerusercontent.com/images/SCQS9MgCjZOz5vkMcCnvKjw5bU.jpg").href} 2051w`
                                        }
                                    }
                                },
                                children: e(M, {
                                    as: "header",
                                    background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 1397,
                                        intrinsicWidth: 2051,
                                        loading: "lazy",
                                        pixelHeight: 1397,
                                        pixelWidth: 2051,
                                        sizes: "min(min(100vw, 2400px), 2000px)",
                                        src: new URL("https://framerusercontent.com/images/JY0E6c0D8N2UUmurdjZE84BY.png").href,
                                        srcSet: `${new URL("https://framerusercontent.com/images/JY0E6c0D8N2UUmurdjZE84BY.png?scale-down-to=512").href} 512w, ${new URL("https://framerusercontent.com/images/JY0E6c0D8N2UUmurdjZE84BY.png?scale-down-to=1024").href} 1024w, ${new URL("https://framerusercontent.com/images/JY0E6c0D8N2UUmurdjZE84BY.png?scale-down-to=2048").href} 2048w, ${new URL("https://framerusercontent.com/images/JY0E6c0D8N2UUmurdjZE84BY.png").href} 2051w`
                                    },
                                    className: "framer-eh5h2a",
                                    "data-framer-name": "Screens carousel",
                                    id: we,
                                    name: "Screens carousel",
                                    ref: Ee,
                                    children: d(n.div, {
                                        className: "framer-1yt1rq5",
                                        children: [d(n.div, {
                                            className: "framer-1oi9ksi",
                                            children: [e(D, {
                                                __fromCanvasComponent: !0,
                                                children: e(F, {
                                                    children: e("h2", {
                                                        className: "framer-styles-preset-1wml6uu",
                                                        "data-styles-preset": "fVxnimdqP",
                                                        style: {
                                                            "--framer-text-alignment": "center"
                                                        },
                                                        children: "Explore a World Filled with Intrigue & Adventure"
                                                    })
                                                }),
                                                className: "framer-1lt6rq",
                                                verticalAlignment: "top",
                                                withExternalLayout: !0
                                            }), e(D, {
                                                __fromCanvasComponent: !0,
                                                children: e(F, {
                                                    children: e("p", {
                                                        className: "framer-styles-preset-21ogod",
                                                        "data-styles-preset": "xZndidUCt",
                                                        style: {
                                                            "--framer-text-alignment": "center"
                                                        },
                                                        children: "Delve deeper and deeper into the intriguing world of Disco Dungeon as you discover new dungeons and uncover hidden secrets. Your adventure awaits!"
                                                    })
                                                }),
                                                className: "framer-16hxcuo",
                                                verticalAlignment: "top",
                                                withExternalLayout: !0
                                            })]
                                        }), e(ge, {
                                            className: "framer-uguw1a-container",
                                            children: e(R, {
                                                breakpoint: s,
                                                overrides: {
                                                    sH43zL1oy: {
                                                        itemAmount: 1
                                                    }
                                                },
                                                children: e(ie, {
                                                    alignment: "center",
                                                    arrowOptions: {
                                                        arrowFill: "rgba(0, 0, 0, 0)",
                                                        arrowGap: 10,
                                                        arrowPadding: 10,
                                                        arrowPaddingBottom: 0,
                                                        arrowPaddingLeft: 0,
                                                        arrowPaddingRight: 0,
                                                        arrowPaddingTop: 0,
                                                        arrowPosition: "auto",
                                                        arrowRadius: 40,
                                                        arrowShouldFadeIn: !1,
                                                        arrowShouldSpace: !0,
                                                        arrowSize: 70,
                                                        showMouseControls: !0
                                                    },
                                                    autoPlayControl: !0,
                                                    borderRadius: 40,
                                                    direction: "left",
                                                    dragControl: !0,
                                                    effectsOptions: {
                                                        effectsHover: !0,
                                                        effectsOpacity: 1,
                                                        effectsPerspective: 1200,
                                                        effectsRotate: 0,
                                                        effectsScale: 1
                                                    },
                                                    fadeOptions: {
                                                        fadeAlpha: 0,
                                                        fadeContent: !0,
                                                        fadeInset: 12,
                                                        fadeWidth: 1,
                                                        overflow: !1
                                                    },
                                                    gap: 80,
                                                    height: "100%",
                                                    id: "UW5ASrDF5",
                                                    intervalControl: 5,
                                                    itemAmount: 3,
                                                    layoutId: "UW5ASrDF5",
                                                    padding: 90,
                                                    paddingBottom: 0,
                                                    paddingLeft: 80,
                                                    paddingPerSide: !0,
                                                    paddingRight: 80,
                                                    paddingTop: 0,
                                                    progressOptions: {
                                                        dotsActiveOpacity: 1,
                                                        dotsBackground: "rgba(0, 0, 0, 0.2)",
                                                        dotsBlur: 0,
                                                        dotsFill: "rgb(255, 255, 255)",
                                                        dotsGap: 10,
                                                        dotsInset: 10,
                                                        dotSize: 10,
                                                        dotsOpacity: .5,
                                                        dotsPadding: 10,
                                                        dotsRadius: 50,
                                                        showProgressDots: !0
                                                    },
                                                    slots: [e(M, {
                                                        background: {
                                                            alt: "",
                                                            fit: "fit",
                                                            intrinsicHeight: 540.5,
                                                            intrinsicWidth: 269.5,
                                                            pixelHeight: 1081,
                                                            pixelWidth: 539,
                                                            sizes: "270px",
                                                            src: new URL("https://framerusercontent.com/images/J8DvL32toDIxy0p3farYJ272eos.png?scale-down-to=1024").href,
                                                            srcSet: `${new URL("https://framerusercontent.com/images/J8DvL32toDIxy0p3farYJ272eos.png?scale-down-to=512").href} 255w, ${new URL("https://framerusercontent.com/images/J8DvL32toDIxy0p3farYJ272eos.png?scale-down-to=1024").href} 510w, ${new URL("https://framerusercontent.com/images/J8DvL32toDIxy0p3farYJ272eos.png").href} 539w`
                                                        },
                                                        className: "framer-1gc3ysn",
                                                        "data-framer-name": "game_screenshot_3",
                                                        name: "game_screenshot_3"
                                                    }), e(M, {
                                                        background: {
                                                            alt: "",
                                                            fit: "fit",
                                                            intrinsicHeight: 542.5,
                                                            intrinsicWidth: 270.5,
                                                            pixelHeight: 1085,
                                                            pixelWidth: 541,
                                                            sizes: "271px",
                                                            src: new URL("https://framerusercontent.com/images/eJHiPmZiXOoqJ8m0ARhG9tuvCW8.png?scale-down-to=1024").href,
                                                            srcSet: `${new URL("https://framerusercontent.com/images/eJHiPmZiXOoqJ8m0ARhG9tuvCW8.png?scale-down-to=512").href} 255w, ${new URL("https://framerusercontent.com/images/eJHiPmZiXOoqJ8m0ARhG9tuvCW8.png?scale-down-to=1024").href} 510w, ${new URL("https://framerusercontent.com/images/eJHiPmZiXOoqJ8m0ARhG9tuvCW8.png").href} 541w`
                                                        },
                                                        className: "framer-lhfg8",
                                                        "data-framer-name": "game_screenshot_7",
                                                        name: "game_screenshot_7"
                                                    }), e(M, {
                                                        background: {
                                                            alt: "",
                                                            fit: "fit",
                                                            intrinsicHeight: 540.5,
                                                            intrinsicWidth: 270,
                                                            pixelHeight: 1081,
                                                            pixelWidth: 540,
                                                            sizes: "270px",
                                                            src: new URL("https://framerusercontent.com/images/sbw4007yZjfIyUSEk2FVD7NcCg.png?scale-down-to=1024").href,
                                                            srcSet: `${new URL("https://framerusercontent.com/images/sbw4007yZjfIyUSEk2FVD7NcCg.png?scale-down-to=512").href} 255w, ${new URL("https://framerusercontent.com/images/sbw4007yZjfIyUSEk2FVD7NcCg.png?scale-down-to=1024").href} 511w, ${new URL("https://framerusercontent.com/images/sbw4007yZjfIyUSEk2FVD7NcCg.png").href} 540w`
                                                        },
                                                        className: "framer-c71kr7",
                                                        "data-framer-name": "game_screenshot_1",
                                                        name: "game_screenshot_1"
                                                    }), e(M, {
                                                        background: {
                                                            alt: "",
                                                            fit: "fit",
                                                            intrinsicHeight: 540.5,
                                                            intrinsicWidth: 272,
                                                            pixelHeight: 1081,
                                                            pixelWidth: 544,
                                                            sizes: "272px",
                                                            src: new URL("https://framerusercontent.com/images/77BZCNmDN3UlN6dvbvZPGow5BM.png?scale-down-to=1024").href,
                                                            srcSet: `${new URL("https://framerusercontent.com/images/77BZCNmDN3UlN6dvbvZPGow5BM.png?scale-down-to=512").href} 257w, ${new URL("https://framerusercontent.com/images/77BZCNmDN3UlN6dvbvZPGow5BM.png?scale-down-to=1024").href} 515w, ${new URL("https://framerusercontent.com/images/77BZCNmDN3UlN6dvbvZPGow5BM.png").href} 544w`
                                                        },
                                                        className: "framer-pcg2v2",
                                                        "data-framer-name": "game_screenshot_9",
                                                        name: "game_screenshot_9"
                                                    }), e(M, {
                                                        background: {
                                                            alt: "",
                                                            fit: "fit",
                                                            intrinsicHeight: 540,
                                                            intrinsicWidth: 271,
                                                            pixelHeight: 1080,
                                                            pixelWidth: 542,
                                                            sizes: "271px",
                                                            src: new URL("https://framerusercontent.com/images/J6bIQk9frzv8MPpzXbBA2CRogS8.png?scale-down-to=1024").href,
                                                            srcSet: `${new URL("https://framerusercontent.com/images/J6bIQk9frzv8MPpzXbBA2CRogS8.png?scale-down-to=512").href} 256w, ${new URL("https://framerusercontent.com/images/J6bIQk9frzv8MPpzXbBA2CRogS8.png?scale-down-to=1024").href} 513w, ${new URL("https://framerusercontent.com/images/J6bIQk9frzv8MPpzXbBA2CRogS8.png").href} 542w`
                                                        },
                                                        className: "framer-kn3er8",
                                                        "data-framer-name": "game_screenshot_4",
                                                        name: "game_screenshot_4"
                                                    }), e(M, {
                                                        background: {
                                                            alt: "",
                                                            fit: "fit",
                                                            intrinsicHeight: 541,
                                                            intrinsicWidth: 270,
                                                            pixelHeight: 1082,
                                                            pixelWidth: 540,
                                                            sizes: "270px",
                                                            src: new URL("https://framerusercontent.com/images/PYXQBjVH7q8r9ntAHJVpHiIV0A.png?scale-down-to=1024").href,
                                                            srcSet: `${new URL("https://framerusercontent.com/images/PYXQBjVH7q8r9ntAHJVpHiIV0A.png?scale-down-to=512").href} 255w, ${new URL("https://framerusercontent.com/images/PYXQBjVH7q8r9ntAHJVpHiIV0A.png?scale-down-to=1024").href} 511w, ${new URL("https://framerusercontent.com/images/PYXQBjVH7q8r9ntAHJVpHiIV0A.png").href} 540w`
                                                        },
                                                        className: "framer-ve5ss1",
                                                        "data-framer-name": "game_screenshot_5",
                                                        name: "game_screenshot_5"
                                                    }), e(M, {
                                                        background: {
                                                            alt: "",
                                                            fit: "fit",
                                                            intrinsicHeight: 539.5,
                                                            intrinsicWidth: 268,
                                                            pixelHeight: 1079,
                                                            pixelWidth: 536,
                                                            sizes: "268px",
                                                            src: new URL("https://framerusercontent.com/images/mqOKOxCD6xGqoXoIsh4jKMZwn8.png?scale-down-to=1024").href,
                                                            srcSet: `${new URL("https://framerusercontent.com/images/mqOKOxCD6xGqoXoIsh4jKMZwn8.png?scale-down-to=512").href} 254w, ${new URL("https://framerusercontent.com/images/mqOKOxCD6xGqoXoIsh4jKMZwn8.png?scale-down-to=1024").href} 508w, ${new URL("https://framerusercontent.com/images/mqOKOxCD6xGqoXoIsh4jKMZwn8.png").href} 536w`
                                                        },
                                                        className: "framer-1odh1rq",
                                                        "data-framer-name": "game_screenshot_8",
                                                        name: "game_screenshot_8"
                                                    }), e(M, {
                                                        background: {
                                                            alt: "",
                                                            fit: "fit",
                                                            intrinsicHeight: 539.5,
                                                            intrinsicWidth: 270,
                                                            pixelHeight: 1079,
                                                            pixelWidth: 540,
                                                            sizes: "270px",
                                                            src: new URL("https://framerusercontent.com/images/yHTatph51EiQKlwoUGLScwlxQ.png?scale-down-to=1024").href,
                                                            srcSet: `${new URL("https://framerusercontent.com/images/yHTatph51EiQKlwoUGLScwlxQ.png?scale-down-to=512").href} 256w, ${new URL("https://framerusercontent.com/images/yHTatph51EiQKlwoUGLScwlxQ.png?scale-down-to=1024").href} 512w, ${new URL("https://framerusercontent.com/images/yHTatph51EiQKlwoUGLScwlxQ.png").href} 540w`
                                                        },
                                                        className: "framer-1jurvue",
                                                        "data-framer-name": "game_screenshot_2",
                                                        name: "game_screenshot_2"
                                                    }), e(M, {
                                                        background: {
                                                            alt: "",
                                                            fit: "fit",
                                                            intrinsicHeight: 540.5,
                                                            intrinsicWidth: 270,
                                                            pixelHeight: 1081,
                                                            pixelWidth: 540,
                                                            sizes: "270px",
                                                            src: new URL("https://framerusercontent.com/images/LZaFq9XWaOsmASavHGgaXeLOBs.png?scale-down-to=1024").href,
                                                            srcSet: `${new URL("https://framerusercontent.com/images/LZaFq9XWaOsmASavHGgaXeLOBs.png?scale-down-to=512").href} 255w, ${new URL("https://framerusercontent.com/images/LZaFq9XWaOsmASavHGgaXeLOBs.png?scale-down-to=1024").href} 511w, ${new URL("https://framerusercontent.com/images/LZaFq9XWaOsmASavHGgaXeLOBs.png").href} 540w`
                                                        },
                                                        className: "framer-huqcou",
                                                        "data-framer-name": "game_screenshot_6",
                                                        name: "game_screenshot_6"
                                                    })],
                                                    startFrom: 0,
                                                    style: {
                                                        height: "100%",
                                                        maxWidth: "100%",
                                                        width: "100%"
                                                    },
                                                    transitionControl: {
                                                        damping: 40,
                                                        stiffness: 200,
                                                        type: "spring"
                                                    },
                                                    width: "100%"
                                                })
                                            })
                                        })]
                                    })
                                })
                            }), e(n.div, {
                                className: "framer-l1nxfv",
                                "data-framer-name": "separator",
                                id: Ge,
                                name: "separator",
                                ref: Ce,
                                children: e(n.div, {
                                    className: "framer-spkhsj"
                                })
                            }), e(R, {
                                breakpoint: s,
                                overrides: {
                                    iRL2gYRtC: {
                                        background: void 0
                                    },
                                    sH43zL1oy: {
                                        background: void 0
                                    }
                                },
                                children: d(n.header, {
                                    background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 1385,
                                        intrinsicWidth: 2848,
                                        loading: "lazy",
                                        pixelHeight: 1385,
                                        pixelWidth: 2848,
                                        sizes: "min(100vw, 2400px)",
                                        src: new URL("https://framerusercontent.com/images/0kjclzaE6d1JunKfnpZKtJxNaiM.jpg").href,
                                        srcSet: `${new URL("https://framerusercontent.com/images/0kjclzaE6d1JunKfnpZKtJxNaiM.jpg?scale-down-to=512").href} 512w, ${new URL("https://framerusercontent.com/images/0kjclzaE6d1JunKfnpZKtJxNaiM.jpg?scale-down-to=1024").href} 1024w, ${new URL("https://framerusercontent.com/images/0kjclzaE6d1JunKfnpZKtJxNaiM.jpg?scale-down-to=2048").href} 2048w, ${new URL("https://framerusercontent.com/images/0kjclzaE6d1JunKfnpZKtJxNaiM.jpg").href} 2848w`
                                    },
                                    className: "framer-1qg7i7f",
                                    "data-framer-name": "Power Section",
                                    id: be,
                                    name: "Power Section",
                                    ref: T,
                                    children: [d(n.div, {
                                        className: "framer-gjaub5",
                                        children: [e(R, {
                                            breakpoint: s,
                                            overrides: {
                                                iRL2gYRtC: {
                                                    children: e(F, {
                                                        children: e("h2", {
                                                            className: "framer-styles-preset-1wml6uu",
                                                            "data-styles-preset": "fVxnimdqP",
                                                            style: {
                                                                "--framer-text-alignment": "center"
                                                            },
                                                            children: "Unlock a Powerful Arsenal of Weapons"
                                                        })
                                                    })
                                                },
                                                sH43zL1oy: {
                                                    children: e(F, {
                                                        children: e("h2", {
                                                            className: "framer-styles-preset-1wml6uu",
                                                            "data-styles-preset": "fVxnimdqP",
                                                            style: {
                                                                "--framer-text-alignment": "center"
                                                            },
                                                            children: "Unlock a Powerful Arsenal of Weapons"
                                                        })
                                                    })
                                                }
                                            },
                                            children: e(D, {
                                                __fromCanvasComponent: !0,
                                                children: e(F, {
                                                    children: e("h2", {
                                                        className: "framer-styles-preset-1wml6uu",
                                                        "data-styles-preset": "fVxnimdqP",
                                                        children: "Unlock a Powerful Arsenal of Weapons"
                                                    })
                                                }),
                                                className: "framer-e3old7",
                                                verticalAlignment: "top",
                                                withExternalLayout: !0
                                            })
                                        }), e(R, {
                                            breakpoint: s,
                                            overrides: {
                                                iRL2gYRtC: {
                                                    children: e(F, {
                                                        children: e("p", {
                                                            className: "framer-styles-preset-21ogod",
                                                            "data-styles-preset": "xZndidUCt",
                                                            style: {
                                                                "--framer-text-alignment": "center"
                                                            },
                                                            children: "Collect gems throughout your journey to unlock new weapons, giving you the edge you need to conquer the challenges ahead."
                                                        })
                                                    })
                                                },
                                                sH43zL1oy: {
                                                    children: e(F, {
                                                        children: e("p", {
                                                            className: "framer-styles-preset-21ogod",
                                                            "data-styles-preset": "xZndidUCt",
                                                            style: {
                                                                "--framer-text-alignment": "center"
                                                            },
                                                            children: "Collect gems throughout your journey to unlock new weapons, giving you the edge you need to conquer the challenges ahead."
                                                        })
                                                    })
                                                }
                                            },
                                            children: e(D, {
                                                __fromCanvasComponent: !0,
                                                children: e(F, {
                                                    children: e("p", {
                                                        className: "framer-styles-preset-21ogod",
                                                        "data-styles-preset": "xZndidUCt",
                                                        children: "Collect gems throughout your journey to unlock new weapons, giving you the edge you need to conquer the challenges ahead."
                                                    })
                                                }),
                                                className: "framer-1la159y",
                                                verticalAlignment: "top",
                                                withExternalLayout: !0
                                            })
                                        })]
                                    }), z() && e(n.div, {
                                        className: "framer-hb6kb1 hidden-93rnvh hidden-g5j6vk"
                                    }), d(n.div, {
                                        className: "framer-1ouy69k",
                                        "data-framer-name": "powers",
                                        name: "powers",
                                        children: [e(R, {
                                            breakpoint: s,
                                            overrides: {
                                                iRL2gYRtC: {
                                                    background: {
                                                        alt: "",
                                                        fit: "fit",
                                                        intrinsicHeight: 607,
                                                        intrinsicWidth: 576,
                                                        loading: "lazy",
                                                        pixelHeight: 607,
                                                        pixelWidth: 576,
                                                        sizes: "min(min((min(100vw, 2400px) - 80px) * 0.7, 600px) * 0.51, 300px)",
                                                        src: new URL("https://framerusercontent.com/images/lg4TFXdKSHPMOUAXhGSGpZS1I.png").href,
                                                        srcSet: `${new URL("https://framerusercontent.com/images/lg4TFXdKSHPMOUAXhGSGpZS1I.png?scale-down-to=512").href} 485w, ${new URL("https://framerusercontent.com/images/lg4TFXdKSHPMOUAXhGSGpZS1I.png").href} 576w`
                                                    }
                                                },
                                                sH43zL1oy: {
                                                    background: {
                                                        alt: "",
                                                        fit: "fit",
                                                        intrinsicHeight: 607,
                                                        intrinsicWidth: 576,
                                                        loading: "lazy",
                                                        pixelHeight: 607,
                                                        pixelWidth: 576,
                                                        sizes: "min(min(min(100vw, 2400px) - 80px, 600px) * 0.51, 300px)",
                                                        src: new URL("https://framerusercontent.com/images/lg4TFXdKSHPMOUAXhGSGpZS1I.png").href,
                                                        srcSet: `${new URL("https://framerusercontent.com/images/lg4TFXdKSHPMOUAXhGSGpZS1I.png?scale-down-to=512").href} 485w, ${new URL("https://framerusercontent.com/images/lg4TFXdKSHPMOUAXhGSGpZS1I.png").href} 576w`
                                                    }
                                                }
                                            },
                                            children: e(I, {
                                                __framer__animate: {
                                                    transition: _m
                                                },
                                                __framer__animateOnce: !1,
                                                __framer__enter: me,
                                                __framer__loop: Cm,
                                                __framer__loopEffectEnabled: !0,
                                                __framer__loopRepeatDelay: 0,
                                                __framer__loopRepeatType: "mirror",
                                                __framer__loopTransition: ta,
                                                __framer__styleAppearEffectEnabled: !0,
                                                __framer__targets: [{
                                                    ref: Ce,
                                                    target: "animate"
                                                }],
                                                __framer__threshold: 0,
                                                __perspectiveFX: !1,
                                                __targetOpacity: 1,
                                                background: {
                                                    alt: "",
                                                    fit: "fit",
                                                    intrinsicHeight: 607,
                                                    intrinsicWidth: 576,
                                                    loading: "lazy",
                                                    pixelHeight: 607,
                                                    pixelWidth: 576,
                                                    sizes: "min(min((min(100vw, 2400px) - 80px) * 0.4, 600px) * 0.51, 300px)",
                                                    src: new URL("https://framerusercontent.com/images/lg4TFXdKSHPMOUAXhGSGpZS1I.png").href,
                                                    srcSet: `${new URL("https://framerusercontent.com/images/lg4TFXdKSHPMOUAXhGSGpZS1I.png?scale-down-to=512").href} 485w, ${new URL("https://framerusercontent.com/images/lg4TFXdKSHPMOUAXhGSGpZS1I.png").href} 576w`
                                                },
                                                className: "framer-1vgipyk",
                                                "data-framer-name": "power4",
                                                name: "power4",
                                                transformTemplate: st
                                            })
                                        }), e(R, {
                                            breakpoint: s,
                                            overrides: {
                                                iRL2gYRtC: {
                                                    background: {
                                                        alt: "",
                                                        fit: "fit",
                                                        intrinsicHeight: 602,
                                                        intrinsicWidth: 577,
                                                        loading: "lazy",
                                                        pixelHeight: 602,
                                                        pixelWidth: 577,
                                                        sizes: "min(min((min(100vw, 2400px) - 80px) * 0.7, 600px) * 0.51, 320px)",
                                                        src: new URL("https://framerusercontent.com/images/joD1D8B0EW0sivv4DTS5ZSZHpR0.png").href,
                                                        srcSet: `${new URL("https://framerusercontent.com/images/joD1D8B0EW0sivv4DTS5ZSZHpR0.png?scale-down-to=512").href} 490w, ${new URL("https://framerusercontent.com/images/joD1D8B0EW0sivv4DTS5ZSZHpR0.png").href} 577w`
                                                    }
                                                },
                                                sH43zL1oy: {
                                                    background: {
                                                        alt: "",
                                                        fit: "fit",
                                                        intrinsicHeight: 602,
                                                        intrinsicWidth: 577,
                                                        loading: "lazy",
                                                        pixelHeight: 602,
                                                        pixelWidth: 577,
                                                        sizes: "min(min(min(100vw, 2400px) - 80px, 600px) * 0.51, 320px)",
                                                        src: new URL("https://framerusercontent.com/images/joD1D8B0EW0sivv4DTS5ZSZHpR0.png").href,
                                                        srcSet: `${new URL("https://framerusercontent.com/images/joD1D8B0EW0sivv4DTS5ZSZHpR0.png?scale-down-to=512").href} 490w, ${new URL("https://framerusercontent.com/images/joD1D8B0EW0sivv4DTS5ZSZHpR0.png").href} 577w`
                                                    }
                                                }
                                            },
                                            children: e(I, {
                                                __framer__animate: {
                                                    transition: Sm
                                                },
                                                __framer__animateOnce: !1,
                                                __framer__enter: me,
                                                __framer__loop: Lm,
                                                __framer__loopEffectEnabled: !0,
                                                __framer__loopRepeatDelay: 0,
                                                __framer__loopRepeatType: "mirror",
                                                __framer__loopTransition: ta,
                                                __framer__styleAppearEffectEnabled: !0,
                                                __framer__targets: [{
                                                    ref: Ce,
                                                    target: "animate"
                                                }],
                                                __framer__threshold: 0,
                                                __perspectiveFX: !1,
                                                __targetOpacity: 1,
                                                background: {
                                                    alt: "",
                                                    fit: "fit",
                                                    intrinsicHeight: 602,
                                                    intrinsicWidth: 577,
                                                    loading: "lazy",
                                                    pixelHeight: 602,
                                                    pixelWidth: 577,
                                                    sizes: "min(min((min(100vw, 2400px) - 80px) * 0.4, 600px) * 0.51, 320px)",
                                                    src: new URL("https://framerusercontent.com/images/joD1D8B0EW0sivv4DTS5ZSZHpR0.png").href,
                                                    srcSet: `${new URL("https://framerusercontent.com/images/joD1D8B0EW0sivv4DTS5ZSZHpR0.png?scale-down-to=512").href} 490w, ${new URL("https://framerusercontent.com/images/joD1D8B0EW0sivv4DTS5ZSZHpR0.png").href} 577w`
                                                },
                                                className: "framer-1kasqe",
                                                "data-framer-name": "power3",
                                                name: "power3",
                                                transformTemplate: st
                                            })
                                        }), e(R, {
                                            breakpoint: s,
                                            overrides: {
                                                iRL2gYRtC: {
                                                    background: {
                                                        alt: "",
                                                        fit: "fit",
                                                        intrinsicHeight: 676,
                                                        intrinsicWidth: 631,
                                                        loading: "lazy",
                                                        pixelHeight: 676,
                                                        pixelWidth: 631,
                                                        sizes: "min(min((min(100vw, 2400px) - 80px) * 0.7, 600px) * 0.49, 300px)",
                                                        src: new URL("https://framerusercontent.com/images/w7ySosVAmLlge1hLfSsahANl8.png").href,
                                                        srcSet: `${new URL("https://framerusercontent.com/images/w7ySosVAmLlge1hLfSsahANl8.png?scale-down-to=512").href} 477w, ${new URL("https://framerusercontent.com/images/w7ySosVAmLlge1hLfSsahANl8.png").href} 631w`
                                                    }
                                                },
                                                sH43zL1oy: {
                                                    background: {
                                                        alt: "",
                                                        fit: "fit",
                                                        intrinsicHeight: 676,
                                                        intrinsicWidth: 631,
                                                        loading: "lazy",
                                                        pixelHeight: 676,
                                                        pixelWidth: 631,
                                                        sizes: "min(min(min(100vw, 2400px) - 80px, 600px) * 0.49, 300px)",
                                                        src: new URL("https://framerusercontent.com/images/w7ySosVAmLlge1hLfSsahANl8.png").href,
                                                        srcSet: `${new URL("https://framerusercontent.com/images/w7ySosVAmLlge1hLfSsahANl8.png?scale-down-to=512").href} 477w, ${new URL("https://framerusercontent.com/images/w7ySosVAmLlge1hLfSsahANl8.png").href} 631w`
                                                    }
                                                }
                                            },
                                            children: e(I, {
                                                __framer__animate: {
                                                    transition: Fm
                                                },
                                                __framer__animateOnce: !1,
                                                __framer__enter: me,
                                                __framer__loop: Rm,
                                                __framer__loopEffectEnabled: !0,
                                                __framer__loopRepeatDelay: 0,
                                                __framer__loopRepeatType: "mirror",
                                                __framer__loopTransition: km,
                                                __framer__styleAppearEffectEnabled: !0,
                                                __framer__targets: [{
                                                    ref: Ce,
                                                    target: "animate"
                                                }],
                                                __framer__threshold: 0,
                                                __perspectiveFX: !1,
                                                __targetOpacity: 1,
                                                background: {
                                                    alt: "",
                                                    fit: "fit",
                                                    intrinsicHeight: 676,
                                                    intrinsicWidth: 631,
                                                    loading: "lazy",
                                                    pixelHeight: 676,
                                                    pixelWidth: 631,
                                                    sizes: "min(min((min(100vw, 2400px) - 80px) * 0.4, 600px) * 0.49, 300px)",
                                                    src: new URL("https://framerusercontent.com/images/w7ySosVAmLlge1hLfSsahANl8.png").href,
                                                    srcSet: `${new URL("https://framerusercontent.com/images/w7ySosVAmLlge1hLfSsahANl8.png?scale-down-to=512").href} 477w, ${new URL("https://framerusercontent.com/images/w7ySosVAmLlge1hLfSsahANl8.png").href} 631w`
                                                },
                                                className: "framer-1q8we4i",
                                                "data-framer-name": "power2",
                                                name: "power2",
                                                transformTemplate: st
                                            })
                                        }), e(R, {
                                            breakpoint: s,
                                            overrides: {
                                                iRL2gYRtC: {
                                                    background: {
                                                        alt: "",
                                                        fit: "fit",
                                                        intrinsicHeight: 650,
                                                        intrinsicWidth: 682,
                                                        loading: "lazy",
                                                        pixelHeight: 650,
                                                        pixelWidth: 682,
                                                        sizes: "min(min((min(100vw, 2400px) - 80px) * 0.7, 600px) * 0.55, 320px)",
                                                        src: new URL("https://framerusercontent.com/images/8D3fnV6wqVcPRsPdgIpcYpQkhXo.png").href,
                                                        srcSet: `${new URL("https://framerusercontent.com/images/8D3fnV6wqVcPRsPdgIpcYpQkhXo.png?scale-down-to=512").href} 512w, ${new URL("https://framerusercontent.com/images/8D3fnV6wqVcPRsPdgIpcYpQkhXo.png").href} 682w`
                                                    }
                                                },
                                                sH43zL1oy: {
                                                    background: {
                                                        alt: "",
                                                        fit: "fit",
                                                        intrinsicHeight: 650,
                                                        intrinsicWidth: 682,
                                                        loading: "lazy",
                                                        pixelHeight: 650,
                                                        pixelWidth: 682,
                                                        sizes: "min(min(min(100vw, 2400px) - 80px, 600px) * 0.55, 320px)",
                                                        src: new URL("https://framerusercontent.com/images/8D3fnV6wqVcPRsPdgIpcYpQkhXo.png").href,
                                                        srcSet: `${new URL("https://framerusercontent.com/images/8D3fnV6wqVcPRsPdgIpcYpQkhXo.png?scale-down-to=512").href} 512w, ${new URL("https://framerusercontent.com/images/8D3fnV6wqVcPRsPdgIpcYpQkhXo.png").href} 682w`
                                                    }
                                                }
                                            },
                                            children: e(I, {
                                                __framer__animate: {
                                                    transition: lt
                                                },
                                                __framer__animateOnce: !1,
                                                __framer__enter: me,
                                                __framer__loop: Mm,
                                                __framer__loopEffectEnabled: !0,
                                                __framer__loopRepeatDelay: 0,
                                                __framer__loopRepeatType: "mirror",
                                                __framer__loopTransition: Vi,
                                                __framer__styleAppearEffectEnabled: !0,
                                                __framer__targets: [{
                                                    ref: Ce,
                                                    target: "animate"
                                                }],
                                                __framer__threshold: 0,
                                                __perspectiveFX: !1,
                                                __targetOpacity: 1,
                                                background: {
                                                    alt: "",
                                                    fit: "fit",
                                                    intrinsicHeight: 650,
                                                    intrinsicWidth: 682,
                                                    loading: "lazy",
                                                    pixelHeight: 650,
                                                    pixelWidth: 682,
                                                    sizes: "min(min((min(100vw, 2400px) - 80px) * 0.4, 600px) * 0.55, 320px)",
                                                    src: new URL("https://framerusercontent.com/images/8D3fnV6wqVcPRsPdgIpcYpQkhXo.png").href,
                                                    srcSet: `${new URL("https://framerusercontent.com/images/8D3fnV6wqVcPRsPdgIpcYpQkhXo.png?scale-down-to=512").href} 512w, ${new URL("https://framerusercontent.com/images/8D3fnV6wqVcPRsPdgIpcYpQkhXo.png").href} 682w`
                                                },
                                                className: "framer-1450m23",
                                                "data-framer-name": "power1",
                                                name: "power1",
                                                transformTemplate: st
                                            })
                                        })]
                                    })]
                                })
                            }), d(n.header, {
                                className: "framer-1dciqhg",
                                "data-framer-name": "memories section",
                                id: sr,
                                name: "memories section",
                                ref: Z,
                                children: [z() && e(n.div, {
                                    className: "framer-l9chw8 hidden-93rnvh hidden-g5j6vk"
                                }), d(Ye, {
                                    __framer__loop: Nm,
                                    __framer__loopEffectEnabled: !0,
                                    __framer__loopRepeatDelay: 0,
                                    __framer__loopRepeatType: "mirror",
                                    __framer__loopTransition: zm,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    className: "framer-1xd11nn",
                                    "data-framer-name": "Memories",
                                    name: "Memories",
                                    transformTemplate: U,
                                    children: [d(n.div, {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 487,
                                            intrinsicWidth: 487,
                                            loading: "lazy",
                                            pixelHeight: 487,
                                            pixelWidth: 487,
                                            src: new URL("https://framerusercontent.com/images/iQy1mVSlwYYxURtFGOHSaZ5aLDA.jpg").href
                                        },
                                        className: "framer-18luaee",
                                        "data-framer-name": "discchard",
                                        name: "discchard",
                                        transformTemplate: U,
                                        children: [e(I, {
                                            __framer__animate: {
                                                transition: Pi
                                            },
                                            __framer__animateOnce: !1,
                                            __framer__enter: me,
                                            __framer__exit: jm,
                                            __framer__styleAppearEffectEnabled: !0,
                                            __framer__targets: [{
                                                ref: Z,
                                                target: "animate"
                                            }],
                                            __framer__threshold: .5,
                                            __perspectiveFX: !1,
                                            __targetOpacity: 1,
                                            background: {
                                                alt: "",
                                                fit: "fit",
                                                intrinsicHeight: 120,
                                                intrinsicWidth: 237,
                                                loading: "lazy",
                                                pixelHeight: 120,
                                                pixelWidth: 237,
                                                src: new URL("https://framerusercontent.com/images/zcIetWv2LyI7zvNqGWDrdAcUYU.png").href
                                            },
                                            className: "framer-1mxjesg",
                                            "data-framer-name": "disc_chard_6",
                                            name: "disc_chard_6",
                                            transformTemplate: U
                                        }), e(I, {
                                            __framer__animate: {
                                                transition: Di
                                            },
                                            __framer__animateOnce: !1,
                                            __framer__enter: me,
                                            __framer__exit: Vm,
                                            __framer__styleAppearEffectEnabled: !0,
                                            __framer__targets: [{
                                                ref: Z,
                                                target: "animate"
                                            }],
                                            __framer__threshold: .5,
                                            __perspectiveFX: !1,
                                            __targetOpacity: 1,
                                            background: {
                                                alt: "",
                                                fit: "fit",
                                                intrinsicHeight: 120,
                                                intrinsicWidth: 195,
                                                loading: "lazy",
                                                pixelHeight: 120,
                                                pixelWidth: 195,
                                                src: new URL("https://framerusercontent.com/images/Zy7BB2bFjoAaPVQyhUiGado5PI.png").href
                                            },
                                            className: "framer-r4qd4o",
                                            "data-framer-name": "disc_chard_17",
                                            name: "disc_chard_17",
                                            transformTemplate: U
                                        }), e(I, {
                                            __framer__animate: {
                                                transition: Ii
                                            },
                                            __framer__animateOnce: !1,
                                            __framer__enter: me,
                                            __framer__exit: Um,
                                            __framer__styleAppearEffectEnabled: !0,
                                            __framer__targets: [{
                                                ref: Z,
                                                target: "animate"
                                            }],
                                            __framer__threshold: .5,
                                            __perspectiveFX: !1,
                                            __targetOpacity: 1,
                                            background: {
                                                alt: "",
                                                fit: "fit",
                                                intrinsicHeight: 124,
                                                intrinsicWidth: 165,
                                                loading: "lazy",
                                                pixelHeight: 124,
                                                pixelWidth: 165,
                                                src: new URL("https://framerusercontent.com/images/3atr2hHdIFJXhcS2NhcXaRSavU.png").href
                                            },
                                            className: "framer-nntfbq",
                                            "data-framer-name": "disc_chard_2",
                                            name: "disc_chard_2",
                                            transformTemplate: U
                                        }), e(I, {
                                            __framer__animate: {
                                                transition: qi
                                            },
                                            __framer__animateOnce: !1,
                                            __framer__enter: me,
                                            __framer__exit: Wm,
                                            __framer__styleAppearEffectEnabled: !0,
                                            __framer__targets: [{
                                                ref: Z,
                                                target: "animate"
                                            }],
                                            __framer__threshold: .5,
                                            __perspectiveFX: !1,
                                            __targetOpacity: 1,
                                            background: {
                                                alt: "",
                                                fit: "fit",
                                                intrinsicHeight: 97,
                                                intrinsicWidth: 206,
                                                loading: "lazy",
                                                pixelHeight: 97,
                                                pixelWidth: 206,
                                                src: new URL("https://framerusercontent.com/images/NOcLHpjgik1tsyc76TplEmRUFps.png").href
                                            },
                                            className: "framer-1i8fgho",
                                            "data-framer-name": "disc_chard_16",
                                            name: "disc_chard_16",
                                            transformTemplate: U
                                        }), e(I, {
                                            __framer__animate: {
                                                transition: Ai
                                            },
                                            __framer__animateOnce: !1,
                                            __framer__enter: me,
                                            __framer__exit: Tm,
                                            __framer__styleAppearEffectEnabled: !0,
                                            __framer__targets: [{
                                                ref: Z,
                                                target: "animate"
                                            }],
                                            __framer__threshold: .5,
                                            __perspectiveFX: !1,
                                            __targetOpacity: 1,
                                            background: {
                                                alt: "",
                                                fit: "fit",
                                                intrinsicHeight: 158,
                                                intrinsicWidth: 169,
                                                loading: "lazy",
                                                pixelHeight: 158,
                                                pixelWidth: 169,
                                                src: new URL("https://framerusercontent.com/images/O05EzxWwB9upjTBiAg686r7bH1o.png").href
                                            },
                                            className: "framer-zwnuty",
                                            "data-framer-name": "disc_chard_10",
                                            name: "disc_chard_10",
                                            transformTemplate: U
                                        }), e(I, {
                                            __framer__animate: {
                                                transition: Oi
                                            },
                                            __framer__animateOnce: !1,
                                            __framer__enter: me,
                                            __framer__exit: Hm,
                                            __framer__styleAppearEffectEnabled: !0,
                                            __framer__targets: [{
                                                ref: Z,
                                                target: "animate"
                                            }],
                                            __framer__threshold: .5,
                                            __perspectiveFX: !1,
                                            __targetOpacity: 1,
                                            background: {
                                                alt: "",
                                                fit: "fit",
                                                intrinsicHeight: 193,
                                                intrinsicWidth: 120,
                                                loading: "lazy",
                                                pixelHeight: 193,
                                                pixelWidth: 120,
                                                src: new URL("https://framerusercontent.com/images/yLHmMen28CBW68DUcg7qTK6bLcM.png").href
                                            },
                                            className: "framer-7yiz0z",
                                            "data-framer-name": "disc_chard_12",
                                            name: "disc_chard_12",
                                            transformTemplate: U
                                        }), e(I, {
                                            __framer__animate: {
                                                transition: Yi
                                            },
                                            __framer__animateOnce: !1,
                                            __framer__enter: me,
                                            __framer__exit: Em,
                                            __framer__styleAppearEffectEnabled: !0,
                                            __framer__targets: [{
                                                ref: Z,
                                                target: "animate"
                                            }],
                                            __framer__threshold: .5,
                                            __perspectiveFX: !1,
                                            __targetOpacity: 1,
                                            background: {
                                                alt: "",
                                                fit: "fit",
                                                intrinsicHeight: 299,
                                                intrinsicWidth: 122,
                                                loading: "lazy",
                                                pixelHeight: 299,
                                                pixelWidth: 122,
                                                src: new URL("https://framerusercontent.com/images/mZbetBHXgy5LtmGVVTC9cxQUA70.png").href
                                            },
                                            className: "framer-130765u",
                                            "data-framer-name": "disc_chard_14",
                                            name: "disc_chard_14",
                                            transformTemplate: U
                                        }), e(I, {
                                            __framer__animate: {
                                                transition: Bi
                                            },
                                            __framer__animateOnce: !1,
                                            __framer__enter: me,
                                            __framer__exit: Pm,
                                            __framer__styleAppearEffectEnabled: !0,
                                            __framer__targets: [{
                                                ref: Z,
                                                target: "animate"
                                            }],
                                            __framer__threshold: .5,
                                            __perspectiveFX: !1,
                                            __targetOpacity: 1,
                                            background: {
                                                alt: "",
                                                fit: "fit",
                                                intrinsicHeight: 125,
                                                intrinsicWidth: 130,
                                                loading: "lazy",
                                                pixelHeight: 125,
                                                pixelWidth: 130,
                                                src: new URL("https://framerusercontent.com/images/Gqoykrm4LDvtDfU0Pr5FVJooC8.png").href
                                            },
                                            className: "framer-1rfni6l",
                                            "data-framer-name": "disc_chard_9",
                                            name: "disc_chard_9",
                                            transformTemplate: U
                                        }), e(I, {
                                            __framer__animate: {
                                                transition: Xi
                                            },
                                            __framer__animateOnce: !1,
                                            __framer__enter: me,
                                            __framer__exit: Dm,
                                            __framer__styleAppearEffectEnabled: !0,
                                            __framer__targets: [{
                                                ref: Z,
                                                target: "animate"
                                            }],
                                            __framer__threshold: .5,
                                            __perspectiveFX: !1,
                                            __targetOpacity: 1,
                                            background: {
                                                alt: "",
                                                fit: "fit",
                                                intrinsicHeight: 105,
                                                intrinsicWidth: 138,
                                                loading: "lazy",
                                                pixelHeight: 105,
                                                pixelWidth: 138,
                                                src: new URL("https://framerusercontent.com/images/AyLm7W0VVKx3GG503RT3CGoh958.png").href
                                            },
                                            className: "framer-10kh6oy",
                                            "data-framer-name": "disc_chard_8",
                                            name: "disc_chard_8",
                                            transformTemplate: U
                                        }), e(I, {
                                            __framer__animate: {
                                                transition: Gi
                                            },
                                            __framer__animateOnce: !1,
                                            __framer__enter: me,
                                            __framer__exit: Im,
                                            __framer__styleAppearEffectEnabled: !0,
                                            __framer__targets: [{
                                                ref: Z,
                                                target: "animate"
                                            }],
                                            __framer__threshold: .5,
                                            __perspectiveFX: !1,
                                            __targetOpacity: 1,
                                            background: {
                                                alt: "",
                                                fit: "fit",
                                                intrinsicHeight: 223,
                                                intrinsicWidth: 188,
                                                loading: "lazy",
                                                pixelHeight: 223,
                                                pixelWidth: 188,
                                                src: new URL("https://framerusercontent.com/images/fMkoNd0XS8naFxWrxONq7JZTUk.png").href
                                            },
                                            className: "framer-hlnpb8",
                                            "data-framer-name": "disc_chard_7",
                                            name: "disc_chard_7",
                                            transformTemplate: qm
                                        }), e(I, {
                                            __framer__animate: {
                                                transition: Zi
                                            },
                                            __framer__animateOnce: !1,
                                            __framer__enter: me,
                                            __framer__exit: Am,
                                            __framer__styleAppearEffectEnabled: !0,
                                            __framer__targets: [{
                                                ref: Z,
                                                target: "animate"
                                            }],
                                            __framer__threshold: .5,
                                            __perspectiveFX: !1,
                                            __targetOpacity: 1,
                                            background: {
                                                alt: "",
                                                fit: "fit",
                                                intrinsicHeight: 175,
                                                intrinsicWidth: 231,
                                                loading: "lazy",
                                                pixelHeight: 175,
                                                pixelWidth: 231,
                                                src: new URL("https://framerusercontent.com/images/WHQMwc2v01Cgf6xksaEUDwjjtkU.png").href
                                            },
                                            className: "framer-eyzuv5",
                                            "data-framer-name": "disc_chard_4",
                                            name: "disc_chard_4",
                                            transformTemplate: U
                                        }), e(I, {
                                            __framer__animate: {
                                                transition: Qi
                                            },
                                            __framer__animateOnce: !1,
                                            __framer__enter: me,
                                            __framer__exit: Om,
                                            __framer__styleAppearEffectEnabled: !0,
                                            __framer__targets: [{
                                                ref: Z,
                                                target: "animate"
                                            }],
                                            __framer__threshold: .5,
                                            __perspectiveFX: !1,
                                            __targetOpacity: 1,
                                            background: {
                                                alt: "",
                                                fit: "fit",
                                                intrinsicHeight: 205,
                                                intrinsicWidth: 146,
                                                loading: "lazy",
                                                pixelHeight: 205,
                                                pixelWidth: 146,
                                                src: new URL("https://framerusercontent.com/images/xoy96zFrsv6KgUc5zyPDjwKvAho.png").href
                                            },
                                            className: "framer-18fwi1b",
                                            "data-framer-name": "disc_chard_18",
                                            name: "disc_chard_18",
                                            transformTemplate: U
                                        }), e(I, {
                                            __framer__animate: {
                                                transition: $i
                                            },
                                            __framer__animateOnce: !1,
                                            __framer__enter: me,
                                            __framer__exit: Ym,
                                            __framer__styleAppearEffectEnabled: !0,
                                            __framer__targets: [{
                                                ref: Z,
                                                target: "animate"
                                            }],
                                            __framer__threshold: .5,
                                            __perspectiveFX: !1,
                                            __targetOpacity: 1,
                                            background: {
                                                alt: "",
                                                fit: "fit",
                                                intrinsicHeight: 248,
                                                intrinsicWidth: 232,
                                                loading: "lazy",
                                                pixelHeight: 248,
                                                pixelWidth: 232,
                                                src: new URL("https://framerusercontent.com/images/kFMnfmoRpi45boimb1FavaAzGQ.png").href
                                            },
                                            className: "framer-88h933",
                                            "data-framer-name": "disc_chard_5",
                                            name: "disc_chard_5",
                                            transformTemplate: U
                                        }), e(I, {
                                            __framer__animate: {
                                                transition: Ji
                                            },
                                            __framer__animateOnce: !1,
                                            __framer__enter: me,
                                            __framer__exit: Bm,
                                            __framer__styleAppearEffectEnabled: !0,
                                            __framer__targets: [{
                                                ref: Z,
                                                target: "animate"
                                            }],
                                            __framer__threshold: .5,
                                            __perspectiveFX: !1,
                                            __targetOpacity: 1,
                                            background: {
                                                alt: "",
                                                fit: "fit",
                                                intrinsicHeight: 184,
                                                intrinsicWidth: 362,
                                                loading: "lazy",
                                                pixelHeight: 184,
                                                pixelWidth: 362,
                                                src: new URL("https://framerusercontent.com/images/TNeSk5qV13PNmm2VKLiLSJYgkAw.png").href
                                            },
                                            className: "framer-1z0ri4m",
                                            "data-framer-name": "disc_chard_13",
                                            name: "disc_chard_13",
                                            transformTemplate: U
                                        })]
                                    }), e(I, {
                                        __framer__loop: Xm,
                                        __framer__loopEffectEnabled: !0,
                                        __framer__loopRepeatDelay: 0,
                                        __framer__loopRepeatType: "loop",
                                        __framer__loopTransition: Fi,
                                        __perspectiveFX: !1,
                                        __targetOpacity: .7,
                                        background: {
                                            alt: "",
                                            fit: "fit",
                                            intrinsicHeight: 487,
                                            intrinsicWidth: 487,
                                            loading: "lazy",
                                            pixelHeight: 487,
                                            pixelWidth: 487,
                                            src: new URL("https://framerusercontent.com/images/iQy1mVSlwYYxURtFGOHSaZ5aLDA.jpg").href
                                        },
                                        className: "framer-nszbql",
                                        "data-framer-name": "disc",
                                        name: "disc",
                                        transformTemplate: U
                                    })]
                                }), z() && e(n.div, {
                                    className: "framer-1rnkjp3 hidden-93rnvh hidden-g5j6vk"
                                }), d(n.div, {
                                    className: "framer-1sbkav5",
                                    children: [e(R, {
                                        breakpoint: s,
                                        overrides: {
                                            iRL2gYRtC: {
                                                children: e(F, {
                                                    children: e("h2", {
                                                        className: "framer-styles-preset-1wml6uu",
                                                        "data-styles-preset": "fVxnimdqP",
                                                        style: {
                                                            "--framer-text-alignment": "center"
                                                        },
                                                        children: "Unravel the Mystery of Your Lost Memories"
                                                    })
                                                })
                                            },
                                            sH43zL1oy: {
                                                children: e(F, {
                                                    children: e("h2", {
                                                        className: "framer-styles-preset-1wml6uu",
                                                        "data-styles-preset": "fVxnimdqP",
                                                        style: {
                                                            "--framer-text-alignment": "center"
                                                        },
                                                        children: "Unravel the Mystery of Your Lost Memories"
                                                    })
                                                })
                                            }
                                        },
                                        children: e(D, {
                                            __fromCanvasComponent: !0,
                                            children: e(F, {
                                                children: e("h2", {
                                                    className: "framer-styles-preset-1wml6uu",
                                                    "data-styles-preset": "fVxnimdqP",
                                                    children: "Unravel the Mystery of Your Lost Memories"
                                                })
                                            }),
                                            className: "framer-24lz14",
                                            verticalAlignment: "top",
                                            withExternalLayout: !0
                                        })
                                    }), e(R, {
                                        breakpoint: s,
                                        overrides: {
                                            iRL2gYRtC: {
                                                children: e(F, {
                                                    children: e("p", {
                                                        className: "framer-styles-preset-21ogod",
                                                        "data-styles-preset": "xZndidUCt",
                                                        style: {
                                                            "--framer-text-alignment": "center"
                                                        },
                                                        children: "Recover your lost memories by finding hidden memory shards along the way. Piece together your troubled past and uncover the truth behind your character's story."
                                                    })
                                                })
                                            },
                                            sH43zL1oy: {
                                                children: e(F, {
                                                    children: e("p", {
                                                        className: "framer-styles-preset-21ogod",
                                                        "data-styles-preset": "xZndidUCt",
                                                        style: {
                                                            "--framer-text-alignment": "center"
                                                        },
                                                        children: "Recover your lost memories by finding hidden memory shards along the way. Piece together your troubled past and uncover the truth behind your character's story."
                                                    })
                                                })
                                            }
                                        },
                                        children: e(D, {
                                            __fromCanvasComponent: !0,
                                            children: e(F, {
                                                children: e("p", {
                                                    className: "framer-styles-preset-21ogod",
                                                    "data-styles-preset": "xZndidUCt",
                                                    children: "Recover your lost memories by finding hidden memory shards along the way. Piece together your troubled past and uncover the truth behind your character's story."
                                                })
                                            }),
                                            className: "framer-btvsv5",
                                            verticalAlignment: "top",
                                            withExternalLayout: !0
                                        })
                                    })]
                                })]
                            }), e(n.div, {
                                className: "framer-19uah7m",
                                "data-framer-name": "separator",
                                name: "separator",
                                children: e(n.div, {
                                    className: "framer-gce430"
                                })
                            }), e(n.div, {
                                className: "framer-hfbmqz",
                                "data-framer-name": "subscribe top separator",
                                id: Ze,
                                name: "subscribe top separator",
                                ref: Se,
                                children: d(n.div, {
                                    className: "framer-5o8k8p",
                                    transformTemplate: ot,
                                    children: [z() && e(M, {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 240,
                                            intrinsicWidth: 606,
                                            loading: "lazy",
                                            pixelHeight: 240,
                                            pixelWidth: 606,
                                            sizes: "max(max(min(100vw, 2400px), 600px) * 0.28, 300px)",
                                            src: new URL("https://framerusercontent.com/images/tsha41NMxGv4A1DKTkq3u582xqM.png").href,
                                            srcSet: `${new URL("https://framerusercontent.com/images/tsha41NMxGv4A1DKTkq3u582xqM.png?scale-down-to=512").href} 512w, ${new URL("https://framerusercontent.com/images/tsha41NMxGv4A1DKTkq3u582xqM.png").href} 606w`
                                        },
                                        className: "framer-1rpi3n4 hidden-93rnvh hidden-g5j6vk"
                                    }), e(M, {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 197,
                                            intrinsicWidth: 2043,
                                            loading: "lazy",
                                            pixelHeight: 197,
                                            pixelWidth: 2043,
                                            sizes: "max(min(100vw, 2400px), 600px)",
                                            src: new URL("https://framerusercontent.com/images/QAcydx3ngynYanEWGL8EwDWjXo.png").href,
                                            srcSet: `${new URL("https://framerusercontent.com/images/QAcydx3ngynYanEWGL8EwDWjXo.png?scale-down-to=512").href} 512w, ${new URL("https://framerusercontent.com/images/QAcydx3ngynYanEWGL8EwDWjXo.png?scale-down-to=1024").href} 1024w, ${new URL("https://framerusercontent.com/images/QAcydx3ngynYanEWGL8EwDWjXo.png").href} 2043w`
                                        },
                                        className: "framer-2vome2"
                                    })]
                                })
                            })]
                        }), e(n.header, {
                            className: "framer-19r1i4c",
                            "data-framer-name": "newsletter",
                            id: Ne,
                            name: "newsletter",
                            ref: le,
                            children: d(n.div, {
                                className: "framer-1c8abkz",
                                children: [e(n.div, {
                                    className: "framer-4y22m9",
                                    transformTemplate: ot,
                                    children: d(Ye, {
                                        __framer__loop: Zm,
                                        __framer__loopEffectEnabled: !0,
                                        __framer__loopRepeatDelay: 0,
                                        __framer__loopRepeatType: "loop",
                                        __framer__loopTransition: Gm,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        className: "framer-1eb5n0l",
                                        children: [e(M, {
                                            background: {
                                                alt: "",
                                                fit: "stretch",
                                                intrinsicHeight: 458,
                                                intrinsicWidth: 17,
                                                loading: "lazy",
                                                pixelHeight: 458,
                                                pixelWidth: 17,
                                                src: new URL("https://framerusercontent.com/images/E30vHiqC6wcmF0Rr7mWHo723WQ.png").href
                                            },
                                            className: "framer-1m4bgxe",
                                            "data-framer-name": "rainbow",
                                            name: "rainbow"
                                        }), e(M, {
                                            background: {
                                                alt: "",
                                                fit: "stretch",
                                                intrinsicHeight: 458,
                                                intrinsicWidth: 17,
                                                loading: "lazy",
                                                pixelHeight: 458,
                                                pixelWidth: 17,
                                                src: new URL("https://framerusercontent.com/images/E30vHiqC6wcmF0Rr7mWHo723WQ.png").href
                                            },
                                            className: "framer-yd80bd",
                                            "data-framer-name": "rainbow",
                                            name: "rainbow"
                                        })]
                                    })
                                }), e(n.div, {
                                    className: "framer-754ekz",
                                    children: d(Ye, {
                                        __framer__animate: {
                                            transition: lt
                                        },
                                        __framer__animateOnce: !0,
                                        __framer__enter: Ri,
                                        __framer__exit: Mi,
                                        __framer__styleAppearEffectEnabled: !0,
                                        __framer__threshold: .5,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        className: "framer-3e2m0k",
                                        transformTemplate: U,
                                        children: [d(n.div, {
                                            className: "framer-164l20x",
                                            children: [e(D, {
                                                __fromCanvasComponent: !0,
                                                children: e(F, {
                                                    children: d("h2", {
                                                        className: "framer-styles-preset-62l6bb",
                                                        "data-styles-preset": "qwVKP2Dy8",
                                                        style: {
                                                            "--framer-text-alignment": "center",
                                                            "--framer-text-color": "rgb(30, 17, 39)"
                                                        },
                                                        children: ["Sign up for Important Updates on ", e("br", {}), "Disco Dungeon"]
                                                    })
                                                }),
                                                className: "framer-7qq70d",
                                                verticalAlignment: "top",
                                                withExternalLayout: !0
                                            }), e(D, {
                                                __fromCanvasComponent: !0,
                                                children: e(F, {
                                                    children: d("p", {
                                                        className: "framer-styles-preset-21ogod",
                                                        "data-styles-preset": "xZndidUCt",
                                                        style: {
                                                            "--framer-text-alignment": "center",
                                                            "--framer-text-color": "rgb(71, 29, 104)"
                                                        },
                                                        children: ["Stay in the loop! Be the first to know when the Disco Dungeon demo is available and when we release Early Access. ", e("br", {}), "Sign up for updates and join the ranks of those eager to experience this groundbreaking game. ", e("br", {}), "The Disco Dungeon awaits!"]
                                                    })
                                                }),
                                                className: "framer-kc1u3x",
                                                verticalAlignment: "top",
                                                withExternalLayout: !0
                                            })]
                                        }), e(ge, {
                                            className: "framer-p552lo-container",
                                            children: e(R, {
                                                breakpoint: s,
                                                overrides: {
                                                    sH43zL1oy: {
                                                        borderRadius: 16,
                                                        bottomLeftRadius: 16,
                                                        bottomRightRadius: 16,
                                                        fontSize: 16,
                                                        gap: 10,
                                                        padding: 16,
                                                        paddingBottom: 16,
                                                        paddingLeft: 16,
                                                        paddingRight: 16,
                                                        paddingTop: 16,
                                                        topLeftRadius: 16,
                                                        topRightRadius: 16
                                                    }
                                                },
                                                children: e(Dt, {
                                                    borderRadius: 18,
                                                    bottomLeftRadius: 18,
                                                    bottomRightRadius: 18,
                                                    button: {
                                                        color: "rgb(255, 255, 255)",
                                                        fill: "rgb(255, 0, 115)",
                                                        fontWeight: 600,
                                                        label: "Sign Up"
                                                    },
                                                    font: !1,
                                                    fontFamily: "Inter",
                                                    fontSize: 26,
                                                    fontWeight: 400,
                                                    gap: 15,
                                                    height: "100%",
                                                    id: "VxOAQBgBB",
                                                    input: {
                                                        color: "rgb(255, 255, 255)",
                                                        error: "rgb(238, 68, 68)",
                                                        fill: "rgb(0, 0, 0)",
                                                        placeholder: "Enter your email",
                                                        placeholderColor: "rgba(255, 255, 255, 0.48)",
                                                        value: ""
                                                    },
                                                    isMixedBorderRadius: !1,
                                                    layout: "horizontal",
                                                    layoutId: "VxOAQBgBB",
                                                    padding: 17,
                                                    paddingBottom: 17,
                                                    paddingLeft: 17,
                                                    paddingPerSide: !1,
                                                    paddingRight: 17,
                                                    paddingTop: 17,
                                                    style: {
                                                        width: "100%"
                                                    },
                                                    topLeftRadius: 18,
                                                    topRightRadius: 18,
                                                    url: "https://gmail.us12.list-manage.com/subscribe/post?u=c6133016167c11f790e0b2416&amp;id=22fc2c433a&amp;f_id=005841e0f0",
                                                    width: "100%"
                                                })
                                            })
                                        })]
                                    })
                                })]
                            })
                        }), d(n.div, {
                            className: "framer-cp519e",
                            "data-framer-name": "subscribe bottom separator",
                            id: Me,
                            name: "subscribe bottom separator",
                            ref: Qe,
                            children: [e(n.div, {
                                className: "framer-11v74j0"
                            }), d(n.div, {
                                className: "framer-yhkhmu",
                                children: [e(R, {
                                    breakpoint: s,
                                    overrides: {
                                        iRL2gYRtC: {
                                            background: {
                                                alt: "",
                                                fit: "stretch",
                                                intrinsicHeight: 163,
                                                intrinsicWidth: 2042,
                                                loading: "lazy",
                                                pixelHeight: 163,
                                                pixelWidth: 2042,
                                                sizes: "928px",
                                                src: new URL("https://framerusercontent.com/images/opeMy8f4MTQWoukE13NMxka8yNU.png").href,
                                                srcSet: `${new URL("https://framerusercontent.com/images/opeMy8f4MTQWoukE13NMxka8yNU.png?scale-down-to=512").href} 512w, ${new URL("https://framerusercontent.com/images/opeMy8f4MTQWoukE13NMxka8yNU.png?scale-down-to=1024").href} 1024w, ${new URL("https://framerusercontent.com/images/opeMy8f4MTQWoukE13NMxka8yNU.png").href} 2042w`
                                            }
                                        },
                                        sH43zL1oy: {
                                            background: {
                                                alt: "",
                                                fit: "stretch",
                                                intrinsicHeight: 163,
                                                intrinsicWidth: 2042,
                                                loading: "lazy",
                                                pixelHeight: 163,
                                                pixelWidth: 2042,
                                                sizes: "1018px",
                                                src: new URL("https://framerusercontent.com/images/opeMy8f4MTQWoukE13NMxka8yNU.png").href,
                                                srcSet: `${new URL("https://framerusercontent.com/images/opeMy8f4MTQWoukE13NMxka8yNU.png?scale-down-to=512").href} 512w, ${new URL("https://framerusercontent.com/images/opeMy8f4MTQWoukE13NMxka8yNU.png?scale-down-to=1024").href} 1024w, ${new URL("https://framerusercontent.com/images/opeMy8f4MTQWoukE13NMxka8yNU.png").href} 2042w`
                                            }
                                        }
                                    },
                                    children: e(M, {
                                        background: {
                                            alt: "",
                                            fit: "stretch",
                                            intrinsicHeight: 163,
                                            intrinsicWidth: 2042,
                                            loading: "lazy",
                                            pixelHeight: 163,
                                            pixelWidth: 2042,
                                            sizes: "2018px",
                                            src: new URL("https://framerusercontent.com/images/opeMy8f4MTQWoukE13NMxka8yNU.png").href,
                                            srcSet: `${new URL("https://framerusercontent.com/images/opeMy8f4MTQWoukE13NMxka8yNU.png?scale-down-to=512").href} 512w, ${new URL("https://framerusercontent.com/images/opeMy8f4MTQWoukE13NMxka8yNU.png?scale-down-to=1024").href} 1024w, ${new URL("https://framerusercontent.com/images/opeMy8f4MTQWoukE13NMxka8yNU.png").href} 2042w`
                                        },
                                        className: "framer-6e84c3"
                                    })
                                }), e(R, {
                                    breakpoint: s,
                                    overrides: {
                                        iRL2gYRtC: {
                                            background: {
                                                alt: "",
                                                fit: "stretch",
                                                intrinsicHeight: 163,
                                                intrinsicWidth: 2042,
                                                loading: "lazy",
                                                pixelHeight: 163,
                                                pixelWidth: 2042,
                                                sizes: "928px",
                                                src: new URL("https://framerusercontent.com/images/opeMy8f4MTQWoukE13NMxka8yNU.png").href,
                                                srcSet: `${new URL("https://framerusercontent.com/images/opeMy8f4MTQWoukE13NMxka8yNU.png?scale-down-to=512").href} 512w, ${new URL("https://framerusercontent.com/images/opeMy8f4MTQWoukE13NMxka8yNU.png?scale-down-to=1024").href} 1024w, ${new URL("https://framerusercontent.com/images/opeMy8f4MTQWoukE13NMxka8yNU.png").href} 2042w`
                                            }
                                        },
                                        sH43zL1oy: {
                                            background: {
                                                alt: "",
                                                fit: "stretch",
                                                intrinsicHeight: 163,
                                                intrinsicWidth: 2042,
                                                loading: "lazy",
                                                pixelHeight: 163,
                                                pixelWidth: 2042,
                                                sizes: "1018px",
                                                src: new URL("https://framerusercontent.com/images/opeMy8f4MTQWoukE13NMxka8yNU.png").href,
                                                srcSet: `${new URL("https://framerusercontent.com/images/opeMy8f4MTQWoukE13NMxka8yNU.png?scale-down-to=512").href} 512w, ${new URL("https://framerusercontent.com/images/opeMy8f4MTQWoukE13NMxka8yNU.png?scale-down-to=1024").href} 1024w, ${new URL("https://framerusercontent.com/images/opeMy8f4MTQWoukE13NMxka8yNU.png").href} 2042w`
                                            }
                                        }
                                    },
                                    children: e(M, {
                                        background: {
                                            alt: "",
                                            fit: "stretch",
                                            intrinsicHeight: 163,
                                            intrinsicWidth: 2042,
                                            loading: "lazy",
                                            pixelHeight: 163,
                                            pixelWidth: 2042,
                                            sizes: "2018px",
                                            src: new URL("https://framerusercontent.com/images/opeMy8f4MTQWoukE13NMxka8yNU.png").href,
                                            srcSet: `${new URL("https://framerusercontent.com/images/opeMy8f4MTQWoukE13NMxka8yNU.png?scale-down-to=512").href} 512w, ${new URL("https://framerusercontent.com/images/opeMy8f4MTQWoukE13NMxka8yNU.png?scale-down-to=1024").href} 1024w, ${new URL("https://framerusercontent.com/images/opeMy8f4MTQWoukE13NMxka8yNU.png").href} 2042w`
                                        },
                                        className: "framer-18a9rib"
                                    })
                                }), e(R, {
                                    breakpoint: s,
                                    overrides: {
                                        iRL2gYRtC: {
                                            background: {
                                                alt: "",
                                                fit: "stretch",
                                                intrinsicHeight: 163,
                                                intrinsicWidth: 2042,
                                                loading: "lazy",
                                                pixelHeight: 163,
                                                pixelWidth: 2042,
                                                sizes: "928px",
                                                src: new URL("https://framerusercontent.com/images/opeMy8f4MTQWoukE13NMxka8yNU.png").href,
                                                srcSet: `${new URL("https://framerusercontent.com/images/opeMy8f4MTQWoukE13NMxka8yNU.png?scale-down-to=512").href} 512w, ${new URL("https://framerusercontent.com/images/opeMy8f4MTQWoukE13NMxka8yNU.png?scale-down-to=1024").href} 1024w, ${new URL("https://framerusercontent.com/images/opeMy8f4MTQWoukE13NMxka8yNU.png").href} 2042w`
                                            }
                                        },
                                        sH43zL1oy: {
                                            background: {
                                                alt: "",
                                                fit: "stretch",
                                                intrinsicHeight: 163,
                                                intrinsicWidth: 2042,
                                                loading: "lazy",
                                                pixelHeight: 163,
                                                pixelWidth: 2042,
                                                sizes: "1018px",
                                                src: new URL("https://framerusercontent.com/images/opeMy8f4MTQWoukE13NMxka8yNU.png").href,
                                                srcSet: `${new URL("https://framerusercontent.com/images/opeMy8f4MTQWoukE13NMxka8yNU.png?scale-down-to=512").href} 512w, ${new URL("https://framerusercontent.com/images/opeMy8f4MTQWoukE13NMxka8yNU.png?scale-down-to=1024").href} 1024w, ${new URL("https://framerusercontent.com/images/opeMy8f4MTQWoukE13NMxka8yNU.png").href} 2042w`
                                            }
                                        }
                                    },
                                    children: e(M, {
                                        background: {
                                            alt: "",
                                            fit: "stretch",
                                            intrinsicHeight: 163,
                                            intrinsicWidth: 2042,
                                            loading: "lazy",
                                            pixelHeight: 163,
                                            pixelWidth: 2042,
                                            sizes: "2018px",
                                            src: new URL("https://framerusercontent.com/images/opeMy8f4MTQWoukE13NMxka8yNU.png").href,
                                            srcSet: `${new URL("https://framerusercontent.com/images/opeMy8f4MTQWoukE13NMxka8yNU.png?scale-down-to=512").href} 512w, ${new URL("https://framerusercontent.com/images/opeMy8f4MTQWoukE13NMxka8yNU.png?scale-down-to=1024").href} 1024w, ${new URL("https://framerusercontent.com/images/opeMy8f4MTQWoukE13NMxka8yNU.png").href} 2042w`
                                        },
                                        className: "framer-1ljvo86"
                                    })
                                })]
                            })]
                        }), e(ge, {
                            className: "framer-ounsaw-container",
                            id: $e,
                            ref: yr,
                            children: e(R, {
                                breakpoint: s,
                                overrides: {
                                    iRL2gYRtC: {
                                        variant: "wSL38TwKg"
                                    },
                                    sH43zL1oy: {
                                        variant: "ognoranU5"
                                    }
                                },
                                children: e(ea, {
                                    height: "100%",
                                    id: "uiNTvyTv5",
                                    layoutId: "uiNTvyTv5",
                                    style: {
                                        width: "100%"
                                    },
                                    variant: "LI4GOMhIi",
                                    width: "100%"
                                })
                            })
                        }), e(R, {
                            breakpoint: s,
                            overrides: {
                                iRL2gYRtC: {
                                    transformTemplate: U
                                },
                                sH43zL1oy: {
                                    __framer__spring: void 0,
                                    __framer__transformTargets: [{
                                        target: {
                                            opacity: 1,
                                            rotate: 0,
                                            rotateX: 0,
                                            rotateY: 0,
                                            scale: 1,
                                            x: 0,
                                            y: 0
                                        }
                                    }, {
                                        target: {
                                            opacity: 1,
                                            rotate: 0,
                                            rotateX: 0,
                                            rotateY: 0,
                                            scale: .3,
                                            x: 0,
                                            y: -200
                                        }
                                    }],
                                    transformTemplate: U
                                }
                            },
                            children: d(Ye, {
                                __framer__loop: Qm,
                                __framer__loopEffectEnabled: !0,
                                __framer__loopRepeatDelay: 0,
                                __framer__loopRepeatType: "mirror",
                                __framer__loopTransition: Vi,
                                __framer__spring: {
                                    damping: 59,
                                    delay: 0,
                                    duration: .3,
                                    ease: [.44, 0, .56, 1],
                                    mass: .1,
                                    stiffness: 1e3,
                                    type: "spring"
                                },
                                __framer__styleTransformEffectEnabled: !0,
                                __framer__transformTargets: [{
                                    target: {
                                        opacity: 1,
                                        rotate: 0,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: 1,
                                        x: 0,
                                        y: 0
                                    }
                                }, {
                                    target: {
                                        opacity: 1,
                                        rotate: 0,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: .7,
                                        x: 0,
                                        y: -200
                                    }
                                }],
                                __framer__transformTrigger: "onScroll",
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: "framer-i6lwij",
                                "data-framer-name": "HeroContainer",
                                name: "HeroContainer",
                                transformTemplate: or,
                                children: [e(n.div, {
                                    className: "framer-c25zvs",
                                    "data-framer-name": "emptyFrame",
                                    name: "emptyFrame"
                                }), d(n.div, {
                                    className: "framer-1vu2gcj",
                                    "data-framer-name": "HeroWrapper",
                                    name: "HeroWrapper",
                                    children: [e(ge, {
                                        className: "framer-qkk51q-container",
                                        children: e(R, {
                                            breakpoint: s,
                                            overrides: {
                                                iRL2gYRtC: {
                                                    __framer__variantAppearEffectEnabled: void 0
                                                },
                                                sH43zL1oy: {
                                                    __framer__variantAppearEffectEnabled: void 0
                                                },
                                                tXpGpVfEc: {
                                                    __framer__targets: [{
                                                        ref: O,
                                                        target: "mdOybSR7d"
                                                    }, {
                                                        ref: _e,
                                                        target: "HmPCN96zn"
                                                    }]
                                                }
                                            },
                                            children: e(pm, {
                                                __framer__animateOnce: !1,
                                                __framer__targets: [{
                                                    ref: O,
                                                    target: "YDeVI0ARO"
                                                }, {
                                                    ref: _e,
                                                    target: "YDeVI0ARO"
                                                }],
                                                __framer__threshold: 0,
                                                __framer__variantAppearEffectEnabled: !0,
                                                height: "100%",
                                                id: "c_BmHHU_o",
                                                layoutId: "c_BmHHU_o",
                                                style: {
                                                    height: "100%",
                                                    width: "100%"
                                                },
                                                variant: "YDeVI0ARO",
                                                width: "100%"
                                            })
                                        })
                                    }), d(n.div, {
                                        className: "framer-cqzgxj",
                                        "data-framer-name": "Hero_container_in",
                                        name: "Hero_container_in",
                                        children: [d(n.div, {
                                            className: "framer-1em74sk",
                                            "data-framer-name": "HeroContainer",
                                            name: "HeroContainer",
                                            children: [e(Si, {
                                                __framer__loop: $m,
                                                __framer__loopEffectEnabled: !0,
                                                __framer__loopRepeatDelay: 0,
                                                __framer__loopRepeatType: "mirror",
                                                __framer__loopTransition: Ui,
                                                __perspectiveFX: !1,
                                                __targetOpacity: 1,
                                                className: "framer-1jvr13v-container",
                                                children: e(dm, {
                                                    __framer__animateOnce: !1,
                                                    __framer__targets: [{
                                                        ref: c,
                                                        target: "keENZYK4m"
                                                    }, {
                                                        ref: C,
                                                        target: "xxCzljjmh"
                                                    }, {
                                                        ref: b,
                                                        target: "xxCzljjmh"
                                                    }],
                                                    __framer__threshold: 0,
                                                    __framer__variantAppearEffectEnabled: !0,
                                                    height: "100%",
                                                    id: "x9kvJ1EQq",
                                                    layoutId: "x9kvJ1EQq",
                                                    style: {
                                                        height: "100%",
                                                        width: "100%"
                                                    },
                                                    variant: "keENZYK4m",
                                                    width: "100%"
                                                })
                                            }), e(n.div, {
                                                className: "framer-k448eq",
                                                "data-framer-name": "EmptyFrame",
                                                name: "EmptyFrame"
                                            })]
                                        }), d(n.div, {
                                            className: "framer-14w81th",
                                            "data-framer-name": "ShadowContainer",
                                            name: "ShadowContainer",
                                            children: [e(I, {
                                                __framer__loop: Jm,
                                                __framer__loopEffectEnabled: !0,
                                                __framer__loopRepeatDelay: 0,
                                                __framer__loopRepeatType: "mirror",
                                                __framer__loopTransition: Ui,
                                                __perspectiveFX: !1,
                                                __targetOpacity: .2,
                                                background: {
                                                    alt: "",
                                                    fit: "fit",
                                                    intrinsicHeight: 98,
                                                    intrinsicWidth: 222,
                                                    pixelHeight: 98,
                                                    pixelWidth: 222,
                                                    src: new URL("https://framerusercontent.com/images/boLC6fl1Vl20neFWT20vKyew1gM.png").href
                                                },
                                                className: "framer-si17cb",
                                                "data-framer-name": "HeroShadow",
                                                name: "HeroShadow"
                                            }), e(n.div, {
                                                className: "framer-ya935w",
                                                "data-framer-name": "EmptyFrame",
                                                name: "EmptyFrame"
                                            })]
                                        })]
                                    })]
                                })]
                            })
                        }), e(R, {
                            breakpoint: s,
                            overrides: {
                                sH43zL1oy: {
                                    __framer__transformTargets: [{
                                        target: {
                                            opacity: 0,
                                            rotate: 0,
                                            rotateX: 0,
                                            rotateY: 0,
                                            scale: 1,
                                            x: 0,
                                            y: 0
                                        }
                                    }, {
                                        target: {
                                            opacity: 1,
                                            rotate: 0,
                                            rotateX: 0,
                                            rotateY: 0,
                                            scale: .3,
                                            x: 0,
                                            y: 0
                                        }
                                    }]
                                }
                            },
                            children: d(Ye, {
                                __framer__styleTransformEffectEnabled: !0,
                                __framer__transformTargets: [{
                                    target: {
                                        opacity: 0,
                                        rotate: 0,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: 1,
                                        x: 0,
                                        y: 0
                                    }
                                }, {
                                    target: {
                                        opacity: 1,
                                        rotate: 0,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: .7,
                                        x: 0,
                                        y: 0
                                    }
                                }],
                                __framer__transformTrigger: "onScroll",
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: "framer-m40nf9",
                                "data-framer-name": "RainbowLight",
                                name: "RainbowLight",
                                transformTemplate: U,
                                children: [e(R, {
                                    breakpoint: s,
                                    overrides: {
                                        iRL2gYRtC: {
                                            background: {
                                                alt: "",
                                                fit: "fill",
                                                intrinsicHeight: 421.5,
                                                intrinsicWidth: 210.5,
                                                pixelHeight: 843,
                                                pixelWidth: 421,
                                                sizes: "min(18vw, 200px)",
                                                src: new URL("https://framerusercontent.com/images/NeXoQkcN9JVet8SVxLw1XQDWSyc.png?scale-down-to=512").href,
                                                srcSet: `${new URL("https://framerusercontent.com/images/NeXoQkcN9JVet8SVxLw1XQDWSyc.png?scale-down-to=512").href} 255w, ${new URL("https://framerusercontent.com/images/NeXoQkcN9JVet8SVxLw1XQDWSyc.png").href} 421w`
                                            }
                                        },
                                        sH43zL1oy: {
                                            background: {
                                                alt: "",
                                                fit: "fill",
                                                intrinsicHeight: 421.5,
                                                intrinsicWidth: 210.5,
                                                pixelHeight: 843,
                                                pixelWidth: 421,
                                                sizes: "min(52vw, 370px)",
                                                src: new URL("https://framerusercontent.com/images/NeXoQkcN9JVet8SVxLw1XQDWSyc.png?scale-down-to=512").href,
                                                srcSet: `${new URL("https://framerusercontent.com/images/NeXoQkcN9JVet8SVxLw1XQDWSyc.png?scale-down-to=512").href} 255w, ${new URL("https://framerusercontent.com/images/NeXoQkcN9JVet8SVxLw1XQDWSyc.png").href} 421w`
                                            }
                                        }
                                    },
                                    children: e(M, {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 421.5,
                                            intrinsicWidth: 210.5,
                                            pixelHeight: 843,
                                            pixelWidth: 421,
                                            sizes: "min(18vw, 370px)",
                                            src: new URL("https://framerusercontent.com/images/NeXoQkcN9JVet8SVxLw1XQDWSyc.png?scale-down-to=512").href,
                                            srcSet: `${new URL("https://framerusercontent.com/images/NeXoQkcN9JVet8SVxLw1XQDWSyc.png?scale-down-to=512").href} 255w, ${new URL("https://framerusercontent.com/images/NeXoQkcN9JVet8SVxLw1XQDWSyc.png").href} 421w`
                                        },
                                        className: "framer-7vqm0l",
                                        "data-framer-name": "RainbowLightBig",
                                        name: "RainbowLightBig"
                                    })
                                }), e(R, {
                                    breakpoint: s,
                                    overrides: {
                                        iRL2gYRtC: {
                                            background: {
                                                alt: "",
                                                fit: "fill",
                                                intrinsicHeight: 421.5,
                                                intrinsicWidth: 210.5,
                                                pixelHeight: 843,
                                                pixelWidth: 421,
                                                sizes: "calc(min(18vw, 200px) * 0.68)",
                                                src: new URL("https://framerusercontent.com/images/NeXoQkcN9JVet8SVxLw1XQDWSyc.png?scale-down-to=512").href,
                                                srcSet: `${new URL("https://framerusercontent.com/images/NeXoQkcN9JVet8SVxLw1XQDWSyc.png?scale-down-to=512").href} 255w, ${new URL("https://framerusercontent.com/images/NeXoQkcN9JVet8SVxLw1XQDWSyc.png").href} 421w`
                                            }
                                        },
                                        sH43zL1oy: {
                                            background: {
                                                alt: "",
                                                fit: "fill",
                                                intrinsicHeight: 421.5,
                                                intrinsicWidth: 210.5,
                                                pixelHeight: 843,
                                                pixelWidth: 421,
                                                sizes: "calc(min(52vw, 370px) * 0.68)",
                                                src: new URL("https://framerusercontent.com/images/NeXoQkcN9JVet8SVxLw1XQDWSyc.png?scale-down-to=512").href,
                                                srcSet: `${new URL("https://framerusercontent.com/images/NeXoQkcN9JVet8SVxLw1XQDWSyc.png?scale-down-to=512").href} 255w, ${new URL("https://framerusercontent.com/images/NeXoQkcN9JVet8SVxLw1XQDWSyc.png").href} 421w`
                                            }
                                        }
                                    },
                                    children: e(M, {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 421.5,
                                            intrinsicWidth: 210.5,
                                            pixelHeight: 843,
                                            pixelWidth: 421,
                                            sizes: "calc(min(18vw, 370px) * 0.68)",
                                            src: new URL("https://framerusercontent.com/images/NeXoQkcN9JVet8SVxLw1XQDWSyc.png?scale-down-to=512").href,
                                            srcSet: `${new URL("https://framerusercontent.com/images/NeXoQkcN9JVet8SVxLw1XQDWSyc.png?scale-down-to=512").href} 255w, ${new URL("https://framerusercontent.com/images/NeXoQkcN9JVet8SVxLw1XQDWSyc.png").href} 421w`
                                        },
                                        className: "framer-3fdpn6",
                                        "data-framer-name": "RainbowLightBig",
                                        name: "RainbowLightBig"
                                    })
                                })]
                            })
                        }), e(R, {
                            breakpoint: s,
                            overrides: {
                                sH43zL1oy: {
                                    __framer__spring: void 0,
                                    __framer__transformTargets: [{
                                        target: {
                                            opacity: 1,
                                            rotate: 0,
                                            rotateX: 0,
                                            rotateY: 0,
                                            scale: 1,
                                            x: 0,
                                            y: 0
                                        }
                                    }, {
                                        target: {
                                            opacity: 1,
                                            rotate: 0,
                                            rotateX: 0,
                                            rotateY: 0,
                                            scale: .3,
                                            x: 0,
                                            y: -400
                                        }
                                    }]
                                }
                            },
                            children: d(Ye, {
                                __framer__spring: {
                                    damping: 59,
                                    delay: 0,
                                    duration: .3,
                                    ease: [.44, 0, .56, 1],
                                    mass: .1,
                                    stiffness: 1e3,
                                    type: "spring"
                                },
                                __framer__styleTransformEffectEnabled: !0,
                                __framer__transformTargets: [{
                                    target: {
                                        opacity: 1,
                                        rotate: 0,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: 1,
                                        x: 0,
                                        y: 0
                                    }
                                }, {
                                    target: {
                                        opacity: 1,
                                        rotate: 0,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: .7,
                                        x: 0,
                                        y: -400
                                    }
                                }],
                                __framer__transformTrigger: "onScroll",
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: "framer-85bmw7",
                                "data-framer-name": "RaibowLightBase",
                                name: "RaibowLightBase",
                                transformTemplate: U,
                                children: [e(R, {
                                    breakpoint: s,
                                    overrides: {
                                        iRL2gYRtC: {
                                            background: {
                                                alt: "",
                                                fit: "fill",
                                                intrinsicHeight: 421.5,
                                                intrinsicWidth: 210.5,
                                                pixelHeight: 843,
                                                pixelWidth: 421,
                                                sizes: "calc(min(18.1685vw, 200px) * 0.6765)",
                                                src: new URL("https://framerusercontent.com/images/NeXoQkcN9JVet8SVxLw1XQDWSyc.png?scale-down-to=512").href,
                                                srcSet: `${new URL("https://framerusercontent.com/images/NeXoQkcN9JVet8SVxLw1XQDWSyc.png?scale-down-to=512").href} 255w, ${new URL("https://framerusercontent.com/images/NeXoQkcN9JVet8SVxLw1XQDWSyc.png").href} 421w`
                                            }
                                        },
                                        sH43zL1oy: {
                                            background: {
                                                alt: "",
                                                fit: "fill",
                                                intrinsicHeight: 421.5,
                                                intrinsicWidth: 210.5,
                                                pixelHeight: 843,
                                                pixelWidth: 421,
                                                sizes: "calc(min(50vw, 370px) * 0.6765)",
                                                src: new URL("https://framerusercontent.com/images/NeXoQkcN9JVet8SVxLw1XQDWSyc.png?scale-down-to=512").href,
                                                srcSet: `${new URL("https://framerusercontent.com/images/NeXoQkcN9JVet8SVxLw1XQDWSyc.png?scale-down-to=512").href} 255w, ${new URL("https://framerusercontent.com/images/NeXoQkcN9JVet8SVxLw1XQDWSyc.png").href} 421w`
                                            }
                                        }
                                    },
                                    children: e(I, {
                                        __framer__styleTransformEffectEnabled: !0,
                                        __framer__transformTargets: [{
                                            target: {
                                                opacity: 0,
                                                rotate: 0,
                                                rotateX: 0,
                                                rotateY: 0,
                                                scale: 1,
                                                x: 0,
                                                y: 0
                                            }
                                        }, {
                                            target: {
                                                opacity: 1,
                                                rotate: 0,
                                                rotateX: 0,
                                                rotateY: 0,
                                                scale: 1,
                                                x: 0,
                                                y: 0
                                            }
                                        }],
                                        __framer__transformTrigger: "onScroll",
                                        __perspectiveFX: !1,
                                        __targetOpacity: .2,
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 421.5,
                                            intrinsicWidth: 210.5,
                                            pixelHeight: 843,
                                            pixelWidth: 421,
                                            sizes: "calc(min(18.1685vw, 370px) * 0.6765)",
                                            src: new URL("https://framerusercontent.com/images/NeXoQkcN9JVet8SVxLw1XQDWSyc.png?scale-down-to=512").href,
                                            srcSet: `${new URL("https://framerusercontent.com/images/NeXoQkcN9JVet8SVxLw1XQDWSyc.png?scale-down-to=512").href} 255w, ${new URL("https://framerusercontent.com/images/NeXoQkcN9JVet8SVxLw1XQDWSyc.png").href} 421w`
                                        },
                                        className: "framer-79khi9",
                                        "data-framer-name": "RainbowLightBig",
                                        name: "RainbowLightBig",
                                        transformTemplate: U
                                    })
                                }), e(R, {
                                    breakpoint: s,
                                    overrides: {
                                        iRL2gYRtC: {
                                            background: {
                                                alt: "",
                                                fit: "fill",
                                                intrinsicHeight: 421.5,
                                                intrinsicWidth: 210.5,
                                                pixelHeight: 843,
                                                pixelWidth: 421,
                                                sizes: "min(18.1685vw, 200px)",
                                                src: new URL("https://framerusercontent.com/images/NeXoQkcN9JVet8SVxLw1XQDWSyc.png?scale-down-to=512").href,
                                                srcSet: `${new URL("https://framerusercontent.com/images/NeXoQkcN9JVet8SVxLw1XQDWSyc.png?scale-down-to=512").href} 255w, ${new URL("https://framerusercontent.com/images/NeXoQkcN9JVet8SVxLw1XQDWSyc.png").href} 421w`
                                            }
                                        },
                                        sH43zL1oy: {
                                            background: {
                                                alt: "",
                                                fit: "fill",
                                                intrinsicHeight: 421.5,
                                                intrinsicWidth: 210.5,
                                                pixelHeight: 843,
                                                pixelWidth: 421,
                                                sizes: "min(50vw, 370px)",
                                                src: new URL("https://framerusercontent.com/images/NeXoQkcN9JVet8SVxLw1XQDWSyc.png?scale-down-to=512").href,
                                                srcSet: `${new URL("https://framerusercontent.com/images/NeXoQkcN9JVet8SVxLw1XQDWSyc.png?scale-down-to=512").href} 255w, ${new URL("https://framerusercontent.com/images/NeXoQkcN9JVet8SVxLw1XQDWSyc.png").href} 421w`
                                            }
                                        }
                                    },
                                    children: e(I, {
                                        __framer__styleTransformEffectEnabled: !0,
                                        __framer__transformTargets: [{
                                            target: {
                                                opacity: 0,
                                                rotate: 0,
                                                rotateX: 0,
                                                rotateY: 0,
                                                scale: 1,
                                                x: 0,
                                                y: 0
                                            }
                                        }, {
                                            target: {
                                                opacity: 1,
                                                rotate: 0,
                                                rotateX: 0,
                                                rotateY: 0,
                                                scale: 1,
                                                x: 0,
                                                y: 0
                                            }
                                        }],
                                        __framer__transformTrigger: "onScroll",
                                        __perspectiveFX: !1,
                                        __targetOpacity: .2,
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 421.5,
                                            intrinsicWidth: 210.5,
                                            pixelHeight: 843,
                                            pixelWidth: 421,
                                            sizes: "min(18.1685vw, 370px)",
                                            src: new URL("https://framerusercontent.com/images/NeXoQkcN9JVet8SVxLw1XQDWSyc.png?scale-down-to=512").href,
                                            srcSet: `${new URL("https://framerusercontent.com/images/NeXoQkcN9JVet8SVxLw1XQDWSyc.png?scale-down-to=512").href} 255w, ${new URL("https://framerusercontent.com/images/NeXoQkcN9JVet8SVxLw1XQDWSyc.png").href} 421w`
                                        },
                                        className: "framer-1804gkf",
                                        "data-framer-name": "RainbowLightBig",
                                        name: "RainbowLightBig",
                                        transformTemplate: U
                                    })
                                })]
                            })
                        })]
                    }), e("div", {
                        id: "overlay"
                    })]
                })
            })
        })
    }),
    el = ['.framer-3SidF [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }', "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", `.${mt.bodyClassName} { background: hsl(0, 0%, 0%); }`, ".framer-3SidF .framer-lux5qc { display: block; }", ".framer-3SidF .framer-72rtr7 { align-content: center; align-items: center; background-color: #000000; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 1024px; }", ".framer-3SidF .framer-1wdt4rs-container { flex: none; height: 60px; left: 0px; position: fixed; right: 0px; top: 0px; z-index: 8; }", ".framer-3SidF .framer-oema18 { align-content: center; align-items: center; background-color: #190426; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 100%; z-index: 0; }", ".framer-3SidF .framer-pu8lnj { aspect-ratio: 1 / 1; border-bottom-left-radius: 50px; border-bottom-right-radius: 50px; border-top-left-radius: 50px; border-top-right-radius: 50px; box-shadow: 0px 9px 12px 0px rgba(0, 0, 0, 0.52); flex: none; height: var(--framer-aspect-ratio-supported, 120px); overflow: hidden; position: absolute; right: 42px; top: 99px; width: 120px; will-change: transform; z-index: 1; }", ".framer-3SidF .framer-hd4p95-container { flex: none; height: 120px; left: calc(50.00000000000002% - 120px / 2); position: absolute; top: calc(50.00000000000002% - 120px / 2); width: 120px; }", ".framer-3SidF .framer-1bz53hd { bottom: 0px; flex: none; left: 0px; overflow: hidden; position: absolute; right: 0px; text-decoration: none; top: 0px; }", ".framer-3SidF .framer-1um3dja { bottom: 35px; flex: none; left: 43px; position: absolute; right: 42px; top: 35px; }", ".framer-3SidF .framer-v638ot { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 40px 0px 0px 0px; position: relative; width: 100%; z-index: 0; }", ".framer-3SidF .framer-1epbknj { aspect-ratio: 1.9863813229571985 / 1; flex: 1 0 0px; height: var(--framer-aspect-ratio-supported, 516px); max-height: 1068px; max-width: 2042px; min-width: 1000px; overflow: visible; position: relative; width: 1px; }", ".framer-3SidF .framer-7lev5 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; left: 50%; overflow: visible; padding: 0px 0px 0px 0px; position: absolute; top: 0px; transform: translateX(-50%); width: 39%; }", ".framer-3SidF .framer-k8qu1q { aspect-ratio: 6.666666666666667 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 75px); min-width: 500px; overflow: visible; position: relative; transform: perspective(1200px); width: 100%; z-index: 1; }", ".framer-3SidF .framer-vl0y73 { aspect-ratio: 2.68370607028754 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 150px); max-width: 800px; min-width: 300px; overflow: visible; position: relative; transform: perspective(1200px); width: 100%; z-index: 1; }", ".framer-3SidF .framer-ta2xhr { align-content: center; align-items: center; aspect-ratio: 10.525773195876289 / 1; background-color: #190528; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: var(--framer-aspect-ratio-supported, 98px); justify-content: center; max-height: 194px; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }", ".framer-3SidF .framer-18xwxfe { aspect-ratio: 10.525773195876289 / 1; flex: 1 0 0px; height: var(--framer-aspect-ratio-supported, 98px); max-height: 194px; max-width: 2042px; min-width: 1000px; overflow: visible; position: relative; width: 1px; z-index: 6; }", ".framer-3SidF .framer-15b3ddg { align-content: center; align-items: center; background-color: #020310; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; z-index: 4; }", ".framer-3SidF .framer-1q6jqyf { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; max-width: 2042px; overflow: visible; padding: 0px 30px 0px 30px; position: relative; width: 100%; }", ".framer-3SidF .framer-1gzlo0z { align-content: center; align-items: center; aspect-ratio: 2.211284513805522 / 1; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 140px; height: var(--framer-aspect-ratio-supported, 436px); justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; z-index: 9; }", ".framer-3SidF .framer-yx52t4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; transform: perspective(1200px); width: 100%; }", ".framer-3SidF .framer-112z1mn, .framer-3SidF .framer-164l20x { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 100%; }", ".framer-3SidF .framer-fe8vz3, .framer-3SidF .framer-1rnea81, .framer-3SidF .framer-71hpk9, .framer-3SidF .framer-7qq70d, .framer-3SidF .framer-kc1u3x { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; z-index: 1; }", ".framer-3SidF .framer-1lquinw { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; overflow: hidden; padding: 30px 0px 30px 0px; position: relative; width: 100%; }", ".framer-3SidF .framer-1gia23h-container, .framer-3SidF .framer-1jcztul-container { flex: none; height: auto; position: relative; width: 210px; }", ".framer-3SidF .framer-1efzas0, .framer-3SidF .framer-krv0xz { background-color: rgba(0, 0, 0, 0.9); inset: 0px; position: fixed; user-select: none; z-index: 10; }", ".framer-3SidF .framer-1yvffvx { align-content: center; align-items: center; aspect-ratio: 0.46111111111111114 / 1; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: var(--framer-aspect-ratio-supported, 900px); justify-content: center; left: 50%; overflow: hidden; padding: 100px 0px 100px 0px; position: fixed; top: 50%; transform: translate(-50%, -50%); width: 415px; z-index: 10; }", ".framer-3SidF .framer-1de65tj-container { flex: 1 0 0px; height: auto; position: relative; transform: perspective(1200px); width: 1px; }", ".framer-3SidF .framer-150y1kr { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; left: 50%; overflow: hidden; padding: 0px 0px 0px 0px; position: fixed; top: 50%; transform: translate(-50%, -50%); width: 80%; z-index: 10; }", ".framer-3SidF .framer-1x3clgt-container { aspect-ratio: 1.7777777777777777 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 113px); position: relative; transform: perspective(1200px); width: 100%; }", ".framer-3SidF .framer-to946j { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; max-width: 2400px; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }", ".framer-3SidF .framer-1eby98a { align-content: center; align-items: center; aspect-ratio: 20.42 / 1; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: var(--framer-aspect-ratio-supported, 66px); justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }", ".framer-3SidF .framer-1syiz2p { aspect-ratio: 15.707692307692307 / 1; background-color: #000000; flex: none; height: var(--framer-aspect-ratio-supported, 66px); overflow: visible; position: relative; width: 100%; z-index: 4; }", ".framer-3SidF .framer-1i0rx8c, .framer-3SidF .framer-1l4437k { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px 40px 0px 40px; position: relative; width: 100%; }", ".framer-3SidF .framer-uq89c8, .framer-3SidF .framer-81gh5p { aspect-ratio: 2.042 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 502px); left: 50%; max-width: 2042px; overflow: visible; position: absolute; top: 0px; transform: perspective(1200px) translateX(-50%); width: 100%; z-index: 0; }", ".framer-3SidF .framer-5qfwc, .framer-3SidF .framer-iemz52 { aspect-ratio: 2.042 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 502px); left: 50%; max-width: 2042px; overflow: visible; position: absolute; top: 0px; transform: perspective(1200px) translateX(-50%); width: 100%; z-index: 2; }", ".framer-3SidF .framer-1cwl5y5 { align-content: center; align-items: center; aspect-ratio: 2.042 / 1; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: var(--framer-aspect-ratio-supported, 462px); justify-content: center; max-width: 1900px; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; z-index: 5; }", ".framer-3SidF .framer-17nm4kd, .framer-3SidF .framer-1lbsrgu { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 600px; overflow: visible; padding: 0px 70px 0px 70px; position: relative; width: 38%; }", ".framer-3SidF .framer-fhvqns, .framer-3SidF .framer-lob243, .framer-3SidF .framer-12bvop8 { --border-bottom-width: 2px; --border-color: #d7c7ff; --border-left-width: 2px; --border-right-width: 2px; --border-style: solid; --border-top-width: 2px; align-content: center; align-items: center; border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 400px; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; transform: perspective(1200px); width: 88%; will-change: transform; z-index: 4; }", ".framer-3SidF .framer-1ylya7e-container, .framer-3SidF .framer-4y3194-container, .framer-3SidF .framer-7ppe40-container { flex: none; height: auto; position: relative; width: 100%; }", ".framer-3SidF .framer-1roelpq, .framer-3SidF .framer-1hkr997 { flex: none; height: 100%; overflow: hidden; position: relative; width: 24%; }", ".framer-3SidF .framer-jjkesf, .framer-3SidF .framer-13vh2sd { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; max-width: 800px; overflow: hidden; padding: 0px 40px 0px 40px; position: relative; width: 38%; z-index: 4; }", ".framer-3SidF .framer-vaos0u, .framer-3SidF .framer-1l7u3oa, .framer-3SidF .framer-1cyja9d, .framer-3SidF .framer-yhg5rx, .framer-3SidF .framer-1b3upbb, .framer-3SidF .framer-1lle64f, .framer-3SidF .framer-e3old7, .framer-3SidF .framer-1la159y, .framer-3SidF .framer-24lz14, .framer-3SidF .framer-btvsv5 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-paragraph-spacing: 0px; flex: none; height: auto; max-width: 600px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; z-index: 1; }", ".framer-3SidF .framer-17l21fw, .framer-3SidF .framer-1wd7ouk { aspect-ratio: 0.44387755102040816 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 451px); overflow: hidden; position: relative; width: 24%; }", ".framer-3SidF .framer-dzi1x4 { align-content: center; align-items: center; aspect-ratio: 10.21 / 1; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: var(--framer-aspect-ratio-supported, 136px); justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }", ".framer-3SidF .framer-nkp9ki { aspect-ratio: 7.562962962962963 / 1; background-color: #000000; flex: none; height: var(--framer-aspect-ratio-supported, 136px); overflow: visible; position: relative; width: 100%; z-index: 4; }", ".framer-3SidF .framer-ftrjx4 { align-content: center; align-items: center; aspect-ratio: 1.962 / 1; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: var(--framer-aspect-ratio-supported, 481px); justify-content: center; max-width: 1900px; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; z-index: 5; }", ".framer-3SidF .framer-oq14av { align-content: center; align-items: center; aspect-ratio: 5.105 / 1; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: var(--framer-aspect-ratio-supported, 211px); justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }", ".framer-3SidF .framer-1j6dl1f { aspect-ratio: 4.8619047619047615 / 1; background-color: #000000; flex: none; height: var(--framer-aspect-ratio-supported, 211px); overflow: visible; position: relative; width: 100%; z-index: 4; }", ".framer-3SidF .framer-rb9igs { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 40px 0px 40px; position: relative; width: 100%; }", ".framer-3SidF .framer-13glbb { aspect-ratio: 1.6792763157894737 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 610px); left: 50%; max-width: 2042px; overflow: visible; position: absolute; top: 0px; transform: perspective(1200px) translateX(-50%); width: 100%; z-index: 0; }", ".framer-3SidF .framer-1ori1hz { aspect-ratio: 1.6792763157894737 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 610px); left: 50%; max-width: 2042px; overflow: visible; position: absolute; top: 0px; transform: perspective(1200px) translateX(-50%); width: 100%; z-index: 2; }", ".framer-3SidF .framer-fk808e { align-content: center; align-items: center; aspect-ratio: 1.613486842105263 / 1; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: var(--framer-aspect-ratio-supported, 585px); justify-content: center; max-width: 1900px; overflow: hidden; padding: 0px 40px 0px 40px; position: relative; width: 100%; z-index: 5; }", ".framer-3SidF .framer-1lhxbjq { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 600px; overflow: visible; padding: 0px 40px 0px 40px; position: relative; width: 38%; }", ".framer-3SidF .framer-h2r2le { flex: none; height: 1216px; overflow: hidden; position: relative; width: 24%; }", ".framer-3SidF .framer-1772y9t { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; max-width: 800px; overflow: hidden; padding: 0px 40px 0px 40px; position: relative; width: 39%; z-index: 4; }", ".framer-3SidF .framer-lz6fmn { aspect-ratio: 0.3686440677966102 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 543px); overflow: hidden; position: relative; width: 24%; }", ".framer-3SidF .framer-1mj298k { align-content: flex-start; align-items: flex-start; aspect-ratio: 7.041379310344827 / 1; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: var(--framer-aspect-ratio-supported, 206px); justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }", ".framer-3SidF .framer-y6lzce { aspect-ratio: 4.980487804878049 / 1; background-color: #000000; flex: 1 0 0px; height: var(--framer-aspect-ratio-supported, 206px); overflow: visible; position: relative; width: 1px; z-index: 4; }", ".framer-3SidF .framer-eh5h2a { align-content: center; align-items: center; aspect-ratio: 1.4705882352941178 / 1; display: flex; flex: none; flex-direction: column; flex-wrap: wrap; gap: 0px; height: var(--framer-aspect-ratio-supported, 867px); justify-content: center; max-width: 2000px; overflow: visible; padding: 110px 0px 40px 0px; position: relative; width: 100%; z-index: 6; }", ".framer-3SidF .framer-1yt1rq5 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }", ".framer-3SidF .framer-1oi9ksi { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; max-width: 1500px; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 90%; }", ".framer-3SidF .framer-1lt6rq, .framer-3SidF .framer-16hxcuo { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }", ".framer-3SidF .framer-uguw1a-container { aspect-ratio: 1.6666666666666667 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 615px); max-width: 1500px; position: relative; width: 100%; }", ".framer-3SidF .framer-1gc3ysn { -webkit-filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.25)); aspect-ratio: 0.49861239592969475 / 1; filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.25)); height: var(--framer-aspect-ratio-supported, 542px); overflow: visible; position: relative; width: 270px; }", ".framer-3SidF .framer-lhfg8 { -webkit-filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.25)); aspect-ratio: 0.4986175115207373 / 1; filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.25)); height: var(--framer-aspect-ratio-supported, 544px); overflow: visible; position: relative; width: 271px; }", ".framer-3SidF .framer-c71kr7, .framer-3SidF .framer-huqcou { -webkit-filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.25)); aspect-ratio: 0.49953746530989823 / 1; filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.25)); height: var(--framer-aspect-ratio-supported, 541px); overflow: visible; position: relative; width: 270px; }", ".framer-3SidF .framer-pcg2v2 { -webkit-filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.25)); aspect-ratio: 0.5032377428307123 / 1; filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.25)); height: var(--framer-aspect-ratio-supported, 541px); overflow: visible; position: relative; width: 272px; }", ".framer-3SidF .framer-kn3er8 { -webkit-filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.25)); aspect-ratio: 0.5018518518518519 / 1; filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.25)); height: var(--framer-aspect-ratio-supported, 540px); overflow: visible; position: relative; width: 271px; }", ".framer-3SidF .framer-ve5ss1 { -webkit-filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.25)); aspect-ratio: 0.49907578558225507 / 1; filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.25)); height: var(--framer-aspect-ratio-supported, 541px); overflow: visible; position: relative; width: 270px; }", ".framer-3SidF .framer-1odh1rq { -webkit-filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.25)); aspect-ratio: 0.49675625579240035 / 1; filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.25)); height: var(--framer-aspect-ratio-supported, 540px); overflow: visible; position: relative; width: 268px; }", ".framer-3SidF .framer-1jurvue { aspect-ratio: 0.5004633920296571 / 1; height: var(--framer-aspect-ratio-supported, 540px); overflow: visible; position: relative; width: 270px; }", ".framer-3SidF .framer-l1nxfv { align-content: center; align-items: center; aspect-ratio: 13.613333333333333 / 1; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: var(--framer-aspect-ratio-supported, 110px); justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; z-index: 0; }", ".framer-3SidF .framer-spkhsj { aspect-ratio: 9.281818181818181 / 1; background-color: #000000; flex: 1 0 0px; height: var(--framer-aspect-ratio-supported, 110px); overflow: visible; position: relative; width: 1px; z-index: 5; }", ".framer-3SidF .framer-1qg7i7f { align-content: center; align-items: center; aspect-ratio: 2.4023529411764706 / 1; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: var(--framer-aspect-ratio-supported, 427px); justify-content: center; overflow: hidden; padding: 0px 40px 0px 40px; position: relative; width: 100%; }", ".framer-3SidF .framer-gjaub5 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; max-width: 800px; overflow: hidden; padding: 0px 50px 0px 70px; position: relative; width: 40%; z-index: 4; }", ".framer-3SidF .framer-hb6kb1 { flex: none; height: 100%; overflow: hidden; position: relative; width: 25%; }", ".framer-3SidF .framer-1ouy69k { aspect-ratio: 0.8875739644970414 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 426px); max-width: 600px; overflow: visible; position: relative; width: 40%; }", ".framer-3SidF .framer-1vgipyk { aspect-ratio: 0.9523809523809523 / 1; border-bottom-left-radius: 59px; border-bottom-right-radius: 59px; border-top-left-radius: 59px; border-top-right-radius: 59px; flex: none; height: var(--framer-aspect-ratio-supported, 203px); left: 20%; max-height: 280px; max-width: 300px; overflow: visible; position: absolute; top: 50%; transform: perspective(1200px) translate(-50%, -50%); width: 51%; z-index: 4; }", ".framer-3SidF .framer-1kasqe { aspect-ratio: 0.9501661129568106 / 1; border-bottom-left-radius: 59px; border-bottom-right-radius: 59px; border-top-left-radius: 59px; border-top-right-radius: 59px; flex: none; height: var(--framer-aspect-ratio-supported, 203px); left: 49%; max-height: 280px; max-width: 320px; overflow: visible; position: absolute; top: 69%; transform: perspective(1200px) translate(-50%, -50%); width: 51%; z-index: 4; }", ".framer-3SidF .framer-1q8we4i { aspect-ratio: 0.9545454545454546 / 1; border-bottom-left-radius: 59px; border-bottom-right-radius: 59px; border-top-left-radius: 59px; border-top-right-radius: 59px; flex: none; height: var(--framer-aspect-ratio-supported, 177px); left: 77%; max-height: 41%; max-width: 300px; overflow: visible; position: absolute; top: 49%; transform: perspective(1200px) translate(-50%, -50%); width: 49%; z-index: 4; }", ".framer-3SidF .framer-1450m23 { aspect-ratio: 0.9506578947368421 / 1; border-bottom-left-radius: 59px; border-bottom-right-radius: 59px; border-top-left-radius: 59px; border-top-right-radius: 59px; flex: none; height: var(--framer-aspect-ratio-supported, 218px); left: 48%; max-height: 280px; max-width: 320px; overflow: visible; position: absolute; top: 21%; transform: perspective(1200px) translate(-50%, -50%); width: 55%; z-index: 4; }", ".framer-3SidF .framer-1dciqhg { align-content: center; align-items: center; aspect-ratio: 2.4023529411764706 / 1; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: var(--framer-aspect-ratio-supported, 426px); justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 100%; }", ".framer-3SidF .framer-l9chw8 { flex: none; height: 100%; overflow: hidden; position: relative; width: 10%; }", ".framer-3SidF .framer-1xd11nn { aspect-ratio: 0.8879023307436182 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 323px); max-width: 400px; overflow: visible; position: relative; transform: perspective(1200px); width: 28%; }", ".framer-3SidF .framer-18luaee { border-bottom-left-radius: 59px; border-bottom-right-radius: 59px; border-top-left-radius: 59px; border-top-right-radius: 59px; flex: none; height: 100%; left: calc(48.50000000000002% - 99.87819732034104% / 2); overflow: visible; position: absolute; top: calc(48.113207547169836% - 100% / 2); transform: perspective(1200px); width: 100%; z-index: 5; }", ".framer-3SidF .framer-1mxjesg { flex: none; height: 78px; left: calc(39.268292682926855% - 37.5609756097561% / 2); overflow: visible; position: absolute; top: calc(75.2358490566038% - 78px / 2); transform: perspective(1200px); width: 38%; }", ".framer-3SidF .framer-r4qd4o { flex: none; height: 70px; left: calc(80.4878048780488% - 27.5609756097561% / 2); overflow: visible; position: absolute; top: calc(10.37735849056606% - 70px / 2); transform: perspective(1200px); width: 28%; }", ".framer-3SidF .framer-nntfbq { flex: none; height: 72px; left: calc(65.12195121951223% - 23.414634146341466% / 2); overflow: visible; position: absolute; top: calc(24.76415094339625% - 72px / 2); transform: perspective(1200px); width: 23%; }", ".framer-3SidF .framer-1i8fgho { flex: none; height: 56px; left: calc(59.02439024390246% - 29.024390243902438% / 2); overflow: visible; position: absolute; top: calc(3.537735849056626% - 56px / 2); transform: perspective(1200px); width: 29%; }", ".framer-3SidF .framer-zwnuty { flex: none; height: 92px; left: calc(30.73170731707319% - 23.902439024390244% / 2); overflow: visible; position: absolute; top: calc(29.009433962264175% - 92px / 2); transform: perspective(1200px); width: 24%; }", ".framer-3SidF .framer-7yiz0z { flex: none; height: 110px; left: calc(22.195121951219534% - 16.585365853658537% / 2); overflow: visible; position: absolute; top: calc(51.65094339622643% - 110px / 2); transform: perspective(1200px); width: 17%; }", ".framer-3SidF .framer-130765u { flex: none; height: 172px; left: calc(0.731707317073193% - 17.073170731707318% / 2); overflow: visible; position: absolute; top: calc(47.40566037735851% - 172px / 2); transform: perspective(1200px); width: 17%; }", ".framer-3SidF .framer-1rfni6l { flex: none; height: 61px; left: calc(40.00000000000002% - 15.609756097560975% / 2); overflow: visible; position: absolute; top: calc(37.50000000000002% - 61px / 2); transform: perspective(1200px); width: 16%; }", ".framer-3SidF .framer-10kh6oy { flex: none; height: 61px; left: calc(60.4878048780488% - 19.51219512195122% / 2); overflow: visible; position: absolute; top: calc(35.849056603773604% - 61px / 2); transform: perspective(1200px); width: 20%; }", ".framer-3SidF .framer-hlnpb8 { flex: none; height: 122px; left: calc(61.21951219512197% - 25.121951219512194% / 2); overflow: visible; position: absolute; top: calc(54.24528301886795% - 122px / 2); transform: perspective(1200px) rotate(-1deg); width: 25%; }", ".framer-3SidF .framer-eyzuv5 { flex: none; height: 102px; left: calc(69.02439024390246% - 32.4390243902439% / 2); overflow: visible; position: absolute; top: calc(69.10377358490568% - 102px / 2); transform: perspective(1200px); width: 32%; }", ".framer-3SidF .framer-18fwi1b { flex: none; height: 169px; left: calc(92.9268292682927% - 29.268292682926827% / 2); overflow: visible; position: absolute; top: calc(37.02830188679248% - 169px / 2); transform: perspective(1200px); width: 29%; }", ".framer-3SidF .framer-88h933 { flex: none; height: 188px; left: calc(85.60975609756099% - 42.926829268292686% / 2); overflow: visible; position: absolute; top: calc(77.59433962264153% - 188px / 2); transform: perspective(1200px); width: 43%; }", ".framer-3SidF .framer-1z0ri4m { flex: none; height: 158px; left: calc(36.34146341463417% - 76.09756097560975% / 2); overflow: visible; position: absolute; top: calc(89.15094339622644% - 158px / 2); transform: perspective(1200px); width: 76%; }", ".framer-3SidF .framer-nszbql { aspect-ratio: 0.9669811320754716 / 1; border-bottom-left-radius: 59px; border-bottom-right-radius: 59px; border-top-left-radius: 59px; border-top-right-radius: 59px; bottom: var(--framer-aspect-ratio-supported, 1px); flex: none; left: 0px; opacity: 0.7; overflow: visible; position: absolute; top: -1px; transform: perspective(1200px); width: 100%; z-index: 3; }", ".framer-3SidF .framer-1rnkjp3 { flex: none; height: 100%; overflow: hidden; position: relative; width: 22%; }", ".framer-3SidF .framer-1sbkav5 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; max-width: 800px; overflow: hidden; padding: 0px 70px 0px 70px; position: relative; width: 40%; z-index: 4; }", ".framer-3SidF .framer-19uah7m { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 290px; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; z-index: -1; }", ".framer-3SidF .framer-gce430 { background-color: #000000; flex: none; height: 562px; overflow: visible; position: relative; width: 2000px; z-index: 5; }", ".framer-3SidF .framer-hfbmqz { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; min-height: 50px; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; z-index: 6; }", ".framer-3SidF .framer-5o8k8p { align-content: center; align-items: center; aspect-ratio: 9.723809523809523 / 1; bottom: -80px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: var(--framer-aspect-ratio-supported, 217px); justify-content: center; left: 50%; min-width: 600px; overflow: visible; padding: 0px 0px 0px 0px; position: absolute; transform: translateX(-50%); width: 100%; z-index: 1; }", ".framer-3SidF .framer-1rpi3n4 { align-content: center; align-items: center; aspect-ratio: 2.542222222222222 / 1; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: var(--framer-aspect-ratio-supported, 118px); justify-content: center; min-width: 300px; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 28%; z-index: 1; }", ".framer-3SidF .framer-2vome2 { align-content: center; align-items: center; aspect-ratio: 10.365482233502538 / 1; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: var(--framer-aspect-ratio-supported, 99px); justify-content: center; min-width: 600px; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; z-index: 1; }", ".framer-3SidF .framer-19r1i4c { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px 40px 0px 40px; position: relative; width: 100%; z-index: 5; }", ".framer-3SidF .framer-1c8abkz { align-content: center; align-items: center; background-color: #03030d; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 650px; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }", ".framer-3SidF .framer-4y22m9 { align-content: center; align-items: center; bottom: 0px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; justify-content: center; left: 50%; overflow: hidden; padding: 0px 0px 0px 0px; position: absolute; top: 0px; transform: translateX(-50%); width: min-content; }", ".framer-3SidF .framer-1eb5n0l { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 1px; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 3840px; z-index: 1; }", ".framer-3SidF .framer-1m4bgxe, .framer-3SidF .framer-yd80bd { flex: none; height: 870px; overflow: visible; position: relative; width: 3840px; z-index: 8; }", ".framer-3SidF .framer-754ekz { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 140px; height: 870px; justify-content: center; overflow: visible; padding: 130px 40px 130px 40px; position: relative; width: 100%; z-index: 9; }", ".framer-3SidF .framer-3e2m0k { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 50px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; transform: perspective(1200px); width: 1px; }", ".framer-3SidF .framer-p552lo-container { flex: none; height: auto; position: relative; width: 730px; }", ".framer-3SidF .framer-cp519e { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 100px; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 200%; z-index: 6; }", ".framer-3SidF .framer-11v74j0 { background-color: #000000; flex: none; height: 87px; left: calc(50.00000000000002% - 4000px / 2); overflow: visible; position: absolute; top: 16px; width: 4000px; z-index: 5; }", ".framer-3SidF .framer-yhkhmu { align-content: center; align-items: center; aspect-ratio: 47.10526315789474 / 1; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: var(--framer-aspect-ratio-supported, 111px); justify-content: center; left: -643px; overflow: visible; padding: 0px 0px 0px 0px; position: absolute; right: -643px; top: -75px; z-index: 1; }", ".framer-3SidF .framer-6e84c3, .framer-3SidF .framer-1ljvo86 { flex: none; height: 111px; overflow: visible; position: relative; width: 2018px; z-index: 5; }", ".framer-3SidF .framer-18a9rib { aspect-ratio: 18.18018018018018 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 111px); overflow: visible; position: relative; width: 2018px; z-index: 5; }", ".framer-3SidF .framer-ounsaw-container { flex: none; height: auto; position: relative; width: 100%; z-index: 8; }", ".framer-3SidF .framer-i6lwij { align-content: center; align-items: center; aspect-ratio: 0.34637134778510836 / 1; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: var(--framer-aspect-ratio-supported, 568px); justify-content: center; left: 50%; max-width: 370px; overflow: visible; padding: 0px 0px 0px 0px; position: fixed; top: 0px; transform: perspective(1200px) translateX(-50%); width: 18%; z-index: 1; }", ".framer-3SidF .framer-c25zvs { flex: none; height: 218px; min-height: 200px; min-width: 180px; overflow: hidden; position: relative; width: 100%; }", ".framer-3SidF .framer-1vu2gcj { aspect-ratio: 0.5710973724884081 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 350px); min-width: 200px; overflow: visible; position: relative; width: 100%; }", ".framer-3SidF .framer-qkk51q-container { aspect-ratio: 1.1299694189602447 / 1; bottom: 0px; flex: none; height: var(--framer-aspect-ratio-supported, 177px); left: 0px; position: absolute; right: 0px; z-index: 0; }", ".framer-3SidF .framer-cqzgxj { align-content: center; align-items: center; bottom: 0px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 615px; justify-content: center; left: 9px; overflow: visible; padding: 0px 0px 0px 0px; position: absolute; right: 9px; z-index: 0; }", ".framer-3SidF .framer-1em74sk { align-content: center; align-items: center; bottom: 0px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; left: 0px; overflow: hidden; padding: 0px 0px 0px 0px; position: absolute; right: 0px; }", ".framer-3SidF .framer-1jvr13v-container { aspect-ratio: 0.6933333333333334 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 350px); min-height: 350px; position: relative; width: 100%; z-index: 1; }", ".framer-3SidF .framer-k448eq { aspect-ratio: 1.9024390243902438 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 96px); overflow: hidden; position: relative; width: 100%; }", ".framer-3SidF .framer-14w81th { align-content: center; align-items: center; bottom: 0px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 0px; overflow: visible; padding: 0px 0px 0px 0px; position: absolute; right: 0px; }", ".framer-3SidF .framer-si17cb { aspect-ratio: 2.265 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 45px); min-width: 100px; opacity: 0.2; overflow: visible; position: relative; width: 54%; z-index: 1; }", ".framer-3SidF .framer-ya935w { aspect-ratio: 4.888888888888889 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 37px); overflow: hidden; position: relative; width: 100%; }", ".framer-3SidF .framer-m40nf9 { bottom: -924px; flex: none; left: calc(50.00000000000002% - min(370px, 18%) / 2); max-width: 370px; mix-blend-mode: screen; overflow: visible; position: fixed; top: -576px; transform: perspective(1200px); width: 18%; }", ".framer-3SidF .framer-7vqm0l { bottom: 0px; box-shadow: 0px 1px 23px 10px rgba(255, 255, 255, 0.51); flex: none; left: calc(49.7058823529412% - 100% / 2); mix-blend-mode: overlay; opacity: 0.5; overflow: visible; position: absolute; top: 0px; width: 100%; z-index: 2; }", ".framer-3SidF .framer-3fdpn6 { bottom: 0px; flex: none; left: calc(50.00000000000002% - 68% / 2); mix-blend-mode: color-dodge; opacity: 0.3; overflow: visible; position: absolute; top: 0px; width: 68%; z-index: 0; }", ".framer-3SidF .framer-85bmw7 { flex: none; height: 2915px; left: calc(49.902056807051935% - min(370px, 18.168462291870714%) / 2); max-width: 370px; overflow: visible; position: absolute; top: 0px; transform: perspective(1200px); width: 18%; z-index: 1; }", ".framer-3SidF .framer-79khi9 { bottom: 0px; flex: none; left: calc(49.865229110512146% - 67.65498652291106% / 2); mix-blend-mode: screen; opacity: 0.2; overflow: visible; position: absolute; top: 0px; transform: perspective(1200px); width: 68%; z-index: 10; }", ".framer-3SidF .framer-1804gkf { bottom: 0px; box-shadow: 0px 0px 19px 6px rgba(255, 255, 255, 0.58); flex: none; left: calc(50.00000000000002% - 100% / 2); mix-blend-mode: color-dodge; opacity: 0.2; overflow: visible; position: absolute; top: 0px; transform: perspective(1200px); width: 100%; z-index: -1; }", "@supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-3SidF .framer-72rtr7, .framer-3SidF .framer-oema18, .framer-3SidF .framer-v638ot, .framer-3SidF .framer-7lev5, .framer-3SidF .framer-ta2xhr, .framer-3SidF .framer-15b3ddg, .framer-3SidF .framer-1q6jqyf, .framer-3SidF .framer-1gzlo0z, .framer-3SidF .framer-yx52t4, .framer-3SidF .framer-112z1mn, .framer-3SidF .framer-1lquinw, .framer-3SidF .framer-1yvffvx, .framer-3SidF .framer-150y1kr, .framer-3SidF .framer-to946j, .framer-3SidF .framer-1eby98a, .framer-3SidF .framer-1i0rx8c, .framer-3SidF .framer-1cwl5y5, .framer-3SidF .framer-17nm4kd, .framer-3SidF .framer-fhvqns, .framer-3SidF .framer-jjkesf, .framer-3SidF .framer-dzi1x4, .framer-3SidF .framer-1l4437k, .framer-3SidF .framer-ftrjx4, .framer-3SidF .framer-13vh2sd, .framer-3SidF .framer-1lbsrgu, .framer-3SidF .framer-lob243, .framer-3SidF .framer-oq14av, .framer-3SidF .framer-rb9igs, .framer-3SidF .framer-fk808e, .framer-3SidF .framer-1lhxbjq, .framer-3SidF .framer-12bvop8, .framer-3SidF .framer-1772y9t, .framer-3SidF .framer-1mj298k, .framer-3SidF .framer-eh5h2a, .framer-3SidF .framer-1yt1rq5, .framer-3SidF .framer-1oi9ksi, .framer-3SidF .framer-l1nxfv, .framer-3SidF .framer-1qg7i7f, .framer-3SidF .framer-gjaub5, .framer-3SidF .framer-1dciqhg, .framer-3SidF .framer-1sbkav5, .framer-3SidF .framer-19uah7m, .framer-3SidF .framer-hfbmqz, .framer-3SidF .framer-5o8k8p, .framer-3SidF .framer-1rpi3n4, .framer-3SidF .framer-2vome2, .framer-3SidF .framer-19r1i4c, .framer-3SidF .framer-1c8abkz, .framer-3SidF .framer-4y22m9, .framer-3SidF .framer-1eb5n0l, .framer-3SidF .framer-754ekz, .framer-3SidF .framer-3e2m0k, .framer-3SidF .framer-164l20x, .framer-3SidF .framer-cp519e, .framer-3SidF .framer-yhkhmu, .framer-3SidF .framer-i6lwij, .framer-3SidF .framer-cqzgxj, .framer-3SidF .framer-1em74sk, .framer-3SidF .framer-14w81th { gap: 0px; } .framer-3SidF .framer-72rtr7 > *, .framer-3SidF .framer-oema18 > *, .framer-3SidF .framer-7lev5 > *, .framer-3SidF .framer-15b3ddg > *, .framer-3SidF .framer-1q6jqyf > *, .framer-3SidF .framer-150y1kr > *, .framer-3SidF .framer-to946j > *, .framer-3SidF .framer-1i0rx8c > *, .framer-3SidF .framer-1l4437k > *, .framer-3SidF .framer-rb9igs > *, .framer-3SidF .framer-eh5h2a > *, .framer-3SidF .framer-1yt1rq5 > *, .framer-3SidF .framer-hfbmqz > *, .framer-3SidF .framer-5o8k8p > *, .framer-3SidF .framer-19r1i4c > *, .framer-3SidF .framer-1c8abkz > *, .framer-3SidF .framer-1eb5n0l > *, .framer-3SidF .framer-i6lwij > *, .framer-3SidF .framer-1em74sk > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-3SidF .framer-72rtr7 > :first-child, .framer-3SidF .framer-oema18 > :first-child, .framer-3SidF .framer-7lev5 > :first-child, .framer-3SidF .framer-15b3ddg > :first-child, .framer-3SidF .framer-1q6jqyf > :first-child, .framer-3SidF .framer-yx52t4 > :first-child, .framer-3SidF .framer-112z1mn > :first-child, .framer-3SidF .framer-150y1kr > :first-child, .framer-3SidF .framer-to946j > :first-child, .framer-3SidF .framer-1i0rx8c > :first-child, .framer-3SidF .framer-17nm4kd > :first-child, .framer-3SidF .framer-fhvqns > :first-child, .framer-3SidF .framer-jjkesf > :first-child, .framer-3SidF .framer-1l4437k > :first-child, .framer-3SidF .framer-13vh2sd > :first-child, .framer-3SidF .framer-1lbsrgu > :first-child, .framer-3SidF .framer-lob243 > :first-child, .framer-3SidF .framer-rb9igs > :first-child, .framer-3SidF .framer-1lhxbjq > :first-child, .framer-3SidF .framer-12bvop8 > :first-child, .framer-3SidF .framer-1772y9t > :first-child, .framer-3SidF .framer-eh5h2a > :first-child, .framer-3SidF .framer-1yt1rq5 > :first-child, .framer-3SidF .framer-1oi9ksi > :first-child, .framer-3SidF .framer-gjaub5 > :first-child, .framer-3SidF .framer-1sbkav5 > :first-child, .framer-3SidF .framer-hfbmqz > :first-child, .framer-3SidF .framer-5o8k8p > :first-child, .framer-3SidF .framer-19r1i4c > :first-child, .framer-3SidF .framer-1c8abkz > :first-child, .framer-3SidF .framer-4y22m9 > :first-child, .framer-3SidF .framer-1eb5n0l > :first-child, .framer-3SidF .framer-3e2m0k > :first-child, .framer-3SidF .framer-164l20x > :first-child, .framer-3SidF .framer-i6lwij > :first-child, .framer-3SidF .framer-cqzgxj > :first-child, .framer-3SidF .framer-1em74sk > :first-child, .framer-3SidF .framer-14w81th > :first-child { margin-top: 0px; } .framer-3SidF .framer-72rtr7 > :last-child, .framer-3SidF .framer-oema18 > :last-child, .framer-3SidF .framer-7lev5 > :last-child, .framer-3SidF .framer-15b3ddg > :last-child, .framer-3SidF .framer-1q6jqyf > :last-child, .framer-3SidF .framer-yx52t4 > :last-child, .framer-3SidF .framer-112z1mn > :last-child, .framer-3SidF .framer-150y1kr > :last-child, .framer-3SidF .framer-to946j > :last-child, .framer-3SidF .framer-1i0rx8c > :last-child, .framer-3SidF .framer-17nm4kd > :last-child, .framer-3SidF .framer-fhvqns > :last-child, .framer-3SidF .framer-jjkesf > :last-child, .framer-3SidF .framer-1l4437k > :last-child, .framer-3SidF .framer-13vh2sd > :last-child, .framer-3SidF .framer-1lbsrgu > :last-child, .framer-3SidF .framer-lob243 > :last-child, .framer-3SidF .framer-rb9igs > :last-child, .framer-3SidF .framer-1lhxbjq > :last-child, .framer-3SidF .framer-12bvop8 > :last-child, .framer-3SidF .framer-1772y9t > :last-child, .framer-3SidF .framer-eh5h2a > :last-child, .framer-3SidF .framer-1yt1rq5 > :last-child, .framer-3SidF .framer-1oi9ksi > :last-child, .framer-3SidF .framer-gjaub5 > :last-child, .framer-3SidF .framer-1sbkav5 > :last-child, .framer-3SidF .framer-hfbmqz > :last-child, .framer-3SidF .framer-5o8k8p > :last-child, .framer-3SidF .framer-19r1i4c > :last-child, .framer-3SidF .framer-1c8abkz > :last-child, .framer-3SidF .framer-4y22m9 > :last-child, .framer-3SidF .framer-1eb5n0l > :last-child, .framer-3SidF .framer-3e2m0k > :last-child, .framer-3SidF .framer-164l20x > :last-child, .framer-3SidF .framer-i6lwij > :last-child, .framer-3SidF .framer-cqzgxj > :last-child, .framer-3SidF .framer-1em74sk > :last-child, .framer-3SidF .framer-14w81th > :last-child { margin-bottom: 0px; } .framer-3SidF .framer-v638ot > *, .framer-3SidF .framer-ta2xhr > *, .framer-3SidF .framer-1yvffvx > *, .framer-3SidF .framer-1eby98a > *, .framer-3SidF .framer-1cwl5y5 > *, .framer-3SidF .framer-dzi1x4 > *, .framer-3SidF .framer-ftrjx4 > *, .framer-3SidF .framer-oq14av > *, .framer-3SidF .framer-fk808e > *, .framer-3SidF .framer-1mj298k > *, .framer-3SidF .framer-l1nxfv > *, .framer-3SidF .framer-19uah7m > *, .framer-3SidF .framer-cp519e > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-3SidF .framer-v638ot > :first-child, .framer-3SidF .framer-ta2xhr > :first-child, .framer-3SidF .framer-1gzlo0z > :first-child, .framer-3SidF .framer-1lquinw > :first-child, .framer-3SidF .framer-1yvffvx > :first-child, .framer-3SidF .framer-1eby98a > :first-child, .framer-3SidF .framer-1cwl5y5 > :first-child, .framer-3SidF .framer-dzi1x4 > :first-child, .framer-3SidF .framer-ftrjx4 > :first-child, .framer-3SidF .framer-oq14av > :first-child, .framer-3SidF .framer-fk808e > :first-child, .framer-3SidF .framer-1mj298k > :first-child, .framer-3SidF .framer-l1nxfv > :first-child, .framer-3SidF .framer-1qg7i7f > :first-child, .framer-3SidF .framer-1dciqhg > :first-child, .framer-3SidF .framer-19uah7m > :first-child, .framer-3SidF .framer-1rpi3n4 > :first-child, .framer-3SidF .framer-2vome2 > :first-child, .framer-3SidF .framer-754ekz > :first-child, .framer-3SidF .framer-cp519e > :first-child, .framer-3SidF .framer-yhkhmu > :first-child { margin-left: 0px; } .framer-3SidF .framer-v638ot > :last-child, .framer-3SidF .framer-ta2xhr > :last-child, .framer-3SidF .framer-1gzlo0z > :last-child, .framer-3SidF .framer-1lquinw > :last-child, .framer-3SidF .framer-1yvffvx > :last-child, .framer-3SidF .framer-1eby98a > :last-child, .framer-3SidF .framer-1cwl5y5 > :last-child, .framer-3SidF .framer-dzi1x4 > :last-child, .framer-3SidF .framer-ftrjx4 > :last-child, .framer-3SidF .framer-oq14av > :last-child, .framer-3SidF .framer-fk808e > :last-child, .framer-3SidF .framer-1mj298k > :last-child, .framer-3SidF .framer-l1nxfv > :last-child, .framer-3SidF .framer-1qg7i7f > :last-child, .framer-3SidF .framer-1dciqhg > :last-child, .framer-3SidF .framer-19uah7m > :last-child, .framer-3SidF .framer-1rpi3n4 > :last-child, .framer-3SidF .framer-2vome2 > :last-child, .framer-3SidF .framer-754ekz > :last-child, .framer-3SidF .framer-cp519e > :last-child, .framer-3SidF .framer-yhkhmu > :last-child { margin-right: 0px; } .framer-3SidF .framer-1gzlo0z > *, .framer-3SidF .framer-754ekz > * { margin: 0px; margin-left: calc(140px / 2); margin-right: calc(140px / 2); } .framer-3SidF .framer-yx52t4 > * { margin: 0px; margin-bottom: calc(20px / 2); margin-top: calc(20px / 2); } .framer-3SidF .framer-112z1mn > *, .framer-3SidF .framer-17nm4kd > *, .framer-3SidF .framer-fhvqns > *, .framer-3SidF .framer-1lbsrgu > *, .framer-3SidF .framer-lob243 > *, .framer-3SidF .framer-1lhxbjq > *, .framer-3SidF .framer-12bvop8 > *, .framer-3SidF .framer-4y22m9 > *, .framer-3SidF .framer-164l20x > *, .framer-3SidF .framer-cqzgxj > *, .framer-3SidF .framer-14w81th > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-3SidF .framer-1lquinw > * { margin: 0px; margin-left: calc(30px / 2); margin-right: calc(30px / 2); } .framer-3SidF .framer-jjkesf > *, .framer-3SidF .framer-13vh2sd > *, .framer-3SidF .framer-1772y9t > *, .framer-3SidF .framer-gjaub5 > *, .framer-3SidF .framer-1sbkav5 > * { margin: 0px; margin-bottom: calc(30px / 2); margin-top: calc(30px / 2); } .framer-3SidF .framer-1oi9ksi > * { margin: 0px; margin-bottom: calc(12px / 2); margin-top: calc(12px / 2); } .framer-3SidF .framer-1qg7i7f > *, .framer-3SidF .framer-1dciqhg > *, .framer-3SidF .framer-1rpi3n4 > *, .framer-3SidF .framer-2vome2 > *, .framer-3SidF .framer-yhkhmu > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-3SidF .framer-3e2m0k > * { margin: 0px; margin-bottom: calc(50px / 2); margin-top: calc(50px / 2); } }", "@media (min-width: 1024px) and (max-width: 1399px) { .framer-3SidF .hidden-72rtr7 { display: none !important; } }", `@media (min-width: 1400px) { .framer-3SidF .hidden-58buo2 { display: none !important; } .${mt.bodyClassName} { background: hsl(0, 0%, 0%); } .framer-3SidF .framer-72rtr7 { width: 1400px; } .framer-3SidF .framer-pu8lnj { right: 57px; top: 120px; } .framer-3SidF .framer-1epbknj { height: var(--framer-aspect-ratio-supported, 705px); } .framer-3SidF .framer-k8qu1q { height: var(--framer-aspect-ratio-supported, 83px); } .framer-3SidF .framer-vl0y73 { height: var(--framer-aspect-ratio-supported, 204px); } .framer-3SidF .framer-ta2xhr, .framer-3SidF .framer-18xwxfe { height: var(--framer-aspect-ratio-supported, 133px); } .framer-3SidF .framer-1q6jqyf { padding: 0px 100px 0px 100px; } .framer-3SidF .framer-1gzlo0z { height: var(--framer-aspect-ratio-supported, 543px); } .framer-3SidF .framer-1eby98a, .framer-3SidF .framer-1syiz2p { height: var(--framer-aspect-ratio-supported, 89px); } .framer-3SidF .framer-uq89c8, .framer-3SidF .framer-5qfwc, .framer-3SidF .framer-81gh5p, .framer-3SidF .framer-iemz52 { height: var(--framer-aspect-ratio-supported, 686px); } .framer-3SidF .framer-1cwl5y5 { height: var(--framer-aspect-ratio-supported, 647px); z-index: 4; } .framer-3SidF .framer-17nm4kd, .framer-3SidF .framer-13vh2sd, .framer-3SidF .framer-1lbsrgu, .framer-3SidF .framer-1lhxbjq { max-width: 700px; } .framer-3SidF .framer-fhvqns, .framer-3SidF .framer-lob243 { border-bottom-left-radius: 50px; border-bottom-right-radius: 50px; border-top-left-radius: 50px; border-top-right-radius: 50px; } .framer-3SidF .framer-dzi1x4, .framer-3SidF .framer-nkp9ki { height: var(--framer-aspect-ratio-supported, 185px); } .framer-3SidF .framer-ftrjx4 { height: var(--framer-aspect-ratio-supported, 673px); } .framer-3SidF .framer-oq14av, .framer-3SidF .framer-1j6dl1f { height: var(--framer-aspect-ratio-supported, 288px); } .framer-3SidF .framer-13glbb, .framer-3SidF .framer-1ori1hz { height: var(--framer-aspect-ratio-supported, 834px); } .framer-3SidF .framer-fk808e { height: var(--framer-aspect-ratio-supported, 818px); } .framer-3SidF .framer-12bvop8 { border-bottom-left-radius: 40px; border-bottom-right-radius: 40px; border-top-left-radius: 40px; border-top-right-radius: 40px; } .framer-3SidF .framer-1mj298k, .framer-3SidF .framer-y6lzce { height: var(--framer-aspect-ratio-supported, 281px); } .framer-3SidF .framer-eh5h2a { height: var(--framer-aspect-ratio-supported, 952px); } .framer-3SidF .framer-uguw1a-container { height: var(--framer-aspect-ratio-supported, 672px); width: 80%; } .framer-3SidF .framer-l1nxfv, .framer-3SidF .framer-spkhsj { height: var(--framer-aspect-ratio-supported, 151px); } .framer-3SidF .framer-1qg7i7f, .framer-3SidF .framer-1dciqhg { height: var(--framer-aspect-ratio-supported, 583px); } .framer-3SidF .framer-1ouy69k { height: var(--framer-aspect-ratio-supported, 595px); } .framer-3SidF .framer-1vgipyk, .framer-3SidF .framer-1kasqe, .framer-3SidF .framer-1450m23 { height: var(--framer-aspect-ratio-supported, 280px); } .framer-3SidF .framer-1q8we4i { height: var(--framer-aspect-ratio-supported, 247px); } .framer-3SidF .framer-1xd11nn { height: var(--framer-aspect-ratio-supported, 442px); } .framer-3SidF .framer-5o8k8p { bottom: -126px; height: var(--framer-aspect-ratio-supported, 290px); } .framer-3SidF .framer-1rpi3n4 { height: var(--framer-aspect-ratio-supported, 155px); } .framer-3SidF .framer-2vome2 { height: var(--framer-aspect-ratio-supported, 135px); } .framer-3SidF .framer-1c8abkz { height: 700px; } .framer-3SidF .framer-i6lwij { height: var(--framer-aspect-ratio-supported, 766px); } .framer-3SidF .framer-c25zvs { aspect-ratio: 0.7857142857142857 / 1; height: var(--framer-aspect-ratio-supported, 322px); } .framer-3SidF .framer-1vu2gcj { height: var(--framer-aspect-ratio-supported, 444px); } .framer-3SidF .framer-qkk51q-container { height: var(--framer-aspect-ratio-supported, 225px); } .framer-3SidF .framer-1jvr13v-container { aspect-ratio: 0.58875 / 1; height: var(--framer-aspect-ratio-supported, 401px); } .framer-3SidF .framer-k448eq { height: var(--framer-aspect-ratio-supported, 124px); } .framer-3SidF .framer-si17cb { height: var(--framer-aspect-ratio-supported, 56px); } .framer-3SidF .framer-ya935w { height: var(--framer-aspect-ratio-supported, 49px); }}`, `@media (min-width: 810px) and (max-width: 1023px) { .framer-3SidF .hidden-93rnvh { display: none !important; } .${mt.bodyClassName} { background: hsl(0, 0%, 0%); } .framer-3SidF .framer-72rtr7 { width: 810px; } .framer-3SidF .framer-pu8lnj { height: var(--framer-aspect-ratio-supported, 94px); right: 25px; top: 82px; width: 94px; } .framer-3SidF .framer-hd4p95-container { height: 94px; left: calc(50.00000000000002% - 94px / 2); top: calc(50.00000000000002% - 94px / 2); width: 94px; } .framer-3SidF .framer-1bz53hd { bottom: unset; height: 94px; left: calc(50.00000000000002% - 94px / 2); right: unset; top: calc(50.00000000000002% - 94px / 2); width: 94px; } .framer-3SidF .framer-1um3dja { bottom: 30px; left: 35px; right: 34px; top: 30px; } .framer-3SidF .framer-1epbknj { height: var(--framer-aspect-ratio-supported, 504px); } .framer-3SidF .framer-vl0y73 { height: var(--framer-aspect-ratio-supported, 118px); } .framer-3SidF .framer-ta2xhr, .framer-3SidF .framer-18xwxfe { height: var(--framer-aspect-ratio-supported, 95px); } .framer-3SidF .framer-1gzlo0z { height: var(--framer-aspect-ratio-supported, 465px); padding: 40px 40px 40px 40px; } .framer-3SidF .framer-1eby98a, .framer-3SidF .framer-1syiz2p { height: var(--framer-aspect-ratio-supported, 52px); } .framer-3SidF .framer-1i0rx8c { background-color: #000000; } .framer-3SidF .framer-uq89c8, .framer-3SidF .framer-81gh5p { height: var(--framer-aspect-ratio-supported, 397px); order: 0; } .framer-3SidF .framer-5qfwc, .framer-3SidF .framer-iemz52 { height: var(--framer-aspect-ratio-supported, 397px); order: 1; } .framer-3SidF .framer-1cwl5y5, .framer-3SidF .framer-ftrjx4 { aspect-ratio: unset; background-color: #000000; flex-direction: column; gap: 60px; height: min-content; order: 3; padding: 40px 0px 0px 0px; } .framer-3SidF .framer-17nm4kd { order: 2; width: 61%; } .framer-3SidF .framer-fhvqns, .framer-3SidF .framer-lob243, .framer-3SidF .framer-12bvop8 { border-bottom-left-radius: 40px; border-bottom-right-radius: 40px; border-top-left-radius: 40px; border-top-right-radius: 40px; } .framer-3SidF .framer-jjkesf { order: 1; width: 80%; } .framer-3SidF .framer-17l21fw, .framer-3SidF .framer-1wd7ouk { height: var(--framer-aspect-ratio-supported, 392px); order: 2; } .framer-3SidF .framer-dzi1x4, .framer-3SidF .framer-nkp9ki { height: var(--framer-aspect-ratio-supported, 107px); } .framer-3SidF .framer-13vh2sd { width: 80%; } .framer-3SidF .framer-1lbsrgu { width: 61%; } .framer-3SidF .framer-oq14av, .framer-3SidF .framer-1j6dl1f { height: var(--framer-aspect-ratio-supported, 167px); } .framer-3SidF .framer-13glbb { height: var(--framer-aspect-ratio-supported, 483px); order: 0; } .framer-3SidF .framer-1ori1hz { height: var(--framer-aspect-ratio-supported, 483px); order: 1; } .framer-3SidF .framer-fk808e { aspect-ratio: unset; background-color: #000000; flex-direction: column; gap: 60px; height: min-content; order: 3; padding: 60px 40px 0px 40px; } .framer-3SidF .framer-1lhxbjq { order: 1; width: 61%; } .framer-3SidF .framer-1772y9t { order: 0; width: 80%; } .framer-3SidF .framer-lz6fmn { height: var(--framer-aspect-ratio-supported, 472px); order: 2; } .framer-3SidF .framer-1mj298k, .framer-3SidF .framer-y6lzce { height: var(--framer-aspect-ratio-supported, 163px); } .framer-3SidF .framer-eh5h2a { height: var(--framer-aspect-ratio-supported, 760px); padding: 90px 0px 40px 0px; } .framer-3SidF .framer-uguw1a-container { height: var(--framer-aspect-ratio-supported, 486px); } .framer-3SidF .framer-l1nxfv { height: var(--framer-aspect-ratio-supported, 88px); z-index: 5; } .framer-3SidF .framer-spkhsj { height: var(--framer-aspect-ratio-supported, 88px); } .framer-3SidF .framer-1qg7i7f { aspect-ratio: unset; background-color: #000000; flex-direction: column; gap: 70px; height: min-content; padding: 0px 40px 50px 40px; z-index: 5; } .framer-3SidF .framer-gjaub5 { padding: 0px 50px 0px 50px; width: 80%; } .framer-3SidF .framer-1ouy69k { height: var(--framer-aspect-ratio-supported, 576px); width: 70%; } .framer-3SidF .framer-1vgipyk { height: var(--framer-aspect-ratio-supported, 274px); left: 20%; top: 44%; } .framer-3SidF .framer-1kasqe { height: var(--framer-aspect-ratio-supported, 275px); left: 48%; top: 64%; } .framer-3SidF .framer-1q8we4i { height: var(--framer-aspect-ratio-supported, 239px); left: 77%; top: 43%; } .framer-3SidF .framer-1450m23 { height: var(--framer-aspect-ratio-supported, 280px); left: 48%; top: 16%; } .framer-3SidF .framer-1dciqhg { aspect-ratio: unset; background-color: #000000; flex-direction: column; gap: 90px; height: min-content; overflow: visible; z-index: 5; } .framer-3SidF .framer-1xd11nn { height: var(--framer-aspect-ratio-supported, 420px); order: 2; width: 46%; } .framer-3SidF .framer-1sbkav5 { order: 0; padding: 0px 50px 0px 50px; width: 80%; } .framer-3SidF .framer-19uah7m { height: 130px; z-index: 4; } .framer-3SidF .framer-5o8k8p { bottom: -56px; height: var(--framer-aspect-ratio-supported, 84px); } .framer-3SidF .framer-2vome2 { height: var(--framer-aspect-ratio-supported, 78px); } .framer-3SidF .framer-1c8abkz { height: 570px; } .framer-3SidF .framer-p552lo-container { width: 540px; } .framer-3SidF .framer-yhkhmu { top: -70px; } .framer-3SidF .framer-6e84c3, .framer-3SidF .framer-1ljvo86 { width: 928px; } .framer-3SidF .framer-18a9rib { height: var(--framer-aspect-ratio-supported, 52px); width: 928px; } .framer-3SidF .framer-i6lwij { aspect-ratio: unset; height: 578px; left: calc(50.00000000000002% - min(200px, 200px) / 2); max-width: 200px; transform: perspective(1200px); width: 200px; } .framer-3SidF .framer-1vu2gcj { height: var(--framer-aspect-ratio-supported, 352px); } .framer-3SidF .framer-qkk51q-container { height: var(--framer-aspect-ratio-supported, 179px); } .framer-3SidF .framer-k448eq { height: var(--framer-aspect-ratio-supported, 97px); } .framer-3SidF .framer-ya935w { height: var(--framer-aspect-ratio-supported, 38px); } .framer-3SidF .framer-m40nf9 { left: calc(50.00000000000002% - min(200px, 18%) / 2); max-width: 200px; } .framer-3SidF .framer-85bmw7 { left: calc(49.902056807051935% - min(200px, 18.168462291870714%) / 2); max-width: 200px; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-3SidF .framer-1cwl5y5, .framer-3SidF .framer-ftrjx4, .framer-3SidF .framer-fk808e, .framer-3SidF .framer-1qg7i7f, .framer-3SidF .framer-1dciqhg { gap: 0px; } .framer-3SidF .framer-1cwl5y5 > *, .framer-3SidF .framer-ftrjx4 > *, .framer-3SidF .framer-fk808e > * { margin: 0px; margin-bottom: calc(60px / 2); margin-top: calc(60px / 2); } .framer-3SidF .framer-1cwl5y5 > :first-child, .framer-3SidF .framer-ftrjx4 > :first-child, .framer-3SidF .framer-fk808e > :first-child, .framer-3SidF .framer-1qg7i7f > :first-child, .framer-3SidF .framer-1dciqhg > :first-child { margin-top: 0px; } .framer-3SidF .framer-1cwl5y5 > :last-child, .framer-3SidF .framer-ftrjx4 > :last-child, .framer-3SidF .framer-fk808e > :last-child, .framer-3SidF .framer-1qg7i7f > :last-child, .framer-3SidF .framer-1dciqhg > :last-child { margin-bottom: 0px; } .framer-3SidF .framer-1qg7i7f > * { margin: 0px; margin-bottom: calc(70px / 2); margin-top: calc(70px / 2); } .framer-3SidF .framer-1dciqhg > * { margin: 0px; margin-bottom: calc(90px / 2); margin-top: calc(90px / 2); } }}`, `@media (max-width: 809px) { .framer-3SidF .hidden-g5j6vk { display: none !important; } .${mt.bodyClassName} { background: hsl(0, 0%, 0%); } .framer-3SidF .framer-72rtr7 { width: 390px; } .framer-3SidF .framer-pu8lnj { height: var(--framer-aspect-ratio-supported, 50px); right: 17px; top: 70px; width: 50px; } .framer-3SidF .framer-hd4p95-container { aspect-ratio: 1 / 1; height: var(--framer-aspect-ratio-supported, 50px); left: 50%; top: 50%; transform: translate(-50%, -50%); width: 50px; } .framer-3SidF .framer-1um3dja { bottom: 15px; left: 19px; right: 18px; top: 16px; } .framer-3SidF .framer-1epbknj { height: var(--framer-aspect-ratio-supported, 504px); } .framer-3SidF .framer-vl0y73 { height: var(--framer-aspect-ratio-supported, 112px); } .framer-3SidF .framer-ta2xhr { flex-direction: column; height: var(--framer-aspect-ratio-supported, 95px); } .framer-3SidF .framer-18xwxfe { flex: none; height: var(--framer-aspect-ratio-supported, 95px); width: 100%; } .framer-3SidF .framer-1q6jqyf { padding: 50px 30px 50px 30px; } .framer-3SidF .framer-1gzlo0z { gap: 0px; height: var(--framer-aspect-ratio-supported, 578px); padding: 50px 10px 50px 10px; } .framer-3SidF .framer-yx52t4 { gap: 50px; } .framer-3SidF .framer-112z1mn { gap: 40px; } .framer-3SidF .framer-1lquinw { gap: 20px; padding: 10px 0px 10px 0px; } .framer-3SidF .framer-1gia23h-container, .framer-3SidF .framer-1jcztul-container { width: 120px; } .framer-3SidF .framer-1yvffvx { height: var(--framer-aspect-ratio-supported, 634px); top: 40px; transform: translateX(-50%); width: 292px; } .framer-3SidF .framer-1de65tj-container { flex: none; width: 100%; } .framer-3SidF .framer-150y1kr { width: 90%; } .framer-3SidF .framer-1eby98a, .framer-3SidF .framer-1syiz2p { height: var(--framer-aspect-ratio-supported, 25px); } .framer-3SidF .framer-1i0rx8c { background-color: #000000; padding: 0px 10px 0px 10px; } .framer-3SidF .framer-uq89c8 { height: var(--framer-aspect-ratio-supported, 306px); order: 0; width: 160%; } .framer-3SidF .framer-5qfwc { height: var(--framer-aspect-ratio-supported, 306px); order: 1; width: 160%; } .framer-3SidF .framer-1cwl5y5, .framer-3SidF .framer-ftrjx4 { aspect-ratio: unset; background-color: #000000; flex-direction: column; gap: 60px; height: min-content; order: 3; padding: 40px 0px 0px 0px; } .framer-3SidF .framer-17nm4kd { order: 2; padding: 0px 40px 0px 40px; width: 100%; } .framer-3SidF .framer-fhvqns, .framer-3SidF .framer-lob243, .framer-3SidF .framer-12bvop8 { border-bottom-left-radius: 40px; border-bottom-right-radius: 40px; border-top-left-radius: 40px; border-top-right-radius: 40px; } .framer-3SidF .framer-jjkesf { order: 1; padding: 0px 20px 0px 20px; width: 90%; } .framer-3SidF .framer-17l21fw { height: var(--framer-aspect-ratio-supported, 301px); order: 2; width: 36%; } .framer-3SidF .framer-dzi1x4, .framer-3SidF .framer-nkp9ki { height: var(--framer-aspect-ratio-supported, 52px); } .framer-3SidF .framer-1l4437k, .framer-3SidF .framer-rb9igs, .framer-3SidF .framer-19r1i4c { padding: 0px 10px 0px 10px; } .framer-3SidF .framer-81gh5p { height: var(--framer-aspect-ratio-supported, 267px); order: 0; width: 140%; } .framer-3SidF .framer-iemz52 { height: var(--framer-aspect-ratio-supported, 267px); order: 1; width: 140%; } .framer-3SidF .framer-13vh2sd { padding: 0px 20px 0px 20px; width: 100%; } .framer-3SidF .framer-1lbsrgu { padding: 0px 40px 0px 40px; width: 100%; } .framer-3SidF .framer-1wd7ouk { height: var(--framer-aspect-ratio-supported, 267px); order: 2; width: 32%; } .framer-3SidF .framer-oq14av, .framer-3SidF .framer-1j6dl1f { height: var(--framer-aspect-ratio-supported, 80px); } .framer-3SidF .framer-13glbb { height: var(--framer-aspect-ratio-supported, 464px); order: 0; width: 200%; } .framer-3SidF .framer-1ori1hz { height: var(--framer-aspect-ratio-supported, 464px); order: 1; width: 200%; } .framer-3SidF .framer-fk808e { aspect-ratio: unset; background-color: #000000; flex-direction: column; gap: 60px; height: min-content; order: 3; padding: 60px 0px 0px 0px; } .framer-3SidF .framer-1lhxbjq { order: 1; width: 100%; } .framer-3SidF .framer-1772y9t { order: 0; padding: 0px 20px 0px 20px; width: 100%; } .framer-3SidF .framer-lz6fmn { height: var(--framer-aspect-ratio-supported, 442px); order: 2; width: 44%; } .framer-3SidF .framer-1mj298k, .framer-3SidF .framer-y6lzce { height: var(--framer-aspect-ratio-supported, 78px); } .framer-3SidF .framer-eh5h2a { height: var(--framer-aspect-ratio-supported, 1027px); } .framer-3SidF .framer-1yt1rq5 { padding: 0px 0px 50px 0px; } .framer-3SidF .framer-1oi9ksi { gap: 30px; width: 83%; } .framer-3SidF .framer-uguw1a-container { aspect-ratio: 0.6678082191780822 / 1; height: var(--framer-aspect-ratio-supported, 584px); } .framer-3SidF .framer-l1nxfv { height: var(--framer-aspect-ratio-supported, 42px); z-index: 5; } .framer-3SidF .framer-spkhsj { height: var(--framer-aspect-ratio-supported, 42px); } .framer-3SidF .framer-1qg7i7f { aspect-ratio: unset; background-color: #000000; flex-direction: column; gap: 70px; height: min-content; padding: 0px 40px 50px 40px; z-index: 5; } .framer-3SidF .framer-gjaub5 { padding: 0px 10px 0px 10px; width: 100%; } .framer-3SidF .framer-1ouy69k { height: var(--framer-aspect-ratio-supported, 349px); width: 100%; } .framer-3SidF .framer-1vgipyk { height: var(--framer-aspect-ratio-supported, 166px); left: 20%; top: 44%; } .framer-3SidF .framer-1kasqe { height: var(--framer-aspect-ratio-supported, 167px); left: 48%; top: 66%; } .framer-3SidF .framer-1q8we4i { height: var(--framer-aspect-ratio-supported, 145px); left: 79%; top: 43%; } .framer-3SidF .framer-1450m23 { height: var(--framer-aspect-ratio-supported, 180px); left: 48%; top: 16%; } .framer-3SidF .framer-1dciqhg { aspect-ratio: unset; background-color: #000000; flex-direction: column; gap: 90px; height: min-content; overflow: visible; z-index: 5; } .framer-3SidF .framer-1xd11nn { height: var(--framer-aspect-ratio-supported, 308px); order: 2; width: 70%; } .framer-3SidF .framer-1sbkav5 { order: 0; padding: 0px 10px 0px 10px; width: 80%; } .framer-3SidF .framer-19uah7m { height: 80px; z-index: 4; } .framer-3SidF .framer-5o8k8p { bottom: -56px; height: var(--framer-aspect-ratio-supported, 62px); } .framer-3SidF .framer-2vome2 { height: var(--framer-aspect-ratio-supported, 58px); } .framer-3SidF .framer-1c8abkz { height: 570px; } .framer-3SidF .framer-754ekz { padding: 130px 10px 130px 10px; } .framer-3SidF .framer-p552lo-container { width: 350px; } .framer-3SidF .framer-cp519e { flex-direction: column; } .framer-3SidF .framer-yhkhmu { height: var(--framer-aspect-ratio-supported, 56px); top: -30px; } .framer-3SidF .framer-6e84c3, .framer-3SidF .framer-1ljvo86 { aspect-ratio: 18.18018018018018 / 1; height: var(--framer-aspect-ratio-supported, 56px); width: 1018px; } .framer-3SidF .framer-18a9rib { height: var(--framer-aspect-ratio-supported, 56px); width: 1018px; } .framer-3SidF .framer-i6lwij { aspect-ratio: unset; height: 578px; left: calc(50.00000000000002% - min(200px, 200px) / 2); max-width: 200px; transform: perspective(1200px); width: 200px; } .framer-3SidF .framer-1vu2gcj { height: var(--framer-aspect-ratio-supported, 352px); } .framer-3SidF .framer-qkk51q-container { height: var(--framer-aspect-ratio-supported, 179px); } .framer-3SidF .framer-k448eq { height: var(--framer-aspect-ratio-supported, 97px); } .framer-3SidF .framer-ya935w { height: var(--framer-aspect-ratio-supported, 38px); } .framer-3SidF .framer-m40nf9 { left: calc(50.00000000000002% - min(370px, 52%) / 2); width: 52%; } .framer-3SidF .framer-85bmw7 { left: calc(49.902056807051935% - min(370px, 50%) / 2); width: 50%; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-3SidF .framer-ta2xhr, .framer-3SidF .framer-1gzlo0z, .framer-3SidF .framer-yx52t4, .framer-3SidF .framer-112z1mn, .framer-3SidF .framer-1lquinw, .framer-3SidF .framer-1cwl5y5, .framer-3SidF .framer-ftrjx4, .framer-3SidF .framer-fk808e, .framer-3SidF .framer-1oi9ksi, .framer-3SidF .framer-1qg7i7f, .framer-3SidF .framer-1dciqhg, .framer-3SidF .framer-cp519e { gap: 0px; } .framer-3SidF .framer-ta2xhr > *, .framer-3SidF .framer-cp519e > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-3SidF .framer-ta2xhr > :first-child, .framer-3SidF .framer-yx52t4 > :first-child, .framer-3SidF .framer-112z1mn > :first-child, .framer-3SidF .framer-1cwl5y5 > :first-child, .framer-3SidF .framer-ftrjx4 > :first-child, .framer-3SidF .framer-fk808e > :first-child, .framer-3SidF .framer-1oi9ksi > :first-child, .framer-3SidF .framer-1qg7i7f > :first-child, .framer-3SidF .framer-1dciqhg > :first-child, .framer-3SidF .framer-cp519e > :first-child { margin-top: 0px; } .framer-3SidF .framer-ta2xhr > :last-child, .framer-3SidF .framer-yx52t4 > :last-child, .framer-3SidF .framer-112z1mn > :last-child, .framer-3SidF .framer-1cwl5y5 > :last-child, .framer-3SidF .framer-ftrjx4 > :last-child, .framer-3SidF .framer-fk808e > :last-child, .framer-3SidF .framer-1oi9ksi > :last-child, .framer-3SidF .framer-1qg7i7f > :last-child, .framer-3SidF .framer-1dciqhg > :last-child, .framer-3SidF .framer-cp519e > :last-child { margin-bottom: 0px; } .framer-3SidF .framer-1gzlo0z > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-3SidF .framer-1gzlo0z > :first-child, .framer-3SidF .framer-1lquinw > :first-child { margin-left: 0px; } .framer-3SidF .framer-1gzlo0z > :last-child, .framer-3SidF .framer-1lquinw > :last-child { margin-right: 0px; } .framer-3SidF .framer-yx52t4 > * { margin: 0px; margin-bottom: calc(50px / 2); margin-top: calc(50px / 2); } .framer-3SidF .framer-112z1mn > * { margin: 0px; margin-bottom: calc(40px / 2); margin-top: calc(40px / 2); } .framer-3SidF .framer-1lquinw > * { margin: 0px; margin-left: calc(20px / 2); margin-right: calc(20px / 2); } .framer-3SidF .framer-1cwl5y5 > *, .framer-3SidF .framer-ftrjx4 > *, .framer-3SidF .framer-fk808e > * { margin: 0px; margin-bottom: calc(60px / 2); margin-top: calc(60px / 2); } .framer-3SidF .framer-1oi9ksi > * { margin: 0px; margin-bottom: calc(30px / 2); margin-top: calc(30px / 2); } .framer-3SidF .framer-1qg7i7f > * { margin: 0px; margin-bottom: calc(70px / 2); margin-top: calc(70px / 2); } .framer-3SidF .framer-1dciqhg > * { margin: 0px; margin-bottom: calc(90px / 2); margin-top: calc(90px / 2); } }}`, ...gi, ..._i, ...di, ...fi, ...yi],
    ft = K(Km, el, "framer-3SidF"),
    q1 = ft;
ft.displayName = "Home";
ft.defaultProps = {
    height: 6622,
    width: 1024
};
re(ft, [...rm, ...am, ...im, ...nm, ...om, ...sm, ...mm, ...lm, ...fm, ...cm, ...ui, ...bi, ...ci, ...li, ...wi]);
var A1 = {
    exports: {
        Props: {
            type: "tsType",
            annotations: {
                framerContractVersion: "1"
            }
        },
        default: {
            type: "reactComponent",
            name: "FrameraugiA20Il",
            slots: [],
            annotations: {
                framerIntrinsicWidth: "1024",
                framerCanvasComponentVariantDetails: '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"tXpGpVfEc":{"layout":["fixed","auto"]},"iRL2gYRtC":{"layout":["fixed","auto"]},"sH43zL1oy":{"layout":["fixed","auto"]}}}',
                framerContractVersion: "1",
                framerIntrinsicHeight: "6622",
                framerResponsiveScreen: ""
            }
        },
        __FramerMetadata__: {
            type: "variable"
        }
    }
};
export {
    A1 as __FramerMetadata__, q1 as
    default
};
//# sourceMappingURL=oSrOqnsfHEWF58ZMIaRu2WM7a44Bo2H8V7TCMJahEhw.7ORIVPVH.mjs.map