//modify the original array.
const last = array => array.pop();

// without modifying the original array.
const last2 = array => array[array.length - 1];


console.log(last(['Earth', 'Moon', 'Mars'])); // 'Mars'
console.log(last2(['Earth', 'Moon', 'Mars'])); // 'Mars'