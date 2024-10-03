// ------- Class -------
		// (Classes are a tool that developers use to quickly produce similar objects.)


// ------- Introduction to Classes -------
class Dog {
  constructor(name) {
    this._name = name;
    this._behavior = 0;		//default property - because a value have been assigned to it
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

// instance (hailey) of class 'Dog'
const halley = new Dog('Halley');
console.log(halley.name); // Print name value to console
console.log(halley.behavior); // Print behavior value to console
halley.incrementBehavior(); // Add one to behavior

console.log(Dog)



// ------- Constructor ------
		// constructor() method - is a used to create a new instance of a class.

class Surgeon {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }
}


// ------- Instance -------
		// instance is an object that contains the property names and methods of a class

const surgeonRomero = new Surgeon('Francisco Romero', 'Cardiovascular')   //an instance of the surgeon class
const surgeonJackson = new Surgeon('Ruth Jackson', 'Orthopedics')	// another instance



// ------- Methods -------
class Surgeon {
	constructor(name, department) {
	  this._name = name;
	  this._department = department;
	  this._remainingVacationDays = 20;
	}
	get name(){
	  return this._name;
	}
	get department(){
	  return this._department;
	}
	get remainingVacationDays(){
	  return this._remainingVacationDays;
	}

	// This is a method
	takeVacationDays(daysOff){
	  this._remainingVacationDays = this._remainingVacationDays - daysOff
	}
  }
  
  const surgeonRomero = new Surgeon('Francisco Romero', 'Cardiovascular');
  const surgeonJackson = new Surgeon('Ruth Jackson', 'Orthopedics');


  // ------- Methods Calls -------
surgeonRomero.takeVacationDays(3); // passes 3 to the takevacationdays method parameter

console.log(surgeonRomero.name); // prints Romeros name
console.log(surgeonRomero.remainingVacationDays)  // prints remaining vacation day left





// ------- Inheritance I -------
  	// inheritance, you can create a parent class (also known as a superclass) with properties and methods that multiple child classes (also known as subclasses) share.

// The parent class
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

	// Static Method
	static generatePassword(){
		return Math.floor(Math.random() * 10000) + 1;
	  }
  
  }

// Child class (the inheritance)
  	// (When we call extends in a class declaration, all of the parent methods are available to the child class)
class Nurse extends HospitalEmployee{
	constructor(name, certifications){
	  super(name); //Calls the parent constructor methods & other properties under the parent constructor method
	  this._certifications = certifications;
	}
	get certifications(){
		return this._certifications;
	  }
	
	addCertification(newCertification) {
		this._certifications.push(newCertification); //adds new certification to the end of the array
	  }
  }
  
const nurseOlynyk = new Nurse('Olynyk', ['Trauma', 'Pediatrics']);  // instance of the child class Nurse
nurseOlynyk.takeVacationDays(5)		//passing value '5' tot he takeVacationdays() method
nurseOlynyk.addCertification('Genetics');   //passes a new certification to the array
console.log(nurseOlynyk.certifications);
console.log(nurseOlynyk.remainingVacationDays)



// Static Methods
  	// (A static method in JavaScript is a method that belongs to the class itself rather than to any instance of the class.)

class Animal {
  constructor(name) {
    this._name = name;
  }
  speak() {
    console.log(`${this._name} makes a sound.`);	// Instance method: can be called on an instance of the class
  }
  
  // Static method: belongs to the class, not to instances
  static info() {
    console.log("Animals are multicellular organisms that form the kingdom Animalia.");
  }
}

const dog = new Animal("Dog"); 	// Create an instance of Animal
dog.speak(); 	// Call the instance method.     Outputs: Dog makes a sound
Animal.info(); 	// Call the static method 	// Output: Animals are multicellular organisms that form the kingdom Animalia.




//EXERCISE
	// Create child class for Doctors