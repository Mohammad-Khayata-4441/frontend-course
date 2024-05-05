// Date Object Examples

// Date constructor and methods
const currentDate = new Date();
console.log("Current Date:", currentDate);

const specificDate = new Date(2024, 4, 5, 10, 30, 0); // May 5th, 2024, 10:30:00
console.log("Specific Date:", specificDate);

console.log("Year:", specificDate.getFullYear());
console.log("Month (zero-based):", specificDate.getMonth());
console.log("Day of the Month:", specificDate.getDate());
console.log("Day of the Week:", specificDate.getDay()); // Sunday is 0, Monday is 1, ...

// toISOString and toLocaleString
console.log("ISO String:", specificDate.toISOString());
console.log("Locale String:", specificDate.toLocaleString());
