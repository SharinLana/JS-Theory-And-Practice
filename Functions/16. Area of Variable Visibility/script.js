/* переменная должна быть определена не перед определением функции, а перед ее вызовом: */
function func() {
	alert(num);
}

let num = 1; // переменная снаружи функции
func(); // выведет 1

/*Если менять значение переменной и после этого каждый раз вызывать функцию -
алерт каждый раз будет выдавать разные результат: */
function funcA() {
	alert(numA);
}

let numA; // объявим переменную

numA = 1; // задаем значение 1
funcA(); // выведет 1

numA = 2; // задаем значение 2
funcA(); // выведет 2

/* Если у нас несколько функций, то глобальная переменная будет доступна в каждой из этих функций: */
function func1() {
	alert(numB);
}

function func2() {
	alert(numB);
}

let numB = 1;

func1(); // выведет 1
func2(); // выведет 1


/* Если в одной из функций произойдут изменения с глобальной переменной, 
то эта переменная поменяется во всех функциях, использующих эту переменную: */
function func3() {
	alert(numC);
	numC++; // меняем глобальную переменную
}

function func4() {
	alert(numC);
}

let numC = 1;

func3(); // выведет 1
func4(); // выведет 2



/* Переменные, определенные внутри функции, называются локальными. 
В отличии от глобальных переменных, 
локальные переменные видны только внутри функции, и не видны снаружи: */
function funcD() {
	let numD = 5; // локальная переменная
	alert(numD);
}

alert(numD); // ничего не выведет, а выдаст ошибку в консоль