
// typeof value is "undefined" NOT undefined
// MANUAL CHECK
function multiply(x, y) {
  //  this won't work because we always gone get an string back from typeof
  if(typeof y === undefined)
  return x * y
}
console.log(multiply(4)); // undefined

console.log('\n');
function multiply2(x, y) {
  if (typeof y === 'undefined') {
    y = 1;
  }
  return x * y;
}
console.log(multiply2(4));
console.log(multiply2(4, 5));

console.log('\n');
function multiply3(x, y) {
  y = typeof y === 'undefined' ? 1 : y
  return x * y;
}
console.log(multiply3(4));
console.log(multiply3(4, 5));

console.log('\n');
function multiply4(a , b = 1) {
  return a * b;
}
console.log(multiply4(4));
console.log(multiply4(4, 5));

const greet = (person, greeting = 'hi') => {
  console.log(`${greeting}, ${person}!`);
  
}
console.log(greet('tim'));
console.log(greet('tim', 'YOO'));

console.log('\n');
const blah = (x, y = [1, 2, 3]) => {
  console.log(x, y);
}
console.log(blah(1));
console.log(blah(1, 3));

console.log('\n');
// passing 2 Default Parameters
const greet2 = (person, greeting = 'hi', punctuation = '!' ) => {
  console.log(`${greeting}, ${person}${punctuation}`);
}
console.log(greet2('anya'));
console.log(greet2('rose', '?'));


console.log('\n');
console.log('\n');
console.log('\n');
console.log('\n');
console.log('\n');
console.log('\n');
console.log('\n');
console.log('\n');
console.log('\n');
console.log('\n');
console.log('\n');
console.log('\n');
console.log('\n');
console.log('\n');
console.log('\n');
console.log('\n');
console.log('\n');

