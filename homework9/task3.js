const car1 = {brand: 'Tayota', model: 'Rav4', year: 2024};

const car2 = {brand: 'Tayota', model: 'Yaris Cross', owner: 'John Doe'};

const car3 = {...car1, ...car2};

console.log(car3);