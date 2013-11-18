/**
 * TOGGLE ICONS
 *
 * Simple toggle icons, that change on click
 **/
jQuery(document).ready(function($) {
	// Toggle Icons
	$('.fa.toggle').click(function(){
		$(this).removeClass('fa toggle');
		var data	= 'fa toggle ' + $(this).data('toggle');
		var old = $(this).attr('class');
		$(this).attr('class', data).data('toggle',old);
	});
});
