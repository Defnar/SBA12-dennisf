require("dotenv").config();

const express = require("express");
const app = express();
const port = 8000;
const movieRoutes = require("./routes/movieRoutes");

app.use("/api", movieRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
