//if , else if, else and Operators (Comparison, Logical & Teniary)

//if else statement
let sale = true;
sale = false;

if(sale) {
  console.log('Time to buy!');
}
else {
  console.log('Time to wait for a sale.');
}

// Comaprison Operator (< , >, <= , >= , === , !==)
let hungerLevel = 7;

if(hungerLevel > 7) {
  console.log('Time to eat!');
}
else {
  console.log('We can eat later!');
}

//Logical Operators (&& and, || or, ! not)
let mood = 'sleepy';
let tirednessLevel = 6;

if(mood === 'sleepy' && tirednessLevel > 8) {
  console.log('time to sleep');
}
else {
  console.log('not bed time yet');
}

// Truthy and Falsy 
//( conditions that JavaScript automatically check to see if the value is truthy or falsy. 
//This means it determines whether the value should be treated as true or false.)
let wordCount = 0;

if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}

let favoritePhrases = 'Hello World!';

if (favoritePhrases) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}
// OUTPUTS - Better get to work!
		//  - This string doesn't seem to be empty.


// Truthy and Falsy Assignment
let usernames = '';
let defaultNames;

if (usernames) {
  defaultNames = usernames;
} else {
  defaultNames = 'Stranger';
}

console.log(defaultNames); // Prints: Stranger

// combinig logical operators with truthy and falsy (using - short-circuit evaluation.)
let username = '';
let defaultName = username || 'Stranger';

console.log(defaultName); // Prints: Stranger


let tool = 'marker';

// Use short circuit evaluation to assign  writingUtensil variable below:
let writingUtensil;
writingUtensil = tool || 'pen';
console.log(`The ${writingUtensil} is mightier than the sword.`); 

//N.B: truthys and falsy are mostly used to compare users input


// Ternary Operator  (A short-hand syntax for if else..)
let isLocked = false;
isLocked ?
  console.log('You will need a key to open the door.') :
  console.log('You will not need a key to open the door.');

let isCorrect = true;
isCorrect ?
  console.log('Correct!') :
  console.log('Incorrect!');

let favoritePhrase = 'Love That!';
favoritePhrase === 'Love That!' ?
  console.log('I love that!') :
  console.log("I don't love that!");


//  Else If Statements
let season = 'summer';

if (season === 'spring') {
  console.log('It\'s spring! The trees are budding!');
}
else if (season === 'winter') {
  console.log('It\'s winter! Everything is covered in snow.');
}
else if (season === 'fall') {
  console.log('It\'s fall! Leaves are falling!');
}
else if (season === 'summer') {
  console.log('It\'s sunny and warm because it\'s summer!');
}
else {
  console.log('Invalid season.');
}


//The switch keyword (used in the place of if, else if - for multiple conditions)
let athleteFinalPosition = 'first place';

switch (athleteFinalPosition) {
  case 'first place':
  console.log('You get the gold medal!');
  break;
  case 'second place':
  console.log('You get the silver medal!');
  break;
  case 'third place':
  console.log('You get the bronze medal!');
  break;
  default:
  console.log('No medal awarded.');
  break;
}