import { input } from 'console-input'
import { searchCep } from './searchCep.js'
import { cepAleatorios } from './randomCep.js'
import { saveToJson } from './saveToJson.js'
import axios from 'axios'
import { searchCepWithArray } from './searchCepWithArray.js' 

// const cepInput = () => input('Digite seu CEP:')


const ceps = ['96050170', '96077230']

searchCep(96015300)
searchCepWithArray(['96050170', '96077230'])



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
