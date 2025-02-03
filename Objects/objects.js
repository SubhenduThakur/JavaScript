/*
-> Objects :

> There are two ways to declare an object: 

(i). Literal.
(ii). Constructor.


• There is also the concept of “singleton”.

- The simple meaning of singleton is: if we create an object with a “constructor”, then a “singleton object” is created. It is a separate object like itself.

• But when an object is created in a different way, it does not become a “singleton”; instead, multiple instances of it are created.

• When we declare an object like a “literal”, it does not become a “singleton”.



NOTE:

	>	When an object is created using a “constructor”, it becomes a “singleton”.
	• Example : Object.create - Constructor Method > “singleton”

	>	When an object is created using literals, it does not become a singleton.
	• Example : const obj = {} - Literal Method




let obj = {
	name: "Subhendu",
	"full name": "Subhendu Thakur",
	age: "24",
	email: "subhenduthakur2@gmail.com",
	location: "Tribeni, Hooghly",
	isLogIn: false,
	lastLogIn: ["Monday", "Friday"],
}

console.log(obj.name); // > Subhendu
console.log(obj["email"]); // > subhenduthakur2@gmail.com

NOTE: Objects 'keys' are stores as “string”, “key values” we can store as any data type.

- So, if we make a key “full name” , we can't access with obj.key, we have to use “squre notation” : obj["key"]




-> How i declare that “Symbol” as key in object, that interviewer asks : 

let mySym = Symbol("myKey");

let obj2 = {
	[mySym]: "myKey2",
}

console.log(obj2); // > { [Symbol(myKey)]: 'myKey2' }




-> How to freeze a object?

let obj3 = {
	company: "Apple",
}

obj3.company = "Microsoft"; // - That's how we change object 'key values'.
console.log(obj3);

Object.freeze(obj3); // - After that i can't change 'key values'.

obj3.company = "Google"; // - Not be changed.
console.log(obj3);




-> More Declaring Object Method :

> First Method :

const tinderUser = new Object();
tinderUser.id = "subho.tinder";
tinderUser.email = "tinder@gmail.com";
console.log(tinderUser); // > { id: 'subho.tinder', email: 'tinder@gmail.com' }



> Second Method :

const bumbleUser = {};
bumbleUser.id = "subho.bumble";
bumbleUser.email = "bumble@gmail.com";
console.log(bumbleUser); // > { id: 'subho.bumble', email: 'bumble@gmail.com' }




-> Nesting In Object :

const regularUser = {
	email: "regular@gmail.com",
	fullName: {
		userfullName: {
			firstName: "Subhendu",
			lastName: "Thakur",
		}
	}
}

console.log(regularUser.fullName.userfullName.firstName); // > Subhendu




-> Merge Object :

• The Object.assign() static method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.




> Syntax :

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// Expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget === target);
// Expected output: true




> Merge :

const obj1 = { 1: "Dublu", 2: "dublu@yahoo.com" };
const obj2 = { 3: "Puchku", 4: "puchku@gmail.com" };

const merge = Object.assign(obj1, obj2); // > {'1': 'Dublu', '2': 'dublu@yahoo.com', '3': 'Puchku', '4': 'puchku@gmail.com'}
console.log(obj1);

• obj1 is “target” and obj2 is “source” , “source” object stores in “target” object.




> Overwritten :

const obj1 = { 1: "Dublu", 2: "dublu@yahoo.com" };
const obj2 = { 1: "Puchku", 2: "puchku@gmail.com" };

const merge = Object.assign(obj1, obj2); // > { '1': 'Puchku', '2': 'puchku@gmail.com' } -> obj2 ‘Overwritten’ to obj1
console.log(obj1);

• Properties in the target object are overwritten by properties in the sources if they have the same key. Later sources' properties overwrite earlier ones.




> Copy :

const obj1 = { a: 1 };
const obj2 = { b: 2 };
const copy = Object.assign({}, obj1, obj2);
console.log(copy); // > { a: 1, b: 2 }

• Basically we're storing obj1 & obj2 in empty object, the {} curly braces acting like “target”




> Spread Operator :

const obj1 = { a: 1 };
const obj2 = { b: 2 };
const merge = { ...obj1, ...obj2 };
console.log(merge); // > { a: 1, b: 2 }

• 90% we use that, we don't use Object.assign() that much :)




-> Array of Object :

const user = [
	{
		id: "subho.js",
		email: "subho@gmail.com"
	},

	{
		id: "laltu",
		email: "laltu@gmail.com",
	},

	{
		id: "boltu",
		email: "boltu@gmail.com",
	},

	{
		id: "paklu",
		email: "paklu@yahoo.com"
	},
]

console.log(user[1].id); // > laltu




-> Object Methods :

let obj1 = { a: 1, b: 2 };

console.log(Object.keys(obj1)); // > [ 'a', 'b' ]

console.log(Object.values(obj1)); // > [ 1, 2 ]

console.log(Object.entries(obj1)); // > [ [ 'a', 1 ], [ 'b', 2 ] ]

> For Checking :

console.log(obj1.hasOwnProperty('a')); // > true



-> Object de-structure :

> Syntax :
• {key} = object name
• {key: key nickname} = object name

const obj = {
	name: "pen",
	price: "139",
	productOnline: true,
}

const { productOnline } = obj;
console.log(productOnline); // > true

const { productOnline: On } = obj; // > Customize key name, it's like giving a short nickname, it's not changing original key name.
console.log(On);

*/







