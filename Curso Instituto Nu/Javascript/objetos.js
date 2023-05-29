var pessoa = {
    nome: "Luiz",
    sobrenome: "Otavio"
};

console.log(pessoa["sobrenome"]);

var pessoa1 = new Object();
pessoa1.nome = "Angela";
pessoa1.sobeenome = "Silvia"
pessoa1.falarNome = function(){
    console.log("Nome é: " +this.nome)
}

pessoa1.falarNome();


function criarPessoa(nome, sobrenome){
    return {nome,sobrenome}
}

var p1 = criarPessoa("Lucas", "Silva");
var p2 = criarPessoa("Arthur", "Almeida");

console.log(p1);