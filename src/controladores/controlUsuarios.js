const m_usuario = require("../modelos/m_usuarios")



module.exports = {

    leerUsuarios : async (req, res)=>{
        try{
            const usuariosEncontrados = await m_usuario.find()
            res.json(usuariosEncontrados)
        }catch(error){
            res.json({mensaje:"error en base de datos: "+error})
        }
        // res.json({
        //     mensaje: "todos los usuarios"
        // })   
    },

    crearUsuario : (req,res)=>{
        // res.json({
        //     mensaje:"api/usuarios post exportando un json"
        // })
    },

    editUsuarioId : (req,res)=>{
        let id = req.params.id
        res.json({
            mensaje:" para editar un usuario id:"+id
        })
    },

    borrarUsuarioId : async (req,res)=>{
        let id = req.params.id
        console.log("usuario ID " + id)
        try{
            await m_usuario.findByIdAndDelete(id)
            res.json({mensaje:`usuario ID:${id} se ha borrado`})
        }catch(error){
            res.json({mensaje:"error en base de datos: "+error})
        }
    },

    leerUsuarioId : async (req, res)=>{
        let id=req.params.id
        try{
            const usuariosEncontrados = await m_usuario.findById(id)
            res.json(usuariosEncontrados)
        }catch(error){
            res.json({mensaje:"error en base de datos: "+error})
        }  
    }
}





// const leerUsuarios = (req, res)=>{
//     res.json({
//         mensaje: "aqui saldran todos los usuarios"
//     })
// }

// const crearUsuario = (req,res)=>{
//     res.json({
//         mensaje:"estas en api/usuarios post exportando un json"
//     })
// }

// const editUsuario = (req,res)=>{
//     res.json({
//         mensaje:"estas en api/usuarios para editar un usuarios"
//     })
// }

// const borrarUsuario = (req,res)=>{
//     res.json({
//         mensaje:"estas en api/usuarios para borrar un usuario"
//     })
// }

// module.exports = {leerUsuarios, crearUsuario, editUsuario, borrarUsuario}


// [
//     {
//         "_id": "6278f0acf7973e641173c9b5",
//         "nombre": "tomas",
//         "apellido": "turbao",
//         "email": "tomasturbao@gmail.com"
//     },
//     {
//         "_id": "6278f106f7973e641173c9b6",
//         "nombre": "paco",
//         "apellido": "jones losmios",
//         "email": "pacojoneslosmios@gmail.com"
//     }
// ]