const mongoose = require("mongoose");
require("dotenv").config();

mongoose.set("strictQuery", true);

const connectdb = async () => {
  try {
    mongoose.connect(process.env.MONGOURI);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err.message);
    process.exit(1);
  }
};

module.exports = connectdb;
