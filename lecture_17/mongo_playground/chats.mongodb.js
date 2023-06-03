use("chatapp");


// db.getCollection("messages").insertMany([
//     {
//         from: "user3",
//         to: "user2",
//         message: "Hello user2 from user3",
//         createdAt: new Date()
//     },
//     {
//         from: "user2",
//         to: "user3",
//         message: "Hello user3 from user2",
//         createdAt: new Date()
//     }
// ]);

db.getCollection("messages").find(
    {
        $or: [
            {from: "user3"},
            {to: "user3"}
        ]
    }
)