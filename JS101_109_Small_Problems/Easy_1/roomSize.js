const readlineSync = require("readline-sync");

const SQMETERS_TO_SQFEET = 10.7639;

// use ternary operator.
const ternaryOperator = () => {
  //grab unit from user input, either m or f, convert to meters/feet.
  let unit = readlineSync.question("Enter 'm' for meters, 'f' for feet:\n");
  unit = unit === 'm' ? 'meters' : 'feet';

  const length = readlineSync.question(`Enter the length of the room in ${unit}:\n`);
  const width = readlineSync.question(`Enter the width of the room in ${unit}:\n`);

  //compute area, then conversion, if unit is meters, perform *, otherwise /.
  const area = Number(length) * Number(width);
  const conversion = unit === 'meters' ? area * SQMETERS_TO_SQFEET : area / SQMETERS_TO_SQFEET;

  //out put unit and conversion dynamically.
  console.log(`The area of the room is ${area.toFixed(2)} square ${unit} (${conversion.toFixed(2)} square ${unit === 'meters' ? 'feet' : 'meters'}).`);
}

ternaryOperator();



//Mostly the same, added a boolean value to control the calculation.
const customizeBoolean = () => {
  
   //create boolean isMeter to determine what unit we get.
   let isMeter = false;
   let unit = readlineSync.question("Enter 'm' for meters, 'f' for feet:\n");
   unit = unit === 'm' ? 'meters' : 'feet';
   (unit === 'meters') && (isMeter = true);
   
   const length = readlineSync.question(`Enter the length of the room in ${unit}:\n`);
   const width = readlineSync.question(`Enter the width of the room in ${unit}:\n`);
   
   const area = Number(length) * Number(width);
   //perform different calculation depending on value of isMeter.
   let conversion;
   isMeter && (conversion = area * SQMETERS_TO_SQFEET);
   !isMeter && (conversion = area / SQMETERS_TO_SQFEET);
   
   console.log(`The area of the room is ${area.toFixed(2)} square ${unit} (${conversion.toFixed(2)} square ${isMeter ? 'feet' : 'meters'}).`);

}


customizeBoolean();