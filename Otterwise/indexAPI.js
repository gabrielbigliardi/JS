// GET  --> PEGA
// POST  --> ENVIA
// PUT  --> EDITAR
// PATCH  --> EDITAR
// DELETE  --> APAGAR

// FAKE API  --> https://jsonplaceholder.typicode.com

// import axios from 'axios'

// const getPost = async () => {
//     const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
//     console.log(response.data)
//     return response
// }

// getPost()

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json => console.log(json))

// https://swapi.dev/api/people/1

// axios.get("https://jsonplaceholder.typicode.com/posts")
// axios.get("https://swapi.dev/api/people/1")
    // .then(res => res.data)
    // .then(data => JSON.stringify(data))
    // .then(dadosString => console.log(dadosString))
