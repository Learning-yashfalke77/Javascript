const email = document.querySelector('#email')
const icon1 = document.querySelector('.icon1')
const icon2 = document.querySelector('.icon2')
const errorText = document.querySelector('.error-text')
const successText = document.querySelector('.success-text')
const btn =document.querySelector('#btn')
const form =document.querySelector('#form')
let validEmail = false
let regex = /^([_\/\*\.0-9a-zA-Z]+)@([_\/\*\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/

email.addEventListener('input' , function (evt) {
    console.log('hii');
    if (regex.test(email.value)) {
        email.style.borderColor = '#27ae60'
        icon1.style.display = 'none'
        icon2.style.display = 'block'
        errorText.style.display = 'none'
        successText.style.display = 'block'
        validEmail = true
    } else {
        email.style.borderColor = '#e74c3c'
        icon1.style.display = 'block'
        icon2.style.display = 'none'
        errorText.style.display = 'block'
        successText.style.display = 'none'
        validEmail = false
    }
})

form.addEventListener('submit' , (evt) => {
    
    
    if (validEmail === false) {
        email.style.borderColor = '#e74c3c'
        evt.preventDefault()
        console.log(validEmail);
        icon1.style.display = 'block'
        errorText.style.display = 'block'
    }
})