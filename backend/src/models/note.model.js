import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    title: String,
    content: String,
  },
  { timestamps: true }
);

const noteModel = mongoose.model("Note", schema, "notes");
export default noteModel;
