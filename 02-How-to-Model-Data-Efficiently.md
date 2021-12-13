## How to Model Data Efficiently

### BOOLEANS

They are TRUE or FALSE

let isLoggedIn = True;
isLoggedIn = False;
let gameOver = False;
const isWaterWet = true;

Booleans are simple True or False values
Ye sor No
1 or 0

### VARIABLES CAN CHANGE TYPE

let numDonuts = 12; // It's a Number
numDonuts = false; // Now it's a Boolean!
numDOnuts = 129873872; // Back to a Number

You probably wouldn't change a number to a boolean, but you can!

### STRING

In JavaScript, Strings are pieces of text, or strings of characters.

We wrap them in quotes

let firstName = "Ziggy"; // Double quotes work
let lastName = 'Zagga' ; // Single quotes work
let msg = "Please do not feed the chimps!";
let animal = 'Dumbo Octopus; // So do single quotes
let bad = "this is wrong'; This DOES NOT work
let bad2 = "this is wrong; This DOES NOT work
let bad3 = "this is "wrong""; This DOES NOT work
let doubleQuotes = "he said, 'hahahaha'"
let singleQuotes = 'she said, "bye"'

Whether you use single or double quotes, just make sure you are consistent

firstName + lastName; // "ZiggyZagga"
firstName + " " + lastName; // "Ziggy Zagga"

### STRINGS ARE INDEXED

C H I C K E N
[0][1][2][3][4][5][6]
Each character has a corresponging index (a positional number)
"hello."length // 5 characters
"".length // 0
" ".length // 1

let mySong = "Surfing the USA"
mySong[0] // "S"
mySong[1] // "u"
mySong[11] // underfined, there is nothing there
mySong[200] // underfined, there is nothing there
mySong[14] // "A" last value of the string is [mySong.length - 1]

mySong[0] = "X" // We can't change strings this way

### STRING METHODS

Strings come with a set of built-in methods, which are actions that
can be performed on or with that particular string.

We can do thigs like...

- Searching within a string
- Replacing parts of a string
- Changing case (upper/lowecase)

### thing.method()

firstName.toUpperCase() // "ZIGGY"
firstName // "Ziggy"
let newFirstName = firstName.toUpperCase()
newFirstName // "ZIGGY"

firstName.toLowerCase() // "ziggy"

let greeting = ' leave me alone plz ';
greeting.trim() // "leave me alone plz" removes white spaces at the beginning and at the end

let color = " purple "
color.thim().toUpperCase() // "PURPLE"

### thing.method(arg)

Some methods accept arguments that modify their behavior
We pass these arguments inside of the parenthesses

let tvShow = 'catdog';

tvShow.indexOf('cat'); // 0
tvShow.indexOf('dog); // 3
tvShow.indexOf('z'); //-1 (not found)

### SLICE

let sport = "Baseball";
"baseball".slice(4) // ball, starts from index 4 all the way to the end
sport // "Baseball" remember strings are inmutable, it's not changing the value in the variable
sport.slice(100); // "" Empty string

"superhero".slice(0,5); // "super" starts at 0 index, ends at 4 index
"superhero".slice(5,9); // "hero"
'$50.60'.slice(1); // "50.60"

'baseball is entertaining'.replace('entertaining', 'ok') "baseball is ok";
'ha ha ha'.replace('ha', 'hee); // "hee ha ha" it only replaces the first one
'ha ha ha'.replace('haaaa', 'heee); // NO ERRORS! it won't find it, so it won't replace it

### STRING ESCAPES

\n - newLine
\' - single quote
\" - double quote
\\ - backslash

'he said i ain\'t happy' // 'he said i ain't happy'
"he said \"i aint happy\"" // "he said "i aint happy""
"hello \ngoodbye" // adds a new line after hello
"hello\\world" // "hello\world"

### STRING TEMPLATE LITERALS

Template literals are strings that allow embedded expresions,
which will be evaluated and then turned into a resulting string

`I counted ${3 + 4} sheep`; // "I counted 7 sheep"

This are BACK-TICKS not single quotes

`TEMPLATE LITERALS` // "TEMPLATE LITERALS"

`${1+5};` // 6

let animal = "pig";
let sound = "oink";
`${animal} says ${sound}.toUpperCase()`; // "pig says OINK"

let item = 'cucumbers';
let price = 1.99;
let quantity = 4;

`You bought ${quantity ${item}, total price: $${price * quantity}`;
// "You bought 4 cucumbers, total price: $7.96"

const minAge = 51;
let yourAge = 19;
`You must be {minAge} or older to enter. Come back in ${minAge - yourAge} years`
// "You must be 21 or older to enter. Come back in 2 years"

### NULL & UNDEFINED

null // null
undefined // undefined

Null
Intetional absense of any value
Must be assigned

// No one is logged in yet...
let loggedInUser = null; // value is explicitly nothing

// A ser logs in...
loggedInUser = 'John Doe';

Undefined
Variables that do not have an assigned value are undefined
let colorNow;
colorNow // undefined
colorNow = undefined
colorNow // undefined
"lol"[10] // undefined

### MATH OBJECT

Contains properties and methods for mathematical
constants and functions

Math.PI // 3.141592653589793
Math.round(4.6) // 5 Rounding number
Math.round(4.4) // 4 Rounding number
Math.abs(-456) // 456 Absolute value
Math.pow(5,5) // 32 Raises 2 to the 5th power
Math.floor(3.999) // 3 removes decimal

### RANDOM NUMBERS

Math.random() gives us a random decimal between 0 and 1 (non-inclusive)
Math.random(); // 0.14502435424141957
Math.random(); // 0.8937425043112937
Math.random(); // 0.9759952148727442

### RANDOM INTEGERS

Let's generate random numbers between 1 and 10
const step1 = Math.random(); // 0.5961104892810127
const step2 = step1 \* 10 // 5.961104892810127
const step3 = Math.floor(step2); // 5
const step4 = step3 + 1;

Math.floor(Math.random() \* 10) + 1;

### TYPE OF

typeof 'hello'; // "string"
typeof 2; // "number"
typeof true; // "boolean"
typeof undefined // "undefined"
typeof null // "object"

### parseInt & parseFloat

User to parse strings into numbers, but watch out for NaN!

parseInt('24') // 24
parseInt('24.987') // 24
parseInt('28dayslater') // 28
parseInt('$28') // NaN

parseFloat('24.987') // 24.987
parseFloat('7') // 7
parseFloat('i ate 3 shramp') // NaN
parseFloat('99cents') // 99
parseFloat('cents99') // NaN
