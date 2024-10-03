// Creating Object Literals
     // (Objects are collections of related data and functionality)

let fasterShip = {
	'Fuel Type': 'Turbo Fuel',
	color: 'silver'
 };


// Accessing Properties
    //There are two ways we can access an object’s property

//	(The dot . notation)
let spaceships = {
  homePlanet: 'Earth',
  color: 'silver',
  'Fuel Type': 'Turbo Fuel',
  numCrew: 5,
  flightPath: ['Venus', 'Mars', 'Saturn']
};

let crewCount = spaceships.numCrew;  //returns 5
let planetArray = spaceships.flightPath;  // returns the array of venus, mars, saturn


// (The Bracket [ ] Notattion)

let spaceship = {
	'Fuel Type' : 'Turbo Fuel',
	'Active Mission' : true,
	homePlanet : 'Earth', 
	numCrew: 5
   };
  
  let propName =  'Active Mission'; //normal variable

  // Write your code below
  let isActive = spaceship['Active Mission'];
  
  propName = console.log(spaceship['Active Mission']);  // assigns Active Mission property to the  propName variable


// using function to read a specific property from any object passed to it,
let returnAnyProp = function (objectName, propName){
	objectName[propName];
} 

returnAnyProp(spaceship, 'homePlanet'); // Returns 'Earth'


// Property Assignment
    //  spaceship ['Active Mission'] = 'veg oil';    or   spaceship.color = 'gold';

let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth',
  color: 'silver',
  'Secret Mission' : 'Discover life outside of Earth.'
};

spaceship.color = 'glorious gold'; // reassigns 'glorious gold' to color property

spaceship.numEngines = 7; //adds & assigns a new property to the spaceship object

delete spaceship['Secret Mission']; // deletes the 'Secret Mission' property from the spaceship object


// Methods
	// They are functions defined as a property of an object

let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

let alienShip = {
  retreat: function() {
    console.log(retreatMessage);
  },
  takeOff () {
    console.log('Spim... Borp... Glix... Blastoff!')
  }
};

alienShip.retreat();  //invoked function
alienShip.takeOff();


//Nested Objects
   // Nested objects in JavaScript refer to objects that contain other objects as their properties. This structure allows you to create complex data models where each property can hold an object, array, or any other data type.

let spaceship = {
  passengers: null,
  telescope: {
    yearBuilt: 2018,
    model: "91031-XLT",
    focalLength: 2032 
  },
  crew: {
    captain: { 
      name: 'Sandra', 
      degree: 'Computer Engineering', 
      encourageTeam() { console.log('We got this!') },
     'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
  },
  engine: {
    model: "Nimbus2000"
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      monitors: "HD"
    },
    'back-up': {
      battery: "Lithium",
      terabytes: 50
    }
  }
}; 
// Assigns first array element of captain favorite food to capFave variable.
let capFave = spaceship.crew.captain['favorite foods'][0];

// assigning an array of objects to the spaceship passenger property. These objects represens the spaceship‘s passengers as individual
spaceship.passengers = [
  { name: 'John Doe', age: 30, occupation: 'Engineer' },
  { name: 'Jane Smith', age: 25, occupation: 'Biologist' }
];

//asiging the first passager in the passenegr object array to firstPassenger variable
let firstPassenger = spaceship.passengers[0];


// Pass By Reference
   //This means when we pass a variable assigned to an object into a function as an argument, 

const spaceship = {
  homePlanet : 'Earth',
  color : 'silver'
};  // an object with two properties (spaceship is declared as a const variable, which means that you cannot reassign).  However, const does not make the object itself immutable; it only prevents reassignment of the spaceship variable.
 
let paintIt = obj => {
  obj.color = 'glorious gold'
};  // a function that takes 1 arg. //Object Reference: The function paintIt receives a reference to the spaceship object and modifies its properties.
 
paintIt(spaceship);   //function call|involking (passed spaceship). 
 
spaceship.color // Returns 'glorious gold'

//N.B : When we passed spaceship into that function, obj became a reference to the memory location of the spaceship object, but not to the spaceship variable. 
 	//This is because the obj parameter of the tryReassignment() function is a variable in its own right. The body of tryReassignment() has no knowledge of the spaceship variable at all!

  //Example 2

let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth'
};

// Write your code below
function greenEnergy(obj){
  obj['Fuel Type'] = 'avocado oil'  //reassigned Fuel Type a new value
}
greenEnergy(spaceship); //calls the spaceship object into the green Energy object

let remotelyDisable = (objec) => {
  objec['disabled'] = true;  // also a reassigned value
}
remotelyDisable(spaceship); //invoking the spaceship object into the remotelyDisable object


console.log(spaceship);


// Looping Through Objects
   //for...in syntax helps iterates through objects.

let spaceship = {
    crew: {
    captain: { 
        name: 'Lily', 
        degree: 'Computer Engineering', 
        cheerTeam() { console.log('You got this!') } 
        },
    'chief officer': { 
        name: 'Dan', 
        degree: 'Aerospace Engineering', 
        agree() { console.log('I agree, captain!') } 
        },
    medic: { 
        name: 'Clementine', 
        degree: 'Physics', 
        announce() { console.log(`Jets on!`) } },
    translator: {
        name: 'Shauna', 
        degree: 'Conservation Science', 
        powerFuel() { console.log('The tank is full!') } 
        }
    }
}; 

// Write your code below

for (let crewMember in spaceship.crew) {
  console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`)  // outputs: 'chief officer: Dan'.
}; 

for (let crewMember in spaceship.crew) {
  console.log(`${spaceship.crew[crewMember].name}: ${spaceship.crew[crewMember].degree}`) // outputs: 'Lily: Computer Engineering'.
};
