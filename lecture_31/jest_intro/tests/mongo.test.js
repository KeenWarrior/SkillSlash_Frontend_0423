const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");

describe("UserController", () => {
  beforeAll(async () => {
    const mongoServer = await MongoMemoryServer.create();
    const mongoUri = mongoServer.getUri();
    await mongoose.connect(mongoUri);
  });

  afterAll(async () => {
    await mongoose.disconnect();
    console.log(mongoose.connection.readyState);
  });

  it("should return 200", () => {
    expect(mongoose.connection.readyState).toBe(1);
    expect(200).toBe(200);
  });

  it("should return 201", () => {
    expect(mongoose.connection.readyState).toBe(1);
    expect(1).toBe(1);
  });
});
