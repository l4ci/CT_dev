/**
 * ANIMATE SCROLL
 *
 * Animates each .scroll class
 **/
jQuery(document).ready(function($) {
	// Animate scrolling
	$(".scroll").click(function(e){
		e.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
	});
});
