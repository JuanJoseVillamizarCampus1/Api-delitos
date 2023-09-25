const cors = require('cors');
const dbConnection = require('../database/config');
const express = require('express')

class Server {
    constructor(){
    this.app= express()
    this.port = process.env.PORT
    this.middlewares();
    this.connetionDb();
    }
    async connetionDb (){
        await dbConnection()
    }
    middlewares(){
        this.app.use(cors())
        this.app.use(express.json())
    }
    listen(){
        this.app.listen(this.port,()=>{
            console.log(`Listo el servidor mi rey escuhando el puerto: ${this.port}`);
        })
}
}

module.exports = Server;