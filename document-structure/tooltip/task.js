const elemsForTooltip = document.querySelectorAll('.has-tooltip');

elemsForTooltip.forEach((item) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();

        document.querySelectorAll('.tooltip').forEach((item) => {
            item.remove();
        });

        let elemTopCoord = e.target.getBoundingClientRect().top;
        let elemLeftCoord = e.target.getBoundingClientRect().left;
        let textTooltip = item.getAttribute('title');

        const createTooltip = function() {
            let elemTooltip = document.createElement('div');
            elemTooltip.classList.add('tooltip');
            elemTooltip.style.left = elemLeftCoord + 'px';
            elemTooltip.style.top = elemTopCoord + 25 + 'px';
            elemTooltip.style.display = 'block';
            elemTooltip.innerText = textTooltip;
            return elemTooltip;
        }

        let elementTooltip = createTooltip();

        e.target.insertAdjacentElement('afterend', elementTooltip);
    });
});