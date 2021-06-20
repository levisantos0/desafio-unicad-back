const entregas = require("../models/entregas.model")
const validation = require("../utils/validations")

const index = async (req, res) => {
    const minhasEntregas = await entregas.find();
    if (!minhasEntregas)
        res.status(404).json('Nenhum registro encontrado.');

    res.json(minhasEntregas)
}

const create = async (req, res) => {
    try {
        const entrega = {nomeCliente, dataEntrega, pontoPartida, pontoDestino} = req.body
        if (validation.validateEntrega(entrega)) {
            const create = entregas(entrega).save();
            res.status(201).json(create);
        }
        res.status(400).json('Por favor informar todos os campos obrigatórios!');
    } catch(error){
        console.log(`Algo deu errado ${error}`)
    }
}
    
const details = async (req, res) => {
    const {_id} = req.params;
    const entrega = await entregas.findOne({_id});
    res.json(entrega)
}

const remove = async (req, res) => {
    const {_id} = req.params;
    const entrega = await entregas.findByIdAndDelete({_id});
    return res.json(entrega)
}

const update = async (req, res) => {
    const {_id, nomeCliente, dataEntrega, pontoPartida, pontoDestino} = req.body;

    const data = {nomeCliente, dataEntrega, pontoPartida, pontoDestino}

    const entrega = await entregas.findOneAndUpdate({_id},data,{new:true});

    res.json(entrega)

}

module.exports = {
    index,
    create,
    details,
    remove,
    update
}