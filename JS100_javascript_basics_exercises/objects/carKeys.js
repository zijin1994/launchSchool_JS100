let vehicle = {
  manufacturer: 'Tesla',
  model: 'Model X',
  year: 2015,
  range: 295,
  seats: 7
};


let keys = Object.keys(vehicle);
console.log(keys);



let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
};

console.log(Object.entries(person));


let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];

// Expected output:
// { title: 'Duke', name: 'Nukem', age: 33 }
let obj = {};
for (let array of nestedArray) {
  obj[array[0]] = array[1];
}

console.log(obj);