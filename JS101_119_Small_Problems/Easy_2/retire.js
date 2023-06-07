const { question } = require("readline-sync");
const today = new Date()
const CURRENT_YEAR = today.getFullYear();

let age = Number(question("What is your age? "));
let retireAge = Number(question("At what age would you like to retire>? "));
let workTime = retireAge - age;
console.log(`It's ${CURRENT_YEAR}. You will retire in ${CURRENT_YEAR + workTime}.`);
console.log(`You have only ${workTime} years of work to go!`);

//If no new keyword, then today does not get initialized with the Date() constructor function, which means we will not have access to getFullYear() method.
