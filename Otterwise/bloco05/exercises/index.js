import axios from "axios"

const url = "https://jsonplaceholder.typicode.com/posts/"
const urlSW = "http://swapi.dev/api/planets/1"


    //GET

// const getPosts = async (url, value) => {
//     try {
//         const response = await axios.get(value ? `${url}/${value}` : `${url}`)
//         console.log(response.data)
//     } catch(error) {
//         console.log(error.message)
//     }
// }

// getPosts("https://jsonplaceholder.typicode.com/posts")
// getPosts(url, 2)



// *************************************************************************
    //CREATE  -  POST


// const data = { 
//     title: 'Titulo',
//     body: 'Corpo'
// }

// const createPosts = async (url, obj) => {
//     try {
//         const response = await axios.post(`${url}`, obj)
//         console.log(response.data)
//     } catch(error) {
//         console.log(error.message)
//     }
// }

// createPosts(url, data)



// *************************************************************************
    //EDIT  -  PATCH


// const data = { 
//     title: 'Titulo',
//     body: 'Corpo'
// }

// const setPosts = async (url, obj, value) => {
//     try {
//         const response = await axios.patch(`${url}/${value}`, obj)
//         console.log(response.data)
//     } catch(e) {
//         console.log(e.message)
//     }
// }

// setPosts(url, data, 2)



// *************************************************************************
    //DELETE  


const delPost = async (url, value) => {
    try {
        const result = await axios.delete(`${url}/${value}`)
        console.log(result)
    } catch(e) {
        console.log(e.message)
    }
}

delPost(url, 5)