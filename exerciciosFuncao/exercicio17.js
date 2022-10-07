function aumentoSalario (plano, salario) {
    switch (plano){
        case 'A': case 'a': console.log(salario + (salario * 0.1)); break
        case 'B': case 'b': console.log(salario +(salario * 0.15)); break
        case 'c': case 'C': console.log(salario + (salario * 0.2));break
        default: console.log('plano invalido'); break;
    }
}

aumentoSalario('a', 2000)
aumentoSalario('B', 2000)
aumentoSalario('c', 2000)
aumentoSalario('f', 2000)