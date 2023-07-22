const request = require("supertest");
const app = require("../app");
const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");
const sampleNote = require("./data/sampleNote.json");

describe("App Integration", () => {
  beforeAll(async () => {
    const mongoServer = await MongoMemoryServer.create();
    const mongoUri = mongoServer.getUri();
    await mongoose.connect(mongoUri);
  });

  afterAll(async () => {
    await mongoose.disconnect();
  });

  it("notes root route should return 200", async () => {
    return request(app).get("/notes").expect(200);
  });

  it("notes creation route should return 201", async () => {
    return request(app).post("/notes").send(sampleNote).expect(201);
  });

  it("notes creation route should send back created note", async () => {
    const response  = await request(app).post("/notes").send(sampleNote);
    expect({title: response.body.title, done: response.body.done}).toEqual(sampleNote);
  });
});
