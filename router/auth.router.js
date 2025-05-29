const express = require('express');
const AuthController = require('../controllers/auth.controller.js');

const router = express.Router();

//Ruta para registrarse
router.post('/auth/register', AuthController.register);
router.post('/auth/login', AuthController.login);

module.exports = router;
