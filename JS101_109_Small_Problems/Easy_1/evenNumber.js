const evenNumbers = (start, end) => {
  //if start is odd, add one.
  (start % 2) && (start += 1);
  
  while (start < end + 1) {
    console.log(start);
    start += 2;
  }
}


evenNumbers(1, 99);


const evenNumber = (start, end) => {
  for (let i = start; i < end + 1; i += 1){
    //only log when left side is truthy (Not as efficient).
    !(i % 2) && console.log(i);
  }
}


evenNumber(-13, 99);