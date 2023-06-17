use("chatsapp");

db.chats
  .aggregate([
    {
      $match: {
        $or: [{ from: "keenwarrior" }, { to: "keenwarrior" }],
      },
    },
    {
      $group: {
        _id: {
          $cond: [{ $eq: ["$from", "keenwarrior"] }, "$to", "$from"],
        },
        chats: {
          $push: {
            _id: "$_id",
            from: "$from",
            to: "$to",
            message: "$message",
            createdAt: "$createdAt",
            day: { $dayOfWeek: "$createdAt" },
            month: { $month: "$createdAt" },
          },
        },
        ids: {
          $addToSet: "$_id",
        },
      },
    },
    {
      $lookup: {
        from: "users",
        localField: "_id",
        foreignField: "username",
        as: "profile",
      },
    },
    {
      $addFields: {
        "profile.avatar_url": {
          $cond: {
            if: { $eq: [{ $size: "$profile" }, 0] },
            then: null,
            else: "$profile.avatar_url",
          }
        },
      },
    },
    {
      $project: {
        "profile.password": 0,
        "profile.email": 0,
        "profile._id": 0,
      },
    },
    {
      $unset: "_id",
    },
  ])
  .pretty();
