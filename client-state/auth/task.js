const formAuth = document.getElementById('signin__form');
const subButton = document.getElementById('signin__btn');
const welcome = document.getElementById('welcome');
const userId = document.getElementById('user_id');


const chechValuesAuth = function(bool, userID) {
    if(bool) {
        formAuth.style.display = 'none';
        welcome.classList.add('welcome_active');
        userId.innerText = userID;
        localStorage.setItem('user_id', JSON.stringify(userID));
    }
    else {
        document.getElementById('irrelevant_values').classList.add('irrelevant_values_active');
        formAuth.style.display = 'none';
    }
};

if(JSON.parse(localStorage.getItem('user_id'))) {
    welcome.classList.add('welcome_active');
    userId.innerText = JSON.parse(localStorage.getItem('user_id'));
    formAuth.style.display = 'none';
};

formAuth.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(this);
    const xhr = new XMLHttpRequest();
    const url = 'https://netology-slow-rest.herokuapp.com/auth.php';
    xhr.responseType = 'json';

    xhr.open('POST', url);
    xhr.addEventListener('readystatechange', function(e) {
        if(this.readyState === 4 && this.status === 200) {
            chechValuesAuth(this.response.success, this.response.user_id);
        }
    });

    xhr.send(formData);
});