"use strict";

// 1. Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс "super-dropdown", необходимо использовать методы forEach и querySelectorAll и свойство classList у элементов.

const dropItem = document.querySelectorAll('.dropdown-item');
dropItem.forEach(element => {
    element.classList.add('super-dropdown');
});

// 2. У элемента с классом btn необходимо убрать класс "btn-secondary", если он присутствует у этого элемента, либо добавить, если такого класса у элемента не было.

// ищем все кнопки получаем, NodeList
const button = document.querySelectorAll('button');
// конвертируем в массив
const buttonArray = [...button];
// проходимся по нему циклом
buttonArray.forEach(button => {
    if (button.classList.contains('btn-secondary')) {
        button.classList.remove('btn-secondary');
    } else {
        button.classList.add('btn-secondary');
    }
})

// 3. Необходимо удалить класс "dropdown-menu" у элемента, у которого присутствует класс "menu".
const menuFind = document.querySelector('.menu')
menuFind.classList.remove('dropdown-menu');

// 4. Используя метод insertAdjacentHTML добавьте после div'a с классом "dropdown" следующую разметку:
//     `<a href="#">link</a>`

// 5. У элемента с id "dropdownMenuButton" замените id на "superDropdown".

// 6. Добавьте атрибут data - dd со значением 3 элементу у которого существует атрибут "aria-labelledby" равный "dropdownMenuButton" используя dataset.

// 7. Удалите атрибут type у элемента с классом "dropdown-toggle".