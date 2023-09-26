const Usuario = require('../models/Usuario')
//Post usuarios new usuarios
const postUsuario = async (req,res)=>{
    try {
        const {nombre,apellido,correoElectronico,contraseña}= req.body
        const usuarioDb= await Usuario.findOne({correoElectronico})
        if (usuarioDb) {
            return res.status(400).json({
                msg: `Este Email ${usuarioDb.correoElectronico}ya existe `,
              });
        }
        const usuario = new Usuario({nombre,apellido,correoElectronico,contraseña})
        await usuario.save()
        res.status(201).json(usuario)
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Todos los datos son obligatorios' });
    }
}
//Traer todos los usuarios
const getUsuarios = async (req,res)=>{
    try {
        const usuarios= await Usuario.find({estado:true});
        res.status(200).json(usuarios);
    } catch (error) {
        res.status(500).json({ msg: 'Error al obtener usuarios' });
    }
}
//Delete usuarios
const deleteUsuarios = async (req, res)=>{
    //extrayendo id de la url de la req
    const {id} = req.params

    //borrado fisico en DB
   /*  const usuario = await Usuario.findByIdAndDelete(id); */

    // borrado virtual.  solo se cambia el estado a false del usuario asociado al id en cuestion
    const usuario = await Usuario.findByIdAndUpdate( id, { estado: false } );

    res.json(usuario)
}
module.exports= {postUsuario,getUsuarios,deleteUsuarios}