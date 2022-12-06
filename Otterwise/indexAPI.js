// GET  --> PEGA
// POST  --> ENVIA
// PUT  --> EDITAR
// PATCH  --> EDITAR
// DELETE  --> APAGAR


// FAKE API  --> https://jsonplaceholder.typicode.com
              // https://swapi.dev/api/people/1

import axios from "axios"
// const axios = require('axios')


axios
  .get("https://jsonplaceholder.typicode.com/")
  .then(function (response) {
    console.log(response);
  });

// axios.get("https://jsonplaceholder.typicode.com/posts")
// .then(data => console.log(data))
  // .then(resp => resp.json())
// const setPost = async () => {
//   try{
//     const response = await axios.get("https://jsonplaceholder.typicode.com/posts/1/comments")
//     console.log("status: " + response.status)
//     console.log(response)
//     // return response.data
//   } catch(error) {
//     console.log(error.response.status)
//   }
// }

// const userInfo = {
//   title: 'titulo', body: 'corpo', userId: 13
// }

// setPost()


// fetch('https://jsonplaceholder.typicode.com/posts/1')
//   .then((response) => response.json())
//   .then((json) => console.log(json));