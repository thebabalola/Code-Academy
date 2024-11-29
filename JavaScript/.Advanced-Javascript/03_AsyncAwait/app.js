// --- The ASYNC KEYWORD ---
	/* The async keyword is used to write function that handle asynchronous actions. 
	We wrap our asynchronous logic inside a function prepended with the async keyword. 
	Then, we invoke that function.

	async functions always return a promise. This means we can use traditional promise
	syntax, like .then() and .catch with our async functions
	*/


	// Syntax
	async function myFunc() {
		// Function body here
	  };
	  myFunc();

	  		//OR

	  const myFunc = async () => {
		// Function body here
	  };
	  myFunc();



	  async function fivePromise() { 
		return 5;
	  }
	  
	  fivePromise()
	  .then(resolvedValue => {
		  console.log(resolvedValue);
		})  // Prints 5
	  
	  
	  


// --- THE AWAIT OPERATOR ---
	/* The await keyword can only be used inside an async function. await is an operator: it returns 
  		the resolved value of a promise (either resolve, or reject)
  
  		- Since promises resolve in an indeterminate amount of time, await halts, or pauses, the
   		execution of our async function until a given promise is resolved.
  */

		   async function asyncFuncExample(){
			let resolvedValue = await myPromise();
			console.log(resolvedValue);
		  }
		  
		  asyncFuncExample(); // Prints: I am resolved now!




// --WRITING ASYNC FUNCTIONS ---
	/* We’ve seen that the await keyword halts the execution of an async function until a 
	promise is no longer pending.
		  - This because we use the async and await instead of .then() , .catch() etc
	*/

	let myPromise = () => {
		return new Promise((resolve, reject) => {
		  setTimeout(() => {
			resolve('Yay, I resolved!')
		  }, 1000);
		});
	  }
	  
	async function noAwait() {
		let value = myPromise();
		console.log(value);
	   }
	   
	async function yesAwait() {
		let value = await myPromise();
		console.log(value);
	   }
	   
	noAwait(); // Prints: Promise { <pending> }
	yesAwait(); // Prints: Yay, I resolved!





// -- HANDLING DEPENDENT PROMISES ---
	/* The true beauty of async...await is when we have a series of asynchronous actions
	which depend on one another. 
	For example, we may make a network request based on a query to a database. In that case,
	 we would need to wait to make the network request until we had the results from the database. 
	With native promise syntax, we use a chain of .then() making sure to return correctly each one:
	*/

	//using Promises
	function nativePromiseVersion() {
		returnsFirstPromise()
		  .then((firstValue) => {
			console.log(firstValue);
			return returnsSecondPromise(firstValue);
		  })
		 .then((secondValue) => {
			console.log(secondValue);
		  });
	  }
	  

	  //using Async-Await
	  async function asyncAwaitVersion() {
		let firstValue = await returnsFirstPromise();
		console.log(firstValue);
		let secondValue = await returnsSecondPromise(firstValue);
		console.log(secondValue);
	  }





// --- HANDLING ERRORS ---
	  /* With async...await, we use try...catch statements for error handling */

async function usingTryCatch() {
 try {
   let resolveValue = await asyncFunction('thing that will fail');
   let secondValue = await secondAsyncFunction(resolveValue);
 } catch (err) {
   // Catches any errors in the try block
   console.log(err);
 }
}

usingTryCatch();




	// --- Handling Independent Promises ---
			/* Remember that await halts the execution of our async function. This allows
			  us to conveniently write synchronous-style code to handle dependent promises.
			  But what if our async function contains multiple promises which are not 
			  dependent on the results of one another to execute? 
			  */
	async function waiting() {
		const firstValue = await firstAsyncThing();
		const secondValue = await secondAsyncThing();
		console.log(firstValue, secondValue);
	   }
	   
	async function concurrent() {
		const firstPromise = firstAsyncThing();
		const secondPromise = secondAsyncThing();
	   console.log(await firstPromise, await secondPromise);
	   }
	   

	   


	
	// --- Await Promise.all() ---
	   	/* Another way to take advantage of concurrency when we have multiple promises 
		which can be executed simultaneously is to await a Promise.all(). */

		async function asyncPromAll() {
			const resultArray = await Promise.all([asyncTask1(), asyncTask2(), asyncTask3(), asyncTask4()]);
			for (let i = 0; i<resultArray.length; i++){
			  console.log(resultArray[i]); 
			}
		  }
		  


	   


/* Summary
	i. Use await if a promise is dependent on the result of another.
	(i.e wait for one to finish before starting the next)

	ii. For independent promises:
		- Use concurrent construction (const promise = ...) with await to run them 
		simultaneously.
		- For full parallelism (no waiting at all in your function), use .then() for 
		individual handling. 
*/