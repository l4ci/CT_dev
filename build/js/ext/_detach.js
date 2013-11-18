/**
 * Detach
 *
 * .detach elements with a data-detach="200"
 * will get fixed after data-detach amount is reached
 */

jQuery(document).ready(function($) {

    function getScrollY(){
        return (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    }


    var detachDiv = $('.detach'),
        detachOn = detachDiv.data('detach');

	$(window).scroll(function(){

		var currentScrollY = getScrollY();

        if (currentScrollY >= detachOn){
            detachDiv.addClass('detach--on');
        }else{
            detachDiv.removeClass('detach--on');
        }
    });

});
