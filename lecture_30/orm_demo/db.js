const { Sequelize } =  require("sequelize");

const sequelize = new Sequelize(
  "postgres://admin:admin@localhost:5432/skillslash"
);

module.exports = sequelize;



