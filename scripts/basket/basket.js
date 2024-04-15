'use strict'

const openBasketBtn = document.querySelector('.cartIconWrap')
const basketEl = document.querySelector('.basket')
const basketCounter = document.querySelector('.cartIconWrap span')
const basketTotal = document.querySelector('.basketTotal')
const basketTotalValue = document.querySelector('.basketTotalValue')



/**
 * Функция, которая скрывает/показывает корзину
 */
openBasketBtn.addEventListener('click', function () {
    basketEl.classList.toggle('hidden')
})

/**
 * В корзине хранится кол-во каждого товара
 * Ключ - это ID продукта, значение - это кол-во товаров в корзине
 */
let basket = {}

/**
 * Функция, добавляет продукт в basket
 * @param {number} productID
 */
function addProductToObject(productID) {
    if (!(productID in basket)) basket[productID] = 1
    else basket[productID]++
}

/**
 * Функция, срабатывает, когда нужно отрисовать продукт в корзине
 * @param {number} productID
 */
function renderProductsInBasket(productID){
    let productExist = document.querySelector(`.productCount[data-productID="${productID}"]`)
    if (productExist) {
        increaseProductCount(productID);
        recalculateSumForProduct(productID);
    }
    else {
        renderNewProductInBasket(productID)
    }
}

/**
 * Функция рэндера корзины
 * @param {number} productID
 */
function renderNewProductInBasket(productID) {
    let productRow = `
        <div class="basketRow basketHeader">
            <div>${products[productID].name}</div>
            <div>
                <span class="productCount" data-productID="${productID}">1</span>шт.
            </div>
            <div>${products[productID].price}</div>
            <div>
                $<span class="ProductTotalRow" data-productID="${productID}">${products[productID].price}</span>
            </div>
        </div>
    `
    basketTotal.insertAdjacentHTML('beforebegin', productRow)
}

/**
 * увеличивает количество товаров в корзине
 * @param {number} productID 
 */
function increaseProductCount(productID) {
    const productCountEl = document.querySelector(
        `.productCount[data-productID="${productID}"]`
    )
    productCountEl.textContent++
}

/**
 * Функция, пересчитывающая стоимость товара, учитывая его количество
 * @param {number} productID 
 */
function recalculateSumForProduct(productID) {
    const productTotalRowEl = document.querySelector(
        `.ProductTotalRow[data-productID="${productID}"]`
    )
    let totalPriceForRow = (basket[productID] * products[productID].price).toFixed(2)
    productTotalRowEl.textContent = totalPriceForRow
}

/**
 * Функция, пересчитывающая общую сумму товаров в корзине
 */
function calculateAndRenderTotalBasketSum() {
    let summ = 0
    for (let productID in basket) summ += basket[productID] * products[productID].price
    basketTotalValue.textContent = summ.toFixed(2)
}

/**
 * Увеличение счётчика товара
 */
function increaseProductsCount() {
    basketCounter.textContent++
}


function addProductIntoBasket(productID) {
    increaseProductsCount()
    addProductToObject(productID)
    renderProductsInBasket(productID)
    calculateAndRenderTotalBasketSum()
}