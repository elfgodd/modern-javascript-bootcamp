const fitBitData = {
  totalSteps: 308727,
  totalMiles: 211.7,
  avgCalorieBurn: 5755,
  workoutsThisWeek: '5 of 7',
  avfGoodSleep: '2:13',
  45: 'forty five' // fitBitData[45]
}
console.log(fitBitData);
console.log(fitBitData.totalMiles);
console.log(fitBitData.avgCalorieBurn);
console.log(fitBitData.avfGoodSleep);
// console.log(fitBitData.45); ERROR!
console.log(fitBitData[45]);

let data = { a:1,};
console.log(data);

let data2 = {a:1, b:2, c:3, d:4};
console.log(data2);

const numbers = {
  100: 'one hundred',
  16: 'sixteen'
}
console.log(numbers[100]);
console.log(numbers[16]);

const numbers2 = {
  '100': 'one hundred',
  '16': 'sixteen',
  '76 trombones': 'great song!'
};
console.log(numbers2['100']);
console.log(numbers2['16']);
console.log(numbers2['76 trombones']);
console.log(numbers2['10'+'0']); // '100'

const userReviews = {
  'queenBee49': 0,
};
console.log(userReviews['queenBee49']);
userReviews['queenBee49'] = 4.0;
console.log(userReviews['queenBee49']);

console.log(userReviews);
userReviews.mrSmith78 = 3.5;
console.log(userReviews['mrSmith78']);

userReviews.colt = '5';
userReviews['colt'] = 5;
console.log(userReviews);

userReviews.queenBee49 +=  2;
console.log(userReviews.queenBee49);

userReviews.mrSmith78++;
console.log(userReviews.mrSmith78);

const student = {
firstName: 'David',
lastName: 'Jones',
strengths: ['Music', 'Art'],
exams: {
  midterm: 92,
  final: 88
  }
}
let avg = (student.exams.midterm + student.exams.final) / 2;
console.log('avg: ', avg);
console.log('Student strength:', student.strengths[0], ',', student.strengths[1]);

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
];

console.log(shoppingCart)
console.log(shoppingCart[0].product);
console.log(shoppingCart[1].price);
console.log(shoppingCart[2].quantity);


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
console.log('Complete game', game);
console.log('game board: ', game.board);

let numsEquality = [1, 2, 3];
let mystery = [1, 2, 3];
let moreNums = numsEquality;

console.log(numsEquality == mystery); // false
console.log(numsEquality === mystery); // false
console.log(numsEquality === moreNums); // true

const user = {
  username : 'CherryGarcia8',
  email: 'garcia@gmail.com',
  notifications: [] // ['message']
};
if (user.notifications === []) {// this is false
  console.log('NO NEW NOTIFICATIONS!');
}
console.log([] === []); // false can't compare Reference Types, new place in memory

if (user.notifications.length === 0) {// this is false
  console.log('NO NEW NOTIFICATIONS!');
}
if (!user.notifications.length) {// this is false
  console.log('NO NEW NOTIFICATIONS!');
}

console.log({} === {}); // false
console.log({a:1} === {a:1}); // false

let dat1 = {a: 1};
let dat2 = {a: 1};
console.log(dat1 === dat2); // false
let compareObject = dat2;
console.log(dat1 === compareObject); // false
let dat3 = dat1;
console.log(dat3 === dat1); // true