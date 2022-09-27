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

  const deleteBtn = currentItem.querySelector(".delete");
  deleteBtn.addEventListener("click", handleDeleteItem);

  return currentItem;
};

const handleAddItem = () => {
  const item = createItemNode(input.value);
  container.prepend(item);
  input.value = "";
};

const handleDeleteItem = (e) => {
  const currentEl = e.target.closest(".list__item");
  currentEl.remove();
};

render();
