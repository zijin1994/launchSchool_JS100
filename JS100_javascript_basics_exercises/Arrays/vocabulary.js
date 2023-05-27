let vocabulary = [
  ['happy', 'cheerful', 'merry', 'glad'],
  ['tired', 'sleepy', 'fatigued', 'drained'],
  ['excited', 'eager', 'enthused', 'animated']
];


const logArray = nestedArray => {
  for (let array of nestedArray) {
    for (let string of array) {
      console.log(string);
    }
  }
}

logArray(vocabulary);