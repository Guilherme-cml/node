const express = require('express');
const app = express();

console.log('Executou');

app.use(express.json());
app.use(express.urlencoded({extended: false}));

/*app.get('/' , function(req, res){
    res.send('Principal')
})


app.get('/hello' , function(req, res){
    res.send('Chegou a resposta')
})

app.get('/nome' , function(req, res){
    res.send('Guilherme')
})

app.post('/lista1/ex1' , function(req, res){

       //res.status(200).json(req.body)
        const totalEleitores = Number(req.body.totalEleitores)
        const brancos = Number(req.body.brancos)
        const nulos = Number(req.body.nulos)
        const validos = Number(req.body.validos)
        const soma = nulos + brancos + validos

        
        let retorno = {}

        if (soma >totalEleitores) {
            retorno = {mensagem: 'A Soma dos votos não pode passar do numero total de eleitores',
                        codigo: 'SOMA_INVALIDA'} 

                res.status(400).json(retorno) 
        }
        else {
            
            const percenBranco = brancos / totalEleitores * 100
            const percennulos = nulos / totalEleitores * 100
            const percenvalidos = validos / totalEleitores * 100

            // retorno = {percenBranco, percennulos, percenvalidos}
            // res.status(200).json(retorno)

            res.status(200).json({percenBranco, percennulos, percenvalidos})
        }
    })*/

const lista2 = require('./lista2/ex')
const lista3 = require('./lista3/ex')
const lista4 = require('./lista4/ex')

app.use('/lista2', lista2);
app.use('/lista3', lista3);
app.use('/lista4', lista4);

app.listen(3000, function () {
    console.log('Servidor iniciado na porta 3000');
})





