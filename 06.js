for(let i = 1; i <= 5; i++) {
  console.log('Hello: ', i);
}
for(let i = 1; i <= 10; i+=3) {
  console.log('hi +=3: ', i);
}
for(let i = 1; i <= 32; i *= 2) {
  console.log('bye *=: ', i);
}
for(num = 1; num <= 5; num++) {
  console.log(`${num}x${num} =`, num * num);
  console.log(`${num}x${num} = ${num * num}`);
}
for(let i = 200; i >= 0 ; i -= 25) {
  console.log('does it work?: ', i);
}