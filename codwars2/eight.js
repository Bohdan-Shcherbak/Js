// функция ищет несоотвествующие по битово и выписывает их, но если есть совпадения то не работает
function findMissing(arr1, arr2) {
    var diff = arr1.filter((element)=>!~arr2.indexOf(element));
     return diff.concat(arr2.filter((element)=>!~arr1.indexOf(element))).join('')*1;
   }


// сделает отрицательным и потом, если такого нет, сделает обратно положительным, но только если не будут отрицательные в задаче
// или же прибавить строку и потом превратить обратно в число   
function diff(arr1, arr2) {
   
    for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < i; j++){
      if (arr1[j] === arr1[i]) {
        console.log('yes');
          arr1[i] = arr1[i]*-1
        }
      }
    }
    for (let i = 0; i < arr2.length; i++) {
      for (let j = 0; j < i; j++){
      if (arr2[j] === arr2[i]) {
        console.log('yes');
          arr2[i] = arr2[i]*-1
        }
      }
    }
    // console.log(arr1);
    let result = 0;
    for(let i = 0; i<arr1.length; i++){
      if(arr2.includes(arr1[i]) == false){
        result = arr1[i]<0?arr1[i]*-1:arr1[i]
      }
    }
    return result
    }

// простой вариант, сортировка, потом перебор всех цифр и если есть разные, то возвращает
    const findMissing = (arr1, arr2) => {
        arr1 = arr1.sort();
        arr2 = arr2.sort();
        console.log(arr1);
        console.log(arr2);
        for(let i = 0; i < arr1.length; i++){
          if(arr1[i] != arr2[i]) return arr1[i];
        }
      }

//   просто отнять
    const sum = arr => arr.reduce((a, b) => a + b, 0);

const findMissing = (arr1, arr2) => sum(arr1) - sum(arr2);