use("mongo");

// db.books.findOneAndUpdate({
//     name: "The Hobbit"
// }, {
//     $set : {
//         name: "The Hobbit or There and Back Again"
//     }
// });

// db.createView("fantacy_books", "books", [
//   {
//     $match: {
//       type: "Fantasy",
//     },
//   },
// ]);

db.fantacy_books.find();
