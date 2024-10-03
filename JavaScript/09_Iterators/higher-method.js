//Function as a Data
//(inolves assigning function to a variable, as the variable value)

const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
	for(let i = 1; i <= 1000000; i++) {
	  if ( (2 + 2) != 4) {
		console.log('Something has gone very wrong :( ');
	  }
	}
  };
  
 
const isTwoPlusTwo = checkThatTwoPlusTwoEqualsFourAMillionTimes;

isTwoPlusTwo() //function call(also means executing/invoking)
console.log(isTwoPlusTwo.name);  //(print name of original function)


//Function as a Parameter
//(involves passing function as an argument to another function parameter)

const addTwo = num => {
	return num + 2;
  }
  
  const checkConsistentOutput = (func, val) => {
	let checkA = val + 2;
	let checkB = func(val); //the call-back func
  
	if (checkA === checkB){
	  return func(val)
	} 
	else {
	  return 'inconsistent results';
	}
  }
  
  console.log(checkConsistentOutput(addTwo, 16)); //outputs 18


higherOrderFunc(() => {
	for (let i = 0; i <= 10; i++){
	  console.log(i);
	}
  });  //an anonymous function was passed into this function