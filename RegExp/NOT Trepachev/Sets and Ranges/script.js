/*
SETS
Несколько символов или символьных классов в квадратных скобках […] 
означают «искать любой символ из заданных».

Для примера, [eao] означает любой из 3-х символов: 'a', 'e' или 'o'.

Это называется набором.
*/

console.log( `Hello world`.match(/[dfw]orld/gi) ); // ['world']
console.log( `Hello World`.match(/w[or]ld/gi) ); // null (because in brackets, we can give a set of symbols for only 1 letter/number/symbol)


/*
RANGES
Ещё квадратные скобки могут содержать диапазоны символов.

К примеру, [a-z] соответствует символу в диапазоне от a до z, 
или [0-5] – цифра от 0 до 5
*/

console.log( "Exception 0xAF".match(/x[0-9A-F][0-9A-Fa-f]/g) ); // ['xAF']

/*
Также мы можем использовать символьные классы внутри […].
Например, если мы хотим найти «символ слова» \w или дефис -, то набор будет: [\w-].

Можем использовать и несколько классов вместе, 
например [\s\d] означает «пробельный символ или цифра».

Символьные классы – не более чем сокращение для наборов символов.

Например:

\d – то же самое, что и [0-9],
\w – то же самое, что и [a-zA-Z0-9_],
\s – то же самое, что и [\t\n\v\f\r ], плюс несколько редких пробельных символов Юникода.
*/

console.log( `Hello World-5`.match(/h[\w-]llo world[\s-][\d]/gi) ); // ['Hello World-5']

/*
 многоязычный аналог \w

 Так как символьный класс \w является всего лишь сокращением для [a-zA-Z0-9_], 
 он не найдёт китайские иероглифы, кириллические буквы и т.п.

Давайте сделаем более универсальный шаблон, который ищет символы, 
используемые в словах, для любого языка. 
Это очень легко с Юникод-свойствами: [\p{Alpha}\p{M}\p{Nd}\p{Pc}\p{Join_C}].

Расшифруем его. 
По аналогии с классом \w, мы делаем свой набор, 
который включает в себя символы со следующими Юникодными свойствами:

Alphabetic (Alpha) – для букв,
Mark (M) – для акцентов,
Decimal_Number (Nd) – для цифр,
Connector_Punctuation (Pc) – для символа подчёркивания '_' и подобных ему,
Join_Control (Join_C) – два специальных кода 200c и 200d, 
используемые в лигатурах, например, арабских.
*/

let regexp = /[\p{Alpha}\p{M}\p{Nd}\p{Pc}\p{Join_C}]/gu;
let str = `Hi 你好 12`;
console.log( str.match(regexp) ); //  ['H', 'i', '你', '好', '1', '2']


/*
Исключающие диапазоны (Exclusive ranges)

выглядят как [^…] и соответствуют любому символу за исключением заданных.

Например:
[^aeyo] – любой символ, за исключением 'a', 'e', 'y' или 'o'.
[^0-9] – любой символ, за исключением цифры, то же, что и \D.
[^\s] – любой непробельный символ, то же, что и \S.
*/
console.log( "alice15@gmail.com".match(/[^\d\sA-Z]/gi) ); // ['@', '.']


/*
Экранирование внутри […]

В квадратных скобках большинство специальных символов можно использовать без экранирования:

Символы . + ( ) не нужно экранировать никогда.
Тире - не надо экранировать в начале или в конце (где оно не задаёт диапазон).
Символ каретки ^ нужно экранировать только в начале (где он означает исключение).
Закрывающую квадратную скобку ], если нужен именно такой символ, экранировать нужно.

В приведённом ниже примере регулярное выражение [-().^+] ищет один из символов -().^+:
*/
let regexp2 = /[-().^+]/g;
console.log( `1 + 2 - 3`.match(regexp2) ); // ['+', '-']

//Впрочем, если вы решите экранировать «на всякий случай», то не будет никакого вреда:
let regexp3 = /[\-\(\)\.\^\+]/g; 
console.log( `1 + 2 - 3`.match(regexp3) ); //  ['+', '-']


/*
Наборы и флаг «u»
Если в наборе есть суррогатные пары, для корректной работы обязательно нужен флаг u.

Например, давайте попробуем найти шаблон [𝒳𝒴] в строке 𝒳:

 alert( '𝒳'.match(/[𝒳𝒴]/) ); // покажет странный символ, что-то типа [?]
// (поиск был произведён неправильно, вернулась только половина символа)
Результат неверный, потому что по умолчанию регулярные выражения 
«не знают» о существовании суррогатных пар.

Движок регулярных выражений думает, что [𝒳𝒴] – это не два, а четыре символа:

левая половина от 𝒳 (1),
правая половина от 𝒳 (2),
левая половина от 𝒴 (3),
правая половина от 𝒴 (4).
Мы даже можем вывести их коды:

 for(let i=0; i<'𝒳𝒴'.length; i++) {
  alert('𝒳𝒴'.charCodeAt(i)); // 55349, 56499, 55349, 56500
};
То есть в нашем примере выше ищется и выводится только левая половина от 𝒳.

Если добавить флаг u, то всё будет в порядке:

 alert( '𝒳'.match(/[𝒳𝒴]/u) ); // 𝒳
Аналогичная ситуация произойдёт при попытке искать диапазон: [𝒳-𝒴].

Если мы забудем флаг u, то можем нечаянно получить ошибку:

 '𝒳'.match(/[𝒳-𝒴]/); // Error: Invalid regular expression
Причина в том, что без флага u суррогатные пары воспринимаются как два символа, 
так что [𝒳-𝒴] воспринимается как [<55349><56499>-<55349><56500>] 
(каждая суррогатная пара заменена на коды). 
Теперь уже отлично видно, что диапазон 56499-55349 некорректен: 
его левая граница больше правой, это и есть формальная причина ошибки.

При использовании флага u шаблон будет работать правильно:

поищем символы от 𝒳 до 𝒵
alert( '𝒴'.match(/[𝒳-𝒵]/u) ); // 𝒴

*/

//Task: У нас есть регулярное выражение /Java[^script]/.
//Найдёт ли оно что-нибудь в строке Java? А в строке JavaScript
let regexp4 = /Java[^script]/;
console.log( `Java`.match(regexp4) ); // null because [^script] означает 
//«любой символ, кроме заданных». Таким образом, регулярное выражение ищет "Java", 
//за которым следует один такой символ, но после конца строки нет символов.
console.log( `JavaScript`.match(regexp4) ); // JavaS


//Task: Найдите время как hh:mm или hh-mm
//Напишите регулярное выражение, чтобы найти время:
let regexp5 = /\d\d[-:]\d\d/g; // alternate way /[0-9][0-9][-:][0-9][0-9]/
console.log( "Завтрак в 09:00. Ужин в 21-30".match(regexp5) ); // 09:00, 21-30