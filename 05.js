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

