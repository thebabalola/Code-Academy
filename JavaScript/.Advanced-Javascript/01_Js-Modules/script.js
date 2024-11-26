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