import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor() {
    this.elem = this.#render();
  }

#template() {
  return `
  <div class="modal">
  <!--Прозрачная подложка перекрывающая интерфейс-->
  <div class="modal__overlay"></div>

  <div class="modal__inner">
    <div class="modal__header">
      <!--Кнопка закрытия модального окна-->
      <button type="button" class="modal__close">
        <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
      </button>

      <h3 class="modal__title">
      </h3>
    </div>

    <div class="modal__body">
    </div>
  </div>

</div>
  `
}

#render() {
  this.elem = createElement(this.#template());
  return this.elem;
}

close = (event) => {
this.elem.remove();
document.body.classList.remove('is-modal-open');
document.removeEventListener(event, this.down);
}

setTitle (title) {
this.elem.querySelector('.modal__title').textContent = title;
}

setBody (node) {
this.elem.querySelector('.modal__body').innerHTML = ""
this.elem.querySelector('.modal__body').append(node);
}

open () {
  document.body.append(this.elem);
  document.body.classList.add('is-modal-open');
  let button = this.elem.querySelector('.modal__close');
  button.addEventListener('click', this.close);
  document.addEventListener('keydown', this.down);
}

down = (event) => {
  if (event.code === "Escape") {
    this.close();
  }
} 


}

