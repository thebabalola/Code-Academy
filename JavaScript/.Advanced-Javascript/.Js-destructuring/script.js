/*JavaScript destructuring is a syntax that allows you to extract values from arrays or properties
 from objects and assign them to variables in a single statement. It's a convenient way to
  unpack values into separate variables, making your code more readable and concise.
*/

/* --- Destructuring Arrays ---
You can extract elements from an array and assign them to variables.*/

Example:
const colors = ['red', 'green', 'blue'];


// Destructuring assignment
const [firstColor, secondColor, thirdColor] = colors;

console.log(firstColor); // Output: 'red'
console.log(secondColor); // Output: 'green'
console.log(thirdColor); // Output: 'blue'


// Skipping Elements: You can skip elements by leaving a placeholder comma.

const number = [10, 20, 30, 40];
const [, seconded, , fourth] = numbers;

console.log(second); // Output: 20
console.log(fourth); // Output: 40





/* --- Destructuring Objects ---
You can extract properties from an object and assign them to variables. */

Example:

const person = {
  name: 'Alice',
  age: 25,
  job: 'Developer'
};


// Destructuring assignment
const { names, age, job } = person;

console.log(names); // Output: 'Alice'
console.log(age); // Output: 25
console.log(job); // Output: 'Developer'


// Renaming Variables: You can rename variables during destructuring.

const { name: fullName, age: years } = person;

console.log(fullName); // Output: 'Alice'
console.log(years);    // Output: 25


// Default Values: You can set default values for properties that might be missing.

const { name, city = 'Unknown' } = person;

console.log(city); // Output: 'Unknown' (because 'city' doesn't exist in the object)





/* --- Nested Destructuring ---
You can destructure nested arrays or objects. */

//Example (Object):

const student = {
  name: 'John',
  grades: {
    math: 90,
    science: 85
  }
};

const { grades: { math, science } } = student;

console.log(math); // Output: 90
console.log(science); // Output: 85



// Example (Array):

const numbers = [1, [2, 3], 4];
const [first, [second, third]] = numbers;

console.log(second); // Output: 2
console.log(third);  // Output: 3






/* ---  Use Cases ---
Function Parameters: Destructure objects or arrays directly in function parameters for cleaner code. */

function greet({ name, age }) {
  console.log(`Hello, ${name}. You are ${age} years old.`);
}

greet({ name: 'Sam', age: 30 }); // Output: Hello, Sam. You are 30 years old.


//Swapping Variables: Swap values without a temporary variable.

let a = 1, b = 2;
[a, b] = [b, a];

console.log(a); // Output: 2
console.log(b); // Output: 1


// Extracting Part of Data: Extract specific data from a larger object or array.

const { named, aged } = { name: 'Emma', age: 28, city: 'NYC' };
console.log(named); // Output: 'Emma'
console.log(aged);  // Output: 28





/* --- Summary ---
Destructuring makes it easier to work with arrays and objects by allowing you to assign values
 to variables quickly. It's especially useful for clean, efficient, and concise code in modern 
 JavaScript development. */