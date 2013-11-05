$(function () {
    $(window).scroll(function () {
        // global scroll to top button
        if ($(this).scrollTop() > 300) {
            $('.scrolltop').fadeIn();
        } else {
            $('.scrolltop').fadeOut();
        }
    });

    // scroll nav
    $('.scroller').click(function () {
        var section = $($(this).data("section"));
        var top = section.offset().top - 82;
        $("html, body").animate({
            scrollTop: top
        }, 700);
        return false;
    });

});
