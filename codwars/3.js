// Сделать чтоб слово начиналось с большой буквы
function capitalizeWord(word) {
    return word[0].toUpperCase() + word.substring(1);
    
    }
    
    console.log(capitalizeWord('word'));
    
    String.prototype.firstLetterCaps = function() {
      return this.charAt(0).toUpperCase() + this.slice(1);
    }
    
    console.log('word'.firstLetterCaps());

    const capitalizeWord = (word) => word[0].toUpperCase() + word.substring(1);

    