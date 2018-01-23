// Side Nav

$(".button-collapse").sideNav({
    menuWidth: 270
});

// Paralax
$('.parallax').parallax();

// Carrusel
$('.carousel.carousel-slider').carousel({ fullWidth: false });

// Slider 

$('.slider').slider({
    height: 313
});
//Carrusel
$('.carousel').carousel();

// Top Menu Fixed
var altura = $('.efecto-menu').offset().top;
$(window).on('scroll', function() {
    if ($(window).scrollTop() > altura) {
        $('.efecto-menu').addClass('menu-fixed');
    } else {
        $('.efecto-menu').removeClass('menu-fixed');
    }
});
// Subir al inicio 
$('.inicio').click(function() {
    $('body, html').animate({
        scrollTop: '0px'
    }, 300);
});
$(window).scroll(function() {
    if ($(this).scrollTop() > 0) {
        $('.inicio').fadeIn(300);
    } else {
        $('.inicio').fadeOut(300);
    }
});
// Scroll Nav Fixed
$(function() {
    $('.vermas').click(function() {

        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname) {

            var $target = $(this.hash);

            $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');

            if ($target.length) {

                var targetOffset = $target.offset().top;

                $('html,body').animate({
                    scrollTop: targetOffset
                }, 500);

                return false;
            }
        }
    });

});

//Tabs
$('ul.tabs').tabs('select_tab', 'tab_id');

//Swiper
var swiper = new Swiper('.swiper-container', {
    lazy: true,
    slidesPerView: 1,
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

//ScrollFire
var options = [
    {selector: '.container-full-productos', offset: 200, callback: customCallbackFunc },
    {selector: '.other-class', offset: 200, callback: function() {
      customCallbackFunc();
    } },
  ];
  Materialize.scrollFire(options);
