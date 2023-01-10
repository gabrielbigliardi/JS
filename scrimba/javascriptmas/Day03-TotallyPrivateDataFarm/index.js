// import userData from "./data.js";
let userData = require('./data.js')

/* Totally Private Data Farm 

Good news, renown advertising firm Evil Corp. wants to purchase our 
private user data! 

We'd never do this in real life of course, but just for practice 
let's pretend we're unethical web hackers and transform the data 
in the way Evil Corp. has requested. They're quite particular and
just want an array of users with a fullname and human readable
birthday.   

Write a function that maps through the current data and returns
a new an array of objects with only two properties: 
fullName and birthday. Each result in your 
array should look like this when you're done: 

{
    fullName: "Levent Busser", 
    birthday: "Fri Aug 20 1971"
}

Read about toDateString() for info on formatting a readable date. 

*/
function transformData(data){
    const firstName = userData.map((obj) =>  obj.name.first )
    const lastName = userData.map((obj) =>  obj.name.last )
    
    let dataHack = []
    
    
    const birthdays = userData.map((obj) => obj.dob.date)
    
    for( let i = 0; i < birthdays.length; i++ ) {
        birthdays[i] = new Date(birthdays[i]).toDateString("en-US", {
            year: 'numeric',
            month: 'short',
            day: '2-digit',
            weekday: 'short'
        })
    }
    

    for( let i = 0; i < firstName.length; i++ ) {
        dataHack.push({
            fullName: firstName[i].concat(" ", lastName[i]),
            birthday: birthdays[i]
        })
    }
    
    
    return dataHack
}

console.log(transformData(userData));
