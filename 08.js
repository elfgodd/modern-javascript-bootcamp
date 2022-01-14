function lol() {
  let person = 'Tom';
  const age = 45;
  var color = 'teal';
  console.log(age);
}

lol();
// console.log(person); // is not defined
// console.log(age); // is not defined
// console.log(color); // is not defined

console.log("\n")
// i have multiple functions with same variables names
function changeColor() {
  color = 'purple';
  age = 29;
  console.log(age)
}
changeColor();

console.log("\n")
// i can have 2 variables with the same name
// because they are in different scope
let bird = 'mandarin duck';
function birdWatch() {
  let bird = 'golden pheasant';
  console.log(bird)
}

birdWatch(); // 'golden pheasant'
console.log(bird); // 'mandarin duck'

console.log("\n")
if(true) {
  let animal = 'eel';
  console.log(animal);
}
// console.log(animal); // is not defined

console.log("\n")
if(true) {
  var animal = 'eel';
  console.log(animal);
}
console.log("It works with var: ", animal); // is not defined

console.log("\n")
let animals = ['grizzly bear', 'panda bear', 'spectacled bear']
for(var i = 0; i < animals.length; i++) {
  console.log(i, animals[i])
}
console.log(i); // 3, var error of 3 from the for loop

console.log("\n")
for(let i = 0; i < animals.length; i++) {
  console.log(i, animals[i])
}
// console.log(i); // is not defined

console.log("\n");
// [1,2,5] -> [2,6,10]
function doubleArr(arr) {
  const result = [];
  for (let num of arr) {
    let double = num * 2;
    result.push(double);
  }
  // i don't have access to double is out of scope
  // console.log(double); // is not defined
  return result;
}
console.log(doubleArr([1,2,3]));

console.log("\n")

console.log("\n");
function outer() {
  let movie = 'Amadeus';

  function inner() {
    console.log(movie.toUpperCase());
  }
}
outer(); // doesn't returns nothing

console.log("\n");
function outer2() {
  let movie = 'Amadeus';

  function inner() {
    console.log(movie.toUpperCase());
  }
  inner();
}
console.log(outer2()); // AMADEUS
// inner();  // inner is not defined

console.log("\n");
function outer3() {
  let movie = 'Amadeus';

  function inner() {
    let movie = 'The Shining'
    console.log(movie.toUpperCase());
  }
  inner();
}
console.log(outer3()); // "The Shining" , prints the nearest variable in scope

console.log("\n");
function outer4() {
  let movie = 'Amadeus';

  function inner() {
    // let movie = 'The Shining'

    function extraInner() {
    console.log(movie.toUpperCase());
    }
    extraInner();
  }
  inner();
}
console.log(outer4());

console.log("\n");
// this on it's own is not valid, we can't call it, it has no name
// function(x, y) {
//   return x + y
// } 
const sum = function (x, y) {
  return x + y;
}
console.log(sum(1, 99));

console.log("\n");
// i can add a name to the function
const product = function multiply(x, y) {
  return x * y;  
}
console.log(product(3, 5));
// console.log(multiply(3, 5)); // is not defined

console.log("\n");
function add2(x, y) {
  return x + y;
}

const subtract2 = function (x, y) {
  return x - y;
}

function multiply2(x, y) {
  return x * y;
}

const divide2 = function (x, y) {
  return x / y;
}

const operations = [add2, subtract2, multiply2, divide2 ];
console.log(operations[0]);
console.log(operations[1]);
console.log(operations[2]);
console.log(operations[3]);
console.log("\n");

console.log(operations[0](100, 4)); // 104
console.log(operations[1](100, 4)); // 96
console.log(operations[2](100, 4)); // 400
console.log(operations[3](100, 4)); // 25

console.log("\n");
for (let func of operations) {
  let result = func(30,5);
  console.log(result);
}

console.log("\n");
const thing = {
  doSomething: multiply2
}
console.log(thing.doSomething(50,2)); // 100




console.log("\n");
console.log("\n");
console.log("\n");
console.log("\n");
console.log("\n");
console.log("\n");
console.log("\n");
console.log("\n");
console.log("\n");
console.log("\n");
console.log("\n");
console.log("\n");
console.log("\n");
console.log("\n");
console.log("\n");
console.log("\n");

