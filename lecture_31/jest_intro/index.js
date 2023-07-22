const app = require("./app");
const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");

const PORT = 3000;

async function setup() {
  const mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();
  await mongoose.connect(uri);
  if (mongoose.connection.readyState === 1) {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  }
}

setup();
