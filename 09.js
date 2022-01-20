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
for (let book of books) {
  console.log(book.title.toUpperCase());
}

console.log('\n');
for (let i = 0; i < books.length; i++) {
  console.log(books[i].title.toUpperCase());
}

console.log('\n');
// printing the Index of numbers
numbers.forEach(function (num, index) {
  console.log(index, num);
})

console.log('\n');

const words = ['asap', 'byob', 'rsvp', 'diy'];

const doubles = numbers.map(function (num) {
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
for (let num of numbers) {
  doubles2.push(num * 2);
}
console.log(doubles2);

console.log('\n');
const abbrevs = words.map(function (word) {
  return word.toUpperCase().split('').join('.');
})
console.log(abbrevs);

console.log('\n');
const titles = books.map(function (b) {
  return b.title;
})
console.log(titles);

console.log('\n');
const square = (x) => {
  return console.log(`Square of ${x} is: `, x * x);
}
square(2);
square(10);

console.log('\n');
// With 1 parameter we dont need the parenthesis
const isEven = num => {
  return console.log(`Num: ${num} isEven?: `, num % 2 === 0);
}
isEven(99);
isEven(100);

console.log('\n');
const multiply = (x, y) => {
  return console.log(`Multiplication ${x} * ${y} is: `, x * y);
}
multiply(4, 7);
multiply(100, 7);

console.log('\n');
const greet = () => {
  console.log("hi!");
}
greet();

console.log('\n');
const square2 = n => {
  console.log(`${n} * ${n}: `, n * n);
}

square2(6);

console.log('\n');
const squareImplicit = n => (
  console.log(`${n} * ${n}: `, n * n)
)

squareImplicit(11);

console.log('\n');
const squareImplicit2 = n => console.log(`${n} * ${n}`, n * n)
squareImplicit2(5);

console.log('\n');
const nums = [1, 2, 3, 4, 5, 6, 7, 8];
const doublesX1 = nums.map(function (n) {
  return console.log(`${n} * 2`, n * 2);
})

console.log('\n');
const doublesX2 = nums.map(n => {
  return console.log(`${n} * 2`, n * 2);
})

console.log('\n');
const doublesX3 = nums.map(n => console.log(`${n} * 2`, n * 2));

console.log('\n');
const parityList = nums.map(function (n) {
  if (n % 2 === 0) return console.log(`${n} is even!.`)
  return console.log(`${n} is odd`)
})

console.log('\n');
const parityListArrow = nums.map((n) => {
  if (n % 2 === 0) return console.log(`${n} is even!`);
  return console.log(`${n} is odd`)
})

console.log('\n');
const parityTernary = nums.map((n) => (
  n % 2 === 0 ?
  console.log('isEven') :
  console.log('odd')
))
console.log('\n');
const partityTernary1Line = nums.map(n => n % 2 === 0 ? console.log('isEven') : console.log('odd'))

console.log('\n');
let movies = [
  "The Fantastic Mr. Fox",
  "Mr. and Mrs. Smith",
  "Mrs. Doubtfire",
  "Mr. Deeds"
]
const movie = movies.find(movie => {
  return movie.includes('Mrs');
})

console.log(movie)
const movie2 = movies.find(m => (
  m.indexOf('Mrs') === 0
))
console.log(movie2);

console.log('\n');
const goodBook = books.find(b => (
  b.rating >= 4.3
))
console.log(goodBook);

const neilBook = books.find(b => (
  b.authors.includes('Neil Gaiman')
))
console.log(neilBook);

console.log('\n');
const nums2 = [34, 35, 67, 54, 109, 102, 32, 9]

const odds = nums2.filter(n => n % 2 === 1);
console.log(odds);
const evens = nums2.filter(n => n % 2 === 0);
console.log(evens);
const bigNums = nums2.filter(n => n > 50);
console.log(bigNums);

console.log('\n');
const bookz = [{
    title: 'Good Omens',
    authors: ['Terry Pratchett', 'Neil Gaiman'],
    rating: 4.25,
    genres: ['fiction', 'fantasy']
  },
  {
    title: 'Changing My Mind',
    authors: ['Zadie Smith'],
    rating: 3.83,
    genres: ['nonfiction', 'essays']
  },
  {
    title: 'Bone: The Complete Edition',
    authors: ['Jeff Smith'],
    rating: 4.42,
    genres: ['fiction', 'graphic novel', 'fantasy']
  },
  {
    title: 'American Gods',
    authors: ['Neil Gaiman'],
    rating: 4.11,
    genres: ['fiction', 'fantasy']
  },
  {
    title: 'A Gentleman in Moscow',
    authors: ['Amor Towles'],
    rating: 4.36,
    genres: ['fiction', 'historical fiction']
  },
  {
    title: 'The Name of the Wind',
    authors: ['Patrick Rothfuss'],
    rating: 4.54,
    genres: ['fiction', 'fantasy']
  },
  {
    title: 'The Overstory',
    authors: ['Richard Powers'],
    rating: 4.19,
    genres: ['fiction', 'short stories']
  },
  {
    title: 'A Truly Horrible Book',
    authors: ['Xavier Time'],
    rating: 2.18,
    genres: ['fiction', 'garbage']
  },
  {
    title: 'The Way of Kings',
    authors: ['Brandon Sanderson'],
    rating: 4.65,
    genres: ['fantasy', 'epic']
  },
  {
    title: 'Lord of the flies',
    authors: ['William Golding'],
    rating: 3.67,
    genres: ['fiction']
  }
]

const goodBookz = bookz.filter(b => b.rating > 4.3);
console.log(goodBookz);

console.log('\n');
const fantasyBooks = bookz.filter(book => (
  book.genres.includes('fantasy')
))
console.log(fantasyBooks);

console.log('\n');
const shortForm = bookz.filter(book => (
  book.genres.includes('short stories') ||
  book.genres.includes('essays')
))
console.log(shortForm);

console.log('\n');
const query = 'The';
const results = bookz.filter(book => {
  return book.title.toLowerCase()
  .includes(query.toLowerCase())
})
console.log(results);

console.log('\n');
const wordz = ['dog', 'dig', 'log', 'bag', 'wag'];
console.log("Array wordz: ", wordz);
console.log('\n');
// returns only Boolean true or false
// returns true if every single element is length === 3
const all3Letters = wordz.every(word => word.length === 3);
console.log("all3Letters: ", all3Letters);

console.log('\n');
const allEndInG = wordz.every(word => {
  const last = word.length-1;
  return word[last] === 'g';
})
console.log("allEndInG: ", allEndInG);

console.log('\n');
const someStartWithD = wordz.some(word => (
  word[0] === 'd'
))
console.log("someStartWithD: ", someStartWithD);

console.log('\n');
const allStartWithD = words.every(word => {word[0] == 'd'})
console.log("allStartWithD: ", allStartWithD);

console.log('\n');
const allGoodBooks = bookz.every(book => book.rating > 3.5);
console.log('allGoodBooks: ', allGoodBooks);

console.log('\n');
const any2Authors = bookz.some(book => book.authors.length === 2);
console.log('any2Authors: ', any2Authors);
console.log('\n');


const prices = [400.50, 3000, 99.99, 35.99, 12.00, 9500];
console.log(prices);
console.log('\n');
console.log(prices.sort());

console.log('\n');
const ascSort = prices.sort((a, b) => a - b);
console.log("ascSort: ", ascSort);

console.log('\n');
const descSort = prices.sort((a, b) => b - a);
console.log("descSort: ", descSort);

// Sort mutates the original data, one of the few array methods
// 3 variables pointing to the same array, 1 array in memory
console.log("ascSort: ", ascSort);
console.log("prices array: ", prices);

console.log('\n');
// slice() fixes this issues
const pricesSlice = prices.slice().sort((a, b) => a - b);
console.log("pricesSlice", pricesSlice);

// console.log('\n');

// console.log(bookz);
console.log('\n');
// We can't do a-b || b-a, because both are objects in books2
bookz.sort((a, b) => a.rating - b.rating)
console.log(bookz);
// bookz.sort((a, b) => b.rating - a.rating);
console.log(bookz);

console.log('\n');
// .reduce((accumulator, currentValue))
const numz = [3, 4, 5, 6, 7];
const product = numz.reduce((acc, val) => {
  return acc * val;
})
console.log("product: ", product);

console.log('\n');
let grades = [89, 96, 58, 77, 62, 93, 81, 99, 73];
console.log("grades: ", grades);

console.log('\n');
const topScore = grades.reduce((max, currVal) => {
  if(currVal > max) return currVal;
  return max;
})
console.log("topScore: ", topScore); // 99

// A shorter option w/ Math.max & implicit return
const topScore2 = grades.reduce((max, currVal) => (
  Math.max(max, currVal)
))
console.log("topScore2: ", topScore2);

console.log('\n');
const minScore = grades.reduce((min, curr) => {
  return Math.min(min, curr);
})
console.log("minScore: ", minScore);

console.log('\n');
const sum3 = [10, 20, 30, 40, 50].reduce((sum, currVal) => (
  sum + currVal
))
console.log("sum3: ", sum3);

console.log('\n');
const sum4 = [10, 20, 30, 40, 50].reduce((sum, currVal) => (
  sum + currVal
), 1000) // starts at 1000
console.log("sum4: ", sum4);

console.log('\n');
const votes = ['y', 'y', 'n', 'y', 'n', 'y', 'n', 'y', 'n', 'n', 'n', 'y', 'y'];
console.log("votes: ", votes);
const resultsTally = votes.reduce((tally, val) => {
  if(tally[val]) {
    tally[val]++;
  } else {
    tally[val] = 1;
  }
  return tally
}, {})
console.log("resultsTally: ", resultsTally);

console.log('\n');
const resultsTally2 = votes.reduce((tally, val) => {
  tally[val] = (tally[val] || 0) + 1;
  return tally;
}, {});
console.log("resultsTally2: ", resultsTally2);

console.log('\n');
const groupedByRatings = bookz.reduce((groupedBooks, book) => {
  const key = Math.floor(book.rating);
  if(!groupedBooks[key]) groupedBooks[key] = [];
  groupedBooks[key].push(book);
  return groupedBooks;
}, {})
console.log(groupedByRatings);
