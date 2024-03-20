// Задание 1
// В html создать кнопку button
// После загрузки страницы вывести в консоль текст “страница загрузилась”
// Добавить событие onclick которое выводит в консоль текст “событие onclick”
// Добавить событие addEventListener которое выводит в консоль текст “событие addEventListener”

const btn1 = document.querySelector('.btn1');
// обращаемся к глобальной переменной ОКНО
window.onload = () => {
    console.log("страница загрузилась");
}

btn1.onclick = () => {
    console.log("событие oncklick");
}

btn1.addEventListener('click', () => {
    console.log('событие addEventListener');
})

// задание 2

// Создать в html три кнопки button с нумерацией (1, 2, 3 соответственно)
// объявляем переменную body, работаем со всей страницей
const body = document.querySelector('body');
for (let i = 1; i < 6; i++) {
    // с помощью цикла вставляем в body HTML код (первое - куда вставляем, перед закрывающим тегом body, второе
    // второе пишем кнопку которую создаем через функциональное выражение со значением i)
    body.insertAdjacentHTML('beforeend', `<button>${i}</button>`);
}    
// Добавить клик на кнопку , чтобы в консоль выводилась именно та кнопка на которую мы нажали
// слушаем событие клика с помощью event снутри тега body
body.addEventListener('click', (e) => {
    // условие что мы нажали на кнопку, что цель (target) это именно кнопка
    if (e.target.nodeName === 'BUTTON') {
        // по event можем наодить нужные нам любые элементы
        console.log(`нажали на кнопку ${e.target.textContent}`);
    }
})

// Добавить кнопку button с текстом 4, которая считает сколько раз на нее нажали и количество нажатий на эту кнопку выводит в консоль
const btns = document.querySelectorAll('button');
// вводим счетчик для подсчета переменных
let count = 0;
// обращаемся к 4 кнопке
btns[4].addEventListener("click", () => {
    count++;
    console.log(`на кнопку 4 нажали ${count}`);
})

// Создать кнопку button с текстом 5, При клике на которую, меняется текст данной кнопки на “Вы нажали на эту кнопку”
btns[5].addEventListener('click', () => {
    btns[5].textContent = 'Вы нажали на эту кнопку';
})

