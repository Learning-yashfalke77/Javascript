// objects does not focus on cordered collection of data like arrays
// objects are collection of properties 
// properties are key valued pair
// objects are not iterable so we cant use for or for of

const person = {firstName: "Yash", lastName: "Falke"};
console.log(person);

const kitchenSink = {
    favNum: 8850529588,
    isFunny: true,
    colors: ['red', 'orange'],
};
console.log(kitchenSink);

// ------------------------------------------------------ Acessing the data of object literals ---------------------------------------
// Method1
console.log(person["firstName"]);
// here expression inside squrebrackets gets evaluated

// method2
console.log(kitchenSink.colors);

// When we create object literals all keys converted into STRINGS inside javascript
const years = {1999: "good", 2020: "bad"};
console.log(years[1999]);

// advantage of method1 against method 2
let birthYear = 2020;
console.log(years[birthYear]);
// which cannot be done in method 1

// ---------------------------------------------------------- Adding new informations --------------------------------------------------------
const midTerms = {danielle: 96, thomas: 78};
midTerms.thomas = 79
console.log(midTerms)

midTerms.yash = 99; //adding new key with its values
console.log(midTerms)

// --------------------------------------------------------------- Nesting Object literals and arrays --------------------------------------
const comments = [
    {username: "yashfalke77", text: "lol xdd!!!", votes: "9"},
    {username: "siddeshw", text: "jodd!!!", votes: "1243"},
]

console.log(comments[0].text);
console.log(comments[1]["text"]);