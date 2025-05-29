const express = require('express');
const router = express.Router();

const UserController = require('../controllers/user.controller.js');
const md_auth = require('../middlewares/authenticated.js');

//Ruta para registrarse
router.get('/user/me', [md_auth.verifyToken], UserController.getMe);


module.exports = router;
