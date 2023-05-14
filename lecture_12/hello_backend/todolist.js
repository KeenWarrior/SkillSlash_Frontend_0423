const express = require("express");
const cors = require("cors");

const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://anuj:anuj@todo.0vzswco.mongodb.net/?retryWrites=true&w=majority"
);

const todoSchema = new mongoose.Schema({
  title: String,
  complete_by: Date,
  completed: Boolean,
});

const Todo = mongoose.model("TODO", todoSchema);

const app = express();

// console.log(writeJsonFile);

app.use(express.json());

app.use(cors());

const port = 5000;

// sample todo {id: 1, title: "Buy Milk", complet_by: "11 Aug 2020", completed: false}

app.get("/todos", async (req, res) => {
  const todos = await Todo.find({}).exec();
  res.send(todos);
});

app.get("/todos/:id", async (req, res) => {
  let id = req.params.id;
  const todo = await Todo.findById(id).exec();
  res.send(todo);
});

app.post("/todos", async (req, res) => {
  let todoBody = req.body;
  let todo = new Todo({ ...todoBody });
  let response = await todo.save();
  res.send(response);
});

app.put("/todos/:id", async (req, res) => {
  let id = req.params.id;
  let todoBody = req.body;

  let update = await Todo.findByIdAndUpdate(id, todoBody);
  res.send(update);
});

app.delete("/todos/:id", async (req, res) => {
  let deleteTodo = await Todo.findByIdAndDelete(req.params.id);
  res.send(deleteTodo);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
