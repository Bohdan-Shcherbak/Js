
// const b = 2.4 % 1
function getDecimal(n){
//  const numbers = Math.ceil(n/1);
n =Math.abs(n);
const intermediateNumber = Math.floor(n/1);
 console.log(n);
 console.log(intermediateNumber);
  // const newNumber = (+n % 1).toFixed(1)*1;
  const newNumber = n - intermediateNumber
  return newNumber;
}
console.log(getDecimal(-1.2));
// console.log((+10.4 % 1).toFixed(1));
// console.log(parseInt((13111144411.862311823 / 1)))
// console.log(Math.round(13111144411.862311823 / 1));
// console.log(Math.ceil(13111144411.862311823 % 1))










// node testfunctions.js
