const form = document.getElementById('form');
const progress = document.getElementById('progress');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(this);
    const xhr = new XMLHttpRequest();
    const url = 'https://netology-slow-rest.herokuapp.com/upload.php';
    xhr.upload.addEventListener('progress', (e) => {
        progress.value = e.loaded / e.total;
    });
    xhr.open('POST', url);
    xhr.send(formData);
    this.reset();
});



