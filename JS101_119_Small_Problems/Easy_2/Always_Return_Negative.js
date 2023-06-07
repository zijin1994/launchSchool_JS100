const negative = number => number < 0 ? number : -number;

console.log(negative(5));
console.log(negative(-3));
console.log(negative(0));

// checking 1/-0 or 1/0 can differentiate them, one equals -Infinity, the other equals Infinity.
