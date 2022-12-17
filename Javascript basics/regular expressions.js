// // Regular expression is used for searching

// let reg = /yash/ //This is regular expression literal
// console.log(reg)
// console.log(reg.source)  //Gives what written inside regular expressios

// // Functions to match expression
// let s = 'This is great yashfalke77ms and yash falke sir also ;'

// // ----------------------1. exec() - this function will retuen an array from match or null for no match------------------------------------
// let result = reg.exec(s)
// console.log(result)
// // exec will always give first occurence in case of multiple occ
// // to check for multiple we have to add flag after slash 

// reg = /yash/g ; //g means global
// result = reg.exec(s)    //Will give first occuerence
// console.log(result)
// result = reg.exec(s)    //Will give second occuernce
// console.log(result)
// result = reg.exec(s)   //Will give third occuerenece if present else null
// console.log(result)

// // We can use multiple exec with global flaggg

// // i flag is used for case insensitive
// let s1 = 'This is great YasHfalke77ms ;'
// reg = /yash/i
// result = reg.exec(s1)
// console.log(result)

// // ----------------------------------------------------------- 2. test() - returns true or false --------------------------------------
// reg = /yash/
// result = reg.test(s)
// console.log(result)

// // -------------------------------------------- 3.match () : It will return an array of results or null --------------------------------
// result = s.match(reg)  //opposite of match
// console.log(result)

// // For case insensitive
// reg = /yash/i
// result = s1.match(reg)
// console.log(result)

// // For global it will return an array of matches not like exec
// reg = /yash/g ; //g means global
// result = s.match(reg)    
// console.log(result)


// // ---------------------------------------------- 4. search() : returns index of first match else -1 ------------------------------------------
// reg = /yash/
// result = s.search(reg)    
// console.log(result)

// // -------------------------------------------------- 5. replace () : returns new replaced string with all replacements------------------
// // If no global flag is given first match will be replaced

// reg = /yash/
// result = s.replace(reg, 'harsh')    
// console.log(result)

// reg = /yash/g ; //g means global
// result = s.replace(reg, 'harsh')    
// console.log(result)

// ----------------------------------------------------------- Meta characters -------------------------------------------------------------
// let regex = /yash/
// let str = 'yash is yash'


// // Lets look into metacharacters
// // ------------- ^(carat): expresion will match if string starts with
// regex = /^yas/  //If tring starts with yas

// // ---------------- $ : expresion will match if string ends with
// regex = /sh$/  //If String ends with sh

// // ---------------- .: matches any one charater at dot place
// regex = /y.s./

// // ---------------- *: matches any zero or more charater at dot place
// str = 'yash is yssdfgdsgsghhhbsh'
// regex = /y*sh/

// // -------------------- ? : optional charater before that symbol
// str = 'ysh is sdgszgsgsd'
// regex = /ya?shi?/     //Here a and i are optional charater if not present then also it will give true

// // --------------------- \: if you want to use meta character as a charater with no its reffect the \(metacharacter)
// str = 'yash is yash'
// regex = /y\*ash/


// console.log(regex.exec(str))
// if (regex.test(str)) {
//     console.log(`The string ${str} matches the expression ${regex.source}`)
// } else {
//     console.log(`The string ${str} does not matches the expression ${regex.source}`)
// }

// ---------------------------------------------------- Character sets---------------------------------------------------------------------
// We use [] for character sets 
// If any one character from in the given array will match with string then it will return true
// let regExp = /y[adb]sh/     //Any one character at that position should match from array
// const string = 'yash bhai'

// regExp = /y[a-z]sh/   //can be any character from a to z

// regExp = /ya[^stg]h/    //Should not be t or h at that position 
// // Carat behaves differently inside character set and it is used for notttt

// regExp = /ya[stg][^sero]/  //We can use multiple character setss

// regExp = /ya[a-zA-z][^sero0-9]/

// console.log(regExp.exec(string))
// if (regExp.test(string)) {
//     console.log(`The string ${string} matches the expression ${regExp.source}`)
// } else {
//     console.log(`The string ${string} does not matches the expression ${regExp.source}`)
// }

// // ------------------------------------------------------------- Quantifiers -------------------------------------------------------------
// // we use {} for groupings 

// let regExp1 = /har{2}y/     //R should occur 2 times 
// const string1 = 'harry bhai'

// regExp1 = /har{0,2}y/    // R should contains from 0 to 2 times

// console.log(regExp1.exec(string1))
// if (regExp1.test(string1)) {
//     console.log(`The string ${string1} matches the expression ${regExp1.source}`)
// } else {
//     console.log(`The string ${string1} does not matches the expression ${regExp1.source}`)
// }

// // --------------------------------------------------------------- Groupings ------------------------------------------------------------
// // We use paranthesis for groupings 
// let regExp2 = /(har){2}([0-9]r){3}/      //Should contains har 2 times
// const string2 = 'harhar1r5r8r bhai'


// console.log(regExp2.exec(string2))
// if (regExp2.test(string2)) {
//     console.log(`The string ${string2} matches the expression ${regExp2.source}`)
// } else {
//     console.log(`The string ${string2} does not matches the expression ${regExp2.source}`)
// }

// ---------------------------------------------------------------- Short hand character ---------------------------------------------
let regExp3 = /\war/      //word character(\w) - _ or alphabet or numbers
const string3 = 'harhar1r5r8r $$%$%$bhai ka number 8999harry9999999'

regExp3 = /\w+1r5/   //\w+ one or more word characters
// here \w+ is harhar

regExp3 = /\Wbhai/  // \W: non word character

regExp3 = /\W+bhai/  //\W+ one or more non word characters
// here \W is  $$%$%$

regExp3 = /number \d999/   //\d means digit

regExp3 = /number \d+/   // \d+ one or more digit characters

regExp3 = /\D999/   // \D: non digit character

regExp3 = /\D+999/   // \D+:one or more  non digit character

regExp3 = /\ska number/  //\s: match white space character

regExp3 = /\s+ka number/  //\s: match one or more white space character

regExp3 = /\Ska number/ // \S: non White space character

regExp3 = /\S+ka number/ // \S: one or more non White space character

regExp3 = /5r8r\b/   //word boundary

console.log(regExp3.exec(string3))
if (regExp3.test(string3)) {
    console.log(`The string ${string3} matches the expression ${regExp3.source}`)
} else {
    console.log(`The string ${string3} does not matches the expression ${regExp3.source}`)
}


// -------------------------------------------------------------------- Assertions -----------------------------------------------------
let regExp4 = /h(?=y)/     //After h there should be y onlyyyyyyy
const string4 = 'harhar1r5r8r $$%$%$bhai ka number 8999harry9999999'

regExp4 = /h(?!y)/

console.log(regExp4.exec(string4))
if (regExp4.test(string4)) {
    console.log(`The string ${string4} matches the expression ${regExp4.source}`)
} else {
    console.log(`The string ${string4} does not matches the expression ${regExp4.source}`)
}