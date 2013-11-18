/**
 * Fixed Header
 *
 * fixes the header to top of the page when scrolling down
 **/
// jQuery(document).ready(function($) {

// 	var fixedtotop = $('.fixedtotop'),
// 			pos = fixedtotop.offset(),
// 			height = fixedtotop.outerHeight(),
// 			until = fixedtotop.data('scroll-next');

// 	$(window).scroll(function() {
// 		if($(this).scrollTop() > (pos.top) && fixedtotop.css('position') === 'static') {
// 			fixedtotop.addClass('fixed').before( "<div class='fixtotop_placeholder' style='height: " + (height * 1.6 ) +"px'></div>");
// 		}	else if($(this).scrollTop() <= pos.top && fixedtotop.hasClass('fixed')){
// 			fixedtotop.removeClass('fixed');
// 			$('.fixtotop_placeholder').remove();
// 		} else if ($(this.scrollTop() >= until)){
// 			fixedtotop.removeClass('fixed');
// 			$('.fixtotop_placeholder').remove();
// 		}
// 	});
// });


jQuery(document).ready(function($) {

	function getScrollY(){
		return (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
	}

	var lastKnownScrollY 	= 0,
			tolerance        	= 10,
			offset           	= 100,
			fixedelem 				= $('.fixedtotop'),
			height 						=	fixedelem.outerHeight();



	$(window).scroll(function(){

		var currentScrollY = getScrollY();

    if(currentScrollY < 0) { // Ignore bouncy scrolling in OSX
      return;
    }

    if(currentScrollY <= (offset + height)){
    	fixedelem.removeClass('fixedtotop--pinned fixedtotop--unpinned');
    }

    if (Math.abs(currentScrollY-lastKnownScrollY) >= tolerance) {

      if (currentScrollY > lastKnownScrollY && currentScrollY >= offset) {
				fixedelem.removeClass('fixedtotop--pinned');
				fixedelem.addClass('fixedtotop--unpinned');
      } else if (currentScrollY < lastKnownScrollY) {
				fixedelem.removeClass('fixedtotop--unpinned');
				fixedelem.addClass('fixedtotop--pinned');
      }

    }
    lastKnownScrollY = currentScrollY;
  });

});
