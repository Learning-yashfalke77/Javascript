// DOM is a javascript reprsentation of a webpage 
// It is an bunch of object that you interact with js
// Each element in an HTML has its own object when it is rendered
// DOCUMENT is also a object like window
console.dir(document)
// It is created by browser automatically when go to webpage and it represent all the content of the page 

// Document object contains all the list elements present in html, It contains this elements in an array to do any change 

// ------------------------------------- Select Elements of HTML --------------------------------------------------------------------------
// ------------------------get Element by id ---------------------------------------
// Here it fetches the DOM object of that element by given id from document
const banner = document.getElementById('banner')
console.dir(banner)   //Console.dir gives the object of that element
console.log(banner)   //It give the tag info not excatly taggggg


// ------------------------get Element by tagName ---------------------------------------
// Returns collection of html elements and we get each Element here Element is an object 
// These colections is not array, it is iterable collection and we can find length, indexof and loop overit
const images = document.getElementsByTagName('img');
console.dir(images)
console.log(images)

// for (const image of images) {
//     console.log(image.src)
//     image.src = 'https://images.unsplash.com/photo-1563281577-a7be47e20db9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80'
// }

// ------------------------get Element by cclassName ---------------------------------------

const square = document.getElementsByClassName('square')
console.log(square)

// for (const image of square) {
//     image.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg'
// }


// -------------------------------------------------------------------- QUERY SELECTOR -------------------------------------------------------
// iT RETURNS FIRST ELEMENT OF THAT GIVEN QUERY SELECTION
const a = document.querySelector('p')
const b = document.querySelector('#banner')
const c = document.querySelector('.square')
console.log(a, b, c)

const d = document.querySelector('a[title="Java"]')
console.log(d)


//  ------------------------------------------------------------------- QUERY SELECTOR ALL ----------------------------------------------------
// Returns collection of al matching
const e = document.querySelectorAll('p')
console.log(e)

const links = document.querySelectorAll('p a')
for (const link of links) {
    console.log(link.href)
}

// -------------------------------------------- INNER TEXT, TEXT CONTENT and INNER HTML ----------------------------------------------------
// Inner text gives the text that is shown to user throguh any tag and we can modify it using javascript
// Text content will show theall text present in html tag and it also leave spaces where there is inside tag is present eg:: b, a
// Inner html shows all the tags inside of the tag that you have shown
const paragraph = document.querySelector('p')
console.log(paragraph.innerText)
// paragraph.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, error. Unde dolor natus dolore molestiae nemo perferendis delectus vitae, dicta est error ab esse cum quo? Reprehenderit odit doloribus dolorum?'

console.log(paragraph.textContent)

console.log(paragraph.innerHTML)
// To set any using javascript we should use innerHTML

// document.querySelector('h1').innerText = '<i>Silkie Chickens</i>'   //It will not make h1 italic
// document.querySelector('h1').innerHTML = '<i>Silkie Chickens</i>'  //Using this it will make

// We can also append to it
// document.querySelector('h1').innerHTML += '<sub>chicken</sub>'

// ------------------------------------------------- Attributes using javascript -------------------------------------------------------------
// -------------- To access attribute ------------
const firstLink = document.querySelector('a')

console.log(firstLink.href) //Here we are accessing the href from javascript object 
console.log(firstLink.getAttribute('href'))   //Here we are accessing href from the html file and hence it will show text inside href only 

// ------------------- to change attribute value -----------------
firstLink.setAttribute('href', 'https://www.google.com')

const input = document.querySelector('input[type="text"]')
input.type = 'password'
input.type = 'color'

input.setAttribute('type', 'text')


// ---------------------------------------------------- Styling using javascript -------------------------------------------------------------
// The style checks only inline style not the external style and hence it will display styleee value which was seted in inline otherwise empty
// Class List is used To add multiple class to single element
document.querySelector('h1').style.color = 'black'
document.querySelector('h1').style.fontSize = '05rem'

const allLinks = document.querySelectorAll('a')
for (const link of allLinks) {
    link.style.color = 'navy'
    link.style.textDecorationColor = 'magenta'
    link.style.textDecorationStyle = 'wavy'
}

// To see the all style used in particular tag including external tag
console.log(window.getComputedStyle(a))
console.log(window.getComputedStyle(a).fontFamily)


// Since style uses inline style which is not preferred hence we apply classes in javascript to that element
const h2 = document.querySelector('h2')
// Adding style both purple and border

//  Class list is the list of classes added to the element where we can add remove or give priority to different classes
h2.classList.add('purple')
h2.classList.add('border')

console.log(h2.classList)

h2.classList.remove('border')   // removes class

console.log(h2.classList.contains('purple'))  //It checks whether class is present or not

h2.classList.toggle('purple')  //It is used to On and Off style on that tag (NOw: off)
h2.classList.toggle('purple')  //It is used to On and Off style on that tag (NOw: onn)

// ------------------------------------------------------------- Traversing Parent Child Sibling -----------------------------------------
const firstBold = document.querySelector('b')
const p = firstBold.parentElement    // To access parent element from child element
console.log(p)

console.log(p.childElementCount)   //gives the no of child element
console.log(p.children)    //Gives html collection of element which is not an array


// Next sibling and previous sibling gives the next and previous node info
// next element sibling and previous element sibling gives the next and previous element info

const squareImg = document.querySelector('.square')
console.log(squareImg.nextElementSibling)
console.log(squareImg.previousElementSibling)


// ------------------------------------------ Create new child element ----------------------------------------------------------------------------
// ------------------ Method 1 --------------------------------
const newImg = document.createElement('img')
console.dir(newImg)
// Now adding src to new Image
newImg.src = 'https://images.unsplash.com/photo-1628387592241-3d3f1d7abaea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=625&q=80'
// Now to display in html
newImg.classList.add('square')
document.body.appendChild(newImg)     //It wll apppend at the end of the body


// ------------------------- Method 2 (Newer method)------------------------------
// APPend and prepend
const newH3 = document.createElement('h3')
newH3.innerText = 'Helllo bettttaaaa'
document.querySelector('p').append('yooooo jogindeer', newH3)

const newB = document.createElement('b')
newB.append('Tara Bhai Joginder')
document.querySelector('p').prepend(newB)



// ---------------------------------------New element and position it in adjacent not child -----------------------------------------------
// ---------------------- Method 1 ------------------------
const newh2 = document.createElement('h2')
newh2.append('Are adorable chickens...')
document.querySelector('h1').insertAdjacentElement('afterend', newh2)

// ---------------------- Method 2  (Newer Method)------------------------
const h3 = document.createElement('h3')
h3.append('Tara bhaiii ye kareaaa ')
document.querySelector('h1').after(h3)     //also have beforeeeeeee

// ----------------------------------------------------------- Remove element  ------------------------------------------------------
// Removing first bolder tag
const oldB = document.querySelector('b')
oldB.parentElement.removeChild(oldB)

// ------------- Newer method ------------------
const img = document.querySelector('img')
img.remove()