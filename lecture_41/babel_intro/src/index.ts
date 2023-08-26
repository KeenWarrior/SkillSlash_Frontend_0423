import express from "express";
import { Express } from "express";

const app: Express = express();

app.get("/", (req, res) => {
  res.send("Hello from TS");
});

app.listen(8000, () => {
  console.log("Listening");
});
