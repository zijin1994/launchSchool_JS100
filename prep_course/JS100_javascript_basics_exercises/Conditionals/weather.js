
let weather = 'sunny';

// if (weather === 'sunny') {
//   console.log("It's a beautiful day!");
// } else if (weather === 'rainy') {
//   console.log("Grab your umbrella.");
// } else {
//   console.log("Let's stay inside.");
// }

switch (weather) {
  case 'sunny':
    console.log("It's a beautiful day!");
    break;
  case 'rainy':
    console.log("Grab your umbrella.");
    break;
  default:
    console.log("Let's stay inside.");
}