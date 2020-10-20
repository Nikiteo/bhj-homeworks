function closeModal() {
    const modals = document.getElementsByClassName('modal')
    for (let i = 0; i < modals.length; i++)
    modals[i].classList.remove('modal_active');
}

const closers = document.getElementsByClassName('modal__close');
for (let i = 0; i < closers.length; i++) {
    closers[i].onclick = closeModal;
}

document.getElementsByClassName('show-success')[0].onclick = function() {
    closeModal();
    document.getElementById('modal_success').classList.add('modal_active');
}

document.getElementById('modal_main').classList.add('modal_active');

document.querySelector('a.btn_success').onclick = function() {
    closeModal();
    document.getElementById('modal_success').classList.remove('modal_active');
}