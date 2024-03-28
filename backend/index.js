// const express = require("express");
// const dotenv = require("dotenv");
// const colors = require("colors");
// const morgan = require("morgan");
import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
const app = express();

import connectDB from "./database.js";

//dotenv config
dotenv.config();

//database configuration
connectDB();
const PORT = process.env.PORT || 3000;
const MONGODB_URL = process.eventNames.MONGODB_URL;

//middleware
app.use(express.json());
app.use(morgan("dev"));

//GET route

// Attaching server to the port
app.listen(PORT, () => {
  console.log(`server running successfully on http://localhost:${PORT}`);
});
