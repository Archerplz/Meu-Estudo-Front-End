// O custo de um carro novo ao consumidor é asoma do custo da fabrica com a porcentagem do distribuidor e dos impostos(aplicados ao custo de fabrica). Supondo que o percentual do distribuidor seja de 28% e os impostos de 45%, escreva um algoritmo para ler o custo de fabrica de um carro, celular e escrever o custo final ao consumindor.


var custoFabrica =40000;
var porcentagemDistribuidor;
var porcentagemImposto;
var custoFinal;

porcentagemDistribuidor = custoFabrica * 28/100;
porcentagemImposto = custoFabrica *45/100;
custoFinal = custoFabrica + porcentagemDistribuidor + porcentagemImposto;
console.log("O custo final ao consumidor é: " + custoFinal)