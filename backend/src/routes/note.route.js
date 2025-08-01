import express from "express";

import noteController from "../controllers/note.controller.js";

const noteRouter = express.Router();

noteRouter.get("/", noteController.getAllNotes);
noteRouter.get("/:id", noteController.getNodeById);
noteRouter.post("/", noteController.createNote);
noteRouter.put("/:id", noteController.updateNote);
noteRouter.delete("/:id", noteController.deleteNote);

export default noteRouter;
