const express = require('express');
const app = express();

console.log('Executou');

app.get('/' , function(req, res){
    res.send('Principal')
})


app.get('/hello' , function(req, res){
    res.send('Chegou a resposta')
})

app.get('/nome' , function(req, res){
    res.send('Guilherme')
})


app.listen(3000, function () {
    console.log('Servidor iniciado na porta 3000');
})