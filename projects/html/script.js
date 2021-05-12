(function(){
  var introSection = $('.ct-hd'),
		  introSectionHeight = introSection.height(),
		  scaleSpeed = 0.3,
		  opacitySpeed = 1,
      MQ = 1024;

	triggerAnimation();
	$(window).on('resize', function(){
		triggerAnimation();
	});
  

	function triggerAnimation(){
    let currentWin = $(window);
		if (currentWin.width() >= MQ) {
			currentWin.on('scroll', function(){
				window.requestAnimationFrame(animateIntro);
			});
		} else {
			currentWin.off('scroll');
		}
	}
	//assign a scale transformation to the #cd-background element and reduce its opacity
	function animateIntro () {
		let st= $(window).scrollTop(),
        scrollPercentage = (st/introSectionHeight).toFixed(5),
			scaleValue = 1 - scrollPercentage*scaleSpeed;

		//check if the #cd-background is still visible
		if (st < introSectionHeight) {
			introSection.css({
				'-webkit-transform': 'scale(' + scaleValue + ')',
				'transform': 'scale(' + scaleValue + ')',
        'filter': 'blur(' + scrollPercentage*10 + 'px)',
				'opacity': 1 - scrollPercentage*opacitySpeed
			});
		}
	}
})();