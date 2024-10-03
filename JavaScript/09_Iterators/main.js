// .forEach() method
    // this loops through the array and executes the callback function for each element. 

const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below
fruits.forEach( function(fruitNeeded){
  console.log('I want to eat a ' + fruitNeeded );
}
)


// .map() method
  // .map() works similar to .forEach()— the only difference is it returns a new array.

const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

const secretMessage = animals.map( function(animalFirst){
	return animalFirst[0]; //colects 
  }
)
console.log(secretMessage.join('')); //Outputs: HelloWorld  - This because the .join('') method is used to concatenate all the elements of the secretMessage array into a single string without any separators.

      // Example 2
const bigNumbers = [100, 200, 300, 400, 500];

const smallNumbers = bigNumbers.map( function(bigNum){
  return bigNum / 100;
}
)
console.log(smallNumbers);


// .filter() Method
  // just like .map(), it returns a new array. However, .filter() returns an array of elements after filtering out certain elements from the original array. The callback function for the .filter() method should return true or false depending on the element that is passed to it.

const randomNumbers = [375, 200, 3.14, 7, 13, 852];

const smallNumbers = randomNumbers.filter( function(num){
  return num < 250;
}
)
console.log(num);   // outputs: numbers less than 250

		// Example 2
const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

const longFavoriteWords = favoriteWords.filter( function(word){
  return word.length > 7;
}
)

console.log(word); 


// The .findIndex() Method
	// The .findIndex() method is used to find the index of the first element in the array that satisfies the condition provided by the callback function.
const greaterThan1000 = jumbledNums.findIndex( num => {
  return num > 1000;
});
console.log(greaterThan1000); // Output: -1
//If there isn’t a single element in the array that satisfies the condition in the callback, then .findIndex() will return -1.

    //Example 2
const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex( function(animal){
  return animal.length === 8;
}
)
console.log(foundAnimal); // outputs: 3 (index of 'elephant')

const startsWithS = animals.findIndex( function(animal) {
  if (animal[0] === 's') {
  return true;
} else {
  return false;
}
})

console.log(startsWithS); // outputs: 3 (index of 'seal')


// The .reduce() Method
    //  returns a single value after iterating through the elements of an array, thereby reducing the array

const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce(function(accumulator, currentValue) {
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue;
}, 10); // Added 10 as the initial value for accumulator

console.log(newSum);  
//outputs (when 10 wasnt the initial accumulator): 
// The value of accumulator:  1
// The value of currentValue:  3
// The value of accumulator:  4
// The value of currentValue:  5
// The value of accumulator:  9
// The value of currentValue:  7
// 16

then we add 10 as the .reduce() - as second argument
// outputs (after 10 had been added as an inital accumulator)
// The value of accumulator:  10
// The value of currentValue:  1
// The value of accumulator:  11
// The value of currentValue:  3
// The value of accumulator:  14
// The value of currentValue:  5
// The value of accumulator:  19
// The value of currentValue:  7
// 26



// Iterator Documentation

const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

console.log(words.some((word) => {
  return word.length < 6;  //returns true
}));

// Use filter to create a new array
const interestingWords = words.filter( function(word) {
  return word.length > 5;  //returns words with more than 5 characters.
});

// to check if every element in the (interestingWord)in the now has more than 5 characters.
console.log(interestingWords.every((word) => {
  return word.length > 5;
} ));



// Choosing the Right Iterator

const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];

const nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will do something to each of the values and return undefined
cities.forEach(city => console.log('Have you visited ' + city + '?'));

// Choose a method that will return a new array, with only those elements longer than 7 characters.
const longCities = cities.filter(city => city.length > 7);

// Choose a method that will accepts an array containing multiple values, and return a single value
const word = cities.reduce((acc, currVal) => {
  return acc + currVal[0]
}, "C");

console.log(word)

// Choose a method that will return a new array
const smallerNums = nums.map(num => num - 5);

// Choose a method that will return a boolean value
nums.some(num => num < 0);