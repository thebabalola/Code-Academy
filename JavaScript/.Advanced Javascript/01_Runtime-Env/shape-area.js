/* shape-area.js */
const PI = Math.PI;

// Define and export circleArea() and squareArea() below
const circleArea = function(radiusLength) {
  return PI * radiusLength * radiusLength;
};

const squareArea = (sideLength) => {
  return sideLength ** 2;
};

// Correctly export the functions without calling them
module.exports = {
  circleArea,
  squareArea
}