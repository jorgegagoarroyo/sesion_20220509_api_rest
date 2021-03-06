const express = require("express")
const app = express()

const cors = require("cors")
app.use(cors())

const morgan = require("morgan")

const rutaUsuarios = require("./src/rutas/rutaUsuario")
const rutaProductos = require("./src/rutas/rutaProductos")

const db = require("./src/database")
db.on("error", (error)=>{
    console.log("Error en la conexion en la base de datos "+error)
})
db.on("connected", ()=>{
    console.log("la base de datos esta conectada")
})


app.use(morgan("combined"))

//Middleware para la codificación json del cuerpo de las peticiones (body)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//rutas con middleware
app.use("/api/usuarios", rutaUsuarios)
app.use("/api/productos", rutaProductos)



app.get("/", (req, res)=>{
    res.send("Estas en la ruta raiz de nuestra aplicaion")
})


const PORT = 6969
app.listen(PORT, ()=>{
    console.log("escuchando puerto ", PORT)
})