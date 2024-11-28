/* --- Promises ---
	Promises are objects that represent the eventual outcome of an asynchronous operation. 
	A Promise object can be in one of three states: - Pending
													- Fulfilled
													- Rejected
	
	i. Pending: The initial state— the operation has not completed yet. (waiting for a pending outcome)
	ii. Fulfilled: The operation has completed successfully and the promise now has a resolved value.
	iii. Rejected: The operation has failed and the promise has a reason for the failure. This reason is usually an Error of some kind.

		We refer to a promise as settled if it is no longer pending— it is either fulfilled or rejected.
	- If a promise is 'fulfilled', we’ll be able to perform related tasks,
	- If it’s rejected, we can take alternate steps,
		All promises eventually settle, enabling us to write logic for what to do if the promise fulfills or if it rejects.
*/ 



// --- Constructing a Promise Object ---
	/* To create a promise using the Promise constructor, which takes a function with two parameters:
	 resolve() and reject() functions. These are used to indicate whether the operation succeeded or failed. */

	
	 // -- Example 1 --
	 const myPromise = new Promise((resolve, reject) => {
		const success = true;
	  
		if (success) {
		  resolve("Operation succeeded!");
		} else {
		  reject("Operation failed!");
		}
	  });


	  /* --- Using a Promise ---
	  You use the .then(), .catch(), and .finally() methods to handle the result of a promise.

		.then(): Called when the promise is fulfilled.
		.catch(): Called when the promise is rejected.
		.finally(): Called after the promise is settled (fulfilled or rejected), regardless of the outcome.
	   */
		myPromise
		.then(result => {
		  console.log(result); // "Operation succeeded!"
		})
		.catch(error => {
		  console.log(error); // "Operation failed!"
		})
		.finally(() => {
		  console.log("Promise is settled.");
		});
		
	


	// -- Example 2 --
	// syntax
	function executorFunction (resolve, reject) { };
	const myFPromise = new Promise(executorFunction);

	// sample
	function executorFunction (resolve, reject) {  //First declare & define the function
		if (someCondition) {
			resolve('I resolved!');
		} else {
			reject('I rejected!'); 
		}
	   }

	const myFirPromise = new Promise(executorFunction); // Secondly, passed it into promises constructor
	   


	

// --- The Node seTimeout() Function ---
	/* setTimeout() is a Node API (a comparable API is provided by web browsers) that uses 
		callback functions to schedule tasks to be performed after a delay. setTimeout() has 
		two parameters: a callback function and a delay in milliseconds. */

		function returnPromiseFunction() {
			return new Promise((resolve, reject) => {
			  setTimeout(( ) => {resolve('I resolved!')}, 1000);
			});
		  };
		  
		  const prom = returnPromiseFunction();


		// -- sample 2 --
		function delayedHello() {
			console.log('Hi! This is an asynchronous greeting!');
		  };
		  
		  setTimeout(delayedHello, 2000);
		  




// --- CONSUMING PROMISES ---

		  /* 
		  i. .Then() method - : It allows us to say, “I have a promise, when it settles, 
		  						then here’s what I want to happen…” 
		  
		.then() is a higher-order function. it takes two callback functions as arguments. 
		We refer to these callbacks as handlers. When the promise settles, the appropriate
		handler will be invoked with that settled value. 
		  
		 - The first handler, called 'onFulfilled', is a success handler, and it should 
		 	contain the logic for the promise resolving. 
		 - The second handler, sometimes called onRejected, is a failure handler, and it
		  should contain the logic for the promise rejecting.
		  */

		  prom.then('function logic to carry out OR what to print to console')


		/* 
		ii .catch() : this function takes only one argument, onRejected. In the case of a
		 			rejected promise, this failure handler will be invoked with the reason
					for rejection. Using .catch() accomplishes the same thing as using a 
					.then() with only a failure handler. 
		*/

		prom.catch('function logic to carry out OR what to print to console')



// --- Chaining Multiple Promises (Composition)---
firstPromiseFunction()
.then((firstResolveVal) => {
  return secondPromiseFunction(firstResolveVal);
})
.then((secondResolveVal) => {
  console.log(secondResolveVal);
});


	/* Common Errors made when chaining
		Mistake 1: Nesting promises instead of chaining them. 	Mistake 2: Forgetting to return a promise. */






// --- Using Promise.all() ---
	/* Promise.all() accepts an array of promises as its argument and returns a single 
	promise. That single promise will settle in one of two ways: (also know nas fall back*/

 function earlierDefined(){
	//logics in here or a variable
 }
let myPromises = Promise.all([returnsPromOne(), returnsPromTwo(), returnsPromThree()]);

myPromises
  .then((arrayOfValues) => {
    console.log(arrayOfValues);
  })
  .catch((rejectionReason) => {
    console.log(rejectionReason);
  });







export {delayedHello, executorFunction }