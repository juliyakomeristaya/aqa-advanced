function saySmth (callback, phrase, time) {
    console.log('Start');
    setTimeout(function() {
        const data = phrase;
        callback(data);
    }, time);
}

function handleData(data) {
    console.log('Data:', data);
}

saySmth(handleData, 'Hello', 2000);