'use strict'

const main = document.querySelector('main')
const ask = prompt('Type in the height and width of your grid. Eg. typing in 10 will generate a 10 x 10 grid. Limit 100.')

const answer = Number(ask)
main.style.gridTemplateColumns = `repeat(${answer}, minmax(.9px, 1fr))`
main.style.gridTemplateRows = `repeat(${answer}, minmax(.9px, 1fr))`

function testDraw (answer = 0) {
  for (let i = 0; i < answer * answer; i++) {
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
    const randomRed = Math.floor(Math.random() * 256)
    const randomGreen = Math.floor(Math.random() * 256)
    const randomBlue = Math.floor(Math.random() * 256)
    c.style.backgroundColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`
  })
})
