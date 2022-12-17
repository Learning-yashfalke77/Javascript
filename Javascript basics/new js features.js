// Giving Default value to parameters
// Alqays write default param at last or at 2nd position not first
function rollDie(numSides = 6) {
    return Math.floor(Math.random() * numSides) + 1
}

//  --------------------------------------------------------------- Spread in Function CALLS----------------------------------------------------

console.log(Math.max(31, 4, 5, 3, 3, 1, 2, 7, 6, 4, 2, 53546))


const nums = [31, 4, 5, 3, 3, 1, 2, 7, 6, 4, 2, 53546]
console.log(nums)
console.log(...nums)                   //Will give array with spreadedddd

console.log(Math.max(...nums))

// ------------------------------------------------------------- SPREAD in arrays ------------------------------------------------------
// Copy the contents of one array to another
const cats = ['Blue', 'Scout', 'Rocket']
const dogs = ['Rusty', 'Wyatt']

const allPets = [...cats, ...dogs]
console.log(allPets)


// ------------------------------------------------------------- SPREAD in objects ------------------------------------------------------
const feline = { legs: 4, family: 'Felidae' };
const canine = { isFurry: true, family: 'Canine' }

const yooo = { ...feline, ...canine }   //CONFLICTING PROPERTY WILL HAVE THE DOMAINANCE WHICH COMES LATESTS
console.log(yooo)


//  ---------------------------------------------------------------SPREAD ARRAY IN AN OBJECT --------------------------------------------------
const nums1 = [1, 2, 3, 4]
const numsObj = { ...nums1 }    //Indeices of array  will be key 
console.log(numsObj)


// -----------------------------------------------------------------ARGUMENTS and REST -----------------------------------------------------
// It is used in function argument where you don'tknow how much arguments wil be passed to the functions
// So argument concept is used 
// Arugments collects all given param put in a look like array structure, but it is not a array
// Its not array because we can't use all the methods like push pop , reduce maps etc...

function add() {
    console.log(arguments);
    // arguments.reduce((total, n) => (total + n))   //Will raise a error 
}

// To overcome this issue rest concept is used

function add1(...numbers) {
    const result = numbers.reduce((total, n) => (total + n))
    console.log(result)
}

// Here ...numbers convert all the params into real arrays

add1(1, 24, 2435, 35345, 2, 4567, 335, 3242, 3, 57, 21,)

// We can pass normal arguments to this rest params also but rest params should be at last

function raceResults(gold, silver, ...everyoneElse) {
    console.log(`Gold medal goes To: ${gold}`)
    console.log(`silver medal goes To: ${silver}`)
    console.log(`And thanks to everyone else : ${everyoneElse}`)
}

raceResults('Yash', 'Medha', 'yoooo', 'Nikhil', 'Kadam', 'siddhesh')

// We cannot do this in arrow functions............

// -------------------------------------------------------------- Destructuring arrays -------------------------------------------------
const scores = [929321, 899341, 888336, 772739, 543671, 243567, 111934]

const highscore = scores[0]
const secondHighscore = scores[1]

// New way we can do this

const [gold, silver, bronze, ...everyoneElse] = scores
console.log(gold, silver, bronze, everyoneElse)


//  --------------------------------------------------------------- Destructring Objects -------------------------------------------------
const user = {
    email: 'harvey@gmail.com',
    password: 'yooooo',
    firstName: 'Harvey',
    lastName: 'Milk',
    born: 1930,
    died: 1978,
    bio: '-------------------------------- link of insta ---------------',
    city: 'San Francisco',
    state: 'California'
}

// const firstName = user.firstName;

// New wayyyyy
const { email, firstName, lastName, city, bio } = user;   //Here variable name should be same name to that of key
console.log(email, firstName, lastName, city, bio)

const { born: birthYear } = user     //Here we are declaring our own variable name not the same as key of object
console.log(birthYear)

// To give default value to variable
const user2 = {
    email1: 'stacy@gmail.com',
    firstName1: 'stacy',
    lastName1: 'Milk',
    born1: 1930,
    city1: 'Tulsa',
    state1: 'Oklahoma'
}

const { city1, state1, died: deathYear = 'N/A' } = user2
console.log(city1, state1, deathYear)

// ----------------------------------------------------------- Destructuring function params ---------------------------------------------
const user3 = {
    email: 'harvey@gmail.com',
    password: 'yooooo',
    firstName: 'Harvey',
    lastName: 'Milk',
    born: 1930,
    died: 1978,
    bio: '-------------------------------- link of insta ---------------',
    city: 'San Francisco',
    state: 'California'
}

function fullName({ firstName: firstName2, lastName: lastName2 }) {
    console.log(firstName2, lastName2)
}

fullName(user3)

const movies = [
    {
        title: 'Amadeus',
        score: 99,
        year: 1984,
    },
    {
        title: 'Sharknado',
        score: 35,
        year: 2013,
    },
    {
        title: '13 going on 30',
        score: 70,
        year: 2004,
    },
    {
        title: 'Stand by me',
        score: 95,
        year: 1986,
    },
    {
        title: 'Waterworld',
        score: 62,
        year: 1995,
    },
    {
        title: 'Jingle all the way',
        score: 71,
        year: 1986,
    },
    {
        title: 'Parasite',
        score: 95,
        year: 2019,
    },
    {
        title: 'Notting Hill',
        score: 90,
        year: 1999,
    },
    {
        title: 'Alien',
        score: 90,
        year: 1979,
    },
]
const myBest = movies.filter((movie) => movie.score >= 90)   //Without destructuring
const myBest1 = movies.filter(({ score }) => score >= 90)     //With destructuring
console.log(myBest, myBest1)

const movieInfo = movies.map((movie) => {
    return `${movie.title} (${movie.year}) is rated ${movie.score}`
})
const movieInfo1 = movies.map(({title, score, year}) => {
    return `${title} (${year}) is rated ${score}`
})

console.log(movieInfo, movieInfo1)