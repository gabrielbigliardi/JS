import { input } from 'console-input'
import axios from 'axios'
import fs from 'fs'

const cepInput = () => input('Digite seu CEP:')

const searchCep = async(cep) => {
    try{
        const resp = await axios.get(`https://viacep.com.br/ws/${cep}/json`)
        // console.log(resp.data)
        return resp.data
    } catch(e) {
        console.log(e.message)
    }
}

// const cepBusca = userInput()
// searchCep(cepBusca)

const saveToJson = (data, fileName) => {
    const parsedJSON = JSON.stringify(data)
    fs.writeFileSync(fileName, parsedJSON)
}

// saveToJson({name: 'Jumba', idade: '22'}, 'dados.JSON')


const main = async () => {
    try{
        const cep = cepInput() 
        const cepBusca = await searchCep(cep)
        saveToJson(cepBusca, "ceps.json")
        // console.log(cepBusca);
    } catch(e) {
        console.log(e.message)
    }
}

main()