class Temperature {
	constructor(celsius) {
		this._celsius = celsius;
	}

	get celsius() {
		return this._celsius;
	}

	set celsius(value) {
		if (value < -273.15) {
			console.log('Temperature below absolute zero is not possible.');
			return;
		}
		this._celsius = value;
	}

	get fahrenheit() {
		return (this._celsius * 9) / 5 + 32;
	}
}

const temp = new Temperature(25);
console.log(temp.celsius); // 25
console.log(temp.fahrenheit); // 77

temp.celsius = -300; // Temperature below absolute zero is not possible.
temp.celsius = 32;
console.log(temp.celsius); // 32
console.log(temp.fahrenheit); // 89.
