const express = require('express')
const bodyParser = require('body-parser');
const app = express()
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const port = 3010

let comida =[
    {id:1, name: "sushi"},
    {id:2, name: "pizza"},
    {id:3, name: "ensalada"}
]

app.get('/', (req, res) => {
  res.send(comida)
})

//post
app.post('/add', (reg, res) => {
    const { id, name } = reg.body
    comida.push({id, name})
    //res.status(200).send({id, name});
    res.status(200).send(comida)
})

//patch
app.patch('/mod/:id', (reg, res) => {
    const { id } = reg.params
    const { name } = reg.body
    const modificar = comida.find((bus) => id == bus.id)
    modificar.name = name
    //res.status(200).send({id, name})
    res.send(comida)
})

//delete
app.delete('/delete/:id', (reg, res) => {
    const { id } = reg.params
    const { name } = reg.body
    const eliminar = comida.filter((bus) => id != bus.id)
    comida = eliminar
    res.send(comida)
})

app.get('/find/:id', (reg, res) => {
    const { id } = reg.params
    const { name } = reg.body
    const buscar = comida.find((bus) => id == bus.id)
    res.send(buscar)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})