const catAge = age => {
  let cat = 0
  for (let i = 1; i <= age; i++) {
    if (i === 1) cat += 15;
    else if (i === 2) cat += 9;
    else cat += 4;
  }
  console.log(cat);
}



catAge(0); // 0
catAge(1); // 15
catAge(2); // 24
catAge(3); // 28
catAge(4); // 32


