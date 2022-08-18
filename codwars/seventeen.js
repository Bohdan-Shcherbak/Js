// если чётное, то умножить на 8, если нечет, то на 9

// const simpleMultiplication = (number) => { if(number % 2 == 0){return number*8} else{return number*9}}
const simpleMultiplication = (number) => { return number % 2 == 0 ? number*8 : number*9}