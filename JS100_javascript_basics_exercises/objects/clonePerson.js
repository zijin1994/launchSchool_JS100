const clone = (obj) => {
  const objCopy = {};
  for (let key in obj) {
    objCopy[key] = obj[key];
  }
  
  return objCopy;
}


const clone2 = obj => {
  return Object.assign({}, obj);
}



let person = {
  title: 'Duke',
  name: {
    value: 'Nukem',
    isStageName: true
  },
  age: 33
};

let clonedPerson = clone(person);
person.age = 34;

console.log(person.age);       // 34
console.log(clonedPerson.age); // 33

person.name.isStageName = false;
console.log(person.name.isStageName);       // false
console.log(clonedPerson.name.isStageName); // false