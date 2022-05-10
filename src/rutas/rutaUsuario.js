const express = require("express")
const router = express.Router()

//const usuarios = require("../controladores/controlUsuarios")

// router.get("/", usuarios.leerUsuarios)

// router.post("/", usuarios.crearUsuario)

// router.put("/", usuarios.editUsuario)

// router.delete("/", usuarios.borrarUsuario)

const {leerUsuarios, leerUsuarioId, crearUsuario, editUsuarioId, borrarUsuarioId} = require("../controladores/controlUsuarios")

router.get("/", leerUsuarios)

router.post("/", crearUsuario)

router.get("/:id", leerUsuarioId)

router.put("/:id", editUsuarioId)

router.delete("/:id", borrarUsuarioId)


module.exports = router