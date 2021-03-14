const container = document.querySelector('.container')
const button = document.querySelector('button')
const printHex = document.querySelector('.printHex h2')
const hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
let hexVal = ''

function changeGradient() {
  let hexOne = '#'
  let hexTwo = '#'

  for (let i = 0; i < 6; i++) {
    const index = Math.floor(Math.random() * hexValues.length)
    hexOne += hexValues[index]
  }

  for (let i = 0; i < 6; i++) {
    const index = Math.floor(Math.random() * hexValues.length)
    hexTwo += hexValues[index]
  }

  hexVal = `linear-gradient(45deg, ${hexOne}, ${hexTwo})`
  container.style.background = hexVal
  printHex.textContent = hexVal
}

button.addEventListener('click', changeGradient)
