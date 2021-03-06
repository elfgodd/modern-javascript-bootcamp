console.log('/* #### Working with innerText & textContent #### */');
console.log('\n');

const h1 = document.querySelector('h1');
console.log('h1: ', h1);
console.log('h1.innerText: ', h1.innerText);

console.log('\n');
// ul has nested li inside
const ul = document.querySelector('ul');
console.log('ul.innerText: ', ul.innerText);

console.log('\n');
console.log('document.body.innerText: ', document.body.innerText);

// Change the "My WebPage" to "I'm hungry"
h1.innerText = "I'm hungry";

// Will change all the ul and li, to a single ul
ul.innerText = "I'm a big UL";

console.log('\n');
const h2 = document.querySelector('h2');
console.log('h2: ', h2);
console.log('h2.textContent: ', h2.textContent);
h2.textContent = "I'm not hungry";
// .textContent takes all the spacing, all the text and hidden stuff
console.log('h2.textContent: ', h2.textContent);


console.log('\n');
console.log('/* #### innerHTML ####*/');
console.log('\n');

const form = document.querySelector('form');
console.log('form.innerHTML: ', form.innerHTML);

console.log('\n');
const ul2 = document.getElementsByTagName('ul')[1];
console.log("ul2.innerHTML: ", ul2.innerHTML);

// Try this on your own
// form.innerHTML = 'forNewText';
// console.log(form.textContent);
// console.log(form.innerText);

// Try this on your own
// form.innerHTML = '<b>I am a bold tag</b>'

console.log('\n');
h1.innerHTML += ' is cool';
const h3 = document.querySelector('h3');
h3.innerHTML +='<s>!!!!!</s>'

// It doesn't parse the tags with .innerText, it doesn't ignores them
const h4 = document.querySelector('h4');
h4.innerText += '<b>xxx!!!!</b>'


console.log('\n');
console.log('/* #### value, src, href, and more ####*/');

const inputs2 = document.getElementsByTagName('form')[1];
console.log(inputs2);
// Type something in the form2, name, passw, etc inputs and to grab that information execute this
// inputs2[0].value
// inputs2[1].value
// inputs2[2].value
// This gives us, true or false, if is checked or if it's not checked
// inputs2[2].checked
// This gives us the value of the range 100 - 500
// inputs2[3].value

// Reset the input user to empty with this
// inputs2[0].value = ''

// Change the placeholder value
// inputs2[1].placeholder = 'enter easy passw'

console.log('\n');
const a = document.querySelector('a');
console.log('a.href: ', a.href);
// Change the URL
// a.href = 'https://www.google.com'

console.log('\n');
// Update the bear image
// const img = document.querySelector('img');
// img.src = 'https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'

console.log('/* #### Getting & Setting Attributes ####*/');
const range = document.querySelector('input[type="range"]');
console.log('input[type="range"]: ', range);
range.getAttribute('type');
console.log("range.getAttribute('type'): ", range.getAttribute('type'));
range.getAttribute('max');
console.log("range.getAttribute('max'): ", range.getAttribute('max'));
range.getAttribute('min');
console.log("range.getAttribute('min'): ", range.getAttribute('min'));

console.log('\n');
range.setAttribute('min', '-500');

// This will change the range type from range to radio
// range.setAttribute('type', 'radio');


console.log('\n');
console.log('/* #### Finding Parent Children Siblings ####*/');

const firstLi = document.getElementsByTagName('li')[0];
console.log(firstLi); // li
console.log(firstLi.parentElement); // ul
console.log(firstLi.parentElement.parentElement); // section
console.log(firstLi.parentElement.parentElement.parentElement); // body
console.log(firstLi.parentElement.parentElement.parentElement.parentElement); // html
console.log(firstLi.parentElement.parentElement.parentElement.parentElement.parentElement); // null

console.log('\n');
console.log(ul2);
console.log(ul2.children);

console.log('\n');
console.log(ul2.children[0].innerText);
console.log(ul2.children[1].innerText);
console.log(ul2.children[2].innerText);

console.log('\n');
// Getting the next second thing, and the next of next second thing
console.log("firstLi.textContent: ", firstLi.textContent);
console.log(firstLi.nextElementSibling); // Peas
console.log("firstLi.nextElementSibling.textContent: ", firstLi.nextElementSibling.textContent); // Peas
console.log(firstLi.nextElementSibling.nextElementSibling); // Carrots
console.log("firstLi.nextElementSibling.nextElementSibling.textContent: ", firstLi.nextElementSibling.nextElementSibling.textContent); // Carrots

console.log('\n');
/// Previous sibling, going backwards
const thirdLi = firstLi.nextElementSibling.nextElementSibling
console.log("thirdLi: ", thirdLi);
console.log("thirdLi: ", thirdLi.textContent);
console.log("thirdLi.previousElementSibling: ", thirdLi.previousElementSibling);
console.log("thirdLi.previousElementSibling: ", thirdLi.previousElementSibling.textContent);
console.log("thirdLi.previousElementSibling: ", thirdLi.previousElementSibling.previousElementSibling);
console.log("thirdLi.previousElementSibling: ", thirdLi.previousElementSibling.previousElementSibling.textContent);
console.log('\n');

console.log('/* #### Changing Multiple Elements ####*/');

const allLis = document.querySelectorAll('li');
console.log("allLis: ", allLis[0].textContent);
console.log("allLis: ", allLis[1].textContent);
console.log("allLis: ", allLis[2].textContent);
console.log('\n');

for (let i = 0; i < allLis.length; i++) {
  console.log(allLis[i].innerText);
}
console.log('\n');

function forAllLis(){
  for (let i = 0; i < allLis.length; i++) {
    console.log(allLis[i].innerText);
    // Runn this code to turn all li's to iAmTheChampion
    // allLis[i].innerText = 'I am the champion';
}}
forAllLis();

// Run this code to turn all li's to iAmTheChampion with bold text
// for (let li of allLis) {
//   li.innerHTML = 'I am the <b>Champion</b>';
// }

console.log('\n');
console.log('/* #### Altering Styles ####*/');

// This won't work unless the Styles are declare inline
// Which is not a good idea to do inline styles
console.log("h1.style: ", h1.style);
console.log("h1.style.color: ", h1.style.color) ;

h1.style.color = 'purple';

const p = document.querySelector('p');
p.style.color = 'green';
p.style.backgroundColor = 'black';
// This gives the styles applied to it
console.log("p.style: ", p.style);
p.style.fontSize = '24px'

// Remember inline styles like this, has high priority
colors = [ 'yellow', 'blue', 'red' ];
allLis.forEach((li, index) => {
  const color = colors[index]
  console.log(li, color);
  li.style.color = color;
})

console.log('\n');
console.log('/* #### getComputedStyle ####*/');
const li = document.querySelector('li');
// Remember this won't work, unless you have inline styles
document.querySelector('li').style.color;
console.log("li: ", li);
console.log("li.style.color: ", li.style.color);

console.log('\n');
// getComputedStyles, contains all the properties in css for a given element
// all the possible properties and all of the  current values
const stylesComputed = getComputedStyle(li);
console.log("stylesComputed: ", stylesComputed);
console.log("stylesComputed.color: ", stylesComputed.color);

console.log('\n');
const h2Computed = getComputedStyle(h2);
console.log("h2Computed.color: ", h2Computed.color);
console.log("h2Computed.fontSize: ", h2Computed.fontSize);

console.log('\n');
console.log('/* #### Manipulating Classes ####*/');
// This syntax gets the first class todo inside the todos id element
const todo = document.querySelector('#todos .todo');

// Adding styles one by one
// todo.style.color = 'gray';
// todo.style.textDecoration = 'line-through';
// todo.style.opacity = '50%';

console.log("todo: ", todo);
console.log("todo.getAttribute('class'): ", todo.getAttribute('class'));
todo.getAttribute('class');

// Downside of setAttribute is that it will overwrite replaces the class was there
// todo.setAttribute('class', 'done');

// Appling 2 classes, not also a good approach
todo.setAttribute('class', 'todo done');

// Removes the done class from todo
todo.classList.remove('done')

// Adds the done class to todo
todo.classList.add('done');

// Toggle adds a class on and off very useful 
// It returns true or false
todo.classList.toggle('done');

console.log('\n');
console.log('/* #### Creating Elements ####*/');

const newH2 = document.createElement('h4');
console.log("newH2: ", newH2);
// console.dir("newH2:", newH2);
newH2.innerText = 'I love animals!';
console.log("newH2: ", newH2);
newH2.classList.add('special');
console.log(newH2);

const section = document.querySelector('section');
section.appendChild(newH2);

console.log('\n');
const newImg = document.createElement('img');
console.log("img: ", newImg);
newImg.src = 'https://images.unsplash.com/photo-1445583934509-4ad5ffe6ef08?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
newImg.style.width = "300px";

section.appendChild(newImg);

const newLink = document.createElement('a');
newLink.innerText = "Funny Chimpanzee, ClickMe!";
newLink.href = 'https://www.youtube.com/watch?v=eX2qFMC8cFo';

section.appendChild(newLink);

console.log('\n');
console.log('/* #### Append, Prepend, & insertBefore ####*/');

const parentUL = document.querySelector('ul');
console.log(parentUL);

const newLi = document.createElement('li');
newLi.innerText = 'i am a new li';
parentUL.appendChild(newLi);

const newLi2 = document.createElement('li');
newLi2.innerText = 'i am 2Second li';

parentUL.insertBefore(newLi2, newLi);

const newTodo = document.createElement('li');
newTodo.innerText = 'Buy delicious cheese';

const lastTodo = document.querySelectorAll('li.todo')[2];
const ulTwo = document.querySelectorAll('ul')[2];
console.log("lastTodo: ", lastTodo);
console.log("ulTwo: ", ulTwo);

ulTwo.insertBefore(newTodo, lastTodo);

const i1 = document.createElement('i');
const i2 = document.createElement('i');
const i3 = document.createElement('i');
const i4 = document.createElement('i');
i1.innerText = 'i am italics1!';
i2.innerText = 'i am italics2!';
i3.innerText = 'i am italics3!';
i4.innerText = 'i am italics4!';
// beforebegin
ulTwo.insertAdjacentElement('beforebegin', i1);
// afterend
ulTwo.insertAdjacentElement('afterend', i2);
// afterbegin
ulTwo.insertAdjacentElement('afterbegin', i3);
// beforeend
ulTwo.insertAdjacentElement('beforeend', i4);

console.log('\n');
console.log('/* #### removeChild & remove ####*/');

const ulPeas = document.querySelector('section ul');
console.log(ulPeas);

// Searching in the whole document
// document.querySelector('section .special');

// Searching whitin the ul
// this is an easier way
const removePeas = ulPeas.querySelector('.special');
const deletedPeas = ulPeas.removeChild(removePeas);
console.log(deletedPeas);

// Deleting h1 with the new way
const h1Two = document.querySelectorAll('h1')[1];
h1Two.remove();