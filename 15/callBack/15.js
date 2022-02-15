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

// setTimeout(() => {
//   btn.style.transform = `translateX(100px)`
//   setTimeout(() => {
//     btn.style.transform = `translateX(200px)`
//     setTimeout(() => {
//       btn.style.transform = `translateX(300px)`
//       setTimeout(() => {
//         btn.style.transform = `translateX(400px)`
//       }, 2500)
//     }, 2000)
//   }, 1500)
// }, 1000)

// const moveX = (element, amount, delay) => {
//   setTimeout(() => {
//     element.style.transform = `translateX(${amount}px)`
//   }, delay)
// }

// moveX(btn, 600, 2000)

// const moveX = (element, amount, delay, callback) => {
//   setTimeout(() => {
//     element.style.transform = `translateX(${amount}px)`
//     if (callback) callback()
//   }, delay)
// }

// moveX(btn, 100, 1000, () => {
//   moveX(btn, 200, 1000, () => {
//     moveX(btn, 300, 1000, () => {
//       moveX(btn, 400, 1000, () => {
//         moveX(btn, 500, 1000)
//       })
//     })
//   })
// })

const moveX = (element, amount, delay, onSuccess, onFailure) => {
  setTimeout(() => {
    const bodyBoundary = document.body.clientWidth
    const elRight = element.getBoundingClientRect().right
    const currLeft = element.getBoundingClientRect().left
    if (elRight + amount > bodyBoundary) {
      // console.log('done - cannot go that far')
      onFailure()
    } else {
      element.style.transform = `translateX(${currLeft + amount}px)`
      onSuccess()
    }
  }, delay)
}

// moveX(btn, 100, 1000, () => {
//   moveX(btn, 100, 1000, () => {
//     moveX(btn, 100, 1000, () => {
//       moveX(btn, 100, 1000, () => {
//         moveX(btn, 1000, 1000)
//       })
//     })
//   })
// })

moveX(
  btn,
  100,
  1000,
  () => {
    // success
    moveX(
      btn,
      400,
      1000,
      () => {
        // success
        moveX(
          btn,
          700,
          1000,
          () => {
            // success
            console.log('really, we still have screen left?')
          },
          () => {
            // fail
            alert('cannot move further')
          }
        )
      },
      () => {
        // fail
        alert('cannot move further')
      }
    )
  },
  () => {
    // fail
    alert('cannot move further')
  }
)
