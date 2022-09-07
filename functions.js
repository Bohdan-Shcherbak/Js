const numbers = sum(1, 2, callbackFunk);
console.log(numbers)







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



// объекты и массивы

























****************************************************
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

