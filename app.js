//Carregando módulos
const express = require('express')
const cors = require('cors')
const app =  express()
const mongoose = require('mongoose')
const PORT = 8081

app.use(cors());
app.use(express.json());


mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost/cadastro_entregas",{
    useUnifiedTopology:true,
    useNewUrlParser:true,
    useFindAndModify:false
}).then(()=>{
    console.log(`Conectado ao mongodb`)
}).catch((erro)=>{
    console.log(`Erro ao se conectar: ${erro}`)
})

const entregas = require("./routes/entregas")
app.use(entregas)

app.listen(PORT, ()=>{
    console.log(`Servidor rodando na porta ${PORT}!`)
})