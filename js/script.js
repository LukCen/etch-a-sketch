'use strict'

const main = document.querySelector('main')
const ask = prompt('How many elements do you want on your grid?')

const rootOfNumber = Math.floor(Math.pow(ask, 1 / 2)) // this should make sure we only get integers I think
const answer = Number(ask)
const elementSize = answer / rootOfNumber
main.style.gridTemplateColumns = `repeat(${rootOfNumber}, ${elementSize}px)`
main.style.gridTemplateRows = `repeat(${rootOfNumber}, ${elementSize}px)`

function testDraw (ask = 0) {
  for (let i = 0; i < ask; i++) {
    const n = document.createElement('div')
    n.classList.add('draw-cell')
    n.style.height = `${elementSize}px`
    n.style.width = `${elementSize}px`
    n.style.minHeight = `${rootOfNumber}px`
    n.style.minWidth = `${rootOfNumber}px`
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
