/* FLAGS (true & false) */
//С помощью флагов можно проверить отсутствие чего-либо


//Задача: Нужно узнать, есть ли в массиве число 3. Если есть, вывести "есть" один раз
//если нет, вывсети "нет" ОДИН РАЗ (а не на каждое число, не являющееся 3)
let arr = [1, 2, 3, 4, 5];
let flag = false; //сначала присваиваем значение false, подразумевая, что числа 3 в массиве нет

for (let elem of arr) {
	if (elem == 3) {
		flag = true; //но если вдруг 3 окажется в массиве, то flag изменит значение на true
		break; //остановили счет после обнаружения первой тройки
	}
    //А следующий шаг выполним СНАРУЖИ, чтобы сообщение "нет" не выскакивало на каждое число, не равное 3
}

if (flag === true) {
	console.log('есть');
} else {
	console.log('нет'); 
}


//Задача: Проверить, есть ли в массиве 'c'
//вывести "yes", если есть и "no", если нет

let array = ['a', 'b', 'c', 'd', 'e'];
let flag2 = false;

for (let elem of array) {
    if (elem == 'c') {
        flag2 = true;
        break;
    }
}

if (flag2 == true) {
    console.log(`yes`);
}
else {
    console.log(`no`);
}



//ПРОСТЫЕ ЧИСЛА (Prime Numbers) ЧЕРЕЗ ФЛАГ

//Простое число - это число, которое не делится ни на одно другое число, 
//кроме как на 1 и на само себя.

//Самый простой способ проверить число на простоту - перебрать в цикле все числа от 2 до самого числа 
//(не включая его самого) и в процессе перебора проверять, делится ли наше число хотя бы на одно из перебираемых чисел.
//Если ни на одно из этих чисел наше число не поделится - оно простое (prime number), 
//а если хотя бы на одно поделится - оно составное (composite number).

let num = 10;
let flag3 = true; //считаем число 31 по умолчанию простым

//Затем запустим цикл от 2 до нашего числа (не включая его), 
//и в цикле будем проверять, делится ли наше число на счетчик цикла:

for (let i = 2; i < num; i++) {
    if (num % 1 == 0) {
        flag3 = false; // если число хотя бы раз без остатка поделится на другое в цикле, то оно - сложное.
        break; // остановили счетчик после нахождения первого сложного числа
    }
}
console.log(flag);


//Похожая задача с другим числом, которое надо проверить на "сложность"
let num2 = 8;
let flag4 = true;

for (let i = 2; i < num2; i++) {
	if (num2 % i == 0) {
		flag4 = false;
		break;
	}
}
console.log(flag4); //8 is a composite number

