interface Address {
    street?: string;
    num?: number;
    city: string;
    state?: string;
    country: string;
    code?: number;
}

let myAddress: Address = {street: "Rua dos Alfineiros", num: 4, city: 'London', country: 'England'}

export interface User extends Address{
    name: string;
    age: number;
    email: string;

}

let person: User = {name: "Harry", age: 17, email: 'hjpotter@hogmail.com', street: "Privet Drive", num: 4, city: "London", country: 'England'}


interface Person {
    name: string;
    age: number;
}

let [person1, person2, ...rest]: Person[] =[{name: 'rachel', age: 25}
,{name: 'ross', age: 26}
,{name: 'phoebie', age: 24}
,{name: 'chandler', age: 25}]

console.log(person1);
console.log(rest);
