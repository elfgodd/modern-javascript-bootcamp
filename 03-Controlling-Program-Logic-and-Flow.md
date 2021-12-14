## How to Model Data Efficiently

### BOOLEAN LOGIC

Understand comparasion operators
Write conditionals
Work with boolean operators

SOME EXAMPLES

// > greater than
// < less than
// >= greater than or equal to
// <= less than or equal to
// == equality
// != not equal
// === strict equality
// !== strict non-equality

-2 > 1 // false
10 < 999 // true
2 >= 2 // true
2 >= 5 // false
2 >= 1 // true
55.1 <= 55.5 // true

Notice these all return a Boolean!
Though it's uncommon, you can compare strings. Just be careful, things
get dicey when dealing with case, special characters, and accents!

"hello".length >= "hello".length // false
10 > 1; // true
0.2 > 0.3 // false
-10 < 0; // true
50.5 < 5; // false
0.5 <= 0.5; // true
99 >= 4; // true
99 >= 99; // true
'a' < 'b'; // true
'A' > 'a'; // false
'#' < '$' // true

### == (double equals)

Checks for equality of value, but not equality of type
It coerces both values to the same type and then compares them
This can lead to some unexpected results!

5 == 5; // true
'b' == 'c'; // false
7 == '7'; // true
0 == ''; // true
true == false; // false
0 == false; // true
null == undefined; // true
4 == 4; // true
'a' == 'a'; // true
false == false; // true
0 == false; // true

### === (triple equals)

Checks for equality of value AND type
5 === 5; // true
1 === 2; // false
2 === '2'; // false
false === 0; // false
null === undefined; // false
null == null; // true

// Same applies for != and !==
10 != '10'; // false
10 !== '10'; // true

### console.log()

prints arguments to the console
(we need this if we're going to start working with files!)

### CONDITIONALS

Making decisions with code

### IF

Run code if a given condition is true

let rating = 3;

if (rating === 3) {
console.log("YOU ARE A SUPERSTAR!");
}

### ELSE IF

if not the first thing, maybe this other thing?

let rating = 2;

if(rating === 3) {
console.log("YOU ARE A SUPERSTAR!");
}
else if (rating === 2) {
console.log("MEETS EXPECTATIONS");
}
else if (rating === 1) {
console.log("NEEDS IMPROVEMENT");
}

### ELSE

"If nothing else was true, do this.."

let rating = -99

if(rating === 3) {
console.log("YOU ARE A SUPERSTAR!");
}
else if (rating === 2) {
console.log("MEETS EXPECTATIONS");
}
else if (rating === 1) {
console.log("NEEDS IMPROVEMENT");
}
else {
console.log("INVALID RATING!");
}
