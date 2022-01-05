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