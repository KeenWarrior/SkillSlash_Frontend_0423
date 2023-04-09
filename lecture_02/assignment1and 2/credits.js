// 1. Write the program to input credits of a Campus leader and then output the badge of the lead on the basis of the following criteria:
// a. 7500 <= credits : Tera leader
// b. 6000 <= credits < 7500 : Gega leader
// c. 4500 <= credits < 6000 : Mega leader
// d. Credits < 4500 : Rising Star

function check_status(credits) {
  if (7500 <= credits) {
    return "Tera leader";
  } else if (6000 <= credits && credits < 7500) {
    return "Gega leader";
  } else if (4500 <= credits && credits < 6000) {
    return "Mega leader";
  } else {
    return "Rising Star";
  }
}

let credits = 3000;

console.log(check_status(30000));
