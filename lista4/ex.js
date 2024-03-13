const express = require('express');
const router = express();


router.post('/ex4' , function(req, res){

    const salario = Number(req.body.salario)
    const horas = Number(req.body.horas)
    const depenFuncionario = Number(req.body.depenfuncionario)
    const horasExtras = Number(req.body.horasExtras)

    
    res.json({})



});




module.exports = router