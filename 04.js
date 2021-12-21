let shoppingList = ['cereal', 'cheese','ice'];

let lotto = [45, 12, 23, 25, 34];

let myCollection = [12, 'dog', true, null, NaN];

console.log('lotto:',lotto[123]); // undefined
console.log('abcdefg:', "abcdefg"[123]) // undefined

console.log(shoppingList);
shoppingList[0] = 'milk';
console.log(shoppingList);
shoppingList[2] = 'ice cream';
console.log(shoppingList);

let topSongs = [
  'Another night',
  'White soul',
  'Heart break',
  'Benz'
];

console.log(topSongs);
topSongs.push('Soulfly');
console.log(topSongs);
let rodWave = topSongs.pop()
console.log(rodWave);
console.log(topSongs);

let dishesToDo = ['big platter']
console.log(dishesToDo)
dishesToDo.unshift('large plate')
dishesToDo.unshift('small plate')
console.log(dishesToDo)

dishesToDo.unshift('cereal bowl')
dishesToDo.unshift('mug')
dishesToDo.unshift('dirty spoon')
console.log(dishesToDo)

dishesToDo.shift('')
console.log(dishesToDo)
dishesToDo.shift('')
console.log(dishesToDo)
dishesToDo.shift('')
console.log(dishesToDo)
dishesToDo.shift('')