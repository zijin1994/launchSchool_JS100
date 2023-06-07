const randomAge = () => {
  let age = Math.floor(Math.random() * (120 - 20 + 1)) + 20;
  console.log(`Teddy is ${age} years old!`);
}


randomAge();

//Further Exploration
//Using round may cause the result to be 121
//Assuming we get 0.999 from math,random, multiply by 101 would be 100.899, calling Math,round on it would be 101 instead of 100, so the result would be 121.




const randomAgeTwo = (arg1, arg2) => {
  let age = Math.floor(Math.random() * (Math.abs(arg1 - arg2) + 1)) + Math.min(arg1, arg2);
  console.log(`Teddy is ${age} years old!`);
}

randomAgeTwo(120, 20);