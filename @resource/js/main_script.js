$(document).ready(function () {
    //$('header').load('./@include/header.html');
    //document.getElementById("header").innerHTML='<nav><ul><li class="menu-list"><a href="about.html">About</a></li><li class="menu-list"><a href="interior.html">Interior</a></li><li class="menu-list"><a href="architectural.html">Architectural</a></li><li class="menu-list"><a href="recruit.html">Recruit</a></li></ul></nav>';
    // $.ajax({
    //     url : "./@include/header.html",
    //     success : function(result){
    //         $('.header').html(result);
    //         naviActi();
    //     }
    // });
    $("header").addClass('load-effect');
  //$(".mobile-header").addClass('load-effect');
    var mobilecheck = function () {
        var check = false;
        (function(a,b){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
            return check;
        }
            if(mobilecheck()){
          location.href='/m'+ window.location.pathname;;
          //모바일로 접속시 이동 경로
     }
});
var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.findInternal = function (a, f, d) {
    a instanceof String && (a = String(a));
    for (var g = a.length, h = 0; h < g; h++) {
        var b = a[h];
        if (f.call(d, b, h, a)) 
            return {i: h, v: b}
        
    }
    return {i: -1, v: void 0}
};
$jscomp.defineProperty = "function" == typeof Object.defineProperties
    ? Object.defineProperty
    : function (a, f, d) {
        a != Array.prototype && a != Object.prototype && (a[f] = d.value)
    };
$jscomp.getGlobal = function (a) {
    return "undefined" != typeof window && window === a
        ? a
        : "undefined" != typeof global && null != global
            ? global
            : a
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.polyfill = function (a, f, d, g) {
    if (f) {
        d = $jscomp.global;
        a = a.split(".");
        for (g = 0; g < a.length - 1; g++) {
            var h = a[g];
            h in d || (d[h] =
                {});
            d = d[h]
        }
        a = a[a.length - 1];
        g = d[a];
        f = f(g);
        f != g && null != f && $jscomp.defineProperty(d, a, {
            configurable: !0,
            writable: !0,
            value: f
        })
    }
};
$jscomp.polyfill("Array.prototype.find", function (a) {
    return a
        ? a
        : function (a, d) {
            return $jscomp.findInternal(this, a, d).v
        }
}, "es6-impl", "es3");
$jscomp.SYMBOL_PREFIX = "jscomp_symbol_";
$jscomp.initSymbol = function () {
    $jscomp.initSymbol = function () {};
    $jscomp.global.Symbol || ($jscomp.global.Symbol = $jscomp.Symbol)
};
$jscomp.symbolCounter_ = 0;
$jscomp.Symbol = function (a) {
    return $jscomp.SYMBOL_PREFIX + (a || "") + $jscomp.symbolCounter_ ++
};
$jscomp.initSymbolIterator = function () {
    $jscomp.initSymbol();
    var a = $jscomp
        .global
        .Symbol
        .iterator;
    a || (a = $jscomp
        .global
        .Symbol
        .iterator = $jscomp.global.Symbol("iterator"));
    "function" != typeof Array.prototype[a] && $jscomp.defineProperty(Array.prototype, a, {
        configurable: !0,
        writable: !0,
        value: function () {
            return $jscomp.arrayIterator(this)
        }
    });
    $jscomp.initSymbolIterator = function () {}
};
$jscomp.arrayIterator = function (a) {
    var f = 0;
    return $jscomp.iteratorPrototype(function () {
        return f < a.length
            ? {
                done: !1,
                value: a[f++]
            }
            : {
                done: !0
            }
    })
};
$jscomp.iteratorPrototype = function (a) {
    $jscomp.initSymbolIterator();
    a = {
        next: a
    };
    a[$jscomp
            .global
            .Symbol
            .iterator] = function () {
        return this
    };
    return a
};
$jscomp.iteratorFromArray = function (a, f) {
    $jscomp.initSymbolIterator();
    a instanceof String && (a += "");
    var d = 0,
        g = {
            next: function () {
                if (d < a.length) {
                    var h = d++;
                    return {
                        value: f(h, a[h]),
                        done: !1
                    }
                }
                g.next = function () {
                    return {
                        done: !0,
                        value: void 0
                    }
                };
                return g.next()
            }
        };
    g[Symbol.iterator] = function () {
        return g
    };
    return g
};
$jscomp.polyfill("Array.prototype.keys", function (a) {
    return a
        ? a
        : function () {
            return $jscomp.iteratorFromArray(this, function (a) {
                return a
            })
        }
}, "es6-impl", "es3");
!function (a) {
    var f,
        d = a.event;
    var g = d.special.tfsmartresize = {
        setup: function () {
            a(this).on("resize", g.handler)
        },
        teardown: function () {
            a(this).off("resize", g.handler)
        },
        handler: function (a, b) {
            var e = this,
                c = arguments,
                l = function () {
                    a.type = "tfsmartresize";
                    d.dispatch.apply(e, c)
                };
            f && clearTimeout(f);
            b
                ? l()
                : f = setTimeout(l, g.threshold)
        },
        threshold: 150
    }
}(jQuery);
var Themify,
    ThemifyGallery;
(function (a, f, d, g) {
        f.addEventListener("load", function () {
            f.loaded = !0;
            Themify.is_builder_active || Themify.triggerEvent(f, "resize");
            //Themify.body[0].classList.add("page-loaded")
        }, {
            once: !0,
            passive: !0
        });
        if ("function" !== typeof f.CustomEvent) {
            var h = function (b, a) {
                var e = d.createEvent("CustomEvent");
                e.initCustomEvent(
                    b,
                    !1,
                    !1,
                    a !== g
                        ? a.detail
                        : g
                );
                return e
            };
            h.prototype = f.Event.prototype;
            f.CustomEvent = h
        }
        Themify = {
            fonts: [],
            cssLazy: [],
            jsLazy: [],
            body: null,
            is_builder_active: !1,
            is_builder_loaded: !1,
            isLoaded: null,
            triggerEvent: function (b, a, c) {
                try {
                    var e = new f.CustomEvent(a, {detail: c})
                } catch (m) {
                    e = f.CustomEvent(a, {detail: c})
                }
                b.dispatchEvent(e)
            },
            UpdateQueryString: function (b, a, c) {
                c || (c = f.location.href);
                var e = RegExp("([?|&])" + b + "=.*?(&|#|$)(.*)", "gi");
                if (e.test(c)) 
                    return void 0 !== a && null !== a
                        ? c.replace(e, "$1" + b + "=" + a + "$2$3")
                        : c.replace(e, "$1$3").replace(/(&|\?)$/, "");
                
                if (void 0 !== a && null !== a) {
                    var e = -1 !== c.indexOf("?")
                            ? "&"
                            : "?",
                        d = c.split("#");
                    return c = d[0] + e + b + "=" + a,
                    d[1] && (c += "#" + d[1]),
                    c
                }
                return c
            },
            Init: function () {
                Themify.body = a("body");
                if ("undefined" !== typeof themify_vars) {
                    if ("undefined" !== typeof tbLocalScript && null !== tbLocalScript) {
                        var b = Themify;
                        b.is_builder_active = d
                            .body
                            .classList
                            .contains("themify_builder_active");
                        b.is_builder_active && (f
                            .top
                            .Themify
                            .is_builder_active =! 0);
                        var e = function (e, l) {
                            if (null !== d.querySelector(".themify_builder_content div:not(.js-turn-on-builder)")) {
                                if (! b.is_builder_active) {
                                    if (null === b.isLoaded) {
                                        var c = d.getElementById("builder-styles-css");
                                        if (null !== c && null === d.getElementById("themify-builder-style")) {
                                            var n = d.createElement("link");
                                            n.id = "themify-builder-style";
                                            n.rel = "stylesheet";
                                            n.type = "text/css";
                                            n.href = tbLocalScript.builder_url + "/css/themify-builder-style.css?ver=" + themify_vars.version;
                                            c.insertAdjacentElement("beforebegin", n);
                                            c = null
                                        }
                                    }
                                    if (l) {
                                        c = l[0].getElementsByClassName("tb_style_generated");
                                        for (n = c.length - 1; -1 < n; --n) 
                                            b.LoadCss(c[n].getAttribute("data-url"), !1),
                                            c[n].parentNode.removeChild(c[n]);
                                        
                                        !0 === b.isLoaded && a(f).triggerHandler("resize")
                                    }
                                }
                                null === b.isLoaded && b.LoadAsync(tbLocalScript.builder_url + "/js/themify.builder.script.js", function () {
                                    l && a(f).triggerHandler("resize");
                                    b.isLoaded = !0
                                }, null, null, function () {
                                    return "undefined" !== typeof ThemifyBuilderModuleJs
                                });
                                return !0
                            }
                            return !1
                        };
                        a(d).ready(function () {
                            tbLocalScript.isTouch = d
                                .body
                                .classList
                                .contains("touch");
                            if (! b.is_builder_active && !1 === e()) 
                                b.body.on("infiniteloaded.themify", e)
                            
                        })
                    }
                    this.bindEvents()
                }
            },
            bindEvents: function () {
                var b = Themify;
                f.loaded
                    ? (b.domready(), b.windowload())
                    : (a(f).load(b.windowload), a(d).ready(b.domready))
            },
            domready: function () {
                setTimeout(Themify.LazyLoad, 10);
                Themify.is_builder_active || (Themify.InitCarousel(), Themify.InitMap())
            },
            windowload: function () {
                for (var b = d.getElementsByClassName("shortcode"), a = b.length - 1; -1 < a; -- a) 
                    if (b[a].classList.contains("slider") || b[a].classList.contains("post-slider")) 
                        b[a].style.height = "auto",
                        b[a].style.visibility = "visible";
                    
                
                b = d.getElementsByClassName("slideshow-wrap");
                for (a = b.length - 1; -1 < a; -- a) 
                    b[a].style.height = "auto",
                    b[a].style.visibility = "visible";
                
                Themify.is_builder_active || Themify.InitGallery()
            },
            LazyLoad: function () {
                var b = Themify,
                    a = b.is_builder_active || d.getElementsByClassName("fa")[0] !== g || d.getElementsByClassName("fas")[0] !== g || d.getElementsByClassName("fab")[0] !== g || d.getElementsByClassName("far")[0] !== g,
                    c = b.is_builder_active || null !== d.querySelector(".module-menu[data-menu-breakpoint]") || d.getElementsByClassName("shortcode")[0] !== g || null !== d.querySelector('.section_spinner[class*="ti-"]');
                a || (a = b.checkFont("FontAwesome"));
                c || (c = null !== d.querySelector('span[class*="ti-"]')) || (c = null !== d.querySelector('i[class*="ti-"]'));
                c || (c = b.checkFont("Themify"));
                a && b.LoadCss(themify_vars.url + "/fontawesome/css/font-awesome.min.css", themify_vars.version);
                c && b.LoadCss(themify_vars.url + "/themify-icons/themify-icons.css", themify_vars.version);
                "string" === typeof themify_vars.fontello_path && null !== d.querySelector('i[class*="icon-"]') && b.LoadCss(themify_vars.fontello_path);
                (b.is_builder_active || d.getElementsByClassName("shortcode")[0] !== g) && b.LoadCss(themify_vars.url + "/css/themify.framework.css", null, d.getElementById("themify-framework-css"))
            },
            InitCarousel: function (b) {
                function e(b) {
                    c.each(function () {
                        if (0 < a(this).closest(".carousel-ready").length) 
                            return !0;
                        
                        a(this).find("> br, > p").remove();
                        var b = a(this),
                            c = JSON.parse(atob(a(this).data("slider"))),
                            e = "undefined" === typeof c.height
                                ? "auto"
                                : c.height,
                            d = g !== c.custom_numsldr
                                ? "#" + c.custom_numsldr
                                : "#slider-" + c.numsldr,
                            l = 1E3 <= c.speed
                                ? c.speed
                                : 1E3 * c.speed,
                            f = {
                                responsive: !0,
                                swipe: !0,
                                circular: c.wrapvar,
                                infinite: c.wrapvar,
                                auto: {
                                    play: 0 != c.auto,
                                    timeoutDuration: 1E3 <= c.auto
                                        ? c.auto
                                        : 1E3 *c.auto,
                                    duration: l,
                                    pauseOnHover: c.pause_hover
                                },
                                scroll: {
                                    items: parseInt(c.scroll),
                                    duration: l,
                                    fx: c.effect
                                },
                                items: {
                                    visible: {
                                        min: 1,
                                        max: parseInt(c.visible)
                                    },
                                    width: 120,
                                    height: e
                                },
                                onCreate: function (c) {
                                    b.closest(".caroufredsel_wrapper").outerHeight(b.outerHeight(!0));
                                    a(d).css({visibility: "visible", height: "auto"});
                                    b.closest(".carousel-wrap").addClass("carousel-ready")
                                }
                            };
                        c.slider_nav && (f.prev = d + " .carousel-prev", f.next = d + " .carousel-next");
                        c.pager && (f.pagination = d + " .carousel-pager");
                        b.imagesLoaded().always(function () {
                            b.carouFredSel(f)
                        })
                    });
                    a(f).off("tfsmartresize.tfcarousel").on("tfsmartresize.tfcarousel", function () {
                        c.each(function () {
                            var b = [],
                                c = a(this);
                            c.find("li").each(function () {
                                b.push(a(this).outerHeight(!0))
                            });
                            var e = Math.max.apply(Math, b);
                            c.outerHeight(e);
                            c.parent().outerHeight(e)
                        })
                    })
                }
                var c = a(".slides[data-slider]", b);
                if (0 < c.length) {
                    var d = this;
                    d.LoadAsync(themify_vars.includesURL + "js/imagesloaded.min.js", function () {
                        "undefined" === typeof a.fn.carouFredSel
                            ? d.LoadAsync(themify_vars.url + "/js/carousel.min.js", function () {
                                e(b)
                            }, null, null, function () {
                                return "undefined" !== typeof a.fn.carouFredSel
                            })
                            : e(b)
                    }, null, null, function () {
                        return "undefined" !== typeof a.fn.imagesLoaded
                    })
                }
            },
            InitMap: function (b) {
                var e = Themify;
                0 < a(".themify_map", b).length && (
                    "object" !== typeof google || "object" !== typeof google.maps || "enable" === themify_vars.isCached
                        ? (
                            "enable" === themify_vars.isCached
                                ? google.maps =
                                { __gjsload__: function () {}
                                }
                                : themify_vars.map_key || (themify_vars.map_key = ""),
                            e.LoadAsync("//maps.googleapis.com/maps/api/js", e.MapCallback, "v=3.exp&callback=Themify.MapCallback&key=" + themify_vars.map_key, null, function () {
                                return "object" === typeof google && "object" === typeof google.maps
                            })
                        )
                        : e.MapCallback(b)
                );
                0 < a(".themify_bing_map", b).length && (
                    "object" !== typeof Microsoft || "object" !== typeof Microsoft.Maps || "enable" === themify_vars.isCached
                        ? e.LoadAsync("//www.bing.com/api/maps/mapcontrol?", function () {
                            e.GetMap(b);
                            themify_vars.bing_map_key || (themify_vars.bing_map_key = "")
                        }, null, function () {
                            return "object" !== typeof Microsoft && "object" !== typeof Microsoft.Maps
                        })
                        : e.GetMap(b)
                )
            },
            MapCallback: function (b) {
                a(".themify_map", b).each(function (b) {
                    var c = a(this),
                        e = c.data("address"),
                        d = parseInt(c.data("zoom")),
                        n = c.data("type"),
                        f = 1 === c.data("scroll"),
                        h = 1 === c.data("drag"),
                        r = 1 === c.data("control");
                    setTimeout(function () {
                        var b = new google.maps.Geocoder;
                        var a = new google.maps.LatLng(-34.397, 150.644);
                        a = {
                            zoom: d,
                            center: a,
                            mapTypeId: google
                                .maps
                                .MapTypeId
                                .ROADMAP,
                            scrollwheel: f,
                            draggable: h,
                            disableDefaultUI: r
                        };
                        switch (n.toUpperCase()) {
                            case "ROADMAP": a.mapTypeId = google
                                    .maps
                                    .MapTypeId
                                    .ROADMAP;
                                break;
                            case "SATELLITE": a.mapTypeId = google
                                    .maps
                                    .MapTypeId
                                    .SATELLITE;
                                break;
                            case "HYBRID": a.mapTypeId = google
                                    .maps
                                    .MapTypeId
                                    .HYBRID;
                                break;
                            case "TERRAIN": a.mapTypeId = google
                                    .maps
                                    .MapTypeId
                                    .TERRAIN
                        }
                        var l = new google.maps.Map(c[0], a),
                            k = c.data("reverse-geocoding")
                                ? !0
                                : !1;
                        google
                            .maps
                            .event
                            .addListenerOnce(l, "idle", function () {
                                Themify.body.trigger("themify_map_loaded", [c, l])
                            });
                        c.data("gmap_object", l);
                        if (k) {
                            var m = e.split(",", 2);
                            a = parseFloat(m[0]);
                            m = parseFloat(m[1]);
                            var u = new google.maps.LatLng(a, m);
                            a = {
                                latLng: u
                            }
                        } else 
                            a = {
                                address: e
                            };
                         b.geocode(a, function (a, b) {
                            if (b == google
                                    .maps
                                    .GeocoderStatus
                                    .OK) {
                                var e = k
                                    ? u
                                    : a[0].geometry.location;
                                l.setCenter(e);
                                var d = new google.maps.Marker({map: l, position: e}),
                                    e = c.data("info-window");
                                if (g !== e) {
                                    var n = new google.maps.InfoWindow({
                                        content: '<div class="themify_builder_map_info_window">' + e + "</div>"
                                    });
                                    google
                                        .maps
                                        .event
                                        .addListener(d, "click", function () {
                                            n.open(l, d)
                                        })
                                }
                            }
                        })
                    }, 1E3 * b)
                })
            },
            GetMap: function (b) {
                a(".themify_bing_map", b).each(function (b) {
                    var c = a(this),
                        e = {},
                        d = c.data("address"),
                        n = parseInt(c.data("zoom")),
                        f = "1" !== c.data("scroll"),
                        h = "1" !== c.data("drag"),
                        r = c.data("type"),
                        q = 1 !== c.data("control");
                    b *= 1E3;
                    var p,
                        t,
                        d = d.split(",");
                    setTimeout(function () {
                        function b(b) {
                            switch (r) {
                                case "aerial": b.mapTypeId = Microsoft
                                        .Maps
                                        .MapTypeId
                                        .aerial;
                                    break;
                                case "road": b.mapTypeId = Microsoft
                                        .Maps
                                        .MapTypeId
                                        .road;
                                    break;
                                case "streetside": b.mapTypeId = Microsoft
                                        .Maps
                                        .MapTypeId
                                        .streetside;
                                    break;
                                case "canvasDark": b.mapTypeId = Microsoft
                                        .Maps
                                        .MapTypeId
                                        .canvasDark;
                                    break;
                                case "canvasLight": b.mapTypeId = Microsoft
                                        .Maps
                                        .MapTypeId
                                        .canvasLight;
                                    break;
                                case "birdseye": b.mapTypeId = Microsoft
                                        .Maps
                                        .MapTypeId
                                        .birdseye;
                                    break;
                                case "ordnanceSurvey": b.mapTypeId = Microsoft
                                        .Maps
                                        .MapTypeId
                                        .ordnanceSurvey;
                                    break;
                                case "grayscale": b.mapTypeId = Microsoft
                                        .Maps
                                        .MapTypeId
                                        .grayscale
                            }
                            return b
                        }
                        function a(e) {
                            t
                                ? t.geocode({
                                    where: e,
                                    callback: function (a) {
                                        if (a && a.results && 0 < a.results.length) {
                                            a = {
                                                center: a
                                                    .results[0]
                                                    .bestView
                                                    .center
                                            };
                                            a = b(a);
                                            p.setView(a);
                                            a = new Microsoft.Maps.Pushpin(p.getCenter(), null);
                                            var e = c.data("info-window");
                                            if (g !== e) {
                                                var d = new Microsoft.Maps.Infobox(p.getCenter(), {
                                                    description: e,
                                                    visible: !1
                                                });
                                                d.setMap(p);
                                                Microsoft
                                                    .Maps
                                                    .Events
                                                    .addHandler(a, "click", function (a) {
                                                        d.setOptions({
                                                            visible: !0
                                                        })
                                                    })
                                            }
                                            p.entities.push(a)
                                        }
                                    },
                                    errorCallback: function (a) {
                                        console.log("No results found.")
                                    }
                                })
                                : Microsoft.Maps.loadModule("Microsoft.Maps.Search", function () {
                                    t = new Microsoft
                                        .Maps
                                        .Search
                                        .SearchManager(p);
                                    a(e)
                                })
                        }
                        e = {
                            disableBirdseye: !0,
                            disableScrollWheelZoom: f,
                            showDashboard: q,
                            credentials: themify_vars.bing_map_key,
                            disablePanning: h,
                            mapTypeId: null,
                            zoom: n
                        };
                        try {
                            p = new Microsoft.Maps.Map(c[0], e)
                        } catch (u) {
                            Themify.GetMap();
                            return
                        }
                        a(d);
                        d = encodeURI(d)
                    }, b)
                })
            },
            LoadAsync: function (a, e, c, f, g) {
                f = this.hash(a);
                var b = -1 !== this.jsLazy.indexOf(f),
                    l = b || d.getElementById(f);
                b || this.jsLazy.push(f);
                if (l) {
                    if (e) 
                        if (g) 
                            var h = setInterval(function () {
                                var a = !1;
                                try {
                                    a = g.call()
                                } catch (p) {}a && (clearInterval(h), e.call())
                            }, 20);
                        
                     else 
                        e()
                    
                } else {
                    if (g) 
                        try {
                            if (g.call()) {
                                e && e.call();
                                return
                            }
                        }
                     catch (q) {} - 1 === a.indexOf(".min.js") && "undefined" !== typeof themify_vars && null !== themify_vars && (b = a.match(/([^\/]+)(?=\.\w+$)/)) && b[0] && (b = b[0], themify_vars.minify.js[b] && (a = a.replace(b + ".js", b + ".min.js")));
                    var m = !1;
                    b = d.createElement("script");
                    b.type = "text/javascript";
                    b.id = f;
                    c || !1 === c || "undefined" === typeof tbLocalScript || (c = tbLocalScript.version);
                    b.src = c
                        ? a + "?ver=" + c
                        : a;
                    b.async = !0;
                    b.onload = b.onreadystatechange = function () {
                        m || this.readyState && "complete" !== this.readyState || (m =! 0, e && e())
                    };
                    a = d.getElementsByTagName("script")[0];
                    a.parentNode.insertBefore(b, a)
                }
            },
            LoadCss: function (a, e, c, l, g) {
                if ("undefined" !== typeof a) {
                    e || !1 === e || "undefined" === typeof tbLocalScript || (e = tbLocalScript.version);
                    var b = this.hash(a),
                        k = -1 !== this.cssLazy.indexOf(b),
                        h = k || d.getElementById(b);
                    e = e
                        ? a + "?ver=" + e
                        : a;
                    k || this.cssLazy.push(b);
                    !1 === h && (k = d.querySelector("link[href='" + e + "']"), h = null !== k && "stylesheet" === k.getAttribute("rel"));
                    if (h) 
                        return g && g(),
                        !1;
                     - 1 === a.indexOf(".min.css") && "undefined" !== typeof themify_vars && null !== themify_vars && (a = a.match(/([^\/]+)(?=\.\w+$)/)) && a[0] && (a = a[0], themify_vars.minify.css[a] && (e = e.replace(a + ".css", a + ".min.css")));
                    a = f.document;
                    var m = a.createElement("link");
                    c
                        ? k = c
                        : (k =( a.body || a.head).childNodes, k = k[k.length - 1]);
                    var q = a.styleSheets;
                    m.rel = "stylesheet";
                    m.href = e;
                    m.media = "only x";
                    m.id = b;
                    k.parentNode.insertBefore(
                        m,
                        c
                            ? k
                            : k.nextSibling
                    );
                    var p = function (a) {
                        for (var b = m.href, c = q.length; -- c;) 
                            if (q[c].href === b) 
                                return g && g(),
                                a();
                            
                        
                        setTimeout(function () {
                            p(a)
                        })
                    };
                    m.onloadcssdefined = p;
                    p(function () {
                        m.media = l || "all"
                    });
                    return m
                }
            },
            checkFont: function (a) {
                if (-1 !== this.fonts.indexOf(a)) 
                    return !0;
                
                if (0 === this.fonts.length) {
                    for (var b =[], c = d.styleSheets, f = c.length; 0 <= -- f;) 
                        if (c[f].hasOwnProperty("cssRules") || c[f].hasOwnProperty("rules")) 
                            for (var g = c[f].cssRules || c[f].rules || [], h = g.length; 0 <= -- h;) 
                                if (g[h].style) {
                                    if (g[h].style.fontFamily) 
                                        var k = g[h].style.fontFamily;
                                     else 
                                        (k = g[h]
                                            .style
                                            .cssText
                                            .match(/font-family\s*:\s*([^;\}]*)\s*[;}]/i)) && (k = k[1]);
                                        if (k === a) 
                                            return this.fonts.push(k),
                                            !0;
                                        
                                        k && (b[k] =! 0)
                                    }
                                    this.fonts = Object.keys(b)
                                }
                            
                        
                    
                    return !1
                },
                lightboxCallback : function (a, e) {
                    this.LoadAsync(themify_vars.url + "/js/themify.gallery.js", function () {
                        Themify.GalleryCallBack(a, e)
                    }, null, null, function () {
                        return "undefined" !== typeof ThemifyGallery
                    })
                },
                InitGallery : function (b, e) {
                    var c = !1,
                        d = "object" === typeof themifyScript && themifyScript.lightbox;
                    Themify.is_builder_active || ((c = d && (d.lightboxContentImages && a(d.contentImagesAreas).length || a(d.lightboxSelector).length)) || (c = d && d.lightboxGalleryOn && (a(d.lightboxContentImagesSelector).length || d.gallerySelector && a(d.gallerySelector).length)), c && (this.LoadCss(themify_vars.url + "/css/lightbox.min.css", null), this.LoadAsync(themify_vars.url + "/js/lightbox.min.js", function () {
                        Themify.lightboxCallback(b, e)
                    }, null, null, function () {
                        return "undefined" !== typeof a.fn.magnificPopup
                    })));
                    c || this
                        .body
                        .addClass("themify_lightbox_loaded")
                        .removeClass("themify_lightboxed_images")
                },
                GalleryCallBack : function (a, e) {
                    a || (a = Themify.body);
                    e = ! e && themifyScript.extraLightboxArgs
                        ? themifyScript.extraLightboxArgs
                        : {};
                    ThemifyGallery.init({context: a, extraLightboxArgs: e});
                    Themify
                        .body
                        .addClass("themify_lightbox_loaded")
                        .removeClass("themify_lightboxed_images")
                },
                parseVideo : function (a) {
                    a = a.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/i);
                    return {
                        type: null !== a
                            ? -1 < a[3].indexOf("youtu")
                                ? "youtube"
                                : -1 < a[3].indexOf("vimeo")
                                    ? "vimeo"
                                    : !1
                            : !1,
                        id: null !== a
                            ? a[6]
                            : !1
                    }
                },
                hash : function (a) {
                    for (var b = 0, c = a.length - 1; -1 < c; -- c) 
                        b = (b << 5) - b + a.charCodeAt(c),
                        b &= b;
                    
                    return b
                },
                getVendorPrefix : function () {
                    if (this.vendor === g) {
                        for (var a = d.createElement("div"), e =[
                            "Moz", "Webkit", "O", "ms"
                        ], c = 0, f = e.length; c < f; ++ c) 
                            if ("undefined" !== typeof a.style[e[c] + "Transform"]) {
                                this.vendor = e[c].toLowerCase();
                                break
                            }
                        
                        this.vendor = "-" + this.vendor + "-"
                    }
                    return this.vendor
                }
            };
            Themify.Init()
        }
    )(jQuery, window, document);