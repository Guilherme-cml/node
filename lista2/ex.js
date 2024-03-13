const express = require('express');
const router = express();


router.post('/ex1' , function(req, res){
  let n1 = Number(req.body.n1)
  let n2 = Number(req.body.n2)
  let n3 = Number(req.body.n3)
  let n4 = Number(req.body.n4)

  // validação dos dados entre 0 e 10
  if(n1 < 0 || n1 > 10 || n2 < 0 || n2 > 10 || n3 < 0 || n3 > 10 || n4 < 0 || n4 > 10){
      res.status(400).json("digite valores entre 0 e 10")
  }
  else if(isNaN(n1) || isNaN(n2) || isNaN(n3) || isNaN(n4)){
      res.status(400).json("digite um valor númerico")
  }

  let media = (n1 + n2 + n3 + n4) / 4;

  let retorno = {}
      // resultado
      if (media >= 7) {
          retorno = {
          dados : req.body,
          media: media,
          mensagem: 'Aprovado'
          }
          res.status(200).json(retorno)
      }else if (media >= 5) {
          retorno = {
          dados : req.body,
          media: media,
          mensagem: 'Recuperação'
          }
          res.status(200).json(retorno)
      }
      else {
          retorno = {
              dados : req.body,
              media: media,
              mensagem: 'Reprovado'
          }
          res.status(200).json(retorno)
      }
})

router.post('/ex2' , function(req, res){
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
      })

router.post('/ex3' , function(req, res){
  const salario = Number(req.body.salario)
  const reajuste = Number(req.body.reajuste)

  const calculo = (salario * reajuste) / 100

  res.status(200).json(`O valor do reajuste de ${reajuste}% é R$${calculo}, seu salário irá ser R$${salario + calculo}`)

})

router.post('/ex4' , function(req, res){
  const valorcarro = Number(req.body.valorcarro);
  const percentualDistribuidor = valorcarro * 28 / 100;
  const impostos = valorcarro * 45 / 100;

  const valorfinal = valorcarro + percentualDistribuidor + impostos


  res.status(200).json(`O Valor final do seu carro é R$${valorfinal}`)

})

router.post('/ex5' , function(req, res){
        const valorcarro = Number(req.body.valorcarro);
        const percentualDistribuidor = Number(req.body.percentualDistribuidor);
        const impostos = Number(req.body.impostos);

        const valorfinal = (valorcarro * percentualDistribuidor /100) + (impostos * valorcarro / 100) + valorcarro
        

        res.status(200).json(`O Valor final do seu carro é R$${valorfinal}`)
})
router.get('/ex6' , function(req, res){
  const salario = Number(req.body.salario)
  const carros = Number(req.body.carros)
  const vendas = Number(req.body.vendas)
  const comissao = Number(req.body.comissao)

  const salarioFinal = salario + ((5*vendas)/100) + (comissao * carros)

  res.status(200).json(`Seu salário será R$${salarioFinal}`)


})

router.get('/ex7' , function(req, res){
   
  const nota1 = Number(req.body.nota1);
    const nota2 = Number(req.body.nota2);

    const peso4 = nota1 * 4
    const peso6 = nota2 * 6
    const media = (peso4 + peso6) / 10

    res.status(200).json(`Sua Média é ${media}`)
})

router.get('/ex8' , function(req, res){
        const raio = Number(req.body.raio)
        const altura = Number(req.body.altura)

        const volume = Math.PI * Math.pow(raio,2) * altura;

        res.status(200).json(`O volume da caixa é ${Math.round(volume)} metros cubicos`)
})

router.get('/ex9' , function(req, res){
   
  const num1 = Number(req.body.num1)
  const num2 = Number(req.body.num2)

  const calculo = (num1 + num2) * num1

  res.status(200).json(`O resultado do calculo é ${calculo}`)

})
module.exports = router