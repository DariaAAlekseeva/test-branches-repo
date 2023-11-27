let modal = document.getElementById("modalWindow");
var openButton = document.getElementById("loginButton");
var closeButton = document.getElementsByClassName("close")[0];

openButton.onclick = function () {
    modal.style.display = "flex";
};

function closeModalWindow() {
    modal.style.display = "none";
};

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

function login() {
    let loginValue = document.getElementById('login').value;
    document.cookie = 'name' + '=' + encodeURIComponent(loginValue);
    closeModalWindow();
    location.reload();
}
