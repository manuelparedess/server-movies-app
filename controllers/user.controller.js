const User = require('../models/user.model');

//Obtenemos el usuario del token
const getMe = async (req, res) => {

    try {
        const { user_id } = req.user;
        const user = await User.findById(user_id);

        if(!user) {
            return res.status(404).send({ msg: 'No se ha encontrado el usuario' });
        }

        return res.status(200).send(user);

    } catch (error) {
        res.status(500).send({ msg: 'Usuario invalido' });
    }
}

module.exports = {
    getMe
}