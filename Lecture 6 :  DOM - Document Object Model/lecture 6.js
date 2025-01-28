// -> Lecture 6 :  DOM - Document Object Model

/* 

The 3 Musketers of Web Devolopment -

(i) HTML - structure
(ii) CSS - style
(iii) JS - logic

(i) HTML (Highper Text Markup Language)
- Use for content, heading, button, paragaraph, etc.

(ii) CSS (Cascading Style Sheets)
- Used for website styling, background colors, button slyle, text color, effect, moving elements, etc.

(iii) JS (JavaScript)
- Working with JavaScript involves adding logic to the website,
meaning what changes will happen on our website when a button is clicked.

*/

/*
Starter Code :

<style> tag connects HTML with CSS
<script> tag connects HTML with JS
*/

/*

 HTML :

<html>
    <head>
        <title> // Website name </title>
    </head>
    <body>
        // Content Tags
    </body>
</html>

*/

/*
Window Object :

- The window object represents an open window in a browser. It is browser's object (not JavaScript's)
& is automatically created by browser.
It is a global object with lots of properties & methods. 


What is DOM?

- When a web page is loaded, the browser creates a Document Object Model (DOM) of the page

- We can access HTML code in JavaScript, and this HTML code or element gets converted into an object 
within JavaScript. This special object is called 'document'.

HTML -> JS Access -> object -> document

- And within this document, we can access the HTML. 

console.log -> print object as an element.
console.dir -> document -> propeties, method

NOTE : DOM is representation of HTML in JavaScript.
*/


/*

DOM Manipulation :

Selecting with id -
• document.getElementByld("myld")

Selecting with class -
• document.getElementsByClassName("myClass")

Selecting with tag - 
• document.getElementsByTagName("p")

*/

// let button = document.getElementById("myId");
// console.dir(button);

// let heading = document.getElementsByClassName("myClass");
// console.dir(heading);

// let para = document.getElementsByTagName("p");
// console.dir(para);

/*

- There is an even better way to access our elements, which is called The Query Selector.

Query Selector :

• document.querySelector("myld/myClass/tag")
- It returns first element

• document.querySelectorAll("myld/myClass/tag")
- It returns a NodeList
*/

// let firstEl = document.querySelector("#myId");
// console.dir(firstEl);

// let myClass = document.querySelectorAll(".myClass");
// console.dir(myClass);

 
/*

Properties -

• tagName : returns tag for element nodes
• innerText: returns the text content of the element and all its children
• innerHTML : returns the plain text or HTML contents in the element
• textContent: returns textual content even for hidden elements

*/

// • tagName :

// let firstEl = document.querySelector("p"); // firstEl.tagName -> 'P'

// » To print the tag name of any property, we use .tagName


// • innerText :

// let div = document.querySelector("div");
// console.dir(div); 

/* 
- If we view the inner text of a div, then along with the inner text of the div,
the inner text of the div’s children will also be included. 
*/

/*
• innerHTML :

- in innerHTML shows HTML tags also.
- We can dynamically change our entire innerHTML and innerText at runtime if we want.
Ex:
div.innerText = "abcd";
div.innerHTML = <div> inner div </div>;

- It will change innerText or innerHTML temporarily.

- Creting new <h1> heading on HTML and accessing <h1> on JS.

let heading = document.querySelector("h1");

On chrome :

heading.innerText = "New Heading"; // we can change heading.
'New Heading'
heading.innerHTML = "<i> Italic Heading </i>"; // also we can change heading format.
'<i> Italic Heading </i>'

*/

/*
Let's Practice :

Qs. Create a H2 heading element with text - "Hello JavaScript". Append "from Apna Collage students" 
to this text using JS.
*/

// let h2 = document.querySelector("h2");
// h2.innerText = h2.innerText + " from Apna Collage students";

/*
Qs. Create 3 divs with common class name - "box".
Access them & add some unique text to each of them.
*/

// let div = document.querySelectorAll(".box");
// console.log(div); 

// This is normal zindegi :

// div[0].innerText = "New Unique Value 1";
// div[1].innerText = "New Unique Value 2";
// div[2].innerText = "New Unique Value 3";

// This is programmer zindegi :

// let idx = 1;
// for(div of div) {
//     div.innerText = `New Unique Value ${idx}`;
//     idx++;
// }

















