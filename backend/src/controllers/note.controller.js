const noteModel = require("../models/note.model");

console.log(noteModel);
const noteController = {
  async getAllNotes(req, res) {
    const notes = await noteModel.find();
    res.json(notes);
  },
  async createNote(req, res) {
    try {
      const { title, content } = req.body;
      const note = new noteModel({ title, content });
      await note.save();
      res.json({ message: "Note created successfully" });
    } catch (err) {
      res.json({ message: "Note created unsuccessfully", err });
    }
  },
};

module.exports = noteController;
