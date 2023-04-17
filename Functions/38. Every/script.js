/*
метод every проверяет элементы массива и возвращает true, 
если для всех элементов массива коллбэк вернул true, 
в противном случае метод возвращает false.

*/

//Проверим, к примеру, что все элементы в массиве - четные числа:
let arr = [2, 4, 6, 8];

let result = arr.every(elem => elem % 2 == 0);
console.log(result); //true


//Task: Дан массив с числами. Проверьте то, что все элементы в массиве больше нуля.
let arr2 = [1, 2, 3, 4, 5, 6, 7];

let result2 = arr2.every(elem => elem > 0);
console.log(result2); //true


//Task: Дан массив с числами. 
//Проверьте то, что для всех элементов произведение их значений 
//на их порядковый номер меньше 30.
let arr3 = [1, 2, 3, 4, 5, 6, 7];

let result3 = arr3.every((elem, index) => elem * index < 30);
console.log(result3); //false