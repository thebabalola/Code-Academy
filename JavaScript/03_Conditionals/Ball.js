// Magic Eight Ball - Exercise

let userName = 'Jane';

userName ?
 console.log(`Hello, ${userName}!`) :
 console.log('Hello!');

let userQuestion = 'Is it going to rain tomorrow?';
console.log(`${userName} asked the Magic Eight Ball, if ${userQuestion}`);


// The eight ball magic
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';

if(randomNumber === 0) {
  console.log('It is certain');
}
else if (randomNumber === 1) {
  console.log('It is decidedly so');
}
else if (randomNumber === 2) {
  console.log('Reply hazy try again');
}
else if (randomNumber === 3) {
  console.log('Cannot predict now');
}
else if (randomNumber === 4) {
  console.log('Do not count on it');
}
else if (randomNumber === 5) {
  console.log('My sources say no');
}
else if (randomNumber === 6) {
  console.log('Outlook not so good');
}
else {
  console.log('Signs point to yes');
}

// NB:- for extra pratice
		// If you started with if/else if/else statements, 
		// convert them to a switch statement.
