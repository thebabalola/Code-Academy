// ----- class vs className -----
	/* 	- In HTML, it’s common to use class as an attribute name: ( <h1 class="big">Title</h1> )
		- In JSX, you can’t use the word class! You have to use className instead: ( <h1 className="big">Title</h1> ) */

import React from 'react';
import { createRoot } from 'react-dom/client'

const container = document.getElementById('app');
const root = createRoot(container);
// Write code here:
const myDiv = (
  <div className = 'big'>
  I AM A BIG DIV
  </div>
);
root.render(myDiv);



// ----- Self-Closing Tags -----
	/* But, in JSX, you have to include the slash (/) for self closing tags. 
	If you write a self-closing tag in JSX and forget the slash, you will raise an error: */

const closingTags = (
	<>
		<img src='./img.png' alt='Description' />
		<br />
		<input type='text' />
	</>
);



// ----- JavaScript In Your JSX In Your JavaScript -------

root.render(<h1>2 + 3</h1>);  //renders 2 + 3 to the screen



// ----- Curly Braces in JSX -----
	/* You need a way to write code that says " + 3 ", in between JSX tags, 
	to be treated like ordinary JavaScript and not like JSX.”

	You can do this by wrapping your code in curly braces. */

root.render(<h1>{2 + 3}</h1>);   // this outputs 5 to the screen



// ----- 20 Digits of Pi in JSX -----
	/* Content in the curly braces {} themselves won’t be treated as JSX or as JavaScript. 
	They are markers that signal the beginning and end of a JavaScript injection into JSX, 
	similar to the quotation marks '' that signal the boundaries of a string. */

	const math = (
		<>
		<h1>2 + 3 = 2 + 3 </h1>   outputs: 2 + 3 = 2 + 3
		<h2>2 + 3 = {2 + 3}</h2>	outputs: 2 + 3 = 5
		</>
		);
	  root.render(math);



// ----- Variables in JSX ------
		/* When you inject JavaScript into JSX, that JavaScript is part of the 
		same environment as the rest of the JavaScript in your file. */

const name = 'Gerdo';
const greeting = <p>Hello, {name}!</p>;	// Access your variable inside of a JSX expression:


const theBestString = 'This text was accessed through a javascript variable';
root.render(<h1>{theBestString}</h1>);	//outputs: value of BestString variable


const sideLength = "200px";
const panda = (
  <img 
    src="images/panda.jpg" 
    alt="panda" 
    height={sideLength} 
    width={sideLength} />  //that is, you can call functions into the jsx
);


const goose = 'https://content.codecademy.com/courses/React/react_photo-goose.jpg';
const gooseImg = (
  <img 
	src = {goose}/>
);



// ------- Event Listeners in JSX -------
		/* JSX elements can have event listeners, just like HTML elements can. 
		Programming in React means constantly working with event listeners. */
		// An event listener attribute’s value should be a function.

function clickAlert() {
  alert('You clicked this image!');
}
<img onClick={clickAlert} />
			/* Note that in HTML, event listener names are written in all lowercase, such as onclick or onmouseover. In JSX, event listener names are written in camelCase, such as onClick or onMouseOver. */



function makeDoggy(e) {
  // This function is defined for dog. it Calls this extremely useful function on an <img>.
  // The <img> will become a picture of a doggy.
  e.target.setAttribute('src', 'https://content.codecademy.com/courses/React/react_photo-puppy.jpeg');
  e.target.setAttribute('alt', 'doggy');
}

const kitty = (
	<img
    onClick = {makeDoggy}
		src="https://content.codecademy.com/courses/React/react_photo-kitty.jpg" 
		alt="kitty" />
);

root.render(kitty);  //upon click the above images from kitty to doggy




// ------- JSX Conditionals: If Statements That Don't Work -------
		//(you can not inject an if statement into a JSX expression.)

		(
			<h1>
			  {/* {
				if (purchase.complete) {
				  'Thank you for placing an order!'
				}
			  } */}
			</h1>
		  )
		  // This code will break



// ------- JSX Conditionals: If Statements That Do Work -------
let message;

if (user.age >= drinkingAge) {
	message = (
	  <h1>
		Hey, check out this alcoholic beverage!
	  </h1>
	);
  } else {
	message = (
	  <h1>
		Hey, check out these earrings I got at Claire's!
	  </h1>
	);
  }
  
  root.render(message);



function coinToss() {
  // This function will randomly return either 'heads' or 'tails'.
  return Math.random() < 0.5 ? 'heads' : 'tails';
}

const pics = {
	kitty: 'https://content.codecademy.com/courses/React/react_photo-kitty.jpg',
	doggy: 'https://content.codecademy.com/courses/React/react_photo-puppy.jpeg'
  };


let img;

if (coinToss() == 'heads') {
	img = <img src={pics.kitty}/>
}
else {
	img = <img src={pics.doggy}/>
}

root.render(img);



// ------- JSX Conditionals: The Ternary Operator -------
	/* Recall how it works: you write x ? y : z, where x, y, and z are all 
	JavaScript expressions. When your code is executed, x is evaluated as 
	either “truthy” or “falsy”. 
	If x is truthy, then the entire ternary operator returns y. If x is falsy, 
	then the entire ternary operator returns z. */

const imgs = <img src={pics[coinToss() === 'heads' ? 'kitty' : 'doggy']} />;
const imgS = <img src={pics[x ? y : z]} />;

root.render(imgs);
root.render(imgS);


const headline = (
  <h1>
    { age >= drinkingAge ? 'Buy Drink' : 'Do Teen Stuff' }  
  </h1>
)



// ------- JSX Conditionals: && -------
	/* one final way of writing conditionals in React: the && operator. 
	If the expression on the left of the && evaluates as true, 
	then the JSX on the right of the && will be rendered. 
	If the first expression is false, however, then the JSX to the right 
	of the && will be ignored and not rendered.*/

const judgmental = Math.random() < 0.5;

const favoriteFoods = (
  <div>
    <h1>My Favorite Foods</h1>
    <ul>
      <li>Sushi Burrito</li>
      <li>Rhubarb Pie</li>
      {!judgmental && <li>Nacho Cheez Straight Out The Jar</li>}
      <li>Broiled Grapefruit</li>
    </ul>
  </div>
);

root.render(favoriteFoods);



const tasty = (
	<ul>
	  <li>Applesauce</li>
	  { !baby && <li>Pizza</li> }
	  { age > 15 && <li>Brussels Sprouts</li> }
	  { age > 20 && <li>Oysters</li> }
	  { age > 25 && <li>Grappa</li> }
	</ul>
  );



//  ------- .map in JSX -------
const people = ['Rowe', 'Prevost', 'Gare'];

const peopleList = people.map(person =>
  <li key={'person_'+ i}> {person}</li>  //keys
);

// root.render goes here:
root.render(<ul>{peopleList}</ul>);



// ------- Keys -------
	/* When you make a list in JSX, sometimes your list will need to 
	include something called keys: 
	A key is a JSX attribute. The attribute’s name is key. The attribute’s value
	 should be something unique, similar to an id attribute.*/
<ul>
  <li key="li-01">Example1</li>
  <li key="li-02">Example2</li>
  <li key="li-03">Example3</li>
</ul>



// ------- React.createElement -------
	//(You can write React code without using JSX at all!)

/* The following JSX expression:*/
const h1 = <h1>Hello world</h1>;

/* can be rewritten without JSX, like this:*/
const h2 = React.createElement(
	"h",
	null,
	"Hello world"
  );

const greatestDivEver = React.createElement(
	'div',
	null,
	'i am div'
);