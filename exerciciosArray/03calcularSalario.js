const calcularSalario = (horasTrabalhadas, valorHora) => {
    const salario = horasTrabalhadas * valorHora
    return `Salário igual a R$ ${salario}.`
}

console.log(calcularSalario(150, 40.5))