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
    duration: '50%'
  })

  .setTween(tweenPageIntro)
  //.addIndicators() // add indicators (requires plugin)
  .addTo(controller);
});