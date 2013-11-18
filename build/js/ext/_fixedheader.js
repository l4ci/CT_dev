/**
 * Fixed Header
 *
 * fixes the header to top of the page when scrolling down
 **/
jQuery(document).ready(function($) {

	var fixtotop = $(".fixtotop"),
			pos = fixtotop.offset();

	$(window).scroll(function() {
		if($(this).scrollTop() > (pos.top + fixtotop.height()) && fixtotop.css('position') === 'static') {
			fixtotop.addClass('fixed');
		}	else if($(this).scrollTop() <= pos.top && fixtotop.hasClass('fixed')){
			fixtotop.removeClass('fixed');
		}
		// }	else if($(this).scrollTop() > (pos.top + 500) && fixtotop.hasClass('fixed')){
		// 	fixtotop.removeClass('fixed');
		// }
	});
});
