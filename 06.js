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
for (i = 0; i < gameBoard.length; i++) {
  let row = gameBoard[i];
  for (j = 0; j < row.length; j++) {
    totalScore += row[j];
  }
}
console.log('totalScore: ', totalScore);