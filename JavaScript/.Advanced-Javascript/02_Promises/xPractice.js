//import { delayedHello } from "./script.js";
/* --- PROMISES --- */

const inventory = {
	sunglasses: 1900,
	pants:1088,
	bags: 1344
  };


  //long process 
function myExecutor(resolve, reject){
	if (inventory.sunglasses > 0){
		resolve('Sunglasses order processed.');
	}
	else {
		reject('That item is sold out.');
	}
}

function orderSunglasses(){
	return new Promise(myExecutor);
}


console.log(orderSunglasses())
 			//OR
const orderPromise = orderSunglasses();
console.log(orderPromise);




	// short process
const orderPants = new Promise((resolve, reject) => {
	if (inventory.pants > 10) {
		resolve('pants still in stock');
	}
	else {
		reject('pants are less than 10 in number and are now running out of stock');
	}
})

console.log(orderPants);





/* --- The NODE seTimeout() FUNCTION --- */

function usingSTo() {
	console.log('i am using setTimeOut function for asynchronous programming')
}

setTimeout(usingSTo, 3000);

console.log('i invoked my usingSTO function in the setTimeout func above'); 
//this prints first, and console.log in the usingSTO prints 2 seconds after





/* --- CONSUMING PROMISES (Success and Failure Callback Functions) ---*/
	// .then() , .catch()

	const inInventory = {
		facecap: 0,
		belts: 1088,
		shoes: 1344
	  };

	const order = [['facecap', 1], ['shoes', 2]];

	function checkInventory(order){
		return new Promise((resolve, reject) => {
		  setTimeout(() => {
			let inStock = order.every(item => inInventory[item[0]] >= item[1]); //.every() is a method

			if (inStock) {
			  resolve(`Thank you. Your order was successful.`);
			} else {
			  reject(`We're sorry. Your order could not be completed because some items are sold out.`);
			}
		  }, 1000);
		})
	}

	function handleSuccess(onFulfilled){	//logic that handles success
		console.log(onFulfilled)
	}

	function handleFailure(onRejected){	//logic that handles failure
		console.log(onRejected)
		console.error(onRejected)
	}

	checkInventory(order).then(handleSuccess).catch(handleFailure);
	//checkInventory(order).then(handleSuccess, handleFailure)// authomatically handles resolve and reject
	//checkInventory(order).then( null, handleFailure) //handles only reject as success is'nt defined

	// .then() -
	//checkInventory(order).then(handleSuccess);
	

	// .catch()
	//checkInventory(order).catch(handleFailure);


	//All together
	checkInventory(order)
	.then(handleSuccess)
	.catch(handleFailure);
	




// --- CHAINING MULTIPLE PROMISES (composition) ---
const store = {
	sunglasses: {
	  inventory: 817, 
	  cost: 9.99
	},
	pants: {
	  inventory: 236, 
	  cost: 7.99
	},
	bags: {
	  inventory: 17, 
	  cost: 12.99
	}
  };

  
  const ordered = {
	items: [['sunglasses', 1], ['bags', 2]],
	giftcardBalance: 79.82
  };
  

  const checkInventory = (ordered) => {
	return new Promise ((resolve, reject) => {
	 setTimeout(()=> {  
	 const itemsArr = ordered.items;  
	 let inStock = itemsArr.every(item => store[item[0]].inventory >= item[1]);
	 
	 if (inStock){
	   let total = 0;   
	   itemsArr.forEach(item => {
		 total += item[1] * store[item[0]].cost
	   });
	   console.log(`All of the items are in stock. The total cost of the order is ${total}.`);
	   resolve([ordered, total]);
	 } else {
	   reject(`The order could not be completed because some items are sold out.`);
	 }     
  }, generateRandomDelay());
   });
  };
  
  const processPayment = (responseArray) => {
	const ordered = responseArray[0];
	const total = responseArray[1];
	return new Promise ((resolve, reject) => {
	 setTimeout(()=> {  
	 let hasEnoughMoney = order.giftcardBalance >= total;
	 // For simplicity we've omited a lot of functionality
	 // If we were making more realistic code, we would want to update the giftcardBalance and the inventory
	 if (hasEnoughMoney) {
	   console.log(`Payment processed with giftcard. Generating shipping label.`);
	   let trackingNum = generateTrackingNumber();
	   resolve([ordered, trackingNum]);
	 } else {
	   reject(`Cannot process order: giftcard balance was insufficient.`);
	 }
	 
  }, generateRandomDelay());
   });
  };
  
  
  const shipOrder = (responseArray) => {
	const ordered = responseArray[0];
	const trackingNum = responseArray[1];
	return new Promise ((resolve, reject) => {
	 setTimeout(()=> {  
	   resolve(`The order has been shipped. The tracking number is: ${trackingNum}.`);
  }, generateRandomDelay());
   });
  };
  
  
  // This function generates a random number to serve as a "tracking number" on the shipping label. In real life this wouldn't be a random number
  function generateTrackingNumber() {
	return Math.floor(Math.random() * 1000000);
  }
  
  // This function generates a random number to serve as delay in a setTimeout() since real asynchrnous operations take variable amounts of time
  function generateRandomDelay() {
	return Math.floor(Math.random() * 2000);
  }
  

 	 /* -- Common Mistake (when chaining) --
  	Mistake 1: Nesting promises instead of chaining them.
	Mistake 2: Forgetting to return a promise.
   */ 
checkInventory(ordered)
.then((resolvedValueArray) => {
  // Write the correct return statement here:
  return processPayment(resolvedValueArray);
 
})
.then((resolvedValueArray) => {
  // Write the correct return statement here:
  return processPayment(resolvedValueArray);
})
.then((successMessage) => {
  console.log(successMessage);
})
.catch((errorMessage) => {
  console.log(errorMessage);
});





// --- USING PROMISE.ALL() ---

const checkAvailability = (itemName, distributorName) => {
    console.log(`Checking availability of ${itemName} at ${distributorName}...`);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (restockSuccess()) {
                console.log(`${itemName} are in stock at ${distributorName}`)
                resolve(itemName);
            } else {
                reject(`Error: ${itemName} is unavailable from ${distributorName} at this time.`);
            }
        }, 1000);
    });
};

	// This is a function that returns true 80% of the time
	// We're using it to simulate a request to the distributor being successful this often
function restockSuccess() {
    return (Math.random() > .2);
}



const onFulfill = (itemsArray) => {
	console.log(`Items checked: ${itemsArray}`);
	console.log(`Every item was available from the distributor. Placing order now.`);
  };
  
  const onReject = (rejectionReason) => {
	  console.log(rejectionReason);
  };


   // promise.all() useage
const checkSunglasses = checkAvailability('sunglasses', 'Favorite Supply Co.');
const checkPants = checkAvailability('pants', 'Favorite Supply Co.'); 
const checkBags = checkAvailability('bags', 'Favorite Supply Co.');

Promise.all([checkSunglasses, checkPants, checkBags])
  .then(onFulfill)
  .catch(onReject);