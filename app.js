const connectDB = require('./config/db.js');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

//crear un servidor con express
const app = express();

//conexion a base de datos 
connectDB();

//configurar cors
app.use(cors());

//configurar body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//configurar static folder
app.use(express.static('uploads'));

//importar rutas
const authRoutes = require('./router/auth.router.js');
const userRoutes = require('./router/user.router.js');
const movieRoutes = require('./router/movie.router.js');


//configurar las rutas
app.use('/api', authRoutes);
app.use('/api', userRoutes);
app.use('/api', movieRoutes);


module.exports = app;

