function highAndLow(numbers){
    const newNumbers = numbers.replace(/[' ']/g, ',').split(',');
    for(let i = 0; i<newNumbers.length; i++){
        newNumbers[i] = Number(newNumbers[i])
    }
    const result = newNumbers.sort((a,b) => b - a)
    console.log(newNumbers);
    return result[0] + ' ' + result[result.length-1]
}


function highAndLow(numbers){
    numbers = numbers.split(' ').map(Number);
    return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
  }