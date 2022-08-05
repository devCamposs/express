const express = require('express')

const app = express()

app.use(express.json())

let pessoa = [
    {
        id: 1,
        nome: "Thomas Campos",
        idade: 28,
    },
    {
        id: 2,
        nome: 'Jefferson Campos',
        idade: 30,
    },
    {
        id: 3,
        nome: 'Gabriel Campos',
        idade: 20,
    },
]

app.use(express.json())
app.get('/pessoa', (req, res) => {
    res.send(pessoa)
})

app.get('/pessoa', (req, res) => {
    res.send(pessoa)
})

app.post('/pessoa/', (req, res) =>{
    pessoa.push(req.body)
    res.send(pessoa)
})


app.put('pessoa/:id', (req, res) =>{
    let pessoa = pessoa.find(pess => pess.id === req.params.id)
    pessoa.nome = req.body.nome
    pessoa.idade = req.body.idade
    res.send(pessoa)
})

/* app.delete('pessoa/:id: 1', (req, res) => {
    let pessoa = pessoa.
}) */

app.listen(3000, () => {
    console.log('esta rodando na porta 3000')
})
