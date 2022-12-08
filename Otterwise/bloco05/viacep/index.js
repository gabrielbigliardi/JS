import { input } from 'console-input'
import { searchCep } from './searchCep.js'
import { cepAleatorios } from './randomCep.js'
import { saveToJson } from './saveToJson.js'
import axios from 'axios'
import { searchCepWithArray } from './searchCepWithArray.js' 

// const cepInput = () => input('Digite seu CEP:')


const ceps = ['96050170', '96077230']

// const cepsToPromises = async (cepArray) => {
//     try {
//         const cepPromises = cepArray.map( async (cep) => {return await searchCep(cep)} )
//         return cepPromises
//     } catch (e) {
//         console.log(e.message);
//     }
// }

// console.log(cepsToPromises(ceps))






searchCepWithArray(['96050170', '96077230'])

// console.log(searchBananas(ceps))
// saveToJson(searchBananas, "newTest.json")


// export const generateCepListJSON = async (cepList) => {
//     try {
//         cepList.forEach(element => {
//           cep = element;
//           const {logradouro, bairro, localidade, uf} = await searchCep(element);
//           const cepData = {
//             logradouro,
//             bairro,
//             localidade,
//             uf,
//           }
//           saveToJSON(data, 'arquivo.json')
//         });
//     } catch (e) {
//         console.log(e.message)
//     }
//   }

//   generateCepListJSON(ceps)


// const cepPromises = Promise.all(cep.map( async cep => await searchCep(cep) ) )


// const cepDataToJsonObj = async () => {
//     try {
//         // const cepsToPromises = ;
//         const cepData = await searchCep(ceps)
//         console.log(cepData)
//     } catch (e) {
//         console.log(e.message);
//     }
// }

// cepDataToJsonObj()
