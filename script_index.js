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

let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');

menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
})


function sendAppl() {

}



