import { ExcelComponent } from "./../../core/ExcelComponent";

export class Header extends ExcelComponent {
  static className = "header";

  toHTML() {
    return `
      <input class="header__input" type="text" value="Новая Таблица" />

      <div class="header__buttons">
        <button class="button header__button">
          <span class="material-icons"> delete </span>
        </button>

        <button class="button header__button">
          <span class="material-icons"> logout </span>
        </button>
      </div>
    `;
  }
}
