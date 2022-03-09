## Capture Collections of Data with Arrays

### ARRAYS & OBJECTS

Collections of Data

Work with Arrays  
Write object literals  
Understand reference types  
Use common Array/Object methods

### ARRAYS

Ordered colllections of values  
List of comments in IG post  
Collection of levels in a game  
Songs in a playlist

### CREATING ARRAYS

// To make an empty array  
let students = [];

// An array of numbers  
let lottoNums = [19, 22, 56, 12, 51];

// A mixed array  
let stuff = [true, 68, 'cat', null];

// An array of strings  
let colors = ['red', 'orange', 'yellow', 'green'];

### ARRAYS ARE INDEXED

colors.length // 4

colors[0] // 'red'  
colors[1] // 'orange'  
colors[2] // 'yellow'  
colors[3] // 'green'  
colors[4] // 'undefined'

### MODIFYING ARRAYS

colors[3] = 'black'  
colors[4] // undefined  
colors[4] = 'blue'

### ARRAYS METHODS

Push - add to end  
Pop - remove from end  
Shift - remove from start  
Unshift - add to start

You might mix up shift and unshift for a while

### MORE METHODS!

concat - merge arrays  
includes - merge arrays  
indexOf - just like str.indexOf  
join - creates a string from array  
reverse - reverses an array  
slice - copy portion of an array  
splice - remove/replace elements  
sort - sorts an array

### NOW

Work with Arrays  
Write Object Literals  
Understand Reference Types  
Use common Array/Object methods

### VALUES CAN CHANGE

As long as the reference remains the same  
const myEggs = ['brown', 'yellow'];  
myEggs.push('purple);  
['brown', 'yellow', 'purple']  
myEggs[0] = 'green';  
['green', 'brown', 'purple']

myEggs = ['blue', 'pink']; // NO! TypeError

### NESTED ARRAYS

We can store arrays inside others arrays!

const colors = [  
['red', 'crimson'],  
['orange', 'dark orange'],  
['yellow', 'golden rod'];  
['green', 'olive'];  
['blue', 'navy blue'];  
['purple', 'orchid'];  
]
