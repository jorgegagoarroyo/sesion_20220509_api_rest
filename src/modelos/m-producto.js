const mongoose = require("mongoose")

var Schema = mongoose.Schema
var esquemaProducto = new Schema({
    nombre: String,
    precio: String,
    cant: String
})

var m_producto = mongoose.model("m-producto", esquemaProducto)

module.exports = m_producto