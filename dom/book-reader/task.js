const readerField = document.querySelector('.book');
const buttonsSize = document.querySelectorAll('.font-size');
const buttonsColor = document.querySelectorAll('.color');

let colorText = null;
let colorBg = null;
let size = null;

buttonsSize.forEach((item) => 
    item.addEventListener('click', (e) => {
        e.preventDefault();

        buttonsSize.forEach(
            (child) => child.classList.remove('font-size_active')
        );

        item.classList.add('font-size_active');
        
        if(item.dataset.size) {
            readerField.classList.remove(size);
            size = 'book_fs-' + item.dataset.size;
            readerField.classList.add(size);
        }
        else {
            readerField.classList.remove(size);
        }
    })
);

buttonsColor.forEach((item) => 
    item.addEventListener('click', (e) => {
        e.preventDefault();
        
        if(e.target.closest('.book__control_color')) {
            buttonsColor.forEach(
                (child) => child.classList.remove('color_active')
            );

            item.classList.add('color_active');
            
            if(item.dataset.color) {
                readerField.classList.remove(colorText);
                colorText = 'book_color-' + item.dataset.color;
                readerField.classList.add(colorText);
            }
            else {
                readerField.classList.remove(colorText);
            }
        }
        else if(e.target.closest('.book__control_background')) {
            buttonsColor.forEach(
                (child) => child.classList.remove('color_active')
            );

            item.classList.add('color_active');
            
            if(item.dataset.color) {
                readerField.classList.remove(colorBg);
                colorBg = 'book_bg-' + item.dataset.color;
                readerField.classList.add(colorBg);
            }
            else {
                readerField.classList.remove(colorBg);
            }
        }

    })

);
