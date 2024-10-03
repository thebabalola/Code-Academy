//Dogs years

// i. 8 years in a human’s life equates to 45 years in a dog’s life.
// ii. The first two years of a dog’s life count as 10.5 dog years each.
// iii. Each year following equates to 4 dog years.

let myAge = 26;
// this defines the early years of the dogs age
let earlyYears = 2;
earlyYears = earlyYears * 10.5;

// subtracts earlyYears of dog from human
laterYears = 24;
// multiplies dogs later years by that of human
laterYears = laterYears * 4;

console.log(earlyYears);
console.log(laterYears);
//sum total of human age in dog years
myAgeInDogYears = earlyYears + laterYears;

//converting my name to lowercase
myName = 'Babalola';
myName.toLowerCase(myName);
// prints my age in dogsAge to console
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years`);


// NOTE:
//Try changing myAge and see what happens.
//If you’d like extra practice, try writing this project without the *= operator.