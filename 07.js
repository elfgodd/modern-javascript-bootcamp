function grumpus() {
  console.log('ugh...you again...');
  console.log('FOR THE LAST TIME...');
  console.log('LEAVE ME ALONE!!!');
}
grumpus();

console.log('\n');
for (let i = 0; i < 3; i++) {
  grumpus();
}

console.log('\n');
function rollDie() {
  let roll = Math.floor(Math.random() * 6) + 1;
  console.log(`Rolled: ${roll}`);
}
rollDie();

console.log('\n');
function throwDice() {
  rollDie();
  rollDie();
  rollDie();
}
throwDice();

function greet() {
  console.log('Hi');
  // No arguments inputs
}
greet();

console.log('\n');
