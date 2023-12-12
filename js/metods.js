// метод
//   let rfr = 11n; //typeof(bigint) большое число
// let userAge = 58;
// userAge = Boolean(false); или !!

// Длину чего либа узнать
n.toString().length

// метод повторения
s.repeat(n)
// ***********************************************************************
// ЧИСЛА
// userAge = Number(58); или *,/
// наоборот или * или / на число
Number(str)

// Метод, который возвращает целое число
Number.isInteger(number)

console.log(Math.floor(num1 / num2)); // 3 (округление в меньшую сторону)
console.log(Math.ceil(num1 / num2)); // 4 (округление в большую сторону)
console.log(Math.round(num1 / num2)); // 3 (математическое округление)
console.log(+(num1 / num2).toFixed(0)); // 3 (математическое округление)
console.log(parseInt((num1 / num2))); // 3 (приведение к числу, будет отброшена дробная часть)

//  Переводит с одной систему в другу с 8миричной в двоичную
Number.parseInt(n)

// сколько после запятой цифр и округляет последние
toFixed(10)
// метод abc возвращает число по модулю, тоесть -1 = 1
let result = Math.abs(name.length - 15);//-10, но благодаря методу 10

// степенная функция или **
Math.pow(2, 4)

// сколько после запятой цифр и округляет последние
toFixed(10)


// ***********************************************************************
// СТРОКИ
// userAge = String(58); Меняет тип уже заданой строки

// преобразует число в строку или + строка
number.toString()

// Метод строки, который делает буквы большими
String.toUpperCase()

// Метод endsWith() позволяет определить, заканчивается ли строка символами указанными в скобках, возвращая, соответственно, true или false.
function solution(str, ending) { return str.endsWith(ending) }


// возвращает подстроку строки между двумя индексами, или от одного индекса и до конца строки, 
// тоесть объеденяет строку с начала индекса
return word[0].toUpperCase() + word.substring(1);
// возвращает строку с первого по предпоследний элемент
function removeChar(str) { return str.substring(1, str.length - 1); }
// .charAt(0) это тоже самое что word[0], возвращает первый символ, только не делает из него массив


//  глобально сравнивает с функцией каждый элемент
x.replace(/[0-9]/g, number);

// Метод replace() возвращает новую строку с некоторыми или всеми сопоставлениями с шаблоном, заменёнными на заменитель.
// g - глобальное сопоставление
// i -игнорировать регистр
// m - сопоставление по нескольким строкам
// y = «липкий» поиск, сопоставление начинается с текущей позиции в строке

// будет игнорировать глобально
var re = /яблоки/gi;
var str = 'Яблоки круглые и яблоки сочные.';
var newstr = str.replace(re, 'апельсины');
// бцдет игнорировать всё иксмас и вставлят ьвместо него слово
var newstr = str.replace(/xmas/i, 'Christmas');

// ищет буквы в строке
// Метод indexOf() возвращает индекс первого вхождения указанного значения в 
// строковый объект String, на котором он был вызван, начиная с индекса fromIndex. 
// Возвращает -1, если значение не найдено.
//  "Синий кит'.indexOf('Синий') !== -1; //true
'Синий кит'.indexOf('Голубой') !== -1; // false

// ***********************************************************************
// МАССИВЫ
// flat метод раскрывает вложенности
flat(Infinity)

//  сортировка с большего в меньшее
const newArr = [...newSet].sort((a, b) => b - a);

// const [a,b,c,...rest] = [...new Set([...numbers])].sort((a,b)=>b-a)

// добавляет в начало массива ноль
arr2.unshift(0);

// сначало куда потом что
arr3.push(arr1[i] + arr2[i])

// slice(1)в озвращает новый массив, содержащий копию части исходного массива, тоесть с нужного индекса
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// Expected output: Array ["camel", "duck"]

// join объеденяет массив обратно, противоположное split
return x.split('').map(n => n < 5 ? 0 : 1).join('');
// Метод split() разбивает объект String на массив строк путём разделения строки указанной подстрокой.

// flat метод раскрывает вложенности
flat(Infinity)

// map
// мап собирает то что возвращено и передаёт сразу в новый массив. этот массив превратил в новый массив
const tenGradeSystemStudents = allStudents.map((value, index, arr) => {
    return {
        ...value,
        avgGrade: value.avgGrade * 2
    }
});
//   ////////////////////////////////
// filter вщзвращает только тру и фолс
const redDiplomaStudent = allStudents.filter((value) => {
    if (value.avgGrade < 5) {
        return false
    }
    return true
})
//   /////////////////////
// Метод includes() определяет, содержит ли массив определённый элемент, возвращая в зависимости от этого true или false.
const numberss = [1, 2, 3];
console.log(numbers.includes(4));
// //////////////////////////////
// reduce

// Превращает массив в нечто другое - объект, строку и т п

// принимает предыдущее значение и текущее значение
const ourSchool = allStudents.reduce((acc, value) => {
    // console.log(acc, 'accum');
    // console.log(value, 'value')

    const newGrades = [...acc.studentsGrade, value.avgGrade]

    return {
        students: [...acc.students, value.name],
        studentsGrade: newGrades,
    }
}, {
    // во второй скобке начальное значение и там уазіваешь во что надо превратить, если 0 то число, если '' то строка
    students: [],
    studentsGrade: [],
})

// пример попроще

const numbers = [1, 2, 3, 4, 5, 6, 7];
const numbersSum = numbers.reduce((acc, value) => {
    return acc + value
}, 0)
console.log(numbersSum);
// /////////////////////////////////////////////

// ОБЪЕКТЫ
// проверит имеет ли объект этот ключ
o.hasOwnProperty('prop');

// максимально и минимальное в массиве
Math.min(10, 222, -5, 0, '-33')
Math.min(10, 222, -5, 0, '-33')
// ***********************************************************************
// символы
console.log('\nHey!'[1]);//перенос строки

// превращает строку в символы
String.fromCharCode(65, 66, 67);  // "ABC"