let shoppingList = ['cereal', 'cheese', 'ice']

let lotto = [45, 12, 23, 25, 34]

let myCollection = [12, 'dog', true, null, NaN]

console.log('lotto:', lotto[123]) // undefined
console.log('abcdefg:', 'abcdefg'[123]) // undefined

console.log(shoppingList)
shoppingList[0] = 'milk'
console.log(shoppingList)
shoppingList[2] = 'ice cream'
console.log(shoppingList)

let topSongs = ['Another night', 'White soul', 'Heart break', 'Benz']

console.log(topSongs)
topSongs.push('Soulfly')
console.log(topSongs)
let rodWave = topSongs.pop()
console.log(rodWave)
console.log(topSongs)

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

const array1 = ['a', 'b', 'c']
const array2 = ['d', 'e', 'f']

console.log(array1.concat(array2))
// ['a', 'b', 'c', 'd', 'e', 'f']

let fruits = ['apple', 'banana']
let veggies = ['asparagus', 'brussel sprouts']
let meats = ['steak', 'chicken breast']

console.log(fruits.concat(veggies))
console.log(veggies.concat(fruits))

let allFood = fruits.concat(veggies, meats)
console.log(allFood)

let ingredients = [
  'water',
  'corn starch',
  'flour',
  'cheese',
  'brownsuggar',
  'shrimp',
  'eel',
  'butter',
]

console.log(ingredients.includes('fish')) // false
console.log(ingredients.includes('shrimp')) // true
console.log(ingredients.includes('corn')) // false

// fromIndex, where to start searching from
console.log(ingredients.includes('water', 3)) // false
console.log(ingredients.includes('water', 0)) // true

if (ingredients.includes('flour')) {
  console.log('I am gluten free, i cannot eat that')
}

console.log(ingredients.indexOf('eel')) // 6
console.log(ingredients.indexOf('maple syrup')) // -1
console.log(ingredients.indexOf('flour') !== -1) // true

let beasts = ['ant', 'bison', 'camel', 'duck', 'bison']
console.log(beasts.indexOf('bison')) // 1

// start from index 2
console.log(beasts.indexOf('bison', 2)) // 4
console.log(beasts.indexOf('giraffe')) // -1

let arrayToReverse = ['one', 'two', 'three']
console.log('array:', arrayToReverse)

let arrayReversed = arrayToReverse.reverse()
// ['three', 'two', 'one']
console.log(arrayReversed)

let elements = ['fire', 'air', 'water']

console.log(elements)
// ['fire', 'air', 'water']
console.log(elements.join())
// fire,air,water
console.log(elements.join(''))
// fireairwater
console.log(elements.join('-'))
// fire-air-water
console.log(elements.join(', '))
// fire, air, water
console.log(elements.reverse().join('_'))
// water_air_fire
console.log([12.3, 60, false])
// [12.3, 60, false]
console.log([12.3, 60, false].join())
// 12.3,60,false
console.log([12.3, 60, false].join(' # -> '))
// 12.3 # -> 60 # -> false

let animals = [
  'shark',
  'salmon',
  'whale',
  'bear',
  'elephant',
  'lizard',
  'tortoise',
]

// creates a new array with its own memory location
console.log(animals)
// ['shark', 'salmon', 'whale', 'bear', 'elephant', 'lizard', 'tortoise']
console.log(animals.slice(2))
// ['whale', 'bear', 'elephant', 'lizard', 'tortoise']
console.log(animals.slice(2, 4))
// ['whale', 'bear']
console.log(animals.slice(1, 5))
// ['salmon', 'whale', 'bear', 'elephant']

let swimmers = animals.slice(0, 3)
console.log(swimmers)
// ['shark', 'salmon', 'whale']

let mammals = animals.slice(2, 5)
console.log(mammals)
// ['whale', 'bear', 'elephant']

let reptiles = animals.slice(5, 7)
// ['lizard', 'tortoise']
let reptiles2 = animals.slice(5)
// ['lizard', 'tortoise']
console.log(reptiles)
console.log(reptiles2)

let quadruped = animals.slice(-3)
console.log(quadruped)
// ['elephant', 'lizard', 'tortoise']
console.log(animals.slice(-3, -1))
// ['elephant', 'lizard']

let copySlice = animals.slice()
console.log(copySlice)
// ['shark', 'salmon', 'whale', 'bear', 'elephant', 'lizard', 'tortoise']

let months = ['jan', 'march', 'april', 'june']

console.log(months)
// ['jan', 'march', 'april', 'june']
// inserts at index 1
months.splice(1, 0, 'feb')
console.log(months)
// ['jan', 'feb', 'march', 'april', 'june']
// replaces 1 element at index 4
months.splice(4, 1, 'may')
console.log(months)
// ['jan', 'feb', 'march', 'april', 'may']

console.log('########')
// animals = [
//   'shark',
//   'salmon',
//   'whale',
//   'bear',
//   'elephant',
//   'lizard',
//   'tortoise',
// ]

console.log(animals)
// ['shark', 'salmon', 'whale', 'bear', 'elephant', 'lizard', 'tortoise']
animals.splice(1, 0, 'octopus')
console.log(animals)
// ['shark', 'octopus', 'salmon', 'whale', 'bear', 'elephant', 'lizard', 'tortoise']

animals.splice(3, 2)
console.log(animals)
// ['shark', 'octopus', 'salmon', 'elephant', 'lizard', 'tortoise']

animals.splice(3, 0, 'snake', 'frog')
console.log(animals)
// ['shark', 'octopus', 'salmon', 'snake', 'frog', 'elephant', 'lizard', 'tortoise']

animals.splice(0, 2, 'SHARK!', 'OCTOPUS!')
console.log(animals)
// ['SHARK!', 'OCTOPUS!', 'salmon', 'snake', 'frog', 'elephant', 'lizard', 'tortoise']

// months = ['jan', 'march', 'april', 'june']
console.log(months)
// ['jan', 'march', 'april', 'june']
months.sort()
console.log(months)
// ['april', 'jan', 'june', 'march']

let arraySort = [1, 30, 4, 21, 10000]
arraySort.sort()
// [1, 10000, 21, 30, 4]
console.log(arraySort)

// topSongs = ['Another night', 'White soul', 'Heart break', 'Benz']
console.log(topSongs)
console.log(topSongs.sort())
// ['Another night', 'Benz', 'Heart break', 'White soul']
console.log(topSongs)

// Reference Types
let numz = [1, 2, 3, 4, 5]
console.log(numz)
let otherNumz = numz
console.log(otherNumz)

numz.push(6, 7, 8)
console.log(numz)
console.log(otherNumz)
otherNumz.pop()
otherNumz.pop()
otherNumz.pop()
otherNumz.pop()
console.log(numz)
console.log(otherNumz)

// Using consts with Arrays
let x = 34
x += 5
console.log(x)
const city = 'Lisbon'
console.log(city)
// city = 'Londron'; // Uncaught TypeError: invalid assignment to const 'city'

const foods = ['milk']
foods.push('chocolate')
console.log(foods)
// ['milk', 'chocolate']
foods.unshift('tortillas')
console.log(foods)
// ['tortillas', 'milk', 'chocolate']
foods.pop()
foods.pop()
foods.pop()
console.log(foods)
// []
// foods = []; // Uncaught TypeError: invalid assignment to const 'foods'

const arrayWhatEverWeWant = [null, undefined, NaN, 'abcd', 123456789]
console.log(arrayWhatEverWeWant)

const animalPairs = [
  ['doe', 'buck'], // 0
  ['ewe', 'ram'], // 1
  ['peahen', 'peacock'], // 2
]
console.log(animalPairs)
console.log(animalPairs[2]) // ['peahen', 'peacock']
console.log(animalPairs[2][0]) // 'peahen'
console.log(animalPairs[2][1]) // 'peacock'
console.log(animalPairs[1][1]) // 'ram'
animalPairs[0][1] = 'stag' // 'buck' changes to 'stag'
console.log(animalPairs[0]) // ['doe', 'buck']
