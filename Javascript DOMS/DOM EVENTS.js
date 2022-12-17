// Three ways to write js events
// 1) inline  2) in a javascript   3) add event listener


// Here we are only defining the function and passing not calling the function, the function will be called when onclick will happen

// const btn = document.querySelector('#version2')
// btn.onclick = function () {
//     console.log('You clicked me!!!!')
// }

// btn.onmouseenter = function () {
//     console.log("AHHHHHHHHHHH!!!!")
//     console.log('Stop touching me !!!!!')
// }

// document.querySelector('h1').onclick = () => {
//     alert('THARA Bhaii JoginDeer')
// }

// const btn3 = document.querySelector('#version3')
// btn3.addEventListener('dblclick', function () {
//     alert('yooooo jogindeer')
// })

// function twist() {
//     console.log('Twist')
// }

// function shout() {
//     console.log('Shout')
// }

// const tas =document.querySelector('#tas')

// // tas.onclick = twist   //IT will show only shout henc we can not use multiple callback
// // tas.onclick = shout 
 
// tas.addEventListener('click', shout, {once: true})   //Here two callbacks will work
// tas.addEventListener('click', twist)


// ----------------------------------------This ----------------------------------------------------
const randomColor = function () {
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)
    return `rgb(${r}, ${g}, ${b})`
}

const buttons = document.querySelectorAll('.this')

for (const button of buttons) {
    button.addEventListener('click', colorChanger)
}

const h1s = document.querySelectorAll('.h1s')

for (const h1 of h1s) {
    h1.addEventListener('click', colorChanger)
}

// To avoid duplication of code adding a function
// So to refer the event listener of that element we can use this
function colorChanger () {
    console.log(this)
    this.style.backgroundColor = randomColor()
    this.style.color = randomColor()
}