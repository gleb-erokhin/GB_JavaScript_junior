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

// задание 3
// Создать кнопку, которая добавляем заголовок h1 с текстом, “Новый заголовок, данный элемент нужно расположить после кнопки
// создаем кнопку
const button = document.createElement('button');
// добавляем в нее текст
button.textContent = "push ME";
// вставляем кнопку в body перед закрывающим тегом
body.insertAdjacentElement('beforeend', button);
// обратимся к кнопке
button.addEventListener('click', () => {
    // Вставляем после кнопки тег h1
    body.insertAdjacentHTML('beforeend', `<h1>Новый заголовок</h1>`);
})

// Создать вторую кнопку, которая будет удалять созданный заголовок h1
const btnRem = document.createElement('button');
btnRem.textContent = "remove h1";
body.insertAdjacentElement('beforeend', btnRem);
btnRem.addEventListener('click', () => {
    document.querySelector('h1').remove();
})

// Создать третью кнопку, при наведении на которую в консоль будет выводиться текст “вы навели на данную кнопку” , как только вы убираем курсор мыши с кнопки, в консоли должен появиться текст “Наведения на кнопку больше нет”
const btnHower = document.createElement('button');
btnHower.textContent = 'hower on Me';
body.insertAdjacentElement('beforeend', btnHower);
btnHower.addEventListener('mouseover', () => {
    console.log('you hower on this button');
})
btnHower.addEventListener('mouseout', () => {
    console.log('there is no hower on this button');
});

// задание 4
// Создать в html список состоящий из 3-х произвольных элементов li
// Нужно создать кнопку которая будет добавлять элементы списка с текстом “новый элемент списка”

// находим список UL по классу
const listUl = document.querySelector('.items');
// создаем элемент кнопка
const btnAdd = document.createElement('button');
// назначаем текст кнопке
btnAdd.textContent = 'add new list';
// через body вставляем 
body.insertAdjacentElement('beforeend', btnAdd);
// назначаем кнопке действие по клику, добавлять элемент списка перед закрывающем тегом
btnAdd.addEventListener('click', () => {
    listUl.insertAdjacentHTML('beforeend', `<li>новый элемент списка</li>`);
})

// Создать кнопку, которая будет удалять первый элемент из созданного списка
const btnRemList = document.createElement('button');
btnRemList.textContent = 'remove first List';
body.insertAdjacentElement('beforeend', btnRemList);
btnRemList.addEventListener('click', () => {
    listUl.firstChild.remove();
})
// Создать кнопку, при клике на которую ей добавляется класс “click”
