// --------------------------------------------------------------- call stack -------------------------------------------------------
// const multiply = (x, y) => (x * y)

// const square = (x) => (multiply(x, x))

// const isRightTraingle = (a, b, c) => (
//     square(a) + square(b) === square(c)
// )

// isRightTraingle(3, 4, 5)

// ----------------------------------------------------------- web api and single threaded---------------------------------------------
// Javascript is a single threaded
// It can do one thing at a time
// set interval and settimeout is given to function and js exectues rest and after these time comes it executes the settimeinterval  callback function

// ---------------------------------------------------------- hell callback -------------------------------------------------------------
// setInterval(() => {
//     document.body.style.backgroundColor = 'red'
//     setInterval(() => {
//         document.body.style.backgroundColor = 'yellow'
//         setInterval(() => {
//             document.body.style.backgroundColor = 'green'
//             setInterval(() => {
//                 document.body.style.backgroundColor = 'blue'
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);

// 2nd Method
// const colorDelayed = function(newColor, interval, doNext){
//     setInterval(() => {
//         document.body.style.backgroundColor = newColor
//         doNext && doNext()
//     }, interval);
// }

// colorDelayed('red', 2000, () => {
//     colorDelayed('orange', 2000, () => {
//         colorDelayed('green', 2000, () => {
//             colorDelayed('blue', 2000)
//         })
//     })
// })

// searchMovieAPI('amadeus', () =>{
//     saveToMyDB(()=>{
//         // If it Works, run this.
//     }, () => {
//         // If it doesn't work, run thisss
//     })
// }, () => {
//     //If api is done or its badddd
// })

// This is dis advantage of call back hell we have to do multiple nesting of callback whic is very tedious and difficult to understand
// Because to make delay and other above example we have to use callback

// ---------------------------------------------------------------------Promise ----------------------------------------------------------
// Promise is an object representing the eventual completion or failure of asynchronous operation
// In api we have to make to callback one for success and other for failure this leads to nesting of callback


// -------------- Using Callback ---------------
const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500
    setTimeout(() => {
        if (delay > 4000) {
            failure('Connection Timeout :(')
        } else {
            success(`Here is your fake data from ${url}`)
        }
    }, delay);
}

// Taking book
// fakeRequestCallback('books.com', (response) => {
//     console.log('IT Workedd!!')
//     console.log(response)
//     // Taking 2nd page
//     fakeRequestCallback('books.com/page2', (response) => {
//         console.log('ITT Worked Again')
//         console.log(response)
//         fakeRequestCallback('books.com/page3', (response) => {
//             console.log('ITT Worked Again')
//             console.log(response)
//         }, (response) => {
//             console.log('Ahh shitt error again : ', response)
//         })
//     }, (response) => {
//         console.log('Ahh shitt error again : ', response)
//     })

// }, (response) => {
//     console.log('ERROR!!!!!!')
//     console.log(response)
// })

//  So here we can acees the page only after we access the book so to do that we have nest it in a callback 
// If we do outside of that we get page2 dirctly without book and whathappens if book has got errored in accessing
// We can access the page if we can acess the book 

// -------------------------------------- Using Promisess-----------------------
const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}

// Then is for success and catch is for failure
// fakeRequestPromise('yelp.com/api/coffee/page1')
//     .then(() => {
//         console.log('It worked!!!')

//         fakeRequestPromise('yelp.com/api/coffee/page2')
//             .then(() => {
//                 console.log('It workeddd!!!!! (page2)')

//                 fakeRequestPromise('yelp.com/api/coffee/page3')
//                     .then(() => {
//                         console.log('It worked!!! (page3)')
//                     })
//                     .catch(() => {
//                         console.log('oh no errorr (page3)')
//                     })
//             })
//             .catch(() => {
//                 console.log('oh no errorr (page2)')
//             })
//     })
//     .catch(() => {
//         console.log('oh no errorr ')
//     })

// ---------------------------- 2nd methodddd---------------------------
// fakeRequestPromise('yelp.com/api/coffee/page1')
//     .then((data) => {
//         console.log('It worked:', data)
//         return fakeRequestPromise('yelp.com/api/coffee/page2')
//     })
//     .then((data) => {
//         console.log('It worked (page 2):', data)
//         return fakeRequestPromise('yelp.com/api/coffee/page3')
//     })
//     .then((data) => {
//         console.log('It worked (page 3):', data)
//     })
//     .catch((error) => {
//         console.log('Oh no this request is failed:', error)
//     })

// ---------------------------------------------------------- Creating Our Promises ----------------------------------------------------------
// const fakePromise = (url) => {
//     return new Promise((resolve, reject) => {
//         const rand = Math.random()
//         setTimeout(() => {
//             if (rand < 0.7) {
//                 resolve('Your fake data here')
//             }
//             reject('Request error')
//         }, 1000);
//     })
// }

// fakePromise('/dogs/1')
//     .then((data) => {
//         console.log('DOne with requests')
//         console.log(data)
//     })
//     .catch((err) => {
//          console.log('Errors')
//          console.log(err)
//     })

// ----------------------------- Color Change ---------------------
// const colorChanger = (color, delay) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             document.body.style.backgroundColor = color
//             resolve('color Changed')
//         }, delay);
//     })
// }

// colorChanger('red', 2000)
//     .then((data) => {
//         console.log(data)
//         return colorChanger('orange', 2000)
//     })
//     .then((data) => {
//         console.log(data)
//         return colorChanger('green', 2000)
//     })
//     .then((data) => {
//         console.log(data)
//         return colorChanger('yellow', 2000)
//     })
//     .then((data) => {
//         console.log(data)
//         return colorChanger('blue', 2000)
//     })

// ----------------------------------------------------------------- Async Functions ---------------------------------------------------------
// a newer cleaner syntax for working with async code
// Async automatically always return promise
// The promise is resolved by returning something
// The promise is rejected by throwing error
// --------------- Syntax ----------------------------

// async function hello() {
// }

// const sing = async () => {
// }

async function sing() {
    let rand = Math.random()
    if (rand > 0.5) {
        return 'Yoooo Jogindeeer'
    } else {
        throw new Error('Uh Ohhhhhh')
    }
}

sing()
    .then(data => {
        console.log('donee', data)
    })
    .catch(err => {
        console.log('err', err)
    })

// --------------------------------------------------------- Await --------------------------------------------------------------------------
// We can only use await keyword inside of functions declared with async
// Await will pause the execution of function
// const colorChanger1 = (color, delay) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             document.body.style.backgroundColor = color
//             resolve('color Changed')
//         }, delay);
//     })
// }
// async function rainbow() {
//     await colorChanger1('red', 2000)
//     await colorChanger1('orange', 2000)
//     await colorChanger1('yellow', 2000)
//     await colorChanger1('green', 2000)
//     await colorChanger1('purple', 2000)
//     await colorChanger1('blue', 2000)
//     await colorChanger1('violet', 2000)
//     return "All done"
// }

// rainbow()
//     .then((data) => { console.log(data) })

// To use data of promise in await

const fakeRequestPromise1 = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}

async function fake() {
    try {
        let data1 = await fakeRequestPromise1('page/1')
        console.log(data1)
        let data2 = await fakeRequestPromise1('page/2')
        console.log(data2)
    } catch (e) {
        console.log('Error Occured')
        console.log('Error is ', e)
    }
}
fake()