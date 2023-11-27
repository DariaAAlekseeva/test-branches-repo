function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }

function isUserAuthorized() {
    let login = getCookie('name');
    if (login) {
        document.getElementById('authorizedMenu').style.display='block';
        document.getElementById('notAuthorizedMenu').style.display='none';
        document.getElementById('loginValue').innerHTML = 'Пользователь: ' + login;
    } else {
        document.getElementById('authorizedMenu').style.display='none';
        document.getElementById('notAuthorizedMenu').style.display='block';
    }
}

