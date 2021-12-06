/*

Задание 2
В HTML есть пустой список ul#ingredients.

<ul id="ingredients"></ul>
В JavaScript есть массив строк.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
Напиши скрипт, который для каждого элемента массива ingredients:

Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
Добавит название ингредиента как его текстовое содержимое.
Добавит элементу класс item.
После чего вставит все <li> за одну операцию в список ul.ingredients.

   <ul id="ingredients">
      <li class="item">Potatoes</li>
      <li class="item">Mushrooms</li>
      <li class="item">Garlic</li>
      <li class="item">Tomatos</li>
      <li class="item">Herbs</li>
      <li class="item">Condiments</li>
    </ul>

*/

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulElement = document.querySelector('ul');

const listIngredients = ingredients.map(name => {
    const li = document.createElement('li');
    li.classList.add('item');
    li.textContent = name;

    return li;
});

ulElement.append(...listIngredients);

console.log(ulElement);