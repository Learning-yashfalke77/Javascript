// AJAX stands for Asynchronous  javascript and XML
// AJAX is used for making request through code or contacting with server
// Ajax does not return HTML, CSS and JSS it returns data in the form of JSON

// API is -- Application program interface
// Web APi -- Application program interface for web server

// Earlier server used to send data using format of xml but now JSON is usedddddd

// ---------------------------------------------- json -------------------------------------------------------------------------------
// AJAJ: Asynchronous Javascript and JSON
// JSON Stands for JAVASCRIPT OBJECT NOTION
// It contains object which have have key value pairs and key should be double quotes onlyyy

// ---- json formatter and validator : https://jsonformatter.curiousconcept.com/# -----

const data = `{ "ticker": { "base": "BTC", "target": "USD", "price": "48819.75843322", "volume": "74049.16781048", "change": "32.79988297" }, "timestamp": 1629525183, "success": true, "error": "" }`

//  First we have to convert it into javascript format objec

const parsedData = JSON.parse(data)
console.log(data, parsedData.ticker.price)

// To convert javascript object to JSON
const dog = {
    breed: 'lab',
    color: 'black',
    isALive: true,
    owner: undefined
}

console.log(dog, JSON.stringify(dog))

// -----------------------------------------------------api ---------------------------------------------------------------------
// For api testing we used software called postman

// -------------------------------------------------------- query string ------------------------------------------------------------
// URL: /search/shows/?q=:query where after q is a query used for searching  and :query is a variable

// Some of api require to add headers means html or json or plain text

// ------------------------------------------------------Request ----------------------------------------------------------------
//  1......   XMLHttpRequest
// It does not support promise
const req = new XMLHttpRequest()

req.onload = function () {
    console.log('ALL DONE WITH REQUEST!!!')
    const data1 = JSON.parse(this.responseText)
    console.log(data1.ticker.price)
}

req.onerror = function () {
    console.log('errorrr')
    console.log(this)
}

req.open('GET', 'https://api.cryptonator.com/api/full/btc-usd')
req.send()

// 2...Fetch API
// Much better than XHR 
// Based on promise and always removes promise

fetch('https://api.cryptonator.com/api/full/btc-usd')
    .then(res => {
        console.log('Got Response')
        console.log(res)  //Checks whther connection is done or not , it does not give data
        return res.json()
    })
    .then(data => {
        console.log('Parsed Data ...')
        console.log(data.ticker.price)
        return fetch('https://api.cryptonatgggor.com/api/full/btc-usd')  //for checj=king catch
    })
    .then(res => {
        console.log('Got Response')
        console.log(res)
        return res.json()
    })
    .then(data => {
        console.log('Parsed Data ...')
        console.log(data.ticker.price)
    })
    .catch(err => {
        console.log('uhohh cause error', err)
    })

// 3.. Using async function
const fetchBitcoinPrice = async () => {
    try {
        const res = await fetch('https://api.cryptonator.com/api/full/btc-usd')
        const data = await res.json()
        console.log(data.ticker.price)
    } catch (error) {
        console.log('uhohh cause error', error)
    }
}

fetchBitcoinPrice()

// ----------------------------------------------------------------------------------- Axioosss ----------------------------------------------
// It is a library used to fetch api based on fetchand  promise only
// It works on both side client side and server side
// It has data also not to do .json

axios.get('https://api.cryptonator.com/api/full/btc-usd')
    .then(res => {
        console.log('------------------- axion ----------------------')
        console.log(res.data.ticker.price)
    })
    .catch(err => {
        console.log('uhohh cause error', err)
    })

// Using async function
const fetchBitcoinPrice1 = async () => {
    try {
        const res = await axios.get('https://api.cryptonator.com/api/full/btc-usd')
        console.log('------------------- axion async --------------------------')
        console.log(res.data.ticker.price)
    } catch (error) {
        console.log('uhohh cause error', error)
    }
}
fetchBitcoinPrice1()


// // ---------------------- addin header in axios--------------

const jokes = document.querySelector('#jokes')
const createNewJoke = document.querySelector('#joke-btn')

const createDadJoke = async () => {
    try {
        const config = { headers: { Accept: 'application/json' } }
        const res = await axios.get('https://icanhazdadjoke.com/', config)
        return res.data.joke

    } catch (error) {
        console.log('uhohh cause error', error)
    }
}

const getDadJoke = async () => {
    try {
        const joke = await createDadJoke()
        const newJoke = document.createElement('li')
        newJoke.append(joke)
        jokes.append(newJoke)
    } catch (error) {
        console.log('uhohh cause error', error)
    }
}

createNewJoke.addEventListener('click', () => {
    getDadJoke()
})
