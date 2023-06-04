use("chatsapp");

db.users.find({
  username: {
    $in: ["keenwarrior", "avinash"],
  },
});
