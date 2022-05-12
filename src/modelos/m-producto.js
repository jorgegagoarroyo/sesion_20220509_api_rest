const mongoose = require("mongoose")

var Schema = mongoose.Schema
var esquemaProducto = new Schema({
    nombre: String,
    precio: Number,
    cant: Number
})

var m_producto = mongoose.model("m-producto", esquemaProducto)

module.exports = m_producto