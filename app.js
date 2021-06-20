//Carregando módulos
const express = require('express')
const cors = require('cors')
const app =  express()
const mongoose = require('./config/mongoose')
const PORT = 8081

app.use(cors());
app.use(express.json());

const entregas = require("./routes/entregas")
app.use(entregas)

app.listen(PORT, ()=>{
    console.log(`Servidor rodando na porta ${PORT}!`)
})