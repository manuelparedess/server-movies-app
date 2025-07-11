const Movie = require('../models/movie.model.js');
const image = require('../utils/image.js');

//Crear pelicula
const createMovie = async (req, res) => {

    //Obtener los datos de la pelicula y Crearla
    const movie = new Movie(req.body);

    //obtener la ruta de la imagen
    if(req.files.image) {
        const imagePath = image.getFileName(req.files.image);
        movie.image = imagePath;
    }

    //Guardar la pelicula en la bd
    try {
        await movie.save();
        res.status(201).send({ msg: 'Pelicula guardada' });
    } catch (error) {
        res.status(500).send({ msg: 'Error al crear la pelicula' });
        
    }
}

//Obtener todas las peliculas
const getMovies = async (req, res) => {

    //Obtenemos los parametros
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 6;

    //Las peliculas de cada pagina
    const skip = (page - 1) * 6;

    try {
        const movies = await Movie.find().skip(skip).limit(limit);

        if(!movies.length) {
            return res.status(404).send({ msg: 'No se encontraron peliculas' });
        }

        const total = await Movie.countDocuments();
        const totalPages = Math.ceil( total / limit );
        const next = page < totalPages ? `http://localhost:5000/api/movies?page=${page + 1}&limit=${limit}` : null;
        const prev = page > 1 ? `http://localhost:5000/api/movies?page=${page - 1}&limit=${limit}` : null;

        const response = {
            info: {
                count: total,
                pages: totalPages,
                next, 
                prev
            },
            results: movies
        }
        
        res.status(200).send(response);

    } catch (error) {
        res.status(500).send({ msg: 'Error al obtener las peliculas' });
        
    }
}

//Obtener pelicula
const getMovie = async (req, res) => {
    //obtener el id 
    const { id } = req.params;

    try {
        const movie = await Movie.findById(id);
        if(!movie) {
            return res.status(404).send({ msg: 'No se encontro la pelicula'});
        }
        
        res.status(200).send(movie);

    } catch (error) {
        res.status(500).send({ msg: 'Error al obtener pelicula'});
        
    }
}

const getMovieByName = async (req, res) => {
    //obtener el query
    const { q } = req.query;
    if (!q) return res.status(400).json({ message: 'No se recibio la query' });

    try {
        const movies = await Movie.findByName(q);
        if(movies.length == 0) {
            return res.status(200).send([]);
        }
        res.status(200).send(movies);

    } catch (error) {
        res.status(500).send({ msg: 'Error al obtener peliculas'});
        
    }
}




//Actualizar pelicula
const updateMovie = async (req, res) => {
    //obtener el id que quiero actualizar
    const { id } = req.params;

    //Datos nuevos
    const movieData = req.body;


    //obtener la ruta de la imagen
    if(req.files.image) {
        const imagePath = image.getFileName(req.files.image);
        movieData.image = imagePath;
    }

    //Actualizamos
    try {
        await Movie.findByIdAndUpdate({_id: id}, movieData);
        res.status(200).send({msg:'Pelicula Actualizada'});

    } catch (error) {
        res.status(500).send({ msg: 'Error al actualizar pelicula'});
        
    }
}

//Eliminar pelicula
const deleteMovie = async (req, res) => {

    //obtener el id
    const { id } = req.params;

    //eliminar pelicula
    try {
        await Movie.findByIdAndDelete(id)
        
        res.status(200).send({ msg: 'Pelicula eliminada'});

    } catch (error) {
        res.status(500).send({ msg: 'Error al eliminar pelicula' });
        
    }
}


module.exports = {
    createMovie,
    getMovies,
    updateMovie, 
    deleteMovie,
    getMovie,
    getMovieByName
};