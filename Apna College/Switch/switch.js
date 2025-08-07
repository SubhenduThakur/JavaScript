/* 
--------------------------------------------------- SWITCH -------------------------------------------------- 

• The switch statement in JavaScript is used for decision-making, similar to if-else statements. It allows you to evaluate
⎜ a single expression against multiple possible cases, making the code cleaner and more readable when dealing with multiple
⎜ conditions.


✦ Syntax

⎜ switch (expression) {
⎜     case value1:
⎜         // Code to execute if expression === value1
⎜         break;
⎜     case value2:
⎜         // Code to execute if expression === value2
⎜         break;
⎜     default:
⎜         // Code to execute if no cases match
⎜ }


➢ How It Works:

	1.	The expression is evaluated.
	2.	It is compared against each case value.
	3.	If a match is found, the corresponding code block runs.
	4.	The break statement stops further execution; otherwise, the next case runs (fall-through).
	5.	The default case executes if no cases match (like an else in if-else).

-------------------------------------------------------------------------------------------------------------

let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Invalid day");
}
    
‣ Output: Wednesday (because day is 3)


☆ Important Points:

	•	break is necessary to prevent fall-through.
	•	default is optional but recommended.


    
★ If we don't add break at some point then, next all cases code will be executed by default.

• For example:

let day = 2;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        //break; // ‣ break point is removed
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Invalid day");
}

- We removed case 2: breakpoint, and when case 2: will match, case 3: definiton also will run, because we didn't add any
⎜ breakpoint.

• It will run all code after matched case except ‘defalut’.

‣ Output: 
. Tuesday
. Wednesday




➢ Can use multiple cases together:

let fruit = "apple";

switch (fruit) {
    case "apple":
    case "banana":
        console.log("It's a fruit.");
        break;
    default:
        console.log("Unknown item.");
}

------------------------------------------------------------------------------------------------------------- 
*/


let item = "apple";
switch (item) {
    case "apple":
    case "banana":
    case "guava":
    case "lichi":
    case "pineapple":
    case "berry":
        console.log("It's a fruit");
        break;
    default:
        console.log("It's not a fruit");
}

/*
☆ You can assume it as a lock, and when you pass right key it will execute the definition.

- What's happeing here? what you're seeing is, multiple cases runing same definition.
- In here, We grouped cases and when it's matched it will execute the difinition.

➢ We use case grouping (fall-through) in a switch statement when multiple values should trigger the same execution block.
. This helps avoid code duplication and keeps our logic clean and efficient.

*/

// ✦ When multiple inputs have the same outcome
// • Example: Handling case-insensitive user input.
let letter = "e";

switch (letter) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
        console.log("It's a vowel.");
        break;
    default:
        console.log("It's a consonant.");
}


// ✦ When handling different formats of the same value
// • Example: Checking for vowels.
let answer = "YES";

switch (answer.toLowerCase()) {
    case "yes":
    case "y":
        console.log("You agreed!");
        break;
    case "no":
    case "n":
        console.log("You disagreed!");
        break;
    default:
        console.log("Invalid input.");
}



// ✦ When multiple cases should perform the same action before moving on
// • Example: Assigning seasons based on months.
let month = "march";

switch (month) {
    case "december":
    case "january":
    case "february":
        console.log("It's winter.");
        break;
    case "march":
    case "april":
    case "may":
        console.log("It's spring.");
        break;
    default:
        console.log("Not a valid month.");
}

// - Instead of writing "It's winter." separately for each month, we group them.


/*
☆ Key Takeaways

1. Use grouping when different cases need the same execution.
2. This avoids code duplication and makes it more readable.
3. Always add break; unless you intentionally want fall-through.

✦ And intentionally fall-through means grouping.
*/


