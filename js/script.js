'use strict'

const main = document.querySelector('main')
function testDraw (num) {
  for (let i = 0; i < num; i++) {
    const n = document.createElement('div')
    n.classList.add('draw-cell')
    main.append(n)
  }
}

testDraw(16 * 16)
const cell = document.querySelectorAll('.draw-cell')
const cellArray = Array.from(cell)
cellArray.forEach((c) => {
  c.addEventListener('mouseover', () => {
    c.style.backgroundColor = 'red'
  })
})
