let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

console.log(statement1.match(/t/g).length);
console.log(statement2.split("t").length - 1);
console.log(statement1.split("t").length - 1);
console.log(statement2.split('').filter(char => char === 't').length);