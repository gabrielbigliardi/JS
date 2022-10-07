// não aceita repetição/nao é indexado
const times = new Set()
times.add('vasco')
times.add('sao paulo')
times.add('palmeiras').add('corinthians')
times.add('flamengo')
times.add('vasco')
console.log(times);
console.log(times.size);
console.log(times.has('vasco'));
console.log(times.has('Vasco'));
times.delete('flamengo')
console.log(times.has('flamengo'))

const nomes = ['raquel', 'julia', 'lucas', 'julia']
const nomeSet = new Set(nomes)
console.log(nomeSet)