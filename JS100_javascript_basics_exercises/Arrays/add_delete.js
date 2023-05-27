//use shift, push
let energy1 = ['fossil', 'solar', 'wind', 'tidal', 'fusion'];
energy1.shift();
energy1.push('geothermal');
console.log(energy1);

//use filter
let energy = ['fossil', 'solar', 'wind', 'tidal', 'fusion'];
let result = energy.filter(string => string !== 'fossil');
result.push('geothermal');
console.log(result);

//use splice in place.
energy.splice(0,1);
energy.splice(energy.length, 0, 'geothermal');

console.log(energy);