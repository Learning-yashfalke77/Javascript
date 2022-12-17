// ------------------------------------------------------- For Each ---------------------------------------
// For arrays only 
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

nums.forEach(function(num) {
    if (num % 2 === 0) {
        console.log(num)
    }
});


const movies = [
    {
        title: 'Amadeus',
        score: 99
    },
    {
        title: 'Stand by me',
        score: 95
    },
    {
        title: 'Parasite',
        score: 95
    },
    {
        title: 'Alien',
        score: 90
    }
]

movies.forEach(function(movie){
    console.log(`${movie.title} - ${movie.score} / 100`)
})


// -------------------------------------------------------------- MAP ------------------------------------------------------------------
// It is an array method
// Map wil always retuen a new array without destructing old arrays
// map accepts callback i.e function
// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let doubles = nums.map(function(num){
//     return num *2;
// })
// console.log(doubles)

// To form an array of movie titles only
// const movies = [
//     {
//         title: 'Amadeus',
//         score: 99
//     },
//     {
//         title: 'Stand by me',
//         score: 95
//     },
//     {
//         title: 'Parasite',
//         score: 95
//     },
//     {
//         title: 'Alien',
//         score: 90
//     }
// ]

// let movieTitles = movies.map(function(movie){
//     return movie.title.toUpperCase();
// })

// console.log(movieTitles)

// ----------------------------------------------------------- Arrow Functions ---------------------------------------------------------
// Syntatically compact Alternative to a regular function expression
// New way of writing function expression

// const add = (x, y) => {
//     return x + y;
// }

// const pow = (x, y) => {
//     return x ** y;
// }

// const rollDie = () => {
//     return Math.floor(Math.random() * 6) + 1;
// }

// -------------------Implicit returns in arrow functions ---------
// If you have only return one thing then it is used, without writing return keyword and add circle paranthesis
// Goes around single expressions in body only
// const rollDie = () => (
//     Math.floor(Math.random() * 6) + 1
// )

// const add = (x, y) => x + y

// const movies = [
//     {
//         title: 'Amadeus',
//         score: 99
//     },
//     {
//         title: 'Stand by me',
//         score: 95
//     },
//     {
//         title: 'Parasite',
//         score: 95
//     },
//     {
//         title: 'Alien',
//         score: 90
//     }
// ]

// const newMovies = movies.map(movie => (`${movie.title} - ${movie.score / 10}`))

//  -------------------------------------------- Set Timeout and Set Interval -----------------------------------------------------------
// console.log('Hello')
// setTimeout(() => {
//     console.log("are you still there....")
// }, 5000);
// console.log('Good byeeeeee')

// const id =setInterval(() => {                      //returns an id for an interval
//     console.log(Math.random())
// }, 3000);

// to stop set Interval 

// clearInterval(id)


//  -------------------------------------------------------- Filter -------------------------------------------------------------------------
// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const filtereNumber = nums.filter((num) => {
//     return num % 2 ==1 ;  //our callback returns true or false 
//     // If it returns true then n is added to filtered array
// })

// const myMovies = [
//     {
//         title: 'Amadeus',
//         score: 99,
//         year: 1984,
//     },
//     {
//         title: 'Sharknado',
//         score: 35,
//         year: 2013,
//     },
//     {
//         title: '13 going on 30',
//         score: 70,
//         year: 2004,
//     },
//     {
//         title: 'Stand by me',
//         score: 95,
//         year: 1986,
//     },
//     {
//         title: 'Waterworld',
//         score: 62,
//         year: 1995,
//     },
//     {
//         title: 'Jingle all the way',
//         score: 71,
//         year: 1986,
//     },
//     {
//         title: 'Parasite',
//         score: 95,
//         year: 2019,
//     },
//     {
//         title: 'Notting Hill',
//         score: 90,
//         year: 1999,
//     },
//     {
//         title: 'Alien',
//         score: 90,
//         year: 1979,
//     },
// ]

// const goodMovies = myMovies.filter( m => (m.score > 80)).map(m => (m.title))
// const badMovies = myMovies.filter(m => (m.score < 70))
// const recentMovies = myMovies.filter(m => (m.year >= 2000))


//  ------------------------------------------------- Some and every --------------------------------------------------------------------
// const exams = [80, 98, 92, 78, 70, 90, 89, 84, 81, 77]

// // Passing marks === 75
// const result =exams.every(score => (score >= 75))   //If each element is >= 75 then it will return true else false 

// const myMovies = [
//     {
//         title: 'Amadeus',
//         score: 99,
//         year: 1984,
//     },
//     {
//         title: 'Sharknado',
//         score: 35,
//         year: 2013,
//     },
//     {
//         title: '13 going on 30',
//         score: 70,
//         year: 2004,
//     },
//     {
//         title: 'Stand by me',
//         score: 95,
//         year: 1986,
//     },
//     {
//         title: 'Waterworld',
//         score: 62,
//         year: 1995,
//     },
//     {
//         title: 'Jingle all the way',
//         score: 71,
//         year: 1986,
//     },
//     {
//         title: 'Parasite',
//         score: 95,
//         year: 2019,
//     },
//     {
//         title: 'Notting Hill',
//         score: 90,
//         year: 1999,
//     },
//     {
//         title: 'Alien',
//         score: 90,
//         year: 1979,
//     },
// ]


// // let check if amy movie is present after 2015
// let latestMovies = myMovies.some(movie => (movie.year > 2015))  //Is any movie present which made after 2015


// ---------------------------------------------------- Reduce --------------------------------------------------------------
const prices = [9.99, 1.50, 19.99, 49.99, 30.50];

// To calculate total
let total = 0;
for (const price of prices) {
    total += price
}
console.log(total)

// Using reduce method

let total1 = prices.reduce((accumulator, price) => (accumulator + price))
console.log(total1)

// To find minimum of price
const minPrice = prices.reduce((min, price) => {
    if (price < min) {
        return price
    }
    return min
})
console.log(minPrice)

const myMovies = [
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

const highestRated = myMovies.reduce((bestMovie, currMovie) => {
    if (currMovie.score > bestMovie.score) {
        return currMovie
    }
    return bestMovie
})

console.log(highestRated)


// Second argument for reduce sets the initial values of accumulator
const even = [2, 4, 6, 8]
console.log(even.reduce((sum, num) => (sum + num), 100))


// ---------------------------------------------------------------------This in arrow function----------------------------------------------
// DO not use  it in methooodddd
// should use arrow in nested function
