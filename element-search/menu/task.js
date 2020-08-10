const links = Array.from(document.getElementsByClassName('menu__link'));

function clicks(e) {
    if (this.nextElementSibling) {
        e.preventDefault();
        const active = document.querySelector('.menu_active');
        if (active) {
            active.classList.remove('menu_active')
            if (e.target === active.previousElementSibling) {
                return;
            }
        }
        this.nextElementSibling.classList.add('menu_active')
    }
}

for (i = 0; i < links.length; i++) {
    links[i].addEventListener('click', clicks);
}