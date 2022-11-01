class TodoList {
  static _template = document.querySelector(".template-list").content;

  constructor(items, createForm, createItem) {
    this._items = items;
    this._createForm = createForm;
    this._createItem = createItem;
  }

  addItem = (text) => {
    this._createItem(text, this.addItem).render(this._view);
  };

  render = (container) => {
    this._view = TodoList._template.cloneNode(true).children[0];
    this._createForm(this.addItem).render(this._view);

    this._items.forEach((item) => this.addItem(item.text));

    container.append(this._view);
  };
}
