function grumpus() {
  console.log('ugh...you again...');
  console.log('FOR THE LAST TIME...');
  console.log('LEAVE ME ALONE!!!');
}
grumpus();

console.log('\n');
for (let i = 0; i < 3; i++) {
  grumpus();
}

console.log('\n');
function rollDie() {
  let roll = Math.floor(Math.random() * 6) + 1;
  console.log(`Rolled: ${roll}`);
}
rollDie();

console.log('\n');
function throwDice() {
  rollDie();
  rollDie();
  rollDie();
}
throwDice();

function greet() {
  console.log('Hi');
  // No arguments inputs
}
greet();

console.log('\n');
function greet2(nickname) {
  console.log(nickname);
  console.log(`Hi, ${nickname}!`);
}
greet2('tim');
greet2({})
greet2([])
greet2(); // undefined

console.log('\n');
function throwDice2(numRolls) {
  for (i = 0; i < numRolls; i++) {
    rollDie();
  }
}
throwDice2(3);

console.log('\n');
// the value we pass in, is an argument
// argument when we call it
// num is a parameter
// parameter when we define it
function square(num) {
  console.log(num * num);
}

function sum(x, y) {
  console.log(x + y);
}
sum(4, 5); // 9

console.log('\n');
function divide(a, b) {
  console.log(a / b);
}
divide(1, 4); // 0.25
divide(4, 1); // 4
divide(5); // divide(5, undefined) = NaN

console.log('\n');
function add(x, y) {
  return x + y;
}
const total = add(4, 5);
console.log(total);

console.log('\n');
function square2(x) {
  return x * x;
  // console.log('ALL DONE!'); // This code won't run
}
console.log(square2(4)); // 16

console.log('\n');
function isPurple(color) {
  if (color.toLowerCase() === 'purple') {
    return true;
    // console.log('YAY!'); this code won't run
  }
  else {
    return false;
  }
}
console.log(isPurple('blue'));
console.log(isPurple('purple'));

console.log('\n');
function isPurple2(color) {
  if (color.toLowerCase() === 'purple') {
    return true;
    // console.log('YAY!'); this code won't run
  }
  return false;
}
console.log(isPurple('black'));
console.log(isPurple('purple'));

console.log('\n');

function isPurple3(color) {
  return color.toLowerCase() === 'purple'
}
console.log(isPurple('green'));
console.log(isPurple('purple'));

console.log('\n');
console.log('containsPurple Function: ')

function containsPurple(arr) {
  for (let color of arr) {
    if (color === 'purple' || color === 'magenta') {
      return true;
    }    
  }
  return false;
}
let resultPurple1 = containsPurple(['blue', 'pink', 'magenta']);
console.log(resultPurple1);

let resultPurple2 = containsPurple('containsPurple:', ['blue', 'pink', 'green']);
console.log(resultPurple2);

console.log('\n');

/* Function Challenge 1 */
// Write a isValidPassword function
// It accepts 2 arguments: password and username
// Password must:
// - be at least 8 characters
// - cannot contain spaces
// - cannot contain username
// If all requirements are met, return true
// Otherwise: false
// isValidPassword('89Fjj1nms', 'dogLuvr'); // true
// isValidPassword('dogLuvr123!, 'dogLuvr'); // false
// isValidPassword('hello1', 'dogLuvr'); // false

function isValidPassword(password, username) {
  if(password.length < 8) {
    return false;
  }
  if(password.indexOf(' ') !== -1) {
    return false;
  }
  if(password.indexOf(username) !== -1) {
    return false;
  }
  return true;
}

console.log(isValidPassword('asfg2', 'asd')); // to short
console.log(isValidPassword('aasjasd askjd', 'asdasdasd')); // has space
console.log(isValidPassword('chicken1234', 'chicken')); // too similar
console.log(isValidPassword('chiken1234', 'chicken')); // true

console.log('\n');
function isValidPassword(password, username) {
  if(
    password.length < 8 ||
    password.indexOf(' ') !== -1 ||
    password.indexOf(username) !== -1
  ) {
    return false;
  }
  return true;
}
console.log(isValidPassword('asfg2', 'asd')); // to short
console.log(isValidPassword('aasjasd askjd', 'asdasdasd')); // has space
console.log(isValidPassword('chicken1234', 'chicken')); // too similar
console.log(isValidPassword('chiken1234', 'chicken')); // true

console.log('\n');
function isValidPassword(password, username) {
  const tooShort =  password.length < 8;
  const hasSpace = password.indexOf(' ') !== -1;
  const tooSimilar = password.indexOf(username) !== -1
  if(tooShort || hasSpace || tooSimilar) return false;
  return true;
}
console.log(isValidPassword('asfg2', 'asd')); // to short
console.log(isValidPassword('aasjasd askjd', 'asdasdasd')); // has space
console.log(isValidPassword('chicken1234', 'chicken')); // too similar
console.log(isValidPassword('chiken1234', 'chicken')); // true

console.log('\n');
function isValidPassword(password, username) {
  const tooShort =  password.length < 8;
  const hasSpace = password.indexOf(' ') !== -1;
  const tooSimilar = password.indexOf(username) !== -1
  if(!tooShort && !hasSpace && !tooSimilar) return true;
  return false;
}
console.log(isValidPassword('asfg2', 'asd')); // to short
console.log(isValidPassword('aasjasd askjd', 'asdasdasd')); // has space
console.log(isValidPassword('chicken1234', 'chicken')); // too similar
console.log(isValidPassword('chiken1234', 'chicken')); // true

console.log('\n');
function isValidPassword(password, username) {
  const tooShort =  password.length < 8;
  const hasSpace = password.indexOf(' ') !== -1;
  const tooSimilar = password.indexOf(username) !== -1
  return !tooShort && !hasSpace && !tooSimilar;
}
console.log(isValidPassword('asfg2', 'asd')); // to short
console.log(isValidPassword('aasjasd askjd', 'asdasdasd')); // has space
console.log(isValidPassword('chicken1234', 'chicken')); // too similar
console.log(isValidPassword('chiken1234', 'chicken')); // true

console.log('\n');
/* Function Challenge 2 */
// Write a function to find the average value in an array of numbers
// avg([0, 50]) // 25
// avg([75, 76, 80, 95, 10]) // 85.2

function avg(arr){
  let total = 0;
  // loop over each num
  for(let num of arr){
    // add them together
    total += num;
  }
  // divide by number of nums
  let res = total / arr.length;
  return res;
}
console.log(avg([0, 50])); // 25
console.log(avg([75,76,80,95,100])); // 85.2

console.log('\n');
/* Function Challenge 3 */
/* A pangram is a sentence that contains every letter
of the alphabet, like:
"The quick brown fox jumps over the lazy dog"

Write a function called isPangram, which checks to
see if a given sentence contains every letter of the
alphabet. Make sure you ignore string casing!

isPangram('The five boxing wizards jump quickly') // true
isPangram('The five boxing wizards jump quick') // false
*/

function isPangram(sentence){
  let lowerCased = sentence.toLowerCase();
  for(let char of 'abcdefghijklmnopqrstuvwxyz'){
    if(lowerCased.indexOf(char) === -1){
      return false;
    }
  }
  return true;
}
console.log(isPangram('The five boxing wizards jump quickly'));
console.log(isPangram('The five boxing wizards jump quick'));

console.log('\n');
function isPangram(sentence){
  let lowerCased = sentence.toLowerCase();
  for(let char of 'abcdefghijklmnopqrstuvwxyz'){
    if(!lowerCased.includes(char)){
      return false;
    }
  }
  return true;
}
console.log(isPangram('The five boxing wizards jump quickly'));
console.log(isPangram('The five boxing wizards jump quick'));

console.log('\n');
/* Write a getCard() function which returns a random
playing card object, like:
  {
    value: 'K',
    suit: 'Clubs  
  }
Pick a random value from:
----1,2,3,4,5,6,7,8,9,10,J,Q,K,A
Pick a random suit from:
----clubs,spades,hearts,diamonds
Return both in an object
*/

function getCard(){
  const values = [
    '1','2','3','4','5','6','7','8','9','10','J','Q','K','A'
  ];
  const valIdx = Math.floor(Math.random() * values.length);
  const value = values[valIdx];

  const suits = ['clubs', 'spades', 'hearts', 'diamonds'];
  const suitIdx = Math.floor(Math.random() * suits.length);
  const suit = suits[suitIdx];
  return { value: value, suit: suit };
}
console.log(getCard());
console.log(getCard());
console.log(getCard());
console.log(getCard());
console.log(getCard());

console.log('\n');

function pick(arr){
  // return random element from arr
  const idx = Math.floor(Math.random() * arr.length);
  return arr[idx];
}

function getCard(){
  const values = [
    '1','2','3','4','5','6','7','8','9','10','J','Q','K','A'
  ];
  const value = pick(values);
  const suits = ['clubs', 'spades', 'hearts', 'diamonds'];
  const suit = pick(suits);
  return { value: value, suit: suit };
}
console.log(getCard());
console.log(getCard());
console.log(getCard());
console.log(getCard());
console.log(getCard());

console.log('\n');
function getCard(){
  const values = [
    '1','2','3','4','5','6','7','8','9','10','J','Q','K','A'
  ];  
  const suits = ['clubs', 'spades', 'hearts', 'diamonds'];
  return { value: pick(values), suit: pick(suits) };
}
console.log(getCard());
console.log(getCard());
console.log(getCard());
console.log(getCard());
console.log(getCard());