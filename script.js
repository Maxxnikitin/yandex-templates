const items = [
  { text: "Сделать проектную работу" },
  { text: "Полить цветы" },
  { text: "Пройти туториал по Реакту" },
  { text: "Сделать фронтенд для своего проекта" },
];

const container = document.querySelector(".list");
const template = document.querySelector(".template");

const render = () => {
  items.forEach((item) => {
    const currentItem = createItemNode(item.text);
    container.append(currentItem);
  });
};

const createItemNode = (text) => {
  const currentItem = template.content.cloneNode(true);
  const currentText = currentItem.querySelector(".item__text");
  currentText.textContent = text;

  return currentItem;
};

render();
