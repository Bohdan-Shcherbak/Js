let rrrr = [0, false, 1, 0, 1, 2, 0, 0, 0, 1, 3, "a", 0]
let newarr = [];

// function moveZeros(arr) {
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === 0) {
//             count++;
//         }
//         else {
//             newarr.push(arr[i]);
//         }
//     }
//     for (let j = 0; j < count; j++) {
//         console.log('yes');
//         newarr.push(0)
//     }
// }

const moveZeros = function moveZeros(arr) {
    return [
        ...(arr.filter(n => n !== 0)),
        ...(arr.filter(n => n === 0))
    ];
}
// moveZeros(rrrr);
console.log(moveZeros(rrrr));