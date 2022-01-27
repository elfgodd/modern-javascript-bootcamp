/* getElementById */

// Printing the bear photo, Selecting the bear id
// This will print it out as HTML
console.log(document.getElementById('bear-photo'));

// This will return an Object, of the image id bear-photo
const img = document.getElementById('bear-photo');
console.log(img);

// Try with .dir, same results but the tab will be open
// console.dir(img);

// Wrong id will return null, with no errors
console.log(document.getElementById('BEAR-photo'));

const p = document.getElementById('main');
console.log(p);

/* getElementsByTagName */

// Getting all the p tags
console.log('p: ',document.getElementsByTagName('p'));

// Getting all the li 
console.log('li: ', document.getElementsByTagName('li'));

// Getting all the h3, element doesn't exist,
// will return an empty collection HTMLCollection []
console.log('h3: ', document.getElementsByTagName('h3'));

// HTMLCollection? Is an array like object that is not an array

// Getting all the inpunts in the file
console.log('input: ',document.getElementsByTagName('input'));
const inputs = document.getElementsByTagName('input');
console.log('inputs: ',inputs);
console.log('inputs[0]: ',inputs[0]);
console.log('inputs[1[: ', inputs[1]);
console.log('inputs[2]: ', inputs[2]);
// inputs[3]: doesn't exist, will return undefined
console.log('inputs[3]: ', inputs[3]);
console.log('inputs.length: ', inputs.length);
// Error inputs.pop();
// Error inputs.push('input')

console.log('\n');
for (let input of inputs) {
  console.log('input: ', input);
}

console.log('\n');
const arr = [...inputs];
console.log('arr: ', arr);

console.log('\n');
// getting the values of the inputs that the user has typed
// fill the inputs with chars before running the func
// copy and paste this function in the browser
for (let input of inputs) {
  
  console.log(input.value);
}

console.log('\n');
