function rectangleAreaDeclaration(high, width) {
	return high * width;
}

console.log(rectangleAreaDeclaration(5, 10));

const rectangleAreaExpression = function (high, width) {
	return high * width;
};

console.log(rectangleAreaExpression(5, 10));

const rectangleAreaArrowExpression = (high, width) => high * width;

console.log(rectangleAreaArrowExpression(5, 10));
