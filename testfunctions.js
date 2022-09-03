function maxTriSum(numbers){
const newSet = new Set(numbers);
const newArr = [...newSet].sort((a,b) => b - a);
let sumResult = 0;
for(let i = 0; i < 3; i++){
  sumResult = newArr[i] + sumResult;
}
return sumResult
}









console.log(maxTriSum([-14,-12,-7,-42,-809,-14,-12]));
// node testfunctions.js
