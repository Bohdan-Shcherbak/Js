// Полученный год округлить до века

const yearf = (year) =>{
    const result = Math.ceil(year / 100);
    return result;
   }
   console.log(yearf(89));
   
   console.log(Math.floor(num1/num2)); // 3 (округление в меньшую сторону)
   console.log(Math.ceil(num1/num2)); // 4 (округление в большую сторону)
   console.log(Math.round(num1/num2)); // 3 (математическое округление)
   console.log(+(num1/num2).toFixed(0)); // 3 (математическое округление)
   console.log(parseInt((num1/num2))); // 3 (приведение к числу, будет отброшена дробная часть)