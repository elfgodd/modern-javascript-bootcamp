## JS BUILDING BLOCKS

### VALUES & VARIABLES

GOALS

- Work with primitive types
- Understand let & const
- Use String Template Literals
- Work with common operators / methods

### PRIMITIVE TYPES

- String
- Numbers
- Boolean
- Null
- Undefined

* Technically there are two others: Symbol and BigInt

### NUMBERS IN JS

50, 7, 3.874, 0.99, -45, -777.23444

- Javascrit has ONE Number type
- Positive numbers!
- Negative numbers!
- Whole number (integers)!
- Decimal numbers!

### SIMPLE OPERATIONS

We have all the basic math operations you would expect...

// creates a comment, which JS will ignore

// Addition
50 + 5 // 55

// Subtraction
90 - 1 // 89

// Multiplication

11111 \* 7 // 77777

// Division
400 / 25 // 16

// Modulo
27 % 2 // 1

// Order expressions
3 - 9 x 2 // 3 - 18 = - 15
(3 - 9) x 2 // -6 \* 2 = - 12

### NaN NOT A NUMBER

NaN is a numeric value that represents something that is not... a number

0 / 0 // NaN
1 / NaN // NaN
1 / 0 // Infinity
-1 / 0 // -Infinity
-0 // -0

### VARIABLES

Variables are like "labeled jars" for a value in JavaScript.

We can store a value and give it a name, so that we can...

- recall it
- use it
- or change it later on

### BASIC SYNTAX

let someName = value;
let age = 72;

### RECALL VARIABLES

let hens = 4;
let roosters = 2;
hens + roosters // 6

### UPDATE VARIABLES

// A raccoon killed a hen
// This does not change the value stored in hens
hens - 1; // 3
hens; // Still 4!

// To actually change hens:
// This does!
hens = hens -1;
hens // 3
hens = 100
hens // 100

### RESERVED WORDS IN JS

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#reserved_keywords_as_of_ecmascript_2015

### Naming Convention

let numOfHens = 6;
let NumOfHens = 9;

### UNARY OPERATORS

let score = 0;
score = score + 10; // 10
score += 1; // 11
score += 10; // 21
score -= 11; // 10

let bonusMult = 5;
score x= bonusMult // 50

let counter = 0;
counter++;
counter // 1
counter--
counter // 0

### CONST

const works just like let, except you CANNOT change the value

const hens2 = 4;
hens2 = 20; // ERROR!
// NOT ALLOWED!
const age = 17;
age = age + 1; // ERROR!

### WHY USE CONST?

const pi = 3.14159;
const daysInWeek = 7;
const minHeightForRide = 60;
// Once we cover Arrays & Objects, we'll see other situations where const makes sense over let.

### VAR

var tripDistance = 7.4;

Before let & const, var was the only way of declaring variables. These days,
there isn't really a reason to use it, but you will see it a lot on older code.
