/*
У символов каретки ^ и доллара $ есть специальные значения в регулярных выражениях. 
Они называются «якоря» (anchors).
Каретка ^ означает совпадение с началом текста, 
а доллар $ – с концом.
Якоря ^ и $ – это проверки. У них нулевая ширина.
Другими словами, они не добавляют к результату поиска символы, 
а только заставляют движок регулярных выражений проверять условие 
(начало/конец текста).

Поведение якорей меняется, если присутствует флаг m. 

В конкретно этих случаях мы могли бы использовать и методы строк startsWith/endsWith. 
Регулярные выражения следует применять, когда нужна проверка сложнее.
*/
let str = "Mary had a little lamb";
console.log( /^Mary/.test(str) ); // true (Шаблон ^Mary означает: «начало строки, затем Mary».)

let str1 = "the fleece was white as snow";
alert( /snow$/.test(str1) ); // true


/*
Проверка на полное совпадение

Оба якоря вместе ^...$ часто используются для проверки, 
совпадает ли строка с шаблоном полностью. 
Например, чтобы определить, в правильном ли формате пользователь ввёл данные.
*/

let goodInput = "12:34";
let badInput = "12:345";

let regexp = /^\d\d:\d\d$/; // Здесь совпадение с \d\d:\d\d ищется не где-то посередине текста, а сразу после начала строки ^, и после него должен быть сразу конец строки $.
alert( regexp.test(goodInput) ); // true
alert( regexp.test(badInput) ); // false