### OTHER USEFUL THINGS

A JS Assortment

### NEW-ISH FEATURES

New JS features like:

- Arrow Functions
- String Template Literals
- Let & Const
- For...of
- For...in
- Exponent Operator
- String.includes()
- Array.includes()
- Object.values()
- Rest & Spread
- Destructuring
- Default
- Object Enhancements
- Classes
- Async Functions

### DEFAULT PARAMS

DEFAULT PARAMS MOST BE PLACED AT THE END OF THE PARAMS
AT THE BEGINNING THEY WON'T WORK

The Old Way

function multiply(a, b) {
b = typeof b !== 'undefined' ? b : 1;
return a x b;
}
multiply(7); // 7
multiply(7, 3); // 21

The New Way
function multiply2(a, b = 1) {
return a x b;
}
multiply2(4); // 4
multiply2(4, 5); // 20

### SPREAD

Spread syntax allows an iterable such as an array to be expanded
in places where zero or more arguments (for function calls)
or elements (for array literals) are expected, or an object
expression to be expanded in places where zero or more key-value
pairs (for object literals) are expected

### SPREAD For Function Calls

const num = [9, 3, 2, 8];
Math.max(nums); // NaN
// Use spread!
Math.max(...nums); // 67
// Same as calling:
// Math.max(9, 3, 2, 8)

Expands an iterable (array, string, etc.)
into a list of arguments

### SPREAD In Array Literals

Create a new array using an existing array
Spreads the elements from on array into a new array

const nums1 = [1, 2, 3];
const nums2 = [4, 5, 6];

[ ...nums1 ...nums2 ];
// [1, 2, 3, 4, 5, 6]

[ 'a', 'b', ...nums2 ];
// ['a', 'b', 4, 5, 6]

[ ...nums1, ...num2, 7, 8, 9];
// [1, 2, 3, 4, 5, 6, 7, 8, 9]

### SPREAD In Object Literals

Copies properties from one object into
another object literal

const feline = { legs: 4, family: 'Felidae' };
const canine = { family: 'Caninae', furry: true };

const dog = { ...canine, isPet: true };
// { family: "Caninae", furry: true, isPet: true }

const lion = { ...feline, genus: 'Panthera' };
// { legs: 4, family: 'Felidae', genus: 'Panthera' }

const catDog = { ...feline, ...canine };
// { legs: 4, family: 'Caninae', furry: true }

### REST

It looks like spread, bt it's not!

### THE ARGUMENTS OBJECT

Available inside every function
It's an array-like object

- Has a length property
- Does not have array methods like push/pop
  Contains all the arguments passed to the function
  Not available inside of arrow functions!

function sumAll() {
let total = 0;
for (let i = 0; i < arguments.length; i++) {
total += arguments[i];
}
return total;
}
sumAll(8, 4, 3, 2); // 17
sumAll(2, 3); // 5

### REST PARAMS

Collects all remaining arguments into an actual array

function sumAll(...nums) {
let total = 0;
for (let n of nums) total += n;
return total;
}
sumAll(1, 2); // 3
sumAll(1, 2, 3, 4, 5); // 15
