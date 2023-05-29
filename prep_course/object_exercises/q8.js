let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

const copyObj = (obj, keys = Object.keys(obj)) => {
  let result = {};
  keys.forEach(key => result[key] = obj[key]);
  return result;
}



let newObj = copyObj(objToCopy);
console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }

let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
console.log(newObj2);       // => { foo: 1, qux: 3 }

let newObj3 = copyObj(objToCopy, [ 'bar' ]);
console.log(newObj3);       // => { bar: 2 }


