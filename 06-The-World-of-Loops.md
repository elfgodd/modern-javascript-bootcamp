### JS LOOPS

### GOALS

Repeating code
Write for loops
Write while loops
Avoid infinite loops!
Iterate over arrays and objects

### LOOPS

Doing things repeatedly

- loops allow us to repeat code
  "Print 'hello' 10 times
  Sum all numbers in an array
- There are multiple types:
  for loop
  while loop
  for...of loop
  for...in loop

### FOR LOOPS

for (
[initialExpression]; // initial value
[condition]; // when to run the loop
[incrementExpression] // how to change value each time
)

### ANOTHER EXAMPLE

for (let i = 50; i >= 0; i -= 10) {
console.log(i); // 50, 40, 30, 20 ,10, 0
}
Start i at 50
Subtract 10 each iteration
Keep going as long as i>= 0

// Do not run this code!
for (let i = 20; i>= 0; i++) {
console.log(i);
} // BAD!

### FOR LOOPS + ARRAYS

To loop over an array, start at 0 and
continue to the last index (length-1)

const animals = ['lions', 'tigers', 'bears'];

for(let i =0; i < animals.length; i++) {
console.log(i, animals[i]);
}
// 0 'lions'
// 1 'tigers'
// 2 'bears'

### NESTED LOOPS

let str = 'LOL;
for (let i = 0; i <= 4; i++) {
console.log("Outer:", i);
for (let j = 0; j < str.length; j++) {
console.log(' Inner:', str[j]);
}
}

### WHILE LOOPS

A while loop continues to run as long
as its test condition is true

let num = 0;
while (num < 100) {
console.log(num);
num++;
} // 0 1 2 3 4

### FOR...OF

A nice and easy way of iterating over arrays
(or other iterable objects)

for (variable of iterable) {
statement
}

### For...Of with Objects

Object is not iterable
movieReviews[1], this returns undefined
for (let x of movieReviews) {
console.log(x)
}, // TypeError: is not iterable

### OBJECTS!

We can loop over the keys of
an object, using Object.keys()

const movieReviews = {
Amadeus: 10,
Arrival: 9.5,
Alien: 9,
Amelie : 8
};

for (let movie of Object.keys(movieReviews)) {
let score = movieReviews[movie];
console.log(`I rated $[movie` ${score}/10`);
}
I rated Amadeus 10/10
I rated Arrival 9.5/10
I rated Alien 9/10
I rated Amelie 8/10

### FOR...IN

Loop over the keys in an object
for (variable in object) {
statement
}
