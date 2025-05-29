const jwt = require('../utils/jwt.js');

const verifyToken = async (req, res, next) => {

    //Recibimos el token
    console.log(req.headers.authorization);

    if(!req.headers.authorization) {
        return res.status(403).send({ msg: 'No se recibio el token' })
    }

    //Verificamos si el token es valido
    try {

        //Obtenemos la informacion
        const token = req.headers.authorization;
        const payload = jwt.decode(token);

        //Verificamos si el token expiro
        const { exp } = payload;
        const currentDate = new Date().getTime();

        if(exp <= currentDate) {
            return res.status(401).send({ msg: 'El token ha expirado' }) 
        }
 
        //Si esta todo ok le pasamos la info a la siguiente funcion (en este caso el controlador)
        req.user = payload;
        next();

    } catch (error) {
        return res.status(401).send({ msg: 'Token invalido' });
    }
}

module.exports = {
    verifyToken
};