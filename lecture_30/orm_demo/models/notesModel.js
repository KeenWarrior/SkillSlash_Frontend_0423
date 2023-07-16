const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Note = sequelize.define("Note", {
  title: DataTypes.STRING,
  description: DataTypes.TEXT,
  tag: DataTypes.STRING,
});

module.exports = Note;
