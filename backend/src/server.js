const express = require("express");
const connectdb = require("./config/database.js");
require("dotenv").config();

const server = express();

server.use(express.json());

connectdb().then(() =>
  server.listen(process.env.PORT, () => {
    console.log("Server running on port " + process.env.PORT);
  })
);
