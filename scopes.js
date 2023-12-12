// scopes - global & local уровень видимости. Ищет в своём скоупе, тоесть самое ближнее, а потом дальше по уровням.
// global всё что вне функции вне кавычек
// Если задано внутри тега скрипт в штмл, то это глобально
// для web глобальный скоуп это window
// в node.js есть объект global
// блок {}
// var всплывает в самый верх, а let and const только вверх функции или блока
 // Hoisting всплытие переменных. Все обьявления переменных вверх скоупа всплывают.
// ************************************
// space()
// function space(){
//     console.log(loki);
// }

// var loki = 'god'
// *****************************************
// прочитает код по-другому
var loki
function space(){
        console.log(loki);
    }
    space();
loki = 'god'
// Потому выдаст Undefined
// функция тоже поднялась вверх всплыла
// *****************************************
// var Loki = 'god';
// function planet(){
//     console.log(Loki);
//     Loki = 'human'
//     console.log(Loki);
// }
// planet()
// На самом деле выглядит так:
var Loki = 'god';
function planet(){
    var Loki;
    console.log(Loki);
    Loki = 'human'
}
planet()
// В функции нет локально этой переменной, но обьявление её вверх идёт, т к оно обьявлено ниже и инициализировано
// потому Undefined а потом уже human

// namespace для того чтобы все модули могли иметь доступ к глобальной переменной, общее что-то.
window.app = {};
window.app.emiter = {}

// заключение про var
function fun(){
    console.log(a,b,c);//undefined 3 раза
    var a = 'a'
    if(true){
        var c = 'c'
    }
    var b = 'b'
    console.log(a,b,c); // выдаст 3 значениея, т к все обьявляются в начале функции
}
fun()

// Функции
// Метод - это функция в объекте
const obj = {
    left:10,
    add: function(right){
        this.left += right
        return this.left
    },
}
// this всегда ссылается на тот объект, которым вызвана функция
// создание конструктора функции объекта
function Pie(radius, height){
    this.radius = radius;
    this.height = height;
}
const pie = new Pie(20,5);
// другой конструктор функции
const add = new Function('left', 'right','return left + right')
add(1,41)
// Функция єто объект можно добавлять с помощью точки
// функцию можно возвращать и переменную сделать функций, в иотге обратиться к переменной чтобы выполнить функцию
// Функция это глагол, называть как действие
// arguments не массив
// ...args это масив в котором все аргументы
// ... спред оператор

Array.isArray //проаеряет есть ли оно массив

// data

// function cookPie(){
//     console.log(this); window
// }
// function cookStrictPie(){
//     console.log(this); undefined
// }
// в объекте ссылается на объект
// ссылается на глобальный объект this

// this можно заменить
// call
// function cookPie(){
//     console.log('#cookPie', this.type, this.radius);
// }

// const LemonPie = {type:'Lemon', radius:9, cook: cookPie};
// LemonPie.cook();

// const chokoPie = {type: 'choko', radius: 17}
// LemonPie.cook.call(chokoPie);
// вместо cookPie подставили, поменяли на chokoPie
// подменяет функцию и передаёт параметры
// apply
// эдентично, только в call передавать через запятую параметры, а тут как массив [14,false]
const numbers = [1,13,8,5,3]
// console.log(Math.max.apply(Math,numbers));
// console.log(Math.max.call(Math,...numbers));
// console.log(Math.max(...numbers));

// bind возвращает новую функцию
function cookPie(radius,slice){
    console.log('#cookPie', this.type, radius, slice);
}

const LemonPie = {type:'Lemon', radius:9};
const cookLemonPie = cookPie.bind(LemonPie)
cookLemonPie(47,true)
const cookHugeLemonPie = cookLemonPie.bind(LemonPie, Number.MAX_SAFE_INTEGER)
cookHugeLemonPie(false)

// scope бывает statuc(lexical) and dynamic
// Статический сразу виден в каком скоупе, а динамический только после вызова
// динамическая this где

// в стрелочной функции, если только ретурн, то можно убрать слово и скобки
// const cookPie = pie =>console.log([pie]);

// const object = pie => {
//     return {error:'dssgsdgf'}
// }
// то можно так
const object = pie => ({error:'kasdfm'})

// *************************************
const pies = [
    {type: 'lemon', radius: 1},
    {type: 'choko', radius: 4},
    {type: 'lemon', radius: 2}
];
pies.filter(function(pie){
    return pie.radius>2;
}).map(function(pie){
    return { type:pie.type, crashed:true}
});
// Вместо такого можно напистаь короче

pies
.filter(pie => pie.radius >2)
.map(pie => ({type: pie.type,crashed:true}))

// setTimeOut откладывает выполнение функции на милисекунды

"use strict"
const details = {
    mes: 'Hello'
}

function getmes(){
return this.mes
}

console.log(getmes.call(details));
// call пример

name = 'jogh'
function print(){
    console.log(name);
}

setTimeout(() => {
    let name = 'peter'
    print();
},1000)
// выходит за свой скоуп так как не находит имя в своём, а значит выходит в глобальную, а там есть имя


function foo(){
    return {bar:1}
}
console.log(typeof foo().bar);//number

// "use strict" не даёт уйти в окно
function gett(){
    return this
}
console.log(gett());

console.log(mes);
let mes = 'hello'
// если var то будет undefined т к она объявлена, а так она обьявляется позже

function foo(){
    console.log(arguments);
}
foo(3,2,1)

// функция полностью поднимается вверх с телом
print();
function print(){
    console.log('hello');
}
