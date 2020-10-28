const textContent = document.querySelectorAll('.reveal');

function isVisible(elem) {
    let coords = elem.getBoundingClientRect();
    let windowHeight = document.documentElement.clientHeight;
    let topVisible = coords.top > 0 && coords.top < windowHeight;
    let bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;

    return topVisible || bottomVisible;
  }

  function showVisible() {
    for(let elem of textContent) {
        if (isVisible(elem)) {
            elem.classList.add('reveal_active');
        }
        else {
            elem.classList.remove('reveal_active');
        }
    }

  }
  showVisible();
  window.onscroll = showVisible;
