const number = (x) => {
    if(x >= 5){
        return '1'
    } else {
        return '0'
    }
}
const fakeBin = (x) => {
return x.replace(/[0-9]/g, number);
}
console.log(fakeBin(''));


// возвращает разделенную строку на массив, далее создаёт на примере х новый массив с принимающим значением п, где меньше или больше пяти
// join объеденяет массив обратно, противоположное split
function fakeBin2(x) {
    return x.split('').map(n => n < 5 ? 0 : 1).join('');
}