// Lecture 3 : Loops and Strings

/*

Loops in JS :

- Loops are used to execute a piece of code again & again.

(I) for Loop.
(II) while Loop.
(III) do-while Loop.
(IV) for-of Loop.
(V) for-in Loop.

*/

// (I) for Loop :

// for (let i = 1; i <= 5; i++) {
//     console.log("Subho");
// }

// Calculate sum of 1 to 5

// let sum = 0;
// for (i = 1; i <= 5; i++) {
//     sum = sum + i;
// }
// console.log("sum =", sum);

// Calculate sum of 1 to n

// let sum = 0;
// let n = 10;

// for (i = 1; i <= n; i++) {
//     sum = sum + i;
// }

// console.log("sum =", sum);


/* (II) whiel Loop :

while (condition) {
    // do so work.
    i++;
}

- 'while Loop' work same, what 'for Loop' does. Only writing method of 'while loop' is different.
*/

// let i = 1;
// while (i <= 5) {
//     console.log("Subho");
//     i++;
// }


/*

(III) do-while Loop :

- In a do-while loop, the task is executed first, and then the condition is checked.

do {
    // do some work
    i++;
} while (condition);

*/

// let i = 1;
// do {
//     console.log("Subho");
//     i++;
// } while (i <= 5);


/* (IV) for-of Loop :

- The 'for-of loop' helps to loop over strings and arrays.



for(let val of strVar) {
    // do some work
}

*/

// let str = "Subho";
// for(let i of str) {
//     console.log("i =", i);
// }

// - In a for-of loop, initialization, updating, and stopping condition happen automatically.


// Calculating string length -

// let str = "Subho";
// let size = 0;
// for(let i of str) {
//     console.log("i =", i);
//     size++;
// }

// console.log("String size =", size);

/*

(V) for-in Loop :

- 'for-in Loop' used in objects &  arrays.

for(letKey in objVar) {
    // do some work
}

*/

// let student = {
//     name : "Subhendu Thakur",
//     age : 23,
//     cgpa : 7.5,
//     isPass : true,
// };
// for(let i in student) {
//     console.log(i);
//     //console.log(i, student[i]); // if we want to check value of keys.
// }

/*
- 'for-in Loop' returns key of Object.
- If we want check value of 'keys' we have write : student[i] 
*/


/*

Let's Practice :

Qs1. Print all even numbers from 0 - 100.

*/

// for (let num = 0; num <= 100; num++) {
//     if(num % 2 === 0) { // if we want to print odd numbet : num % 2 !==  0
//         console.log(num);
//     }
// }


/* Qs2. Crate a game where you start with any random game number. Ask the user to keep gussin the
game number the game number until the user enters correct value. */

// let gameNum = 25;
// let userNum = prompt("Guess the game number :");

// while (userNum != gameNum) {
//     userNum = prompt("You entered wrong number, guess again :");
// }

// console.log("Congratulations, you entered the right number.")



// This is ChatGPT cool way :

// Set the number to 25
// const gameNumber = 25;

// let userGuess = null;

// // Keep asking the user until the correct number is guessed
// while (userGuess !== gameNumber) {
//     // Prompt the user for their guess
//     userGuess = parseInt(prompt("Guess a number between 1 and 100:"));

//     // Validate input
//     if (isNaN(userGuess)) {
//         alert("Please enter a valid number.");
//         continue; // Skip the rest of the loop and ask for input again
//     }

//     // Check if the guess is too low, too high, or correct
//     if (userGuess < gameNumber) {
//         alert("Too low! Try again.");
//     } else if (userGuess > gameNumber) {
//         alert("Too high! Try again.");
//     } else {
//         alert("Congratulations! You guessed the correct number.");
//     }
// }


/*

Srings in JS :

(I) Create String - let str = "Subho";
(II) String Length - str.length
(III) String Indices - str[0], str[1], str[2]

*/

// let str = "Subho";
// console.log(str[0]); // S


/*

Template Literals in JS :

- A way to have embedded expressions in strings.

`this is a template literals`

*/ 

// let obj = {
//     item : "pen",
//     price : 10,
// };

// console.log(`The cost of ${obj.item} is ${obj.price} rupees.`);

// - If we want to acess any objects key value then we have to type : ${obj.key}

/*

Q. What is String Interpletion?
A. To crate strings by doning substitution of placeholders.

`string text ${expression} string text`

*/


// Escape Characters :

// 1. \n (next line)
// console.log("Subhendu\nThakur");

// 2. \t (tab space)
// console.log("Subhendu\tThakur");

/* - After using escape characters, if we check the length, the back slash(\) will not counted. */

// let str = "Subhendu\nThakur"; // total characters 16 with \n
// console.log(str.length); // 15

/*
String Methods in JS :

- These are built-in functions to munipulate a string.

1. str.toUpperCase() // "abc" -> "ABC"
2. str.toLowerCase() // "ABC" -> "abc"
3. str.trim() // removes whitespaces "_____ABC_____"

- Method means doing some work.
- 'console.log' here 'log' is a method.
- In JavaScript, the old string doesn’t change; whatever changes occur, happen in a new string.
*/

// Example :

// let str = "subho";
// str.toUpperCase();
// console.log(str);

// - If we write this, then no changes will happen.

// let str = "subho";
// let newStr = str.toUpperCase(); // we have put that in new variable.
// let str = ste.toUpperCase(); // or we have write old string variable, but there will no changes happen in old string.
// console.log(newStr); // then we can upper case it.

// - There will be no changes happen in old string, because strings are 'immutable'.


/*
(I) str.slice(start, end?) - Used for slice.
(II) str.concat(str2) - Used for join str2 with str1.
(III) str.replace(searchVal, newVal) - Used for replace
(IV) str.charAt(idx) - Used for printing specific character.
*/

// (I) str.slice(start, end?) 

// let str = "hello";
// console.log(str.slice(1, 3)); // output will be "hel"

// - It will print upto index 3. "hello" -> "01234" , so it will print "012" -> "hel".
// - If we write only (str.slice(1)); , it will print "ello"

// (II) str1.concat(str2)

// let str1 = "Subho";
// let str2 = "Sonai";
// let res = str1.concat(str2); // we can do same thing with plus (+).
// console.log(res);

// (III) str.replace(searchVal, newVal)

// let str = "Hello";
// console.log(str.replace("H", "Y")); 

// let val = "hellololo";
// console.log(val.replace("lo", "p")); // In this situation "lo" will replace only one time.
// console.log(val.replaceAll("lo", "p")); // If we want to replace all "lo", now it's "helppp".

// (IV) str.charAt(idx)

// let str = "subho";
// console.log(str.charAt(1)); // output will be "u".



/*
Let's Practice :

Qs1. Prompt the user to enter their full name.
Genetate a username for them based on the input.
Start username with @, followed by their full name and ending with the fullname length.

eg: username = "subhenduthakur", username should be "@subhenduthakur14"
*/

// let fullName = prompt("Type your full name:");

// let userName = "@"+fullName.toLowerCase()+fullName.length;

// console.log(userName);




















