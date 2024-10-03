// JSX element
<h1>Hello world</h1>

const elementH1 = <h1>Hello world</h1>;
const myArticle = <article></article>

// Jsx element attributes
const p1 = <p id="large">foo</p>;
const p2 = <p id="small">bar</p>;

// Nested Jsx Element (with multiline expressions)
const myDiv = (
	<a href="#">
		<p>Click me!</p>
	</a>
  );

// Jsx outer element
// always wrap your jsx multiple expression in a div element for it to work right
const blog = (
	<div>
	<img src="pics/192940u73.jpg" />
	<h1>
	  Welcome to Dan's Blog!
	</h1>
	<article>
	  Wow I had the tastiest sandwich today. I <strong>literally</strong> almost freaked out.
	</article>
	</div>
  );

// Rendering Jsx
import React from 'react';
import { createRoot } from 'react-dom/client';

// Write code here:
const container = document.getElementById('container');  //grabs container ID
const root = createRoot(container);  // used to create a React root at the specified DOM element.

root.render(<h1>Hello world</h1>);   //  renders JSX on the screen. The h1 content passed into render()


// Passing a variable to render
const toDoList = (
  <ol>
    <li>Learn React</li>
    <li>Become a Developer</li>
  </ol>
);

const containers = document.getElementById('app');
const roots = createRoot(containers);
roots.render(toDoList);  // the toDo variable passed into render()


	//OR
const myList = (
<ul>
	<li>Full-stack sofware Developer</li>
	<li>Mobile App Developer</li>
	<li>DevOps</li>
	<li>AI and Machine Learning</li>
	<li>Cloud</li>
</ul>
);
 
 root.render(myList);


 //The Virtual DOM
	/* One special thing about a React root’s render() method 
	is that it only updates DOM elements that have changed.

	That means that if you render the exact same thing twice in a row, 
	the second render will do nothing: */
	const hello = <h1>Hello world</h1>;

	// This will add "Hello world" to the screen:
	root.render(hello, document.getElementById('app'));
	
	// This won't do anything at all:
	root.render(hello, document.getElementById('app'));