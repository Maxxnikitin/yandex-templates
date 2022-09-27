const items = [
  { text: "Сделать проектную работу" },
  { text: "Полить цветы" },
  { text: "Пройти туториал по Реакту" },
  { text: "Сделать фронтенд для своего проекта" },
];

const container = document.querySelector(".list");
const template = document.querySelector(".template");
const submitBtn = document.querySelector(".form__submit");
const input = document.querySelector(".form__input");

let editableItem = null;

const render = () => {
  items.forEach((item) => {
    const currentItem = createItemNode(item.text);
    container.append(currentItem);
  });

  submitBtn.addEventListener("click", handleAddItem);
};

const createItemNode = (text) => {
  const currentItem = template.content.cloneNode(true);
  const currentText = currentItem.querySelector(".item__text");
  currentText.textContent = text;

  setListeners(currentItem);

  return currentItem;
};

const setListeners = (currentItem) => {
  const deleteBtn = currentItem.querySelector(".delete");
  deleteBtn.addEventListener("click", handleDeleteItem);

  const duplicateBtn = currentItem.querySelector(".duplicate");
  duplicateBtn.addEventListener("click", handleDuplicateItem);

  const editBtn = currentItem.querySelector(".edit");
  editBtn.addEventListener("click", handleEditItem);
};

const handleAddItem = () => {
  if (editableItem) {
    handleConfirmEdit();
    return;
  }
  const item = createItemNode(input.value);
  container.prepend(item);
  input.value = "";
};

const handleDeleteItem = (e) => {
  const currentItem = e.target.closest(".list__item");
  currentItem.remove();
};

const handleDuplicateItem = (e) => {
  const currentItem = e.target.closest(".list__item");
  const text = currentItem.querySelector(".item__text").textContent;
  const copyItem = createItemNode(text);

  currentItem.after(copyItem);
};

const handleEditItem = (e) => {
  const currentItem = e.target.closest(".list__item");
  editableItem = currentItem;
  const text = editableItem.querySelector(".item__text").textContent;
  input.value = text;
  submitBtn.textContent = "Обновить";
};

const handleConfirmEdit = () => {
  editableItem.querySelector(".item__text").textContent = input.value;
  input.value = "";
  editableItem = null;
  submitBtn.textContent = "Добавить";
};

render();
