const User = require('../models/user.model');
const bcryptjs = require('bcryptjs');
const jwt = require('../utils/jwt.js');

//Register
const register = async (req, res) => {

    //Obtener los datos
    const { firstname, lastname, email, password } = req.body;

    //Validar los datos
    if(!email) return res.status(400).send({ msg: '❌ Email is required' });
    if(!/\S+@\S+\.\S+/.test(email)) return res.status(400).send({ msg: '❌ Invalid email address' });
    if(!password) return res.status(400).send({ msg: '❌ Password is required' });
    if(password.length < 6) return res.status(400).send({ msg: '❌ Password must be at least 6 characters long' });

    //Crear el usuario
    const user = new User({
        firstname,
        lastname,
        email: email.toLowerCase(),
        password,
        admin: false
    })

    //Encriptar la contraseña
    user.password = bcryptjs.hashSync(password, 10);

    //Guardar en la Base de Datos
    try {
        await user.save();
        res.status(201).send({ msg: '✅ Registration successful' })
    } catch (error) {
        res.status(500).send({ msg: '❌ Registration failed. Please try again' })
    }
}

//Login
const login = async (req, res) => {

    //Obtener los datos
    const { email, password } = req.body;

    //Validar los datos
    if(!email) return res.status(400).send({ msg: '❌ Email is required' });
    if(!/\S+@\S+\.\S+/.test(email)) return res.status(400).send({ msg: '❌ Invalid email address' });
    if(!password) return res.status(400).send({ msg: '❌ Password is required' });
    if(password.length < 6) return res.status(400).send({ msg: '❌ Password must be at least 6 characters long' });

    try {
        //Verificar que exista ese usuario en la base de datos
        const user = await User.findOne({ email: email.toLowerCase() });
        if(!user) return res.status(404).send({ msg: '❌ User not found.' });

        //Verificar que la contraseña es la correcta
        const isValid = await bcryptjs.compare(password, user.password);
        if(!isValid) return res.status(400).send({ msg: '❌ Incorrect password' });

        //Si esta todo bien, crear el token
        const token = jwt.createAccessToken(user);
        res.status(200).send({ token: token });
        
    } catch (error) {
        res.status(500).send({ msg: '❌ Login failed. Please try again' });
    }

}
 

module.exports = {
    register,
    login
};