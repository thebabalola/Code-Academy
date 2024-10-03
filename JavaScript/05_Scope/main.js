// Blocks and Scopes

const city = 'New York City';  //Global variable

const logCitySkyline = function() {
  let skyscraper = 'Empire State Building';  //local variable
  return 'The stars over the ' + skyscraper + ' in ' + city;  //(mixed both global & local variable)
}

console.log(logCitySkyline());


// Global Scope
const satellite = 'The Moon';
let galaxy = 'The Milky Way';
var stars = 'North Star';

const callMyNightSky = () => {
  return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
}

console.log(callMyNightSky());  //function call, into the console, so it can be displaced on screen


// Block scope (also known as local variable)
const logVisibleLightWaves = () => {
	const lightWaves = 'Moonlight';
	console.log(lightWaves);
  }
  
  logVisibleLightWaves();
  console.log(lightWaves); //would result to an error, as it is a local variable been called.
  
  // Scope pollution
  let num = 50;

  const logNum = () => {
	num = 100; // Take note of this line of code
	console.log(num);
  };
  
  logNum(); // Prints 100
  console.log(num); // Prints 100

  // Good Scope practice
  const logVisibleLightWave = () => {
	let lightWaves = 'Moonlight';
	  let region = 'The Arctic';
	// Add if statement here:
	if(region === 'The Arctic') {
	  let lightWaves = 'Northern Lights';
	  console.log(lightWaves)
	}
	console.log(lightWaves);
  };
  
  logVisibleLightWave();