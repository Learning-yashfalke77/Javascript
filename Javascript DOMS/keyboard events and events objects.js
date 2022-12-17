//  ----------------------------------------- Event objects ----------------------------------------------------
// an event object is constructed directly whenever the event is performed and this object contains all info of that particular event

document.querySelector('button').addEventListener('click', function (evt) {
    console.log(evt)
    alert('clickkk!')
})

const input = document.querySelector('input')
input.addEventListener('keydown', function(evt) {
    console.log('keydown')
    console.log(evt.key)     //Gives name of what is pressed i.e. letters
    console.log(evt.code)     //gives what is pressed
})
input.addEventListener('keyup', function() {
    console.log('keyup')
})

// To check keyboard event of entire page
window.addEventListener('keydown', function(evt) {
    // console.log(evt.key)
    switch (evt.code) {
        case 'ArrowUp':
            console.log('thara bhai UPPP!!! karega')
            break;

        case 'ArrowDown':
            console.log('thara bhai Down!!! karega')
            break;
    
        default:
            console.log('Thara bhaii ye karega, vo karegaa')
            break;
    }
})