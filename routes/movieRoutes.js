const express = require("express");
const router = express.Router();
const movieControllers = require("../controllers/movieControllers");

router.get("/api/search", movieControllers.searchMovies);

router.get("/api/movies/:id", movieControllers.getMovieDetails);

module.exports = router;
