'use strict'
//Функция для переобразования обычной картинки в фоновою

function ibg() {
    let ibg = document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
        if (ibg[i].querySelector('img')) {
            ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
        }
    }
}

ibg();


$('.wrapper').addClass('loaded');

//Apear and disapear burger-menu
$('.icon-menu').click(function (event) {
    $(this).toggleClass('active');
    $('.menu__body').toggleClass('active');
    $('body').toggleClass('lock');
});

//Slider
if ($('.slider__body').length > 0) {
    $('.slider__body').slick({
        //autoplay: true,
        //infinite: false,
        dots: true,
        arrows: false,
        slidesToShow: 1,
        autoplaySpeed: 3000,
        adaptiveHeight: true,
        nextArrow: '<button type="button" class="slick-next"></button>',
        prevArrow: '<button type="button" class="slick-prev"></button>',
        responsive: [{
            breakpoint: 768,
            settings: {}
        }]
    });
}




//Клик вне поля ввода
$(window).click((event) => {
    const Input = document.querySelector('.input');
    const Btn = document.querySelector('.subscribe__btn');
    if ((event.target.className !== 'input') && (event.target.className !== 'subscribe__btn')) {
        Input.value = "";
    }
});
