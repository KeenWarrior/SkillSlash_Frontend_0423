const express = require("express");
const app = express();

const port = 5000;

function handleHome(req, res) {
  console.log(req.params);
  res.send("Hello from " + req.params.username);
}

function handleAnother(req, res) {
  res.send("Hello from Another");
}

function handleQuery(req, res) {
    let query = req.query;
    console.log(query);
    res.send("Hello from Query");
  }

app.get("/", handleQuery);

app.get("/users/:username", handleHome);

app.get("/another", handleAnother);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


// get -> Read
// post -> create
// put -> update
// delete -> delete

// Collectively called CRUD (Create, Read, Update, Delete)

// patch -> update partially  (not very important for right now)

