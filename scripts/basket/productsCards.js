'use strict';

const pathToImages = 'images';
const pathToFeatures = `${pathToImages}/featured`;
const featuredItemsEl = document.querySelector('.featuredItems');

/**
 * Функция, принимает объект (карточку товара)
 * @param {ProductDTO} product - Oбъект с информацией
 * @return {string} - html-код карточки товара
*/
function createFeaturedItem(product) {
    return `<section class="featuredItem">
        <div class="featuredImgWrap">
            <img src="${pathToImages}/${product.image}" alt="${product.name}">
            <div class="featuredImgDark">
                <button data-productID="${product.id}">
                    <img src="${pathToImages}/cart.svg" alt="icon">
                    Add To Card
                </button>
            </div>
        </div>
        <div class="featuredData">
            <p class="featuredName">${product.name}</p>
            <p class="featuredText">
                ${product.description}
            </p>
            <p class="featuredPrice">${product.price}</p>
        </div>
    </section>`;
}

/**
 * Функция, вставляющая карточки товара
 * @param {ProductDTO[]} products - Список товаров
 * @param {HTMLDivElement} featuredItems - Элемент, в который вставляются карточки
 */
function insertFeaturedItems(products, featuredItems) {
    let productMarkUp = '';
    for (let product of products) {
        productMarkUp += createFeaturedItem(product);
    }    
    featuredItems.insertAdjacentHTML('afterbegin', productMarkUp);
}

/**
 * Функция, добавляет товар к корзину
 */
function setOnClickListenerAddToCard() {
    const addToBasketBtns = document.querySelectorAll('button [data-productID]');
    addToBasketBtns.forEach(function(button){
        button.addEventListener('click', addProductHeandler);
    })
}

/**
 * Функция-обработчик клика, добавляет товар к корзину
 * @param {MouseEvent} event - Событие клика
 */
function addProductHeandler(event) {
    const productID = event.currentTarget.getAttribute('data-productID');
    // console.log(productID);
    addProductIntoBasket(productID)
}

insertFeaturedItems(products, featuredItemsEl);
setOnClickListenerAddToCard();
