const express = require("express");

const app = express();

const token = "1234567890";

app.use(function (req, res, next) {

    console.log(req.headers.authorization);
    if (req.headers.authorization !== `Bearer ${token}`) {
        res.status(401).send("Unauthorized");
        return;
    }
    req.time = new Date().toISOString();
    next();
});

app.get("/", (req, res) => {
    res.send("Hello World!" + req.time);
});

app.listen(3000, () => {
    console.log("Server is listening on port 3000. Ready to accept requests!");
});