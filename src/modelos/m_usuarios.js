const mongoose = require("mongoose")

var Schema = mongoose.Schema
var esquemaUsuario = new Schema({
    nombre: String,
    apellido: String,
    email: String
})


var m_usuario = mongoose.model("m_usuario", esquemaUsuario)

module.exports = m_usuario

