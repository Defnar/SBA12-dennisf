const movieApi = require("../api/movieApi");

const searchMovies = async (req, res) => {
    const title = req.query.title;

    if (!title)
        res.status(404).json({"error": "Title query parameter is required"});
    else {
        try {
            const url = `?apikey=${OMDB_API_KEY}&s=${title}`
            const response = await movieApi.get(url);

            res.json(response.data);
        }
        catch (error) {
            if(error.response) {console.error("API Error:", error.response.status, error.response.message);
            res.status(error.response.status).json({message: "Error fetching data from external api"})
            }
            else {
                console.error("Network Error:", error.message);
                res.status(500).json({message: "A network error has occurred"})
            }
        }
    }
}

module.exports = searchMovies;