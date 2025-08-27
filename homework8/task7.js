numbersArray1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbersArray2 = [1];
numbersArray3 = [1,9];
numbersArray4 = [0,-9];
numbersArray5 = [0,-9, 9];
numbersArray6 = [0,-9, 9, 'a'];

function differenceСalculation (numbersArray) {
    if (numbersArray.length < 2) {
        return null;
    }
    for (let i = 0; i < numbersArray.length; i++) {
        if (typeof numbersArray[i] !== 'number') {
            return null;
        }
    }
    let max = numbersArray[0];
    let min = numbersArray[0];
    for (let i = 0; i < numbersArray.length; i++) {
       if (numbersArray[i] > max) {
           max = numbersArray[i];
       }
       if (numbersArray[i] < min) {
           min = numbersArray[i];
       }
    }
    return max - min;
}

console.log(differenceСalculation(numbersArray1));
console.log(differenceСalculation(numbersArray2));
console.log(differenceСalculation(numbersArray3));
console.log(differenceСalculation(numbersArray4));
console.log(differenceСalculation(numbersArray5));
console.log(differenceСalculation(numbersArray6));