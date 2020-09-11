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

    $('.mobile-searsh-toggle').click(function() {
        $('.mobile-top-menu').css('display', 'none');
        $('.mobile-search').css('display', 'flex');
    });
    $('.mobile-search .back-link').click(function() {
        $('.mobile-search').css('display', 'none');
        $('.mobile-top-menu').css('display', 'flex');
    });

    // $('.main-menu').show();
    $('#main-menu-btn, .main-menu').hover(
        function() {
            // $("body").css("overflow","hidden");
            disableScroll();
            $('.header').addClass('overlay');
            $('.main-menu>ul>li:first-child').addClass('active');
            $('.main-menu').show();
        },
        function() {
            // $("body").css("overflow","auto");
            enableScroll()
            $('.header').removeClass('overlay');
            $('.main-menu').hide();
        }
    );
    $('.main-menu>ul>li.active').hover(
        function() {
            $(this).removeClass('active');
        });


    $('.main-slider').slick({
        dots: true,
        arrows: false
    });

    // offcanvas cart view
    $(".cart-block, .cart-link").click(function() {
        $('.offcanvas-cart').css('display', 'flex');
    });

    $(".offcanvas-cart-header>.close-btn").click(function() {
        $('.offcanvas-cart').css('display', 'none');
    });


    $(".toggle-filters").click(function() {
        $('.mob-filters').css('display', 'block');
    });
    $(".close-mob-filters").click(function() {
        $('.mob-filters').css('display', 'none');
    });

    $(".toggle-view").click(function() {
        $('.mob-view').css('display', 'block');
    });
    $(".close-mob-view").click(function() {
        $('.mob-view').css('display', 'none');
    });


    // slider in card detail
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        focusOnSelect: true
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
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: false,
                    variableWidth: false
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
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: false,
                    variableWidth: false
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
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: false,
                    variableWidth: false
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
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: false,
                    variableWidth: false
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
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: false,
                    variableWidth: false
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

    // Карточка товара
    $('#slider-product-detail-1').slick({
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

    $('#slider-product-detail-2').slick({
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

    if ($(window).width() > 575) {
        setArrows('.main-slider');
        setArrows('#slider-product-1.card-slider');
        setArrows('#slider-product-2.card-slider');
        setArrows('#slider-product-3.card-slider');
        setArrows('.collection-slider');
        setArrows('.recipes-slider');
        setArrows('#slider-product-4.card-slider');
        setArrows('#slider-product-5.card-slider');
        setArrows('#slider-product-detail-1.card-slider');
        setArrows('#slider-product-detail-2.card-slider');
        setArrows('.article-slider');
    }

    if ($(window).width() <= 575) {
        $('.banner-slider').slick({
            dots: false,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2000
        });

        $('.steps-slider').slick({
            infinite: false,
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

        $('.tags-slider').slick({
            infinite: false,
            slidesToShow: 6,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            responsive: [
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        centerMode: false,
                        variableWidth: true
                    }
                },
            ]
        });

    }

    function setArrows(selector) {
        $(selector + " .slick-dots").wrap("<div class='slick-dots-wrapper'></div>");
        $(selector + " .slick-dots-wrapper").prepend('<span class="slick-dots-prev"></span>');
        $(selector + " .slick-dots-wrapper").append('<span class="slick-dots-next"></span>');
        $(selector + ' .slick-dots-prev').on('click', function() {
            $(selector).slick('slickPrev');
        });
        $(selector + ' .slick-dots-next').on('click', function() {
            $(selector).slick('slickNext');
        });
    };

    $('[data-toggle="tooltip"]').tooltip();

});

document.addEventListener(
    "DOMContentLoaded", () => {
        const menu = new MmenuLight(
            document.querySelector("#mob-catalog-menu"),
            "(max-width: 600px)"
        );

        const navigator = menu.navigation({
            title: "Категория товаров"
        });
        const drawer = menu.offcanvas();

        document.querySelector("a[href='#mob-catalog-menu']")
            .addEventListener("click", (evnt) => {
                evnt.preventDefault();
                drawer.open();
            });
        document.querySelector("a[href='#mob-catalog-menu-bottom']")
            .addEventListener("click", (evnt) => {
                evnt.preventDefault();
                drawer.open();
            });
    }
);

// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

function preventDefault(e) {
    e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
    window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
        get: function() { supportsPassive = true; }
    }));
} catch (e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

// call this to Disable
function disableScroll() {
    window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
    window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
    window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
    window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

// call this to Enable
function enableScroll() {
    window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
    window.removeEventListener('touchmove', preventDefault, wheelOpt);
    window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}

// detail
$('.radio-group .radio:first-child').addClass('selected');
setCounter(1);

$('.radio-group .radio').click(function() {
    if (!$(this).hasClass("disabled")) {
        $(this).parent().find('.radio').removeClass('selected');
        $(this).addClass('selected');
        var val = $(this).attr('data-value');
        $(this).parent().find('input').val(val); 
        
        setCounter(parseInt(val));
    }

});

function setCounter(step) {
    var quantity = step;
    $('.counter .count').val(quantity);
    $('.counter .count').attr('data-step', quantity);
}

$('.counter .quantity-plus').click(function(e){
    var step = parseInt($('.counter .count').attr('data-step'));
    var quantity = parseInt($('.counter .count').val());
        $('.counter .count').val(quantity + step);  
});

$('.counter .quantity-minus').click(function(e){
    var step = parseInt($('.counter .count').attr('data-step'));
    var quantity = parseInt($('.counter .count').val());
        if(quantity>step){
            $('.counter .count').val(quantity - step);
        } else {
            $('.buy-step-2').hide();
            $('.buy-step-1').show();
        }
});