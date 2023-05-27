let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let array = Object.keys(obj).map(key => key.toUpperCase());
console.log(array);