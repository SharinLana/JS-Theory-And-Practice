/*
В скобках функции можно передавать параметры (как один, так и несколько).

Пусть, к примеру, мы хотим сделать функцию, 
которая параметром будет принимать число 
и выводить на экран квадрат этого числа.

Как мы теперь будем вызывать нашу функцию: 
мы будем писать имя функции, круглые скобки, 
а в них - какое-то число, квадрат которого мы хотим получить.
К примеру, вот так мы получим квадрат числа 2:
*/

func(6);

//Теперь пропишем саму функцию

function func(num) {
    num = num ** 2;
    document.write(num);
}


//Задача: Сделайте функцию, которая параметром принимает число 
//и выводит на экран куб этого числа.
num3(5);

function num3(num) {
    num = num ** 3;
    document.write(`<br>` + num);
}


//Задача: Сделайте функцию, которая параметром принимает число
// и проверяет, положительное это число или отрицательное. 
//В первом случае пусть функция выводит на экран текст '+++', а во втором '---'.
test(-50);

function test(num) {
    if (num > 0 ) {
        console.log(`+++`);
    }
    else {
        console.log(`---`);
    }
}


//Задача: создать функцию, параметром принимающую три числа 
//и выводящую на экран их сумму:
sum(5, 7, 9);

function sum(num1, num2, num3) {
    console.log(num1 + num2 + num3);
}



//ПЕРЕМЕННЫЕ КАК ПАРАМЕТРЫ ФУНКЦИИ
let param1 = 2;
let param2 = 4;

function getSum(num1, num2) {
    console.log(num1 + num2);
}

getSum(param1, param2);


//Задача: даны 3 переменные с числами. 
//Сделайте функцию, которая параметром будет принимать 3 числа 
//и выводить на экран их сумму.
let par1 = 1;
let par2 = 2;
let par3 = 3;

calculate(par1, par2, par3);

function calculate(num1, num2, num3) {
    console.log(num1 + num2 + num3);
}


//Задача: создать функцию, которая параметром принимает имя и выводит его на экран
firstName('John');

function firstName(name) {
    document.write(`<br> Your name: ${name}`);
}



//НЕОБЯЗАТЕЛЬНЫЕ ПАРАМЕТРЫ
//Если параметр будет введен, то он выведется на экран.
//Если нет - то вместо него выведется значение по умолчанию.

//Все необязательные параметры следует писать в конце. 
//Поэтому сделать так, чтобы имя было необязательным, 
//а возраст - нет, нельзя:

//Для того, чтобы сделать параметр необязательным, 
//для него нужно определить значение по умолчанию. 
//Для этого при определении параметра нужно поставить знак = 
//и желаемое значение, вот так:

function fName(name = 'No Name') {
    document.write(`<br> Your name: ${name}`);
}

fName(); // выведет Your name: No Name
fName(`Lana`); //выведет Your name: Lana


//
function data(name, age = 'unknown') {
    document.write(`<br> Your name: ${name}, age: ${age}`);
}

data(`Lana`, 40); // выведет Your name: Lana, age: 40
data(`Lana`); //выведет Your name: Lana, age: unknown


//Задача: определите, что выведется при каждом вызове функции
function func(num = 5) { //num = 5 - необязательный параметр, сработает тогда, когда параметр при вызове функции не задан
	alert(num * num);
}

func(2); // 4 (2 * 2)
func(3); // 9 (3 * 3)
func(); // 25 (параметр не задан, поэтому в силу вступает необязательный параметр 5)


//Задача: определите, что выведется при каждом вызове функции
function func(num1 = 0, num2 = 0) {
	alert(num1 + num2);
}

func(2, 3); // 5 (2 + 3)
func(3); //3 (3 + необязательный параметр 0)
func(); //0 (необязательный параметр + необязательный параметр)