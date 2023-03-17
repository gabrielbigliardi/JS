function mediaAritmetica(arr){
    // let media = 0
    
    let soma = arr.reduce((acc, cur) => acc + cur , 0) 
    
    
    return soma / arr.length
}

console.log(mediaAritmetica([3, 2, 4, 7]));