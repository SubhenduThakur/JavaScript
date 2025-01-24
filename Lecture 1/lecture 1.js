// LECTURE 1 : Variables & Data Types


/*
console.log("subho");

fullName = "Tony Stark";
age = 23;
price = 69,990;
radius = 14;
a = null;
x = undefined;

isFollow = true;
console.log(fullName);
*/

// Variable Rules
// 1. Variable name are case sensitive; "a" & "A" is different.
// 2. Only letters, digits, underscore(_) and $ is allowed. (not even space)
// 3. Only a letter, underscore(_) or $ should be 1st character.
// 4. Reserved words cannot be variable names.

/* 
Fullname = "Tony Strak";
fullName = "Bruce Banner"; (also this is the correct way to write variable names)
FULLNAME = "Thanos";

- also we can use characters.

_fullName = "Natasha Romonoff";
$fullName = "Steve Rogger";

- also we can use numbers but not in first letter.
- "1fullName" this is wrong.

f1ullName = "Thor";

- reserved words can not be variable names.

Types of cases -

fullName -> Camel Case (we alaways use camel case)
fullname (we never use that)
full_name -> Snake Case
full-name -> Kebab Case
FullName -> Pascal Case
*/

/*

let, const & var 

var : Variable can be re-declared. A global scope variable.
let : Variable cannot be re-declared but can be updated. A block scope variable.
const : Variable cannot be re-declared or updated. A block scope variable.

*/


/*

var -

var age = 23;
var age = 30; // we can re-declared it and also update it.
var age = 40; // it will show this because this is the last update.

console.log(age);

let -

let age = 22;
age = 30; // we cannot re-declared it, but we can update it.
age = 25;

console.log(age);

const -

const age = 25; // it cannot be re-declared or updated, it is fixed.

console.log(age);

*/

// - If i make variable :

// let a;
// console.log(a);

// - The output will be "undefined"

// - If i make a variable :

// const a;
// console.log(a);

/*
- It will be an ERROR, because 'const' delarations must be initialized.
Hence, if we use 'const' so we have to initialized with value, basically we have to give any value,
otherwise it will be an ERROR.
*/

// - In programming language 'block' means curly brackets {}.

/*

{
const age = 23;
console.log(age);
}

*/

/*

Data types in JS :

- Number.
- Sting.
- Boolean.
- Undefined.
- Null.
- BigInt.
- Symbol.

// let x = BigInt("123");
// let y = Symbol("Hello");

NOTE : This all Primitive Data Type.
'Arrays & Funtions' are Non-primitive Data Type

*/

/* 

- 'Object' is collection of data type.

Example :

Students ->
Name - Sting
age - Number
marks - Number
isPass - Boolean

- If we make a collection of this primitive data types, then will call it as 'Object'.
- And generally, the key value pair is stored in the object that we have.
- Decalaring a object we use 'const' but we can also use 'let'.

*/

// const student = {
//     fullName : "Subhendu Thakur",
//     age : 23,
//     cgpa : 8.2,
//     isPass : true,
// }

/*

- Object means collection of different variables.
- If we need only specific 'key/variable' we will type in chrome 'student["fullName"]' 
or 'student.fullName'
1. obj.key
2. obj["key"]

- If we make a variable and re-assign the value in 'Object' :

1. obj.key 

student.age = student.age + 1;
student.fullName = "Piter Parker";

2. obj["key"] 

student["age"] = student ["age"] + 1;
student["fullName"] = "Tony Stark";

NOTE : We can't change 'const' variable but if we make an 'Object' with 'const' then we can
change/update key value.

*/


// Let's Practice :

// Qs1. Create a const object called "product" to store information shown in the picture.
/*
const product = {
    fullName : "Parker Jotter Standard CT Ball Pen (Black)",
    ratigs : 4,
    revies : 7002,
    isDeal : true,
    mrp : 270,
    offer : 5,
}

console.log(product);
*/

// Qs2. Create a const object called "profile" to store information shown in the picture.
/*
const profile = {
    id : "shradhakhapra",
    isFollow : true,
    posts : 195,
    followers : 569000,
    following : 4,
    idName : "Shradha Khapra",
}

console.log(profile);
*/










