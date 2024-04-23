import createElement from '../../assets/lib/create-element.js'; // импорт функции позволяющей создавать DOM из текста

export default class StepSlider {
  elem = null;

  constructor({ steps, value = 0 }) {
    this.steps = steps; // ?? на вход подается массив с данными steps и value, как создать из них переменные
    this.value = value;
    this.elem = this.#render();
  }

  #template() {

   return ` <!--Корневой элемент слайдера-->
   <div class="slider">
   
     <!--Ползунок слайдера с активным значением-->
     <div class="slider__thumb">
       <span class="slider__value">0</span>
     </div>
   
     <!--Полоска слайдера-->
     <div class="slider__progress"></div>
   
     <!-- Шаги слайдера (вертикальные чёрточки) -->
     <div class="slider__steps">
       <!-- текущий выбранный шаг выделен этим классом -->
       <span class="slider__step-active"></span>
      </div>
   ` ;
   
  }

   #render() {
   this.elem = createElement(this.#template());

   // вставка эл-тов span в соответствии с кол-вом слайдов
   let spanClass = this.elem.querySelector('.slider__steps');
   for (let i = 1; i <= this.steps - 1; i++) {
    spanClass.insertAdjacentHTML('beforeend', '<span></span>');
   }
   // ??закрыт ли элемент с классом slider__steps
   //В свойстве elem должна оказаться ссылка на корневой элемента с классом slider
   
  // Вешать обработчик события клик рекомендуется на корневой элемент слайдера с классом slider
    this.elem.addEventListener('click', this.#onClickDo);

    return this.elem;
  }

  #onClickDo = (event) => {
    //let event = this.elem /// ?? event - объект события "click" ??  

    // расстояние в пикселях от начала слайдера до места клика. 
    let left = event.clientX - this.elem.getBoundingClientRect().left;
    // event - объект события "click" ?? 
    // this.elem - ссылка на корневой элемент слайдера

    // относительное значение расстояния, взяв за основу ширину слайдера
    let leftRelative = left / this.elem.offsetWidth;

    // конкретное значение слайдера value
    let segments = this.steps - 1;
    let approximateValue = leftRelative * segments;
    let value = Math.round(approximateValue);
    this.value = value;
    // значение в процентах для перемещения ползунка и закрашивания заполненной области
    let valuePercents = value / segments * 100;

    //Записать новое значение слайдера внутрь элемента с классом slider__value
    this.elem.querySelector('.slider__value').innerHTML = value;

    /**
     Визуально выделить шаг на слайдере, добавив класс slider__step-active элементу span внутри 
     элемента с классом slider__steps. Например, если значение – 3, то выделить нужно 4-ый по счету span,
      т.к. у нас счет начинается с 0.
     */
      let currentSlide = this.elem.querySelector('.slider__steps').querySelectorAll('span');

        for (let span of currentSlide) {
          span == currentSlide[value - 1] ? span.classList.add('slider__step-active') 
                                          : span.classList.remove('slider__step-active')
        }



    /**
    Поменять положение ползунка (элемент с классом slider__thumb), задав ему left в стилях.
    Расширить закрашеную область до ползунка (элемент с классом slider__progress) изменив ее ширину.
    */
    let thumb = this.elem.querySelector('.slider__thumb');
    let progress = this.elem.querySelector('.slider__progress');

    let leftPercents = valuePercents; 

    thumb.style.left = `${leftPercents}%`;
    progress.style.width = `${leftPercents}%`;


      let event2 = new CustomEvent('slider-change', { // имя события должно быть именно 'slider-change'
        detail: this.value, // значение 0, 1, 2, 3, 4
        bubbles: true // событие всплывает - это понадобится в дальнейшем
      })

      this.elem.dispatchEvent(event2);

  }
}
