class TodoItem {
  static _template = document.querySelector(".template-item").content;

  constructor(text, addItem) {
    this._text = text;
    this._addItem = addItem;
  }

  _handleDelete = () => {
    this._view.remove();
  };

  _handleCopy = () => {
    this._addItem(this._text);
  };

  render = (container) => {
    this._view = TodoItem._template.cloneNode(true).children[0];
    this._view.querySelector(".item__text").textContent = this._text;

    this._view
      .querySelector(".delete")
      .addEventListener("click", this._handleDelete);

    this._view
      .querySelector(".duplicate")
      .addEventListener("click", this._handleCopy);

    container.append(this._view);
  };
}
