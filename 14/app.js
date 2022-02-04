// the thing    event type    the code to run
// button       click         change the color
// input        hits return   get search results
// image        mouseover     display the img caption

console.log('/* #### 2 Ways NOT to Add Events ####*/');
const btnClicker = document.querySelector('#clicker')
console.log("btnClicker: ", btnClicker);

const firstBtn = document.querySelector('button');
console.log("firstBtn: ", firstBtn);

// This won't work propertly, because it will run immediately
// btnClicker = alert('hi!!!');

// 1
btnClicker.onclick = function() {
  console.log('you clicked me stop that!');
}
// 2
btnClicker.onclick = greet;
function greet() {
  console.log('greet function');
}

// Works with double click
btnClicker.ondblclick = function() {
  console.log('double click!');
}

console.log('\n');
console.log('/* #### addEventListener ####*/');

const btn4 = document.querySelectorAll('button')[3];
console.log('btn4.onclick: ', btn4.textContent);
// btn4.onclick = function() {
//   console.log('btn4.onclick');
// }

// With addEventListener i can add as many 'click'
// to the same button
btn4.addEventListener('click', function() {
  console.log('btn4 clicked!');
})
btn4.addEventListener('click', () => {
  console.log('btn4 Second clicked!')
})
btn4.addEventListener('click', () => (
  console.log('btn4 Third clicked!')
))
// It's null because we are not setting the onclick property
// We are attaching an eventListener, which can have multiple 
// of for a given event on a given element
console.log(btn4.onclick); // null

btn4.addEventListener('mouseover', function() {
  btn4.innerText = 'stop touching me';
})
btn4.addEventListener('mouseout', function() {
  btn4.innerText = 'btn4 clicked!';
})

// Scroll eventListener
// You need to at a lot of content to test this, but is working
window.addEventListener('scroll', function() {
  console.log('stop scrolling');
})

console.log('\n');
console.log('/* #### The impossible Button Demo ####*/');

const btnDemo1 = document.querySelectorAll('button')[4];
console.log(btnDemo1.textContent);

btnDemo1.addEventListener('mouseover', function() {
  console.log('moveover!!');
  const height = Math.floor(Math.random() * window.innerHeight);
  const width = Math.floor(Math.random() * window.innerWidth)
  btnDemo1.style.left = `${width}px`;
  btnDemo1.style.top = `${height}px`;
})

// window.screen
// window.innerHeight
// window.innerWidth

btnDemo1.addEventListener('click', function() {
  btnDemo1.innerText = 'you got me!';
  document.body.style.backgroundColor = 'green';
})
