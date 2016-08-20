const remote = require('electron').remote
const main = remote.require('./main.js')

let cloneButton = document.createElement('button')
cloneButton.textContent = 'Clone Splashkit'

cloneButton.addEventListener('click', () => {
  main.cloneSplashKit()
}, false)

document.body.appendChild(cloneButton)