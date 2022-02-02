/* Shorthand Object Properties */

const getStats = (arr) => {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const sum = arr.reduce((sum, r) => sum + r);
  const avg = sum / arr.length;
  return {
    max: max,
    min: min,
    sum: sum,
    avg: avg
  }
}
const reviews = [4.5, 5.0, 3.44, 2.8, 3.5, 4.0, 3.5];
console.log("reviews: ", reviews);

console.log("\n");
const stats = getStats(reviews);
console.log("stats: ", stats);

console.log("\n");
// new short syntax
const getStats2 = (arr) => {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const sum = arr.reduce((sum, r) => sum + r);
  const avg = sum / arr.length;
  return { max, min, sum, avg}
}

console.log("getStats2: ", getStats2(reviews));

/* Computed Properties */

console.log("\n");
const role = 'host';
const person = 'Jools Holland';
const role2 = 'Director';
const person2 = 'James Cameron';

const team = {
  role: person
}
// team: { role: 'Jools Holland' }
console.log("team: ", team);

const team2 = {};
// team2: {host: 'Jools Holland'}
team2[role] = person;
console.log("team2: ", team2);
team2[role2] = person2;
console.log("team2: ", team2);
team2.role = person;
console.log("team2: ", team2);

console.log("\n");
const teamComputed = {
  [role]: person,
  [role2]: person2,
  [1+6+9]: 'sixteen',
}
console.log("teamComputed: ", teamComputed);

console.log("\n");
function addProp(obj, k, v) {
  const copy = {...obj};
  copy[k] = v;
  return copy;
}
const res = addProp(teamComputed, 'happy', ':)');
console.log("addProp res: ", res);

console.log("\n");
const addPropComputed = (obj, key, value) => {
  return {
    ...obj,
    [key]: value
  }
}
const resComputed = addPropComputed(teamComputed, 'sad', 'sadEmoji:(');
console.log("resComputed", resComputed);

console.log("\n");

/* Adding Methods to Objects */
const add = function(x , y) {
  return x + y;
}

const math = {
  add
}
console.log("math: ", math);
console.log("math.add: ", math.add);
console.log("math.add(2, 5): ", math.add(2, 5));

console.log("\n");
const math2 = {
  numbers2: [1, 2, 3, 4, 5],

  add2: function(x, y) {
    return x + y;
  },
  multiply2: function(x, y) {
    return x * y;
  }
}
console.log("math2.add2: ", math2.add2(2, 5));
console.log("math2.multiply2: ", math2.multiply2(2, 5));
console.log("math2.mumbers2: ", math2.numbers2);
console.log("math2: ", math2);

/* Method Shorthand Syntax */
console.log("\n");
const auth = {
  username: 'TommyBot',
  login() {
    console.log("LOGGED YOU IN!");
  },
  logout() {
    console.log("GOODBYE");
  }
}
console.log("auth: ", auth);

console.log("\n");
/* Using THIS in Methods */
// THIS inside a regular function putted in an object
// THIS refers to the WINDOW OBJECT in the browser
function sayHi() {
  console.log("HI");;
  console.log(this);
}
sayHi();

console.log("\n");
// THIS inside of a Method
// Is a way of accessing the Parent Object, where the method is located
const personThis = {
  first: 'Cherilyn',
  last: 'Sarkisian',
  nickName: 'Cher',
  fullName() {
    console.log(this);
    console.log(`${this.first} ${this.last} AKA ${this.nickName}`);
  }
}
console.log("personThis: ", personThis);
personThis.fullName();

console.log("\n");
// Destructuring properties props from 'this'
const personThisDes = {
  first: 'Cherilyn',
  last: 'Sarkisian',
  nickName: 'Cher',
  fullName() {
    const {first, last, nickName} = this;
    console.log(`${first} ${last} AKA ${nickName}`);
  }
}
personThisDes.fullName();
// Changing personThis nickName
personThis.nickName = 'CHERRRRRR';
console.log("personThis.nickName NEW: ", personThis.nickName);
personThis.fullName();

console.log("\n");
const persona1 = {
  first: 'John',
  last: 'Jones',
  nickName: 'daBeast',
  fullName() {
    const {first, last, nickName} = this;
    return `${first} ${last} AKA ${nickName}`;
  },
  printBio() {
    console.log(this);
    const fullName = this.fullName();
    console.log(`${fullName} is a person!`);
  },
  laugh: () => {
    console.log(this);
    console.log(`${this.nickName} says HAHAHAHA`);;
  }
}
persona1.printBio();
persona1.laugh();

console.log("\n");
/* THIS Invocation Context */

// pointing variable printBio to the function
// Error: this.fullName is not a func
// Error: is referencing the window object
// const printBio = person.printBio;
// console.log(printBio());

console.log("\n");
/* Annoyomatic Demo */
const annoyer = {
  phrases: ["literally", "cray cray", "I can't even",
  "Totes!", "YOLO", "Can't Stop, Won't Stop"],
  
  pickPhrase() {
    const { phrases }  = this;
    const idx = Math.floor(Math.random() * phrases.length);
    return phrases[idx]
  },
  start() {
    // // THIS here is set to the Object
    // setInterval(function() {
    //   // THIS here is set to the Window
    //   // Error this.pickPhrase is not a function
    //   // console.log(this.pickPhrase());
    // }, 3000)
    this.timerId = setInterval(() => {
      console.log(this.pickPhrase());
    }, 3000)
   },
   // Run this to stop the setInterval
   stop() {
     clearInterval(this.timerId);
     console.log("PHEW THANK HEAVENS THAT IS OVER!");
   }
 }
console.log("Annoyer.pickPhrase(): ", annoyer.pickPhrase());

// annoyer.start();
// annoyer.stop();
 // setInterval is in the Window Object
 // setInterval(func, 3000)

console.log("\n");
/* Putting It All Together Deck Of Cards */
function makeDeck() {
  const deck = [];
  const suits = ['hearts', 'diamonds', 'spades', 'clubs'];
  const values = '2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A';
  for (let value of values.split(',')) {
    for (let suit of suits) {
      // Shorthand
      deck.push({ value, suit })
      // deck.push({value: value, suit: suit})
    }
  }
  return deck;
}
console.log(makeDeck());

function drawCard(deck) {
  return deck.pop();
}

const myDeck = makeDeck();
const card1 = drawCard(myDeck);
const card2 = drawCard(myDeck);
console.log("card1: ", card1);
console.log("card2: ", card2);
console.log("makeDeck: ", makeDeck());
console.log("myDeck: ", myDeck);

console.log("\n");
const myDeck2 = {
  deck2: [],
  drawnCards: [],
  suits: ['hearts', 'diamonds', 'spades', 'clubs'],
  values: '2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A',
  initializeDeck() {
    const { suits, values, deck2 } = this;
    for (let value of values.split(',')) {
      for (let suit of suits) {      
        deck2.push({ value, suit });      
      }
    }
  // return deck2;
  },
  drawCard() {
    const card = this.deck2.pop();
    this.drawnCards.push(card);
    return card;
  },
  drawMultiple(numCards) {
    const cards = [];
    for(let i = 0; i < numCards; i++) {
      cards.push(this.drawCard());
    }
    return cards;
  },
  shuffle() {
    const { deck2 } = this;
    // loop over array backwards
    for (let i = deck2.length - 1; i > 0; i--) {
      // Pick random index before current element
      let j = Math.floor(Math.random() * (i + 1));
      // swap
      [ deck2[i], deck2[j] ]  = [ deck2[j], deck2[i] ];
  }
}
}
console.log("myDeck2: ", myDeck2);
// This initializes the function inside myDeck2
console.log("myDeck2.initializeDeck: ", myDeck2.initializeDeck());
console.log("myDeck2.deck2", myDeck2.deck2);
const myDeck2Card1 = myDeck2.drawCard();
const myDeck2Card2 = myDeck2.drawCard();
const myDeck2Card3 = myDeck2.drawCard();
console.log("myDeck2Card1: ", myDeck2Card1);
console.log("myDeck2Card2: ", myDeck2Card2);
console.log("myDeck2Card3: ", myDeck2Card3);
console.log("myDeck2: ", myDeck2);
console.log("myDeck2.drawnCards: ", myDeck2.drawnCards);
const myDeckMultiple1 = myDeck2.drawMultiple(8);
console.log("myDeckMultiple1: ", myDeckMultiple1);

console.log("\n");
console.log("myDeck2: ", myDeck2);
console.log("myDeck2.shuffle: ", myDeck2.shuffle());
console.log("myDeck2: ", myDeck2);
console.log("myDeck2.deck2: ", myDeck2.deck2);

// function shuffle(arr) {
//   // loop over array backwards
//   for (let i = arr.length - 1; i > 0; i--) {
//     // Pick random index before current element
//     let j = Math.floor(Math.random() * (i + 1));
//     //
//     [ arr[i], arr[j] ]  = [ arr[j], arr[i] ];
//     console.log(arr);
//   }
// }
// console.log("shuffle: ", shuffle(['a', 'b', 'c', 'd', 'e', 'f']));

console.log("\n");
console.log("\n");
function initializeDeckX() {
  const deck = [];
  const suits = ['hearts', 'diamonds', 'spades', 'clubs'];
  const values = '2,3,4,5,6,7,8,9,10,J,Q,K,A';
  for (let value of values.split(',')) {
    for (let suit of suits) {
      deck.push({value, suit});
    }
  }
  return deck;
}

function drawCardX(deck, drawnCards) {
  const card = deck.pop();
  drawnCards.push(card);
  return card;
}

function drawMultipleX(numCards, deck, drawnCards) {
  const cards = [];
  for (let i = 0; i < numCards; i++) {
    cards.push(drawCardX(deck, drawnCards))
  }
  return cards;
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {    
    let j = Math.floor(Math.random() * (i + 1));
    [ arr[i], arr[j] ]  = [ arr[j], arr[i] ];
  }
}

const firstDeck = initializeDeckX();
const drawnCards = [];
shuffle(firstDeck);
const hand1 = drawMultipleX(2, firstDeck, drawnCards);
const hand2 = drawMultipleX(2, firstDeck, drawnCards);
const pokerHand = drawMultipleX(5, firstDeck, drawnCards);

console.log('firstDeck: ', firstDeck);
console.log('hand1: ', hand1);
console.log('hand2: ', hand2);
console.log("drawnCards: ", drawnCards);

console.log("\n");
// Doing same thing with the Object version
// myDeck2.initializeDeck();
// myDeck2.shuffle();
const h1 = myDeck2.drawMultiple(2);
const h2 = myDeck2.drawMultiple(2);
const h3 = myDeck2.drawMultiple(5);
console.log("h1: ", h1);
console.log("h2: ", h2);
console.log("h3: ", h3);

console.log("\n");
console.log("\n");
console.log("\n");
console.log("\n");
console.log("\n");