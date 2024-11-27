const {circleArea, squareArea } = require('./xshape-area')	//using destructing
/* let circlenSquareArea = require('./xshape-area'); importing the whole function in shape-area.js */

let areaOfCircle = circleArea(5);
let areaOfSquare = squareArea(10);

console.log(areaOfCircle);
console.log(areaOfSquare);
// OR console.log(circleArea(5), squareArea(10))