import createElement from '../../assets/lib/create-element.js';
import ProductCard from '../../6-module/2-task/index.js';

export default class ProductGrid {

  constructor(products) {
    this.products = products;
    this.filters = {};
    this.elem = createElement(this.#renderElem());
    this.#renderProd(this.products); 
  }

  #renderElem () {
    return (`
      <div class="products-grid">
        <div class="products-grid__inner"></div>
      </div>
    `);
  }

  #renderProd (products) {
    //создадим "продукты" на странице
    for (let prod of products) {
      let prodItem = new ProductCard(prod);
      this.elem.querySelector('.products-grid__inner').append(prodItem.elem);
    }
  }

  // обновление ключей фильтров при проставлении нескольких фильтров
  updateFilters(filters) {
    for (const key in filters) {
      this.filters[key] = filters[key];
    }
  }

  updateFilter(filters) {
    
    this.elem.querySelector('.products-grid__inner').innerHTML = '';
    this.updateFilters(filters);

    const filtredProd = this.products.filter(product => {
      //  есть фильтр "без орехов" (true) и при этом у продукта есть индиф-тор наличия орехов (true) -> фильтр
      if (this.filters.noNuts && product.nuts) {
        return false;
      }
      //  есть фильтр "вегетар-кое" (true) и при этом продукта НЕ вегетар-кий (true) -> фильтр
      if (this.filters.vegeterianOnly && !product.vegeterian) {
        return false;
      }
      //  есть фильтр по остроте (true) и сущ-ет св-во продукта по остр-те (true), которое больше фильтра -> фильтр
      if (this.filters.maxSpiciness && product.spiciness > this.filters.maxSpiciness) {
        return false;
      }

      if (this.filters.category && product.category !== this.filters.category) {
        return false;
      }

      return true;
    });

    
    this.#renderProd(filtredProd);

  } 

}
