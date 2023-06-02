const oddNumbers = (start, end) => {
  //if start is even, add one.
  !(start % 2) && (start += 1);
  
  while (start < end + 1) {
    console.log(start);
    start += 2;
  }
}


oddNumbers(0, 99);


const oddNumber = (start, end) => {
  for (let i = start; i < end + 1; i += 1){
    //only log when left side is truthy (Not as efficient).
    (i % 2) && console.log(i);
  }
}


oddNumber(-13, 99);