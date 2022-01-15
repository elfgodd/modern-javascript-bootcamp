const numbers = [20, 21, 22, 23, 24, 25, 26, 27];

numbers.forEach(function (element) {
  console.log(element);
})

console.log('\n');
numbers.forEach(function (element) {
  console.log(element * 2);
})

console.log('\n');
function printTriple(num) {
  console.log(num * 3);
}

numbers.forEach(printTriple);

console.log('\n');

const books = [{
  title: 'Good Omens',
  authors: ['Terry Pratchett', 'Neil Gaiman'],
  rating: 4.25
},
{
  title: 'Bone: The Complete Edition',
  authors: ['Jeff Smith'],
  rating: 4.42
},
{
  title: 'American Gods',
  authors: ['Neil Gaiman'],
  rating: 4.11
},
{
  title: 'A Gentleman in Moscow',
  authors: ['Amor Towles'],
  rating: 4.36
}
]

books.forEach(function (book) {
  console.log(book.title.toUpperCase());
})

console.log('\n');
for(let book of books) {
  console.log(book.title.toUpperCase());
}

console.log('\n');
for (let i = 0; i < books.length; i++) {
  console.log(books[i].title.toUpperCase());
}

console.log('\n');
// printing the Index of numbers
numbers.forEach(function(num, index) {
  console.log(index, num);
})

console.log('\n');

const words =['asap', 'byob', 'rsvp', 'diy'];

const doubles = numbers.map(function(num) {
  return num * 2;
})
console.log(doubles);

console.log('\n');
const numDetail = numbers.map(function (n) {
  return {
    value: n,
    isEven: n % 2 === 0
  }
})
console.log(numDetail);

// numbers = [20, 21, 22, 23, 24, 25, 26, 27];
console.log('\n');
const doubles2 = [];
for(let num of numbers) {
  doubles2.push(num * 2);
}
console.log(doubles2);

console.log('\n');
const abbrevs = words.map(function(word) {
  return word.toUpperCase().split('').join('.');
})
console.log(abbrevs);

console.log('\n');
const titles = books.map(function(b) {
  return b.title;
})
console.log(titles);


console.log('\n');
console.log('\n');
console.log('\n');
console.log('\n');
console.log('\n');
console.log('\n');
console.log('\n');
console.log('\n');
console.log('\n');
