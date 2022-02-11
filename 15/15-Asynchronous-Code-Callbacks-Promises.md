### ASYNC JS, PROMISES & REQUESTS

### CALL STACK

The mechanism the JS interpreter uses to keep track
of its place in a script that calls multiple functions

How JS "knows" what function is currently being run and
what functions are called from within that function, etc

### HOW IT WORKS

When a script calls a function, the interpreter adds it to
the call stack and then starts carrying out the function

Any functions that are called by that function are added
to the call stack further up, and run where their calls are
reached

When the current function is finished, the interpreter takes
it off the stack and resumes executing where it left off
in the last code listing.

const multiply = (x, y) => x \* y;

const square = (x) => multiply(x, x);

const isRightTriangle = (a, b, c) => {
return square(a) + square(b) === square(c)
}

isRightTriangle(3, 4, 5); // true

### JS IS SINGLE THREADED

### WHAT DOEST THAT MEAN?

At any given point in time, that single JS thread is running
at most one line of JS code
