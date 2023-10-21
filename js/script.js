'use strict'

const main = document.querySelector('main')
const ask = prompt('How many elements do you want on your grid?')

const rootOfNumber = Math.floor(Math.pow(ask, 1 / 2)) // this should make sure we only get integers I think

main.style.gridTemplateColumns = `repeat(${rootOfNumber}, 50px)`
main.style.gridTemplateRows = `repeat(${rootOfNumber}, 50px)`

function testDraw (ask = 0) {
  for (let i = 0; i < ask; i++) {
    const n = document.createElement('div')
    n.classList.add('draw-cell')
    main.append(n)
  }
}

testDraw(ask)
const cell = document.querySelectorAll('.draw-cell')
const cellArray = Array.from(cell)
cellArray.forEach((c) => {
  c.addEventListener('mouseover', () => {
    c.style.backgroundColor = 'red'
  })
})
