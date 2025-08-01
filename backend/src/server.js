import express from "express";
import mongoose from "mongoose";
import path from "path";

import noteRouter from "../src/routes/note.route.js";
import rateLimiter from "./middleware/rateLimiter.js";

import dotenv from "dotenv";
import cors from "cors";

dotenv.config({ path: ".env" });

const server = express();
const __dirname = path.resolve();

//middleware
//cors arriba de todo
if (process.env.MODE !== "production") {
  server.use(
    cors({
      origin: "http://localhost:5173",
    })
  );
}

server.use(express.json());
server.use(rateLimiter);

//routes
server.use("/api/notes", noteRouter);

if (process.env.MODE === "production") {
  server.use(express.static(path.join(__dirname, "../frontend/dist")));
  server.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

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
