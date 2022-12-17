//  ------------------------------------------------- 1st Primitive Types: Numbers ---------------------------------------------------
// For exponents **  i.e raised to, is used rest all operators are same
// NaN (Not a number) is a numeric value which is represented by something ... that is not  a number.
0 / 0  // NaN
1 + NaN  //NaN
// typeof {value/variable} Tell us the data type of that variable/value


// ----------------------------------------- Variable Declarations: let someName = value; ----------------------------------------------
let years = 2021;
// for declaring variables only let is used, not for updating value of variables 
// We can use short hand for updating variables values
let score = 0;
score += 5;
// pre increment/decreament and post increament/decreament can be done
let numLives = 9;
numLives++;

// ------------------------ var is aslo used in variable declaration: var someName = value; ------------------------------------------
// It was used in older versions of javascript, it can also be used now 
var runDistance = 26.2;


//  --------------------------------------- Constant Declaration: const someName = value; -----------------------------------------------
// In constant we cannot change the value of variable
// It is used to store a value which will not change
const dayInTheWeek = 7;

// ------------------------------------------------- 2nd Primitive Types: Booleans ---------------------------------------------------
// They have two possible options i.e. true or false
let isActiveGame = true;


// -------------------------------------------------Variables can change the primitive types ------------------------------------------
let isLoggedIn = false;
isLoggedIn = 242434;
typeof isLoggedIn

// ------------------------------------------------- 3rd Primitive Types: Strings -----------------------------------------------------------
// String represent text and it must be wrapped in qoutes
// Single or double quotes can be used
let username = "YashF"
let favAnimal = "Dog"
let sentence = "I told you 'to go away' "

// Some features of Strings
let animal = "Dumbo Octopus"
animal[0] //D
animal.length //13 length calculates the lenght of string
"lol" + "lol" //"lollol" + is used to conacatinate
// Strings are immutable 
let result = 1 + "hi" //"1hi"

// --------------------------------- Strung Methods: thing.method() -----------------------------------------
// -To access property : thing.method (length is one of the property)
let msg = "leave alone right now i hate you plz";
msg.toUpperCase(); // Indestructible method converts all leetters to UPPER case

let userInput = "    Hello my name is tim tom tammy ping pong    ";
userInput.trim(); // trim is used to remove spaces from terminals (i.e. Starting and Ending)

// Chaining of Inbuild Methods
let greeting = "  Hello Again!!!!!!                ";
greeting.trim().toUpperCase();

// --------------------------------- String Methods: thing.method(arg) ------------------------------------
"Haha That so funny!!!".indexOf('h'); //gives first ocuurence of let words etc 
// If given argument is not present it returns -1

"Haha That so funny!!!".slice(5); // string.slice(Starting index [, ending index]) here end index is optional , not including ending index and including start index

"Haha That so funny!!!".slice(-1); // !

"Haha That so funny!!!".replace('Haha', 'lololol'); //"lololol That so funny!!!"

"lol".repeat(10); //"lollollollollollollollollollol"

//  Inbuild methods all : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String


// ----------------------------------- String Template literals -------------------------------------------
// Used with back tick
let product = "Artichoke";
let price = 2.25;
let qty = 4;

// Normal way
"You bought" + qty + " " + product + " Total is: " + qty * price;
// String Template literals
`You bought ${qty} ${product} Total is ${qty * price}`;


//  ------------------------------------------------- 4th Primitive Types: NULL -------------------------------------------------------------
// Intentional absence of any value 
// It must be assigned

// ------------------------------------------------- 5th Primitive Types: undefined -----------------------------------------------------------
// Variable that do not have an assigned value are undefined

// ---------------------------------------------------- Math Object: Mathematical calculations ----------------------------------------------
Math.PI //3.14.......................
Math.floor(34.1); //34
Math.ceil(34.1); //35
Math.round(34.1); //34

//  Random Numbers generation
Math.random()  // Gives random number between 0 and 1
Math.floor(Math.random() * 10) + 1; //Rando number generation between 1 to 10, if not added 1 then it goes fro 0 to 9  excluding 10
Math.floor(Math.random() * 100) + 1;  //Rando number generation between 1 to 100

Math.floor(Math.random() * 3) + 20;  // random number between 20 21 and 22