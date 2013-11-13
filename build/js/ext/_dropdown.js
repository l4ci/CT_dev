jQuery(document).ready(function($) {
	// Dropdown
	$('.dpd .dpd-toggle').click(function(e){
		e.preventDefault();

		$(this).toggleClass('dpd-open');
		// Change icon if any
		$(this).find('i.fa').toggleClass('fa-angle-down fa-angle-up');

		// Toggle Class and Animate
		$(this).next('.dpd-menu').slideToggle(300, function(){
				if ($(this).is(":visible") === false){
					$(this).removeClass('dpd-open').addClass('dpd-closed').removeAttr('style');
				} else {
					$(this).removeClass('dpd-closed').addClass('dpd-open').removeAttr('style');
				}
			});
	});
});
