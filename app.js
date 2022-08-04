const express = require('express')

const app = express()

app.use(express.json())

let cachorros = [
    {
        id: 1,
        nome: "Gamora",
        raca: "Pastor alemão com qualquer outra coisa rsr",
        porte: 'medio',
    },
    {
        id: 2,
        
    }
]