// Prevent default removes the default behaviour of form i.e taking to other url after submitting i.e. action
// Input values gives the user input 

// Two vays to accept user data  1) Query Selector of input
// 2) using formQuerySelector.elements.name.value

const commentForm = document.querySelector('#commentForm')
commentForm.addEventListener('submit', function (evt) {
    evt.preventDefault();

    // ----------------------------- Method 1 ---------------------
    // const usernameInput = document.querySelectorAll('input')[0]
    // const commentInput = document.querySelectorAll('input')[1]
    // console.log(usernameInput.value, commentInput.value)

    // ------------------------------ Method 2 -----------------------
    const usernameInput = commentForm.elements.username
    const commentInput = commentForm.elements.comment

    createTweet(usernameInput.value, commentInput.value)

    usernameInput.value = ''
    commentInput.value = ''

})

const createTweet = (username, comment) => {
    const newTweet = document.createElement('li')
    const newBTag = document.createElement('b')
    newBTag.append(username)
    newTweet.append(newBTag)
    newTweet.append(` - ${comment}`)
    const tweets = document.querySelector('#tweets')
    tweets.append(newTweet)
}

// ------------------------------------------------------------- Input events ----------------------------------------------------------------

const input = document.querySelector('#events')
const h1 = document.querySelector('#dynamicH1')

//  Event takes place only when the input would be inactive after typin
// input.addEventListener('change', function (p) {
//     console.log(input.value)
// }) 

// Event takes place at typing
input.addEventListener('input', function () {
    h1.innerText = input.value
})


// ---------------------------------------------------------------- Event Bubbling ---------------------------------------------------------
const changeColor = document.querySelector('.cc')
const container = document.querySelector('.container')

const randomColor = function () {
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)
    return `rgb(${r}, ${g}, ${b})`
}


// Changing color of container
changeColor.addEventListener('click', function (evt) {
    evt.stopPropagation()
    container.style.backgroundColor = randomColor()
})

// Hiding content of container
container.addEventListener('click', function () {
    container.classList.toggle('hide')
})

// Event clashing , event of container occurs first and then background color also change on clicking button
// To stop this evt.stopPropogating