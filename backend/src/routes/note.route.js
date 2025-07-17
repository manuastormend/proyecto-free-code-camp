const express = require("express");

const noteController = require("../controllers/note.controller");
const noteRouter = express.Router();

noteRouter.get("/api/notes", noteController.getAllNotes);
noteRouter.post("/", noteController.createNote);
module.exports = noteRouter;
