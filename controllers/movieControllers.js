require("dotenv").config();

const searchMovies = (req, res) => {
    const title = req.query.title;

    if (!title)
        res.status(404).json({"error": "Title query parameter is required"});
        return;
}