const mongoose = require("mongoose");

//Formato de dato usuario
const UserSchema = mongoose.Schema({
    firstname: String,
    lastname: String,
    email: {
        unique: true,
        type: String,
    },
    password: String,
    admin: Boolean
});

module.exports = mongoose.model('User', UserSchema);