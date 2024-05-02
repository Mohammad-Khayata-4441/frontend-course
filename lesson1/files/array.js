//* Declare Array
let numbers = [1, 2, 3, 4, 5];

//* Modify Array
// numbers.push(6);
// numbers.unshift(99)

// numbers.shift()
// numbers.pop()

// console.log(numbers)

//* Array Destructuring
// let first = numbers[0];
// let seconde =  numbers[1];
let [x, y, z , ...rest ] = numbers;

// console.log(x,y,z,rest)

//* Array Spread Operator
console.log(numbers)

let copy2 = [...numbers];



copy2[0]= 500
console.log(numbers)
console.log(copy2)




//* Looping Through Array
function printNumbers() {
    // for (let i = 0; i < numbers.length; i++) {
    //     console.log(numbers[i]);
    // }

    // numbers.forEach((itr)=>{
    //     // ! Doesn't support break;
    //     if(itr === 2 ){
    //         return
    //     }   
    //     console.log(itr)
    // })

    // for (const index in numbers) {
    //  console.log(index)
        
    // }

    // for (const itr of numbers) {
    //  console.log(itr)
        
    // }


}
// printNumbers();

//* Array Methods
let length = numbers.length;
let indexOfThree = numbers.indexOf(3);
let slicedArray = numbers.slice(1, 3);
let reversedArray = numbers.reverse();
console.log('length',length)

console.log('indexOfThree',indexOfThree)

console.log('slicedArray',slicedArray)

console.log('reversedArray',reversedArray)
//* Alternatively, you can use forEach for looping:
numbers.forEach(num => {
    // console.log(num);
});



// Example Array of Users
let users = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 35 },
    { name: "David", age: 40 },
    { name: "Eve", age: 20 }
];

//* Using map to create an array of user names
let userNames = users.map(user => user.name);

console.log(userNames); // Output: ["Alice", "Bob", "Charlie", "David", "Eve"]

//* Using filter to get users older than 30
let olderThanThirty = users.filter(user => user.age > 30);

console.log(olderThanThirty); // Output: [{ name: "Charlie", age: 35 }, { name: "David", age: 40 }]

//* Using some to check if any user is younger than 25
// let youngerThanTwentyFive = users.every(user => user.age < 25);
// let youngerThanTwentyFive = users.some(user => user.age < 25);

// console.log(youngerThanTwentyFive); // Output: true

//* Using find to get the first user with age 25
let firstAgeTwentyFive = users.find(user => user.age === 25);

// console.log(firstAgeTwentyFive); // Output: { name: "Bob", age: 25 }
