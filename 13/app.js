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
console.log('\n');
console.log('\n');
console.log('\n');
console.log('\n');
console.log('\n');
console.log('\n');
console.log('\n');
console.log('\n');
console.log('\n');
console.log('\n');
console.log('\n');
console.log('\n');
console.log('\n');