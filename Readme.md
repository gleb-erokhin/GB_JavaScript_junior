# Short JS library for Junior
> Javascript - язык программирования со слабой типизацией

> Преоброзования типов JS делает автоматически если может. Это хорошо так как ненадо явно самому преобразовывать типы, но так же и плохо так как такое преоброзование может происходить без нашего участия.

> Литералом - является значение написанное непоследственно в тексте программы

<details close>
<summary>Типы данных JS</summary>

## Numbers
***Объявление переменных***
```javascript
const a = 5;
const b = 3.14;
const c = 16;
const res = 0;
```
***умножение***
```javascript
'Привет' * c => NaN;
любые арифметические действия с NaN дает только NaN
```
***деление***
```javascript
10 / 0 => Infinity;
a / b => 1.592356687898089;
```
***сложение / вычитание***
```javascript
a + c => 21;
res = a + b
res => 8.14
c - a => 11;
```
***Преобразование типов***
```javascript
const str = "66.25";
const str2 = "  66.2ррр5  ";
const str3 = "  66 .25  ";

преобразует в число если это возможно, недолжно быть пробелов или строк,
игнорирует отступы слева и справа, учитывают + и -
console.log(+str) => 66.25;
console.log(+str3) => NaN;
console.log(Number(str)) => 66.25;

Преобразует только то что может быть числом, на пробеле строке или точке остановится
console.log(Number.parseInt(str)) => 66;
console.log(Number.parseInt(str3)) => 66;
Преобразует только то что может быть числом, до строки
console.log(Number.parseFloat(str2)) => 66.2;

Функции конструкторы
String(true) => 'true';
String(356) => '356';
String(null) => 'null';
Number('4') => 4;
Number(true) => 1;
Number(true) => 0;
Boolean('') => false;
Boolean('любой текст') => true;
```
***неявное приведение типов***
JS язык с не строгой типизацией
```javascript
console.log(10 + 'hello') => '10hello';
console.log(10 + '6') => '106';
console.log('40' / '6') => 6.666666666666667;
если складываем или умножаем число в строке, то оно неявно преобразуется в число и производится операция.
```

***Округление***
```javascript
Math.round(-4.23) => 4;
Math.round(-4.63) => 5;

Math.floor(-4.23) => -5; - округление вниз
Math.ceil(4.004) => 5; - округление вверх
Math.trunc(-4.23) => -4; - отбрасывает дробную часть

в скобках указываем до скольки знаков после запятой округлить
получаем СТРОКУ
const num = 85.5555523232
num.toFixed(3) => '85.555';
```

## BigInt
***для вычисления большщих числе 2^53 степени***
```javascript
хранит только целые значения
556564846168461641861681616521351384461618n;
смешивать можно только с таким же числом, либо сделать преоброзование в Number
```
```javascript
34343435453445314352144534n + BigInt(65656);
Number(34343435453445314352144534n) + 65656;
5n / 2n = > 2n; - дробная часть отметается
```

## Boolean
```javascript
const a =  true;
const b = false;
```

## Null
это означает ***ничто***.
```javascript
let d = Null; - создаем переменную, а положить туда не знаем что, можно положить Null
d = 9;
```

## Undefind
она не присвается ни какой переменной
```javascript
let e; => Undefind
```
</details>

<details close>
<summary>Свойства JS</summary>

## typeof
> позволяет определить тип параметра (число, строка, объект). Оператор возвращает строку, содержащую тип ( 'number' , 'string' , 'object').

```javascript
const f = '5';
console.log(typeof f) => str;

!ошибка typeof
const j = null;
console.log(typeof j) => object;
это не так, должно быть таписано Null, это ошибка при разработке, оставили для обратной совместимости старых проектов.

const k = function () {};
console.log(typeof k) => function;
это тоже ошибка, нет такого типа данных, должно быть object
```
</details>

<details close>
<summary>Операторы JS</summary>

## Арифметические действия
```javascript
console.log(6 + 4) => 10;
console.log(6 - 4) => 2;
console.log(6 * 4) => 24;
console.log(6 / 4) => 10;
console.log(6 ** 4) => 10; - возведения в степень
console.log(6 % 4) => 2; - остаток от деления, сколько раз 4 посеститься в 6, остаток это и есть ответ 
```
## Присваивание
```javascript
const m = 1;
m += 2 ===> m = m + 2; 
console.log(m) => 3;
m++ - пост инкремент
++m - пред инкремент
```

## Копирование переменной
переменные в таком случае будут храниться в разных ячейках памяти, они разные
```javascript
const sum = 3 + 2;
const sum2 = sum; 
console.log(sum2) => 5;
```

## Конкатенация
```javascript
console.log('m' + 'f') => 'mf';
console.log('1' + '1') => '11';
console.log('1' + 1) => '11';
console.log(1 + 1) => 2;
```

## Сравнения
```javascript
console.log(5 > 4) => true;
console.log(5 >= 5) => true;
console.log(5 < 5) => false;
console.log(5 == '5') => true; - JS сам превратит строку в число и сравнит
console.log(5 === '5') => false; - JS смотрит на тип данных и не преобразовывает их
console.log(5 != '5') => false;
console.log(5 !== '5') => true;
```

## Приоритет операции 
```javascript
console.log(6 + 5 * 2) => 16;
console.log((6 + 5) * 2) => 13;
кроме приоритетов операции, существует еще ассациотивность, кто чи то бертся первым для вычисления
```
</details>

<details close>
<summary>Ввод вывод данных JS</summary>

## Ввод и вывод данных
```javascript
const name = prompt('enter the Name: ');
alert(name); - всплывающее сообщение браузера, ничего не возвращает: => undefind
console.log(name); - строка будет выведена в консоли браузера, возвращает результат, строка. Если ничего не ввели, будет пустая строка. Если нажали отмену то возвращается null
```

## Строгий режим 
```javascript
Переменная создана без ключевого слова (let, const), тем самым так как она находится в глобальном объекте window, переменная будет доступна из любой части программы. Тем самым в нее могут быть заложены ошибки которые отловить сложно.

a = 'hello';
alert(a) => 'hello';

для решения этого вопроса используют строгий режим, он не позволит создать переменную без ключевого слова. Будет находится на уровне скрипта, так же достпуна почти отвосюду.

"<use strict>";
a = 'hello' => ERROR! a is not defined;
alert(a);
```
</details>


<details close>
<summary>Ветвления JS</summary>

## Полная форма ветвления if / else
```javascript
const data = 100;
// если в скобках TRUE то заходим в цикл if, в противном случае заходим в else
if (data > 0) {
    console.log(`Товаров в корзине: ${data}`)
} else {
    console.log(`Корзина пуста.`)
}
```

```javascript
const product = 'Яблоки';

if (product === 'Бананы') {
    console.log('Цена на бананы 50 руб.')
} else if (product === 'Манго') {
    console.log('Цена на манго 80 руб')
} else if (product === 'Яблоки') {
    console.log('Цена на Яблоки 40 руб')
} else {
    console.log('неизвестный фрукт')
}
// else необязательный
```
## Switch / case
```javascript
switch (product) {
    case 'Бананы': 
      console.log('Цена на бананы 50 руб.');
      break;
    case 'Манго': 
      console.log('Цена на манго 80 руб');
      break;
    case 'Яблоки':  
    case 'Груши': 
      console.log('Цена на Яблоки 40 руб');
      break;
    default: 
      console.log('неизвестный фрукт');
}
```
## Тернарный оператор
```javascript
// условие ? если верно (true) : если ложь (false)
data > 0
  ? console.log(`Товаров в корзине: ${data}`)
  : console.log(`Корзина пуста.`)
// Тернарный оператор ВОЗВРАЩАЕТ значения
```

## Логические операторы && и || 
```javascript
&& - оператор Логическое 'И'
// прерывается на первом ЛОЖНОМ значении
if (a > b && c === 10) {} => зайдем в if только если TRUE будет и слева и справа.

|| - оператор Логическое 'ИЛИ'
// прерывается на первом ПРАВДИВОМ значении, если ве значения были ложные возвращается последнее значение
if (a > b || c === 10) {} => зайдем в if достаточно если TRUE будет или слева или справа.
```

</details>

<details close>
<summary>Функции в JS</summary>

> Названия функций выбирают осмысленно, из названия должно быть понятно что функция делает: getPrise, showData, createData

```javascript
fn();

Объявление функции:
function fn() {
  // function declaration, стандартное обЪявление
  // ; в конце после } не требуется
}

fn();
// вызывать функцию можно и до нее и после, она будет работать, так как JS создает ее зарание.
```

```javascript
// имя функции перед () отсутствует, так как ее имя записано в перемменной fn2
const fn2 = function () {
  // functon expression - функциональное выражение, это значит мы кладем функцию в переменную
  // требует установки ; после }
};

fn2();
// можно вызвать только после создания функции, так как мы обращаемся к переменной fn2
```
 ## Параметр по умолчанию
```javascript
// a = 100 указывается как значение по умоланию, если ничего не передать в функцию, то фунция выдаст 100
function fn(a = 100) {
  console.log(a)
}
```

## Примеры функций
> Функциями являются так же:
<br> alert();
<br> console.log();
<br> prompt();

> В функции работает принцип ***SOLID***, где
<br> ***S*** - прицип единой ответственности, функция должна выполнять только одну задачу.

```javascript
пример функции, ничего не возвращает:
function sayPrice() {
  console.log('Цена на бананы 50 руб.');
}
вызов функции:
sayPrice();
```
```javascript
пример функции, возвращает результат работы:
function getPrice() {
  const resut = 25 + 25;
  return result
  // return возвращает значение и завершает функцию
  // return так же может ничего не вернуть, а просто завершить работу функции
}
вызов функции:
const price = getPrice();
  console.log(`Цена ${price}`);
```
```javascript
пример функции, использзование АРГУМЕНТА функции:
const priceProduct = 25;
// при создании функции мы указываем параметр функции который
// она принимает и обрабатывает внутри себя
// параметр функции в ( ) создается локальная переменная price 
// локальная переменная существует пока работает функция
function getPrice(price) {
  const resut = price + 25;
  return result
}
вызов функции:
// аргумент функции не связан с переменными вне ее, может иметь любое имя
// аргумент функции передается в нее при вызове 
const price = getPrice(priceProduct);
  console.log(`Цена ${price}`);
```
</details>

<details close>
<summary> </summary>


</details>
