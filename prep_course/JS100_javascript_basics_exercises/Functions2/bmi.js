const calculateBMI = (height, weight) => {
  let heightInMeters = height / 100;
  let bmi = weight / heightInMeters**2;
  bmi = bmi.toFixed(2);
  return bmi;
}


console.log(calculateBMI(180, 80));