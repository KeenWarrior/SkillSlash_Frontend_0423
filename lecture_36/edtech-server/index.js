const dotenv = require("dotenv");
dotenv.config();

const app = require("./app");
const sequelize = require("./utils/sequelize");

sequelize.sync().then(() => {
  console.log("Database synced");
  app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });
});
