import template from './counter.thtml'
import './counter-fonts'

addEventListener('DOMContentLoaded', () => {
  const counter = document.getElementById('counter')
  counter.innerHTML = template
  const display = counter.getElementsByClassName('display')[0]

  let count = 0
  setInterval(() => {
    display.textContent = String(++count)
  }, 1000)
})
