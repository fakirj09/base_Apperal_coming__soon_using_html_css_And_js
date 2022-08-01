let emailInput = document.getElementById('email-ad')
let errorIcon = document.getElementsByClassName('icon-error')
let textError = document.getElementsByClassName('text-error')
let filter = /^([a-z\d\.-]+)@([a-z\d\-]+).([a-z]+)$/i
document.getElementById('submit').addEventListener('click', validateEmail)

function validateEmail(event) {
  if (filter.test(emailInput.value)) {
    emailInput.classList.remove = 'invalid'
  } else {
    event.preventDefault()
    emailInput.className = 'invalid'
    errorIcon[0].setAttribute('style', 'visibility: visible;')
  }
}
