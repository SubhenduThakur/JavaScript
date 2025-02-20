/* 
-------------------------------------- Nullish Coalescing Operator(??) --------------------------------------

- The Nullish Coalescing Operator (??) in JavaScript is used to provide a default value when a variable is null or undefined.
⎜ It is useful when handling values that might be missing but still want to differentiate between falsy values (0, false, "")
⎜ and truly nullish values (null, undefined).

NOTE: Simply, it “shorts out” only null and undefined values or variables that contain null or undefined values.

✦ Syntax :

➢ let result = value1 ?? value2;

	•	If value1 is not null or undefined, result will be value1.
	•	If value1 is null or undefined, result will be value2. 

-------------------------------------------------------------------------------------------------------------

➢ Example 1: Using ?? to Provide a Default Value →

let username = null;
let defaultName = "Guest";

let displayName = username ?? defaultName; 
console.log(displayName); // ‣ Output: "Guest"

- Here, since username is null, defaultName is assigned to displayName.

-------------------------------------------------------------------------------------------------------------

➢ Example 2: Difference Between ?? and || →

- Many developers previously used the OR (||) operator to provide default values, but it treats all falsy values
⎣ (e.g., 0, false, "") as false, which may lead to unintended results.


let score = 0;

console.log(score || 100); // ‣ Output: 100 (because 0 is falsy)
console.log(score ?? 100); // ‣ Output: 0   (because 0 is NOT null/undefined)


• score || 100 returns 100 because 0 is falsy.
• score ?? 100 correctly returns 0 because 0 is not null or undefined.

-------------------------------------------------------------------------------------------------------------

➢ Example 3: Chaining Nullish Coalescing Operator →

-  You can chain ?? to check multiple values:

let user;
let fallback1 = null;
let fallback2 = "Default User";

let result = user ?? fallback1 ?? fallback2;
console.log(result); // ‣ Output: "Default User"

-------------------------------------------------------------------------------------------------------------

✦ Use Cases :

	1.	Providing Default Values when a variable might be null or undefined.
	2.	Handling API Responses where some properties might be missing.
	3.	Avoiding Unintended Falsy Checks (like 0, false, or "") that || may incorrectly override.

------------------------------------------------------------------------------------------------------------- */

let score = 0;

console.log(score || 100); // ‣ Output: 100 (because 0 is falsy)
console.log(score ?? 100); // ‣ Output: 0   (because 0 is NOT null/undefined)



let name = null;
let fallback = "Guest";

console.log(fallback ?? name); // ‣ Output: "Guest"




