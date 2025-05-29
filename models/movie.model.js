const mongoose = require("mongoose");

//Formato de dato movie
const MovieSchema = mongoose.Schema({
    title: String,
    releaseYear: Number,
    genre: String,
    director: String,
    actors: [{ type: String }],
    description: String,
    rating: Number,
    image: String
});

module.exports = mongoose.model('Movie', MovieSchema);