const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://anuj:anuj@todo.0vzswco.mongodb.net/?retryWrites=true&w=majority"
);

const todoSchema = new mongoose.Schema({
  title: String,
  complet_by: String,
  completed: Boolean,
});


const Todo = mongoose.model("TODOS", todoSchema);

Todo.findOne({complet_by: '23 May 2023'}).exec().then((todo) => {
    console.log(todo);
});

// const todo = new Todo({
//     title: "Buy Chocolate",
//     complet_by: "12 Aug 2023",
//     completed: false,
// });


// // todo.save()

// Todo.findByIdAndUpdate("64605c8d264a7f7f1de9c89f", {title: "Buy Toothpaste"}).exec().then((todo) => {
//     console.log(todo);
// });


// Todo.findById("64605c8d264a7f7f1de9c89f").exec().then((todo) => {
//     console.log(todo);
// });

// Todo.find({}).exec().then((todos) => {
//     console.log(todos);
// });
