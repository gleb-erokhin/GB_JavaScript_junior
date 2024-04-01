// 'use strict';

// Задание 1
// В html создать элемент checkbox и текст рядом с ним “Согласен с условиями”
// Добавить кнопку отправить
// При клике на кнопку отправить нужно проверять выбран ли активным элемент checkbox
// Если элемент не выбран, добавить текст под чекбоксом “Необходимо согласиться с условиями”

// создаем переменные с нужными классами
// const input = document.querySelector('input');
// const form = document.querySelector('form');
// const btn = document.querySelector('button');
// let error = false;

// добавлям обработчик события КЛИК для кнопки
// btn.addEventListener("click", (e) => {
//     // для того чтобы при нажатии на кнопку ничего не отправлялось и страница не перегружалась (форма не отправляется)
//     e.preventDefault();
//     // нуно проверять состояние ЧЕКБОСа, если он не нажат, обращаемся к INPUT к атрибуту checked, и не ERROR тогда
//     if (!input.checked && !error) {
//         // создаем константу для текста условий
//         const p = document.createElement("p");
//         p.textContent = "Необходимо согласиться с условиями";
//         // добавим класс ошибки к сообщению (можно стилизовать по классу)
//         p.classList.add('error');
//         // сообщение отобразится ПОСЛЕ кнопки отправить
//         btn.insertAdjacentElement("afterend", p);
//         // параметр true не дает возможность повторять ошибку согласия с условиями
//         error = true;
//     // если галочка выбрана, то отправить форму через метод submit()
//     } else if (input.checked) {
//         form.submit();
//     }
// })

// Задание2
// В html создать 2 элемента радио кнопки (input type=”radio”) и текст “Чай”, “Кофе” соответственно
// Кнопка отправить
// Если выбран чай, необходимо вывести сообщение “Чай закончился”
// Если выбран кофе, необходимо вывести соообщение “кофе закончился”

// const radio = document.querySelectorAll('input');
// const btn = document.querySelector('button');
// const p = document.querySelector('p');

// btn.addEventListener('click', (e) => {
//     e.preventDefault();
//     radio.forEach((item) => {
//         // проверяем нажата ли кнопка и чтобы был нужный ID
//         if(item.checked && item.id === "tea") {
//             p.textContent = 'Чай закончился';
//         } else if(item.checked && item.id === "coffe") {
//             p.textContent = 'кофе закончился';
//         }
//     })
// })

// задание 3
// Создать поле ввода (пароль)
// Кнопка отправить
// Если пользователь вводит текст “пароль” то поле ввода должно быть подсвечено зеленым цветом
// Если пароль неверный, у поля ввода появляется красная обводка и текст “пароль неверный”

// const password = document.querySelector("input");
// const btn = document.querySelector("button");

// btn.addEventListener("click", (e) => {
//     e.preventDefault();
//     if(password.value === 'пароль') {
//        password.style.border = '3px solid green'; 
//     } else {
//        password.style.border = '3px solid red';
//        password.value = '';
//        password.placeholder = 'пароль не верный';
//     }
// });

// задача 4
// Создать поле ввода и под ним заголовок h1 с текстом “Заголовок”
// При вводе текста в поле ввода необходимо чтобы текст внутри заголовка менятся на введенный в поле ввода

const input = document.querySelector('input');
const h1 = document.querySelector('h1');

input.addEventListener(() => {
    input.textContent = input.value;
})