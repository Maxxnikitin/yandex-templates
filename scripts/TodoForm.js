class TodoForm {
  static _template = document.querySelector(".template-form").content;

  constructor(addItem) {
    this._addItem = addItem;
  }

  _handleSubmit() {
    const input = this._view.querySelector(".form__input");
    this._addItem(input.value);
    input.value = "";
  }

  render = (container) => {
    this._view = TodoForm._template.cloneNode(true).children[0];

    this._view
      .querySelector(".form__submit")
      .addEventListener("click", this._handleSubmit.bind(this));

    container.append(this._view);
  };
}
