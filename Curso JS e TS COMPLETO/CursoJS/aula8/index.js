const nome = 'Jardel';
const sobrenome = 'Sadala';
const idade = 22
const peso = 93
const alturaEmM = 1.73
let imc = (peso/(alturaEmM * alturaEmM)) // pesso / (altura * altura)
let anoNascimento = 2000

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);

