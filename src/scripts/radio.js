const radioGroup = document.querySelectorAll('input[name="taxonomy"]')
const form = document.querySelector('form')

let labelGroup = []

radioGroup.forEach(radio => {
  const newLabel = document.querySelector(`label[for="${radio.id}"]`)
  setLabelBehavior(newLabel)
  labelGroup.push(newLabel)
})

function setLabelBehavior(element) {
  element.addEventListener('click', () => changeColors(element))
}

function changeColors(element) {
  removeColor()
  element.classList.add('text-white')
  element.classList.add('border-white')
}

function removeColor() {
  labelGroup.forEach(label => {
    label.classList.remove('text-white')
    label.classList.remove('border-white')
  })
}
