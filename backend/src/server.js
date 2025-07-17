const express = require("express");
const mongoose = require("mongoose");
const noteRouter = require("../src/routes/note.route.js");

require("dotenv").config({
  path: ".env",
});

const server = express();

server.use(express.json());

server.use(noteRouter);

mongoose
  .connect(process.env.MONGOURI)
  .then(() => {
    console.log("Connected to MongoDB");
    server.listen(process.env.PORT, () => {
      console.log("Server running on port " + process.env.PORT);
    });
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB", err);
  });
