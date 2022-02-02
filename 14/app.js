// the thing    event type    the code to run
// button       click         change the color
// input        hits return   get search results
// image        mouseover     display the img caption

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