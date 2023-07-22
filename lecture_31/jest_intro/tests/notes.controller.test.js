const notesController = require("../controllers/notes.controller");

describe("notes.controller", () => {
  it("should have function getNotes", () => {
    expect(typeof notesController.getNotes).toBe("function");
  });
});
