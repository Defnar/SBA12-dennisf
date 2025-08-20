const axios = require("axios");


const movieApi = axios.create({
    baseURL: `http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&`
})

module.exports = movieApi;