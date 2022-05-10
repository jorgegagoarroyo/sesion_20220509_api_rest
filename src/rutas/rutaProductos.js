const express = require("express")
const router = express.Router()

const {leerProductos, crearProductos, editProductos, borrarProductos} = require("../controladores/controlProductos")

router.get("/", leerProductos)

router.post("/", crearProductos)

router.put("/:id", editProductos)

router.delete("/:id", borrarProductos)

module.exports = router