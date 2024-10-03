// printing to the console
console.log(25);
console.log(134);


console.log('It was love at first sight.'); //this is a single line comment

/* 
   a multi-line comment
console.log('The first time Yossarian saw the chaplain he fell madly in love with him.');
console.log('Yossarian was in the hospital with a pain in his liver that fell just short of being jaundice.'); 
*/


// logging to the console's screen
onsole.log('JavaScript');
console.log(2011);
console.log('Woohoo! I love to code! #codecademy');
console.log(20.49)


// Arithmetic Operators
console.log(25 + 3.5);
console.log(2024 - 1969);
console.log(65 / 240);
console.log(0.2708 * 100);


// String Concatenation
console.log('hi' + 'ya');
console.log('wo' + 'ah');
console.log('I love to ' + 'code.')
onsole.log('Hello' + 'World');
console.log('Hello ' + 'World');


// Properties
//data types specific properties passed down on each data type
console.log('Hello'.length);
console.log('Teaching the world how to code'.length);


// Methods  (also known as functions - usually have parentheses after them , unlike propoerties)
console.log('hello'.toUpperCase()); // Prints 'HELLO'
console.log('Hey'.startsWith('H')); // Prints true

console.log('Codecademy'.toUpperCase());
console.log('    Remove whitespace   '.trim()); //string without whitespace at the beginning and end of it.


// Built-in Objects
Math.floor(Math.random() * 50);

/*
In this case:
1. Math.random() generates a random number between 0 and 1.
2. We then multiply that number by 50, so now we have a number between 0 and 50.
3. Then, Math.floor() takes a decimal number rounds the number down to the nearest whole number.
If you wanted to see the number printed to the terminal, you would still need to use a console.log() statement:
*/
console.log(Math.floor(Math.random() * 50)); // Prints a random whole number between 0 and 50

console.log(Math.floor(Math.random() * 100)); // Generates a random decimal number between 0 (inclusive) and 1 (exclusive), multiplies it by 100, // then uses Math.floor() to round down to the nearest integer, and logs the result to the console.
console.log(Math.ceil(43.8)); // Uses Math.ceil() to round the number 43.8 up to the nearest integer, and logs the result to the console.
console.log(Number.isInteger(2017)); // Checks if the number 2017 is an integer using Number.isInteger(), and logs the result (true) to the console.