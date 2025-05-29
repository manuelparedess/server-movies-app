const express = require('express');
const MovieController = require('../controllers/movie.controller.js');

const router = express.Router();

const multiparty = require('connect-multiparty');
const md_upload = multiparty({ uploadDir: './uploads/movie' });

//Ruta para registrarse
router.post('/movie', [md_upload], MovieController.createMovie);
router.get('/movies', MovieController.getMovies);
router.put('/movie/:id', [md_upload], MovieController.updateMovie);
router.delete('/movie/:id', MovieController.deleteMovie);
router.get('/movie/:id', MovieController.getMovie);

module.exports = router;
