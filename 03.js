// alert("It's working!");
console.log("It's working!");
console.log(3 + 4);
console.error('OH NO!!!');
console.log(4+1, 'hello', true);

// ##########
// if statement

// example 1
if (1 === 1 ) {
  console.log("It's true!");
}

// example 2
if (1 !== 1 ) {
  console.log("It's true!");
} // this code won't show up in console because it's not true

// example 3
let rating = 3;

if (rating === 3) {
  console.log("YOU ARE A SUPERSTAR!");
}

// example 4
rating = 2;
if (rating < 3) {
  console.log("YOU ARE NOT SUPERSTAR!");
}

// example 5
let num = 37;

if (num % 2 !== 0) {
  console.log('ODD NUMBER!');
}

// ##########
// else if statement

// Performance Review
// 3 - superstar
// 2 - meets expectations
// 1 - needs improvement
// anything else - etf?
rating = 22;

if (rating === 3) {
  console.log('YOU ARE A SUPERSTAR!');
}
else if (rating === 2) {
  console.log('MEETS EXPECTATIONS')
}
else if (rating === 1) {
  console.log('NEEDS IMPROVEMENT');
} // else
else {
  console.log("INVALID RATING!");
}

// example 6
let highScore = 1430;
let userScore = 1200;

if (userScore >= highScore) {
  console.log(
    `Congrats, you have the new high score of ${userScore}`);
    highScore = userScore;
}
else {
  console.log(
    `Good Game. Your score of ${userScore} did not
    beat the high score of ${highScore}`);
}
