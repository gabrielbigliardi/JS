import axios from 'axios'

export const searchCepWithArray = async (array) => {
    const CEPs = await Promise.all(array.map(async element => {
        const response = await axios.get(`https://viacep.com.br/ws/${element}/json`)
        console.log(response.data)
        // console.log('divisoria')
        return response.data
    }))
    console.log(CEPs)
}