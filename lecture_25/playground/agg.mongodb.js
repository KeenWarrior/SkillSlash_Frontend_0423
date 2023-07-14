use("mongo");

db.books.aggregate([
  {
    $group: {
      _id: "$type",
      count: {
        $sum: 1,
      },
    },
  },
  {
    $addFields: {
      type: "$_id",
    },
  },
  {
    $unset: "_id",
  },
  {
    $merge: "dump"
  }
]);
