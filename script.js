// <!-- Получите ссылку на первый абзац из дива с id, равным block, выведите его в консоль
// Получите ссылку на первый абзац с классом www. и вывести его в консоль -->


// const pEl = document.querySelector('p');
// console.log(pEl);

// const p2El = document.querySelectorAll('.www');
// console.log(p2El);

// // обращение к массиву
// const p3El = document.querySelectorAll('.www')[0];
// console.log(p3El);


// Задание 2
// Дан тег <a class="link" href="#">link text html</a>
// Вам необходимо поменять текст внутри ссылки на “link text js”
// Заменить href, на значение https://developer.mozilla.org/ru/ 
// Дан тег <img class="photo" src="" alt=""> 
// Вам необходимо с помощью js поменять значение src на любое изображение из интернета

// const a = document.querySelector('.link');
// меняем описание ссылки
// a.textContent = 'link text js';

// заменить атрибут ссылки 
// a.href = 'https://developer.mozilla.org/ru/';

// работа с изображением
// const img = document.querySelector('.photo');
// img.src = './photo.jpg';


// задание 3
// Дан тег <div class="content"></div> 
// Создайте новый элемент p
// Добавьте в него текст “Новый текстовый элемент”
// Добавьте созданный элемент внутри <div class="content"></div>
// Удалите добавленный узел

// создаем элемент
// const p4El = document.createElement('p');
// p4El.textContent = 'Новый текстовый элемент';

// найдем целевой элемент куда надо всвить текст
// const content = document.querySelector('.content');
// добавляем текст в div с классом content
// content.appendChild(p4El);

// удаляем узел напрямую p
// p4El.remove();

// удаляем p через родителя
// content.removeChild(p4El);

// задание 4
// Создать элемент button, добавить в блок <div class="content"></div>
// При клике на который в консоль выводится сколько раз пользователь нажал на данную кнопку

// const content = document.querySelector('.contents');
// const btn = document.createElement('button');

// // текст кнопки
// btn.textContent = 'счетчик';
// content.appendChild(btn);

// let count = 0;

// // действия по нажатию
// btn.onclick = function() {
//     count++;
//     console.log(`нажата кнопка ${count} раз`);
// }
