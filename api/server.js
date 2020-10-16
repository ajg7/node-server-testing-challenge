const express = require('express')
const server = express()
const NintendoRouter = require("../nintendo-characters/router-nintendo-characters")

server.use(express.json())

server.get('/',(req,res)=>{
    res.status(200).json({Frankenstein: "It's alive!!!!!!"})
})

server.use("/api/", NintendoRouter);

module.exports = server