require("dotenv").config();

const axios = require("axios");


const movieApi = axios.create({
    baseURL: `http://img.omdbapi.com/?apikey=${OMDB_API_KEY}&`
})

module.exports = movieApi;