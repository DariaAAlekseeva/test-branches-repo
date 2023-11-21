// Считываем модальное окно
var modal = document.getElementById("modalWindow");

// Считываем кнопку для открытия окна
var btn = document.getElementById("loginButton");

// Считываем кнопку для закрытия онка
var span = document.getElementsByClassName("close")[0];

// Открываем модальное окно при нажатии на кнопку
btn.onclick = function () {
    modal.style.display = "flex";
};

// Закрываем модальное окно при нажатии на крестик
span.onclick = function () {
    modal.style.display = "none";
};

// Когда пользователь кликает в любом месте
// за пределами модального окна - закрываем его
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

function loginPC() {
    let loginValue = document.getElementById('login').value;
    let link = document.getElementById('loginButton');
    link.innerHTML = '' + loginValue;
}