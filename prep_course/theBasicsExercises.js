// q1
const name = "john" + " " + "Doe";

console.log("q1 answer: " + name)
// q2
let number = 4936;
const firstDigit = number % 10;
number = (number - firstDigit) / 10;
const secondDigit = number % 10;
number = (number - secondDigit) / 10;
const thirdDigit = number % 10;
number = (number - thirdDigit) / 10;
const forthDigit = number % 10;
console.log("q2 answer: " + firstDigit + " " + secondDigit + " " + thirdDigit + " " + forthDigit);
// q3
console.log("q3 answer: string, boolean, number, number, undefined, object");
// q4
console.log("q4 answer: because it coerces number to string and perform string concactenation");
// q5
console.log(`q5 answer: ${Number("5") + 10}`);
// q6
console.log("q6 answer: " + `The value of 5 + 10 is ${Number("5") + 10}`);
// q7
console.log("q7 answer: No, it will return undefined");
// q8
const arr = ['asta', 'butterscotch', 'pudding', 'neptune', 'drawin'];
// q9
const obj = {
  asta: 'dog',
  butterscotch: 'cat',
  pudding: 'cat',
  neptune: 'fish',
  drawin: 'lizard',
}
// q10: false
// q11: 3
// q12: true since both are strings, so js compares left most digits first.