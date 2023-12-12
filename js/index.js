// ***********************************************************************
// Стиль названия переменных
// CamelCase - горбатій стиль, все с большой буквы
// lowerCamelCase - все с большой, кроме первой

// Имена констант с заранее известными значениями, которые не меняются вообще принято писать:
// const BLOCK-SIZE = 25, const COLOR_RED="#F00"
//// ***********************************************************************
// тип данных bigint = 24580945890428542098n
// ***********************************************************************
// бинарные операторы - применяются к двум операндам
// let Number = 30-6
// унарный только к одному
// let Number = -30
// Унарный оператор может сделать из строки число
// console.log(+string1 + +string2); результатом будем число
// Также с помощью него можно сокращенно добавлять и подобное - users*=2
// ***********************************************************************
// Инкременты ++,--
// i++ = i + 1 = i +=1
// let i = 0
// Посфиксная форма і++
// let newi = i++
// newi будет равна всё ещё 0, т к передано быо значение 0, а прибавляет потом
// Префиксная форма ++i будет равна 1, т к оно сначало увеличило число, потом выдало
// ***********************************************************************
// нестрогое равенство == при сравнении изменяет к общему типу, строгое равенство === не изменяет, тоесть проверяет тип

// При умножении на строку идёт умножение
// let Number = 10 * "80" будет Число 800
// ***********************************************************************
// приоритеты логичесикх операторов
// ! имеет найвысший приоритет
// && > ||
// ***********************************************************************
// Использование логическиъ операторок как if
// let admins = 0,users=5
// admins>users || users++
// если в первом выражении мы получаем фолс, то переходим к следующему увеличивая переменную,
// если первое выражение правда, то дальше читаться не будет
// Другой пример
// let userName = '', userNickName = 'text'
// let user = userName || userNickName || 'notText'
// В этом примере userName равно фолс, потому сравнение идёт дальше,
// если userNickName имеет текст, то тру и будет выведено значение userNickName,
//  если нет то фолс и сравнение пойдёт дальше и будет выведено 'notText'
// ***********************************************************************
// ОПЕРАТОР сравнения с null "??" - возвращает первый операнд если он не Null или Undefined
// let name;
// console.log(name ?? 'text');
// Если name имеет тип нул или как сейчас не имеет значения, то выдаст фолс и перейдёт к следующему, а значит выведет текст
// если бы name было равно чему-то кроме нул или андф выдало бы его значение
// ***********************************************************************

// ЦЫКЛЫ
// цикл while в скобках имеет тольок сравнение, цикл будет действовать пока идётсравнение, и в теле добавление
// let i = 0;
while (i < 3) { // выводит 0, затем 1, затем 2
    alert(i);
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
    alert(i);
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
    alert(i); // 0, 1, 2
}

let j = 0;
for (; j < 3;) {
    alert(j++);
}

// прерывание цикла break
// if (!value) break; // (*)

// Директива continue – «облегчённая версия» break. 
// При её выполнении цикл не прерывается, а переходит к следующей итерации (если условие все ещё равно true).
// if (i % 2 == 0) continue;

// Метка имеет вид идентификатора с двоеточием перед циклом:
outer:
for (let i = 0; i < 3; i++) { }
// метка нужна для того, чтобы закрыть цикл любой волоэенности

// Тоже самое что if(){}if(){}else. d<3?2:0
function rentalCarCost(d) { return d < 3 ? d * 40 : d >= 7 ? d * 40 - 50 : d >= 3 ? d * 40 - 20 : 0; }
// или через сase
let a = 2 + 2;

switch (a) {
    case 3:
        alert('Маловато');
        break;
    case 4:
        alert('В точку!');
        break;
    case 5:
        alert('Перебор');
        break;
    default:
        alert("Нет таких значений");
}



// *****************************************************************

// Для тоо чтоб превратить введенное число в слово, надо сделать массив и сопоставить число с массивом
// для первого десятка [number-1]
// для второго десятка number - [11]
// для больших десятков надо обхеденить 2 массива. в первом рес -2 значит со второго десятка, тоесть с двадцати.
function switchItUp(number) {
    var arr = ['один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять']
    var arr2 = ['одинадцать']
    var arr3 = ['двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят']
    var b = number % 10;
    var res = arr3[Math.floor(number / 10) - 2];

    return res + ' ' + arr[b - 1];
}
//   /////////////////////////////////////////////


// из объекта делает массив, в котором прибавляет ключи, а значения 0
const number1 = Object.values(diary1).reduce((a, b) => a + b, 0);
//   //////////////////////////


// Массив с массивами сделать массивом с обїектами
function colourAssociation(array) {
    let newArr = [];
    for (let key of array) {
        let k = key[0];
        let v = key[1];
        newArr.push({
            [k]: v
        });
    }
    return newArr;
}
//   /////////////////////////////////
// из массива массивов в массив объектов
const colourAssociation = array => array.map(([colour, association]) => ({ [colour]: association }))
function colourAssociation(array) {
    return array.map(([k, v]) => ({ [k]: v }))
}
// //////////////////

// Необходимо 2 числа разделить на цифры и прибавить по отдельности
var arr3 = arr1.map(function (value, index) { return value + arr2[index] })
// .....................

// Function Declaration – функция, объявленная в основном потоке кода.
// Function Expression – объявление функции в контексте какого-либо выражения, например присваивания.

// Function Declaration не работает в if
function sum(a, b) {
    return a + b;
}
// Function Expression
var sum = function (a, b) {
    return a + b;
}

// Основное отличие между ними: функции, объявленные как Function Declaration, создаются интерпретатором до выполнения кода.

// Поэтому их можно вызвать до объявления

// А Function Expression создаются в процессе выполнения выражения, в котором созданы, в данном случае – функция будет создана при операции присваивания sayHi = function...

// function стрелочкая
// Стрелочніе функции не могут делать конструкторі

const func = (a, b) => a + b;

// arguments в стрелочной выйзвать нельзя

// Существует ещё один способ создания функции, который используется очень редко
// Он позволяет создавать функцию полностью «на лету» из строки, вот так:
var sum = new Function('a,b', ' return a+b; ');

var resultt = sum(1, 2);
alert(resultt); // 3
// То есть, функция создаётся вызовом new Function(params, code):

// конструктор принимает значения и делает с ними что-то. Через зис управляются действия. Создаём переменную, прогоняем через конструктор, задавая значения.

// пример конструктора
// const myConstructor = function(name,age){
this.name = name;
this.age = age;

this.getName = function () {
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

const array = [1, 2, 3, 4, [5, 6, [7, 8]]]
const resultу = [];

const flattenArray = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        const currentValue = arr[i]
        if (typeof currentValue !== 'number') {
            flattenArray(currentValue)
        } else {
            resultу.push(currentValue)
        }
    }
}

//   //////////////////////////////////////////
// объекты и массивы

// объекты

const object = {
    name: 'Victor',
    age: 32,
    passportData: {
        number: 7768,
        id: '7768id'
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

//   //////////////////////////////////////////////////////
//   цикл который смотрит что находится в объекте  
console.log(property)// покажет ключи,
console.log(object[property])// покажет значения

for (let property in object) {
    if (typeof object[property] === 'object') {
        for (let nestedproperty in object[property]) {
            console.log(nestedproperty);
        }
    }
    console.log(property);
}

for (let property of object) {
}

const object2 = {
    age: 54
}

const resultObjects = {

}

for (let key in object) {
    if (object2[key]) {
        resultObjects[key] = object2[key] + object[key]
    }
}
// ////////////////////////////////////

// Массивы
const arrayy = [12, 'string', true, undefined, { name: 'Viktor' }]

const studentOne = {
    name: 'Vasya',
    avgGrade: '4'
}

const studentTwo = {
    name: 'Petya',
    avgGrade: '5'
}

const students = [studentOne, studentTwo]

// добавляет в конец - мутирует, изменяет
students.push(studentThree)

// удаляет последнее значение
students.pop()

const malesStudensts = [studentOne, studentTwo]
const femalesStudensts = [studentThree]
// 3 точки рзбивают массив на значение и кладут
const allStudents = [...malesStudensts, ...femalesStudensts]

// forEach тоже самое что и обічній for, только запись меньше
allStudents.forEach((value, index, arr) => {
    // console.log(value, index, arr);
    tenGradeSystemStudents.push({
        ...value,
        avgGrade: value.avgGrade * 2
    })
});

//   ////////////////////
const handleClick = (event) => {
    // classList можно проверить есть ли стиль,добавить или же удалить стили, посмотреть все стили
    console.log(myIdButton.classList);//cписок классов, которіе имеет кнопка, єто массив
    if (myIdButton.classList.contains('red')) {
        console.log('yes');
        myIdButton.classList.remove('red')
        myIdButton.classList.add('black')
    } else {
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
// ////////////////////////////////////
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

const func6 = (a, b) => {
    const age = 10;
    let width;
    const getWidth = (widthResult) => {
        width = widthResult;
    }
    func5(1, getWidth)
    console.log(width);
}
// *****************************************************************

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
let kr = 0o377; // восьмеричная форма записи числа 255

// ///////////////////////

// Camel case (camelCase) каждое слово с большой
const userLoginCount = 5;
// Pascal case (PascalCase) с большой и первое слово
class ExampleCustomComponent { };
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