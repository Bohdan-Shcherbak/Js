// Необходимо 2 числа разделить на цифры и прибавить по отдельности
function add(num1, num2) {
// т к наши числа должны быть положительными и целыми, делаем проверку
if(num1 >= 0 || num1 == Number.isInteger || num2 >= 0 || num2 == Number.isInteger){
// далее делаем из чисел массив
// Преврааем в десятичное число, разделяем на массив, создаём новый массив с помощью мап
// parseInt(int, 10)); делает число в первом параметре по системе второго
const arr1 = num1.toString(10).split('').map(int => parseInt(int, 10));
const arr2 = num2.toString(10).split('').map(int => parseInt(int, 10));
// далее вычисляем максимальный размер массива
const arrLength = arr1 > arr2 ? arr1.length : arr1 < arr2 ? arr1.length : arr1.length
// создаём цикл, который будет добавлять нули в массв недостающие
for (let i = 0; arr1.length !== arr2.length; i++){
    if(arr1.length > arr2.length){
      arr2.unshift (0);
    } if (arr1.length < arr2.length){
      arr1.unshift (0);
    }
  }
// создаём пустой массив, куда будем записывать результат
  const arr3 = [];
// цикл который будет выполняться пока будет равен  длинне массива
// при каждой итерации будет пушиться в новый массив по индексу и приплюсовываться
  for(i=0; i < arr1.length; i++){
    arr3.push(arr1[i]+arr2[i])
}

return arr3.join('') * 1

} else {return 0}
}
//  или можно сделать так
var arr3 = arr1.map(function(value, index){ return value + arr2[index] })
