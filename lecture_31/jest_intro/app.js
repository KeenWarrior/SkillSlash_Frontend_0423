const express = require('express');
const notesRoute = require('./routes/notes.route');

const app = express();

app.use(express.json());
app.use('/notes', notesRoute);

module.exports = app;

