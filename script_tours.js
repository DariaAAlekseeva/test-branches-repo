let menuBtn = document.querySelector('.burgerMenu');
let menu = document.querySelector('.burgerMenuItems');

menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
})