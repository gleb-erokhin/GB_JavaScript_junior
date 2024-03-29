// 'use strict';

// Задание 1
// В html создать элемент checkbox и текст рядом с ним “Согласен с условиями”
// Добавить кнопку отправить
// При клике на кнопку отправить нужно проверять выбран ли активным элемент checkbox
// Если элемент не выбран, добавить текст под чекбоксом “Необходимо согласиться с условиями”

const input = document.querySelector('input');
const form = document.querySelector('form');
const btn = document.querySelector('button');
let error = false;

btn.addEventListener("click", (e) => {
    // для того чтобы при нажатии на кнопку ничего не отправлялось и страница не перегружалась
    e.preventDefault();
    if (!input.checked && !error) {
        const p = document.createElement("p");
        p.textContent = "Необходимо согласиться с условиями";
        p.classList.add('error');
        btn.insertAdjacentElement("afterend", p);
        error = true;
    } else if (input.checked) {
        form.submit();
    }
})