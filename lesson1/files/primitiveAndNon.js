// Mutating a primitive value using a function
function capitalize(str) {
    return str.toUpperCase(); // Returns a new string, mutating the original string doesn't affect it
}

let name = "john";
let capitalizedName = capitalize(name);

console.log(capitalizedName); // Output: JOHN
console.log(name); // Output: john (unchanged)

// Mutating a non-primitive value using a function
function incrementAge(person) {
    person.age++;
}

let person = { name: "John", age: 30 };
console.log(person); // Output: { name: "John", age: 30 }

incrementAge(person);

console.log(person); // Output: { name: "John", age: 31 }