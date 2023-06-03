use("chatapp");

// db.users.insertMany([
//     {
//         username: "user1",
//         password: "user1",
//         email: "user@hello.org",
//         age: 20
//     },
//     {
//         username: "user2",
//         password: "user2",
//         email: "user2@hello.org",
//         age: 30
//     }
// ]);

// db.users.findOne({
//     username: "user1"
// }, {
//     _id: 0,
//     username: 1,
//     email: 1
// });

// db.getCollection("users").insertOne({
//   name: "Anuj Garg",
//   age: 28,
//   email: "anujgargcse@gmail.com",
// });


db.getCollection("users").find();