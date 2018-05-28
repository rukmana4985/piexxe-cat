$(document).ready(function() {

    (function ($) {
        $('.tab .tabs').addClass('active').find('.tabs_select > .tabs-square:eq(0)').addClass('current');

        $('.tab div.tabs .tabs-square .tabs_select').click(function (g) {
            var tab = $(this).closest('.tab'),
                index = $(this).closest('.tabs-square').index();

            tab.find('div.tabs > .tab_square').removeClass('current');
            $(this).closest('.tabs-square').addClass('current');

            tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
            tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();

            g.preventDefault();
        } );
    })(jQuery);
});