// replace() первым параметром принимает что менять, а вторым - на что менять. 
// А сам метод применяется к строке, в которой производится замена
'bab'.replace('a', '!'); // вернет 'b!b'

//Первым параметром этого метода можно передавать не просто строку, а регулярное выражение. 

// Регулярное выражение - набор команд, расположенных внутри слешей /. 
// Эти слеши называются ограничителями регулярных выражений.

// Сами регулярные выражения состоят из двух типов символов: 
// из тех, которые обозначают сами себя 
// и из символов-команд, которые называются "специальные символы".
// Буквы и цифры обозначают сами себя

// Task 1
// с помощью регулярного выражения заменим букву 'a' на !
console.log('bab'.replace(/a/, '!')); // b!b

// А вот точка является специальным символом и обозначает "любой символ".

// Task 2
// найдем строку по такому шаблону: 
// буква 'x', затем любой символ, затем опять буква 'x';

console.log('xax eee'.replace(/x.x/, '!')); // ! eee


// После ограничителей можно писать "модификаторы" - 
// команды, которые изменяют общие свойства регулярного выражения.
// модификатор "g" включает режим глобального поиска и замены - 
// без него регулярка ищет только первое совпадение, а с ним - все совпадения
// В следующем примере не указан модификатор g и регулярка найдет только первое совпадение:

console.log('aab'.replace(/a/, '!')); // !ab

// А теперь регулярка найдет все совпадения:

console.log('aab'.replace(/a/g, '!')); // !!b


// Task 3
// Дана строка
// Напишите регулярку, которая найдет строки 
// 'ahb', 'acb', 'aeb' по шаблону: 
// буква 'a', любой символ, буква 'b'.

let str = 'ahb acb aeb aeeb adcb axeb';

console.log(str.replace(/a.b/g, 'a!b')); // a!b a!b a!b aeeb adcb axeb


// Task 4
// Дана строка
// Напишите регулярку, которая найдет строки 'abba', 'adca', 'abea' 
// по шаблону: буква 'a', 2 любых символа, буква 'a'.

let str2 = 'aba aca aea abba adca abea';
console.log(str2.replace(/a..a/g, 'a!!a')); // aba aca aea a!!a a!!a a!!a


// Task 5
// Дана строка
// Напишите регулярку, которая найдет строки 
// 'abba' и 'abea', 
// не захватив 'adca'.

let str3 = 'aba aca aea abba adca abea';
console.log(str3.replace(/ab.a/g, 'ab!a')); // aba aca aea ab!a adca ab!a



/*

Карманы в методе replace

При работе с методом replace, 
если мы что-то положим в карман в регулярке, 
то в строке замены мы можем вставить содержимое этого кармана 
написав знак доллара $ и номер кармана. 

Например, $1 - первый карман, 
$2 - второй карман и так далее.

*/


// Task 6
// Давайте найдем все числа 
// и вместо них вставим эти же числа, 
// но в круглых скобках. 
// Для этого все найденные числа 
// мы будем заменять на них самих же, но в скобках:
let str6 = '1 23 456 xax';
let res6 = str6.replace(/(\d+)/g, '($1)');
console.log(res6); // (1) (23) (456) xax


// Task 7
// Давайте найдем все строки, 
// представляющие собой числа с иксами вокруг 
// и заменим эти числа на них же, но с '!' знаками вокруг:
let str7 = 'x1x x23x x456x xax';
let res7 = str7.replace(/x(\d+)x/g, '!$1!');
console.log(res7); // !1! !23! !456! xax


// Task 8
// Давайте решим следующую задачу: 
// даны строки вида 'aaa@bbb' - 
// буквы, потом собака, потом буквы. 
// Нужно поменять местами буквы до @ и после.
let str8 = 'aaa@bbb ccc@ddd';
let res8 = str8.replace(/([a-z]{3})@([a-z]{3})/g, '$2@$1');
console.log(res8); // bbb@aaa ddd@ccc


// Task 9
// Дана строка
// Поменяйте местами цифры во всех двухзначных числах.
let str9 = '12 34 56 78';
let res9 = str9.replace(/(\d)(\d)/g, '$2$1');
console.log(res9); // 21 43 65 87


// Task 10
// Дана строка с датой
// Преобразуйте эту дату в '2025.12.31'.
let str10 = '31.12.2025';
let res10 = str10.replace(/(\d{2})\.(\d{2})\.(\d{4})/, '$3.$2.$1');
console.log(res10); // 2025.12.31



/*

Карманы по умолчанию в методе replace

В методе replace, помимо карманов с вашими номерами, 
всегда доступны также стандартные карманы: 

$& - всё найденное совпадение, 
$` и $' -часть строки до и после совпадения.

*/

// Task 11
// Давайте найдем все числа и обернем их в круглые скобки:
let str11 = '1 23 456';
let res11 = str11.replace(/(\d+)/g, '($&)')
console.log(res11); //


// Task 12
// Давайте найдем символ @ 
// и заменим его на то, что стоит перед ним, 
// собаку, 
// и то, что стоит после него. 
// Все это запишем в круглых скобках:
let str12 = '123@456';
let res12 = str12.replace(/@/g, "($`@$')");
console.log(res12); // 123(123@456)456


// Task 13
// Пусть мы хотим найти доллар 
// и обернуть его в кавычки ``. 
// В этом случае, чтобы $` не было воспринято как команда, 
// доллар нужно удвоить:
let str13 = 'aaa $ bbb';
let res13 = str13.replace(/\$/g, '`$$`')
console.log(res13); // aaa `$` bbb


// Task 14
// Дана строка
// Напишите регулярку, которая рядом с каждой цифрой напишет такую же.
let str14 = 'a1b2c3';
let res14 = str14.replace(/\d/g, '$&$&')
console.log(res14); // a11b22c33


// Task 15
// Дана строка
// Замените домены на ссылки вида: <a href="http://site.ru">site.ru</a>
let str15 = 'sss site.ru zzz site.com kkk';
let res15 = str15.replace(/[a-z]+\.[a-z]{2,3}/g, `<a href="http://$&">$&</a>`)
console.log(res15); // sss <a href="http://site.ru">site.ru</a> zzz <a href="http://site.com">site.com</a> kkk



/*

Карманы в самой регулярке

Содержимое карманов доступно не только в строке замены, 
но в и самой регулярке: 
мы можем положить что-нибудь в карман, 
а затем прямо в регулярке сказать, 
что здесь должно стоять содержимое этого кармана.

Содержимое карманов доступно по их номерам, 
перед которыми стоит обратный слеш. 
Например, первый карман будет доступен вот так: 
\1, второй карман вот так - \2, третий - \3 и так далее.

*/


// Task 16
// Пусть у нас есть вот такая строка.
// Давайте найдем в ней все места, 
// в которых стоят две любые одинаковые буквы подряд. 
// Для решения задачи будем искать любую букву, 
// класть ее в карман, а затем проверять, 
// идет ли следующем символом содержимое этого кармана
let str16 = 'aa bb cd ef';
let res16 = str16.replace(/([a-z])\1/g, '!');
console.log(res16); // ! ! cd ef


// Task 17
// Пусть у нас есть вот такая строка.
// Давайте найдем в ней все слова, 
// в которых одинаковы первая и последняя буквы. 
// Для решения задачи напишем следующий шаблон: 
// буква, затем еще одна или более букв, 
// а затем такая же буква как первая.
let str17 = 'asxca buzxb csgd';
let res17 = str17.replace(/([a-z])[a-z]+\1/g, '!');
console.log(res17); // ! ! csgd


// Task 18
// Дана строка
// Найдите все подстроки, 
// в которых есть три одинаковые буквы подряд.
let str18 = 'aaa bbb ccc xyz';
let res18 = str18.replace(/([a-z])\1\1/g, '!');
console.log(res18); // ! ! ! xyz


// Task 19
// Дана строка
// Найдите все подстроки, 
// в которых есть две и более одинаковые буквы подряд.
let str19 = 'a aa aaa aaaa aaaaa';
let res19 = str19.replace(/([a-z])\1+/g, '!');
console.log(res19); // a ! ! ! !


// Task 20
// Дана строка
// Найдите все подстроки, 
// в которых есть два одинаковых слова подряд.
let str20= 'aaa aaa bbb bbb ccc ddd';
let res20 = str20.replace(/([a-z]+)\s\1/g, '!');
console.log(res20); // ! ! ccc ddd