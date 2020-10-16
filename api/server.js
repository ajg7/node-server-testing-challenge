const express = require('express')
const server = express()
const nintendoRouter = require("../nintendo-characters/router-nintendo-characters")

server.use(express.json())

server.get('/',(req,res)=>{
    res.status(200).json({Frankenstein: "It's alive!!!!!!"})
})

module.exports = server