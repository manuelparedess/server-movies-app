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
    image: String,
});

// Método estático para buscar por nombre
MovieSchema.statics.findByName = function(query) {
    return this.find({
      title: { $regex: query, $options: 'i' }
    });
};

module.exports = mongoose.model('Movie', MovieSchema);