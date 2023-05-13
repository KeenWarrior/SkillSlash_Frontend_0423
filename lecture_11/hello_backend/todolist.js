const e = require("express");
const express = require("express");
const cors = require("cors");
// const writeJsonFile = require("write-json-file");
const app = express();

// console.log(writeJsonFile);

app.use(express.json());

app.use(cors());

const port = 5000;

let todos = new Map();

// sample todo {id: 1, title: "Buy Milk", complet_by: "11 Aug 2020", completed: false}

app.get("/todos", (req, res) => {
  if (todos.size === 0) {
    res.send([]);
  } else {
    let todoList = Array.from(todos.values());
    res.send(todoList);
  }
});

app.get("/todos/:id", (req, res) => {
  let id = req.params.id;
  if (todos.has(id)) {
    res.send(todos.get(id));
  } else {
    res.send("Not found");
  }
});

app.post("/todos", (req, res) => {
  let todo = req.body;
  if (todos.has(todo.id)) {
    res.send("Todo already exists");
  } else {
    todos.set(todo.id, todo);
    let todoList = Array.from(todos.values());
    console.log(JSON.stringify(todoList));
    res.send("Todo added successfully");
  }
});

app.put("/todos/:id", (req, res) => {
  let id = req.params.id;
  let todo = req.body;
  if (todos.has(id)) {
    todos.set(id, todo);
    // writeJsonFile("memory.json", todos);
    res.send("Todo updated successfully");
  } else {
    res.send("Not found");
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
