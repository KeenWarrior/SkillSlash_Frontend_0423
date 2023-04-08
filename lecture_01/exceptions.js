let p = 100;
let r = 7;
let t = "t";

try {
  if (p < 0) {
    throw "Principal can not be negative";
  }
  let si = (p * r * t) / 100;
  console.log(si);
  console.log("Will this get exec");

  if (si == NaN) {
    throw "We messed something up";
  }
} catch (e) {
  console.log(e);
}

