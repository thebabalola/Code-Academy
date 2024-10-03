// Functions

sayThanks()  //hoisting

function sayThanks() {
	console.log('Thank you for your purchase! We appreciate your business.');
  }

sayThanks() //function call (you can call function many times as possible)


//Parameters & Arguments
function sayThanks(name) {
	console.log('Thank you for your purchase '+ name + '! We appreciate your business.');
  }
  
sayThanks('Cole');

   //default parameters
      // accounts for situations when an argument isn’t passed into a function that is expecting an argument.
	  function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs'){
		console.log(`Remember to buy ${item1}`);
		console.log(`Remember to buy ${item2}`);
		console.log(`Remember to buy ${item3}`);
	  }
	  

// Return
function monitorCount(rows, columns){
	return rows * columns;
  }
  
  const numOfMonitors = monitorCount(5,4);
  console.log(numOfMonitors)


  //Helper Function (involves returning the value of a return function to another function)
  function monitorCount(rows, columns) {
	return rows * columns;
  }
  
  function costOfMonitors(rows, columns) {
	return monitorCount(rows, columns) * 200;
  }
  
  const totalCost = costOfMonitors(5, 4);
  console.log(totalCost);

// Function Expression (involves storing function in a variable)
const plantNeedsWater = function(day) {
	if(day === 'Wednesday'){
	  return true;
	}
	else {
	  return false;
	}
  }
  
  plantNeedsWater('Tuesday');
  console.log(plantNeedsWater());


// Arrow Functions ( a shorter way to write functions by using the special “fat arrow” () => notation.)
const rectangleArea = (width, height) => {
	let area = width * height;
	return area;
  };

  // Consise Body Arrow Function (Functions that take only a single parameter do not need that parameter to be enclosed in parentheses)
Zero Parameters: const functionName = () => {};
One Parameter: const functionName = Parameter1 => {};
Two or More Parameter: const functionName = (para1, para2) => {};

  		//also
	// a single-line block does not need curly braces.(bersides, whatever it evaluates will be returned authomatically)
single-line block : const sumNum = NumPara => number * number;
Multi-line block : const sumNum = NumPara => {
					     const total = number * number;
						 return total;
					}

		// Eample 2
single-line:	const plantNeedsWater = day => day === 'Wednesday';
Multi-line:  const plantNeedsWater = day => {
				return day === 'Wednesday' ? true : false;
  			};

 // NB:- same as function expression, just that is doesnt make use of the keyword 'function,
      // and also the addition of the fat arrow notation



	  //OTHERS

// Rest Function Parameters (ES6)
    //  allows a function to accept an indefinite number of arguments as an array. It enables functions to handle a dynamic number of arguments in a cleaner, more flexible way.
	// (The rest parameter is indicated by three dots (...) followed by a variable name. This collects all the remaining arguments into an array.)

function sum(...numbers) {
  return numbers.reduce((total, number) => total + number, 0);
}

console.log(sum(1, 2, 3));  // Output: 6
console.log(sum(4, 5, 6, 7));  // Output: 22

// Explanation:
// ...numbers gathers all the arguments passed into the sum function into an array.
// The reduce method is used to sum all the values in the numbers array.


// Spread Function Parameters (ES6)
	// The spread operator (...) is used to "spread" or unpack elements of an array or object into individual elements. This can be helpful for passing arrays as function arguments or for copying or merging arrays/objects.

// Function Argument
const numbers = [1, 2, 3];
console.log(Math.max(...numbers));  // Output: 3

 //Combinig Array
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log(combined);  // Output: [1, 2, 3, 4, 5, 6]

// Explanation:
// In the first example, Math.max(...numbers) spreads the numbers array into individual elements, so Math.max can treat them as separate arguments.
// In the second example, the spread operator merges arr1 and arr2 into a single array.



// The rest parameter
	//The **rest parameter syntax** allows a function to accept an indefinite number of arguments as an array. This is useful when you don’t know ahead of time how many arguments will be passed to the function. It is written with three dots `...` followed by the name of the array that will hold the extra arguments.

// Syntax:
function functionName(...restParam) {
  // restParam is an array of the extra arguments
}

// Example:
function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sum(1, 2, 3, 4));  // Output: 10

// In this example:
// - The function `sum` can take any number of arguments.
// - The `numbers` rest parameter will collect all passed arguments into an array.
// - `reduce` is used to sum the elements of that array.

// ### Use Case:
// Rest parameters are especially useful when you want to handle a variable number of arguments passed to a function without explicitly declaring each one.