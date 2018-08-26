const port = 3000;

const express = require('express')
const server = express()

server.listen(port,() =>  console.log(`listening on ${port}`))

// teste
server.get('/', (req,res)=> res.send('Rodando...'))

module.exports = server