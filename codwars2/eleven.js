// Принимает 3 объекта, делает из них 3 массива, элементы которых суммирует. После этого идёт функция с проверками и вставляется в текст
function whoseBicycle(diary1, diary2, diary3) {
    const number1 = Object.values(diary1).reduce((a, b) => a + b, 0);
    const number2 = Object.values(diary2).reduce((a, b) => a + b, 0);
    const number3 = Object.values(diary3).reduce((a, b) => a + b, 0);
    console.log(number2);
  
    function bigNumber (number1,number2,number3){
      let result;
      if(number1 > number2 && number1 > number3){
        result = 'first'
      } else if(number2 > number1 && number2 > number3 || number1 == number2){
        result = 'second'
      } else if(number3 > number1 && number3 > number2 || number3 == number2 || number3 == number1 || number3 == number2 == number1){
        result = 'third'
      } else {result = 'third'}
      number1 > number2 && number1 > number3?result = 'first': number2 > number1 && number2 > number3 ? result = 'second' : number3 > number1 && number3 > number2 ?  result = 'third' : result = 'third'
  return result
  }
    return 'I need to buy a bicycle for my '+ bigNumber(number1,number2,number3) +' son.'
  }




  
  function whoseBicycle(d1, d2, d3) {
    var s1=0, s2=0, s3=0;
    for (var key in d1)
      s1+=d1[key];
    for (var key in d2)
      s2+=d2[key];
    for (var key in d3)
      s3+=d3[key];
    return s1>s2&&s1>s3?"I need to buy a bicycle for my first son.":s2>s1&&s2>s3?"I need to buy a bicycle for my second son.":"I need to buy a bicycle for my third son.";
  }