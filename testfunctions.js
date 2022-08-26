// const objA = { a: 10, b: 20, c: 30 };
// const objB = { a: 3, c: 6, d: 3 };





function combain(){
  var newObject = {};

  for (var i = 0; i < arguments.length; i++) {
    let entranceObj =  arguments[i]
    console.log(entranceObj);

    for(let key in entranceObj){
      if(newObject.hasOwnProperty(key) === true){
        newObject[key] = entranceObj[key]+newObject[key]
        console.log('yes');
      } else{
      newObject[key] = entranceObj[key]
      console.log('no');

      }
    }
  }
  // var newObject = {};

    return newObject

  };
//   if(objB !== undefined){
//     for(let key in objB){
//       if(newObject.hasOwnProperty(key) === true){
//         newObject[key] = objB[key]+newObject[key]
//         console.log('yes');
//       } else{
//       newObject[key] = objB[key]
//       }
//     }
//   };
// if(objC !== undefined){
//     for(let key in objC){
//       if(newObject.hasOwnProperty(key) === true){
//         newObject[key] = objC[key]+newObject[key]
//         console.log('yes');
//       } else{
//       newObject[key] = objC[key]
//       }
//     }
//   };
//   if(objD !== undefined){
//     for(let key in objD){
//       if(newObject.hasOwnProperty(key) === true){
//         newObject[key] = objD[key]+newObject[key]
//         console.log('yes');
//       } else{
//       newObject[key] = objD[key]
//       }
//     }
//   };



// console.log(objA,objB,objC,objD);
// return newObject
// }
console.log(combain({a: 10, b: 20, c: 30},{ a: 3, c: 6, d: 3 },{ a: 5, d: 11, e: 8 },{ c: 3 }))
// );
// console.log(newObject);
// combain({ a: 3, c: 6, d:30});
// console.log(newObject);













// function ResultObjects (objA,objB) {
// for(let key in objA){
//   k = key;
//   v = objA[key]
//   // console.log(key);
 
//   for( keytwo in objB){
//     if(key === keytwo){
//       // console.log('yes');
//       objB[keytwo] = objA[keytwo] = v + objB[key] 

//     }
  
//   }
//   // console.log(objA);
//   // console.log(objB);
// }
// var objC = Object.assign(objA,objB);
// // console.log(objC);
// return objC

// }
// console.log(ResultObjects({ a: 10, b: 20, c: 30 },{ a: 3, c: 6, d: 3 }));












// node testfunctions.js





