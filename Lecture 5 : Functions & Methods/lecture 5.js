// → Lecture 5 : Functions & Methods

/*

→ Functions in JS :

- Block of code that performs a specefic task, can be invoked whenever needed.


➢ Functions Definition -

function functionName() {
    // do some work
}

function functionName(param1, param2...) {
    // do some work
}

➢ Function Call/Invoke -

• functionName();

*/

// function myFunction() {
//     console.log("Welcome to coding world!");
//     console.log("We are lerning JS");
// }

// myFunction(); // ‣ for work we have to call/invoke the function

/*
- A function’s specific purpose is: if any piece of code is being repeated, meaning I have to write it again and again, we can use a function there.

- A function saves us from 'redundancy'(repeat) in our code.
*/

// • If we want to print specific massage in function -

// function myFunction(msg) { // ‣ parameter -> input
//     console.log(msg);
// }

// myFunction("I love JS"); // ‣ argument


// Function -> 2 number, sum

// function sum(x, y) {
//     console.log(x + y);
// }

// sum(1, 2);


// ➢ function with return keyword -

// function sum(x, y) {
//     // local variables -> scope
//     s = x + y;
//     return s; 
// }

// let val = sum(3, 4);
// console.log(val);

/* 
★ NOTE : 'return' keyword returns only value, the value could be array, a string, a number or a object but at the end we can return only one variable.

- After 'return' keyword if we write any code, that will not be executed.

★ NOTE : functions parameters (x, y) only exists in blocks {}. If we try to print function parameters before block {}, there will be an error.
*/


/*
→ Arrow Functions :

- Compact way of writing a function.

const functionName = (param1, param2..) => {
    // do some work
}
*/

// > This is normal way of writing function :
// function sum(a, b) {
//     return a + b;
// }

// > This is the shorten way of writing function :
// const sum = (a, b) => { // ‣ we store function in variable.
//     return a + b;
// }

// • Multiplication arrow function :
// const mul = (a, b) => {
//     return a * b;
// }
// let val = mul(3, 3);
// console.log(val);

// const printHello = () => { // ‣ we can use arrow function without parameter.
//     console.log("hello");
// }


/*
Q. Create a function using the "function" keyword that takes a String as an argument & returns the number of vowels in the string.
*/

// function countVowel(str) {
//     let count = 0;
//     for(let char of str) {
//         if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//             count++;
//         }
//     }
//     console.log(count);
// }

// ➢ Create an arrow function to perform the same task.

// const countVowel = (str) => {
//     let count = 0;
//     for(let char of str) {
//         if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//             count++;
//         }
//     }
//     console.log(count);
// } 


/*

→ forEach Loop in Arrays :

• arr.forEach(callBackFunction)

- CallBackFunction here it is a function to execute for each element in the array.

- A callback is a function passed as an argument to another function.

arr.forEach((val)) => {
    console.log(val);
}

*/

// let arr = [1, 2, 3, 4, 5];
// arr.forEach(function printVal(val) {
//     console.log(val);
// });

// Genarally we use arrow functions for forEach.

// let city = ["kolkata", "mumbai",  "delhi", "banglore"];
// city.forEach((val) => {
//     console.log(val);
// });


/*
➢ The forEach callback function has three parameters, which we can use.

(i) value, item we can name it anything, and each index holds a value.
(ii) idx - means position.
(iii) arr

- This is only use for 'arrays', not for 'strings'!
*/

// let city = ["kolkata", "delhi", "mumbai"];
// city.forEach((val, idx, arr) => {
//     console.log(val.toUpperCase(), idx, arr)
// });


/*
→ INTERVIEW QUESTION :

Q. What is Higher Order function/method?
A. Higher Order Function or Higher Order Method is a JavaScript method that either take another function as a parameter inside them or they return another function as their output.
*/

/*
→ Let's Practice :

Q. For a given array of numbers, print the square of each value using the forEach loop.
*/

// let arr = [1, 2, 3, 4];
// arr.forEach((val) => {
//     let square = val ** 2;
//     console.log(square);
// });

// • we can do with another way -

// let arr = [1, 2, 3, 4];
// let square = (val) => { // ‣ here we make a function
//     console.log(val ** 2);
// }

// arr.forEach(square); // ‣ then we used forEach so that the function works for each element in the array.


/*

→ Some more Array Methods :

(i) Map :

- Creates a new array with the results of some operation. The value its callback returns are used to form new array.

➢ arr.map(callbackFnx(value, index, array))


let newArr = arr.map((val) => {
return val * 2;
})

- 'map' method similar to 'forEach'.

- Just like the ‘forEach’ method works by going to each index of an array and performing some operation for each value, the ‘map’ method does the same job.

- The only difference between ‘forEach’ and ‘map’ is that ‘map’ returns a new array, whereas ‘forEach’ does not create a new array—it simply performs the task or calculation.

*/

// let num = [1, 2, 3, 4, 5];
// let newNum = num.map((val) => {
//     return val ** 2;
// });

// console.log(newNum);
// console.log(num); // ‣ if we print num there will be no change.


/*

(ii) Filter :

- Creates a new array of elements that give true for a condition/filter. 
• Eg: all even elements


let newArr = arr.filter(val) => {
return val % 2 === 0;
})

*/

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let evenArr = arr.filter((val) => {
//     return val % 2 === 0;
// });

// console.log(evenArr); 
// console.log(arr); // ‣ there will be no change in old arr.

/*

(iii) Reduce :

- Performs some operations & reduces the array to a single value. It returns that single value.

*/

// let num = [1, 2, 3, 4];
// let sumofNum = num.reduce((pre, curr) => {
//     return pre + curr;
// });

// console.log(sumofNum); // ‣ 10


// ➢ If we want to print largest number in array -

// let num = [1, 2, 3, 4];
// let largestNum = num.reduce((pre, curr) => {
//     return pre > curr ? pre : curr;
// });

// console.log(largestNum);


/*

→ Let's Practice :

Q. We are given array of marks of students. Filter out  of the marks of students that scored 90+.

*/

// let marks = [87, 93, 64, 99, 86];
// let toppers = marks.filter((val) => {
//     return val > 90;
// });

// console.log(toppers);


/*
Q. 
➢ Take a number n as input from user. Create an array of numbers from 1 to n.
➢ Use the reduce method to calculate sum of all numbers in the array.
➢ Use the reduce method to calculate product of all numbers in the array.
*/

// let n = prompt("Enter a number :");

// let arr = [];

// for(let i = 1; i <= n; i++) {
//     arr[i - 1] = i;
// }
// console.log(arr);

// let sum = arr.reduce((pre , cur) => {
//     return pre + cur;
// });

// console.log("Sum =", sum);

// let factorial = arr.reduce((pre, cur) => {
//     return pre * cur;
// });

// console.log("Factorial =", factorial);


/* ------------------------------------------------------------------------------------------------------------- */


// ➢ A function that sum two numbers :
function sum(num1, num2) {
    sum = num1 + num2;
    return sum;
}

let result = sum(1, 1);
console.log(result);



// ➢ With massage parameters : 
function user(name) {
    let output = `${name} is logged in.`;
    return output;
}

let output = user("samy");
console.log(output);



// ➢ With trinary operator :
function userName(name) {
    let undefinedUserName = "Please enter your username";
    let userOutput = `${name} just logged in.`;
    let result = !name ? undefinedUserName : userOutput;
    return result;
}

let final1 = userName(null);
console.log(final1);



/* 
• The logic is : name == undefined 

- undefined = falsy
- "" (empty string) = falsy
- null = falsy
- 0 = falsy
- false is obviously a falsy.

• “name == undefined” = “!name” is the same. 

• undefined == null (They are same but in (==) loose equal-to)

NOTE: They are not stricly equal to (===) false, they are falsy but not strictly equal to false.
*/



function userName(name) {
    let undefinedUserName = "Please enter your username";
    let userOutput = `${name} just logged in.`;
    let result = name ? userOutput : undefinedUserName;
    return result;
}

let final2 = userName(null);
console.log(final2);

/* 
➢ What happend in that situation?
- null ? userOutput : undefinedUserName; 
- so, if we pass falsy value in that situation JavaScript implicitly or automatically converts that in boolean value which in that situation is “false”. 

➢ If you have doubt check “Difference between Falsy & False”.

• If statement automatically converts null, undefined, 0, empty string, NaN Into a false value.
 */


/* -------------------------------------- Fucntions With Object And Array -------------------------------------- */


// → Fucntions with object and array :

function calculateCartPrice(val1, val2, ...rest) {
    return { val1, val2, rest };
}

let myResult = calculateCartPrice(100, 200, 300, 400, 2000);
console.log(myResult);



let num = [1, 2, 4];
console.log(...num); // ‣ 1 2 4



const user1 = {
    username: "Subho",
    age: 24,
}

const user2 = {
    username: "Tanushree",
    age: 23,
}

function handelObject(anyobject) {
    console.log(`The username is ${anyobject.username} and the age is ${anyobject.age}`);
}

handelObject(user2);



const myArray = [200, 400, 100, 600];
const marks = [74, 19, 44, 53, 62]

function returnSecondValue(anyarray) {
    return anyarray[1];
}

let myOutput = returnSecondValue(marks);
console.log(myOutput);


/* --------------------------------------- Scope Level And Mini Hoisting --------------------------------------- */

// → Scope level and mini hoisting :

function one() {
    const username = "subho";

    function two() {
        const website = "youtube";
        console.log(username);
    }

    two();
}

one();




console.log(addOne(2));
function addOne(num) {
    return num + 1;
}


// > Function Expression :
// console.log(addTwo(2)); // ! Error
// const addTwo = function (num) {
//     return num + 2;
// }

// • The error occurs because of hoisting and the way functions are declared in JavaScript.

/* ------------------------------------------------------------------------------------------------------------- */

// -> Explicit Return (Using {} Requires return)

const anotherAdd = (a, b) => { return a + b; };
console.log(anotherAdd(5, 2)); // ‣ Output: 7

// • If you use curly braces {}, you must use the “return” keyword.




/*
-> Implicit return :

• In JavaScript, implicit return occurs when a function automatically returns a value without using the return keyword explicitly. This is commonly used in arrow functions for concise syntax.
*/

const add = (a, b) => a + b;
console.log(add(5, 3)); // ‣ Output: 8


// • Since the function has only one expression (a + b), JavaScript automatically returns the result.
// • For no confusion always use parentheses ().

// > Example :

let sumTwo = (a, b) => (a + b);
console.log(sumTwo(1, 2));




// -> Implicit Return with Objects (Use () to Wrap) :

const getUser = () => ({ name: "John", age: 25 });
console.log(getUser()); // ‣ Output: { name: "John", age: 25 }

// • Objects must be wrapped in () to prevent confusion with function blocks {}.




// -> Implicit Return in Array Methods :

const numbers = [1, 2, 3, 4];
const squared = numbers.map(num => num * num);
console.log(squared); // ➣ Output: [1, 4, 9, 16]

// • The callback function in .map() implicitly returns num * num.



/* 
Note:

> For a single parameter, parentheses are optional in arrow functions.

const square = num => num * num;
console.log(square(4)); // ‣ Output: 16

- Since there’s only one parameter (num), parentheses are not required.

• ✅ With Parentheses (Also Correct)

const square = (num) => num * num;
console.log(square(4)); // ‣ Output: 16



> Parentheses are required when there are two or more parameters.

const add = (a, b) => a + b; // ‣ ✅ Correct  



> Returning an Object (Must Use ())

const getUser = () => ({ name: "Alice", age: 25 });

- Parentheses are required when returning an object, to avoid confusion with function blocks {}.


• So, for a single parameter, parentheses are optional, but they don’t cause errors if you use them.

*/

/* ------------------------------------------------------------------------------------------------------------- */

