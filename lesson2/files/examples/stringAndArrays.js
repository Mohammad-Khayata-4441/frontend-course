// String Methods Examples

// Accessing string by index and charAt
const str = "Hello, world!";
console.log("Character at index 7:", str[7]); // accessing by index
console.log("Character at index 7 (charAt):", str.charAt(7)); // using charAt

// toUpperCase & toLowerCase
const upperCaseStr = str.toUpperCase();
console.log("Uppercase:", upperCaseStr);
const lowerCaseStr = str.toLowerCase();
console.log("Lowercase:", lowerCaseStr);

// replace & replaceAll
const replacedStr = str.replace("world", "JavaScript");
console.log("Replace:", replacedStr);
const replacedAllStr = str.replaceAll("l", "X");
console.log("Replace All:", replacedAllStr);

// substring
const substring = str.substring(7, 12);
console.log("Substring:", substring);

// Shared methods and properties

// length
console.log("Length of the string:", str.length);

// includes
console.log("Includes 'world'?", str.includes("world"));

// slice
const slicedStr = str.slice(7);
console.log("Slice:", slicedStr);

// Convert string to array

// split
const strToArray = str.split(", ");
console.log("String to Array:", strToArray);

// Convert arrays to strings

// join
const array = ["Hello", "JavaScript", "World!"];
const arrayToString = array.join(" ");
console.log("Array to String:", arrayToString);
