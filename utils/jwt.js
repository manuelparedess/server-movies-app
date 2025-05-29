const jwt = require('jsonwebtoken');
require('dotenv').config()
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

//Crear el token 
const createAccessToken = (user) => {

    //Fecha de expiracion del token
    const expToken = new Date();
    expToken.setHours(expToken.getHours() + 3); //El token expira a las 3 horas

    //Informacion detras del token
    const payload = {
        token_type: "access",
        user_id: user._id,
        iat: Date.now(),
        exp: expToken.getTime()
    }

    //Crear el token
    return jwt.sign(payload, JWT_SECRET_KEY)
}

const decode = (token) => {
    return jwt.decode(token, JWT_SECRET_KEY, true)
}

module.exports = {
    createAccessToken,
    decode
};