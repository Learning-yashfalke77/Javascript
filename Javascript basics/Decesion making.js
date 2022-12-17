// == and != checks only value not the type, It converts the all operands to same type and then checks 
// === and !=== checks both values as well as type of comparison operands 

console.log("Hello betaa welcome to javascript");
// Prints the argument in browser console

console.warn("Uh Oh there is warning");
// Prints the argument in browser but as a warning

console.error("Ah shit here we go again!!!!!");
// Prints the argument in browser but as a error

alert("Hello Betaa");
//Cretes a pop in browser

let num = prompt("Enter the number: ");
// Takes the input from browser

console.log(num);
// Printing the input from browser

console.log(parseInt(num));
//Conversion from string to int

// -----------------------------------------------------      If else         ------------------------------------------------------------------
let rand = Math.random();
if (rand < 0.5) {
    console.log(`Your number is less than 5 and no is: ${rand}`)
}else{
    console.log(`Your number is greater than 0.5 and no is: ${rand}`);
}

// const dayOfWeek = prompt("Enter the day: ");

if (dayOfWeek.toLowerCase() === "monday") {
    console.log("Uhhh!!! I hate mondays");
} else if (dayOfWeek === "saturday") {
    console.log("Yay i love saturdays");
} else if (dayOfWeek.toLowerCase() === "friday") {
    console.log("Fridays ar decent, especially after work");
} else {
    console.log("Mehh");
}


// 0 - 5  BABY FREE 
// 5 - 10 CHILD 10$
// 10 - 65 ADULT $20
// 65+ SENIOR $10
const age = prompt("Enter the age: ");
if (parseInt(age) < 5) {
    console.log("You are Baby, you can go for FREE");
} else if (parseInt(age) < 10) {
    console.log('You are Child, you pay 10$');
} else if (parseInt(age) < 65) {
    console.log("You are Adult, you have to pay 20$");
} else {
    console.log("You are Old, you pay 10$")
}

// -------- IF NESTING: PASSWORD CHECKING----
// const password = prompt("Enter the new password");
// password must be 6+ characters
//password could not contain space

if(password.length >= 6){
    if(password.indexOf(' ') == -1){
        console.log("valid password");
    }
    else{
        console.log("Password should not contain spaces");
    }
} else{
    console.log("Password is TOOO short!");
}

// ---------------------------------------------------------------Truthy and Falsy values ------------------------------------------------
// false, 0, "", NULL, undefined, NAN contains false else contain true values

const userInput = prompt("Enter the value"); 

if(userInput){
    console.log("It is not an empty string");
} else{
    console.log("It is an empyt string ")
}

// If user do not enter anything then an empty string is passed to variable and an empty string is falsy

// -----------------------------------------------------------Logical operators -------------------------------------------------------------
// AND: &&, OR: ||, not: !
if (password.length >=6 && password.indexOf(' ') == -1) {
    console.log("Valid Password");
} else {
    console.log("Invalid Password")
}

// 0 - 5  BABY FREE 
// 5 - 10 CHILD 10$
// 10 - 65 ADULT $20
// 65+ SENIOR $10

const ages = prompt("Enter the age");
if ((ages > 0 && ages < 5) || (ages >= 65 && ages <= 100)) {
    console.log("FREE");
} else if (ages >= 5 && ages < 10) {
    console.log("10$");
} else if (ages >= 10 && ages < 65) {
    console.log("20$");
} else {
    console.log("Please enter valid ages");
} 

let firstName = prompt("Enter the first name");
 if (!firstName) {
     firstName = prompt("Enter the again")
 } else {
     console.log("TYYYYYYYYYYYYYYYYY");
 }