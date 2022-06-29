"use strict";

window.addEventListener('DOMContentLoaded', function() {
    let products = document.querySelectorAll('.product'),
        buttons = document.querySelectorAll('button'),
        operBtn = document.querySelector('.open');

    function createCart() {
        let cart = document.createElement('div'),
            heading = document.createElement('h2'),
            field = document.createElement('div'),
            closeBtn = document.createElement('button');

        cart.classList.add('cart');
        field.classList.add('cart-field');
        closeBtn.classList.add('close');

        heading.textContent = "В корзине находится: ";
        closeBtn.textContent = "Закрыть";

        document.body.appendChild(cart);
        cart.appendChild(heading);
        cart.appendChild(field);
        cart.appendChild(closeBtn);
    }

    createCart();

    let cart = this.document.querySelector('.cart'),
        field = this.document.querySelector('.cart-field'),
        closeBtn = this.document.querySelector('.close');

    function openCart() {
        cart.style.display = "block";
    }
    function closeCart() {
        cart.style.display = "none";
    }

    operBtn.addEventListener('click', openCart);
    closeBtn.addEventListener('click', closeCart);

    /* for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function() {
            let item = products[i].cloneNode(true),
                btn = item.querySelector('button');

            btn.remove();
            field.appendChild(item);
            products[i].remove();
        })
    } */

    buttons.forEach((item, i) => {
        item.addEventListener('click', function() {
            let item = products[i].cloneNode(true),
                btn = item.querySelector('button');

            btn.remove();
            field.appendChild(item);
            products[i].remove();
        })
    });
});