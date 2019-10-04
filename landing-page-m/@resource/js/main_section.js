$(document).ready(function () {
  var $fullpage = $("#fullpage");
  var $navMenu = $("header .menu-list");
  //var video = document.querySelectorAll(".video-wrap video");
  var g_moveDownId;

  $fullpage.fullpage({
    navigation: true,
    navigationPosition: 'right',
    css3: true,
    easing: 'easeInOutCubic',
    easingcss3: 'ease',
    autoScrolling:true,
    scrollingSpeed: 1000,
    fitToSectionDelay: true,
    continuousVertical:true,
    dragAndMove: fingersonly,
    onLeave: function (origin, destination, direction) {
      //video[destination - 1].load();
      // console.log(destination);
      $navMenu.eq(origin - 1).removeClass("on");
      $navMenu.eq(destination - 1).addClass("on");
      clearInterval(g_moveDownId);
    },
    afterRender: function () {
      //video[0].play();
      $navMenu.eq(0).addClass("on");
    },
    afterLoad: function () {
      // $fullpage.fullpage.setAllowScrolling(false, 'up, down');
      // console.log(222)
      g_moveDownId = setInterval(function(){   // <---- Added
                $.fn.fullpage.moveSectionDown();
            }, 4000);
    }
  });

  var isAnimation = false;
  var lastSection = $(".last-section, #footer");
  var startY = 0;
  var endY = 0;
  // var footerHeight = $("#footer").innerHeight();
  // console.log(footerHeight)

  // function sectionMoving(delta) {

  //    fullpageOnOff(); // ie에서 문제가 있어서 주석처리했음.

  //   if (delta !== null) {
  //     if (delta < 0) {
  //       if (!isAnimation) {
  //         isAnimation = true;
  //         $("#fp-nav ul").clearQueue().animate({
  //           marginTop: -footerHeight
  //         }, 500);
  //         $(".wrapper").clearQueue().animate({
  //           top: -footerHeight
  //         }, 500, function () {
  //           isAnimation = false;
  //         });
  //       }
  //     } else {
  //       if (!isAnimation) {
  //         isAnimation = true;
  //         $("#fp-nav ul").clearQueue().animate({
  //           marginTop: 0
  //         }, 500);
  //         $(".wrapper").clearQueue().animate({
  //           top: 0
  //         }, 500, function () {
  //           isAnimation = false;
  //         });
  //       }
  //     }
  //   }
  // };

  function fullpageOnOff() {
    if (isAnimation) {
      $fullpage.fullpage.setMouseWheelScrolling(false);
      $fullpage.fullpage.removeTouch();
    } else {
      $fullpage.fullpage.setMouseWheelScrolling(true);
      $fullpage.fullpage.addTouch();
    }
  }

  lastSection.on("touchstart", function (e) {
    startY = e.originalEvent.touches[0].clientY;
    // $fullpage.fullpage.removeTouch();
    fullpageOnOff();
  });

  lastSection.on("touchend", function (e) {
    endY = e.originalEvent.changedTouches[0].clientY;
    if (startY > endY) { //터치로 화면 내릴때 (푸터 보임)
      delta = -1;

    } else if (startY < endY) { // 터치로 화면 올릴때 (푸터 없어짐)
      delta = 1;
    }
    sectionMoving(delta);
  });

  lastSection.on("touchmove", function (e) {
    // e.preventDefault();
    fullpageOnOff();
    // sectionMoving(delta);
    delta = 0;
  });

  lastSection.on("mousewheel DOMMouseScroll", function (e, delta) {
    // e.preventDefault();
    sectionMoving(delta);
  });
});