
function getDecimal(n){
    n = Math.abs(n);
    const newNumber = (+n % 1).toFixed(1)*1;
    return newNumber;
}

  function getDecimal(n){
    n =Math.abs(n);
    const intermediateNumber = Math.floor(n/1);
      const newNumber = n - intermediateNumber
      return newNumber;
}