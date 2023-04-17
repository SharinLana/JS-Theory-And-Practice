/*

Дефис - тоже спецсимвол внутри [ ] (а вот снаружи - нет). 
Если вам нужен сам дефис как символ - 
то поставьте его там, где он не будет воспринят как разделитель группы.

Почему это важно: вы можете сделать группу символов, 
сами не заметив этого. 
К примеру, вот так - '[:-@]' - 
вы думаете, что выбираете двоеточие, дефис и собаку, 
а на самом деле получается группа символов между : и @. 
В эту группу входят следующие символы: : ; ? < = >

Откуда они взялись? 
Из таблицы ASCII - 
двоеточие имеет номер меньше, чем собака - и получается группа. 
То есть все группы получаются по таблице ASCII 
(при желании этим можно пользоваться).

Как с этим бороться: 
поставьте символ дефиса там, 
где он точно не будет воспринят как символ группы, 
например, в начале или в конце (то есть после [или перед ]).
Можно также заэкранировать дефис - 
тогда он будет обозначать сам себя независимо от позиции. 
Например, вместо [:-@] написать [:\-@] - 
и группы уже не будет, 
а будут три символа - двоеточие, дефис и собака @.

*/

// Task 1
// В следующем примере шаблон поиска такой: 
// цифра 1, затем буква от 'a' до 'z', затем цифра 2:
let str = '1a2 1-2 1c2 1z2';
let res = str.replace(/1[a-z]2/g, "!");
console.log(res); // ! 1-2 ! !

// Task 2
// Давайте теперь заэкранируем дефис. 
// В результате шаблон поиска такой: 
// цифра 1, затем буква 'a', или дефис, или буква 'z', 
// затем цифра 2:
let str2 = '1a2 1-2 1c2 1z2';
let res2 = str2.replace(/1[a\-z]2/g, "!");
console.log(res2); // ! ! 1c2 !

// Task 3
// Можно просто переставить дефис, не экранируя его:
let str3 = '1a2 1-2 1c2 1z2';
let res3 = str3.replace(/1[-az]2/g, "!");
console.log(res3); // ! ! 1c2 !


// Task 4
// В следующем примере шаблон поиска такой: 
// первый символ - это маленькие буквы или дефис '-', 
// потом две буквы 'x':
let str4 = 'axx Axx -xx @xx';
let res4 = str4.replace(/[a-z\-]xx/g, "!");
console.log(res4); // ! Axx ! @xx

// Task 5
// В следующем примере шаблон поиска такой: 
// первый символ - это маленькие, большие буквы или дефис '-', 
// потом две буквы 'x':
let str5 = 'axx Axx -xx @xx';
let res5 = str5.replace(/[a-zA-Z\-]xx/g, "!");
console.log(res5); // ! ! ! @xx

// Task 6
// Можно расположить дефис между двумя группами - 
// там он точно еще не сделает еще одну группу:
let str6 = 'axx 9xx -xx @xx';
let res6 = str6.replace(/[a-z-0-9]xx/g, "!");
console.log(res6); // ! ! ! @xx

// Task 7
// Дана строка
// Найдите все строки по следующему шаблону: 
// буква 'x', большая или маленькая буква или дефис, буква 'z'
let str7 = 'xaz xBz xcz x-z x@z';
let res7 = str7.replace(/x[a-zA-z\-]z/g, "!");
console.log(res7); // ! ! ! ! x@z

// Task 8
// Дана строка
// Найдите все строки по следующему шаблону: 
// буква 'x', затем или доллар, или дефис или плюс, 
// потом буква 'z'.
let str8 = 'xaz x$z x-z xcz x+z x%z x*z';
let res8 = str8.replace(/x[$+\-]z/g, '!');
console.log(res8); // xaz ! ! xcz ! x%z x*z
