// если буквы повторяются, выдаст фолс
// сделал все большими, сделал сет, который убирает одинаковые буквы и сравнил длины Гениально
function isIsogram(str){
    return new Set(str.toUpperCase()).size == str.length;
  }

  function isIsogram(str){
    str = str.toLowerCase();
    let str1 = '';
    let result;
  for(let i = 0;i<=str.length;i++){
    if(str1.includes(str[i]) == true){
      result = false;
      console.log('yes');
      break;
    } else {
      result = true;
      console.log('no');
  
    }
    str1 += str[i];
  
    console.log(str1);
  }
  return result
  }

  function isIsogram(str){
    var i, j;
    str = str.toLowerCase();
    for(i = 0; i < str.length; ++i)
      for(j = i + 1; j < str.length; ++j)
        if(str[i] === str[j])
          return false;
    return true;
  }