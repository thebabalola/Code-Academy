/* --- The Async Keyword --- */

	//traditonal Promise constructor
function withConstructor(num){
	return new Promise((resolve, reject) => {
	  if (num === 0){
		resolve('zero');
	  } else {
		resolve('not zero');
	  }
	});
  }
  
  withConstructor(0)
	.then((resolveValue) => {
	console.log(` withConstructor(0) returned a promise which resolved to: ${resolveValue}.`);
  });
  
  
  	// Refactoring the above with Async
async function withAsync(num){
	if (num === 0){
		return 'zero';
	  } else {
		return'not zero';
	  }
}

withAsync(0)
	.then((resolveValue) => {
	console.log(` withConstructor(0) returned a promise which resolved to: ${resolveValue}.`);
  });
  
  
  
  
  
// --- The Await Operator ---

   		// traditonal Promise constructor
   function brainstormDinner(){
	return new Promise((resolve, reject) => {
	console.log(`I have to decide what's for dinner...`)
	setTimeout(() => {
	  console.log('Should I make salad...?');
	  setTimeout(() => {
		console.log('Should I make ramen...?');
		setTimeout(() => {
		  console.log('Should I make eggs...?');
		  setTimeout(() => {
			console.log('Should I make chicken...?');
			resolve('beans');
		  }, 1000);
		}, 1000);
	  }, 1000);
	}, 1000);
  });
  };

  function nativePromiseDinner() {
	brainstormDinner().then((meal) => {
		console.log(`I'm going to make ${meal} for dinner.`);
	});
  }


  // Refactoring the above with Async
  async function announceDinner() {
	let mealtoMake = await brainstormDinner();
	console.log(`I'm going to make ${mealtoMake} for dinner.`);
  }

  announceDinner();    // The above means, first await brainstormDinner, after it setlled then do announceDinner





// --- Writing async Functions ---
const shopForBeans = () => {
	return new Promise((resolve, reject) => {
	  const beanTypes = ['kidney', 'fava', 'pinto', 'black', 'garbanzo'];
	setTimeout(()=>{
	  let randomIndex = Math.floor(Math.random() * beanTypes.length);
	  let beanType = beanTypes[randomIndex];
	  console.log(`2. I bought ${beanType} beans because they were on sale.`);
	 resolve(beanType);
	}, 1000);
  });
  }

  async function getBeans() {
	console.log(`1. Heading to the store to buy beans...`);
	let value = await shopForBeans();
	console.log(`3. Great! I'm making ${value} beans for dinner tonight!`);
  }

  getBeans();




// -- Handling Dependent Promises ---

  let soakTheBeans = (beanType) => {
	return new Promise((resolve, reject) => {
	  console.log('Time to soak the beans.');
	 setTimeout(()=>{
	   console.log(`... The ${beanType} beans are softened.`);
	   resolve(true);
	   }, 1000);
   });
 }
 
 let cookTheBeans = (isSoftened) => {
   return new Promise((resolve, reject) => {
	 console.log('Time to cook the beans.');
	 setTimeout(()=>{
	   if (isSoftened) {
		 console.log('... The beans are cooked!');
		 resolve('\n\nDinner is served!');
	   }
	 }, 1000);
   });
 }

 		/* handling the multiple promises */
	async function makeBeans (){
	  let type = await shopForBeans();
	  let isSoft = await soakTheBeans(type);
	  let dinner = await cookTheBeans(isSoft);
	  console.log(dinner);
	 }
	 
	 makeBeans();





 // --- Handling Errors ---
 let randomSuccess = () => {
	let num = Math.random();
	if (num < .5 ){
	  return true;
	} else {
	  return false;
	}
   };

let cookBeanSouffle = () => {
 return new Promise((resolve, reject) => {
   console.log('Fingers crossed... Putting the Bean Souffle in the oven');
   setTimeout(()=>{
     let success = randomSuccess();
     if(success){
       resolve('Bean Souffle');
     } else {
       reject('Dinner is ruined!');
     }
   }, 1000);
 });
};

async function hostDinnerParty(){
	try {
    let dinner = await cookBeanSouffle();
    console.log(`${dinner} is served!`);
	}
	catch(error){
    console.log(error);
    console.log('Ordering a pizza!')
	}
}

hostDinnerParty();



	/* --- Handling Independent Promises --- */
	let cookBeans = () => {
		return new Promise ((resolve, reject) => {
		 setTimeout(()=>{
		   resolve('beans');
		 }, 1000);
	   });
	  }
	  
	  let steamBroccoli = () => {
	   return new Promise ((resolve, reject) => {
		 setTimeout(()=>{
		   resolve('broccoli');
		 }, 1000);
	   });
	  }
	  
	  let cookRice = () => {
	   return new Promise ((resolve, reject) => {
		 setTimeout(()=>{
		   resolve('rice');
		 }, 1000);
	   });
	  }
	  
	  let bakeChicken = () => {
	   return new Promise ((resolve, reject) => {
		 setTimeout(()=>{
		   resolve('chicken');
		 }, 1000);
	   });
	  }
	  
	  
	  async function serveDinner(){
		let vegetablePromise = steamBroccoli();
		let starchPromise = cookRice();
		let proteinPromise = bakeChicken();
		let sidePromise = cookBeans();

		console.log(`Dinner is served. We're having ${await vegetablePromise}, ${await starchPromise}, ${await proteinPromise}, and ${await sidePromise}.`);
	  }

	  serveDinner();




	  /* --- Await Promise.all() --- */
	  async function serveDinnerAgain(){
		let foodArray = await Promise.all([steamBroccoli(), cookRice(), bakeChicken(), cookBeans()]); 
		
		console.log(`Dinner is served. We're having ${foodArray[0]}, ${foodArray[1]}, ${foodArray[2]}, and ${foodArray[3]}.`);
	  }
	  
	  serveDinnerAgain();