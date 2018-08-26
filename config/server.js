const port = 3000;

const express = require('express')
const server = express()

server.listen(port,() => {
    console.log(server)
    console.log('listening on')
})

// request get
server.get('/', (req,res)=> res.send('Rodando...'))

module.exports = server