$(document).ready(function() {

    // https://github.com/Mango/slideout
    var slideout = new Slideout({
        'panel': document.getElementById('panel'),
        'menu': document.getElementById('menu'),
        'padding': 256,
        'tolerance': 70,
        'side': 'right',
        'touch': false
    });

    function close(eve) {
        eve.preventDefault();
        slideout.close();
    }
    slideout
        .on('beforeopen', function() {
            this.panel.classList.add('panel-open');
        })
        .on('open', function() {
            this.panel.addEventListener('click', close);
        })
        .on('beforeclose', function() {
            this.panel.classList.remove('panel-open');
            this.panel.removeEventListener('click', close);
        });

    document.querySelector('.toggle-button').addEventListener('click', function() {
        slideout.toggle();
    });    


    $('#main-menu-btn, .main-menu').hover(
        function() {
            $('.main-menu').show();
        }, function() {
            $('.main-menu').hide();
        }
    );

    $('.main-slider').slick({
        dots: true,
        arrows: false
    });
  
    // Товары которые вы смотрели и покупали
    $('#slider-product-1.card-slider').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                centerMode: true,
                variableWidth: true
            }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    centerMode: true,
                    variableWidth: true
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    centerMode: true,
                    variableWidth: true
                }
            },
        ]
    });

    $('.utp-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: true,
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                centerMode: true,
                variableWidth: true
            }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    centerMode: true,
                    variableWidth: true
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: false,
                    centerMode: true,
                    variableWidth: true
                }
            },
        ]
    });

    // Новинки
    $('#slider-product-2.card-slider').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                centerMode: true,
                variableWidth: true
            }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    centerMode: true,
                    variableWidth: true
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    centerMode: true,
                    variableWidth: true
                }
            },
        ]
    });

    // Товары со скидками
    $('#slider-product-3.card-slider').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                centerMode: true,
                variableWidth: true
            }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    centerMode: true,
                    variableWidth: true
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    centerMode: true,
                    variableWidth: true
                }
            },
        ]
    });

    // подборки
    $('.collection-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                centerMode: true,
                variableWidth: true
            }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    centerMode: true,
                    variableWidth: true
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    centerMode: true,
                    variableWidth: true
                }
            },
        ]
    });

    // рецепты
    $('.recipes-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                centerMode: true,
                variableWidth: true
            }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    centerMode: true,
                    variableWidth: true
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    centerMode: true,
                    variableWidth: true
                }
            },
        ]
    });

    // Выбор покупателей
    $('#slider-product-4.card-slider').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                centerMode: true,
                variableWidth: true
            }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    centerMode: true,
                    variableWidth: true
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    centerMode: true,
                    variableWidth: true
                }
            },
        ]
    });

    // Молочные продукты
    $('#slider-product-5.card-slider').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                centerMode: true,
                variableWidth: true
            }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    centerMode: true,
                    variableWidth: true
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    centerMode: true,
                    variableWidth: true
                }
            },
        ]
    });

    // статьи
    $('.article-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                centerMode: true,
                variableWidth: true
            }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    centerMode: true,
                    variableWidth: true
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    centerMode: true,
                    variableWidth: true
                }
            },
        ]
    });

    if ($(window).width() > 575) {
        setArrows('.main-slider');
        setArrows('#slider-product-1.card-slider');
        setArrows('#slider-product-2.card-slider');
        setArrows('#slider-product-3.card-slider');
        setArrows('.collection-slider');
        setArrows('.recipes-slider');
        setArrows('#slider-product-4.card-slider');
        setArrows('#slider-product-5.card-slider');
        setArrows('.article-slider');
    }

    if ($(window).width() <= 575) {
        $('.banner-slider').slick({
            dots: false,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2000
        });        
    }



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