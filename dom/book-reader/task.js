const readerField = document.querySelector('.book');
const buttonsSize = document.querySelectorAll('.font-size');

buttonsSize.forEach((item) => 
    item.addEventListener('click', (e) => {
        e.preventDefault();

        buttonsSize.forEach(
            (child) => child.classList.remove('font-size_active')
        );

        item.classList.add('font-size_active');

        if(item.dataset.size) {
            let size = 'book_fs-' + item.dataset.size;
            readerField.className = 'book ' + size;
        }
        else {
            readerField.className = 'book';
        }

    })
);

// const buttonsColor = document.querySelectorAll('.color');

// buttonsColor.forEach((item) => 
//     item.addEventListener('click', (e) => {
//         e.preventDefault();
//         console.log(e.target)

//         buttonsColor.forEach(
//             (child) => child.classList.remove('color_active')
//         );

//         item.classList.add('color_active');

//         let color;
        
//         if(item.dataset.color == 'gray') {
//             color = 'book_color-' + item.dataset.color;
//             readerField.classList.add(color);
//         }
//         else if (item.dataset.color == 'whitesmoke') {
//             color = 'book_color-' + item.dataset.color;
//             readerField.classList.add(color);
//         }

//     })

// );
