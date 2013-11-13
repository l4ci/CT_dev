jQuery(document).ready(function($) {
	// NAVIGATION TOGGLE
	$('#togglemenu').click(function(e){
		e.preventDefault();

		var getContainer	= $('.nav');
		var link = $('#togglemenu');
		var icon = $(this).find('i');

		// Toggle Icon
		icon.toggleClass('fa-reorder fa-times');

		// Toggle Class and Animate & Change Link Title
		getContainer.slideToggle(300, function(){
				if ($(this).is(":visible") === false){
					$(this).removeClass('open').addClass('closed').removeAttr('style');
					link.attr('title', 'Show menu');
				} else {
					$(this).removeClass('closed').addClass('open').removeAttr('style');
					link.attr('title', 'Hide menu');
				}
			});

	});
});
