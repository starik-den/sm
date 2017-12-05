new WOW().init();
;(function ($) {
//********мобильное меню
    $('.mobile-menu').on('click', function () {
        $(this).siblings('.menu__inner').slideToggle();
    });
//********мобильное меню
//********плавная прокрутка
    $('.fly').click(function () {
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top}, 800);
        return false;
    });
//********плавная прокрутка
//********парсинг номера телефона
    $(document).ready(function () {
        $('.tell-pars').each(function (i, elem) {
            var a = parseInt($(this).text().replace(/\D+/g, ""));
            $(this).attr("href", "tel:" + a);
        })
    });
//********парсинг номера телефона
//********поп-ап закрытие
    $('.pop-up__close').on('click', function () {
        var z = $(this);

        // console.log(12);
        function b() {
            z.closest($('.pop-up')).css("top", "-200%");
        }

        z.closest($('.pop-up')).css({"background": "transparent"});
        setTimeout(b, 500);
    });
//********поп-ап закрытие
//********поп-ап входа
    $('.call-btn').on('click', function (event) {
        event.preventDefault();

        function c() {
            $('.call-tow-truck').css({"background": "rgba(0, 0, 0, 0.7)"})
        }

        $('.call-tow-truck').css({"top": "0"});
        setTimeout(c, 500);
    });
//********поп-ап входа
//********отправка формы
    $(".contacts__form").submit(function () {
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: $(this).serialize()
        }).done(function () {
            $(this).find("input").val("");

            function b() {
                $('.call-tow-truck').css("top", "-200%");
            }

            $('.call-tow-truck').css({"background": "transparent", "opacity": "0"});
            setTimeout(b, 500);

            function c() {
                $('.successful').css({"background": "rgba(0, 0, 0, 0.7)"});
                $('.call-tow-truck').css({"background": "transparent", "opacity": "1"});
            }

            $('.successful').css({"top": "0"});
            setTimeout(c, 500);
            // alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
            $(".contacts__form").trigger("reset");
        });
        return false;
    });
//********отправка формы
})(jQuery);