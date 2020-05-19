$(function(){
	var controller = new ScrollMagic.Controller;
	
	$(".page-intro .container").sticky({topSpacing:0});
	let tweenPageIntro = TweenMax.to("section.page-intro .container", 1,{autoAlpha: 0});

	 let scenePageIntro = new ScrollMagic.Scene({
    triggerElement: 'section.page-intro',
    triggerHook: 'onLeave',
    reverse: true,
    offset: 1,
    force3D: true,
    duration: '40%'
  })

  .setTween(tweenPageIntro)
  //.addIndicators() // add indicators (requires plugin)
  .addTo(controller);
    // position: fixed 사용시 ie 떨림 현상 방지
  if( navigator.userAgent.match(/Trident\/7\./) ){
    $('body').on("mousewheel", function(){
      event.preventDefault();

      var wheelDelta = event.wheelDelta,
        currentScrollPosition = window.pageYOffset;

      window.scrollTo(0, currentScrollPosition - wheelDelta);
    });
    $('body').keydown(function(e){
      e.preventDefault();
      var currentScrollPosition = window.pageYOffset;

      switch (e.which){
        case 38: //up
          window.scrollTo(0, currentScrollPosition - 120);
          break;
        case 40: //down
          window.scrollTo(0, currentScrollPosition + 120);
          break;
        default: return;
      }
    });
  }
});
