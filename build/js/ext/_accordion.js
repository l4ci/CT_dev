// var accordion = (function () {
//     var s; // private alias to settings

//     return {
//         settings: {
//             accordionDiv: $(".accordion > dt"),
//             allPanels: $(this).parents('.accordion').find('dd'),
//             target = $(this).next()
//         },

//         init: function() {
//             s = this.settings;
//             this.bindUIActions();
//         },

//         bindUIActions: function() {
//             s.accordionDiv.on("click", function() {
//                 accordionDiv.togglePanel();
//             });
//         },

//         togglePanel: function() {
//         	e.preventDefault();

// 					if(!target.hasClass('active')){
// 						allPanels.slideUp(300,function(){
// 							$(this).removeClass('active').removeAttr('style');
// 						});
// 						target.slideDown(300,function(){
// 							$(this).addClass('active').removeAttr('style');
// 						});
// 					}
//         }

//     };
// })();

jQuery(document).ready(function($) {
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
});
