// ADVANCE OBJECT

// The this keyword (this allows us access other properties with a functionality(function) in an object). it enables us call an object property into a method.
        //Calling Objects - object that a method belongs to is called the calling object.
const goat = {
	dietType: 'herbivore',
	makeSound() {
	  console.log('baaa');
	},
	diet() {
	  console.log(this.dietType);  // if we try to access 'dietType' without add the this keyword, it would throw a reference error.
	}
  };
  
  goat.diet(); 
  // Output: herbivore


  const robot = {
	model: '1E78V2',
	energyLevel: 100,
	provideInfo(){
	  return `I am ${this.model} and my current energy level is ${this.energyLevel}.`
	}  // Replace ‘MODEL’ and ‘ENERGYLEVEL’ with the calling object’s model and energyLevel property. 
  };
  
  console.log(robot.provideInfo());


// Arrow Functions and this
    // (this involves using the arrow function as against the normal ES6 function )
	// The key takeaway from the example above is to avoid using arrow functions when using this in a method!

	// Refactor the below
const robo = {
  energyLevel: 100,
  // checkEnergy: () => {  - change the arrow function to normal Es6 function
  checkEnergy: function () {
    console.log('Energy is currently at' + this.energyLevel %.) // 
  }
}

robo.checkEnergy();


// Privacy
       // Accessing and updating properties is fundamental in working with objects.However, there are cases in which we don’t want other code simply accessing and updating an object’s properties.
	   // We define privacy in objects as the idea that only certain properties should be mutable or able to change in value.
		// One common convention is to place an underscore _ before the name of a property to mean that the property should not be altered. 

const bankAccount = {
  _amount: 1000   // the understore _ will inform other programmers not to mutate the property (despite the fact that it is possible)
}


const robot = {
	_energyLevel: 100,
	recharge(){
	  this._energyLevel += 30;
	  console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
	}
  };
  
  robot._energyLevel = 'high';
  robot.recharge(); // will output: Recharged! Energy is currently at high30% (which is not suppose to be - energy levelmwhne added with 30 - is suppose to return or output 130)

// GETTERS and SETTERS 
    // (Both methods are used to respect the intention of properties prepended, or began, with _. Getters can return the value of internal properties and setters can safely reassign property values. For now, let’s see what happens if we can change properties that don’t have setters or getters)

// Getters
  	// (involves the use of the 'Get' keyword)They are methods that get and return the internal properties of an object.

const person = {
  firstName: "John",
  lastName: "Doe",
  get fullName() {
    return this.firstName + " " + this.lastName;
  }
};

console.log(person.fullName);


const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  
	// // a getter method that gets and returns object properties (this particular one gets the energyLevel property)
  get energyLevel() {
    if (typeof this._energyLevel === 'number') {
      return 'My current energy level is ' + this._energyLevel;
    } else {
      return 'System malfunction: cannot retrieve energy level.';
    }
  }
};

console.log(robot.enenergyLevel);


//Setters
	// (Along with getter methods, we can also create setter methods which reassign values of existing properties within an object)

  const person = {
    firstName: "John",
    lastName: "Doe",
    
    // Getter for fullName
    get fullName() {
      return this.firstName + " " + this.lastName;
    },
  
    // Setter for fullName
    set fullName(name) {
      const parts = name.split(" ");
      this.firstName = parts[0];
      this.lastName = parts[1];
    }
  };
  
  // Using the getter to access the full name
  console.log(person.fullName); // Output: "John Doe"
  
  // Using the setter to pass 'Jane Smith' update the full name
  person.fullName = "Jane Smith";
  
  // Accessing the updated values
  console.log(person.firstName); // Output: "Jane"
  console.log(person.lastName);  // Output: "Smith"
  console.log(person.fullName);  // Output: "Jane Smith"



const person = {
  firstName: "John",
  lastName: "Doe",
  
  // Getter for fullName
  get fullName() {
    return this.firstName + " " + this.lastName;
  },

  // Setter for fullName
  set fullName(name) {
    const parts = name.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
};

// Using the getter to access the full name
console.log(person.fullName); // Output: "John Doe"

// Using the setter to update the full name
person.fullName = "Jane Smith";

// Accessing the updated values
console.log(person.firstName); // Output: "Jane"
console.log(person.lastName);  // Output: "Smith"
console.log(person.fullName);  // Output: "Jane Smith"


const person = {
  _age: 37,

  set age(newAge){
    if (typeof newAge === 'number'){
      this._age = newAge;
    } else {
      console.log('You must assign a number to age');
    }
  }
};

const robot = {
	_model: '1E78V2',
	_energyLevel: 100,
	_numOfSensors: 15,
	get numOfSensors(){
	  if(typeof this._numOfSensors === 'number'){
		return this._numOfSensors;
	  } else {
		return 'Sensors are currently down.'
	  }
	},
	 set numOfSensors(num) {
	  if (typeof num === 'number' && num >= 0) {
		return this._numOfSensors = num;
	  }
	  else {
		'Pass in a number that is greater than or equal to 0'
	  }
	 }
  };
  
  robot.numOfSensors = 100;
  console.log(robot.numOfSensors) 


// Factory Functions
  	// A factory function is a function that returns an object and can be reused to make multiple object instances. 
  	// (They can also have parameters allowing us to customize the object that gets returned.)

const monsterFactory = function (name, age, energySource, catchPhrase) {
  return { 
    name: name,
    age: age, 
    energySource: energySource,
    scare() {
      console.log(catchPhrase);
    } 
  }
};

const ghost = monsterFactory('Ghouly', 251, 'ectoplasm', 'BOO!');
ghost.scare(); // 'BOO!'


function robotFactory (model, mobile) {
	return {
	  model: model,
	  mobile: mobile,
  
	  beep () {
		console.log('Beep Boop');
	  }
	}
  }       // The above is the definition of a factory function.
  
  const tinCan = robotFactory('P-500', true);  //declaring tincan - using the robotFactory function
  tinCan.beep() // calling or invoking beep on tincan

  console.log(tinCan.model); // outputs P-500
  console.log(tinCan);   // outputs the whole tinCan object property


  	//OTHERS


// Property Value Shorthand
  	// Destructuring (it is a ES6 introduced shortcuts for assigning properties to variables)

	// Normal function property
const monsterFactory = (name, age) => {
  return { 
    name: name,
    age: age
  }
};

	//Destructured - shorthand property value
const monsterFactory = (name, age) => {
	return { 
	  name,
	  age 
	}
  };
  


// Destructured Assignment
  // A techniqueto save ourselves some keystrokes.

  //example 1
const vampire = {
  name: 'Dracula',
  residence: 'Transylvania',
  preferences: {
    day: 'stay inside',
    night: 'satisfy appetite'
  }
};

// A typical way of assigning objects propertyvalue to a variable.
const vamReside = vampire.residence; 
console.log(residence); // Prints 'Transylvania'


   // the ES6 Destructure assignment way assigning the value of an object property to a variable.
const { residence } = vampire; 
console.log(residence); // Prints 'Transylvania'


	//  Using destructured assignment to grab nested properties of an object:
const { day } = vampire.preferences; 
console.log(day); // Prints 'stay inside'


const robot = {
	model: '1E78V2',
	energyLevel: 100,
	functionality: {
	  beep() {
		console.log('Beep Boop');
	  },
	  fireLaser() {
		console.log('Pew Pew');
	  },
	}
  };
  
  const {functionality} = robot;
  functionality.beep();



// Built-in Object Methods
    // This are objects methods already built-in javascript (e,g .valueOf(), .hasOwnProperty() )
	//  There are also useful Object class methods such as Object.assign(), Object.entries(), and Object.keys()

const robot = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

// What is missing in the following method call?
const robotKeys = Object.keys(robot);

console.log(robotKeys);

// Declare robotEntries below this line:
const robotEntries = Object.entries(robot)
console.log(robotEntries);

// Declare newRobot below this line:
const newRobot = Object.assign({laserBlaster: true, voiceRecognition: true}, robot);

console.log(newRobot);





REVIEW 
// <1 min
// Congratulations on finishing Advanced Objects!

// Let’s review the concepts covered in this lesson:

// The object that a method belongs to is called the calling object.
// The this keyword refers to the calling object and can be used to access properties of the calling object.
// Methods do not automatically have access to other internal properties of the calling object.
// The value of this depends on where the this is being accessed from.
// We cannot use arrow functions as methods if we want to access other internal properties.
// JavaScript objects do not have built-in privacy, rather there are conventions to follow to notify other developers about the intent of the code.
// The usage of an underscore before a property name means that the original developer did not intend for that property to be directly changed.
// Setters and getter methods allow for more detailed ways of accessing and assigning properties.
// Factory functions allow us to create object instances quickly and repeatedly.
// There are different ways to use object destructuring: one way is the property value shorthand and another is destructured assignment.
// As with any concept, it is a good skill to learn how to use the documentation with objects!
// You’re ready to start leveraging more elegant code for creating and accessing objects in your code!




    //Constructor Function
// A constructor function in JavaScript is a special type of function used to create and initialize objects. 
// When you call a function with the new keyword, it becomes a constructor, and it creates a new object that inherits 
// properties and methods defined in the function. Constructor functions allow you to easily create multiple instances of similar objects.


//Syntax of a Constructor Function
function Person(name, age) {
  this.name = name; // Assigns name to the newly created object
  this.age = age;   // Assigns age to the newly created object
  this.greet = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  };
}

// Creating an Object using a Constructor Function
// You use the new keyword to create a new object based on the constructor function.

const person1 = new Person('Alice', 30); // Creates a new object for Alice
const person2 = new Person('Bob', 25);   // Creates a new object for Bob

console.log(person1.name); // Output: Alice
console.log(person2.age);  // Output: 25

person1.greet(); // Output: Hello, my name is Alice and I am 30 years old.
person2.greet(); // Output: Hello, my name is Bob and I am 25 years old.


// Example: Constructor Function vs Object Literal
// Instead of writing object literals like this:

const person1 = { name: 'Alice', age: 30 };
const person2 = { name: 'Bob', age: 25 };


// You can use a constructor function to create similar objects dynamically:
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person1 = new Person('Alice', 30);
const person2 = new Person('Bob', 25);