// циклы
// цикл while в скобках имеет тольок сравнение, цикл будет действовать пока идётсравнение, и в теле добавление
// let i = 0;
while (i < 3) { // выводит 0, затем 1, затем 2
  alert( i );
  i++;
}
// Если тело цикла состоит лишь из одной инструкции, мы можем опустить фигурные скобки {…}:
// (i) = (i != 0)
let i = 3;
while (i) alert(i--);

// цикл do...while
// цикл сначало выполнит тело, а потом проверит условие, пока оно равно цикл будет продолжаться
 i = 0;
do {
  alert( i );
  i++;
} while (i < 3);

// цикл for
// создает переменную, которая будет увеличиваться пока условие верно
for (let i = 0; i < 3; i++) {
  alert(i); // 0, 1, 2
}
// так же можно пропускать части кода

let k = 0; // мы уже имеем объявленную k с присвоенным значением
for (; k < 3; k++) { // нет необходимости в "начале"
  alert( i ); // 0, 1, 2
}

let j = 0;
for (; j < 3;) {
  alert( j++ );
}

// прерывание цикла break
// if (!value) break; // (*)

// Директива continue – «облегчённая версия» break. 
// При её выполнении цикл не прерывается, а переходит к следующей итерации (если условие все ещё равно true).
// if (i % 2 == 0) continue;

// Метка имеет вид идентификатора с двоеточием перед циклом:
outer:
for (let i = 0; i < 3; i++) {  }
// метка нужна для того, чтобы закрыть цикл любой волоэенности





// Тоже самое что if(){}if(){}else. d<3?2:0
function rentalCarCost(d) { return d < 3 ? d*40 : d >= 7 ? d * 40-50 : d >= 3 ? d * 40-20 : 0;}
// или через сase
let a = 2 + 2;

switch (a) {
  case 3:
    alert( 'Маловато' );
    break;
  case 4:
    alert( 'В точку!' );
    break;
  case 5:
    alert( 'Перебор' );
    break;
  default:
    alert( "Нет таких значений" );
}

// Метод, который возвращает целое число
Number.isInteger(number)

// Метод строки, который делает буквы большими
String.toUpperCase()

// возвращает подстроку строки между двумя индексами, или от одного индекса и до конца строки, 
// тоесть объеденяет строку с начала индекса
return word[0].toUpperCase() + word.substring(1);
// возвращает строку с первого по предпоследний элемент
function removeChar(str) { return str.substring(1, str.length -1);}


// .charAt(0) это тоже самое что word[0], возвращает первый символ, только не делает из него массив
// slice(1)в озвращает новый массив, содержащий копию части исходного массива, тоесть с нужного индекса
return this.charAt(0).toUpperCase() + this.slice(1);

console.log(Math.floor(num1/num2)); // 3 (округление в меньшую сторону)
   console.log(Math.ceil(num1/num2)); // 4 (округление в большую сторону)
   console.log(Math.round(num1/num2)); // 3 (математическое округление)
   console.log(+(num1/num2).toFixed(0)); // 3 (математическое округление)
   console.log(parseInt((num1/num2))); // 3 (приведение к числу, будет отброшена дробная часть)

// преобразует число в строку или + строка
   number.toString()
// наоборот или * или / на число
   Number(str)

  //  Переводит с одной систему в другу с 8миричной в двоичную
   Number.parseInt(n)

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

// join объеденяет массив обратно, противоположное split
return x.split('').map(n => n < 5 ? 0 : 1).join('');
// Метод split() разбивает объект String на массив строк путём разделения строки указанной подстрокой.

// Длину чего либа узнать
n.toString().length

// Метод endsWith() позволяет определить, заканчивается ли строка символами указанными в скобках, возвращая, соответственно, true или false.
function solution(str, ending){return str.endsWith(ending)}

// метод повторения
s.repeat(n)


// Для тоо чтоб превратить введенное число в слово, надо сделать массив и сопоставить число с массивом
// для первого десятка [number-1]
// для второго десятка number - [11]
// для больших десятков надо обхеденить 2 массива. в первом рес -2 значит со второго десятка, тоесть с двадцати.
function switchItUp(number){
  var arr = ['один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять']
  var arr2 = ['одинадцать']
  var arr3 = ['двадцать','тридцать', 'сорок', 'пятьдесят','шестьдесят']
  var b = number % 10;
  var res = arr3[Math.floor(number / 10) - 2];

  return res + ' ' + arr[ b - 1];
  }
// Метод вохвращает тип введенніх данніх
  function typeOfSum(a, b) { return typeof(a+b)}

  // метод abc возвращает число по модулю, тоесть -1 = 1
  let result = Math.abs(name.length - 15);//-10, но благодаря методу 10

  // максимально и минимальное в массиве
  Math.min(10, 222, -5, 0, '-33')
  Math.min(10, 222, -5, 0, '-33')
  // степенная функция или **
  Math.pow(2,4)

  // символы
  console.log('\nHey!'[1]);//перенос строки


  let rfr = 11n; //typeof(bigint) большое число

  // метод typeof возвращает тип
  console.log(typeof 'blubber');

  // из объекта делает массив, в котором прибавляет ключи, а значения 0
  const number1 = Object.values(diary1).reduce((a, b) => a + b, 0);

  // Массив с массивами сделать массивом с обїектами
function colourAssociation(array){
  let newArr = [];
      for(let key of array){
      let k = key[0];
      let v = key[1];
      newArr.push({
          [k]:v
      });
  }
  return newArr;
}

// flat метод раскрывает вложенности
flat(Infinity)

// из массива массивов в массив объектов
const colourAssociation = array => array.map(([colour, association]) => ({[colour]:association}))
function colourAssociation(array){
  return array.map(([k, v]) => ({[k]: v}))
}

// сколько после запятой цифр и округляет последние
toFixed(10)

// превращает строку в символы
String.fromCharCode(65, 66, 67);  // "ABC"


    // ищет буквы в строке
    // Метод indexOf() возвращает индекс первого вхождения указанного значения в 
    // строковый объект String, на котором он был вызван, начиная с индекса fromIndex. 
    // Возвращает -1, если значение не найдено.
//     "Синий кит'.indexOf('Синий') !== -1; // true
// 'Синий кит'.indexOf('Голубой') !== -1; // false

// проверит имеет ли объект этот ключ
o.hasOwnProperty('prop');  

// сортировка с большего в меньшее
const newArr = [...newSet].sort((a,b) => b - a);


// const [a,b,c,...rest] = [...new Set([...numbers])].sort((a,b)=>b-a)

// добавляет в начало цикла ноль
arr2.unshift (0);

// сначало куда потом что
arr3.push(arr1[i]+arr2[i])

// Необходимо 2 числа разделить на цифры и прибавить по отдельности
var arr3 = arr1.map(function(value, index){ return value + arr2[index] })

// Function Declaration – функция, объявленная в основном потоке кода.
// Function Expression – объявление функции в контексте какого-либо выражения, например присваивания.

// Function Declaration не работает в if
function sum(a, b) {
  return a + b;
}
// Function Expression
var sum = function(a, b) {
  return a + b;
}

// Основное отличие между ними: функции, объявленные как Function Declaration, создаются интерпретатором до выполнения кода.

// Поэтому их можно вызвать до объявления

// А Function Expression создаются в процессе выполнения выражения, в котором созданы, в данном случае – функция будет создана при операции присваивания sayHi = function...

// function стрелочкая
// Стрелочніе функции не могут делать конструкторі

const func = (a,b) => a+b;

// arguments в стрелочной выйзвать нельзя

// Существует ещё один способ создания функции, который используется очень редко
// Он позволяет создавать функцию полностью «на лету» из строки, вот так:
var sum = new Function('a,b', ' return a+b; ');

var resultt = sum(1, 2);
alert( resultt ); // 3
// То есть, функция создаётся вызовом new Function(params, code):

// конструктор принимает значения и делает с ними что-то. Через зис управляются действия. Создаём переменную, прогоняем через конструктор, задавая значения.

// пример конструктора
// const myConstructor = function(name,age){
  this.name = name;
  this.age = age;

  this.getName = function() {
   console.log(this.name, this.age);
  }
// }
// this берет данный объект его название, тоесть ссылается на него

// Геттер (от англ. get - получить) — это метод, который получает значение определённого свойства. 
// Сеттер (от англ. set — присвоить) — это метод, который присваивает значение определённому свойству объекта. 
var o = {
  a: 7,
  get b() { return this.a + 1; },
  set c(x) { this.a = x / 2; }
};

// ОБЛАСТЬ видимости
// функция может смотреть за пределы, но смотреть в фунцию нельзя

// рекурсия - самовызывающаяся функция

const array = [1,2,3,4,[5,6,[7,8]]]
const resultу = [];

const flattenArray = function(arr){
    for(let i = 0; i < arr.length; i++){
        const currentValue = arr[i]
        if(typeof currentValue !== 'number'){
            flattenArray(currentValue)
        }else{
            resultу.push(currentValue)
        }
    }
}

// объекты и массивы

// объекты

const object = {
  name:'Victor',
  age: 32,
  passportData:{
      number:7768,
      id:'7768id'
  }
};
// добавление в объектс ключа и значение
object.height = 178

// изменение клача и значения
object.name = 'Vasya'
// тоже самое что
// console.log(object[nameProperty]);

const newKey = 'Laptop';
const newValue = 'MackBook';
const nameProperty = 'name'

// в скобку нужно взять название константы, чтоб ключ назывался не как название константы, а передавал её значение
object[newKey] = newValue

// цикл который смотрит что находится в объекте  
console.log(property)// покажет ключи,
console.log(object[property])// покажет значения

for (let property in object){
    if(typeof object[property] === 'object'){
        for(let nestedproperty in object[property]){
            console.log(nestedproperty);
        }
    }
    console.log(property);
}

for (let property of object){
}

const object2 = {
  age: 54
}

const resultObjects = {

}

for (let key in object){
  if(object2[key]){
      resultObjects[key] = object2[key] + object[key]
  }
}

// Массивы
const arrayy = [12,'string', true,undefined, {name: 'Viktor'}]

const studentOne = {
  name: 'Vasya',
  avgGrade: '4'
}

const studentTwo = {
  name: 'Petya',
  avgGrade: '5'
}

const students = [studentOne,studentTwo]

// добавляет в конец - мутирует, изменяет
students.push(studentThree)

// удаляет последнее значение
students.pop()

const malesStudensts = [studentOne,studentTwo]
const femalesStudensts = [studentThree]
// 3 точки рзбивают массив на значение и кладут
const allStudents = [...malesStudensts, ...femalesStudensts]

// const tenGradeSystemStudents = [];

// forEach тоже самое что и обічній for, только запись меньше
allStudents.forEach((value, index, arr) => {
  // console.log(value, index, arr);
  tenGradeSystemStudents.push({
      ...value,
      avgGrade: value.avgGrade * 2
  })
});

// map

// мап собирает то что возвращено и передаёт сразу в новый массив. этот массив превратил в новый массив
const tenGradeSystemStudents = allStudents.map((value, index, arr) => {
    return{
        ...value,
        avgGrade: value.avgGrade * 2
    }
});

// filter вщзвращает только тру и фолс
const redDiplomaStudent = allStudents.filter((value) =>{
  if(value.avgGrade < 5 ){
      return false
  }
  return true
})
// or const redDiplomaStudent = allStudents.filter((value) =>value.avgGrade === 5)

// Метод includes() определяет, содержит ли массив определённый элемент, возвращая в зависимости от этого true или false.
const numberss = [1,2,3];
console.log(numbers.includes(4));

// reduce

// Превращает массив в нечто другое - объект, строку и т п

// принимает предыдущее значение и текущее значение
const ourSchool = allStudents.reduce((acc,value) => {
    // console.log(acc, 'accum');
    // console.log(value, 'value')

    const newGrades = [...acc.studentsGrade, value.avgGrade]

    return{
        students: [...acc.students, value.name],
        studentsGrade: newGrades,
    }
},{
    // во второй скобке начальное значение и там уазіваешь во что надо превратить, если 0 то число, если '' то строка
    students: [],
    studentsGrade: [],
})

// пример попроще

const numbers = [1,2,3,4,5,6,7];
const numbersSum = numbers.reduce((acc,value) => {
    return acc + value
}, 0)
console.log(numbersSum);



// Алгоритмы и структуры данных

const student1 = {
  name: 'Vasya',
  age: 14
}

const student2 = {
  name: 'Petya',
  age: 25
}

const student3 = {
  name: 'Anna',
  age: 18
}

const student4 = {
  name: 'John',
  age: 23
}

// простейшая структура данных
// упорядочивание
// структура данніх дерево єто штмл
// очередь как структура
// const students = [student1, student2, student3, student4]

const queue = {
  data: [],
  add: function (newData) {
      this.data.unshift(newData)
  },
  next: function () {
     return this.data.pop()
  }
}

console.log(queue);
queue.add(student1);
queue.add(student2);
console.log(queue);
console.log(queue.next());
console.log(queue);



// структура Стек
// стопка книг
// не работаем с концом
// ложится наверх и сверху забирается
const stack = {
  data: [],
  add: function (newData) {
      this.data.push(newData)
  },
  next: function () {
     return this.data.pop()
  }
}

// Алгоритм - набор операций, которые надо сделать с исходными данными, чтобы получить то что нужно на выъод, набор действий, любая функция

const studentus = [student1, student2, student3, student4]
const getLastStudent = (studentus) => {
  const lastStudent = studentus.pop();
  return lastStudent;
}

  // сложность алгоритма - сколько операций надо сделать для получения результата. Именно операций с данными, кроме ретурна.
  O(1)

  // корирование

  const myListenerCallback = (param1, param2) => {
      return (event) => {
          event.preventDefault()
          console.log(param1, param2)
      }
  }

  element.addEventListener('click', myListenerCallback(1,2))


  // Dom Api
// querySelectorAll ищет все объекты с классом и берет их в массив
// без All берет первый попавшийся
// getElementById ищет по айди
const myIdButton = document.getElementById('myButton');
const myClassButton = document.querySelectorAll('.my-button')

// Dom Events
// innerHTML вставляет в элемент всё что угодно, текст объекты
// сработает толкьо с querySelector, если querySelectorAll то не сработает, т к массив
// myClassButton.innerHTML = 'New Click'

// для querySelectorAll создаем цикл и пригоняем все кнопки
// myClassButton.forEach(button => {
//     button.innerHTML = 'New Click'
// })

const handleClick = (event) =>{
  // classList можно проверить есть ли стиль,добавить или же удалить стили, посмотреть все стили
  console.log(myIdButton.classList);//cписок классов, которіе имеет кнопка, єто массив
  if(myIdButton.classList.contains('red')){
            console.log('yes');
            myIdButton.classList.remove('red')
            myIdButton.classList.add('black')
        }else{
            console.log('no'); 
            myIdButton.classList.remove('black')
            myIdButton.classList.add('red')
        }
}

//дулает тоже самое, добавляе стиль и убирает стиль. ТОесть проверяет есть ли стиль, а потом удаляет прошедший и добавляет новый 
// toggle - переключатель, если включено, выключает, а если выключено, включает
myIdButton.addEventListener('click', (event) => {
    myIdButton.classList.toggle('red')
})
// *****************************************************************
// / target говорит где произошло нажатие, тоесть направляет чтоб понимало
// использует 2 функции и кидает их на таргед, тоесть туда где было нажатие
const toggleElementColor = (element, color) => {
    // element.style.color = color
    element.classList.toggle('red');
    // лучше не использовать изменение стили, т к имеет высокий вес её не перебить обычными классами
}

const toggleElementText = (element, text) => {
    element.innerHTML = text
}

const handleMouseEnter = (event) => {
    const element = event.target;
    // если через color
    // toggleElementColor(element, 'red')
    toggleElementColor(element)
    toggleElementText(element, 'Cool text')
}

const handleMouseLeave = (event) => {
  const element = event.target;
  // toggleElementColor(element, 'black')
  toggleElementText(element, 'Click')
}
// при наводе на текст функция срабатывает
myIdButton.addEventListener('mouseenter', handleMouseEnter)
myIdButton.addEventListener('mouseleave', handleMouseLeave)
// *****************************************************************

// попап

const popup = document.querySelector('.popup');
const close = document.getElementById('close');

myIdButton.addEventListener('click', () => {
    popup.classList.toggle('hidden')
})

popup.addEventListener('click', (event) => {
    if (event.target.classList.contains('popup')) {
        popup.classList.toggle('hidden')
    }
})

close.addEventListener('click', () => {
    popup.classList.toggle('hidden')
})
// *****************************************************************

// функция куллбека - принимает значение и может исполтзоваться как аргумент в лругом месте 
const func5 = (a, callback) => {
  const width = '80px'
  callback(width);
  console.log(name);
}

const func6 = (a,b) => {
  const age = 10;
  let width;
  const getWidth = (widthResult) => {
      width = widthResult;
  }
  func5(1,getWidth)
  console.log(width);
}
// *****************************************************************

