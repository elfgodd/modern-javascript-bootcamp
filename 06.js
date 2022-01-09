for(let i = 1; i <= 5; i++) {
  console.log('Hello: ', i);
}
for(let i = 1; i <= 10; i+=3) {
  console.log('hi +=3: ', i);
}
for(let i = 1; i <= 32; i *= 2) {
  console.log('bye *=: ', i);
}
for(num = 1; num <= 5; num++) {
  console.log(`${num}x${num} =`, num * num);
  console.log(`${num}x${num} = ${num * num}`);
}
for(let i = 200; i >= 0 ; i -= 25) {
  console.log('does it work?: ', i);
}
/*
for(let i = 1; i !== 20; i+= 2) {
  console.log('Infinite Loop')
}
*/

const examScores = [98, 77, 84, 91, 57, 66];

for(let i = 0; i < examScores.length; i++ ) {
  console.log(i, examScores[i]);
}

const myStudents = [
  {
    firstname: 'Zeus',
    grade: 86
  },
  {
    firstName: 'Artemis',
    grade: 97
  },
  {
    firstName: 'Hera',
    grade: 72
  },
  {
    firstName: 'Apollo',
    grade: 90
  }
];
for (let i = 0; i < myStudents.length; i++) {
  let student = myStudents[i]
  console.log(`${student.firstName} scored: ${student.grade}`);
}

const word = 'stressed';
let reversedWord = '';
for (let i = word.length -1; i >= 0; i-- ) {
  console.log(word[i]);
  reversedWord += word[i];
  console.log(reversedWord);
}
console.log(reversedWord);

let total = 0;
for (let i = 0; i < myStudents.length; i++) {
  let student = myStudents[i]
  total += student.grade;
}
console.log(total);
console.log(total / myStudents.length);

for (let i = 1; i <= 5; i++) {
  console.log('OUTER LOOP:', i);
  for (let j = 10; j >= 0; j-=2) {
    console.log(' INNER LOOP:', j)
  }
}

const gameBoard = [
  [ 4, 32, 8, 4 ],
  [ 64, 8, 32, 2 ],
  [ 8, 32, 16, 4 ],
  [ 2, 8, 4, 2 ]
];

let totalScore = 0;
for (let i = 0; i < gameBoard.length; i++) {
  let row = gameBoard[i];
  for (j = 0; j < row.length; j++) {
    totalScore += row[j];
  }
}
console.log('totalScore: ', totalScore);

let k = 0;
while (k <= 5) {
  console.log('j: ', k);
  k++;
} // 0, 1, 2, 3, 4, 5

const target = Math.floor(Math.random() * 10)
let guess = Math.floor(Math.random() * 10);
// while (some condition)
// in the loop, update or attempt to make that condition
while (guess !== target) {  
  console.log(`Target: ${target} Guess: ${guess}`);
  guess = Math.floor(Math.random() * 10);
}
console.log(`Target: ${target} Guess: ${target}`);
console.log('CONGRATS YOU WIN!');

// break: not common to use it in a for loop
for (let i = 0; i < 10; i++) {
  console.log(i);
  if (i === 5) {
    break;
  }
}


guess = Math.floor(Math.random() * 10);
while (true) {
  if (target === guess) break;
  console.log(`Target: ${target} Guess: ${guess}`);
  guess = Math.floor(Math.random() * 10);
}
console.log(`Target: ${target} Guess: ${target}`);
console.log('CONGRATS YOU WIN!');

console.log('\n');
let subreddits = [ 'soccer', 'popheads', 'cringe', 'books' ];

for (let i = 0; i < subreddits.length; i++) {
  console.log(subreddits[i]);
}
console.log('\n');
for (let sub of subreddits) {
  console.log(sub);
}
console.log('\n');
for (let char of 'cockadoodledoo') {
  console.log(char.toUpperCase());
}
console.log('\n');

const magicSquare = [
  [ 2, 7, 6 ],
  [ 9, 5, 1 ],
  [ 4, 3, 8 ]
]

for (let i = 0; i < magicSquare.length; i++) {
  let row = magicSquare[i]
  let sum = 0;
  for (let j = 0; j < row.length; j++) {
    console.log(row[j]);
    sum += row[j];
  }
  console.log(`${row} summed to ${sum}`);
}
console.log('\n');

for (let row of magicSquare) {
  let sum = 0;
  for (let num of row) {
    sum += num;
  }
  console.log(`${row} summed to ${sum}`);
}
console.log('\n');

const words1 = [ 'mail', 'milk', 'bath', 'black' ];
const words2 = [ 'box', 'shake', 'tub' , 'berry' ];
// if you need a index, regular for loop is easier
for(let i = 0; i < words1.length; i++) {
  console.log(`${words1[i]}${words2[i]}`);
}
console.log('\n');
const movieReviews = {
  Arrival : 9.5,
  Alien: 9,
  Amelie : 8,
  'In Bruges': 9,
  Amadeus : 10,
  'Kill Bill' : 8,
  'Little Miss Sunshine' : 8.5,
  Coraline : 7.5
};

console.log(Object.keys(movieReviews));
console.log(Object.values(movieReviews));
console.log('\n');

for (let movie of Object.keys(movieReviews)) {
  console.log(movie);
}
console.log('\n');
for (let movie of Object.values(movieReviews)) {
  console.log(movie);
}
console.log('\n');
for (let movie of Object.keys(movieReviews)) {
  console.log(movie, movieReviews[movie]);
}

const ratings = Object.values(movieReviews);
let total1 = 0;
for (let r of ratings) {
  total1 += r;
}
let avg1 = total1 / ratings.length;
console.log('Average: ', avg1);
console.log('\n');
console.log(Object.keys(movieReviews)[1]);
console.log(Object.keys(movieReviews)[4]);

console.log('\n');
const jeopardyWinnings = {
  regularPlay : 2522700,
  watsonChallenge : 300000,
  tournamentOfChampions : 500000,
  battleOfTheDecades : 100000 
};

for (let prop in jeopardyWinnings) {
  console.log(prop);
  console.log(jeopardyWinnings[prop]);
}
console.log('\n');
let total2 = 0;
for (let prop in jeopardyWinnings) {
  total2 += jeopardyWinnings[prop];
}
console.log(`Ken Jennings Total Earnings: ${total2}`);
console.log(jeopardyWinnings['regularPlay']);
console.log('\n');

for (let k in [88, 99, 77, 66]) {
  console.log(k);
}
console.log('\n');
console.log(jeopardyWinnings);