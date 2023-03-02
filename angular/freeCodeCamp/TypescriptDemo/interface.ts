interface Address {
    street: string;
    num: number;
    city: string;
    state?: string;
    country: string;
    code?: number;
}

let myAddress: Address = {street: "Rua dos Alfineiros", num: 4, city: 'London', country: 'England'}

interface User extends Address{
    name: string;

}

let person: User = {name: "Harry", street: "Privet Drive", num: 4, city: "London", country: 'England'}