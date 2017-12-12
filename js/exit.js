$(document).ready(function() {

    var popupIsOpen = 0;
    $(document).mouseleave(function(e){
      if ((e.clientY < 0) && (popupIsOpen === 0)){
        // действия при попытке закрыть вкладку
        $('.dialogs .popup').removeClass('active').hide();
        $('.dialogs #exit_modal').show();
        $('.dialogs').show();
        $('.dialogs').animate({'opacity':1}, 200, function() {
            $('.dialogs #exit_modal').addClass('active');
        });
        $('body').css({'overflow-y':'hidden'});
        popupIsOpen = 1;
      }    
    });

    $('#exit_modal a.button').click(function(e) {
      e.preventDefault();
      $('.dialogs .popup').removeClass('active');
        $('.dialogs').animate({'opacity': 0}, 200, function () {
            $('.dialogs').hide();
            $('.dialogs .popup').hide();
            $('.dialogs .thanks-popup').hide();
        });
        $('body').css({'overflow-y': 'auto'});
        var id = '#soc_reg';
        var pos = ($(id).position().top);
        if ($(window).width() > 860) {
            pos -= 300;
        }
        $('html, body').animate({scrollTop: pos}, 1000);
    });
    
    
    
    
});