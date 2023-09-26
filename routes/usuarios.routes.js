const { postUsuario, getUsuarios } = require('../controllers/usuarios.controllers')

const routesUsuarios = require('express').Router()

routesUsuarios.post('/',postUsuario) // http://localhost:8001/api/usuarios
routesUsuarios.get('/',getUsuarios) // http://localhost:8001/api/usuarios

module.exports= routesUsuarios