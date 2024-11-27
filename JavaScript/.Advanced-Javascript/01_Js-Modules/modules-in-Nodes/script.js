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



// --- Implementing Modules in javascript: Nodejs vs ES6 ---
	/*  In JavaScript, there are two runtime environments and each has a preferred module implementation:
		1. The browser’s runtime environment and the ES6 import/export syntax.
		2. The Node runtime environment and the module.exports and require() syntax.

	 */



	// - Implementing Modules in Node -
		//Every JavaScript file that runs in a Node environment is treated as a distinct module. 
		//The functions and data defined within each module can be used by any other module, as long as those resources are properly exported and imported.

	/* Regualr Function */
	function celsiusToFahrenheit(celsius) {
		return celsius * (9/5) + 32;
	  }
	  
	  const freezingPointC = 0;
	  const boilingPointC = 100;
	  
	  console.log(celsiusToFahrenheit(23));



	// - Module.exports -
	  	// module.exports is an object that is built-in to the Node.js runtime environment.
		// Other files can now import this functions, with the require() function.

	/* Converter.js */	
	function celsiusToFahren(celsius) {  //function to conver cel - fah declared
		return celsius * (9/5) + 32;
	  }
	  
	  module.exports.celsiusToFahren = celsiusToFahren; //already defined function exported
	  module.exports.fahrenheitToCels = function(fahrenheit) { //newly defined function exported
		return (fahrenheit - 32) * (5/9);
	  };


	
	// - Require() -
	  	// The require() function accepts a string as an argument. That string provides the file path to the module you would like to import.

		/* Water-Limit.js */
		  const converters = require('./converters.js');

		  const freezingPointCel = 0;
		  const boilingPointCel = 100;
		  
		  const freezingPointFah = converters.celsiusToFahrenheit(freezingPointC);
		  const boilingPointFah = converters.celsiusToFahrenheit(boilingPointC);
		  
		  console.log(`The freezing point of water in Fahrenheit is ${freezingPointFah}`);
		  console.log(`The boiling point of water in Fahrenheit is ${boilingPointFah}`);




// --- Implementing Modules in Browsers (ES6)---
	