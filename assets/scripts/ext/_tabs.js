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
