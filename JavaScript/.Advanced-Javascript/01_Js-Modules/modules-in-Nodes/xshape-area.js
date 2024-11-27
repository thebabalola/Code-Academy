/* shape-area.js */
const PI = Math.PI;

function circleArea (radiusLength){
	let area = PI * radiusLength * radiusLength;
	return area;
}

function squareArea (sideLength) {
	let sqrArea = sideLength ** 2; //i.e sidelength raise to power 2. or let say sqrAea = sidelength * sidelength
	return sqrArea;
}

module.exports = {
	circleArea,
	squareArea
}