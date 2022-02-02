### OBJECTS

Objects are collections of properties
Properties are a key-value pair
Rather than accessing data using an index,
we use custom keys

### KEY-VALUE PAIRS

username: 'crazyCatLady'
upvotes: '7'
text: 'great post!'
age: 20
city: 'Tulsa'
zip: 91003
isAdmin: true

### AN OBJECT!

const fitBitData = {
totalSteps : 308727,
totalMiles : 211.7,
avgCalorieBurn : 5755,
workoutsThisWeek: '5 of 7',
avgGoodSleep : '2:13'
};

### ALL TYPES WELCOME!

let comment = {
username: 'sillyGoose420',
downVotes: 19,
upVotes: 214,
netScore: 195,
commentText: 'Tastes like chicken lol',
tags: ['#hilarious', '#funny', '#silly'],
isGilded: false
};

### VALID KEYS

All keys are converted to strings
Except for Symbols

### ACCESSING DATA

const palette = {
red: '#eb4d4b',
yellow: '#f9ca24',
blue: '#30336b'
}
palette.red // '#eb4d4b'
palette['blue'] // '#30336b'
let color = 'yellow';
palette.color // undefined property doesn't exist 'color'
palette[color] // '#f9ca24'

### UPDATING & ADDING PROPERTIES

// Updating properties:
fitBitData.workoutsThisWeek = '6 of 7';
fitBitData.totalMiles += 7.5;

// Adding a new property
fitBitData.heartStillBeating = true;

### ARRAYS + OBJECTS

const shoppingCart = [
{
product: 'Jenga Classic',
price: 6.88,
quantity: 1
},
{
product: 'Echo Dot',
price: 29.99,
quantity: 3
},
{
product: 'Fire Stick',
price: 39.99,
quantity: 2
}
]

const student = {
firstName: 'David',
lastName: 'Jones',
strengths: ['Music', 'Art'],
exams: {
midterm: 92,
final: 88
}
}

### Nested Arrays & Objects

const game = {
player1: {
username: 'Blue',
playingAs: 'X'
},
player2: {
username: 'Muffins',
playingAs: '0'
},
board : [ ['0', null, 'X'], ['X', '0', 'X'],
[null, '0', 'X'] ]
};

### Objects and Reference Types

Objects and Arrays are Reference types

### Array Object Equality

Arrays and Objects behave the same way when we checking for Equality
We are comparing Reference Types Addresses
