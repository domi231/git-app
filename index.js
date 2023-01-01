import http from 'http'


const servidor = http.createServer((req,res) => {
    res.send("Hola amigo")
})

servidor.listen(3000)