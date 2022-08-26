// Массив с массивами сделать массивом с обїектами
function colourAssociation(array){
    let newArr = [];
        for(let key of array){
        let k = key[0];
        let v = key[1];
        newArr.push({
            [k]:v
        });
    }
    return newArr;
}




console.log(colourAssociation([["red", "energy"],["yellow", "creativity"],["brown" , "friendly"],["green", "growth"]]));


function colourAssociation(arr){
    const flattenArray = [];
  for (let i = 0; i < arr.length; i++) {
    const currentValue = arr[i];
  if(typeof arr[i][i] !== 'string'){
    const flat = arr[i].flat(Infinity)
    flattenArray.push(flat);
  }else {
    flattenArray.push(currentValue);
    }
  }
    const ourObject = Object.fromEntries(flattenArray);
    const newArray = Object.entries(ourObject)
    .map(entry => ({[entry[0]]: entry[1]}));
    
  return newArray;
   }

   const colourAssociation = array => array.map(([colour, association]) => ({[colour]:association}))

   function colourAssociation(array){
    return array.map(x => ({ [x[0]]: x[1]}));
  }

  function colourAssociation(array){
    var res = [];
    array.forEach(i => res.push({[i[0]]: i[1]}));
    return res;
  }

  function colourAssociation(array){
    return array.map(([k, v]) => ({[k]: v}))
  }
