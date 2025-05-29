const User = require('../models/user.model');
const bcryptjs = require('bcryptjs');
const jwt = require('../utils/jwt.js');

//Register
const register = async (req, res) => {

    //Obtener los datos
    const { firstname, lastname, email, password } = req.body;

    //Validar los datos
    if(!email) return res.status(400).send({ msg: 'El email es obligatorio' });
    if(!password) return res.status(400).send({ msg: 'La contraseña es obligatorio' });

    //Crear el usuario
    const user = new User({
        firstname,
        lastname,
        email: email.toLowerCase(),
        password,
        active: false
    })

    //Encriptar la contraseña
    user.password = bcryptjs.hashSync(password, 10);

    //Guardar en la Base de Datos
    try {
        await user.save();
        res.status(201).send({ msg: 'Usuario registrado' })
    } catch (error) {
        res.status(500).send({ msg: 'Error al registrar el usuario' })
    }
}

//Login
const login = async (req, res) => {

    //Obtener los datos
    const { email, password } = req.body;

    //Validar los datos
    if(!email) return res.status(400).send({ msg: 'El email es obligatorio' });
    if(!password) return res.status(400).send({ msg: 'La contraseña es obligatoria' });

    try {
        //Verificar que exista ese usuario en la base de datos
        const user = await User.findOne({ email: email.toLowerCase() });
        if(!user) return res.status(404).send({ msg: 'Usuario no encontrado' });

        //Verificar que la contraseña es la correcta
        const isValid = await bcryptjs.compare(password, user.password);
        if(!isValid) return res.status(400).send({ msg: 'Contraseña invalida' });

        //Verificar si el usuario esta activo
        if(!user.active) return res.status(401).send({ msg: 'Usuario no autorizado' });

        //Si esta todo bien, crear el token
        const token = jwt.createAccessToken(user);
        res.status(200).send({ token: token });
        
    } catch (error) {
        res.status(500).send({ msg: 'Error en el login' });
    }

}
 

module.exports = {
    register,
    login
};