function handleNum (num, handleEven, handleOdd){
    if(num % 2 === 0){
        handleEven(num);
    } else {
        handleOdd(num);
    }
    
}

function handleEven(num){
    console.log(num + " number is even");
}

function handleOdd(num){
    console.log(num + " number is odd");
}

let num = Date.now();
handleNum(num, handleEven, handleOdd);