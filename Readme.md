# Семинар 1. Введение в DOM (Document Object Model)
## На уроке использованы следующие команды:

```javascript 
// найти первый p
const p1El = document.querySelector('p');
// найти все классы .www
const p2El = document.querySelectorAll('.www');
```
```javascript
// установить текст для ссылки
a.textContent = 'link text js';
// заменить адрес ссылки 
a.href = 'https://developer.mozilla.org/ru/';
```
```javascript
// добавляем текст в div с классом content
content.appendChild(p4El);
// удаляем узел напрямую p
p4El.remove();
// удаляем p через родителя
content.removeChild(p4El);
```
```javascript
// действия по нажатию со счетчиком нажатий
btn.onclick = function() {
    count++;
    console.log(`нажата кнопка ${count} раз`);
}
```
```javascript
// метод листенер
btn.addEventListener('click', () => {
    btn.textContent = 'текст отправлен';
});
```