

function upperCase(sentence) {
  if (sentence.length > 10) {
    return sentence.toUpperCase();
  } else {
    return sentence;
  }
}

console.log(upperCase("Sue Smith"));     // => Sue Smith
console.log(upperCase("Sue Robertson")); // => SUE ROBERTSON
console.log(upperCase("Joe Thomas"));    // => Joe Thomas
console.log(upperCase("Joe Stevens"));   // => JOE STEVENS