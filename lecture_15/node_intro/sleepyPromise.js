const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello");
  }, 4000);

  setTimeout(() => {
    reject("Error");
  }, 2000);
});

p.then((data) => {
  console.log(data);
}).catch((err) => {
  console.error(err);
});
