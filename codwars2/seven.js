// Функция ищет нужную цифру в числах от 0 до п

function nbDig(n, d) {
    let numberOfDigits = 0;
      for(let i = 0; i<=n;i++){
    let square = i**2 + '';  
      for(let j = 0; j<=square.length; j++){
    if(square[j] == d){
        numberOfDigits++
        }
      }  
    }
      return numberOfDigits
    }

    // для нахождения просто если есть в строке цифра, в диапазоне до 10, тоесть для маленьких цифр
    function nbDig(n, d) {

        let numberOfDigits = 0;
        for(let i = 0; i<=n;i++){
      
          let square = i**2 + '';
      
        if (square.indexOf(d) !== -1){
          numberOfDigits++;
        }
      }
      return numberOfDigits
      }

// split разделил строку на части, которые разделяет д, тоесть 1
      function nbDig(n, d) {
        var o = '';
          for(var i = 0; i <= n; i++){
            o += Math.pow(i, 2);
            console.log(o);
          }
        return o.split(d).length-1
        console.log(o);
      
      }
// вычислит кол-во пробелов их на 1 меньше чем размер массива
      console.log(['abcdefgh', 'jkl', 'opq'].length-1);

    //   Метод Math.pow() возвращает основание, возведённое в степень показатель, то есть, значение выражения основаниепоказатель.

    // ищет буквы в строке
    // Метод indexOf() возвращает индекс первого вхождения указанного значения в 
    // строковый объект String, на котором он был вызван, начиная с индекса fromIndex. 
    // Возвращает -1, если значение не найдено.
//     "Синий кит'.indexOf('Синий') !== -1; // true
// 'Синий кит'.indexOf('Голубой') !== -1; // false

