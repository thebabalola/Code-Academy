/* ---- Javascript Runtime Environment ----

A runtime environment is where your program will be executed.
	- Browser Runtime (Chrome, or Firefox) Front-End Apllication
	- Node Runtime (Terminal) Back-End Apllication

*/



// --- Broswer Runtime Environment ---
	// The most common place where JavaScript code is executed is in a browser. (Applications created for and executed in the browser are known as front-end applications)

	window.alert('Hello World');
	// others to try: window.prompt() or window.confirm()



// --- Node RunTime Environment
	//In 2009, the Node runtime envwas created for the purpose of executing JavaScript code without a browser, thus enabling programmers to create full-stack (front-end and back-end) applications using only the JavaScript language. it is used to  access to the file system, databases, and networks attached to the server. --- 

	console.log(process.env.PWD);
	//outputs: directory where this current working file is located



// --- Implementing Modules in Node ---
	/* Modules are reusable pieces of code in a file that can be exported and then imported for use in another file
			my_app.js - math_function.js
						database_logic.js
						server_logic.js
						date_formatting.js

		Each of the above files, handles different particular task, and are then imported into the app.js.
		This modular strategy is sometimes called separation of concerns and is useful for several reason

		Others: - Node.js module.exports object to export code from a file
				- Node.js require() function to import functions and/or data from another module
	*/



// --- Implementing Modules in javascript: Nodejs vs ES6
	/*  In JavaScript, there are two runtime environments and each has a preferred module implementation:
		1. The browser’s runtime environment and the ES6 import/export syntax.
		2. The Node runtime environment and the module.exports and require() syntax.

	 */
	
	// Implementing Modules in Node

	