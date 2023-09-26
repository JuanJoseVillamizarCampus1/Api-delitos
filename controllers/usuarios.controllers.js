const Usuario = require('../models/Usuario')
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
const getUsuarios = async (req,res)=>{
    try {
        const usuarios= await Usuario.find();
        res.status(200).json(usuarios);
    } catch (error) {
        res.status(500).json({ msg: 'Error al obtener usuarios' });
    }
}
module.exports= {postUsuario,getUsuarios}