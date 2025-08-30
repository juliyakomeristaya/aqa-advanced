const people = [
	{ name: 'John', email: 'john@example.com', age: 30 },
	{ name: 'Jane', email: 'jane@example.com', age: 25 },
	{ name: 'Mike', email: 'mike@example.com', age: 40 },
];

for (const person of people) {
	console.log(`Name: ${person.name}, Email: ${person.email}, Age: ${person.age}`);
}

for (const { name, email, age } of people) {
	console.log(`${name} is ${age} years old and can be reached at ${email}`);
}
