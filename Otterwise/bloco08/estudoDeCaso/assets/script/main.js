import axios from 'axios'

const $ = (name) => document.getElementsByName(name)[0]
// console.log(document.getElementsByName('city'))

const searchCep = async (cep) => {
    try {
        const resp = await axios.get(`https://viacep.com.br/ws/${cep}/json`)
        return resp.data
    } catch (error) {
        console.log(error.message)
    }
}

window.onload = () => {
    const cepInput = $('cep')
    cepInput.addEventListener('input', async (e) => {
        const cep = e.target.value
        if(cep.length === 8) {
            cepInput.setAttribute('disabled', true)
            try{
                const cepData = await searchCep(cep)
                if(cepData.erro) {
                    throw new Error('Cep Inválido')
                }
                const street = document.querySelector('#street')
                street.value = cepData.logradouro
                const neighborhood = $('neighborhood')
                neighborhood.value = cepData.bairro
                $('city').value = cepData.localidade
                document.querySelector('#state').value = cepData.uf
            } catch (e) {
                console.log(e.message);
            } finally {
                cepInput.removeAttribute('disabled')
            }
        }   
    })
}





// const cep = async () => {
//     try {
//         const response = await axios.get('https://viacep.com.br/ws/96050170/json')
//         console.log(response.data);
//         // return response.data
//     } catch(e) {
//         console.log(e.message)
//     }
// } 