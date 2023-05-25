import products from "./data.js";

/*
    You're online shopping for holiday gifts, but money is tight
    so we need to look at the cheapest items first. 
    Use the built in sort() method to write a function that returns a new array of
    products sorted by price, cheapest to most expensive. 
    
    Then log the item and the price to the console: 
    
    💕,0
    🍬,0.89
    🍫,0.99
    🧁,0.99
    📚,0.99
    ... continued
*/

const sortProducts = (data) => {
    return data.sort((a,b) => {
        return a.price - b.price
    }).map((item) => `${item.product}, ${item.price}`)
}

// function sortProducts(data){
//     const prices = products.map(product => product.price)
//     return prices.sort()
// }

const listByCheapest = sortProducts(products);
console.log(listByCheapest);








function sortProducts2(data){
    return data.sort((a,b) => {
        return a.price - b.price
    });
}

const listByCheapest2 = sortProducts(products);
// console.log(listByCheapest);

listByCheapest.forEach(item => console.log(item.product, item.price));

