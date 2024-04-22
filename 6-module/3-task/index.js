import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  elem = null;


  constructor(slides) {
    this.slideIndex = 0;
    this.slides = slides;
    this.elem = this.#render();
  }

  #template() {
    return `
    <div class="carousel">
      <div class="carousel__arrow carousel__arrow_right">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </div>
      <div class="carousel__arrow carousel__arrow_left">
        <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
      </div>

      <div class="carousel__inner">
      ${this.slides.map(slide => `
    <div class="carousel__slide" data-id="${slide.id}">
      <img src="/assets/images/carousel/${slide.image}" class="carousel__img" alt="slide">
      <div class="carousel__caption">
        <span class="carousel__price">€${slide.price.toFixed(2)}</span>
        <div class="carousel__title">${slide.name}</div>
        <button type="button" class="carousel__button">
          <img src="/assets/images/icons/plus-icon.svg" alt="icon">
        </button>
      </div>
    </div>`).join('')}
    </div>
    </div>
    `;
   }
   
   #render() {
    
    this.elem = createElement(this.#template());
    
    let rightClick = this.elem.querySelector('.carousel__arrow_right');
    let leftClick = this.elem.querySelector('.carousel__arrow_left');

    let slides = this.elem.querySelectorAll('.carousel__slide');
    
    let conteiner =  this.elem.querySelector('.carousel__inner');

    let position = 0;
    let slideIndex = 0;
    let slideIndexMax = slides.length - 1;
  
    if (slideIndex == 0) {
      leftClick.style.display = 'none';
    };

    rightClick.onclick = function () {
    let width = slides[0].offsetWidth;
    position -= width;
    position = Math.max(position, -width * (slides.length - 1));
    conteiner.style.transform = `translateX(${position}px)`;
      
    slideIndex = Math.min(++slideIndex,slideIndexMax);
  
      if (slideIndex == slideIndexMax) {
        rightClick.style.display = 'none';
      };
  
      if (slideIndex != 0) {
        leftClick.style.display = '';
      };
    }
  
    
    leftClick.onclick = function () {
       let width = slides[0].offsetWidth;
        position += width;
        position = Math.min(position,0);
        conteiner.style.transform = `translateX(${position}px)`;
  
        slideIndex = Math.max(--slideIndex,0);
  
        if (slideIndex == 0) {
          leftClick.style.display = 'none';
        };
    
        if (slideIndex != slideIndexMax) {
          rightClick.style.display = '';
        };
        }
 

    let buttons = this.elem.querySelectorAll('.carousel__button');
    buttons.forEach( btn => {
       btn.addEventListener('click', this.#onButtonClick)
       });

    return this.elem;
   }

   #onButtonClick = (evt) => {
    let event = new CustomEvent("product-add", { // имя события должно быть именно "product-add"
      detail: evt.currentTarget.closest('.carousel__slide').dataset.id, // Уникальный идентификатора товара из объекта товара
      bubbles: true, // это событие всплывает - это понадобится в дальнейшем
  });
     this.elem.dispatchEvent(event);
   }
 



}
