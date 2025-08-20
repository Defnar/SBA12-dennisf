require("dotenv").config();

const express = require("express");
const router = express.Router();
const axios = require("axios");
const app = express();
const port = process.env.PORT;
const movieRoutes = require("./routes/movieRoutes")

app.use("/", movieRoutes);