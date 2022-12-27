const buttons = document.querySelector('.buttons')
const instantButton = document.querySelector('.button')

const cloneButton = (root, button) => {
   const clonedButton = document.createElement('button')
   clonedButton.type = 'button'
   clonedButton.innerHTML = button.innerHTML
   button.addEventListener('click', () => {
      root.insertAdjacentElement('afterbegin', clonedButton)
   })
}

cloneButton(buttons, instantButton)

const [button] = document.getElementsByTagName('button');
button.addEventListener('click', () => cloneButton(buttons, instantButton));


