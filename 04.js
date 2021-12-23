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

dishesToDo.shift()
console.log(dishesToDo)
dishesToDo.shift()
console.log(dishesToDo)
dishesToDo.shift()
console.log(dishesToDo)
dishesToDo.shift()

const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];

console.log(array1.concat(array2));

let fruits = ['apple', 'banana'];
let veggies = ['asparagus', 'brussel sprouts'];
let meats = ['steak', 'chicken breast'];

console.log(fruits.concat(veggies));
console.log(veggies.concat(fruits));

let allFood = fruits.concat(veggies, meats);
console.log(allFood);

let ingredients = ['water', 'corn starch', 'flour', 'cheese',
'brownsuggar', 'shrimp','eel', 'butter'];

console.log(ingredients.includes('fish'));
console.log(ingredients.includes('shrimp'));
console.log(ingredients.includes('corn'));

// fromIndex, where to start searching from
console.log(ingredients.includes('water', 3));
console.log(ingredients.includes('water', 0));

if (ingredients.includes('flour')) {
  console.log('I am gluten free, i cannot eat that');
}

console.log(ingredients.indexOf('eel'));
console.log(ingredients.indexOf('maple syrup'));
console.log(ingredients.indexOf('flour') !== -1 );

let beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.log(beasts.indexOf('bison'));

// start from index 2
console.log(beasts.indexOf('bison', 2));
console.log(beasts.indexOf('giraffe'));

let arrayToReverse = ['one', 'two', 'three'];
console.log('array:', arrayToReverse);

let arrayReversed = arrayToReverse.reverse();
console.log(arrayReversed);

let elements = ['fire', 'air', 'water'];

console.log(elements);
console.log(elements.join());
console.log(elements.join(''));
console.log(elements.join('-'));
console.log(elements.join(', '));
console.log(elements.reverse().join('_'));
console.log([12.3, 60, false]);
console.log([12.3, 60, false].join());
console.log([12.3, 60, false].join(' # -> '));

let animals = ['shark', 'salmon', 'whale', 'bear', 'elephant',
'lizard', 'tortoise',];

// creates a new array
console.log(animals);
console.log(animals.slice(2));
console.log(animals.slice(2, 4));
console.log(animals.slice(1,5));

let swimmers = animals.slice(0, 3);
console.log(swimmers);

let mammals = animals.slice(2, 5);
console.log(mammals);

let reptiles = animals.slice(5, 7);
let reptiles2 = animals.slice(5);
console.log(reptiles);
console.log(reptiles2);

let quadruped = animals.slice(-3);
console.log(quadruped); 
console.log(animals.slice(-3, -1));

let copySlice = animals.slice();
console.log(copySlice);
