import fs from 'fs'

export const saveToJson = (data, fileName) => {
    const parsedJSON = JSON.stringify(data)
    fs.writeFileSync(fileName, parsedJSON)
}