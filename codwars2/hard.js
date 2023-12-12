// const isInteresting = 1335, [1337, 256];
// const number = 1335;
console.log(isInteresting(01234, []));
function isInteresting(number, arr) {
    const newnumber = number.toString().split('').map(Number);
    const newnumberStr = number.toString();
    let counterApproximateReturn = 0;
    console.log(number);
    if (number > 99) {
        // console.log('aga');
        if (arr) {
            for (let i = 0; i < arr.length; i++) {
                const element = arr[i].toString();
                if (element.length == newnumberStr.length) {
                    let numberLess = arr[i] - 2;
                    let numberIsGreater = arr[i] + 2;
                    for (numberLess; numberLess <= numberIsGreater; numberLess++) {
                        if (numberLess == number) {
                            return 2;
                        } else {
                            continue
                        }
                    }
                }
            }
        }
        const newArrApproximateNumbers = approximate_numbers(number);

        let distanceReturn = {
            firstNumberR: false,
            approximateR: false,
        }

        // const subsequenceUp = subsequenceUp(number, newnumber, newnumberStr, newArrApproximateNumbers, distanceReturn);
        if (subsequenceUp(newnumber, newnumberStr, newArrApproximateNumbers, distanceReturn) == 2) {
            return 2;
        } else if (subsequenceUp(newnumber, newnumberStr, newArrApproximateNumbers, distanceReturn) == 1) {
            counterApproximateReturn++;
            // console.log(counterApproximateReturn + 'counter');
            // return 1;
        } {
            return 0;
        }
        // console.log(newArrApproximateNumbers);
        // console.log(newArrApproximateNumbers);
        // console.log(newArrApproximateNumbers);
        // console.log('yuyu');
        // const subsequenceConst = subsequence(number, newnumber, newnumberStr, newArrApproximateNumbers, distanceReturn);
        // // console.log('number' + subsequenceConst);



        // if (subsequence(number, newnumber, newnumberStr) > 0) {
        //     console.log('yes');
        //     return 2;
        // } else if (subsequence(number, newnumber, newnumberStr) == 1) {
        //     counterApproximateReturn++;
        // } else if (polindrom(newnumber, newnumberStr) == 2) {
        //     console.log('yes');
        //     return 2;

        // } else if (counterApproximateReturn > 0) {
        //     console.log('1');
        //     return 1;
        // } else {
        //     console.log(counterApproximateReturn);
        //     console.log('no');
        //     return 0;
        // }
        // } else {
        //     return 0
        // }
        // let counterDistance = 0;
        // const distanceMain = distanceN(newnumber, counterDistance);




    }
}
function subsequenceUp(newnumber, newnumberStr, newArrApproximateNumbers, distanceReturn) {
    console.log('povtor');
    let sortUp = [...newnumber];
    let counterSort = 0;
    let verifiedТumbers = [];
    // console.log(distanceN(newnumber, counterDistance = 1));
    // console.log('+++++++++++++++++');
    // console.log(sortUp);
    // zero_ten(sortUp);
    // console.log('+++++++++++++++++');
    // console.log(sortUp);
    console.log(sortUp[0] + 'on');
    if (sortUp[0] == 0) {
        console.log('+++++++++++++++++');

        return 0;
    }
    if (distanceN(sortUp, counterDistance = 0) !== 0) {
        distanceReturn.firstNumberR = true;
        // console.log(distanceReturn.firstNumberR);
        // console.log('norawn');
        sortNumber(sortUp, sortCounter = 0)
        zero_ten(sortUp);
        sortUp = sortUp.join('');
        console.log('+++++++++++++++++');

        console.log(sortUp);
        if (sortUp == newnumberStr) {
            // console.log('yes');
            return 2
        } else if (approximate(newArrApproximateNumbers) == 1) {
            return 1;
        } else {
            return 0;
        }
    } else if (approximate(newArrApproximateNumbers) == 1) {
        return 1;
    } else {
        return 0;
    }



    function distanceN(arr, counterDistance) {
        console.log('distance');
        if (counterDistance == 0) {
            console.log('distance counter 0');
            // zero_ten(arr);
            console.log(arr);
            for (let i = 1; i < arr.length; i++) {
                let element = arr[i]
                let prev = arr[i - 1];
                // console.log(prev);
                // console.log(element);
                if (Math.abs(element - prev) == 1) {
                    console.log('nohhh');
                    continue;
                } else {
                    console.log('hhhh');
                    console.log(element);
                    console.log(prev);
                    return 0;
                }
            }
        } else {
            console.log('ototak');
            console.log('distance counter != 0');
            for (let i = 0; i < arr.length; i++) {
                let element = arr[i].toString().split('').map(Number);
                // console.log(element);
                let trueNumber = 0;
                zero_ten(element);

                for (let j = 1; j < element.length; j++) {
                    let prev = element[j - 1];
                    if (Math.abs(element[j] - prev) !== 1) {
                        break;
                    } else {
                        trueNumber++
                    }
                }

                if (trueNumber == element.length - 1) {
                    verifiedТumbers.push(element);
                }
            }
            if (verifiedТumbers.length == 0) {
                return 0;
            }
        }
    }
    function approximate(newArrApproximateNumbers) {
        const newArrApproximate = newArrApproximateNumbers;
        if (distanceN(newArrApproximate, counterDistance = 1) !== 0) {
            distanceReturn.approximateR = true;
            for (let i = 0; i < verifiedТumbers.length; i++) {
                let element = verifiedТumbers[i];
                // console.log(element);
                let newElement = [...element];
                zero_ten(newElement);
                sortNumber(element);
                zero_ten(element);
                element = element.join('');
                newElement = newElement.join('');
                if (newElement == element) {
                    return 1;
                } else {
                    console.log('ни');
                    continue;
                }
            }
        } else {
            return 0;
        }
    }
    function zero_ten(arr) {
        if (arr[arr.length - 1] == 0) {
            return arr[arr.length - 1] = 10;
        } else if (arr[arr.length - 1] == 10) {
            return arr[arr.length - 1] = 0;
        }
    }
}


function sortNumber(arr, sortCounter) {
    if (sortCounter == 0) {
        console.log('gru');
        arr.sort((a, b) => {
            return a - b;
        })
    } else {
        arr.sort((a, b) => {
            return b - a;
        });
    }

}


function newsubsequence(arr, newnumberStr) {
    let sortUp = [...arr];
    let sortDown = [...arr];
    let counterSort = 0;

    function sortfunction(arr) {
        sortNumber(arr);

        if (newnumberStr !== arr.join('')) {
            console.log('ugu');
            zero_ten(arr);

        } else { console.log('no'); }
        return arr.join('');
    }

    function sortNumber(arr) {
        if (counterSort == 0) {
            zero_ten(arr);
            arr.sort((a, b) => {
                counterSort++;
                return a - b;
            })
        } else {
            arr.sort((a, b) => {
                return b - a;
            })
        }
    }
    // sortfunction(sortUp);
    // console.log(sortUp);
    if (sortfunction(sortUp) == newnumberStr) {
        return 2;
    } else if (sortfunction(sortDown) == newnumberStr) {
        return 2;
    } else {
        return 0;
        // }

        // console.log(sortUp);

    }
}







function polindrom(newnumber, newnumberStr) {
    let newArr = [...newnumber].reverse().join('');
    if (newArr == newnumberStr) {
        return 2;
    } else {
        return 0;
    }
}

function approximate_numbers(number) {
    console.log('povtorapp');
    let minNumber = number - 2;
    let maxNumber = number + 2;

    let arr = [];
    for (minNumber; minNumber <= maxNumber; minNumber++) {
        if (minNumber == number) {
            continue
        } else {
            arr.push(minNumber);
        }
        // console.log('minmax');
    }
    // console.log(arr);
    return arr;
}


 // switch (a) {
    //     case 3:
    //         alert('Маловато');
    //         break;
    //     case 4:
    //         alert('В точку!');
    //         break;
    //     case 5:
    //         alert('Перебор');
    //         break;
    //     default:
    //         alert("Нет таких значений");
    // }

//     Напишите функцию, которая анализирует введенное число миль и возвращает 2, если число «интересно» (см. ниже), 1, если интересное число встречается в пределах следующих двух миль, или 0, если число не интересно.

// «Интересные» числа
// Интересные числа — это числа из 3 и более цифр, которые соответствуют одному или нескольким из следующих критериев:

// Любая цифра, за которой следуют все нули: 100, 90000
// Каждая цифра — это одно и то же число: 1111.
// Цифры последовательные, сращенные†: 1234
// Цифры идут последовательно, по убыванию‡: 4321
// Цифры представляют собой палиндром: 1221 или 73837.
// Цифры соответствуют одному из значений в массиве awesomePhrases.
// † Для возрастающих последовательностей 0 должен стоять после 9, а не перед 1, как в 7890.
// ‡ Для убывающих последовательностей 0 должен стоять после 1, а не перед 9, как в 3210.
