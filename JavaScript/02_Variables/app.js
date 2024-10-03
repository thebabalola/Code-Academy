// Kelvin Weather
// The expression below converts kelvin forecasts to celsius, fahrenheit & newton

//variable definition
let kelvin = 293;
let celsius = 273;
// converts kelvin to celsius
celsius = kelvin - celsius;
console.log('The temperature in celsius is ' + celsius);

// converting celsius to fahrenheit
let fahrenheit;
fahrenheit = celsius * (9/5) + 32;
// rounding of fahrenheit from decimal to whole number
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is TEMPERATURE degrees ${fahrenheit}`);

//NOTE
//By using variables, your program should work for any Kelvin temperature
//— just change the value of kelvin and run the program again.

//What’s 0 Kelvin in Fahrenheit?



// Extra Pratice
// Converting celsius to Newton scale

let newton;
newton = celsius * (33/100);
newton = Math.floor(newton);

console.log(`The tempertaure in newton is ${newton} degree`);