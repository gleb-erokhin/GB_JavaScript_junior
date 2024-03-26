// Поиск в интернете (бесплатные api примеры)
// Найти любые данные, на произвольную тему
// Установить расширение в браузер “JSON viewer”
// Пример найденного json объекта

// 20:04
// https://jsonplaceholder.typicode.com/

// 20:05
// Создать файл data.js
// Создать переменную dataInfo
// Добавить несколько данных в dataInfo

// 20:07
// Создать файл index.html
// Подключить data.js
// Добавить блок <div class="content"></div>
// Создать переменную data и добавить в нее JSON parse данные из файла data.js
// Вывести в консоль объект data
// С помощью foreach обойти массив data
// Вывести все изображения из данных

const userData = JSON.parse(data);
console.log(userData);

const divContentEl = document.querySelector(".content");

userData.forEach((element) => {
  divContentEl.insertAdjacentHTML(
    "beforeend",
    `
    <div class = 'wrapper'>
        <h2>${element.name}</h2>
        <h3>${element.username}</h3>
        <p>${element.email}</p>
        <p>${element.address.city}</p>
        <a href="tel:+${element.phone}">${element.phone}</a>
    </div>
    `
  );
});
