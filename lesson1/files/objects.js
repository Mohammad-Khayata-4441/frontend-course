// * Declare Objects
let user = { name: "Mohammad" }
user.age = 25;

console.log(user)

//* Asigning Object to Object
let copy1 = user;
copy1.name = "Ali";
console.log(user)
console.log(copy1)

//* Spread Operator

let copy2 = { ...user, gender: "male" };

let copy3 = { gender: "male", ...user, };

//* Object Destructuring
let { name, age } = user;

console.log(name)
console.log(age)

//* Object Methods
let keys = Object.keys(user);
let values = Object.values(user);
let entries = Object.entries(user);

console.log(keys)
console.log(values)
console.log(entries)

//* Loop through object

function printUser() {
    let keyyy = 'name'
    user.name
    user[keyyy] 
    for (let key in user) {

        console.log(`${key}: ${user[key]}`);
    }
}
printUser()





