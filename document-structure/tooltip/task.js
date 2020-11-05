const elemsForTooltip = document.querySelectorAll('.has-tooltip');
const elemTooltip = document.createElement('div');
elemTooltip.classList.add('tooltip');

elemsForTooltip.forEach((item) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        item.appendChild(elemTooltip);

        let elemTopCoord = e.target.getBoundingClientRect().top;
        let elemLeftCoord = e.target.getBoundingClientRect().left;
        let textTooltip = item.getAttribute('title');

        elemTooltip.contains(document.querySelector('.tooltip_active')) && document.querySelector('.tooltip_active').innerText == e.target.title ? 
        elemTooltip.classList.remove('tooltip_active') : elemTooltip.classList.add('tooltip_active');

        elemTooltip.style.top = elemTopCoord + 25 + 'px';
        elemTooltip.style.left = elemLeftCoord + 'px';
        elemTooltip.innerText = textTooltip;
    });
});