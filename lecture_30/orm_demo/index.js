const app = require("./app");
const sequelize = require("./db");

sequelize.sync().then(() => {
    app.listen(3000, () => console.log("Server is running on port 3000"));
});