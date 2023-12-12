function duplicateEncode(word){
    let result = '';
    const newWord = word.toLowerCase().split('');
  mainWord = newWord.reduce((previousValue, currentValue) => {
    let mainNumber = 0;
    for (let i = 0; i < newWord.length; i++) {
     if(newWord[i] == currentValue) {mainNumber++;};
    }
    if(mainNumber >1){
      result += ')'
    } else {result += '('}
    mainNumber = 0;
     return previousValue + currentValue
  },0)
  return result
  }
  
  console.log(duplicateEncode('elSsetgerd'));
//   ******************************************************
function duplicateEncode(word){
    return word
      .toLowerCase()
      .split('')
      .map( function (a, i, w) {
        return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
      })
      .join('');
  }
//   ****************************************************
function duplicateEncode(word){
   
    var unique='';
    word = word.toLowerCase();
    for(var i=0; i<word.length; i++){
        if(word.lastIndexOf(word[i]) == word.indexOf(word[i])){
            unique += '(';
        }
        else{
            unique += ')';
        }
    }
    return unique;

}