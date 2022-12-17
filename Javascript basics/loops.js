//  ----------------------------------------------------------- For loops Syntax ------------------------------------------------
// for(let i = 1; i <= 10; i++ ){
//     console.log(`I am in the loop body for ${i} time`);
//     console.log(i);
// }

// even numbers from 1 to 20
// for(let i = 0; i <= 20; i += 2){
//     console.log(i);
// }

// 100 90 80 70 ...
// for(let i = 100; i >= 0; i -= 10){
//     console.log(i);
// }

// Infinite loops
// for(let i = 20; i >= 0; i++){
//     console.log(i);
// }
// DO NOT RUN THIS LOOP !!!!!

// ------------------------------------------------- LOOPS FOR ARRAYS --------------------------------
// const animals = ['lions', 'tigers', 'bears'];
// for (let i = 0; i < animals.length; i++) {
//     console.log(i, animals[i]);
// }

// for(let i = animals.length - 1; i >= 0; i--){
//     console.log(i, animals[i]);
// }

// ------------------------------------------------ Nested LOOPS -----------------------------------
// for(let outer = 1; outer <= 10; outer++){
//     console.log(` ---------- Outer is ${outer} ----------`);
//     for(let inner = 1; inner < 4; inner++){
//         console.log(`Inner is ${inner}`);
//     }
// }

// const seatingChart = [
//     ['Kristen', 'Erik', 'Namita'],
//     ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
//     ['Yuma', 'Sakura', 'Jack', 'Erika'],
// ]

// for (let index = 0; index < seatingChart.length; index++) {
//     const element = seatingChart[index];
//     console.log(` ----- Row #${index} -------`)
//     for (let j = 0; j < element.length; j++) {
//         console.log(element[j]);
//     }
// }

// -----------------------------------------------------------------------------    WHILE LOOPS -----------------------------------------------
let num = 0;
while (num <= 10) {
    console.log(num);
    num++;
}

let secretCode = "yooo";
let userCode = prompt("Enter the Secret Code");

while (userCode !== secretCode) {
    userCode = prompt("Enter the code");
}

// ---------------------break keyword ----------------
let input = prompt("Hey Say Somethimg!!!!");
while (true) {
    input = prompt(input);
    if (input.toLowerCase() === "stop copying me") break;
}
console.log("OK YOU WON");

for (let i = 0; i <= 1000; i++) {
    console.log(i)
    if (i === 100) break;
}

// --------------------------------------------------------------------- GUESSING GAME -------------------------------------------------
let maximum = parseInt(prompt("Enter the maximum number"));   // whenever we do parseint of letters/alphabets it gives Nan so after that use falsy
while (!maximum) {
    maximum = parseInt(prompt("Enter the valid number"));
}
const targetNum = Math.floor(Math.random() * maximum) + 1;
let guess = prompt("Enter your first Guess");
let attempts = 1;

while (parseInt(guess) !== parseInt(targetNum)) {
    if (guess === q) break;
    attempts++;
    if (guess > targetNum) {
        guess = prompt("Too high! Enter a new guess:");
    } else {
        guess = prompt("Too Low! Enter a new guess:");
    }
}

if (guess === 'q') {
    console.log("Ok you quit !!!")
} else {
    console.log("You won!!!")
    console.log(`You got it! It took you ${attempts} guesses`);
}


// -----------------------------------------------------------------------For of ------------------------------------------------------------
// generally used for iterating over arrays
// newer in javascript
// --------------- with normal for -----------------
let subReeddits = ['cringe', 'book', 'chickens', 'funny', 'pic', 'soccer'];
for (let index = 0; index < subReeddits.length; index++) {
    console.log(`Visit reddit.com/r/${subReeddits[index]}`)
}
console.log("--------------------------")
// // ----------------- Using for of --------------------
for (const sub of subReeddits) {
    console.log(`Visit reddit.com/r/${sub}`)
}


// -------------------------------- nesting in for of ------------------------------
const seatingChart = [
    ['Kristen', 'Erik', 'Namita'],
    ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
    ['Yuma', 'Sakura', 'Jack', 'Erika'],
]

for (let index = 0; index < seatingChart.length; index++) {
    const element = seatingChart[index];
    for (let j = 0; j < element.length; j++) {
        console.log(element[j]);
    }
}
console.log("--------------------------");

// --------------------------  Using for of -------------------------

for (const row of seatingChart) {
    for (const students of row) {
        console.log(students)
    }
}


// ------------------- for of in strings ----------------------------
for (const letter of "Hello Betaa") {
    console.log(letter)
}

// --------------------------------------------------  FOR IN -----------------------------------------------------------------------
// GENERALLY USED FOR OBJECT LITERALS
const testScores = {
    kenan: 80,
    demon: 67,
    kim: 89,
    shawn: 91,
    marlon: 72,
    dwayne: 77,
    nadia: 83,
    alvira: 97,
    diedre: 81,
    vonnie: 60,
};

for (const person in testScores) {
    console.log(`${person} scored ${testScores[person]}`);
}

// ---Method 2 ------------------
console.log(Object.keys(testScores));   //returns an array of keys

console.log(Object.values(testScores));  //returns an arrays of values

console.log(Object.entries(testScores));  //returns nested arrays with key value pairs

// calculating total scores and averages
const scores = Object.values(testScores);
let total = 0;
for (const score of scores) {
    total += score;
}
console.log(`Total score ${total}`);
console.log(`Average score: ${total / scores.length}`);