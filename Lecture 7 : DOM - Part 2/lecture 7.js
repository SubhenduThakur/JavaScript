/*
-> Chapter 6 : DOM - Part 2

DOM Manipulation :

Attributes 

• getAttribute(attr) // to get the attributes value
• setAttribute(attr, value) // to set the attribute val th

*/

// getAttribute(attr) -

// let div = document.querySelector("div"); 
// console.dir(div); 

// let id = div.getAttribute("id"); 
// console.log(id); 

// let para = document.querySelector("p");
// console.log(para.getAttribute("class"));

// setAttribute(attr, value) -

// para.setAttribute("class", "myClass"); 



// Style :

// • node.style

// let div = document.querySelector("div");
// div.style.backgroundColor = "purple";
// div.style.fontSize = "26px"; 
// div.innerText = "Hello"; 

/*

» This is how we chage style on JS.
» In JavaScript, we can change many properties like style, attributes, and text.
» If we want, we can make changes to our elements directly in JavaScript without modifying 
the HTML or CSS.

 

Insert Elements :

let el = document.createElemnt("div");

• node.append(el) // adds at the end of node (inside)
• node.prepend(el) // adds at the start of node (inside)
• node.before(el) // adds before the node (outside)
• node.after(el) // adds after the node (outside)

Delete Elements :

• node.remove() // removes the node

*/

// let newBtn = document.createElement("button");
// newBtn.innerText = "Click me";

// document.querySelector("div").append(newBtn);

// // let para = document.querySelector("p");
// // para.after(newBtn);

// document.querySelector("p").before(newBtn);


// let heading = document.createElement("h1");
// heading.innerText = "DOM Manipulation";
// document.querySelector("body").prepend(heading);

// para.remove();


// Examples of Insert Elements :

// • node.append(el) - adds at the end of node. (inside)

// let para = document.createElement("p");
// para.innerText = "This is a example of Insert Elements";
// document.body.append(para);

// let btn = document.createElement("button");
// btn.innerText = "Click here";
// para.append(btn);

/*
HTML Exampel :

<body>
    <div>

    </div>
    <p>
        This is a example of Insert Elements
        <button> Click here </button> // append means adds inside end of the node.
    </p>
</body> 
*/

// • node.prepend(el) - adds at the start of node. (inside)

// para.prepend(btn);


/*
HTML Exampel :

<body>
    <div>

    </div>
    <p>
    <button> Click here </button> // prepend means adds inside start of the node.
        This is a example of Insert Elements
    </p>
</body> 
*/


// • node.before(el) - adds before the node. (outside)

// para.before(btn);


/*
HTML Exampel :

<body>
    <div>

    </div>
    <button> Click here </button> // adds before of the node
    <p> This is a example of Insert Elements </p>
</body> 
*/

// • node.after(el) - adds after of node . (outside)

// para.after(btn);


/*
HTML Exampel :

<body>
    <div>

    </div>
    <p> This is a example of Insert Elements </p>
    <button> Click here </button> // adds after of the node
</body> 
*/





/* 
HOMEWORK :

Q. What is appenChild().

A. The appendChild() method of the node interface adds a node to the end of the list of a specified
parent node. 
*/
// My Example :

// let btn3 = document.createElement("button");
// btn3.innerText = "Button";

// document.querySelector("ul").appendChild("abc");

/*
The only difference between append() and appendChild() is :

	1.	append():
	•	Adds one or more nodes or strings to the end of a parent node.
	•	Can add text as well as multiple nodes at once.

	2.	appendChild():
	•	Adds only a single node (not text) to the end of a parent node.
	•	Only accepts a node, so if you try to add text directly, it will throw an error.

In summary:

	•	Use append() when you want to add multiple nodes or text.
	•	Use appendChild() when you’re only adding one specific node and don’t need to add text.
*/

// MDN Docs Example :

// const p = document.createElement("p");
// p.innerText = "hello world";
// document.body.appendChild(p);

// const paragraph = document.body.appendChild(document.createElement("p"));
// paragraph.innerText = "hey taxi";
// You can append more elements to the paragraph later


/* 
What is removeChild().

- The removeChild() method of the Node interface removes a child node from the DOM and returns the 
removed node.

HTML:

<div id="parent">
  <div id="child"></div>
</div>

JS:

const parent = document.getElementById("parent");
const child = document.getElementById("child");
const throwawayNode = parent.removeChild(child);

• Difference between remove() and removeChild() :

- The main difference between remove() and removeChild() in JavaScript lies in how they work and what 
they’re used for.

1. remove()

	•	Description: remove() is a method that can be called directly on the element you want to 
    remove, without needing to reference its parent.
	•	Usage: It’s simpler and is used when you have a direct reference to the element you want to 
    delete.

2. removeChild()

	•	Description: removeChild() is a method called on a parent node to remove a specific child node.
	•	Usage: You need to know both the parent and the child element to use removeChild().

- Use remove() for simplicity when you have direct access to the element.
- Use removeChild() when you’re working with a parent-child structure or need the removed element 
returned for further processing.
*/

// My HTML chatGPT example :
// let ul = document.querySelector("ul");
// let removeLichi = document.querySelectorAll("li")[2];
// ul.removeChild(removeLichi);

/*
• Let's Practice :

Qs. Create a new button element. Give it a text "click me", background color of red & text color of 
white.
Insert the button as the first element inside the body tag.
*/

// btn = document.createElement("button");
// btn.innerText = "click me";

// btn.style.backgroundColor = "red";
// btn.style.color = "white";

// document.body.prepend(btn);

/*
Qs. Create a <p> tag in html, give it a class & some styling.

Now create a new class in CSS and try to append this class to the <p> el

Did you notice, how you overwrite the class name when you add a new
Solve this problem using classList.
*/

// let para = document.querySelector(".para");
// para.classList.add("newPara");
