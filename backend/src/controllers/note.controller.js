import noteModel from "../models/note.model.js";

const noteController = {
  async getAllNotes(req, res) {
    const notes = await noteModel.find();
    res.json(notes);
  },
  async getNodeById(req, res) {
    const note = await noteModel.findById(req.params.id);
    if (!note) return res.status(404).json({ message: "Post not found" });
    res.json(note);
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
  async updateNote(req, res) {
    try {
      const note = await noteModel.findByIdAndUpdate(req.params.id, req.body);
      if (!note) return res.status(404).json({ message: "Post not found" });
      res.json({ message: "Note updated successfully" });
    } catch (err) {
      res.json({ message: "Note updated unsuccessfully", err });
    }
  },
  async deleteNote(req, res) {
    try {
      const note = await noteModel.findByIdAndDelete(req.params.id);
      if (!note) return res.status(404).json({ message: "Post not found" });
      res.json({ message: "Note deleted successfully" });
    } catch (err) {
      res.json({ message: "Note deleted unsuccessfully", err });
    }
  },
};

export default noteController;
