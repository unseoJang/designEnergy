var controller = new ScrollMagic.Controller;
if ($("#intro").length) {
    var tl = new TimelineLite;
    tl.from("#intro-text-logo .romeo *:nth-child(1)", .3, {
        y: 100,
        autoAlpha: 0
    }, "+=0.5").from("#intro-text-logo .romeo *:nth-child(2)", .3, {
        y: 100,
        autoAlpha: 0
    }, "-=0.2675").from("#intro-text-logo .romeo *:nth-child(3)", .3, {
        y: 100,
        autoAlpha: 0
    }, "-=0.2675").from("#intro-text-logo .romeo *:nth-child(4)", .3, {
        y: 100,
        autoAlpha: 0
    }, "-=0.2675").from("#intro-text-logo .romeo *:nth-child(5)", .3, {
        y: 100,
        autoAlpha: 0
    }, "-=0.2675").from("#intro-text-logo .foxtrot *:nth-child(1)", .3, {
        y: 100,
        autoAlpha: 0
    }, "-=0.2675").from("#intro-text-logo .foxtrot *:nth-child(2)", .3, {
        y: 100,
        autoAlpha: 0
    }, "-=0.2675").from("#intro-text-logo .foxtrot *:nth-child(3)", .3, {
        y: 100,
        autoAlpha: 0
    }, "-=0.2675").from("#intro-text-logo .foxtrot *:nth-child(4)", .3, {
        y: 100,
        autoAlpha: 0
    }, "-=0.2675").from("#intro-text-logo .foxtrot *:nth-child(5)", .3, {
        y: 100,
        autoAlpha: 0
    }, "-=0.2675").from("#intro-text-logo .foxtrot *:nth-child(6)", .3, {
        y: 100,
        autoAlpha: 0
    }, "-=0.2675").from("#intro-text-logo .foxtrot *:nth-child(7)", .3, {
        y: 100,
        autoAlpha: 0
    }, "-=0.2675").from("#intro-text-logo .tango *:nth-child(1)", .3, {
        y: 100,
        autoAlpha: 0
    }, "-=0.2675").from("#intro-text-logo .tango *:nth-child(2)", .3, {
        y: 100,
        autoAlpha: 0
    }, "-=0.2675").from("#intro-text-logo .tango *:nth-child(3)", .3, {
        y: 100,
        autoAlpha: 0
    }, "-=0.2675").from("#intro-text-logo .tango *:nth-child(4)", .3, {
        y: 100,
        autoAlpha: 0
    }, "-=0.2675").from("#intro-text-logo .tango *:nth-child(5)", .3, {
        y: 100,
        autoAlpha: 0
    }, "-=0.2675").from("#intro-text-logo .oscar *:nth-child(1)", .3, {
        y: 100,
        autoAlpha: 0
    }, "-=0.2675").from("#intro-text-logo .oscar *:nth-child(2)", .3, {
        y: 100,
        autoAlpha: 0
    }, "-=0.2675").from("#intro-text-logo .oscar *:nth-child(3)", .3, {
        y: 100,
        autoAlpha: 0
    }, "-=0.2675").from("#intro-text-logo .oscar *:nth-child(4)", .3, {
        y: 100,
        autoAlpha: 0
    }, "-=0.2675").from("#intro-text-logo .oscar *:nth-child(5)", .3, {
        y: 100,
        autoAlpha: 0
    }, "-=0.2675").from("#intro p", .5, {
        y: 40,
        autoAlpha: 0
    }, "-=0.1").from("header", .5, {
        y: -70,
        autoAlpha: 0
    }, "-=0.1").from("#intro .intro-lets-go", 1.5, {
        y: -40,
        autoAlpha: 0,
        ease: Elastic.easeOut
    }, "-=0.2"), tl.play()
}

function initPage() {
    var e = $(window).width();
    if ($(function() {
            var e = 0,
                o = $("header"),
                t = $("#go-up"),
                n = !0,
                i = !1;
            $(window).scroll(function(a) {
                if ($("nav.mobile").hasClass("open")) return !1;
                var r = $(this).scrollTop();
                if (Math.sign(r) <= 0) return !1;
                Math.abs(e - r) <= 30 || (r > e ? (n && (o.addClass("js-hide"), t.removeClass("js-hide")), n = !1, i = !0) : (i && (o.removeClass("js-hide"), t.addClass("js-hide")), n = !0, i = !1), e = r)
            })
        }), $("#go-up").click(function(e) {
            $("html,body").animate({
                scrollTop: 0
            }, 500), e.preventDefault()
        }), $(".single-intro, #intro").length) {
        var o = TweenLite.set("header", {}),
            t = new ScrollMagic.Scene({
                triggerElement: "main",
                triggerHook: "onLeave",
                reverse: !0,
                offset: -30
            }).setTween(o).addTo(controller);
        t.on("enter", function() {
            $("header").addClass("color--blue")
        }), t.on("leave", function() {
            $("header").removeClass("color--blue")
        })
    }
    var n = $("header"),
        i = $("nav.mobile"),
        a = $("#toggle");
    if (a.click(function(e) {
            n.toggleClass("menu-open"), i.toggleClass("open"), $(this).toggleClass("open"), i.hasClass("open") ? $("body").css("overflow-y", "hidden") : $("body").css("overflow-y", "auto"), e.preventDefault()
        }), $('nav.mobile a[href*="#"]:not([href="#"])').click(function() {
            a.removeClass("open"), n.removeClass("menu-open"), i.removeClass("open"), $("body").css("overflow-y", "auto")
        }), e > 767) {
        var r = TweenMax.to("section.homepage-about-us .about-images div:nth-child(1)", 1, {
            y: 100
        });
        new ScrollMagic.Scene({
            triggerElement: "section.homepage-about-us",
            reverse: !0,
            offset: -100,
            duration: "120%"
        }).setTween(r).addTo(controller)
    }
    $(function() {
        $("#ticker").marquee({
            duplicated: !0,
            gap: 0,
            startVisible: !0,
            delayBeforeStart: 0,
            duration: 15e3,
            pauseOnHover: !0
        })
    }), $("img.svg").each(function() {
        var e = $(this),
            o = e.attr("id"),
            t = e.attr("class"),
            n = e.attr("src");
        $.get(n, function(n) {
            var i = $(n).find("svg");
            void 0 !== o && (i = i.attr("id", o)), void 0 !== t && (i = i.attr("class", t + " replaced-svg")), i = i.removeAttr("xmlns:a"), e.replaceWith(i)
        }, "xml")
    }), $("main section.single-images .row").each(function() {
        var e = $(this),
            o = new TimelineMax;
        (o.from(e, 1, {
            autoAlpha: 0
        }), new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: .5,
            reverse: !1,
            offset: -250
        }).setTween(o).addTo(controller), console.log("eee"), void 0 !== $(this).find("iframe").attr("src")) && new Vimeo.Player($(this).find("iframe")).play()
    }), $(".page-intro .container").sticky({
        topSpacing: 0
    });
    var l = TweenMax.to("section.page-intro .container", 1, {
            autoAlpha: 0
        }),
        s = (new ScrollMagic.Scene({
            triggerElement: "section.page-intro",
            triggerHook: "onLeave",
            reverse: !0,
            offset: 1,
            force3D: !0,
            duration: "80%"
        }).setTween(l).addTo(controller), TweenMax.to("section.about-images img:nth-child(2)", 1, {
            y: -100
        })),
        c = (new ScrollMagic.Scene({
            triggerElement: "section.about-images",
            reverse: !0,
            offset: -100,
            duration: "120%"
        }).setTween(s).addTo(controller), $(".text-toggle.js-open")),
        h = $("section.single-text .more-text");
    c.click(function(e) {
        h.slideToggle("slow"), $(this).toggleClass("active"), "Tell me more" == $(this).find("span:nth-child(2)").text() ? $(this).find("span:nth-child(2)").text("Show less") : $(this).find("span:nth-child(2)").text("Tell me more"), e.preventDefault()
    });
    var d = $(".show-more-projects"),
        g = $(".portfolio-items .container .row");
    e < 1200 && g.slideUp(0), d.click(function(e) {
        ! function(e) {
            g.slideToggle({
                start: function() {
                    $(this).css({
                        display: "flex"
                    })
                }
            }), d.toggleClass("active"), "Show more" == d.find("span:nth-child(2)").text() ? d.find("span:nth-child(2)").text("Show less") : d.find("span:nth-child(2)").text("Show more");
            e.preventDefault()
        }(e)
    });
    var f, u = $(window).width(),
        m = 1200;

    function p() {
        (u = $(window).width()) < m ? console.log("") : u > m ? g.slideDown(0) : u = m
    }
    $(window).resize(function() {
        var e = $(window).width();
        clearTimeout(f), (u > m && e < m || u < m && e > m) && (f = setTimeout(p, 100))
    }), $("main section:not(.single-images), footer .container").each(function() {
        var e = $(this),
            o = new TimelineMax;
        o.from(e, 1, {
            autoAlpha: 0
        }), new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: .5,
            reverse: !1,
            offset: -250
        }).setTween(o).addTo(controller)
    }), $(function() {
        $('a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
                var e = $(this.hash);
                return (e = e.length ? e : $("[name=" + this.hash.slice(1) + "]")).length && $(this).hasClass("no-offset"), $("html, body").animate({
                    scrollTop: e.offset().top
                }, 1e3), !1
            }
        })
    }), setTimeout(function() {
        $(".case-slider-wrapper").slick({
            centerPadding: "25%",
            slidesToShow: 1,
            swipeToSlide: !0,
            infinite: !0,
            arrows: !1,
            speed: 400,
            lazyLoad: "progressive",
            centerMode: !0,
            responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: !1,
                    centerMode: !0,
                    centerPadding: "20%",
                    slidesToShow: 1
                }
            }, {
                breakpoint: 480,
                settings: {
                    arrows: !1,
                    centerMode: !0,
                    centerPadding: "20%",
                    slidesToShow: 1
                }
            }]
        })
    }, 50), $(".slider-mod ul").slick({
        dots: !1,
        infinite: !0,
        speed: 500,
        fade: !0,
        cssEase: "linear",
        autoplay: !0,
        autoplaySpeed: 2e3,
        arrows: !1
    }), $(".case-slider-wrapper .slick-slide").click(function() {
        if ("true" == $(this).attr("aria-hidden")) {
            var e = $(this).attr("data-slick-index");
            return $(".case-slider-wrapper").slick("slickGoTo", e), !1
        }
    })
}

function stacks() {
    var e = $(window).width();

    function o() {
        var e = $("#stacking-images"),
            o = $("#stacking-images li:nth-child(1) img").height(),
            t = o / 100 * 21.5;
        e.css("height", 2 * o + t)
    }
    o(), $(window).on("load resize", function() {
        o()
    });
    var t = 50;

    function n(e) {
        var o = $("section.homepage-about-us .about-images"),
            t = $(".about-images div:nth-child(1) img").height();
        e > 767 && (t *= 2.25), o.css("height", t)
    }
    $("#stacking-images li").hover(function() {
        $(this).css("z-index", t), t++
    }, function() {
        $(this).removeClass("hover")
    }), n(e), $(window).on("load resize", function() {
        n(e)
    });
    var i = 50;
    $("section.homepage-about-us .about-images div").hover(function() {
        $(this).css("z-index", i), i++
    }, function() {
        $(this).removeClass("hover")
    })
}
initPage(), stacks(), barba.init({
    cacheIgnore: !0,
    prefetchIgnore: !0,
    transitions: [{
        name: "legacy-example",
        leave: function(e) {
            var o = this.async(controller = controller.destroy(!0), $("#wrapper").remove());
            TweenMax.to(e.current.container, .5, {
                autoAlpha: 0,
                onComplete: o
            }), console.log(e)
        },
        enter: function(e) {
            var o = this.async(controller = new ScrollMagic.Controller, initPage());
            console.log(e), TweenMax.from(e.next.container, .5, {
                autoAlpha: 0,
                onComplete: o
            }), "popstate" !== e.trigger && $(window).scrollTop(0)
        },
        after: function() {
            stacks()
        }
    }]
});
//# sourceMappingURL=build.js.map