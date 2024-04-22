/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
import createElement from '../../assets/lib/create-element.js';
export default class UserTable {

  constructor(rows) {
    this.rows = rows;
    this.elem = this.#render();
  }

  #template() {
   return `
   <table>
        <thead>
        <tr>
            <th>Имя</th>
            <th>Возраст</th>
            <th>Зарплата</th>
            <th>Город</th>
            <th></th>
        </tr>
        </thead>
          <tbody>
          ${this.rows.map(obj =>
            `
          <tr>
          <td>${obj.name}</td>
          <td>${obj.age}</td>
          <td>${obj.salary}</td>
          <td>${obj.city}</td>
          <td><button>X</button></td>
        </tr>
          `).join('')}
      </tbody>
      </table>`
  }

  #render() {
    this.elem = createElement(this.#template());

    let buttons = this.elem.querySelectorAll("button");
    
    buttons.forEach( btn => {
      btn.addEventListener('click', this.#deleteRow)
      });

    return this.elem;
  }

  #deleteRow = (event) => {
      event.target.closest("tr").remove()
  }
}
