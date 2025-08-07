// → Number and Math :

/* --------------------------------------------------- Number -------------------------------------------------- */

/*
→ Number :

• Number is a built-in object that represents numeric values. 
• It can be used in different ways:

➢ 1. Convert values to numbers:
- You can use Number() to convert a value to a number. For example:
let str = "123";
let num = Number(str);  // ‣ Converts the string "123" to the number 123
console.log(num);  // ‣ Output: 123

➢ 2. Check if a value is a number:
- Number.isNaN() checks if a value is NaN (Not-A-Number).
let value = "hello";
console.log(Number.isNaN(value));  // ‣ Output: true

➢ 3. Special values:
- JavaScript also has special values for Number:

•	Infinity and -Infinity: Represent positive and negative infinity.
•	NaN: Represents “Not a Number”, indicating an invalid number operation.
•	-0: Represents negative zero.

console.log(Number("123"));  // ‣ Output: 123
console.log(Number(true));   // ‣ Output: 1 (true is converted to 1)
console.log(Number(false));  // ‣ Output: 0 (false is converted to 0)
console.log(Number("abc"));  // ‣ Output: NaN (cannot convert "abc" to a number)

•	Number("123") becomes 123
•	Number(true) becomes 1
•	Number(false) becomes 0
•	Number("abc") becomes NaN because “abc” can’t be converted to a number.

➢ This function is useful for converting and validating values as numbers.
*/


let score = 400;
console.log(score);

let balance = new Number(100); 
console.log(balance); // ‣ Number {100}
// - That means i am defining a new 'object' which is of 'number type'.


/* 
→ Number Methods :

(i). toString()
(ii). toFixed()
(iii). toPrecision() 
(iv). toLocaleString()


(i). toString() :
- Converts the number to a string representation.

let num = Number(123);
console.log(num.toString());  // ‣ "123"




(ii). toFixed() :
- Formats a number to a specific number of decimal places.

let num2 = 123;
console.log(num2.toFixed(2)); // ‣ 123.00
- Added 2 decimal numbers, if i wrote 1 then decimal number will '123.0'.



(iii). toPrecision() :
- Formats a number to a specified number of significant digits.

let num3 = 12.8044;
console.log(num3.toPrecision(3)); // ‣ 12.8

- What this is doing is, it's giving me precise value with '3 decimals'.
➢ NOTE: It's also doing 'round of values', for example:

console.log(num3.toPrecision(2)); // ‣ 13   // 12.8044 = 13, because '12.8' is bigger

- The output is '13' because 12.7 is big and it's rounded of.




(iv).toLocaleString() :
- Returns a string representing the number in a localized format.

let num4 = 1000000;
console.log(num4.toLocaleString()); // ‣ 1,000,000  // it's by defalut in US standards.

- If we convert number system in INDIAN standards : ('en-IN')

console.log(num4.toLocaleString('en-IN')); // ‣ 10,00,000
*/

/* --------------------------------------------------- Math ---------------------------------------------------- */

/*
→ Math :

• Math is an object that provides methods and constants for performing common mathematical operations.


→ Math Methods :

(i). Math.abs()
(ii). Math.round()
(iii). Math.ceil()
(iv). Math.floor()
(v). Math.pow()
(vi). Math.sqrt()
(vii). Math.min()
(viii). Math.max()
(ix). Math.random()


(i). Math.abs() :
- Returns the absolute(positve) value of a number.

console.log(Math.abs(-4)); // ‣ 4



(ii). Math.round() :
- Rounds a number to the nearest integer (rounds up or down based on the decimal).

console.log(Math.round(4.5)); // ‣ 5
console.log(Math.round(4.49)); // ‣ 4

★ NOTE : '0.5' count as a "bigger number", if i round '0.5' the output will be '1'.



(iii) Math.ceil() :
- Rounds a number UP to the nearest integer.

console.log(Math.ceil(4.2)); // ‣ 5

• If the number is '0.1' or '0.000001' bigger then it will rounded UP to the nearsest integer,
_ in that situation nearest integer is '1'.



Q. What is Integer?
A. An integer is a whole number that can be positive, negative, or zero. 
_ It does not have a fractional or decimal componant .
_ In mathematics, the rest of integers is represented as:
➢ Z = {..., -3, -2, -1, 0, 1, 2, 3, ...}

➢ Integers: 
• Positive integers : 1, 2, 3, 4,...
• Negetive integers : -1, -2, -3, -4,...
• Zero : 0 (neutral, neither positive nor negetive)

➢ Non-Integers :
• Decimal numbers : 1.5, -3.14
• Fractions : 1/2, -3/4
• Non-numberic values : "abc", NaN



(iv). Math.floor() :
- Rounds a number DOWN to the nearest integer.

console.log(Math.floor(4.2)); // ‣ 4



(v). Math.pow() :
- Returns the base raised to the power of the exponent.

console.log(Math.pow(2, 3)); // ‣ 2^3 = 2 * 2 * 2 // 8



(vi). Math.sqrt() :
- Returns the square root of a number.

console.log(Math.sqrt(16)); // ‣ 16 = 4 * 4 // 4



(vii). Math.min() :
- Returns the smallest of zero or more numbers.

console.log(Math.min(2, 8, 9, 3)); // ‣ 2



(viii). Math.max() :
- Returns the largest of zero or more numbers.

console.log(Math.min(2, 8, 9, 3)); // ‣ 9



(ix). Math.random() :
- Returns a random floating-point number between 0 (inclusive) and 1 (exclusive).


Q. What is Inclusive and Exclusive?
A. Inclusive and Exclusive are terms used to specify whether the boundary values are 
_ included or excluded in a array or interval.

> Inclusive :
- When a range is inclusive, 'it includes the boundary values'.

• The range [1, 5] (inclusive) includes 1, 2, 3, 4 and 5.

> Exclusive :
- When a range is exclusive, 'it excludes the boundary values'.

• The range [1, 5] (exclusive) includes 2, 3, and 4 but 'not 1 or 5'.


console.log(Math.random()); // ‣ genarates ramdom number '0 - 1' and mostly random value will be in decimals. // e.g., 0.456789


• If we need random value 0 - 10 :

console.log(Math.random() * 10); // ‣ e.g., 3.1734561443670195 | 7.030885936663907 | 8.918329734905264 

- In that case we can get '0' too.



• If we don't need 0 :

console.log((Math.random() * 10) + 1); // ‣ We are doing '+ 1" with every output



• If we need a whole number (1, 2, 3...) :

console.log(Math.floor(Math.random() * 10) + 1); // ‣ 1 | 4 | 7 

- We can use Math.floor() in that case.


• If we need random number 10 to 20 :

let min = 10;
let max = 20;

let random = Math.floor(Math.random() * (max - min + 1) + min); // ‣ (random number * (20 - 10 + 1) + 10)
console.log(random);
*/

