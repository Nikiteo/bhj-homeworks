const elSubscribeModal = document.getElementById('subscribe-modal');
const elSubscribeModalClose = elSubscribeModal.querySelector('.modal__close');

let date = new Date(Date.now() + 86400e3);
date = date.toUTCString();

elSubscribeModalClose.addEventListener('click', () => {
    elSubscribeModal.classList.remove('modal_active');
    document.cookie = 'modalwasshown=true; Expires=' + date;
});

function wasShowModal() {
    return ("; " + document.cookie).includes('; modalwasshown=');
};

function showSubscribeModal() {
    if (!wasShowModal()) {
        elSubscribeModal.classList.add('modal_active');
    }
};

document.cookie = 'somefirstcookie=first; Expires='  + date;
showSubscribeModal();