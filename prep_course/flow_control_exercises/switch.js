// let a = 5;

// switch (a) {
//   case 5:
//     console.log('a is 5');
//     break;
//   case 6:
//     console.log('a is 6');
//     break;
//   default:
//     console.log('a is neither 5, nor 6');
//     break;
// } // => a is 5
let a = 5;

switch (a) {
  case 5:
  case 6:
  case 7:
    // executed if a is 5, 6, or 7
    console.log("a is either 5, 6, or 7");
    break;
  case 8:
  case 9:
    // executed if a is 8 or 9
    console.log('a is 8 or 9');
    break;
  default:
    // executed if a is anything else
    console.log('a is not 5, 6, 7, 8, or 9');
    break;
}