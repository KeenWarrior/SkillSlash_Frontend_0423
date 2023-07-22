const notesController = require("../controllers/notes.controller");
const Note = require("../models/notes.model");
const { mockRequest, mockResponse } = require('mock-req-res')

describe("notes.controller", () => {
  it("should have function getNotes", () => {
    expect(typeof notesController.getNotes).toBe("function");
  });

  it("getNotes should call find from Note Model", () => {
    Note.find = jest.fn();
    const req = mockRequest();
    const res = mockResponse();
    notesController.getNotes(req, res);
    expect(Note.find).toHaveBeenCalled();
  });
});
