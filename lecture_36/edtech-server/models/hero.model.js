const sequelize = require("../utils/sequelize");
const { DataTypes } = require("sequelize");

const Hero = sequelize.define("Hero", {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    bgImage: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cta: {
        type: DataTypes.STRING,
    },
    active: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
});


module.exports = Hero;