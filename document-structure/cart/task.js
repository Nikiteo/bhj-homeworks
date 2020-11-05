const productsElems = document.querySelector('.products');
const cartElems = document.querySelector('.cart');
const cartProducts = document.querySelector('.cart__products');

cartElems.style.display = 'none';

productsElems.addEventListener('click', (e) => {

    if(e.target.classList.contains('product__quantity-control_inc')) {
        //ищем родителя с классом 'product', у него берем элемент с классом 'product__quantity-value' и увеличиваем число в textContent
        e.target.closest('.product').querySelector('.product__quantity-value').textContent++;
    }
    else if(e.target.classList.contains('product__quantity-control_dec')) {
        //ищем родителя с классом 'product', у него берем элемент с классом 'product__quantity-value' и уменьшаем число в textContent
        //Проверяем число в textContent
        if(e.target.closest('.product').querySelector('.product__quantity-value').textContent <= 1) {
            e.target.closest('.product').querySelector('.product__quantity-value').textContent = 1;
        }
        else {
            e.target.closest('.product').querySelector('.product__quantity-value').textContent--;
        }

    }
    else if(e.target.classList.contains('product__add')) {
        cartElems.style.display = 'block';

        //проверяем начилие товара в корзине, далее отталкиваемся от значение findCart
        let arrCartProducts = Array.from(cartProducts.children);
        let findCart = arrCartProducts.find(item => 
            item.dataset.id == e.target.closest('.product').dataset.id);

        if(findCart) {
            //получаем элемент, если он был найден в findCart
            let productInCartValue = findCart.querySelector('.cart__product-count');
            //приводим значения textContent к числу, чтобы потом их сложить
            let valueInCartNumber = Number(productInCartValue.textContent);
            let valueProductNumber = Number(e.target.closest('.product').querySelector('.product__quantity-value').textContent);
            //складываем значения и присваиваем в textContent товара в корзине
            productInCartValue.textContent = valueInCartNumber + valueProductNumber;
        }
        else {
            //если findCart == undefined --> создаем товар в корзине
            let cartProduct = document.createElement('div');
            cartProduct.classList.add('cart__product');
            cartProduct.setAttribute('data-id', e.target.closest('.product').dataset.id);

            let imgProduct = document.createElement('img');
            imgProduct.classList.add('cart__product-image');
            imgProduct.setAttribute('src', e.target.closest('.product').querySelector('.product__image').src);
            cartProduct.append(imgProduct);

            let countProduct = document.createElement('div');
            countProduct.classList.add('cart__product-count');
            countProduct.textContent = e.target.closest('.product').querySelector('.product__quantity-value').textContent;
            cartProduct.append(countProduct);

            let deletePic = document.createElement('a');
            deletePic.classList.add('remove__product');
            deletePic.setAttribute('href', '#');
            deletePic.innerHTML = '&times;'
            cartProduct.append(deletePic);


            document.querySelector('.cart__products').append(cartProduct);
        }
    }
});

cartElems.addEventListener('click', (e) => {
    e.preventDefault();
    if(e.target.classList.contains('remove__product')) {
        e.target.closest('.cart__product').remove();

        if(cartProducts.children.length) {
            cartElems.style.display = 'block';
        }
        else {
            cartElems.style.display = 'none';
        }
        
    }
});
