"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let myAddress = { street: "Rua dos Alfineiros", num: 4, city: 'London', country: 'England' };
let person = { name: "Harry", age: 17, email: 'hjpotter@hogmail.com', street: "Privet Drive", num: 4, city: "London", country: 'England' };
let [person1, person2, ...rest] = [{ name: 'rachel', age: 25 },
    { name: 'ross', age: 26 },
    { name: 'phoebie', age: 24 },
    { name: 'chandler', age: 25 }];
console.log(person1);
console.log(rest);
