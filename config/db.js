const mongoose = require('mongoose');
require('dotenv').config();

//conectar la base de datos en mongoDB con el proyecto
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('La conexion con la base de datos ha sido exitosa');
    } catch (error) {
        console.log('Error al conectar la base de datos', error);
    }
}

module.exports = connectDB;