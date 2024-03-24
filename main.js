// 1. Необходимо вывести сообщение в консоль "все теги прогрузились", когда все теги будут созданы браузером.

document.addEventListener("DOMContentLoaded", () => {
  console.log("все теги прогрузились");
});

// 2. Необходимо вывести сообщение в консоль "страница загрузилась", когда все ресурсы страницы будут загружены.

window.onload = () => {
    console.log('страница загрузилась');
}
// 3. При клике на какой - либо тег на странице в консоль должно выводиться сообщение наподобие:
// - Класс "super_element" присутствует в элементе "div".
// - сообщение должно определять присутствует или отсутствует класс "super_element"
//     - у элемента, а также выводить в нижнем регистре верный тег в данной строке, по
//         - которому был совершен клик.
// - Необходимо использовать делегирование.

const superEl = document.querySelectorAll('.super_element');
for (let i = 0; i < superEl.length; i++) {
    if (superEl[i].classList === 'super_element') {
        const element = superEl[i];
        console.log(element);

    }
}

// superEl.addEventListener('click', function (event) {
//     if (event.target.querySelector('.super_element')) {
//         console.log('Класс "super_element" присутствует в элементе "div"');
//     }
// });

// 4. Сделайте, чтобы при наведении на textarea в консоли появлялось сообщение: "Вы навели на textarea."

const textArea = document.querySelector('textarea');
textArea.addEventListener('mousemove', () => {
    console.log('Вы навели на textarea.');
})

// 5. Необходимо повесить событие клика на тег ul.В обработчике события в консоль необходимо выводить текст, который записан внутри элемента кнопки, по которой был произведен клик.Если клик был не по кнопке, то ничего выводить не нужно.Необходимо использовать делегирование.

const ulclickEl = document.querySelector('ul');
ulclickEl.addEventListener('click', function (event) {
    if (event.target.tagName === 'BUTTON') {
        console.log(event.target.textContent);
    }
});

// 6. Вопрос: Почему в console.log пишется сначала текст из 5 задания и только потом выводится текст из 3 задания, если мы кликаем по кнопкам в ul ? Ответ необходимо написать здесь же, под этим комментарием, своими словами.

// 7. С помощью JS необходимо изменить цвет заднего фона каждого второго тега li.

const liCollor = document.querySelectorAll('li');
for (let i = 1; i < liCollor.length; i = i + 2) {
    console.log(liCollor[i]);
    liCollor[i].style.background = "red"; 
}
