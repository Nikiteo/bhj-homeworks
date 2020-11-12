const textField = document.getElementById('editor');
const clearField = document.getElementById('clear');

if(localStorage.length !== 0) {
    textField.innerText =  JSON.parse(localStorage.getItem('text'));
}
else {
    textField.innerText = null;
}

textField.addEventListener('keyup', function(e) {
    let textValue = e.target.value;
    localStorage.setItem('text', JSON.stringify(textValue));
});

clearField.addEventListener('click', function(e) {
    localStorage.clear();
    textField.innerText = null;
});