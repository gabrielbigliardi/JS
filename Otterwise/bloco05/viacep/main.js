import { input } from 'console-input'
import { cepAleatorios } from './randomCep.js'
import { saveToJson } from './saveToJson.js'
import { searchCep } from './searchCep.js'

export const main = async (cep) => {
    try{
        // const cep = cepInput() 
        const cepBusca = await searchCep(cep)
        saveToJson(cepBusca, "ceps.json")
    } catch(e) {
        console.log(e.message)
    }
}

main("96077230")