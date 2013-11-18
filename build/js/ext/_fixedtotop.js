/**
 * Fixed Header
 *
 * fixes the header to top of the page when scrolling down
 **/
jQuery(document).ready(function($) {

	function getScrollY(){
		return (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
	}

	var lastKnownScrollY = 0,
			tolerance = 5,
			offset = 60,
			fixedelem = $('.fixedtotop'),
			height =	fixedelem.outerHeight();



	$(window).scroll(function(){

		var currentScrollY = getScrollY();

		// Ignore bouncy scrolling in OSX
    if(currentScrollY < 0) {
      return;
    }

    // Only animate when further down than elements height and offset
    if(currentScrollY >= height){

			// only animate if within tolerance movement of scroll
			if (Math.abs(currentScrollY-lastKnownScrollY) >= tolerance) {

				// Hide
				if (currentScrollY > lastKnownScrollY && currentScrollY >= offset) {
					fixedelem.removeClass('slideInDown').addClass('slideOutUp');

				// Show
				} else if (currentScrollY < lastKnownScrollY) {
					fixedelem.removeClass('slideOutUp').addClass('slideInDown');
				}
			}
		// show element
		}else{
			fixedelem.removeClass('slideOutUp slideInDown');
		}


    lastKnownScrollY = currentScrollY;
  });

});
