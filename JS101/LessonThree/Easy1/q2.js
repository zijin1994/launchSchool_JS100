let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false


function endWithExc(str) {
  return str[str.length - 1] === "!";
}

console.log(endWithExc(str1));
console.log(endWithExc(str2));


function Exc(str) {
  return str.slice(str.length - 1) === "!";
}

console.log(Exc(str1));
console.log(Exc(str2));

function Exc2(str) {
  return str.substring(str.length - 1) === "!";
}

console.log(Exc2(str1));
console.log(Exc2(str2));

function endWith(str) {
  return str.endsWith("!");
}

console.log(endWith(str1));
console.log(endWith(str2));

