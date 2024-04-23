import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    this.elem = this.#render();
  }

  #template () {
    return `
    <!--Корневой элемент RibbonMenu-->
    <div class="ribbon">
      <!--Кнопка прокрутки влево-->
      <button class="ribbon__arrow ribbon__arrow_left">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </button>
  
      <!--Ссылки на категории-->
      <nav class="ribbon__inner">
      ${this.categories.map(category => `
      <a href="#" class="ribbon__item ribbon__item_active" data-id="${category.id}">${category.name}</a>`)
      .join('')}
      </nav>

      
    <!--Кнопка прокрутки вправо-->
    <button class="ribbon__arrow ribbon__arrow_right ribbon__arrow_visible">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </button>
  </div>

</div>
    `;
  }

  #render() {
    this.elem = createElement(this.#template());
    let rightClick = this.elem.querySelector('.ribbon__arrow_right');
    let leftClick = this.elem.querySelector('.ribbon__arrow_left');
    let ribbonInner =  this.elem.querySelector('.ribbon__inner');

    let position = 0;
    
    rightClick.onclick = function () {
      position = 350;
      ribbonInner.scrollBy(position, 0);

      let scrollLeft = ribbonInner.scrollLeft;
      scrollLeft == 0 ? leftClick.classList.remove('ribbon__arrow_visible')
                    : leftClick.classList.add('ribbon__arrow_visible') ;
      
      let scrollWidth = ribbonInner.scrollWidth;
      let clientWidth = ribbonInner.clientWidth;
                    
      let scrollRight = scrollWidth - scrollLeft - clientWidth;
      scrollRight == 0 ? rightClick.classList.remove('ribbon__arrow_visible')
                      : rightClick.classList.add('ribbon__arrow_visible') ; 
    }      
    
    leftClick.onclick = function () {
      position = 350;
      ribbonInner.scrollBy(-position, 0);

      let scrollLeft = ribbonInner.scrollLeft;
      scrollLeft == 0 ? leftClick.classList.remove('ribbon__arrow_visible')
                    : leftClick.classList.add('ribbon__arrow_visible') ;
      
      let scrollWidth = ribbonInner.scrollWidth;
      let clientWidth = ribbonInner.clientWidth;
                    
      let scrollRight = scrollWidth - scrollLeft - clientWidth;
      scrollRight == 0 ? rightClick.classList.remove('ribbon__arrow_visible')
                      : rightClick.classList.add('ribbon__arrow_visible') ; 
    }   
    
    let category = this.elem.querySelectorAll('.ribbon__item');
    category.forEach( btn => {
       btn.addEventListener('click', this.#onCategoryClick)
       });

    return this.elem;
  }

  #onCategoryClick (event) {
    event.preventDefault();
    let category2 = event.currentTarget.closest('.ribbon__inner').children;
    for (let item of category2) {
      item.classList.remove('ribbon__item_active');
    }
    event.currentTarget.classList.add('ribbon__item_active');

    let event2 = new CustomEvent('ribbon-select', { // имя события должно быть именно 'ribbon-select'
      detail: event.currentTarget.dataset.id, // уникальный идентификатора категории из её объекта
      bubbles: true // это событие всплывает - это понадобится в дальнейшем
    })
    event.currentTarget.closest('.ribbon').dispatchEvent(event2);

  }

}
