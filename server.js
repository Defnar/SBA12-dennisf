require("dotenv").config();

const express = require("express");
const router = express.Router();
const axios = require("axios");
const app = express();
const port = process.env.PORT;
const movieRoutes = require("./routes/movieRoutes")

app.use("/api/search", movieRoutes);
app.use("/api/movies/:id", movieRoutes);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
})