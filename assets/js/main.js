jQuery( document ).ready(function( $ ) {
  // Code using $ as usual goes here.

  // TABS
  $('.tabs li').click(function(){
		$('.tabs li').removeClass('active');
		$(this).addClass('active');
		var open = $(this).data('open');
		$('.tabs_content li').hide();
		$('.tabs_content').find("[data-id='" + open + "']").show();
  });

});
