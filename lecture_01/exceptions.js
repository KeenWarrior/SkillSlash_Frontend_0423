let p = -1;
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
}  finally {
    console.log("This is getting executed");
}

console.log("This is also getting executed");




