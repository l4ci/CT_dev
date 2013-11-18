/**
 * TOASTER
 *
 * Show/Hide on pageload/click with various options
 **/
jQuery(document).ready(function($) {
	// TOASTER

	// Toaster that opens on pageload
	$('.toaster.toaster--open').slideDown(300, function(){
		$(this).removeClass('toaster--open').removeAttr('style').addClass('toaster-show');
	});

	// Toaster that closes on pageload
	$('.toaster.toaster--close').slideUp(300, function(){
		$(this).removeClass('toaster--close').removeAttr('style').addClass('toaster-hide');
	});

	// Toaster always closes on click
	$('.toaster').click(function(e){
		e.preventDefault();
		$(this).slideUp(300,function(){
			$(this).removeClass('toaster--open toaster--close toaster-show').removeAttr('style').addClass('toaster-hide');
		});
	});

	// Link to toggle a toaster
	$('.toaster-toggle').click(function(e){
		e.preventDefault();

		var getToaster	= $(this).data('toaster');
		var ToasterID = $('#' + getToaster);

		if (ToasterID.is(":visible") === false){
			ToasterID.slideDown(300, function(){
				$(this).removeClass('toaster--open toaster--close toaster-show toaster-hide').removeAttr('style').addClass('toaster-show');
			});
		}else{
			ToasterID.slideUp(300, function(){
				$(this).removeClass('toaster--open toaster--close toaster-show toaster-hide').removeAttr('style').addClass('toaster-hide');
			});
		}
	});

	// Link to open a toaster
	$('.toaster-open').click(function(e){
		e.preventDefault();

		var getToaster	= $(this).data('toaster');
		var ToasterID = $('#' + getToaster);

		if (ToasterID.is(":visible") === false){
			ToasterID.slideDown(300, function(){
				$(this).removeClass('toaster--open toaster--close toaster-show toaster-hide').removeAttr('style').addClass('toaster-show');
			});
		}
	});

	// Link to Close a Toaster
	$('.toaster-close').click(function(e){
		e.preventDefault();

		var getToaster	= $(this).data('toaster');
		var ToasterID = $('#' + getToaster);

		if (ToasterID.is(":visible") !== false){
			ToasterID.slideUp(300, function(){
				$(this).removeClass('toaster--open toaster--close toaster-show toaster-hide').removeAttr('style').addClass('toaster-hide');
			});
		}
	});
});
