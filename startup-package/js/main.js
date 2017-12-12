(function ($) {
    /*tab rules*/
    function tabsActivate() {
        var newWidth = $(window).width();
        // var newWidth = $('.startup-package__main').width();
        var widthXs = 1099;
        var oldWidth;
        if (newWidth !== oldWidth) {
            if (newWidth <= widthXs && (!oldWidth || oldWidth >= widthXs)) {
                $('.tab-item').removeClass('js-tab-item-activate').show();
            } else if (newWidth >= widthXs && (!oldWidth || oldWidth <= widthXs)) {
                $('.tab-item').addClass('js-tab-item-activate');
                setTimeout(function () {
                    $(".js-tab-item-activate").not(":first").hide();
                }, 10)
            }
            oldWidth = newWidth;
        }
    }

    $(document).ready(tabsActivate);
    $(window).resize(tabsActivate);

    $(".tabs .tab").click(function () {
        $(".tabs .tab").removeClass("active").eq($(this).index()).addClass("active");
        $(".js-tab-item-activate").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");

    /*END tab rules*/
    /*tab slider*/

    var tabsSlickSlider = $('.js-tab-item-slider');
    var tabsSliderSettings = {
        dots: true,
        arrows: false,
        adaptiveHeight: true,
    };
    $(document).ready(function () {
        var winWidth = $(window).width();
        if (winWidth < 1100) {
            tabsSlickSlider.slick(tabsSliderSettings);
        }
    });

    // reslick only if it's not slick()
    $(window).on('resize', function () {
        var winWidth = $(window).width();

        if (winWidth >= 1100) {
            if (tabsSlickSlider.hasClass('slick-initialized')) {
                tabsSlickSlider.slick('unslick');
            }
            return
        }

        if (!tabsSlickSlider.hasClass('slick-initialized')) {
            return tabsSlickSlider.slick(tabsSliderSettings);
        }
    });
    /*END tab slider*/
    /*dynamic date rules*/
    $(document).ready(function () {
        var today = new Date();
        var todayMonth = today.getMonth();
        var letTodayMonth;
        switch (todayMonth) {
            case 0:
                letTodayMonth = "January";
                break;
            case 1:
                letTodayMonth = "February";
                break;
            case 2:
                letTodayMonth = "March";
                break;
            case 3:
                letTodayMonth = "April";
                break;
            case 4:
                letTodayMonth = "May";
                break;
            case 5:
                letTodayMonth = "June";
                break;
            case 6:
                letTodayMonth = "July";
                break;
            case 7:
                letTodayMonth = "August";
                break;
            case 8:
                letTodayMonth = "September";
                break;
            case 9:
                letTodayMonth = "October";
                break;
            case 10:
                letTodayMonth = "November";
                break;
            case 11:
                letTodayMonth = "December";
                break;
        }
        $('.today .month').text(letTodayMonth);
        $('.today .day').text(today.getDate());
        var startDate = today;
        startDate.setDate(startDate.getDate() + 21);
        var startMonth = startDate.getMonth();
        var letStartMonth;
        switch (startMonth) {
            case 0:
                letStartMonth = "January";
                break;
            case 1:
                letStartMonth = "February";
                break;
            case 2:
                letStartMonth = "March";
                break;
            case 3:
                letStartMonth = "April";
                break;
            case 4:
                letStartMonth = "May";
                break;
            case 5:
                letStartMonth = "June";
                break;
            case 6:
                letStartMonth = "July";
                break;
            case 7:
                letStartMonth = "August";
                break;
            case 8:
                letStartMonth = "September";
                break;
            case 9:
                letStartMonth = "October";
                break;
            case 10:
                letStartMonth = "November";
                break;
            case 11:
                letStartMonth = "December";
                break;
        }
        $('.start .month').text(letStartMonth);
        $('.start .day').text(startDate.getDate());
    });
    /*END dynamic date rules*/

    /*sticky block V2*/
    var sectionPosition,
        stickySectionPosition,
        stickySectionHeight,
        object,
        objectClone,
        stickyPaddingSize;

    function stickySectionPaddingSize() {
        var ww = $(window).width();
        if (ww > 1024) {
            stickyPaddingSize = 79;
        }
        else {
            stickyPaddingSize = 29;
        }
    }

    function sectionPositionInit() {
        object = $('.startup-build-team-content');
        stickySectionHeight = object.height();
        sectionPosition = $('.startup-how-we-work-1').offset().top;
        stickySectionPosition = $('.startup-build-team').offset().top;
        object.addClass('original').clone().insertAfter(object).addClass('cloned').css({
            "visibility": "hidden",
        }).removeClass('original');
        objectClone = $('.startup-build-team-content.cloned');
        // console.log('начальное положение блоков' + sectionPosition);
        // console.log('начальное положение липкого блока' + stickySectionPosition);
    }

    $(document).ready(function () {
        sectionPositionInit();
        stickySectionPaddingSize();
    });

    function positionUpdate() {
        stickySectionHeight = object.height();
        sectionPosition = $('.startup-how-we-work-1').offset().top;
        stickySectionPosition = $('.startup-build-team').offset().top;
        stickySectionPaddingSize();
        // console.log('новое положение блоков' + sectionPosition);
        // console.log('новое положение липкого блока' + stickySectionPosition);
    }

    $(window).resize(function () {
        setTimeout(positionUpdate, 200);
    });
    $(window).on('scroll', function () {
        var windowScroll = $(this).scrollTop(),
            windowHeight = $(this).height();
        if (windowScroll > windowHeight && windowScroll < (windowHeight + 200)) {
            positionUpdate();
        }
        if (windowScroll >= (sectionPosition - windowHeight / 2) && windowScroll < ((stickySectionPosition + stickySectionHeight + stickyPaddingSize) - windowHeight)) {

            object.slideDown(300);
            object.css({
                "position": "fixed",
                "bottom": "0",
                "left": "0",
                "background-color": "rgba(244, 212, 0, 0.9)",
            });

        } else {
            if (windowScroll >= ((stickySectionPosition + stickySectionHeight + stickyPaddingSize) - windowHeight)) {
                object.css({
                    "display": "block",
                    "position": "absolute",
                    "z-index": "1",

                    "background-color": "#f4d400",
                });

            }
            else {
                object.slideUp(300);
            }
        }
    });

    /*move block*/

    function moveBlock() {
        var newWidth = $(window).width();
        // var newWidth = $('.startup-package__main').width();
        var widthXs = 1100;
        var oldWidth;

        if (newWidth !== oldWidth) {

            if (newWidth < widthXs && (!oldWidth || oldWidth >= widthXs)) {
                $('.table-head').prependTo('.table-footer');
                $('.table-get-info').insertAfter('.startup-save-time__table');
                // $('.right__sidebar-clinic').css('heigt', 'auto');
            } else if (newWidth >= widthXs && (!oldWidth || oldWidth < widthXs)) {
                $('.table-head').prependTo('.startup-save-time__table');
                $('.table-get-info').appendTo('.table-footer-content--2');
            }

            oldWidth = newWidth;
        }
    }

    $(document).ready(moveBlock);
    $(window).resize(moveBlock);

    /*END move block*/
    /*upload position update*/
    (function () {
        var count = 0;

        (function f() {
            if (typeof object !== 'undefined') {
                positionUpdate();
                // positionTableFooterUpdate();
            }

            if (++count <= 3) {
                setTimeout(f, 1000)
            }
        }());
    }());
    /*END upload position update*/
})(jQuery);