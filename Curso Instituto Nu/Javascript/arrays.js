var valores = [8, 1, 7, 2, 9];

console.log(valores[3])

console.log("Array invertido: " +valores.reverse())

for (var pos = 0 ; pos < valores.length; pos++){
    console.log("Posição: "+ pos + " Valor: " + valores[pos])
}

var carros = [];
carros[0] = "Volvo";
carros[1] = "Jeep";
carros[2] = "Fiat";

var motos = new Array("BMW", "Honda", "Yamaha");

// Calcular a média de todos os números de um array

var soma = 0;
for (var pos = 0 ; pos < valores.length; pos++){
    soma += valores[pos];

}

var media = soma/valores.length;

console.log(media);

var arr1 = [1, 2, 3, 4, 5, 6];

console.log(arr1.join(' '));

var retirado = arr1.shift();

console.log(retirado);

console.log(arr1);

console.log("Posição do número 3: " +arr1.indexOf(3));

arr1.push(7);
console.log(arr1);

arr1.pop();
console.log(arr1);

var arr2 = [1,2,3,4,5,6,7];

arr2.splice(2,3);

console.log(arr2);

var nomes = ["Maria", "João", "Lucas", "Pedro"];

var novos = nomes.splice(1,1,"Luiz");

console.log(novos);