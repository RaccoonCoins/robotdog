$(document).ready(function () {
    $(".nav-link").click(function () {
        if (!$(this).hasClass('active')) {
            $(".nav-link.active").removeClass("active");
            $(this).addClass("active");
        }
    });
    // Toggle Mobile Menu
    $(function () {
        $(".navbar-toggler").on("click", function (a) {
            $("#navbar-right").toggleClass("open");
            a.stopPropagation()
        });
        $(document).on("click", function (a) {
            if ($(a.target).is("#navbar-right") === false) {
                $("#navbar-right").removeClass("open");
            }
        });
    });
    // Loader JS
    $('.loader-wrapper').fadeOut("slow");
});