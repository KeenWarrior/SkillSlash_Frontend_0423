use("mongo");

// db.users.insertOne({
//   _id: 11,
//   name: "Jeena",
//   profile: { email: "jeena@gmail.com", online: false },
// });

// db.users.find(
//   {
//     $and: [{ "profile.email": { $exists: true } }],
//   },
//   {
//     _id: 0,
//     name: 1,
//     "profile.email": 1,
//     "profile.online": 1,
//   }
// );

// db.users.find({
//   name: "Jeena",
// })

db.users.createIndex({ name: "text", "profile.email": "text" });
