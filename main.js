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

