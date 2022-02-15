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

### What happens

when something takes a long time?
const newTodo = input.value; // get user input
saveToDatabase(newTodo); // this could take a while!
input.value = ''; // reset form

### Fortunately...

We have a workaround

console.log('I print first!');
setTimeout(() => {
console.log('I print after 3 seconds');
}, 3000);
console.log('I print second!');

CALLBACKS???!

### OK BUT HOW?

Browsers come with a Web APIs that are able to handle
certain tasks in the background (like making requests
or setTimeout)

The JS call stack recognizes these Web API functions and
passes them off to the browser to take care of

Once the browser finishes those tasks, they return and are
pushed onto the stack as a callback

### Callback Hell

fs.readdir(source, function(err, files) {
if (err) {
console.log('Error finding files: ' + err)
} else {
files.forEach(function (filename, fileIndex) {
console.log(filename)
gm(source + filename).size(function (err, values) {
if (err) {
console.log('Error identifying files size: ' + err)
} else {  
 console.log(file + ' : ' + values)
aspect = (values.width / values.height)
widths.forEach(function (width, widthIndex) {
height = Math.round(width / aspect)
console.log('resizing ' + filename + 'to ' + height + 'x' + height)
this.resize(width, height).write(dest + 'w' + width + '\_' + filename,
function(err) {
if (err) console.log('Error writing file: ' + err)
})
}.bind(this))
}
})
})
}
})

### ENTER PROMISES

A Promise is an object representing the eventual completion
or failure of an asynchronous operation

### PROMISES

A pattern for writing async code
