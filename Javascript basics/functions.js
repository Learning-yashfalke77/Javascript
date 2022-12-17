//Syntax
//function funcName(){
    //do something
// }

singSong();   //It works

function singSong() {
    console.log("DO");
    console.log("RE");
    console.log("MI");

}

singSong();

// ------------------------------Arguments -----------------------------
function greet(person) {
    console.log(` Hello ${person}`);
}

greet("Yash");
greet();

// --- Multiple Arguments--

function name(firstName, lastName) {
    console.log(`hey there, ${firstName} ${lastName[0]}.`)
}

name('Yash', 'Falke');

// repeat function which takes str as input and noOfTimes to repeat as a input
function repeat(str, numTimes) {
    let result = '';
    for (let index = 0; index < numTimes; index++) {
        result += str;
    }
    console.log(result);
}

// ------------------------------ return ----------------------------
function add(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        return NaN;
    } else {
        return x + y;
    }
}

let sum = add('yash', 6);
console.log(sum)

// We can return only one value

// --------------------------------- FUNCTION SCOPE ---------------------------------------------------
// A VARIABLE DEFINED INSIDE THE FUNCTION CAN BE USED INSIDE THE FUNCTION ONLY CAN'T BE USED OUTSIDE THE FUNCTION 
function helpMe() {
    let msg = 'I am on fire';
    console.log(msg);  //I am on fire
}

console.log(msg); //NOT DEFINED!

let bird = 'Scarlet Macaw';
function birdWatch() {
    let bird = 'Great Blue Heron';
    console.log(bird)   //Great Blue Heron
}

console.log(bird);     //Scarlet Macaw


// ----------------------------------------------------------- Block Scope ----------------------------------------------------------------
// variable defined using let and const inside function have block scope till the ned curely braces, you can't access after that (If , for, function)
let yo = 4;
for (let index = 0; index < 5; index++) {
    let msg = 'AARFSDTHY'; //BLOCK SCOPE 
}

console.log(yo)
console.log(msg) // error

// BUT IN CASE OF VARIABLE WHERE YOU HAVE DECLARED VARIABLE WITH VAR
for (var index1 = 0; index < 5; index++) {
    var msg1 = 'AARFSDTHY'; //BLOCK SCOPE 
}

console.log(yo);
console.log(index1);
console.log(msg1);

// YOU CAN ACCESS IT OUTSIDE  IN CASE OF FOR AND IF CASES ONLY

function hi() {
    var msg2 = 'fhhnz';
}
console.log(msg2)  //error

// HENCE LET AND CONST ARE BLOCK SCOPE VARIABLE DECLARATIONS

// ------------------------------------------------------------ LEXICAL SCOPE ---------------------------------------------------------
//  A NESTED OR INNER FUNCTION HAS ACCESS TO SAME STUFF AS THE PARENT OR GRANDPARENT  HOW MANY LEVELS UP

function bankRobbery() {
    const heroes = ['Spiderman', 'Superman', 'Wonder Woman', 'Bat Woman'];
    function cryForHelp() {
        for (const hero of heroes) {
            console.log(`Helppp me , ${hero}`)
        }
    }
    cryForHelp();
}


// ------------------------------------------------------------ FUNCTION EXPRESSIONS -----------------------------------------------------
let add = function (x, y) {
    return x + y;
}

console.log(add(5, 6))
// Same as previous functions nothing diifference .......


// ------------------------------------------------------------- HIGHER ORDER FUNCTIONS -----------------------------------------------------
// Function that operate with/on other function they can:
// 1) Accepts other functions as a arguments 
// 2) Return a function

function callTwice(func) {
    func();
    func();
}

function rollDice() {
    console.log(Math.floor(Math.random() * 6) + 1);
}

callTwice(rollDice)  //passing function as a argument


function makeMysteryFunc() {
    const rand = Math.floor(Math.random());
    if (rand > 0.5) {
        return function () {
            console.log('Hey there I am a good function');
            console.log('You have won 1million dollars');
        }
    } else {
        return function () {                                         //returning a function
            alert('You have been infected by a coputer virus');
            alert('Stop trying to close this window');
            alert('Stop trying to close this window');
            alert('Stop trying to close this window');
            alert('Stop trying to close this window');
        }
    }
}

const myMestry = makeMysteryFunc();
myMestry()


// Creating an function that returns the function to check the age betwwen given range of ages(REAL LIFE APPLICATION)

function makeAge(min, max) {
    if ((min > 0 && min <= 100) && (max > 0 && max <= 100)) {
        return function (num) {
            return num >= min && num <= max;
        }
    }
}

//function to check if he can vote or not
const voteAllowed = makeAge(18, 100)

//lets say to check if i am allowed to vote or not: AGE: 18
console.log(voteAllowed(18))


// ------------------------------------------------------------ METHODS -----------------------------------------------------------------
// WE CAN ADD FUNCTION AS A PROPERTY OF OBJECTSAND WE CALL THEM METHODS

const myMath = {
    PI: 3.1419,
    square: function (num) {
        return num ** 2;
    },
    cube: function (num) {
        return num ** 3;
    }
}

console.log(myMath.PI);
console.log(myMath.square(4));
console.log(myMath.cube(4));
console.log(myMath["cube"](4))

// New way of writing method in javascript
const myMath1 = {
    PI: 3.1419,
    squareRoot(num){
        return num ** (1/2);
    }
}
console.log(myMath1.squareRoot(2))

// ----------------------------------------------------------This Keyword -----------------------------------------------------------
const cat = {
    name: 'Blue Steele',
    color: 'Grey',
    breed: 'scottish fold',
    meow(){ 
        console.log(`${this.name} says MEOWWWW`)    //THIS IS USED TO REFER THE KEY OF SAME OBJECT INSIDE FUNCTION
    }
}
console.log(cat.meow())     //Here we are passing refernce cat (left side of dot) to this inside meow function

const meows = cat.meow;    //here passing the refrence od meoew function of cat to new meows
console.log(meows)     //Here we diidnt get name because there is no refernce to this keyword

// The by default reference to this of meows function is window 
// Window is the predefined main object of javascript
// It contains all the predefined and userdefin ed functions and methods (Eg: alert, prompt etc..)