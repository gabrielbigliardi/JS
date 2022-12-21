function alturaCriancas(altura1, taxa1, altura2, taxa2) {
    if(altura1 === altura2) {
        return 'As crianças tem mesmo tamanho'
    } else {
        if (altura1 > altura2) {
            if(taxa1 > taxa2) {
                return 'Criança 2 nunca ultrapassara a criança 1'
            } else {
                let contAnos = 0
                while(altura1 > altura2) {
                    contAnos++
                    altura1 += taxa1
                    altura2 += taxa2
                }
                return `A criança 2 ultrapassara a criança 1 em ${contAnos} anos.`
            }
        } else if(altura2 > altura1){
            if (taxa2 > taxa1) {
                return 'Criança 1 nunca ultrapassara a crianca 2'
            } else {
                let contAnos = 0
                while(altura2 > altura1) {
                    contAnos++
                    altura1 += taxa1
                    altura2 += taxa2
                }
                return `A crianca 1 ultrapassara a crianca 2 em ${contAnos} anos.`
            }
        }
    }
}

console.log(alturaCriancas(1.4, 0.2, 1.5, 0.1))
console.log(alturaCriancas(1.0, 0.1, 1.3, 0.05))
console.log(alturaCriancas(0.9, 0.3, 0.8, 0.1))
console.log(alturaCriancas(1.1, 0.2, 0.5, 0.3))