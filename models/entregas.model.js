const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const DataSchema = new Schema({
    nomeCliente:{
        type: String,
        required: true
    },
    dataEntrega:{
        type: String,
        required: true
    },
    pontoPartida:{
        type: String,
        required: true
    },
    pontoDestino:{
        type: String,
        default: Date.now(),
        required: true
    }
},{
    timestamps:true
})

const entregas = mongoose.model("entregas", DataSchema)
module.exports = entregas;