//ALL CAPS
console.log('confetti floating everywhere'.toUpperCase());

//Repeat
const repeat = (number, string) => {
  let result = '';
  for (let i = 0; i < number; i+=1) {
    result += string;
  }
  return result;
}
console.log(repeat(3, 'ha'));


//Multiline String
let string = 'A pirate I was meant to be! \nTrim the sails and roam the sea!';
console.log(string);

//Case-insensitive Equality
let string1 = 'Polar Bear';
let string2 = 'Polar bear';
let string3 = 'Penguin';
console.log(string1.toLowerCase() === string2.toLowerCase());
console.log(string1.toLowerCase() === string3.toLowerCase());

//Contains Character
let byteSequence = 'TXkgaG92ZXJjcmFmdCBpcyBmdWxsIG9mIGVlbHMu';
console.log(/x/.test(byteSequence));


//Blank? Version 1
const isBlank = string => string.length === 0;
console.log(isBlank('mars')); // false
console.log(isBlank('  '));   // false
console.log(isBlank('')); 


//Blank? Version 2
console.log('v2');
const isBlankTwo = string => string.split(' ').join('').length === 0;
console.log(isBlankTwo('mars')); // false
console.log(isBlankTwo('  '));   // true
console.log(isBlankTwo('')); 