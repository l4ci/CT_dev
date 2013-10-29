jQuery( document ).ready(function( $ ) {

  // Animate scrolling
	$(".scroll").click(function(e){
		e.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
	});


  // NAVIGATION TOGGLE
  $('#togglemenu').click(function(e){
		e.preventDefault();
		var getContainer		= $('.nav');

		// Toggle Class and Animate
		getContainer.slideToggle('slow', function(){
				if ($(this).is(":visible") === false){
					$(this).removeClass('open').addClass('closed').removeAttr('style');
				} else {
					$(this).removeClass('closed').addClass('open').removeAttr('style');
				}
			});

		// Change Menu Icon
		if (getContainer.is(":visible") === false) {
			$(this).find('i').toggleClass('fa-reorder fa-times').prop('title', 'Show menu');
		} else {
			$(this).find('i').toggleClass('fa-reorder fa-times').prop('title', 'Hide menu');
		}
  });


  // TABS
  $('.tabs li a').click(function(e){
		e.preventDefault();

		var getContainer		= $(this).closest('.tabs');
		var getContainerID	= getContainer.data('tab');
		var targetContainer = $('.tabs_content[data-tab="' + getContainerID + '"]');
		var getTabHref			= $(this).attr('href');

		$(getContainer).find('li a').removeClass('active');
		$(this).addClass('active');

		$(targetContainer).find('li').removeClass('active');
		$(targetContainer).find("[data-id='" + getTabHref + "']").addClass('active');
  });


  // Dropdown
  $('.dropdown .dropdown-toggle').click(function(e){
		e.preventDefault();
		// Toggle Class and Animate
		$(this).next('.dropdown-menu').slideToggle('slow', function(){
				if ($(this).is(":visible") === false){
					$(this).removeClass('open').addClass('closed').removeAttr('style');
				} else {
					$(this).removeClass('closed').addClass('open').removeAttr('style');
				}
			});
  });


	// Accordion
	$('.accordion > dt').click(function(e) {
		e.preventDefault();

		var allPanels = $(this).parents('.accordion').find('dd');
		var target = $(this).next();

		if(!target.hasClass('active')){
			allPanels.slideUp('slow', function(){
				$(this).removeClass('active');
			});
			target.slideDown().addClass('active');
		}
	});


  // Global Resize Function
	$(window).resize(function() {

	});

});
