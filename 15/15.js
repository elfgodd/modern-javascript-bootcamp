const repeat = (str, times) => {
  let result = ''
  for (let i = 0; i < times; i++) {
    result += str
  }
  return result
}

const scream = (str) => {
  return str.toUpperCase() + '!!!'
}

const getRantText = (phrase) => {
  let text = scream(phrase)
  let rant = repeat(text, 8)
  return rant
}

const makeRant = (phrase, el) => {
  const h1 = document.createElement('h1')
  h1.innerText = getRantText(phrase)
  el.appendChild(h1)
}
console.log('HELLO')
makeRant('I hate mayonnaise', document.body)
// makeRant('If you have to cough, please cover your mouth', document.body)

console.log('\n')
console.log('/* #### Welcome to Callback Hell #### */')

const btn = document.querySelector('button')

setTimeout(() => {
  btn.style.transform = `translateX(100px)`
  setTimeout(() => {
    btn.style.transform = `translateX(200px)`
    setTimeout(() => {
      btn.style.transform = `translateX(300px)`
      setTimeout(() => {
        btn.style.transform = `translateX(400px)`
      }, 2500)
    }, 2000)
  }, 1500)
}, 1000)
