$(document).ready(function() {

    $('.main-slider').slick({
        dots: true,
        arrows: false
    });
    setArrows('.main-slider');

  
    $('.card-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        arrows: false
    });
    setArrows('.card-slider');

    $('.card-slider-3col').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        arrows: false
    });
    setArrows('.card-slider-3col');


    $('.utp-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: false
    });

    // $('.collection-slider').slick({
    //     infinite: true,
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     dots: true
    // });

    // $('.recipes-slider').slick({
    //     infinite: true,
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     dots: true
    // });



    function setArrows(selector) {
        $(selector+" .slick-dots").wrap("<div class='slick-dots-wrapper'></div>");
        $(selector+" .slick-dots-wrapper").prepend('<span class="slick-dots-prev"></span>');
        $(selector+" .slick-dots-wrapper").append('<span class="slick-dots-next"></span>');
        $(selector+' .slick-dots-prev').on('click', function(){
            $(selector).slick('slickPrev');
        });
        $(selector+' .slick-dots-next').on('click', function(){
            $(selector).slick('slickNext');
        });
    };

});