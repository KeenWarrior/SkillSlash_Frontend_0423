// var and let for variables
// const for constants

// const a = 10;

// a = 20;

// console.log(a);

// let a = 10;
// var a = 100;

// console.log(a);

{
  let a = 10;
  {
    let a = 20;
    console.log(a);
  }
  console.log(a);
}
