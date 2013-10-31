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
		getContainer.slideToggle(300, function(){
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


  // Global Resize Function
	$(window).resize(function() {

	});

});
