const h1 = document.querySelector('h1');
console.log(h1);
console.log(h1.innerText);

console.log('\n');
// ul has nested li inside
const ul = document.querySelector('ul');
console.log(ul.innerText);

console.log('\n');
console.log(document.body.innerText);

console.log('\n');
// Change the "My WebPage" to "I'm hungry"
h1.innerText = "I'm hungry";

console.log('\n');
// Will change all the ul and li, to a single ul
ul.innerText = "I'm a big UL";

console.log('\n');
const h2 = document.querySelector('h2');
console.log(h2);
console.log(h2.textContent);
h2.textContent = "I'm not hungry";
// .textContent takes all the spacing, all the text and hidden stuff
console.log(h2.textContent);
