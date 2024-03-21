# Семинар 4. Работа с событиями

## Теоррия
```javascript
// ищем поле checkbox с классом 
const inputEl = document.querySelector('.check');
// добавляем событие по кнопке
inputEl.addEventListener('click', function (e) => {
    // ловим элемент 
    const target = e.target;
    // выводим информацию в консоль
    console.log('target');
    // value покажет состояние при нажатии
    console.log('target.value');
    // ловим информацию пойман элемент или нет
    console.log('target.checked');
});
```

```javascript
// событие для формы, используя кнопку отправки обработка 'событий' 
form.addEventListener('submit', function (e) => {
    // проверяем отправлена ли форма
    if (input.checked) {
        console.log('GOOD');
    } else {
        console.log('you must accept copy');
        // останавливаем событие
        e.preventDefault();
    }
});
```

```javascript
генерация событий
// можно привязываться к кнопке, в примере привязываемся к событию поля
// Чтобы сгенерированное событие всплывало и было отменяемым, надо
// передать true в опции поля bubbles и cancelable.
const eventOpt = {bubles: true, cancelable: true }
const event = new Event('click', eventOptions)
event.view = window
// используем все окно для наблюдения
const mouseEvent = new MouseEvent('click', {
    ...eventOpt,
    view: window;
    })

document.addEventListener('click', (e) => {
    // Отличить сгенерированное событие от собственного можно по полю
    // isTrusted в обработчике события.
    console.log(e.isTrusted);
});

// следим за всем полем экрана
const button = document.querySelector('button');
// собираем текущие события
button.dispatchEvent(e);
button.dispatchEvent(mouseEvent);
button.click()
```
### Render tree
> ***Дерево рендера***, или модель визуализации, — это специальная структура, состоящая из элементов, которые отобразятся на странице, и связанных с ними стилей. 

Такое дерево собирается из двух независимых структур данных (моделей).

> DOM — объектная модель всех элементов страницы. Собирается на основе HTML-разметки страницы.

> CSSOM — объектная модель таблицы стилей страницы. Собирается на основе CSS-разметки страницы.

***Важно!*** Модель визуализации, состоящая из DOM и CSSOM, содержит
только видимые элементы и не включает скрытых.

```javascript 
const formEl = document.querySelector('.form');
const selectEl = formEl.querySelector('.select');
const buttonEl = formEl.querySelector('button');

document.addEventListener('click', function (e) {
    // выводим в консоль содержание переменной после выбора
    console.log(selectEl.value);
    // останавливаем выполнение
    e.preventDefault();
    // добавим сравнения со значением, 
    if (select.value === 'city') {
        // при выборе добавить значение класса
        selectEl.classList.add('select__error');
    } else {
        // удаляем если не выбран
        selectEl.classList.remove('select__error');
        return;
    }
});
```

## На уроке использованы следующие команды:

```javascript 

```
```javascript

```
```javascript

```
```javascript

```
```javascript

```
