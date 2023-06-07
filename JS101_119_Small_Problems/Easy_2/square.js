const multiply = (first, second) => first * second;


const square = number => multiply(number, number);

console.log(square(5) === 25); // logs true
console.log(square(-8) === 64); // logs true