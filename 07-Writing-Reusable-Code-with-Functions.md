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
