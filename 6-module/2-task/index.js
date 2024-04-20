import createElement from '../../assets/lib/create-element.js';
export default class ProductCard {
  
  elem = null;
  
  constructor(product) {
    this.product = product; 
    this.elem = this.#render();
  }

  #template() {
   return `
    <div class="card">
    <div class="card__top">
        <img src="/assets/images/products/...значение product.image..." class="card__image" alt="product">
        <span class="card__price">€<!--значение product.price--></span>
    </div>
    <div class="card__body">
        <div class="card__title"><!--значение product.name--></div>
        <button type="button" class="card__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
        </button>
    </div>
</div>`;
  }
  
  #render() {
    this.elem = createElement(this.#template());

    let price = this.elem.querySelector('.card__price');
    price.textContent = `€${this.product.price.toFixed(2)}`;
    let cardSrc = this.elem.querySelector('.card__image');
    cardSrc.src = `/assets/images/products/${this.product.image}`;
    let cardName = this.elem.querySelector('.card__title');
    cardName.textContent = `${this.product.name}`

    let buttons = this.elem.querySelectorAll('.card__button');
    
    buttons.forEach( btn => {
      btn.addEventListener('click', this.#onMenuClick)
      });

    return this.elem;
  }

  
  #onMenuClick = () => {
    let event = new CustomEvent("product-add", { // имя события должно быть именно "product-add"
      detail: this.product.id, // Уникальный идентификатора товара из объекта товара
      bubbles: true // это событие всплывает - это понадобится в дальнейшем
  });
    
    this.elem.dispatchEvent(event);
  }

}