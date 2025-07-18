import express from "express";

import noteController from "../controllers/note.controller.js";

const noteRouter = express.Router();

noteRouter.get("/api/notes", noteController.getAllNotes);
noteRouter.get("/api/notes/:id", noteController.getNodeById);
noteRouter.post("/api/notes", noteController.createNote);
noteRouter.put("/api/notes/:id", noteController.updateNote);
noteRouter.delete("/api/notes/:id", noteController.deleteNote);

export default noteRouter;
