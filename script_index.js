$('.popularTours__cards').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    accessibility: true,
    arrows: true,
    autoplay: true,
    pauseOnHover: true,
    variableWidth: true,
    dots: true,
    dotsClass: "customDots",
    prevArrow: $('.popularTours__buttonPrev'),
    nextArrow: $('.popularTours__buttonNext'),
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

$('.videoGallery').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    accessibility: true,
    arrows: false,
    pauseOnHover: true,
    variableWidth: true,

});

let burgerMenu = document.querySelector('.burgerMenu');
let burgerMenuItems = document.querySelector('.burgerMenuItems');

burgerMenu.addEventListener('click', function () {
    burgerMenu.classList.toggle('active');
    burgerMenuItems.classList.toggle('active');
})





