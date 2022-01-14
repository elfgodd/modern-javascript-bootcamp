### FUNCTIONS IN DETAIL

Important things you should know about functions

### GOALS

Understand Scope
Write Higher Order Functions
Pass functions as callbacks

### SCOPE

Variable "visibility"

- The location where a variable is defined dictates
  where we have access to that variable

### FUNCTION SCOPE

function helpMe() {
let msg = "I'm on fire!";

msg; // "I'm on fire";
// msg is scoped to the helpMe function
}
msg; // NOT DEFINED!

### BLOCK SCOPE

let radious = 8;
if(radius > 0) {
const PI = 3.14;
let circ = 2 x PI x radius;
}
// PI & circ are scoped to the BLOCK
console.log(radius); // 8
console.log(PI); // NOT DEFINED
console.log(circ); // NOT DEFINED

### LEXICAL SCOPE

function outer() {
let hero = "Black Panther";

function inner() {
let cryForHelp = `${hero}, please save me!`
console.log(cryForHelp);
}

inner();
}

### FUNCTION EXPRESSIONS

There's another syntax we can use to define functions:

const square = function (num) {
return num x num;
}
square(7); // 49

### FUNCTIONS ARE... OBJECTS!

### HIGH ORDER FUNCTIONS
