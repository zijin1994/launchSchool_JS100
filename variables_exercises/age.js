const CURRENT_AGE = 20;
console.log(`You are ${CURRENT_AGE} years old.`)
for (let year = 10; year <= 40; year+=10) {
  console.log(`In ${year} years, you will be ${CURRENT_AGE + year} years old.`);
}