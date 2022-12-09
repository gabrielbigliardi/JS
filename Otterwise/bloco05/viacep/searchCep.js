import axios from 'axios'

export const searchCep = async(cep) => {
    try{
        const resp = await axios.get(`https://viacep.com.br/ws/${cep}/json`)
        console.log(resp.data)
        return resp.data
    } catch(e) {
        console.log(e.message)
    }
}