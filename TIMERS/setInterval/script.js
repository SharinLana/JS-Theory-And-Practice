/*
Эта функция работает следующим образом: 
первым параметром она принимает исходный код функции, 
а вторым параметром - интервал, 
через который эта функция будет автоматически вызываться. 

Второй параметр задается в миллисекундах (1000 миллисекунд = 1 секунда).
*/

function timer() {
    console.log('!');
}

setInterval(timer, 2000);

//Не обязательно создавать отдельную функцию - 
//можно просто в первый параметр setInterval 
//передать анонимную функцию, вот так:

setInterval(function timer2() {
    console.log('Hey!');
}, 2000)


/*
Счетчик через функцию setInterval 

Давайте сделаем так, чтобы каждую секунду в консоль 
выводились числа по возрастанию: 
сначала 1, потом 2, потом 3 и так далее
*/

let i = 0; //global variable

function counter() {
    console.log(i);
    i++;
}

setInterval(counter, 1000)

//Или еще более компактно через стрелочную функцию:
let i2 = 0;
setInterval(() => console.log(++i2), 1000);

//Task:
//Пусть дана переменная, в которой изначально хранится число 100. 
//Запустите таймер, который каждую секунду будет 
//уменьшать значение этой переменной на 1 и выводить это значение в консоль.

let j = 100;

setInterval(() => console.log(--j), 1000);


/*
Остановка таймера JavaScript

Для остановки таймера используется функция clearInterval, 
которая принимает уникальный номер того таймера, который нужно остановить.

Для примера давайте запустим таймер, 
выводящий в консоль числа по возрастанию, начиная с 1. 
Остановим таймер, как только на экран будет выведено число 10
*/

let k = 1;

let timerId = function timer() {
    if (k >= 10) {
        clearInterval(timerId);
    }
    else {
        console.log(k);
        k++
    }
}

setInterval(timerId, 1000);


//Task 2
//Пусть дана переменная, в которой изначально хранится число 10. 
//Запустите таймер, который каждую секунду 
//будет уменьшать значение этой переменной на 1 
//и выводить это значение в консоль. 
//Как только значение переменной достигнет нуля - остановите таймер.

let counter = 10;

let timerId2 = setInterval(function() {
    console.log(counter);
    counter--;

    if (counter <= 0) {
        clearInterval(timerId2)
    }
}, 1000);


//Кнопка для запуска таймера 

//Task 3
//Сделайте кнопку, по нажатию на которую 
//в консоль будет выводится обратный отсчет, начиная с 100.

let btn = document.querySelector('#btn');

btn.addEventListener('click', func)

function func() {
    let i = 100;

    let timerId = setInterval(function() {
        if (i < 70) {
            clearInterval(timerId);
        }
        else {
            console.log(i);
            i--;
        }
    }, 1000);

    this.removeEventListener('click', func); // removed EventListener
};


/*
Многократное нажатие на кнопку

Код, приведенный мною выше, на самом деле имеет некоторую проблему. 
Эта проблема проявляется в том случае, 
если на нашу кнопку сделать несколько кликов. 
В этом случае каждый клик будет приводить к запуску нового таймера.

То есть, к примеру, три нажатия на кнопку приведут к тому, 
что будет запущено три таймера, 
и каждый из этих таймеров будет выводить значение счетчика в консоль. 
Это значит, что значения будут меняться в три раза быстрее!

Для решения описанной проблемы нужно просто сделать так, 
чтобы повторное нажатие на кнопку не приводило к новому запуску таймера. 
Например, можно после старта таймера 
отвязывать от кнопки привязанный обработчик клика (see the solution above)

*/


/*
Кнопки для запуска и остановки таймера

Task 4
Давайте теперь сделаем две кнопки: 
по нажатию на первую пусть таймер запускается, 
а по нажатию на вторую - останавливается
*/

let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
let timerID;
let c = 0;

btn1.addEventListener('click', start);

btn2.addEventListener('click', function() {
    clearInterval(timerID);

    btn1.addEventListener('click', start);
});

function start() {

    timerID = setInterval(function() {
        console.log(c);
        c++;

        if (c > 15) {
            clearInterval(timerID);
        }

    }, 1000);

    btn1.removeEventListener('click', start);

}

