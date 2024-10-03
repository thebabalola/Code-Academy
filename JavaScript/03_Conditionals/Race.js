// Race Day - Exercise

let raceNumber = Math.floor(Math.random() * 1000);

let registeredEarly = true;
let runnerAge = 18;

if(runnerAge > 18 && registeredEarly) {
  raceNumber = raceNumber + 1000;
}

if(runnerAge > 18 && registeredEarly) {
  console.log(`Person with ${raceNumber} will race by 9:30 am.`);
}
else if(runnerAge > 18 && !registeredEarly) {
  console.log(`Person with ${raceNumber} will race by 11:00 am.`);
}
else if(runnerAge < 18) {
  console.log(`All youth Participaant will race by 12:30 am.`);
}
else {
  console.log('see the registration desk');
}