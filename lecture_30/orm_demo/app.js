const cors = require('cors');
const express = require('express');
const notesRoute = require('./routes/notesRoute');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/notes', notesRoute);

module.exports = app;