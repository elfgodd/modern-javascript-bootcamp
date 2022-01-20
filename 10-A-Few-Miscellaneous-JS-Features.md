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
