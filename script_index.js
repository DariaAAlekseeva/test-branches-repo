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


function sendAppl() {
    let userName = document.getElementById('userName').value;
    let mesgInput = document.getElementById('sendMsg').style.display = 'block';
    let str = userName + ', ваша заявка принята! Наш менеджер свяжется с вами в ближайшее время.';
    document.getElementById('sendMsg_txt').textContent = str;
}

function closeSendMsg() {
    let mesgInput = document.getElementById('sendMsg').style.display = 'none';
    document.getElementById('userName').value = '';
    document.getElementById('userPhone').value = '';
    document.getElementById('userEmail').value = '';
    document.getElementById('buttonSendAppl').setAttribute('disabled', 'disabled');
}

function isNameEmpty() {
    let userName = document.getElementById('userName').value;
    if (userName.trim() == '') {
        return false;
    } else {
        return true;
    }
}

function isPhoneEmpty() {
    let userPhone = document.getElementById('userPhone').value;
    if (userPhone.trim() == '') {
        return false;
    } else {
        return true;
    }
}

function isEmailEmpty() {
    let userEmail = document.getElementById('userEmail').value;
    if (userEmail.trim() == '') {
        return false;
    } else {
        return true;
    }
}

function isFormFilled() {
    if (isNameEmpty() && isPhoneEmpty() && isEmailEmpty()) {
       return true;
    } else{
       return false;
    }
}

function makeButtonActive() {
    button = document.getElementById('buttonSendAppl');
    if (isFormFilled()){
        button.removeAttribute('disabled')
    } else{
        button.setAttribute('disabled', 'disabled');
    }
}
