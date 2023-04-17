/*
Регулярные выражения по умолчанию жадные. 
Это значит, что они захватывают максимальное возможное количество символов
*/

//Давайте разберем на примере. 
// Пусть у нас есть вот такая строка:
let str = 'aeeex zzz x kkk';

// Пусть мы в этой строке хотим найти подстроку 'aeeex' по следующему шаблону: 
// буква 'a', затем любой символ один или более раз, затем буква 'x'.
let res = str.replace(/a.+x/g, '!');

// Мы ожидаем, что в переменную res в результате 
// запишется строка '! zzz x kkk'. 
// Однако, это не так - в переменную попадает строка '! kkk'.

// Все дело в том, что наша регулярка 
// ищет все символы от буквы 'a' до буквы 'x'. 
// Но в нашей строке две буквы 'x'! 
// Из-за жадности получается, 
// что регулярка ищет до самого последнего икса, 
// тем самым захватывая не то, что мы ожидали.

// Чтобы ограничить жадность, 
// нужно после оператора повторения поставить знак вопроса:
let res2 = str.replace(/a.+?x/g, '!');

// Жадность можно ограничивать всем операторам повторения: 
// и *, и ?, и {} - вот так: *?, ?? и {}?.



// Task
// Дана строка
// Напишите регулярку, которая найдет все строки 
// по краям которых стоят буквы 'a', 
// и заменит каждую из них на '!'. 
// Между буквами "a" может быть любой символ (кроме 'a').
let str3 = 'aba accca azzza wwwwa';
let res3 = str3.replace(/a.+?a/g, '!');
console.log(res3); // ! ! ! wwwwa