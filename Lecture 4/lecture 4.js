// -> Lecture 4 : Arrays

/*
-> Arrays in JS :

- Collection of items.

(I) Create Array :

let heroes = ["ironman", "hulk", "thor", "batman"];
let marks = [96, 75, 48, 83, 66];
let info = ["rahul", 86, "Delhi"]; // we can write also this but it's not prefferable.

- As we know data is 2 types : (i) Premetive. (ii) Non-premetive.
- Premetive is basic data type.
- Objects and arrays is Non-premetive type.
- Arrays is linear method of storing information.
*/

/*
(II) Array Indeices :

- arr[0], arr[1], arr[2]

let marks = [97, 82, 64, 76, 36];
console.log(marks[2]);
console.log(marks[2] = 10] // we can also change value of array.

*/

/* 
-> Looping Over an Array :

- Print all elements of an array.

for(let i = 0; i < arr.length; i++);
console.log(arr[i]);
*/

// for loop example -

// let heroes = ["ironman", "hulk", "thor", "batman"];
// for(i = 0; i < heroes.length; i++) {
//     console.log(heroes[i]);
// }

// for-of example -

// let heroes = ["superman", "aquaman", "wonder-women", "flash"];
// for(let hero of heroes) {
//     console.log(hero);
// }

// let cities = ["kolkata", "banglore", "delhi", "mumbai"];
// for(let city of cities) {
//     console.log(city.toUpperCase()); // using string method to upper case.
// }


/*
Q.1. For given an array with marks of students -> [85, 97, 44, 37, 76, 60]
. Find the avarage marks of the entire class.
*/

// let marks = [85, 97, 44, 37, 76, 60];
// let sum = 0;

// for(let val of marks) {
//     sum += val; // sum = sum + val;
// }

// let avg = sum / marks.length;

// console.log(`The avarage marks of the entire class is : ${avg}`);

/* 
Q.2. For a given array with prices of 5 items -> [250, 645, 300, 900, 50]
. All items have an offer of 10% OFF on them. Change the array to store final price after applying offer.
*/

// let items = [250, 645, 300, 900, 50];

// for(i = 0; i < items.length; i++) {
//     let offer = items[i] / 10; // first we will devide individual items with 10.
//     items[i] -= offer; // then we will minus devided values with items, that's how we get percentage.
// }
// console.log(items);


/*
-> Array Methods :

- As we know, strings are immutable, meaning we can’t change them; any changes to a string result
- in a new string being created. However, with arrays, we can change the values using array methods,
- and some methods also return a new array.

1. push() - add to end / changes value
2. pop() - delete form end & return. / changes value
3. toString() - converts array to string. / returns a new array
4. concat() - join multiple arrays & returns result. / returns a new array
5. unshift() - add to start. / changes value
6. shift() - delete from start & return. / changes value 
7. slice() - returns a piece of the array / returns a new array
8. splice() - change original array (add, remove, replace) / returns a new array
*/

//1. push() : add to end / changes value
// let fruits = ["guava", "bannana", "apple", "cherry"];
// fruits.push("berry", "pineapple");
// console.log(fruits);

// 2. pop() : delete form end & return. / changes value
// let fruits = ["guava", "bannana", "apple", "cherry"];
// fruits.pop();
// console.log(fruits);

// 3.toString() : converts array to string / returns a new array
// let num = [11, 23, 44, 84];
// num = num.toString();
// console.log(num);

// 4.concat() - join multiple arrays & returns result. / returns a new array
// let marvelHeroes = ["ironman", "spiderman", "thor"];
// let dcHeroes = ["superman", "batman"];
// let indianHeroes = ["shaktiman", "krish"]
// let heroes = marvelHeroes.concat(dcHeroes, indianHeroes);
// console.log(heroes);

// 5.unshift() - add to start. 
// let marvelHeroes = ["ironman", "spiderman", "thor"];
// marvelHeroes.unshift("antman", "hulk");
// console.log(marvelHeroes);

// 6. shift() - delete from start & return. / chages value
// let item = ["pen", "pencil", "scale"];
// item.shift()
// console.log(item);

// 7. slice() - returns a piece of the array / returns a new array
// let item = ["maggie", "eggroll", "chowmin", "ghugni"];
// console.log(item.slice(1, 3));
// console.log(item.slice(1)); // Everything from index 1 onwards will be printed.

// 8. splice() - change original array (add, remove, replace) / returns a new array
// splice(startIdx, delCount, newEl1...)

// let arr = ["ironman", "hulk", "hawkye", "natasha", "thor", "captain america"];
// arr.splice(2, 2, "superman", "batman");
// arr.splice(2, 0, "spiderman", "moonknight"); // If we want to only add.
// arr.splice(2, 2); // If we want to only delete.
// arr.splice(2); // Everything from index 2 onwards will be deleted.
// console.log(arr);

/* ------------------------------------------------------------------------------------------------------------- */

/*
Q. Create an array to store companies -> "Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"
. a. Remove the first company from the array
. b. Remove Uber & Add Ola in its place
. c. Add Amazon at the end
*/

// let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
// companies.shift();
// companies.splice(2, 1, "Ola");
// companies.push("Amazon");
// console.log(companies); 

/* ------------------------------------------------------------------------------------------------------------- */


let marvelHeros = ["Ironman", "Captain America", "Hulk", "Hawkye", "Black Widow"];
let dcHeros = ["Superman", "Batman", "Wonder Women", "Aquaman", "Cyborg"];

// (i) Spread Operator :

let allHeros = [...marvelHeros, ...dcHeros];
console.log(allHeros);


// (ii) flat() :

let anotherArray = [1, 2, 3, [4, 5, 6], 7, [8, 9, [10, 11]]];
// - The flat method creates a new array and does not change the original array
let flatArray = anotherArray.flat(Infinity);
console.log(flatArray);


// (iii) Array.isArray() :
// - The Array.isArray() method checks if a given value is an array or not.

console.log(Array.isArray("Subho")); // > false
console.log(Array.isArray([1, 2, 3])); // > true

// - If given value is not array like "Subho" is not array, so we can covert into array.


// (iv) Array.from() :
// - Covert value into a array.

console.log(Array.from("Subho")); // > [ 'S', 'u', 'b', 'h', 'o' ]
// - This will converts "Subho" inot a array. 


// (v) Array.of() :
// - Returns a new array from set of elements.

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // > [ 100, 200, 300 ]









