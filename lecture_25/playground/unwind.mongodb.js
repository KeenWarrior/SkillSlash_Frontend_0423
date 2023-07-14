use("mongo");

db.books.aggregate([
  {
    $group: {
      _id: "$country",
      count: { $sum: 1 },
    },
  },
  {
    $limit: 5,
  },
  {
    $skip: 2
  }
]);
