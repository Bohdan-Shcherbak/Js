// чтобы убрать в строке гласные буквы, через реплейс заменям их на пробелы
let disemvowel = (str) => str.replace(/[aeiou]/gi, '')

function disemvowel(str) {
    return str
      .split('')
      .filter(letter => !vowels.includes(letter.toLowerCase()))
      .join('');
  }
    console.log(disemvowel("This Ywebsite is for losers LOL!"));

    function disemvowel(str) {
        var vowels = ['a', 'e', 'i', 'o', 'u'];
        
        return str.split('').filter(function(el) {
          return vowels.indexOf(el.toLowerCase()) == -1;
        }).join('');
      }
