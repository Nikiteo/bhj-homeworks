const arrTextContent = Array.from(document.querySelectorAll('.rotator__case'));

let delay = 1000;
var currentIndex = 0;
setInterval(function() {
    
    arrTextContent.forEach((item) => 
        item.classList.remove('rotator__case_active')
    );

    arrTextContent[currentIndex].classList.add('rotator__case_active');
    arrTextContent[currentIndex].style.color = arrTextContent[currentIndex].dataset.color;

    delay = arrTextContent[currentIndex].dataset.speed;

    if(++currentIndex >= arrTextContent.length) {
        currentIndex = 0;
    }

}, delay);