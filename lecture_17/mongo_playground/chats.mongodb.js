use("chatsapp");


db.getCollection("chats").insertMany([
    {
        from: "keenwarrior",
        to: "avinash",
        message: "This is awesome",
        createdAt: new Date()
    },
]);

