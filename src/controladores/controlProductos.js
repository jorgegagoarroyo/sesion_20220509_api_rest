const m_productos = require("../modelos/m-producto")

module.exports = {

    leerProductos : async (req, res)=>{
        try{
            let productos = await m_productos.find()
            res.json({
                productos
            })
        }catch(error){
            res.json({mensaje:"error: "+error})
        }
    },

    crearProductos : async(req,res)=>{
        let producto = new m_productos(
            {
                nombre: req.body.nombre,
                precio: req.body.precio,
                cant: req.body.cant
            }
        )
        try{
            const n_p = await producto.save()
            res.json({
                producto:n_p
            })
        }catch(error){
            res.json({mensaje: "error al crear:"+ error})
        }
    },

    editProductos : async (req,res)=>{
        let id = req.params.id
        try{
            const editado = m_productos.findByIdAndUpdate(id,
                {
                    nombre: req.body.nombre,
                    precio: req.body.precio,
                    cant: req.body.cant
                },
                {new:true})
            res.json({data: editado})
        }catch(error){
            res.json({error:"error al editar:"+error})
        }
    },

    borrarProductos : async (req,res)=>{
        let id = req.params.id
        try{
            await m_productos.findByIdAndDelete(id)
            res.json({mensaje: "producto ID:"+id+" borrado"})
        }catch(error){
            res.json({
                mensaje:"error:"+error
            })
        }
    }

}


//res.json({mensaje:})