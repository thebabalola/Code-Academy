/* - -- Classes ---
 Classes are a tool(Blueprints/Templates) that developers use to quickly produce similar objects

	- We call the 'constructor()' method every time it creates a new instance of a class. 
	  But if we dont, we create the object directly, without the constructore method

	- Inside of the constructor() function, we use the 'this' keyword. 
	  In the context of a class, this refers to an instance of that class. In the Dog class, 
	  we use this to set the value of the Dog instance’s name property to the name argument.

	  N.B: `Factory function` works exactly like object and `constructor function` works exactly like classes
*/


// Sample 1 (Object)
let halley = {
	_name: 'Halley',
	_behavior: 1,
	
	get name() {
	  return this._name;
	},
	
	get behavior() {
	  return this._behavior;
	},
	  
	incrementBehavior() {
	  this._behavior++;
	}
  }


// Sample 2 (Class - with constructor)
class Dog {
	constructor(name) {
	  this._name = name;
	  this._behavior = 0;
	}
  
	get name() {
	  return this._name;
	}
	get behavior() {
	  return this._behavior;
	}   
  
	incrementBehavior() {
	  this._behavior ++;
	}
  }
  
  const hailey = new Dog('Hailey');
  console.log(hailey.name); // Print name value to console
  console.log(hailey.behavior); // Print behavior value to console
  halley.incrementBehavior(); // Add one to behavior

  const murphy = new Dog('Murphy')
  console.log(murphy.name); // Print name value to console
  console.log(murphy.behavior); // Print behavior value to console
  
  console.log(Dog)



// --- Constructor ---	
  	// A constructor is a special function used to initialize objects in object-oriented programming.

class Surgeon {
	constructor(name, department) {
		this.name = name;
		this.department = department
	}
}



// --- Instance --	
	//  An instance is an object that contains the property names and methods of a class

const surgeonRomero = new Surgeon('Francisco Romero', 'Cardiovascular');
const surgeonJackson = new Surgeon('Ruth Jackson', 'Orthopedics');
console.log(surgeonRomero);
console.log(surgeonJackson)



// --- Methods (Getters method) ---
	/* The underscore (_) before a property name, like _name, is a common naming convention
	 used to indicate that the property is private or intended for internal use only 
	 
	 - It serves as a reminder to developers to use getter and setter methods instead of 
	 directly accessing or modifying the property.
	- It distinguishes internal/private properties from public properties.
	 */

	class Doc {
		constructor(name, department) {
			this._name = name;
			this._department = department;
			this._remainingVacationDays = 20;
		}

		get name() {
			return this._name;
		}
		get department() {
			return this._department;
		}
		get remainingVacationDays() {
			return this._remainingVacationDays;
		}

		takeVacationDays(daysOff) {
			this._remainingVacationDays = this._remainingVacationDays - daysOff
		}
	}

	const doctorHarry = new Doc('Harry Ducks', 'Cardiovascular');
	const doctorKatie = new Doc('Katie Jackson', 'Orthopedics');

		//Method calls
		console.log(doctorHarry.name);

		doctorHarry.takeVacationDays(3);
		console.log(doctorHarry.remainingVacationDays);	//outputs: 17



// --- Inheritance ---
	// The child classes inherit the properties and methods from their parent class(superclass). 

	class HospitalEmployee {
		constructor(name){
		  this._name = name;
		  this._remainingVacationDays = 20;
		}
		get name(){
		  return this._name;
		}
		get remainingVacationDays(){
		  return this._remainingVacationDays;
		} 
		takeVacationDays(daysOff){
		  return this._remainingVacationDays -= daysOff
		}
	  
	  }

	  // inheritance of class HospitalEmployee
	  class Doctor {
		constructor(name){
			this._name = name;
			this._remainingVacationDays = 20;
			this._insurance = insurance;
		}
		get name(){
			return this._name;
		}
		get remainingVacationDays(){
			return this._remainingVacationDays
		}
		takeVacationDays(daysOff) {
			this._remainingVacationDays -= daysOff;
		}
	  }


	  // Inheritance II
	  class Nurse extends HospitalEmployee{ /*Extends all of the parent constructor & methods, into the 'nurse' child class */
		constructor(name, certifications){
			super(name);	/*Calls the parent constructor methods & other properties under the
							 parent constructor method (name, remainingVacationDays, getters etc)*/
			this._certifications = certifications;
		}
	}

	const nurseJoy = new Nurse('Joy', ["CPR", "First Aid"])
	nurseJoy.takeVacationDays(5);
	console.log(nurseJoy);
	console.log(nurseJoy.remainingVacationDays);


	// Inheritance IV
	class Intern extends HospitalEmployee{ 
		constructor(name, certifications){
			super(name);
				
			this._certifications = certifications;
		}

		get certifications() {
			return this._certifications;
		};

		addCertification(newCertification){
			this._certifications.push(newCertification) //adds new certfications to certfication array
		}
	}

	const internOliv = new Intern('Olivia', ['Trauma','Pediatrics']);
	internOliv.addCertification('Genetics');

	console.log(internOliv);
	console.log(internOliv.certifications); 


 

// --- Static Methos --- 
	// static methods are functions defined on a class, and can be called without creating an instance of the class. They are associated with the class itself, not its instances

	class wildAnimal {
		constructor(name) {
		  this._name = name;
		  this._behavior = 0;
		}

		static generatePassword(){
			return Math.floor(Math.random() * 100001);
		}
		  
		static generateName() {
		  const names = ['Angel', 'Spike', 'Buffy', 'Willow', 'Tara'];
		  const randomNumber = Math.floor(Math.random()*5);
		  return names[randomNumber];
		}
	  } 
	
	console.log(wildAnimal.generateName()); // returns a name
	console.log(wildAnimal.generatePassword());	//returns random passWord

	/*N.B: 
	You cannot access the .generateName() method from instances of the Animal class or instances of its subclasses 
	const tyson = new Animal('Tyson'); 
	tyson.generateName(); // TypeError

	The example above will result in an error, because you cannot call static methods (.generateName()) on an instance (tyson
	*/
