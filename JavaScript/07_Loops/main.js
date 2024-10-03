// Repeating Tasks Manually
let vacationSpots = ['korea', 'Tanzania', 'Norway']
console.log(vacationSpots[0]);
console.log(vacationSpots[1]);
console.log(vacationSpots[2]);


//The For Loop
for (let loop = 5; loop < 11; loop++) {
	console.log(loop);  //outputs - 5, 6, 7, 8, 9, 10
  }


// Looping in Reverse
for (let counter = 3; counter >= 0; counter--){
	console.log(counter);	//outputs - 3, 2, 1
  }

// Looping through Arrays
const vacationSpot = ['Bali', 'Paris', 'Tulum'];

for (let i = 0; i < vacationSpot.length; i++){
	console.log('i would love to visit ' + vacationSpots[i]);
}

// Nested Loops (a loop running inside of a loop)
const bobsFollowers = ['Fred', 'Nick', 'Lucy', 'Kelly'];
const tinasFollowers = ['Nick', 'Lucy','david'];
const mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) { // first iteration - compares 'Fred' with 'Nick', 'Lucy', and 'david'—no match (in the inner loop), so nothing is added to mutualFollowers. (so does it continue)
  for (let x = 0; x < tinasFollowers.length; x++) {
    if (bobsFollowers[i] === tinasFollowers[x]){
      mutualFollowers.push(bobsFollowers[i]); //assigns bobs mutual followers with tinas
    }
  }
};


// The While Loop
const cards = ['diamond', 'spade', 'heart', 'club'];

let currentCard;

while (currentCard !== 'spade') {
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);    //first outputs: heart, heart, diamond, club, spade.(once the current card outputs 'spade', the loop exits)
}


// The Do-While loop
// Step 1: Declare variables
let cupsOfSugarNeeded = 3; // You can choose any number
let cupsAdded = 0;

// Step 2: Create a do...while loop
do {
  cupsAdded++;
  console.log(cupsAdded); // Logs the current number of cups added - 1,2,3
} while (cupsAdded < cupsOfSugarNeeded);


//Break Keyword
const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

// Write your code below
for (let i = 0; i < rapperArray.length; i++){
  console.log(rapperArray[i]);
  if (rapperArray[i] === 'Notorious B.I.G.'){
    break;
  }
}

console.log("And if you don't know, now you know.");
