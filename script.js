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