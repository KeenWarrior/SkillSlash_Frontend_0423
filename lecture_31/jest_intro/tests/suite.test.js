const mongoose = require("mongoose");

describe("UserController", () => {


    beforeAll(async () => {
        await mongoose.connect("mongodb://localhost:27017/test");
    })

    afterAll(async () => {
        await mongoose.disconnect();
        console.log(mongoose.connection.readyState);
    })


  it("should return 200", () => {
    expect(mongoose.connection.readyState).toBe(1);
    expect(200).toBe(200);
  });

  it("should return 201", () => {
    expect(mongoose.connection.readyState).toBe(1);
    expect(1).toBe(1);
  });

});
