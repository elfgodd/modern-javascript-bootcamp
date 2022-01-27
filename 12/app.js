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