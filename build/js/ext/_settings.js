/**
 * SETTING
 *
 * Simple toggle/hide settings with icon
 **/
jQuery(document).ready(function($) {
	// Setting
	$('.setting .set-toggle').click(function(e){
		e.preventDefault();

		var parent = $(this).parents('.setting');
		var show   = parent.find('.set-show');
		var hide   = parent.find('.set-hide');
		var btn = $(this);

		btn.removeClass('active').find('i.fa').toggleClass('fa-plus fa-minus');

		if (show.is(":visible") === false){
			show.show();
			hide.hide();
			//show.show(300, function(){
			//show.removeClass('set-closed').addClass('set-open').removeAttr('style');
			//hide.removeClass('set-open').addClass('set-closed').removeAttr('style');
			//});
		}else{
			hide.show();
			show.hide();

			//hide.show(300, function(){
			//show.removeClass('set-open').addClass('set-closed').removeAttr('style');
			//hide.removeClass('set-closed').addClass('set-open').removeAttr('style');
			//});
		}
	});
});
