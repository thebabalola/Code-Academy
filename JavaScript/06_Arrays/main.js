// Creating an array
const hobbies = ['walking', 'gaming', 'watching movies'];
console.log(hobbies);

// Accessing array elements
const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life2xrftgdettyxessessw.'];

let listItem = famousSayings[0];
console.log(listItem);
console.log(famousSayings[2]);
console.log(famousSayings[3]);

//Update elements
let groceryList = ['bread', 'tomatoes', 'milk'];
groceryList[1] = 'avocados';
console.log(groceryList);

// Arrays with let and const
let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments[0] = 'Mayo';
console.log(condiments);

condiments = ['Mayo'];
console.log(condiments);

utensils[3] = 'Spoon';
console.log(utensils);

// The .length property (returns the number of items in an array)
const objectives = ['Learn a new language', 'Read 52 books', 'Run a marathon'];
console.log(objectives.length); // Output: 3

// The .push() Method (allows ability to add items to the end of an array)
const chores = ['wash dishes', 'do laundry', 'take out trash'];
chores.push('get dogs food', 'walk the dog');
console.log(chores);

// The .pop() Method (removes the last item of an array.)
const newItemTracker = ['item 0', 'item 1', 'item 2'];

const removed = newItemTracker.pop(); //saves removed item into the remove variable

console.log(newItemTracker); // Output: [ 'item 0', 'item 1' ]
console.log(removed); // Output: item 2


//example 2 : 
const chores = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];

chores.pop(chores);
console.log(chores); //outputs all element except 'mop floor'


// Other Array Methods
	//.join(), 
	//.slice(), 
	//.splice(), 
	//.shift(), 
	//.unshift(), and 
	//.concat()

// The .Shift() (removes the first item from an array)
const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift(groceryList);
console.log(groceryList);

// The .unshift() (adds an item to the begining of an array)
groceryList.unshift('popcorn')
console.log(groceryList);

// The .slice (returns a partial copy(shallow copy) of an array, without altering the original array.)
console.log(groceryList.slice(1, 4)); 
   //the above only copy and prints array elemnt from index 1-4,
   // without altering the main list.

// The .indexOf() (finds the index element of an array)
const pastaIndex = groceryList.indexOf('pasta');  //saves the return value of groceryList index in pasta index.
console.log(pastaIndex);


// Arrays and Function
const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
  arr[3] = 'MUTATED';
}

changeArr(concept);
console.log(concept);  //outputs - [ 'arrays', 'can', 'be', 'MUTATED' ]


const removeElement = newArr => {
  newArr.pop();
}

removeElement(concept);
console.log(concept); //outputs -[ 'arrays', 'can', 'be' ]

//Nested Arrays (Acessing arrays in arrays)
const nestedArr = [[1], [2, 3]];

console.log(nestedArr[1]); // Output: [2, 3]
console.log(nestedArr[1][0]); // Output: 2  - i.e access array 2 and pick it first item or element


	//example 2
	let numberClusters = [[1, 2], [3, 4], [5, 6]];

	const target = numberClusters[2][1];   //tagets the array element - number 6x