
function findMissing(arr1, arr2) {
  let numberr = 0;
  for(let i = 0;i<arr1.length;i++){
    // for(let j = 0; j<arr1.length;j++){
      if(arr1[i] !== arr2[i]){
        console.log('yes');
        numberr = arr1[i]
      } else{console.log('no');}
    }
  // }
return numberr
}





// node testfunctions.js



console.log(findMissing([1,2,3],[1,3]));