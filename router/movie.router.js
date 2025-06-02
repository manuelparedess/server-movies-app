const express = require('express');
const MovieController = require('../controllers/movie.controller.js');

const router = express.Router();

//Middlewares
const multiparty = require('connect-multiparty');
const md_upload = multiparty({ uploadDir: './uploads/movie' });
const md_auth = require('../middlewares/authenticated.js');

//Rutas publicas
router.get('/movies', MovieController.getMovies);
router.get('/movie/:id', MovieController.getMovie);

//Rutas privadas
router.post('/movie', [md_auth.verifyToken, md_auth.isAdmin, md_upload], MovieController.createMovie);
router.put('/movie/:id', [md_auth.verifyToken, md_auth.isAdmin, md_upload], MovieController.updateMovie);
router.delete('/movie/:id', [md_auth.verifyToken, md_auth.isAdmin], MovieController.deleteMovie);

module.exports = router;
