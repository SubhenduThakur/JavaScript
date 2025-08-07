// -> Lecture 2 : Operators And Conditional Statements

/* 

Operators in JS :

(I) Arithmetic Operator.
(II) Assignment Operator.
(III) Comperison Operator.
(IV) Logical Operator.
(V) Ternary Operator.

Used to perform some 'operation' on data.

(I) Arithmetic Operators :

1. Plus (+)"a + b =", a + b
2. Minus (-)
3. Asterisk (*)
4. Slash (/)
5. Modulus (%)
6. Exponentiation (**)

*/

/*

let a = 5;
let b = 2;

console.log(); // 7
console.log("a - b =", a - b); // 3
console.log("a * b =", a * b); // 10
console.log("a / b =", a / b); // 2.5
console.log("a % b =", a % b); // 1
console.log("a ** b =", a ** b); // 25

*/

/* 

Genrally, these operators works on two operands (like a & b), but in arithmetic operator we have
also two specific operators that works on single operands (like 'a'), and we called it Unary Operators.

- We don't see that kind of operators in mathematics, but we see in programming.

Unary Operator :

1. Increment (++)
2. Decrement (--)

Example : 

1. a++ -> a + 1
2. a-- -> a - 1

*/

// let a = 5;
// let b = 2;

// console.log("a = " , a ,"& b = " , b);

// a++;

// console.log("a = " , a);

/*

a++ (Post Increment)  
++a (Pre Increment)

a-- (Post Increment)
--a (Pre Increment)

*/

// let a = 5;
// let b = 2;

// console.log("a = " , a ,"& b = " , b);

// a++; // If i want to do 'a + 1' in one line 

// console.log("a = " , a);


// 1. a++ (Post Increment) :

// let a = 5;
// let b = 2;

// console.log("a = " , a ,"& b = " , b);

// console.log("a++ = " , a++); // Then value of 'a' changes in second line, first it will print 'a' original value.

// console.log("a++ = " , a++) // Then it will print changed value '6'.


// ++a (Pre Increment) :

// let a = 5;
// let b = 2;

// console.log("a = " , a ,"& b = " , b);

// console.log("++a = " , ++a); // In Pre Increment first value will be changes, we don't have to write second line.


/* 
(II) Assignment Operators :

- Assignment Operators work is to 'assign value'.

1. Equal-to (=)
2. Plus Equal-to (+=)
3. Minus Equal-to (-=)
4. Asterisk Equal-to (*=)
5. Modulus Equal-to (%=)
6. Exponentiation Equal-to (**=)
7. Slash Equal-to (/=) 

let a = 5;

a += 4; // means a = a + 4; that means 5 + 4

console.log("a = ", a); // a = 9
*/


/*

(III) Comparison Operators :

1. Double Equal to (==)
2. Not equal to (!=)
3. Equal to & type (===)
4. Not equal to & type (!==)
5. Greater-than (>)
6. Greater-than equal to (>=)
7. Less-than (<)
8. Less-than equal to (<=)

*/

// let a = 5;
// let b = 2;

// console.log("a == b", a == b); // Output will 'false', because '5' is not equal of '2'.
// console.log("a != b", a != b); // Now our output will be 'true'.

// - if we compare something output alaways will be an boolean value, 'true or false'.

// Now 😏 if we compare a 'number' value with a 'string' value, for example :

// let a = "5";
// let b = 5;

// console.log("a == b", a == b) // Guess what will be output? the output will be 'true'. 

/* 
The output is 'true' because, in JavaScript when a 'number' value stored in a 'string' then JS 
automaticlly converts that in 'number' value.

- In that case, we use 'Triple Equal to (===)' Triple Equal to is stict version of equal to.
- Triple Equal to also check data type.
- Triple Equal to does not allow comparing 'number' with 'string'.
*/

// let a = "5";
// let b = 5;

// console.log("a === b", a === b); // The output will be 'false'.

/*
- If we want to compare 'number' specificly, then we use 'Double Equal to (==)'
- If we want to compare only numbers with numbers, not with strings, then we use the srict operator
'Triple Equal to (===)'
*/

// Greater than and Less than :

// let a = 5;
// let b = 3;

// console.log("a > b =", a > b); // true
// console.log("a < b =", a < b); // false

// Greater than Equal to and Less than equal to :

// let a = 5;
// let b = 2;

// console.log("a >= b =", a >= b); // true

// let a = 5;
// let b = 5;

// console.log("a <= b =", a <= b); // true


/*
(IV) Logical Operators :

1. Logical AND (&&)
2. Logical OR (||)
3. Logical NOT (!)

- 'Logical Operators' are different from 'Comparision operators'.
- 'Comparison Operators' compare values with other value,
The 'Logical operator' evaluates multiple expressions to give a final answer.
- A 'logical operator' means that if one expression is 'true' and another expression is either 
'true or false', then the final answer is determined based on the outputs of both. 
In such situations, we use a 'logical operator'.
*/

// 1. Logical AND (&&) :

// - The final answer will be 'true' only if both expressions are 'true'.

// let a = 6;
// let b = 5;

// let cond1 = a > b; // true
// let cond2 = a === 6; // true

// console.log("cond 1 && cond2 =", cond1 && cond2); // true
// console.log("cond 1 && cond2 =", a > b && a === 6); // we can write it this way as well.

// - We will use the logical AND (&&) when we want both conditions to be 'true'.

/* 
2. Logical OR (||) :

- Logical OR (||) says that if either of the two conditions returns 'true',
the final answer will also return 'true'.
*/

// let a = 6;
// let b = 5;

// console.log("cond 1 || cond2 =", a < b || a === 6); // true

/*

A ‘true’ value will be returned here because one of the conditions is true.
If both conditions were false, only then would it return ‘false’.

3. Logical NOT (||) :

- The Logical Not (||) operator will make any expression that is true become false,
and any expression that is false become true

*/

// let a = 6;
// let b = 5;

// console.log("!(6 < 5) =", !(6 < 5)); // true


/*

Conditional Satement :

1. if 
2. if-else 
3. else-if

- To  implement some condition in the code.

*/

// 1. if Satement

// let color;
// if(mode === "dark-mode"){
//     color = "black";
// }

// let age = 23;

// if(age > 18) {
//     console.log("You can vote");
// }


// let mode = "dark";
// let color;

// if(mode === "dark") {
//     color = "black";
// }

// if(mode === "light") {
//     color = "white";
// }

// console.log(color);



// 2. if-else Satement

// Color Example -

// let mode = "dark";
// let color;

// if(mode === "dark") {
//     color = "balck";
// } else {
//     color = "white";
// }


// Number Example -

// let age = 23;

// if(age >= 18) {
//     console.log("You can vote");
// } else {
//     console.log("You can not vote!")
// }

// Odd Even Example -

// let num = 7;
// if(num % 2 === 0) {
//     console.log(num, "is even");
// } else {
//     console.log(num, "is odd");
// }

// else-if Satement 

// if(age < 18) {
//     console.log("Junior");
// } else if(age > 60) {
//     console.log("Senior");
// } else {
//     console.log("Middle");
// }

// Color Example -

// let mode = "dark";
// let color;

// if(mode === "dark") {
//     color = "black";
// } else if(mode === "blue") {
//     color = "blue";
// } else if(mode === "pink") {
//     color = "pink";
// } else {
//     color = "white";
// }

// console.log(color);


/* 
Q. Crate a code where i have to type age and when i type age, if age is 18 - 40 print "Junior",
if age 40 - 60 print "Senior" and when age is above 60 print "Expert" and when age is below 18
print "You are not eligible".

This my own question and solution.
*/

// let age = prompt("Type your age :");

// if(age >= 18 && age < 40) {
//     console.log("Junior");
// } else if(age >= 40 && age < 60) {
//     console.log("Senior");
// } else if(age > 60) {
//     console.log("Expert");
// } else {
//     console.log("You are not eligible");
// }


// This is same thing in short way, ChatGPT solution. This is with Ternary Operator.

// const age = prompt("Type your age");

// const result = 
//     age < 18 ? "You are not eligible" :
//     age < 40 ? "Junior" :
//     age < 60 ? "Senior" : "Expert";  

// console.log(result);

/*

(V) Ternary Operator :

condition ? true output : false output

Example -

age > 18 ? "adult" : "not adult";

- Here we are asking about the value of the condition or expression with a question mark (?), whether it is 'true' or 'false'.

- Ternary Operator is shorten & alternative way of if-else.

*/


/*

Let's Practice :

Qs1. Get user to input a number using prompt("Enter a number:"). Check if the number is a multiple
of 5 or not.

*/

// let num = prompt("Enter a number :");

// if(num % 5 === 0) {
//     console.log(num, "is multiple of 5");
// } else {
//     console.log(num, "is not multiple of 5");
// }


/* 
Qs2. Write a code which can give grades to students according to their scores : 

90 - 100, A
70 - 89, B
60 - 69, C
50 - 59, D
0 - 49, F
*/

// let score = prompt("Type your score :");
// let grade;

// if(score >= 90 && score <= 100) {
//     grade = "Your grade is : A.";
// } else if(score >= 70 && score <= 89) {
//     grade = "Your grade is : B";
// } else if(score >= 60 && score <= 69) {
//     grade = "Your grade is : C";
// } else if(score >= 50 && score <= 59) {
//     grade = "Your grade is : D."
// } else if(score <= 49) {
//     grade = "Your grade is : F."
// } else {
//     grade = "Plese type your score between 0 - 100."
// }

// console.log(grade);

































