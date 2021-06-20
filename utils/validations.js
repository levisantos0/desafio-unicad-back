const validateEntrega = (entrega) => {
    console.log(entrega)
    if (entrega.nomeCliente === '' &&
    entrega.dataEntrega === '' && 
    entrega.pontoPartida === '' &&
    entrega.pontoDestino === '') { 
        return false;
    }
    return true;
}
module.exports = {
    validateEntrega
}