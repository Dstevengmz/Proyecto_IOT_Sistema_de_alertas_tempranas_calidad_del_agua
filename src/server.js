const http = require('http')
const fs =require('fs')
const { error } = require('console')

const hostname = '127.0.0.1'
const port = 5000

const server = http.createServer( (req, res ) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text-html')
    fs.readFile('views/index.html',(error,data)=>{
        if(error){
            res.writeHead(404)
            res.write("Archivo no encontrado")
        }else{
            res.write(data)
        }
        res.end()
    })
    
})

server.listen( port, hostname, () => {
    console.log(`Servidor corriendo en : https://${hostname}:${port}/`)
})
