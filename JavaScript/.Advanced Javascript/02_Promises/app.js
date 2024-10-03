// ----- What is a Promise? -----
	// (Promises are objects that represent the eventual outcome of an asynchronous operation.)

	// Pending: The initial state— the operation has not completed yet.
	// Fulfilled: The operation has completed successfully and the promise now has a resolved value. For example, a request’s promise might resolve with a JSON object as its value.
	// Rejected: The operation has failed and the promise has a reason for the failure. This reason is usually an Error of some kind	


// ----- Constructing a Promise Object -----
		// (To create a new Promise object, we use the new keyword and the Promise constructor method:)

const executorFunction = (resolve, reject) => { };	//The executor function (has two functions as parameters)
const myFirstPromise = new Promise(executorFunction);	// new promise() object

const executorFunctions = (resolve, reject) => {
	if (someCondition) {
		resolve('I resolved!');
	} else {
		reject('I rejected!'); 
	}
   }
const myFirstPromises = new Promise(executorFunctions);		



	// An inventory object
const inventory = {
  sunglasses: 1900,
  pants: 1088,
  bags: 1344
};

	//The executor function
const myExecutor = (resolve , reject) => {
  if (inventory.sunglasses > 0){
    resolve('Sunglasses order processed.');
  }
  else {
    reject('That item is sold out.');
  }
}


const orderSunglasses = function(){
  return new Promise(myExecutor);
}

const orderPromise = orderSunglasses();
console.log(orderPromise);



// ----- The Node setTimeout() Function -----
		// (setTimeout() is a Node API (a comparable API is provided by web browsers) that 
		// uses callback functions to schedule tasks to be performed after a delay. 
		// setTimeout() has two parameters: a callback function and a delay in milliseconds.)

		setTimeout(function, delay);

const delayedHello = () => {
  console.log('Hi! This is an asynchronous greeting!');
};

setTimeout(delayedHello, 2000);  // i.e In at least two seconds delayedHello() will be invoked(and it content displayed)



console.log("This is the first line of code in app.js.");
// Keep the line above as the first line of code
// Write your code here:
function usingSTO(){
  console.log('used STO');
}

setTimeout(usingSTO, 1500);   //outputs the first and last console function , then the console in function usingSTO

// Keep the line below as the last line of code:
console.log("This is the last line of code in app.js.");



// ----- Consuming Promises -----
		// (The initial state of an asynchronous promise is 'pending')

// .then() is a higher-order function— it takes two callback functions as arguments. 
// We refer to these callbacks as handlers. When the promise settles, the appropriate handler will be invoked with that settled value.

// The first handler, sometimes called onFulfilled, is a success handler, and it should contain the logic for the promise resolving.
// The second handler, sometimes called onRejected, is a failure handler, and it should contain the logic for the promise rejecting.


		// ----- Success and Failure Callback Functions -----
			// (To handle a “successful” promise, or a promise that resolved, we invoke .then() on the promise,)

			const prom = new Promise((resolve, reject) => {
				resolve('Yay!');
			  });
			  
			  const handleSuccess = (resolvedValue) => {
				console.log(resolvedValue);
			  };
			  
			  prom.then(handleSuccess); // Prints: 'Yay!'  (result of prom, passed into handleSuccess)



			  let proms = new Promise((resolve, reject) => {
				let num = Math.random();
				if (num < .5 ){
				  resolve('Yay!');
				} else {
				  reject('Ohhh noooo!');
				}
			  });
			  
			  //function to handle success
			  const handleSucces = (resolvedValues) => {
				console.log(resolvedValues);
			  };
			  
			  //function to handle failure
			  const handleFailures = (rejectionReason) => {
				console.log(rejectionReason);
			  };
			  
			  prom.then(handleSucces, handleFailures);   //.then() function handles both success and failure arguments


			  