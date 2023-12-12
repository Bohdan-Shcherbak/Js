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

element.addEventListener('click', myListenerCallback(1, 2))


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