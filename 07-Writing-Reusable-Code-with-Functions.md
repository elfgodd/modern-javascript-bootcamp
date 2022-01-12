### FUNCTIONS

Reusable procedures

- Functions allow us to write reusable, modular code
- We define a "chunk" of code that we can then execute
  at a later point
- We use them ALL THE TIME

### 2 STEP PROCESS

DEFINE step 1
RUN step 2

"hello".toUpperCase() // HELLO, built in method or built in function

### DEFINE

function funcName() {
// do something
}

function grumpus() {
console.log('leave me alone...');
}

### ARGUMENTS

Inputs to a Function

### INPUTS

Right now, our simple functions accept zero inputs
They behave the same way every time

### ARGUMENTS

We can also write functions that accept inputs,
called arguments

greet('Tim) -> "Hi Tim!"
avg(20, 25) -> 22.5

// No inputs
"hello".toUpperCase();

// Arguments!
// Different inputs...
"hello".indexOf('h') // 0
// Different outputs...
"hello".indexOf('o'); // 4

### GREET TAKE 2

function greet(person) {
console.log(`Hi, ${person}!`);
}
greet('Arya'); // "Hi, Arya!"
greet('Ned'); // "Hi, Ned!"

### return

Built-in methods return values when we call them
We can store those values:

const yell = "I will end you".toUpperCase();
yell; // "I WILL END YOU"

const idx = ['a', 'b', 'c'].indexOf('c');
idx; // 2

### NO RETURN!

Our functions print values out,
but do NOT return anything

function add(x, y) {
console.log(x + y);;
}

const sum = add(10, 16);
sum; // undefined

### FIRST RETURN!

Now we can capture a return value in a variable!

function add(x, y) {
return x + y; // RETURN!
}

const sum = add(10, 16);
sum; // 26

const answer = add(100, 200);
answer; // 300

### RETURN

The return statement ends function execeution AND
specifies the value to a be returned by that function
