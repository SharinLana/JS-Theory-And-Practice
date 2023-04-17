/*
Группы символов \d и \w не очень гибкие. 
Даже такая простая задача, как найти все буквы, но не цифры - 
не может быть решена ими.

 Для таких задач следует использовать квадратные скобки, 
 представляющие собой операцию 'или'.

Квадратные скобки заменяют собой один символ, 
любой из перечисленных внутри. 

К примеру, вот так: /x[abc]x/ - мы говорим, 
что по краям должны стоять буквы 'x', а внутри - 
один символ: или 'a', или 'b', или 'c'.

После квадратных скобок можно писать quantifiers. 
К примеру, вот так: /x[abc]+x/ - мы говорим, 
что внутри иксов может быть любое количество символов 'a', 'b' и 'c' - 
в любых комбинациях.

Можно не только перечислять символы, 
но создавать группы символов, 
записывая между двумя символами дефис. 
К примеру, вот так: [a-d] - мы получаем все символы от 'a' до 'd'.

С помощью шляпки ^ в начале квадратных скобок 
можно инвертировать желаемое. 
То есть, если, к примеру, команда [ab] ищет букву 'a' или 'b', 
то команда [^ab] будет искать все символы, кроме 'a' и 'b'.
*/

// Task 1
// В данном примере шаблон поиска выглядит так: 
// между иксами - любая буква от 'a' до 'z'
let str = 'xax xbx xcx x@x';
let res = str.replace(/x[a-z]x/g, '!');
console.log(res); // ! ! ! x@x


// Task 2
// В данном примере шаблон поиска выглядит так: 
// между иксами - любая буква от 'a' до 'k':
let str2 = 'xax xbx xmx x@x';
let res2 = str2.replace(/x[a-k]x/g, '!');
console.log(res2); // ! ! xmx x@x


// Task 3
// В данном примере шаблон поиска выглядит так: 
// между иксами любая буква от 'A' до 'Z':
let str3 = 'xax xBx xcx x@x';
let res3 = str3.replace(/x[A-Z]x/g, '!');
console.log(res3); // xax ! xcx x@x


// Task 4
// В данном примере шаблон поиска выглядит так: 
// между иксами любая цифра от 0 до 9:
let str4 = 'xax x1x x3x x5x x@x';
let res4 = str4.replace(/x[0-9]x/g, '!');
console.log(res4); // xax ! ! ! x@x


// Task 5
// В данном примере шаблон поиска выглядит так: 
// между иксами любая цифра от 3 до 7:
let str5 = 'xax x1x x3x x5x x@x';
let res5 = str5.replace(/x[3-7]x/g, '!');
console.log(res5); // xax x1x ! ! x@x


// Task 6
// В данном примере шаблон поиска выглядит так: 
// между иксами любая буква от 'a' до 'z' или цифра от 1 до 9:
let str6 = 'xax x1x x3x x5x x@x';
let res6 = str6.replace(/x[a-z1-9]x/g, '!');
console.log(res6); // ! ! ! ! x@x


// Task 7
// В данном примере шаблон поиска выглядит так: 
// между иксами любая буква от 'a' до 'z' или буква от 'A' до 'Z':
let str7 = 'xax xBx xcx x5x x@x';
let res7 = str7.replace(/x[a-zA-Z]x/g, '!');
console.log(res7); // ! ! ! x5x x@x


// Task 8
// В данном примере шаблон поиска выглядит так: 
// между иксами любая буква от 'a' до 'z' или цифры 1, 2:
let str8 = 'xax xbx x1x x2x x3x';
let res8 = str8.replace(/x[a-z12]x/g, '!');
console.log(res8); // ! ! ! ! x3x


// Task 9
// В данном примере шаблон поиска выглядит так: 
// между иксами буквы от 'a' до 'z' в количестве от 1 и более:
let str9 = 'xx xabesx xaadx x123x xa3x';
let res9 = str9.replace(/x[a-z]+x/g, '!');
console.log(res9); // xx ! ! x123x xa3x


// Task 10
// Сделаем так, чтобы количество букв могло быть и ноль:
let str10 = 'xx xabesx xaadx x123x xa3x';
let res10 = str10.replace(/x[a-z]*x/g, '!');
console.log(res10); // ! ! ! x123x xa3x


// Task 11
// Дана строка
// Напишите регулярку, которая найдет по следующему шаблону: 
// по краям стоят буквы 'a', 
// а между ними - буква 'b', 'e' или 'x'.
let str11 = 'aba aea aca aza axa';
let res11 = str11.replace(/a[bex]a/g, '!');
console.log(res11); // ! ! aca aza !


// Task 12
// Дана строка
// Напишите регулярку, которая найдет по следующему шаблону: 
// по краям стоят буквы 'a', 
// а между ними - цифра от 3-х до 6-ти.
let str12 = 'a1a a3a a7a a9a aba';
let res12 = str12.replace(/a[3-6]a/g, '!');
console.log(res12); // a1a ! a7a a9a aba


// Task 13
// Дана строка
// Напишите регулярку, которая найдет по следующему шаблону: 
// по краям стоят буквы 'a', 
// а между ними - буква от a до g.
let str13 = 'aba aea afa aha aga';
let res13 = str13.replace(/a[a-g]a/g, '!');
console.log(res13); // ! ! ! aha !


// Task 14
// Дана строка
// Напишите регулярку, которая найдет по следующему шаблону: 
// по краям стоят буквы 'a', 
// а между ними - буква от a до f и от j до z.
let str14 = 'aba aea afa aha aga';
let res14 = str14.replace(/a[a-fj-z]a/g, '!');
console.log(res14); // ! ! ! aha aga


// Task 15
// Дана строка
// Напишите регулярку, которая найдет по следующему шаблону: 
// по краям стоят буквы 'a', 
// а между ними - буква от a до f и от A до D.
let str15 = 'aAa aea aEa aJa a3a';
let res15 = str15.replace(/a[a-fA-D]a/g, '!');
console.log(res15); // ! ! aEa aJa a3a


// Task 16
// Дана строка
// Напишите регулярку, которая найдет по следующему шаблону: 
// по краям стоят буквы 'a', 
// а между ними - маленькие латинские буквы, не затронув остальных.
let str16 = 'aAXa aeffa aGha aza ax23a a3sSa';
let res16 = str16.replace(/a[a-z]+a/g, '!');
console.log(res16); // aAXa ! aGha ! ax23a a3sSa


// Task 17
// Дана строка
// Напишите регулярку, которая найдет по следующему шаблону: 
// по краям стоят буквы 'a', 
// а между ними - маленькие и большие латинские буквы, 
// не затронув остальных.
let str17 = 'aAXa aeffa aGha aza ax23a a3sSa';
let res17 = str17.replace(/a[a-zA-Z]+a/g, '!');
console.log(res17); // ! ! ! ! ax23a a3sSa


// Task 18
// Дана строка
// Напишите регулярку, которая найдет по следующему шаблону: 
// по краям стоят буквы 'a', 
// а между ними - маленькие латинские буквы и цифры, 
// не затронув остальных.
let str18 = 'aAXa aeffa aGha aza ax23a a3sSa';
let res18 = str18.replace(/a[a-z0-9]+a/g, '!');
console.log(res18); // aAXa ! aGha ! ! a3sSa




/* Инвертирование наборов символов */

// Task 19
// В данном примере шаблон поиска выглядит так: 
// буква 'x', 
// затем - НЕ буква 'a', не 'b' и не 'c', 
// потом буква 'z':
let str19 = 'xaz xbz xcz xez';
let res19 = str19.replace(/x[^abc]z/g, '!');
console.log(res19); //xaz xbz xcz !


// Task 20
// В данном примере шаблон поиска выглядит так: 
// буква 'x', затем НЕ маленькая латинская буква, потом буква 'z':
let str20 = 'xaz xbz x1z xСz';
let res20 = str20.replace(/x[^a-z]z/g, '!');
console.log(res20); // xaz xbz ! !


// Task 21
// Напишите регулярку, которая найдет строки по шаблону: 
// цифра '1', затем символ не 'e' и не 'x', цифра '2'.
let str21 = '1a2 1e2 1x2 1x3 1n2 122';
let res21 = str21.replace(/1[^ex]2/g, '!');
console.log(res21); // ! 1e2 1x2 1x3 ! !


// Task 22
// Напишите регулярку, которая найдет строки по шаблону: 
// буква 'x', затем НЕ цифра от 2 до 7, буква 'z'.
let str22 = 'x1z z3x x3z x9z x4z';
let res22 = str22.replace(/x[^2-7]z/g, '!');
console.log(res22); // ! z3x x3z ! x4z


// Task 23
// Напишите регулярку, которая найдет строки по шаблону: 
// буква 'x', затем НЕ большая латинская буква от 1 и более раз, 
// буква 'z'.
let str23 = 'xfsjz x45ghz zGdhx xgz';
let res23 = str23.replace(/x[^A-Z0-9]+?z/g, '!');
console.log(res23); // ! x45ghz zGdh!


// Task 24
// Напишите регулярку, которая найдет строки по шаблону: 
// буква 'x', затем НЕ маленькая латинская буква 
// и не цифра от 1 до 5 от 1 и более раз, буква 'z'.
let str24 = 'xz x8z xnz xGz';
let res24 = str24.replace(/x[^a-z1-5]+z/g, '!');
console.log(res24); // xz ! xnz !