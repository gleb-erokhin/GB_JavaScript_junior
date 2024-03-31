// 'use strict';

// Задание 1
// В html создать элемент checkbox и текст рядом с ним “Согласен с условиями”
// Добавить кнопку отправить
// При клике на кнопку отправить нужно проверять выбран ли активным элемент checkbox
// Если элемент не выбран, добавить текст под чекбоксом “Необходимо согласиться с условиями”

// создаем переменные с нужными классами
const input = document.querySelector('input');
const form = document.querySelector('form');
const btn = document.querySelector('button');
let error = false;

// добавлям обработчик события КЛИК для кнопки
btn.addEventListener("click", (e) => {
    // для того чтобы при нажатии на кнопку ничего не отправлялось и страница не перегружалась (форма не отправляется)
    e.preventDefault();
    // нуно проверять состояние ЧЕКБОСа, если он не нажат, обращаемся к INPUT к атрибуту checked, и не ERROR тогда
    if (!input.checked && !error) {
        // создаем константу для текста условий
        const p = document.createElement("p");
        p.textContent = "Необходимо согласиться с условиями";
        // добавим класс ошибки к сообщению (можно стилизовать по классу)
        p.classList.add('error');
        // сообщение отобразится ПОСЛЕ кнопки отправить
        btn.insertAdjacentElement("afterend", p);
        // параметр true не дает возможность повторять ошибку согласия с условиями
        error = true;
    // если галочка выбрана, то отправить форму через метод submit()
    } else if (input.checked) {
        form.submit();
    }
})