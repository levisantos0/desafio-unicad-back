const mongoose = require('mongoose')

mongoose.Promise = global.Promise;

module.exports = mongoose.connect("mongodb://localhost/cadastro_entregas",{
    useUnifiedTopology:true,
    useNewUrlParser:true,
    useFindAndModify:false
}).then(()=>{
    console.log(`Conectado ao mongodb`)
}).catch((erro)=>{
    console.log(`Erro ao se conectar: ${erro}`)
})

