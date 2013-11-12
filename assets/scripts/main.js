jQuery( document ).ready(function( $ ) {

  // Animate scrolling
	$(".scroll").click(function(e){
		e.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
	});


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


	// Toggle Icons
	$('.fa.toggle').click(function(){
		$(this).removeClass('fa toggle');
		var data	= 'fa toggle ' + $(this).data('toggle');
		var old = $(this).attr('class');
		$(this).attr('class', data).data('toggle',old);
	});


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

  // Global Resize Function
	$(window).resize(function() {

	});

});
