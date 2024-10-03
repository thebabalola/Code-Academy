var favoriteFood = 'pizza';
var numOfSlices = 8;

console.log(favoriteFood);
console.log(numOfSlices);


let price;
console.log(price); // Output: undefined (variable without a value is assigned an undefined)

let changeMe = true;

changeMe = false;
console.log(changeMe);


const entree = 'Enchiladas';
console.log(entree);

entree = 'Tacos' //If you try to reassign a const variable, you’ll get a TypeError. and also, if you dont assign a value to  const - you get syntax Error


// Mathematical Assignment Operators
let levelUp = 10;
let powerLevel = 9001;
let multiplyMe = 32;
let quarterMe = 1152;

levelUp += 5;
powerLevel -= 100;
multiplyMe *= 11;
quarterMe /= 4;

// These console.log() statements below
console.log('The value of levelUp:', levelUp); 
console.log('The value of powerLevel:', powerLevel); 
console.log('The value of multiplyMe:', multiplyMe); 
console.log('The value of quarterMe:', quarterMe);


// The Increment and Decrement Operator
let gainedDollar = 3;
let lostDollar = 50;

gainedDollar++;
lostDollar--;

console.log(gainedDollar);


// String Concatenation with Variables
let favouriteAnimal = 'murphy';
console.log('My favorite animal: ' + favouriteAnimal);


// String Interpolation
    //  (alternative to string concatenation) involves inserting, or interpolate, 
	// variables into strings using backticks (`). with also the use of a placeholder ${varName}
	var myName = 'Babalola';
	let myCity = 'Uyo';
	
	console.log(`My name is ${myName}. My favorite city is ${myCity}`);


// typeof operator
      //The typeof operator used to check the data type of a variable.
let newVariable = 'Playing around with typeof.';
console.log(typeof newVariable);   //prints the (string) as type of the variable above

newVariable = 1;
console.log(typeof newVariable);  //prints the (number) as type of the variable above


const unknown3 = true; 
console.log(typeof unknown3); // Output: boolean