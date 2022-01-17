### ARRAY CALLBACK METHODS

- Arrays come with many built-in methods that accept call back functions
- Now that we've covered callbacks, we can learn these methods!

### GOALS

- Use the new arrow function syntax
- UNderstand and use these methods:

forEach, map, find, reduce, some, every

### FOREACH

Accepts a callback function
Calls the function once per element in the array

const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];

nums.forEach(function (n)) {
console.log(n \* n)
// prints: 81, 64, 49, 36, 25, 16, 9, 4, 1
});

nums.forEach(function (el)) {
if (el % 2 === 0) {
console.log(el)
// prints: 8, 6, 4, 6
}
});

### MAP

Creates a new array with the results of calling a
call back on every element in the array

const texts = ['rofl', 'lol, 'omg', 'ttyl'];
const caps = texts.map(function (t) {
return t.toUpperCase();
})
texts; // ["rofl", "lol", "omg", "ttyl"]
caps; // ["ROFL", "LOL", "OMG", "TTYL"]

### ARROW FUNCTIONS

"Syntactically compact alternative" to a regular function expression

const square = (x) => {
return y x y;
}

const sum = (x, y) => {
return x + y
}

### IMPLICIT RETURN

All these functions do the same thing:
const isEven = function (num) {
// regular function expression
return num % 2 === 0;
}
const isEven = (num) => {
// arrow function with parens around param
return num % 2 === 0;
}
const isEven = num => {
// no parens around param
return num % 2 === 0;
}
const isEven = num => {
// implicit return
num % 2 === 0;
}
// one-liner implicit return
const isEven = num => num % 2 ===0;

### FIND

Returns the value of the first element in the array
that satisfies the provided testing function

let movies = [
"The Fantastic Mr. Fox",
"Mr. and Mrs. Smith",
"Mrs. Doubtfire",
"Mr. Deeds"
]

let movie = movies.find(movie => {
return movie.includes('Mrs.')
}) // "Mr. and Mrs. Smith"

let movies2 = movies.find(m => m.indexOf('Mrs') === 0);
// "Mrs. Doubtfire"

### FILTER

Creates a new array with all elements that pass the
test implemented by the provided function

const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];
const odds = nums.filter(n => {
return n % 2 === 1;
// our callback returns true or false
// if it returns true, n is added to the filtered array
})
// [9, 7, 5, 3, 1]

const smallNums = nums.filter(n => n < 5);
// [4, 3, 2, 1]
