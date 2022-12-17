const username = document.querySelector('#name')
const email = document.querySelector('#email')
const phone = document.querySelector('#phone')
const form = document.querySelector('#pico')
const failure = document.querySelector('#failure')
const success = document.querySelector('#success')
let validUsername = false
let validEmail = false
let validPhone = false
$('#success').hide()
$('#failure').hide()

username.addEventListener('input', (evt) => {
    //Validate Name here
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){3,14}$/
    let str = username.value
    if (regex.test(str)) {
        username.classList.remove('is-invalid')
        validUsername = true
    } else {
        username.classList.add('is-invalid')
        validUsername = false
    }
})
email.addEventListener('input', (evt) => {
    let regex = /^([_\/\*\.0-9a-zA-Z]+)@([_\/\*\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/
    let str = email.value
    if (regex.test(str)) {
        email.classList.remove('is-invalid')
        validEmail = true
    } else {
        email.classList.add('is-invalid')
        validEmail = false
    }
})
phone.addEventListener('input', (evt) => {
    let regex = /^([0-9]){10}$/
    let str = phone.value
    if (regex.test(str)) {
        phone.classList.remove('is-invalid')
        validPhone = true
    } else {
        phone.classList.add('is-invalid')
        validPhone = false
    }
})

form.addEventListener('submit', (evt) => {
    evt.preventDefault()

    if (validPhone && validUsername && validPhone) {
        
        const d_username = form.elements.name
        const d_email = form.elements.email
        const d_phone = form.elements.phone
        const d_address = form.elements.address
        const d_gender = form.elements.gender

        console.log(d_username.value)
        console.log(d_email.value)
        console.log(d_phone.value)
        console.log(d_gender.value)
        console.log(d_address.value)

        success.classList.add('show')
        // failure.classList.remove('show')
        $('#failure').hide()
        $('#success').show()

        reset()
    } else {
        failure.classList.add('show')
        // success.classList.remove('show')
        $('#failure').show()
        $('#success').hide()
        reset()
    }

})

function reset() {
    form.elements.name.value = ''
    form.elements.email.value = ''
    form.elements.phone.value = ''
    form.elements.address.value = ''
    form.elements.gender.value = ''
}