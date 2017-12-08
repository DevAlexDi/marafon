$(document).ready(function() {

    // СКРОЛЛ ПО ССЫЛКАМ НА ЯКОРЬ

    $('a.smooth').click(function () {
        var id = $(this).attr('href');
        var pos = ($(id).position().top);
        $('html, body').animate({scrollTop: pos}, 1000);
        return false;
    });

    // МОДАЛЬНЫЕ ОКНА

    $('.dialogs').on('click', '.close, .close-bg', function () {
        $('.dialogs .popup').removeClass('active');
        $('.dialogs').animate({'opacity': 0}, 200, function () {
            $('.dialogs').hide();
            $('.dialogs .popup').hide();
            $('.dialogs .thanks-popup').hide();
        });
        $('body').css({'overflow-y': 'auto'});
    });
});