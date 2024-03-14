"use strict";

// 1. Найти по id, используя getElementById, элемент с id равным "super_link" и вывести этот элемент в консоль.

// найдено по новому запросу
// const link = document.querySelector('#super_link');

// найдено по старому запросу
const link = document.getElementById('super_link');
console.log(link);

// 2. Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка".

const linkElement = document.querySelectorAll('.card-link');

// проходимся по массиву, и каждому елементу меняем текст ссылки
linkElement.forEach(element => {
    element.textContent = 'ссылка';
});

// 3. Найти все элементы на странице с классом "card-link", которые лежат в элементе с классом "card-body" и вывести полученную коллекцию в консоль.

const showCardBoby = document.querySelectorAll('.card-body > .card-link');
console.log(showCardBoby);

// 4. Найти первый попавшийся элемент на странице у которого есть атрибут data-number со значением 50 и вывести его в консоль.

// 5. Выведите содержимое тега title в консоль.

// 6. Получите элемент с классом "card-title" и выведите его родительский узел в консоль.

// 7. Создайте тегp, запишите внутри него текст "Привет" и добавьте созданный тег в начало элемента, который имеет класс "card".
// 8. Удалите тег h6 на странице.