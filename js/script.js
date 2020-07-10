$(document).ready(function() {

    $('.main-slider').slick({
        dots: true
    });

    $('.card-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: true
    });

    $('.utp-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true
    });

});