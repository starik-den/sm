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
        objectClone;

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
    });

    function positionUpdate() {
        stickySectionHeight = object.height();
        sectionPosition = $('.startup-how-we-work-1').offset().top;
        stickySectionPosition = $('.startup-build-team').offset().top;

        // console.log('новое положение блоков' + sectionPosition);
        // console.log('новое положение липкого блока' + stickySectionPosition);
    }

    $(window).resize(positionUpdate);
    $(window).on('scroll', function () {
        var windowScroll = $(this).scrollTop(),
            windowHeight = $(this).height();
        if (windowScroll >= (sectionPosition - windowHeight / 2) && windowScroll < ((stickySectionPosition + stickySectionHeight + 79) - windowHeight)) {
            object.slideDown(300);
            object.css({
                "position": "fixed",
                "bottom": "0",
                "left": "0",
                "background-color": "rgba(244, 212, 0, 0.9)",
            });

        } else {
            if (windowScroll >= ((stickySectionPosition + stickySectionHeight + 79) - windowHeight)) {
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
    /*END sticky block V2*/

    /*slick slider*/
    /* var tableSlickSlider = $('.js-row-slider');
     var tableSlickSettings = {
     dots:false,
     arrows:false,
     vertical: true,
     verticalSwiping: true,
     infinite: false,
     adaptiveHeight: true,
     };
     $(document).ready(function () {
     var winWidth = $('.startup-package__main').width();
     if (winWidth < 1100) {
     tableSlickSlider.slick(tableSlickSettings)
     }
     });

     // reslick only if it's not slick()
     $(window).on('resize', function () {
     var winWidth = $('.startup-package__main').width();

     if (winWidth >= 1100) {
     if (tableSlickSlider.hasClass('slick-initialized')) {
     tableSlickSlider.slick('unslick');
     }
     return
     }

     if (!tableSlickSlider.hasClass('slick-initialized')) {
     return tableSlickSlider.slick(tableSlickSettings);
     }
     });*/
    /*END slick slider*/

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
    /*responsive table rules*/
    // var tableTopPosition,
    //     tableContentScroll;
    // $(document).ready(function () {
    //     tableTopPosition = $('.js-table-fixed').offset().top;
    //     console.log(tableTopPosition);
    //
    // });
    // $(window).on('scroll', function () {
    //     var windowScroll = $(this).scrollTop(),
    //         tableContent = document.querySelector(".row-wrapper"),
    //         tableContentScroll = $('.row-wrapper').scrollTop(),
    //         tableContentHeight = tableContent.scrollHeight,
    //         tableContentViewPortHeight = tableContent.clientHeight,
    //         tableContentScrollingAll = tableContentHeight - tableContentScroll === tableContentViewPortHeight,
    //         table = $('.js-table-fixed');
    //     console.log("высота таблицы " + tableContentHeight);
    //     console.log('высота обертки ' + tableContentViewPortHeight);
    //     console.log('scrolling all ' + tableContentScrollingAll);
    //     console.log(tableContentScroll);
    //     if (windowScroll >= tableTopPosition) {
    //         table.addClass('fixed');
    //         if ((windowScroll >= tableTopPosition) && (tableContentScrollingAll)) {
    //             table.removeClass('fixed');
    //         }
    //     }
    //     else {
    //         table.removeClass('fixed');
    //     }
    // });

    var topTablePosition,
        stickyTableFooterPosition,
        stickyTableFooterHeight,
        objectFooter,
        tableFooterHeight,
        objectFooterParent,
        row1Pos,
        row2Pos,
        row3Pos,
        row4Pos,
        row5Pos;

    function tableFooterPositionInit() {
        objectFooter = $('.table-fixed-footer-inner');
        objectFooterParent = $('.table-fixed-footer');
        stickyTableFooterHeight = object.height();
        topTablePosition = $('.table-fixed-wrapper').offset().top;
        stickyTableFooterPosition = objectFooterParent.offset().top;

        row1Pos = $('.row-1').offset().top;
        row2Pos = $('.row-2').offset().top;
        row3Pos = $('.row-3').offset().top;
        row4Pos = $('.row-4').offset().top;
        row5Pos = $('.row-5').offset().top;
    }


    $(document).ready(function () {
        tableFooterPositionInit();
    });

    function positionTableFooterUpdate() {
        stickyTableFooterHeight = object.height();
        topTablePosition = $('.table-fixed-wrapper').offset().top;
        stickyTableFooterPosition = objectFooter.offset().top;

        row1Pos = $('.row-1').offset().top;
        row2Pos = $('.row-2').offset().top;
        row3Pos = $('.row-3').offset().top;
        row4Pos = $('.row-4').offset().top;
        row5Pos = $('.row-5').offset().top;

        // console.log('новое положение блоков' + sectionPosition);
        // console.log('новое положение липкого блока' + stickySectionPosition);
    }

    // $(window).on('scroll', function () {
    //     var windowScroll = $(this).scrollTop(),
    //         windowHeight = $(this).height(),
    //         windowWidth = $(this).width();
    //     if (windowWidth < 1100) {
    //
    //
    //         if (windowScroll >= (topTablePosition - windowHeight / 2) && windowScroll < ((stickyTableFooterPosition + stickyTableFooterHeight + 79) - windowHeight)) {
    //             $('.row-wrapper .row').addClass('active');
    //             objectFooter.slideDown(300);
    //             objectFooter.css({
    //                 "position": "fixed",
    //                 "bottom": "0",
    //                 "left": "0",
    //             });
    //
    //         } else {
    //             if (windowScroll >= ((stickyTableFooterPosition + stickyTableFooterHeight + 79) - windowHeight)) {
    //                 objectFooter.css({
    //                     // "display": "block",
    //                     "position": "relative",
    //                     "bottom": "auto",
    //                     "left": "auto",
    //                     // "z-index": "1",
    //                 });
    //
    //             }
    //             else {
    //                 objectFooter.slideUp(300);
    //             }
    //         }
    //     }
    //     else {
    //         objectFooter.css({
    //             // "display": "block",
    //             "position": "relative",
    //             "bottom": "auto",
    //             "left": "auto",
    //             // "z-index": "1",
    //         });
    //     }
    // });

    // $(window).on('scroll', function () {
    //     var windowScroll = $(this).scrollTop();
    //     if (windowScroll > row1Pos && windowScroll < row2Pos - 500) {
    //         $(document).scrollTop(row1Pos);
    //     }
    //     if (windowScroll > row2Pos - 500 && windowScroll < row3Pos - 500) {
    //         $(document).scrollTop(row2Pos);
    //     }
    //     if (windowScroll > row3Pos - 500 && windowScroll < row4Pos - 500) {
    //         $(document).scrollTop(row3Pos);
    //     }
    // });


    //величина прокрутки контента таблицы
    // $('.row-wrapper').on('scroll', function () {
    //     tableContentScroll = $('.row-wrapper').scrollTop();
    //     console.log(tableContentScroll);
    // });
    /*end responsive table rules*/
    /*upload position update*/
    (function () {
        var count = 0;

        (function f() {
            if (typeof object !== 'undefined') {
                positionUpdate();
                // positionTableFooterUpdate();
            }

            if (++count <= 5) {
                setTimeout(f, 1000)
            }
        }());
    }());
    /*END upload position update*/

    /*was changed*/


})(jQuery);
