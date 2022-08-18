const numbers = sum(1, 2, callbackFunk);
console.log(numbers)

function callbackFunk(){
    console.log('callback');
}
// callback функция как аргумент
// function diclareisen декларация всплывают наверх всегда вызывается, т к всегда сверху самая главная, внутрь можно положить функцию
function sum(a,b, callback){
    callback();
    return a + b
};
// function expresion
const sum2 = function(a,b){ 
    return a + b;
}











// function стрелочкая
const funcExp = function(a,b) {
    console.log(arguments);
    return a + b;
}
// arguments в стрелочной выйзвать нельзя
const func = (a,b) => a+b;

// const numberSum = sum(1, 2);
// console.log(numberSum);

const myConstructor = function(name,age){
   this.name = name;
   this.age = age;

   this.getName = function() {
    console.log(this.name, this.age);
   }
}

const studentVasy = new myConstructor('Vasya', 15);
const studentPetya = new myConstructor('Petya', 25);

studentVasy.getName()
studentPetya.getName()

// конструктор принимает значения и делает с ними что-то. Через зис управляются действия. Создаём переменную, прогоняем через конструктор, задавая значения.
// Стрелочніе функции не могут делать конструкторі

// область видимости

const name = 'Vasya';

const funct = (a,b) => {
    console.log(name);
    const age = 10;
}

console.log(age);
func();

// функция может смотреть за пределы, но смотреть в фунцию нельзя

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

func();
// создается константа, которая равна функции результата, которая возвращает ширину, потом эта константа используется чтоб достать значение кулбека

// при нажатии на кнопку работает счётчик

const button = document.getElementById('button');
const span = document.getElementById('span');

const Counter = function(){
    this.count = 0;
    this.increase = function(){
        this.count = this.count + 1
    }
}

const counter = new Counter()
span.innerHTML=counter.count;

button.addEventListener('click' (event) => {
    counter.increase()
    span.innerHTML = counter.count
})

// пример с кулбеком

const callPolice = () => {
    console.log('Call 02');
}

const alarm = (thiefs,callback) => {
    console.log(thiefs);
    if (thiefs < 0){
        return;
    }
    callback(thiefs)
}

for (let i =1; i <20; i++) {
    setTimeout(() => {
        alarm(i, callPolice)
    }, 100*i)
}

// рекурсия - самовызывающаяся функция

const array = [1,2,3,4,[5,6,[7,8]]]
const result = [];

const flattenArray = function(arr){
    for(let i = 0; i < arr.length; i++){
        const currentValue = arr[i]
        if(typeof currentValue !== 'number'){
            flattenArray(currentValue)
        }else{
            result.push(currentValue)
        }
    }
}
flattenArray(array)
console.log(result);

// объекты и массивы

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

console.log(object);

// цикл который смотрит что находится в объекте  
// console.log(property) - покажет ключи,
// console.log(object[property]) - покажет значения

// for (let property in object){
//     if(typeof object[property] === 'object'){
//         for(let nestedproperty in object[property]){
//             console.log(nestedproperty);
//         }
//     }
//     console.log(property);
// }

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

console.log(resultObjects);

// Массивы
const array = [12,'string', true,undefined, {name: 'Viktor'}]

// console.log(array[0]);

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
// students.push(studentThree)

// удаляет последнее значение
// students.pop()

// console.log(students);

const malesStudensts = [studentOne,studentTwo]
const femalesStudensts = [studentThree]
// 3 точки рзбивают массив на значение и кладут
const allStudents = [...malesStudensts, ...femalesStudensts]
// console.log(allStudents);

const tenGradeSystemStudents = [];


// нужно положить в него функцию, которая будет выполняться
// возвращает value, index, arr что есть кулбеком
// forEach тоже самое что и обічній for, только запись меньше
allStudents.forEach((value, index, arr) => {
    // console.log(value, index, arr);
    tenGradeSystemStudents.push({
        ...value,
        avgGrade: value.avgGrade * 2
    })
});
console.log(tenGradeSystemStudents);

// map

// мап собирает то что возвращено и передаёт сразу в новый массив. этот массив превратил в новый массив
const tenGradeSystemStudents = allStudents.map((value, index, arr) => {
    // console.log(value, index, arr);
    return{
        ...value,
        avgGrade: value.avgGrade * 2
    }
});
console.log(tenGradeSystemStudents);

// filter

// filter вщзвращает только тру и фолс
const redDiplomaStudent = allStudents.filter((value) =>{
    if(value.avgGrade < 5 ){
        return false
    }
    return true
})

// or const redDiplomaStudent = allStudents.filter((value) =>value.avgGrade === 5)
// true false
const numbers = [1,2,3];
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

// Dom Api and Dom Event

// Dom Api
// querySelectorAll ищет все объекты с классом и берет их в массив
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

// слушает то что первое в скобке, при нажатии, при наведении и т п
// второй параметр єто кулбек то, что происходит при нажатии, само собітие
// myIdButton.addEventListener('click', (event) => {
//     if(myIdButton.classList.contains('red')){
//         console.log('yes');
//         myIdButton.classList.remove('red')
//         myIdButton.classList.add('black')
//     }else{
//         console.log('no'); 
//         myIdButton.classList.remove('black')
//         myIdButton.classList.add('red')
//     }
// })
// classList можно проверить есть ли стиль,добавить или же удалить стили, посмотреть все стили

//дулает тоже самое, добавляе стиль и убирает стиль. ТОесть проверяет есть ли стиль, а потом удаляет прошедший и добавляет новый 
// myIdButton.addEventListener('click', (event) => {
//     myIdButton.classList.toggle('red')
// })

// toggle включатель\выключатель
// event можно создать отдельно и вставить в него другие функции объеденив все что хочешь
// target говорит где произошло нажатие, тоесть направляет чтоб понимало

const toggleElementColor = (element, color) => {
    element.style.color = color
    // лучше не использовать изменение стили, т к имеет высокую .. её не перебить обычными классами
}

const toggleElementText = (element, text) => {
    element.innerHTML = text
}

const handleMouseEnter = (event) => {
    const element = event.target;
    toggleElementColor(element, 'red')
    toggleElementText(element, 'Cool text')
}

const handleMouseLeave = (event) => {
    const element = event.target;
    toggleElementColor(element, 'black')
    toggleElementText(element, 'Click')
}

myIdButton.addEventListener('mouseenter', handleMouseEnter)
myIdButton.addEventListener('mouseleave', handleMouseLeave)


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

const students = [student1, student2, student3, student4]
const getLastStudent = (students) => {
    const lastStudent = students.pop();
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