"use strict";

// 1. Найти по id, используя getElementById, элемент с id равным "super_link" и вывести этот элемент в консоль.

// найдено по новому запросу
// const link = document.querySelector('#super_link');

console.log(`1. Поиск элементов по Id`);
// найдено по старому запросу
const link = document.getElementById('super_link');
console.log(link);

// 2. Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка".

console.log(`2. Меняем текст всех ссылок на странице`);
const linkElement = document.querySelectorAll('.card-link');

// проходимся по массиву, и каждому елементу меняем текст ссылки
linkElement.forEach(element => {
    element.textContent = 'ссылка';
});

// 3. Найти все элементы на странице с классом "card-link", которые лежат в элементе с классом "card-body" и вывести полученную коллекцию в консоль.

console.log(`3. Ищемм все вложенные элементы в класс card-body`);
const showCardBoby = document.querySelectorAll('.card-body > .card-link');
console.log(showCardBoby);

// 4. Найти первый попавшийся элемент на странице у которого есть атрибут data-number со значением 50 и вывести его в консоль.

console.log(`4. Выводим элемент с атрибутом data-number = "50"`);
const showAtribute = document.querySelector('[data-number = "50"]');
console.log(showAtribute);

// 5. Выведите содержимое тега title в консоль.

console.log(`5. Выводим запись в теге title`);
const showTitle = document.querySelector('title');
console.log(showTitle);

// 6. Получите элемент с классом "card-title" и выведите его родительский узел в консоль.
console.log(`6. Выводим родительский элемент`);

const childElement = document.querySelector('.card-title');
console.log(`находим элемент по классу`);
console.log(childElement);
console.log(`получаем родительский элемент`);
const parentElement = childElement.parentElement;
console.log(parentElement);
// 7. Создайте тегp, запишите внутри него текст "Привет" и добавьте созданный тег в начало элемента, который имеет класс "card".
// 8. Удалите тег h6 на странице.