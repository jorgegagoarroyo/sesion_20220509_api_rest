module.exports = {

    leerProductos : (req, res)=>{
        res.json({
            mensaje: "todos los productos"
        })
    },

    crearProductos : (req,res)=>{
        res.json({
            mensaje:"api/productos post exportando un json"
        })
    },

    editProductos : (req,res)=>{
        let id = req.params.id
        res.json({
            mensaje:" para editar un producto"+id
        })
    },

    borrarProductos : (req,res)=>{
        let id = req.params.id
        res.json({
            mensaje:" borrar un producto " +id
        })
    }

}