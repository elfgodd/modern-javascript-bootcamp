// the thing    event type    the code to run
// button       click         change the color
// input        hits return   get search results
// image        mouseover     display the img caption

console.log('/* #### 2 Ways NOT to Add Events #### */')
const btnClicker = document.querySelector('#clicker')
console.log('btnClicker: ', btnClicker)

const firstBtn = document.querySelector('button')
console.log('firstBtn: ', firstBtn)

// This won't work propertly, because it will run immediately
// btnClicker = alert('hi!!!');

// 1
btnClicker.onclick = function () {
  console.log('you clicked me stop that!')
}
// 2
btnClicker.onclick = greet
function greet() {
  console.log('greet function')
}

// Works with double click
btnClicker.ondblclick = function () {
  console.log('double click!')
}

console.log('\n')
console.log('/* #### addEventListener #### */')

const btn4 = document.querySelectorAll('button')[3]
console.log('btn4.onclick: ', btn4.textContent)
// btn4.onclick = function() {
//   console.log('btn4.onclick');
// }

// With addEventListener i can add as many 'click'
// to the same button
btn4.addEventListener('click', function () {
  console.log('btn4 clicked!')
})
btn4.addEventListener('click', () => {
  console.log('btn4 Second clicked!')
})
btn4.addEventListener('click', () => console.log('btn4 Third clicked!'))
// It's null because we are not setting the onclick property
// We are attaching an eventListener, which can have multiple
// of for a given event on a given element
console.log(btn4.onclick) // null

btn4.addEventListener('mouseover', function () {
  btn4.innerText = 'stop touching me'
})
btn4.addEventListener('mouseout', function () {
  btn4.innerText = 'btn4 clicked!'
})

// Scroll eventListener
// You need to at a lot of content to test this, but is working
window.addEventListener('scroll', function () {
  console.log('stop scrolling')
})

console.log('\n')
console.log('/* #### The impossible Button Demo ####*/')

const btnDemo1 = document.querySelectorAll('button')[4]
console.log(btnDemo1.textContent)

btnDemo1.addEventListener('mouseover', function () {
  console.log('moveover!!')
  const height = Math.floor(Math.random() * window.innerHeight)
  const width = Math.floor(Math.random() * window.innerWidth)
  btnDemo1.style.left = `${width}px`
  btnDemo1.style.top = `${height}px`
})

// window.screen
// window.innerHeight
// window.innerWidth

btnDemo1.addEventListener('click', function () {
  btnDemo1.innerText = 'you got me!'
  document.body.style.backgroundColor = 'green'
})

console.log('\n')
console.log('/* #### Events on Multiple Elements #### */')

const colors = [
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'purple',
  'indigo',
  'violet',
]

const changeColor = function (evt) {
  console.log(evt)
  const h1 = document.querySelector('h1')
  h1.style.color = this.style.backgroundColor
  console.log('this: ', this)
  console.log('click a box: ', this.style.backgroundColor)
}
const container = document.querySelector('#boxes')

for (let color of colors) {
  const box = document.createElement('div')
  box.style.backgroundColor = color
  box.classList.add('box')
  container.append(box)
  // keyword this inside an event handler,
  // this will refer to the individual element
  // that the event listener has been added to
  box.addEventListener('click', changeColor)
}

// Example about this
// this will make, Pick a Color get printed in the console browser
const h1 = document.querySelector('h1')
h1.addEventListener('mouseover', function () {
  console.log(this.innerText)
})

console.log('\n')
console.log('/* #### The Event Object #### */')

// evt, The event object is passed
// and we have access to it

// Find which key the user pressed
document.body.addEventListener('keypress', function (e) {
  // console.log(e);
})

console.log('\n')
console.log('/* #### Key Events keypresses, keyup & keydown #### */')

const input = document.querySelectorAll('input')[1]

input.addEventListener('keydown', function () {
  // console.log('key down');
})

input.addEventListener('keyup', function () {
  // console.log('key up');
})

input.addEventListener('keypress', function () {
  // console.log('key pressed');
})

const addItemInput = document.querySelector('#addItem')
const itemsUL = document.querySelector('#items')

addItemInput.addEventListener('keypress', function (evt) {
  console.log(evt)
  if (evt.key === 'Enter') {
    if (!this.value) return
    // add a new item to list
    console.log(this.value)
    const newItemText = this.value
    const newItem = document.createElement('li')
    newItem.innerText = newItemText
    itemsUL.append(newItem)
    this.value = ''
  }
})

console.log('\n')
console.log('/* #### Form Events & PreventDefault #### */')

const form = document.querySelector('#signup-form')

const creditCardInput = document.querySelector('#cc')
const termsCheckbox = document.querySelector('#terms')
const veggieSelect = document.querySelector('#veggie')
form.addEventListener('submit', function (e) {
  e.preventDefault()
  alert('submitted the form')
  console.log('cc: ', creditCardInput.value)
  console.log('terms: ', termsCheckbox.checked)
  console.log('veggie: ', veggieSelect.value)
})
