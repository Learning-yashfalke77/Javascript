// oRDERED COLLECTIONS OF VALUES (arrays are not homogeneous)
let daysOfWeeks = ['Monday', 'Tuesday', 'Thursday'];
console.log(daysOfWeeks);

// Mixed arrays
let stuff = [true, false, "cat", 4, "dag"];
console.log(stuff);

console.log(daysOfWeeks[2]) //access elements of arrays

console.log(daysOfWeeks[1] [0]) //gives first letter of elements

let colors = ["rad", "orange", "yallow"];
colors[0] = "red";
colors[2] = "yellow";
colors[10] = "indigo";
console.log(colors);

// -------------------------------------------------------- Array Methods -----------------------------------------------------------
// PUSH: add to end       POP: remove from end
let movieLine = ["Tom", "Nancy", "Pablo"];
movieLine.push("Olive");
movieLine.push("Eva");
console.log(movieLine);
movieLine.push("Harry", "Hermionie");
console.log(movieLine);

movieLine.pop();
console.log(movieLine);

// Shift: remove from start           Unshift: add to start
movieLine.shift();
console.log();

movieLine.unshift("Yash");
console.log(movieLine);

// concats: merge two arrays
// includes: look for a values
// indexOf: just like string.indexOf
// join: creates string froman array
// reverse: reverses an array
// slice: copies the portion of arrays
// splice: removes/replaces the elements
// sorts: sorts an arrays

let cats = ["blue", "kitty"];
let dogs = ["dogs", "Wyatt"];
let pets = cats.concat(dogs);
console.log(pets);

console.log(cats.includes("blue"));

console.log(cats.indexOf("blue"));

console.log(pets.reverse());

let colours = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
console.log(colours.slice()); //creates copy

let coolColours = colours.slice(3);  //including three
console.log(coolColours);

let warmColours = colours.slice(0, 3) // excluding end
console.log(warmColours);


// -------------------------------------------- splice ------------------------------
// it is used to insert item in betwwen any given index of array
// Syntax : let varName = array.splice(start[, deleteCount[, item1[, item2[ ..,]]]])
// does not create copy destructuible method
colours.splice(5, 1, "Purple");
console.log(colours)


// ----------------------------------------------------------------Equalities in arrays --------------------------------------------------
console.log([1, "yash"] === [1, "yash"])   //False

//Here javascript does not checks the content of array it checks the refrence no's 
 let num = [1, 2, 3];
 let numsCopy = num;
 console.log(num, numsCopy);

//  here num and numscoy are refereing to same array.

numsCopy.pop();
console.log(num);

console.log(num === numsCopy); //true
//since nums and numscopy are refering same array hence they are equal

// ------------------------------------------------------------- Const in arrays -----------------------------------------------------
const myEggs = ["Brown", "Black"];
// here you can change the values of my eggs 
// because when we do let myEggs to array a refrenece no is stored in variable name and when we change value of array its refernce number does not change
// hence we can change value in array, but you cannot reassign



// -----------------------------------------------------------------------------Nested arrays ------------------------------------------
const gameBoard = [
    ['X', 'O', 'X'],
    ['O', null, 'X'],
    ['O', 'O', 'X'],
];

console.log(gameBoard);
console.log(gameBoard[1][1]);