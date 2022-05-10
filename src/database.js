const mongoose = require("mongoose")



const BD_NAME = "bdproductos" 
const BD_USER = "jorgegago"
const BD_PASSWORD = "1596320a"
const uri = `mongodb+srv://${BD_USER}:${BD_PASSWORD}@cluster0.h7qef.mongodb.net/${BD_NAME}?retryWrites=true&w=majority`

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
    
var db = mongoose.connection


//
// var Schema = mongoose.Schema
// var esquemaUsuario = new Schema({
//     nombre: String,
//     apellido: String,
//     email: String
// })

// //creamos el modelo
// var m_usuario = mongoose.model("m_usuario", esquemaUsuario)

// //usamos el modelo para leer datos de la coleccion m-usuarios
// leerUsuariosdb = async()=>{
//     try{
//         const usuariosEncontrados = await m_usuario.find()
//         //console.log(usuariosEncontrados)
//         console.log("los usuarios son: ", usuariosEncontrados)
//     } catch(error){
//         console.log("error al conectar a la base de datos ",error)
//     }
// }
// console.log(leerUsuariosdb())


module.exports = db