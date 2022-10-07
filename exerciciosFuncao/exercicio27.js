const crescimento = (altura1, taxaCrescimentoAnual1, altura2, taxaCrescimentoAnual2) => {
    /*const crianca1 = {
        altura: altura1,
        taxaCrescimento: taxaCrescimentoAnual1
    }

    const crianca2 = {
        altura: altura2, 
        taxaCrescimento: taxaCrescimentoAnual2
    }*/

    if (altura1 == altura2) {
        if (taxa1 > taxa2) {
            return 'A criança 1 ultrapassará a criança 2 em 1 ano.'
        } else if(taxa1 < taxa2) {
            return 'A criança 2 ultrapassará a criança 1 em 1 ano.'
        }else{
            return 'As crianças tem igual altura e crescimento.'
        }
    } else {
        if (altura1 > altura2) {
            if (taxaCrescimentoAnual1 > taxaCrescimentoAnual2) {
                return 'A crianca menor nao ultrapassara a crianca maior.'
            } else {
                return `A crianca menor ultrapassara a crianca maior em ${qntsAnos(altura1, taxaCrescimentoAnual1, altura2, taxaCrescimentoAnual2)} anos.`
            }
        } else {
            if (taxaCrescimentoAnual2 > taxaCrescimentoAnual1) {
                return 'A crianca menor nao ultrapassara a crianca maior.'
            } else {
                return `A crianca menor ultrapassara a crianca maior em ${qntsAnos(altura2, taxaCrescimentoAnual2, altura1, taxaCrescimentoAnual1)} anos.`
            }
        }

    }
    
    function qntsAnos( maiorAltura, menorCrescimento, menorAltura, maiorCrescimento ) {
        let anos = 0
        while (maiorAltura > menorAltura) {
            maiorAltura += menorCrescimento
            menorAltura += maiorCrescimento
            anos++
        }
        return anos

    }

}
console.log(crescimento(1.0, 0.3, 1.3, 0.1))
console.log(crescimento(150, 2, 130, 4));