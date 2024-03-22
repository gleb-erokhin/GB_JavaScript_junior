# Lesson 1 Introdaction

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
</details>

```javascript
```