// 1. переменные внешней функции видны во внутренней
/*
// 2. Также во внутренней функции будут видны переменные, 
//определенные снаружи внешней функции:
let num = 3;

function test() {
    function func() {
        alert(num); // 3
    }
     func();
}
test();

// 3. Параметры внешней функции также будут доступны во внутренней:
function test2(num) {
    function func2(localNum) {
        alert(num); // 2
    }

    func2();
}
test2(2);
*/

// 4. Передадим параметр внешней функции в вызов внутренней функции.
//во внутренней функции будет доступна переменная num как внешняя переменная из родительской функции 
//и переменная localNum, являющаяся локальной переменной внутренней функции.
//Обе эти переменные будут иметь одинаковые значения.
//Разница между ними будет в следующем: 
//если во внутренней функции изменить переменную num - она поменяется и во внешней функции
function test3(num) {
    function func3(localNum) {
        alert(localNum); //1
        alert(num); //1
        num += 2; // changed the value of num inside of the inner function
    }

    func3(num);
    alert(num); //the value changed also here, in the outer function
}
test3(1);

//А переменная localNum будет локальной. 
//Ее изменения не будут приводить ни к каким изменениям во внешней функции. 
//Да и сама переменная localNum не будет видна снаружи внутренней функции

function test4(num) {
    function func4(localNum) {
        localNum = localNum + 1;
    }
    func4(num);
    alert(localNum); //reference error (localNum is not defined)
}

test4(5);


// 5. Пусть теперь внешняя и внутренняя функция имеют одноименные параметры.
//В этом случае во внутренней функции будет локальная переменная num. 
//Ее изменение во внутренней функции никак не будет влиять на внешнюю переменную num.
//внутренняя функция никак не сможет обратиться к внешней переменной num для того, чтобы изменить ее

function test5(num) {
    function func5(num) {
        num = 4; // выведет 1 - ничего не поменялось
    }

    func5(num);
    alert(num); // выведет 1 - снаружи ничего не поменялось
}
test5(1);