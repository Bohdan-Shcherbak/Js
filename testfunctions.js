
// function findMissing(arr1, arr2) {
//   let numberr = 0;
//   for(let i = 0;i<arr1.length;i++){
//     // for(let j = 0; j<arr1.length;j++){
//       if(arr1[i] !== arr2[i]){
//         console.log('yes');
//         numberr = arr1[i]
//       } else{console.log('no');}
//     }
//   // }
// return numberr
// }


// var days = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
// var work_days = ["Понедельник", "Вторник", "Среда", "Четверг","Пятница", "Рабочие дни"];

// document.body.innerText = JSON.stringify( diff(days, work_days));

// function diff( arr1, arr2) {
//  var newArr1 =  new Set(arr1);
//  var newArr2 =  new Set(arr2);
//  var resultArr1 = [...newArr1];
//  var resultArr2 = [...newArr2];

//  console.log(resultArr1);
//  console.log(resultArr2);
//   var diff = resultArr1.filter((element)=>!~resultArr2.indexOf(element));
//   console.log(diff);
//   return diff.concat(resultArr2.filter((element)=>!~resultArr1.indexOf(element))).join('')*1;
// }




// function diff(arr1, arr2) {
// // const comparison = arr1.length>arr2.length?arr1:arr2
// // console.log(comparison);
// for (let i = 0; i < arr1.length; i++) {
//   for (let j = 0; j < i; j++){
//   if (arr1[j] === arr1[i]) {
//     console.log('yes');
//       arr1[i] = arr1[i]+''
//     }
//   }
// }
// for (let i = 0; i < arr2.length; i++) {
//   for (let j = 0; j < i; j++){
//   if (arr2[j] === arr2[i]) {
//     console.log('yes');
//       arr2[i] = arr2[i]+''
//     }
//   }
// }
// // console.log(arr1);
// let result = 0;
// for(let i = 0; i<arr1.length; i++){
//   if(arr2.includes(arr1[i]) == false){
//     result = Number(arr1[i])
//   }
// }
// return result
// }



const findMissing = (arr1, arr2) => {
  arr1 = arr1.sort();
  arr2 = arr2.sort();
  console.log(arr1);
  console.log(arr2);
  for(let i = 0; i < arr1.length; i++){
    if(arr1[i] != arr2[i]) return arr1[i];
  }
}

console.log(findMissing([4, 3, 8, 3, 8], [8, 8, 3, 4]));











// node testfunctions.js
