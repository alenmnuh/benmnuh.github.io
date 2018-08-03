function burgerMenu() {

    if ($(window).width() < 1060) {
        $('body').addClass('mobile-window');
    } else {
        $('body').removeClass('mobile-window');
        $('.header__menu').show();
    }

}

$(window).resize( function() {

    //burger
    burgerMenu();

});

$(document).ready(function(){

    //burger
    burgerMenu();
    $('.burger-icon').on('click', function() {
        $('.header__menu').toggle(500);
    });

    //slick-slider - sponsors section
    $('.partners__slider').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 800,
        slidesToShow: 4,
        arrows: true,
        nextArrow: '<div class="next-arrow"><i class="fa fa-angle-right" aria-hidden="true"></i></div>',
        prevArrow: '<div class="prev-arrow"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});