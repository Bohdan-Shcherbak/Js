function isDivideBy(number, a, b) {
    if(Number.isInteger(number) && Number.isInteger(a) && Number.isInteger(b) == true){
       if(Number.isInteger(number / a) &&  Number.isInteger(number / b) ==  true ){
        return true
       } else{return false}
      } else{return false}
    }

    console.log(isDivideBy(-12, 2, -5));

    // проверить, делится ли целое число на оба целых числа a и b.