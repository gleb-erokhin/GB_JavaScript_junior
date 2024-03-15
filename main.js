// Залание 1
// Дан блок, внутри него необходимо создать элемент div с классом item, разместить текст “Элемент внутри” и задать стили
// Цвет текста синий
// Рамка сплошная черная
// Цвет фона #f8f8f8
// Внутренний отступ 16px
// Добавить данному блоку класс item_1 (использовать setAttribute)

// const block = document.querySelector('.block');
// const newDiv = document.createElement('div');
// newDiv.setAttribute('class', 'item_1');
// // добавим атрибут новому блоку
// block.appendChild(newDiv);
// newDiv.textContent = 'Элемент внутри';

// newDiv.style.color = 'blue';
// newDiv.style.border = '1px solid black';
// newDiv.style.backgroundColor = '#f8f8f8';
// newDiv.style.padding = '16px';

// // задание 2
// // Дан код
// // Необходимо с помощью querySelector найти параграф с классом text
// const text = document.querySelector('.text');
// // Вывести в консоль соседний элемент h2
// console.log(text.previousElementSibling);
// // Вывести в консоль родительский элемент content
// console.log(text.parentElement);
// // Вывести в консоль картинку
// console.log(text.parentNode.previousElementSibling);
// // Вывести в консоль родительский элемент elem
// console.log(text.parentNode.parentNode);

// Задание 3
// С помощью querySelector найти элемент h2  и вывести в консоль всех его родителей
// const title = document.querySelector('h2');
// console.log(title.parentNode);
// console.log(title.parentNode.parentNode);
// console.log(title.parentNode.parentNode.parentNode);

// const h2Element = document.querySelector('h2.subtitle');

// let parent = h2Element.parentElement;
// while (parent) {
//     console.log(parent);
//     parent = parent.parentElement;
// }

