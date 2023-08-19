function reajusteSalarial(salario) {
    if (salario < 2000) {
        let resultado = 'R$ ' + salario * 1.1;
        console.log(resultado);
    }

    if (salario >= 2000 && salario <= 5000) {
        let resultado = 'R$ ' + salario * 1.08;
        console.log(resultado);
    }

    if (salario > 5000) {
        let resultado = 'R$ ' + salario * 1.06;
        console.log(resultado);
    }
}
reajusteSalarial(1000) 