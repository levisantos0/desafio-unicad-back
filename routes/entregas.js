const express = require('express')

const router = express.Router()

const entrega = require('../controllers/entregas.controller')

router.post('/entregas', entrega.create)
router.get('/entregas', entrega.index)
router.get('/entregas/:_id', entrega.details)
router.delete('/entregas/:_id', entrega.remove)
router.put('/entregas', entrega.update)

module.exports = router