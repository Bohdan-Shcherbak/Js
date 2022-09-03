// функция вохвращает 3 саміх больших чмсла и сумирут
function maxTriSum(numbers){
    const newSet = new Set(numbers);
    const newArr = [...newSet].sort((a,b) => b - a);
    let sumResult = 0;
    for(let i = 0; i < 3; i++){
      sumResult = newArr[i] + sumResult;
    }
    return sumResult
    }
// rest берет все аргументы до конца 1,2,3 ...456789
    const maxTriSum = numbers => {
        const [a,b,c,...rest] = [...new Set([...numbers])].sort((a,b)=>b-a)
        return a+b+c
      }