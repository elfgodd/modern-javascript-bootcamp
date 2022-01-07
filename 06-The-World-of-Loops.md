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
