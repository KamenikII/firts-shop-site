'use strict'

const openBasketBtn = document.querySelector('.cartIconWrap')
const basketEl = document.querySelector('.basket')
const basketCounter = document.querySelector('.cartIconWrap span')
const basketTotal = document.querySelector('.basketTotal')
const basketTotalValue = document.querySelector('.basketTotalValue')



/**
 * Функция, которая скрывает/показывает корзину
 */
openBasketBtn.addEventListener('click', function(){
    basket.classList.toggle('hidden')
})

/**
 * В корзине хранится кол-во каждого товара
 * Ключ - это ID продукта, значение - это кол-во товаров в корзине
 */
let basket = {}
function addProductToObject(productID) {
    if (!(productID in basket)) basket[productID] = 1
    else basket[productID]++
}

/**
 * Функция, срабатывает, когда нужно отрисовать продукт в корзине
 * @param {number} productID
 */
function renderProductsInBasket(){
    let productExist = document.querySelector(`productCount[data-productID="${productID}"]`)
    if (productExist) {
        // Перещёт стоимости, добавление
    }
    else {
        renderNewProductInBasket(productID)
    }
}

/**
 * Функция рэндера корзины
 */
function renderNewProductInBasket() {
    let productRow = `
        <div class="basketRow basketHeader">
            <div>${products[productID].name}</div>
            <div>
                <span class="productCount" data-productID="${productID}">1</span>шт.
            </div>
            <div>${products[productID].price}</div>
            <div>
                $<span class="ProductTotalRow" data-productID="${productID}> ${products[productID].price}</span>
            </div>
        </div>

        <div class="basketTotal">
            Total:
            $<span class="basketTotalValue">0</span>
        </div>
    `
    basketTotal.insertAdjacentHTML('beforebegin', productRow)
}





function addProductIntoBasket(productId) {
    addProductToObject(productId)
    renderNewProductInBasket(productId)
}