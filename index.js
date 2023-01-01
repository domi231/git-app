import http from 'http'


const servidor = http.createServer((req,res) => {
    res.writeHead(200,{'Content-Type' : 'application/json'})
    res.write("Hola amigo")
    res.send()
})



servidor.listen(3000,()=> {
    console.log("Servidor iniciado")
})
