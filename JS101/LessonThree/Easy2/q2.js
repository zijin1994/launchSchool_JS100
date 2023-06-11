let numbers = [1, 2, 3, 4, 5];

let reversedNumber = [...numbers].reverse();
let sortedNumber = [...numbers].sort((a, b) => b - a);
let foreachNumber = [];
numbers.forEach((number) => {
  foreachNumber.unshift(number);
})
console.log(numbers);
console.log(reversedNumber);
console.log(sortedNumber);
console.log(foreachNumber);