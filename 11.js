/* Shorthand Object Properties */

const getStats = (arr) => {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const sum = arr.reduce((sum, r) => sum + r);
  const avg = sum / arr.length;
  return {
    max: max,
    min: min,
    sum: sum,
    avg: avg
  }
}
const reviews = [4.5, 5.0, 3.44, 2.8, 3.5, 4.0, 3.5];
console.log("reviews: ", reviews);

console.log("\n");
const stats = getStats(reviews);
console.log("stats: ", stats);

console.log("\n");
// new short syntax
const getStats2 = (arr) => {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const sum = arr.reduce((sum, r) => sum + r);
  const avg = sum / arr.length;
  return { max, min, sum, avg}
}

console.log("getStats2: ", getStats2(reviews));

/* Computed Properties */

console.log("\n");
const role = 'host';
const person = 'Jools Holland';
const role2 = 'Director';
const person2 = 'James Cameron';

const team = {
  role: person
}
// team: { role: 'Jools Holland' }
console.log("team: ", team);

const team2 = {};
// team2: {host: 'Jools Holland'}
team2[role] = person;
console.log("team2: ", team2);
team2[role2] = person2;
console.log("team2: ", team2);
team2.role = person;
console.log("team2: ", team2);

console.log("\n");
const teamComputed = {
  [role]: person,
  [role2]: person2,
  [1+6+9]: 'sixteen',
}
console.log("teamComputed: ", teamComputed);

console.log("\n");
function addProp(obj, k, v) {
  const copy = {...obj};
  copy[k] = v;
  return copy;
}
const res = addProp(teamComputed, 'happy', ':)');
console.log("addProp res: ", res);

console.log("\n");
const addPropComputed = (obj, key, value) => {
  return {
    ...obj,
    [key]: value
  }
}
const resComputed = addPropComputed(teamComputed, 'sad', 'sadEmoji:(');
console.log("resComputed", resComputed);


console.log("\n");
console.log("\n");
