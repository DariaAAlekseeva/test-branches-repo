
$('.routeDescr__slider-cards').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    autoplay: true,
    arrows: true,
    pauseOnHover: true,
    variableWidth: true,
    autoplay: true,
    dots: true,
    dotsClass: "customDots",
    prevArrow: $('.routeDescr__buttonPrev'),
    nextArrow: $('.routeDescr__buttonNext'),
});

$('.reviews__cards').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    accessibility: true,
    arrows: true,
    pauseOnHover: true,
    variableWidth: true,
    autoplay: true,
    dots: true,
    dotsClass: "customDots",
    prevArrow: $('.reviews__buttonPrev'),
    nextArrow: $('.reviews__buttonNext'),
});

let menuBtn = document.querySelector('.burgerMenu');
let menu = document.querySelector('.burgerMenuItems');

menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
})



