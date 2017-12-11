$(document).ready(function() {

    // СКРОЛЛ ПО ССЫЛКАМ НА ЯКОРЬ

    $('a.smooth').click(function () {
        var id = $(this).attr('href');
        var pos = ($(id).position().top);
        if (id == '#soc_reg' && $(window).width() > 860) {
        	pos -= 300;
    	}
    	$('html, body').animate({scrollTop: pos}, 1000);
        return false;
    });

    // МОДАЛЬНЫЕ ОКНА

    $('.open-form').click(function(){
        var category = $(this).attr('href');
        var categoryForm = $('.dialogs ' + category);
        $('.dialogs .popup').removeClass('active').hide();
        categoryForm.show();
        $('.dialogs').show();
        $('.dialogs').animate({'opacity':1}, 200, function() {
            categoryForm.addClass('active');
        });
        $('body').css({'overflow-y':'hidden'});
        return false;
    });

    $('.dialogs').on('click', '.close, .close-bg', function () {
        $('.dialogs .popup').removeClass('active');
        $('.dialogs').animate({'opacity': 0}, 200, function () {
            $('.dialogs').hide();
            $('.dialogs .popup').hide();
            $('.dialogs .thanks-popup').hide();
        });
        $('body').css({'overflow-y': 'auto'});
    });

    $('.header_footer .modal-popup .modal-popup-close').click(function(e) {
        $('.header_footer .modal-popup').animate({'right':'-350px'}, 200);
    });

    // ГАМБУРГЕР В ШАПКЕ

    $('.sandwich').click(function(){
        $(this).toggleClass('active');
        $(this).next('ul').fadeToggle();
    });

    // РАЗВЕРНУТЬ ПРОГРАММУs

    $('.open-hidden').click(function(){
        $(this).slideUp();
        $(this).next('.hide').slideDown();
    });

    $('.mail-check-wrp .item').click(function(){
        $('.mail-check-wrp .item').removeClass('active');
        $('.mail-check-wrp .right img').hide();
        var i = $(this).attr('data-num');
        $(this).addClass('active');
        $(this).closest('.mail-check-wrp').find('.right img.i' + i).show();
    });

    $('.howto .slider').each(function(){
        var slider = $(this);
        var prev = $(this).siblings('.slider-prev');
        var next = $(this).siblings('.slider-next');
        var pager = $(this).siblings('.slider-pager');
        slider.bxSlider({
            mode: 'fade',
            slideMargin: 0,
            adaptiveHeight: true,
            touchEnabled:false,
            prevSelector: prev,
            nextSelector: next,
            pagerCustom: pager
        });
    });
    
    $('.new-slider-init').slick({
      centerMode: true,
      centerPadding: '30%',
      slidesToShow: 1,
      responsive: [
        {
          breakpoint: 1701,
          settings: {
            centerPadding: '28%',
          }
        },
        {
          breakpoint: 1601,
          settings: {
            centerPadding: '25%',
          }
        },
        {
          breakpoint: 1401,
          settings: {
            centerPadding: '23%',
          }
        },
        {
          breakpoint: 1301,
          settings: {
            centerPadding: '20%',
          }
        },
          {
          breakpoint: 1200,
          settings: {
            centerPadding: '15%',
          }
        },
        {
          breakpoint: 992,
          settings: {
            centerPadding: '10%',
          }
        },
        {
          breakpoint: 768,
          settings: {
         
          
            centerPadding: '0',
            slidesToShow: 1
          }
        }
      ]
    });
    
    
    
    
});