const express = require("express");
const router = express.Router();
const movieControllers = require("../controllers/movieControllers");

router.get("/search", movieControllers.searchMovies);

router.get("/movies/:id", movieControllers.getMovieDetails);

router.get("/", (req, res) => {
    res.status(404).json({error: "Page not found"})
})

router.get("/movies", (req, res) => {
    res.status(404).json({error: "No id parameter found"})
})

module.exports = router;
