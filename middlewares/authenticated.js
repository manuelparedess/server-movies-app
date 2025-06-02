const jwt = require('../utils/jwt.js');
const User = require('../models/user.model');

const verifyToken = async (req, res, next) => {

    if(!req.headers.authorization) {
        return res.status(403).send({ msg: '❌ Authentication token not provided' })
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
            return res.status(401).send({ msg: '❌ Session has expired. Please log in again.' }) 
        }
 
        //Si esta todo ok le pasamos la info a la siguiente funcion 
        req.user = payload;
        next();

    } catch (error) {
        return res.status(401).send({ msg: '❌ Invalid authentication token.' });
    }
}

// Middleware para verificar si es admin
const isAdmin = async (req, res, next) => {
    const user = await User.findById(req.user.user_id);
    
    if (!user.admin) {
      return res.status(403).json({ message: '❌ Access denied: admin only' });
    }
    next();
};

module.exports = {
    verifyToken,
    isAdmin
};