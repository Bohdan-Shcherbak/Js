// let a = 5; 
// console.log(++a); 
// console.log(a++);
// ++a увеличивает потом віводит, а нооборот сначало віводит а потом увеличивает

// от перемены мест слагаемых сумма не меняется». 
// Это один из базовых и интуитивно понятных законов арифметики, он называется коммутативным законом.
// console.log(a**10);
// console.log(10**a);

// operand1 operator operand2 = 34 + 10

// console.log('4' * a); выйдет перемноженое число
// const b = true, c = true
// console.log(!(!b&&!c));

// Функция называется детерминированной тогда, когда для одних и тех же входных параметров она возвращает один и тот же результат.
// например length('hexlet'); вернёт 6 сколько раз не вводи одно и тоже значение
// недетермированная например функция рандомного числа каждый раз будет выдавать другое значение, не смотря на то, что принимает одно и тоже число

// e кол-во нулей
let billion = 1e9;  // 1 миллиард, буквально: 1 и 9 нулей
// alert( 7.3e9 );  7.3 миллиардов (7,300,000,000)
let ms = 1e-6; // шесть нулей, слева от 1
// alert( 0xff );  255
// alert( 0xFF ); 255 (то же самое, регистр не имеет значения)
let u = 0b11111111; // бинарная форма записи числа 255
let k = 0o377; // восьмеричная форма записи числа 255

typeof Infinity === 'number';

// const greeting = `Hello ${name}`

// Camel case (camelCase) каждое слово с большой
const userLoginCount = 5;
// Pascal case (PascalCase) с большой и первое слово
class ExampleCustomComponent {};
// Snake case (snake_case) заменяет пробелы на символ подчеркивания
// подходит для именования полей в базах данных, или для именования статичных данных, хранящихся в JSON.
// "dark_olive_green": "#556B2F",
// Screaming snake case (SCREAMING_SNAKE_CASE) всё большими
const SECOND = 1000;
// Kebab case (kebab-case) через тире
// user-login-count

// Предикаты отвечают на какой-то вопрос и всегда (без исключений!) возвращают либо true, либо false.
// как правило, начинаются с префикса is, has или can

// isInfant() — «младенец ли?»
// hasChildren() — «есть ли дети?»
// isEmpty() — «пустой ли?»
// hasErrors() — «есть ли ошибки?»

const getGreetingMessage = (name, message = 'Hello') => {console.log(b);}

// Плюс + существует в двух формах: бинарный и унарный
// Унарный, то есть применённый к одному значению, плюс + ничего не делает с числами. Но если операнд не число, унарный плюс преобразует его в число.

// console.log({}=={}); false
// console.log(true-'hello'); NuN
// console.log(typeof typeof (function(){})());string
// console.log(typeof alert); undefined
// console.log(typeof 1n);bigint
// console.log(null==undefined);  true
// console.log(0 || 1 && 2 || 3); 2
// let v = (!!'0'); console.log(v);

// console.log(1.15 + 2.30); none of them
// console.log(22 - '2'); 20
// console.log('80' + 71.2); при отнимании строки, идет отнимание, а при прибавлении в строку

// console.log(0 && '' || []);

// console.log(true+'hello');

// node js-testq3.js


// function Product(name, price) {
//     this.name = name;
//     this.price = price;
  
//     if (price < 0) {
//       throw RangeError('Нельзя создать продукт ' +
//                         this.name + ' с отрицательной ценой');
//     }
//   }
  
//   function Food(name, price) {
//     Product.call(this, name, price);
//     this.category = 'еда';
//   }
  
//   Food.prototype = Object.create(Product.prototype);
  
//   function Toy(name, price) {
//     Product.call(this, name, price);
//     this.category = 'игрушка';
//   }
  
//   Toy.prototype = Object.create(Product.prototype);
  
//   var cheese = new Food('фета', 5);
//   var fun = new Toy('робот', 40);

"use strict"
const details = {
    sms: 'Hello',
}
function getSms() {
    return this.sms;
}
// console.log(getSms.call(details));
// let f = function(a,b) { return a+b }
// let f = new Function("a", "b", "return a+b")


function foo(a,b){
    return a*b
}

const bar = foo.bind(null,2)
bar(2)

// for (var i = 0; i < 3; i++) {
// setTimeout(function(){
//     console.log(i);
// },1000)
// } 333

// for (let i = 0; i < 3; i++) {
// setTimeout(function(){
//     console.log(i);
// },1000)
// } 0 1 2
const details2 = {
    // name:'John'
}

function getmes(mes){
    return `${mes} ${this.name}`;
}
// console.log(getmes.apply(details2, ['Hello']));



// "use strict"
// function printttMessage(){
//     console.log(this);
    
// }

// console.log(printttMessage());

// number
function rfr () {
return {bar:1}
}
// console.log(typeof rfr().bar);
var name = 'Joghn'

function gg (){
    console.log(name);
}

setTimeout(() => {
    let name = 'Peter';
    gg();
},1000)

// console.log(setTimeout);

