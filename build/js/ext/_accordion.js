/**
 * ACCORDION
 *
 * Simple accordion build on a dt list
 **/
jQuery(document).ready(function($) {
	// Accordion
	$('.accordion > dt').click(function(e) {
		e.preventDefault();

		var allPanels = $(this).parents('.accordion').find('dd');
		var target = $(this).next();

		if(!target.hasClass('active')){
			allPanels.slideUp(300,function(){
				$(this).removeClass('active').removeAttr('style');
			});
			target.slideDown(300,function(){
				$(this).addClass('active').removeAttr('style');
			});
		}
	});
});
