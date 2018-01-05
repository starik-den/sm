(function ($) {
    function topBlockSameHeight() {
        var ruleWidth = $(window).width();
        if (ruleWidth > 610) {
            var topBlockHeightArr = [];
            var generalHeight;
            var object = $('.js-top-block');
            object.each(function () {
                $(this).css('min-height', '1px');
                topBlockHeightArr.push($(this).height());
                // console.log(topBlockHeightArr);
            });
            generalHeight = Math.max.apply(null, topBlockHeightArr);
            // console.log(generalHeight);
            object.each(function () {
                $(this).css('min-height', generalHeight);
            })
        }
    }
    $(document).ready(topBlockSameHeight);
    $(window).resize(topBlockSameHeight);
})(jQuery);