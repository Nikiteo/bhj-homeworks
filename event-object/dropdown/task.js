const getChooseElem = function() {
    const btnElem = document.querySelector('.dropdown__value');
    const elemsList = document.querySelector('.dropdown__list');

    btnElem.addEventListener('click', () => {
        elemsList.classList.add('dropdown__list_active');
    });

    elemsList.addEventListener('click', (e) => {
        e.preventDefault();
        elemsList.classList.remove('dropdown__list_active');
        btnElem.textContent = e.target.textContent;
    });
};

document.addEventListener('DOMContentLoaded', getChooseElem);