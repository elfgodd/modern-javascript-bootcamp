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

console.log("\n");
console.log("\n");
console.log("\n");
console.log("\n");
console.log("\n");
console.log("\n");
