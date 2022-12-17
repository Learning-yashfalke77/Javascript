// Deleting comment on its cicking
// const lis = document.querySelectorAll('li')
// for (const li of lis) {
//     li.addEventListener('click', function () {
//         li.remove()
//     })
// }
// But comment added through will not workk becuse li in html will be removed event listener is on them
// To overcome this we use event delegation


const commentForm = document.querySelector('#commentForm')
const tweets = document.querySelector('#tweets')

commentForm.addEventListener('submit', function (evt) {
    evt.preventDefault();
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
    tweets.append(newTweet)
}

// For event delegation select its parent element check the target clicked
tweets.addEventListener('click', function (evt) {
    evt.target.nodeName === 'LI' && evt.target.remove()
})
