/*
Задание 10 (выполнять не обязательно)
Напиши скрипт создания и очистки коллекции элементов. 
Пользователь вводит количество элементов в input и 
нажимает кнопку Создать, после чего рендерится коллекция. 
При нажатии на кнопку Очистить, коллекция элементов 
очищается.

<div id="controls">
  <input type="number" min="1" max="100" step="1" />
  <button type="button" data-create>Create</button>
  <button type="button" data-destroy>Destroy</button>
</div>

<div id="boxes"></div>
Создай функцию createBoxes(amount), которая принимает один 
параметр - число. Функция создает столько <div>, сколько 
указано в amount и добавляет их в div#boxes.

Размеры самого первого <div> - 30px на 30px.
Каждый элемент после первого, должен быть шире и выше 
предыдущего на 10px.
Все элементы должены иметь случайный цвет фона в форма
те HEX. Используй готовую функцию getRandomHexColor для 
получения цвета.
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.
*/

const refs = {
  create: document.querySelector('[data-create]'),
  destroy: document.querySelector('[data-destroy]'),
  inputCount: document.querySelector('#controls input'),
  controls: document.getElementById('controls'),
};

const divBox = document.createElement('div');
controls.append(divBox);

refs.create.addEventListener('click', getInputAmount);
refs.destroy.addEventListener('click', destroyBoxes);

function getInputAmount() {
  let amount = refs.inputCount.value;
  createBoxes(amount);
}

function createBoxes(amount) {
  let defaultSize = 30;
  let fragment = document.createDocumentFragment();

  for (let i = 0; i < amount; i++) {
    let size = defaultSize * i + 10;
    let divBlock = document.createElement('div');
    divBlock.style.cssText = `width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()}`;
    fragment.appendChild(divBlock);
  }
  divBox.appendChild(fragment);
}

function destroyBoxes() {
  divBox.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
