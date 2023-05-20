const immer = require("immer");

const user = {
  name: "Anuj Garg",
  age: 28,
};

const updatedUser = immer.produce(user, (draftUser) => {
  draftUser.name = "Anuj Garg 2";
});

// const draftUser = {...user};
// draftUser.name = "Anuj Garg 2";
// const updatedUser = draftUser;



console.log(updatedUser);
console.log(user);
