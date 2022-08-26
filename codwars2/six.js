// Эта функция принимает только 2 значения 
function ResultObjects (objA,objB) {
    for(let key in objA){
      k = key;
      v = objA[key]
      // console.log(key);
     
      for( keytwo in objB){
        if(key === keytwo){
          // console.log('yes');
          objB[keytwo] = objA[keytwo] = v + objB[key] 
    
        }
      
      }
      // console.log(objA);
      // console.log(objB);
    }
    var objC = Object.assign(objA,objB);
    // console.log(objC);
    return objC
    
    }

    // Эта функция принимает каждое входящее значение и записывает его прибавляя
    function combain(obj){
      for(let key in obj){
        if(newObject.hasOwnProperty(key) === true){
          newObject[key] = obj[key]+newObject[key]
          console.log('yes');
        } else{
        newObject[key] = obj[key]
      }
    }
    console.log(obj);
    return newObject
    }
    combain({ a: 10, b: 20, c: 30 })
    console.log(newObject);
    combain({ a: 3, c: 6, d:30});
    console.log(newObject);

    // Эта функция принимает все аргументы и кладёт в новый объект

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
// .....................
      const combine = (...params) => params.reduce((a, b) => {
        for (const x in b) { a[x] = x in a ? a[x] + b[x] : b[x] };
        return a;
       }, {});
    

      //  Метод hasOwnProperty() возвращает логическое значение, указывающее, содержит ли объект указанное свойство.

// o = new Object();
// o.prop = 'существует';

// function changeO() {
//   o.newprop = o.prop;
//   delete o.prop;
// }

// o.hasOwnProperty('prop');   // вернёт true
// changeO();
// o.hasOwnProperty('prop'); 

// цикл перебирает все равгументы
// function sayHi() {
//   for (var i = 0; i < arguments.length; i++) {
//     alert( "Привет, " + arguments[i] );
//   }
// }