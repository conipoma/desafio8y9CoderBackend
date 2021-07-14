import express from 'express' 
import Productos from './productos.js'
// Acá creamos la instancia de la clase
const Products = new Productos();

const app = express();
app.use(express.json());
const PORT = 8080;


app.get('/api/productos', (req, res) => {
    res.json(Products.listAll())
});

app.get('/api/productos/:id', (req, res) => {
    let id = req.params.id
    req.json(Products.list(id))
})

app.post('/api/productos', (req, res) => {
    res.json(Products.save(req.body))
})


const server = app.listen(PORT, () => {     console.log(`Servidor http escuchando en el puerto ${server.address().port}`) }) 

server.on("error", error => console.log(`Error en servidor ${error}`))

