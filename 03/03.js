// alert("It's working!");
console.log("It's working!")
console.log(3 + 4)
console.error('OH NO!!!')
console.log(4 + 1, 'hello', true)

// ##########
// if statement

// example 1
if (1 === 1) {
  console.log("It's true!")
}

// example 2
if (1 !== 1) {
  console.log("It's true!")
} // this code won't show up in console because it's not true

// example 3
let rating = 3

if (rating === 3) {
  console.log('YOU ARE A SUPERSTAR!')
}

// example 4
rating = 2
if (rating < 3) {
  console.log('YOU ARE NOT SUPERSTAR!')
}

// example 5
let num = 37

if (num % 2 !== 0) {
  console.log('ODD NUMBER!')
}

// ##########
// else if statement

// Performance Review
// 3 - superstar
// 2 - meets expectations
// 1 - needs improvement
// anything else - etf?
rating = 22

if (rating === 3) {
  console.log('YOU ARE A SUPERSTAR!')
} else if (rating === 2) {
  console.log('MEETS EXPECTATIONS')
} else if (rating === 1) {
  console.log('NEEDS IMPROVEMENT')
} // else
else {
  console.log('INVALID RATING!')
}

// example 6
let highScore = 1430
let userScore = 1200

if (userScore >= highScore) {
  console.log(`Congrats, you have the new high score of ${userScore}`)
  highScore = userScore
} else {
  console.log(
    `Good Game. Your score of ${userScore} did not
    beat the high score of ${highScore}`
  )
}

// example 7
let password = 'hellokitty'

if (password.length >= 6) {
  if (password.indexOf(' ') === -1) {
    console.log('Valid Password!')
  } else {
    console.log('Password is long enough, but cannot contain spaces')
  }
} else {
  console.log('Password must be longer!')
}

// example 7
let mystery = ''

if (mystery) {
  console.log('TRUTHY')
} else {
  console.log('FALSY')
}

// example 7
let loggedInUser = null

if (loggedInUser) {
  console.log('you are logged in')
} else {
  console.log('please log in')
}

// example 8
password = 'tacotuesday'

if (password.length >= 6 && password.indexOf(' ') === -1) {
  console.log('valid password')
} else {
  console.log('invalid password')
}

// example 9
num = 3

if (num >= 1 && num <= 10) {
  console.log('Number is between 1 and 10')
} else {
  console.log('Please guess a number between 1 and 10')
}

// example 10
let age = 26

if (age < 6 || age >= 65) {
  console.log('you get in for free')
} else {
  console.log('that will be $10 please')
}

// example 11
// purple orchid violet
let color = 'purple'
if (color === 'purple' || color === 'orchid' || color === 'violet') {
  console.log('great choice!')
}

// example 12
// If there isn't a logged in user
loggedInUser = 'user123'
if (!loggedInUser) {
  console.log('get out of here')
} else {
  console.log('thanks for logging in')
}

// example 13
let flavor = 'watermelon'
if (flavor !== 'grape' && flavor !== 'cherry') {
  console.log('we dont have that flavor!')
}

// example 14
if (!(flavor === 'grape' || flavor === 'cherry')) {
  console.log('we dont have that flavor!2')
}

// example 15
let day = 7

switch (day) {
  case 1:
    console.log('monday')
    break
  case 2:
    console.log('tuesday')
    break
  case 3:
    console.log('wednesday')
    break
  case 4:
    console.log('thursday')
    break
  case 5:
    console.log('friday')
    break
  case 6:
    console.log('saturday')
    break
  case 7:
    console.log('sunday')
    break
  default:
    console.log('not a valid day')
}

// example 16
let emoji = 'lips'

switch (emoji) {
  case 'happy face':
  case 'sad face':
    console.log('yellow')
    break
  case 'eggplant':
    console.log('purple')
    break
  case 'lips':
  case 'heart':
    console.log('red')
    break
  default:
    console.log('no face in this data')
}

// example 17
num = 2

num === 7 ? console.log('lucky!') : console.log('bad')

let statusUser = 'offline' // anything will run green

color = statusUser === 'offline' ? 'red' : 'green'
console.log(color)
