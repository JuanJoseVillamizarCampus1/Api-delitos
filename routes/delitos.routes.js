const { postDelito, getDelitos } = require('../controllers/delitos.controllers')

const routerDelito = require('express').Router()

routerDelito.post('/',postDelito) //POST//localhost:8001/api/delitos
routerDelito.get('/',getDelitos)//GET//localhost:8001/api/delitos

module.exports= routerDelito