### METHODS & THIS

Objects Pt 2

### The Secret Life of OBJECTS

We've seen the basics of object literals, but there
is so much more to talk about with OBJECTS!

### GOALS

Add methods to objects
Use new object shorthand syntax
Use computed properties
Understand prototypes
Explain how the %$@# this works

### SHORTHAND PROPERTIES

const reviews = [4.5, 5.0, 3.44, 2.8, 3.5, 4.0, 3.5];
const max = Math.max(...reviews);
const min = Math.min(...reviews);
const sum = reviews.reduce((sum, r) => sum + r);
const avg = sum / reviews.length;

const stats = {min, max, sum, avg} // New!
stats; // { min: 2.8, max: 5, sum: 26.74, avg: 3.82 }

### COMPUTED PROPERTIES

Improvement for the Object Literals Syntax
We can add a property with a dynamic key

We can use a variable as a key name in an
object literal property!

const user = 'Jools';

const userRoles = {
[user]: 'Admin'
}
userRoles: // {Jools: "Admin"}

### METHODS

We can add functions as properties on objects

We call them methods!

CONST MATH = {
multiply: function(x, y) {
return X x Y;
},
divide : function (x, y) {
return x / y;
},
square : function(x) {
return X x X;
}
};

### SHORTHAND

We do this so often that there's a new
shorthand way of adding methods

const math = {
blah: 'Hi!',
add(x, y) {
return x + y;
},
multiply(x, y) {
return X x Y;
}
}
math.add(50, 60); // 110
