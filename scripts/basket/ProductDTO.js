'use strict';

class ProductDTO {
    /**
     * @param {number} id - Уникальный индетифактор товара
     * @param {string} image - Cсылку на каритинку товара
     * @param {string} name - Название товара
     * @param {string} description - Описание товара
     * @param {number} price - Цена товара
     */

    constructor(id, image, name, description, price) {
        this.id = id
        this.image = image
        this.name = name
        this.description = description
        this.price = price
    }
}