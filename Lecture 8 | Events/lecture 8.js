// -> Lecture 8 : Events
/*

» Events in JS :

- The change in the state of an object is known as an Event
Events are fired to notify code of "interesting changes" that may affect code execution.

• Mouse events (click, double click etc.)
• Keyboard events (keypress, keyup, keydown)
• Form events (submit etc.)
• Print event & many more

- These can arise from user interactions such as using a mouse or resizing a window, changes in the
state of the underlying environment (e.g. low battery or media events from the operating system),
and other causes.

- We have lot of types of events, we have annimation events, clipboard events, database events, 
DOM mutation events, focus events, from events and the once we use the most are genarally our
keyboard events and also our mouse events.



<body>
    <button onclick="console.log('button was clicked);"> click me </button>
</body>

- Here 'onclick' attribute is an event.
- Here we are telling that, whenever button is clicked that should be print.



<body>
    <button onclick="console.log('button was clicked);alert('hello!');"> click me </button>
</body>

• Remember one thing, when we write 'double quote' outside, we write 'single quote' inside.

• So what happends when a button is clicked, an event is generated and as soon as that event
is generated, we do something.
We can get the work done and the work we are getting done is called "event handling" in programming.



<body>
    <button ondblclick="console.log('button was clicked 2x);"> click me </button>
</body>

- If i click this button 2 times then it print 'button was clicked 2x'.
- This is a mouse double click event.



<body>
    <div onmouseover="console.log('you are inside div')"> this is a div </div>
</body>

div {
    height: 100px;
    width: 100px;
    color: white;
    background-color: dodgerblue;
    border: 1px solid black;
}

- Whenever i put my mouse pointer inside div box, it will print 'you are inside div'.
- So what's happening, this is a change which is being tracked inside my code and we call these our
'events'.

• What we are doing in HTML is called 'Inline Event Handling'.
Event handling means handling events, whenever an event occurs, something is done on it's basis,
getting the work done and 'Inline' means that we are handling events inside of HTML tags.

- But this is not really a good way of handling events, because it makes our HTML code very bulky.
- That's why there is a better way to handle events in JavaScript.

*/

// let btn1 = document.querySelector("#btn1");
// btn1.onclick = () => {
//     console.log("you clicked the button")
// }

// let div = document.querySelector("div");
// div.onmouseover = () => {
//     console.log("you are inside div");
// }



/*

» Event Object :

- It is a special object that has details about the event.

- All event handlers have access to the Event Object's properties and methods.

node.event = (e) => {
//handle here
}

e. target, e.type, e.clientX, e.clientY

*/

// let btn1 = document.querySelector("#btn1");
// btn1.onclick = (e) => {
//     console.log(e);
// }


// let btn1 = document.querySelector("#btn1");
// btn1.onclick = (e) => {
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.clientX);
//     console.log(e.clientY);
// }


// let btn1 = document.querySelector("#btn1");
// btn1.mouseover = (e) => {
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.clientX);
//     console.log(e.clientY);
// }


/*
» Event Listeners :

• node.addEventListener event, callback)

• node.removeEventListener event, callback)

Note: the callback reference should be same to remove.

- We saw that, we could handle our events through a single function by writing each event for our 
node in JavaScript.

- The drawback of the 'Inline' method was our HTML code becomes very bulky.

- That's why we was using 'event handling in JS' 
node.event = () => {
    // handle here
}
But the drawback of this method, we can handle our events by writing only one function at a time,
if we write same thing second time, it's going overwritten.

- That's why we use 'Event Listeners'.

• We can consider event listeners as functions which always listen for the event.
They always listen when the event will come and as soon as the event comes, they execute their work.
And for one event we can create multiple event listners.

*/

// btn1.addEventListener("click", () => {
//     console.log("button was clicked");
// });

// btn1.addEventListener("click", () => {
//     console.log("button was clicked - handler 2");
// });

/*
- So what we seeing that through event listeners we can get multiple tasks done on the same event,
This is our benefit.
That's why we use 'eventListener' for 'events'.
*/

// btn1.addEventListener("click", (evt) => {
//     console.log("button was clicked - handler 2");
//     console.log(evt);
//     console.log(evt.target);
// });

/*
- We can also access our event object, we can write it as an argument.

- You can also remove a eventListener.

NOTE : Always write 'function' into a variable, then use 'eventListener'.
*/


// btn1.addEventListener("click", () => {
//     console.log("button was clicked - handler 1");
// });

// btn1.addEventListener("click", () => {
//     console.log("button was clicked - handler 2");
// });

// const handler3 = () => {
//     console.log("button was clicked - handler 3");
// };
// btn1.addEventListener("click", handler3);
// btn1.removeEventListener("click", handler3);
// // that's how we use event listener.

// btn1.addEventListener("click", () => {
//     console.log("button was clicked - handler 4");
// });

/*
• Let's Practice :

Qs. Create a toggle button that changes the screen to dark-mode when clicked & light-mode when 
clicked again.
*/

let btn = document.querySelector("#btn");
currMode = "light";

// First Way: Style through JS

// btn.addEventListener("click", () => {
//     if (currMode === "light") {
//         currMode = "dark";
//         document.body.style.backgroundColor = "black"; // in that way we styled direct on JS
//     } else {
//         currMode = "light";
//         document.body.style.backgroundColor = "white";
//     }
//     console.log(currMode);
// });

// Second Way: Style through CSS

btn.addEventListener("click", () => {
    if (currMode === "light") {
        currMode = "dark";
        document.body.classList.add("dark"); // in that way we styled through CSS
        document.body.classList.remove("light");
        btn.innerText = "Dark";
    } else {
        currMode = "light";
        document.body.classList.add("light");
        document.body.classList.remove("dark");
        btn.innerText = "Light";
    }
    console.log(currMode);
});


/* 
Qs. Create a webpage with a button that changes the text color and background color of a <div>
element when you hover over the button.
*/

let btn3 = document.querySelector("#btn3");
let div = document.querySelector("div");

btn3.addEventListener("mouseover", () => {
    div.classList.add("dark");
});

btn3.addEventListener("mouseout", () => {
    div.classList.remove("dark");
});

/* ------------------------------------------------------------------------------------------------------------- */

/* 

→ 1. type

• When an event occurs, JavaScript generates an Event object that contains information about the event. The type
⎜ property allows you to check what kind of event was triggered.

✦ Syntax : event.type


*/

/*
document.addEventListener("click", function (event) {
    console.log(event.type); // ‣ Output: "click"
});

- In the whole document, wherever i click log event type.

*/
function handleEvent(event) {
    if (event.type === "click") {
        console.log("Element clicked!");
    } else if (event.type === "mouseover") {
        console.log("Mouse over the element!");
    }
}

let box1 = document.querySelector("#box1");

box1.addEventListener("click", handleEvent);
box1.addEventListener("mouseover", handleEvent);

/* 
-------------------------------------------------------------------------------------------------------------


 → 2. timeStamp 

 • The timestamp property of an event object returns the time (in milliseconds) at which the event was created.
 ⎜ The value is relative to the performance.timeOrigin or the start of the document’s lifetime.

 ✦ Syntax : event.timeStamp



*/

function timeStamp(e) {
    console.log(e.timeStamp);
}
box1.addEventListener("click", timeStamp);

// NOTE: (The timestamp value will vary depending on when the event occurs.)

/* 
-------------------------------------------------------------------------------------------------------------


→ 3. preventDefault() and defaultPrevented()


 ➢ preventDefault()
    -	It prevents the default action of an event.
    -	Used inside an event listener to stop behaviors like form submission, link navigation, or right-click menus.

    ✦ Syntax : event.preventDefault()



*/

let username = document.querySelector(".username");
username.addEventListener("submit", (e) => {
    e.preventDefault(); // Stops the form from submitting
    console.log("Form submission prevented!");
})

/* 
 --------------------------------------------------------------------------


 ➢ defaultPrevented()
    -	It checks whether preventDefault() was called on the event.
    -	Returns true if preventDefault() was called; otherwise, returns false.

    ✦ Syntax : event.defaultPrevented()



*/

let password = document.querySelector(".password");
password.addEventListener("submit", (e) => {
    console.log(e.defaultPrevented); // Output: false (before calling preventDefault)
    e.preventDefault();
    console.log(e.defaultPrevented); // Output: true (after preventDefault is called)
});

/* 
 --------------------------------------------------------------------------


 ✦ Summary
    •	Use preventDefault() to stop an event’s default action.
    •	Use defaultPrevented to check if preventDefault() was already called.


-------------------------------------------------------------------------------------------------------------
*/
/* 

→ target

• The target property of an event object (event.target) refers to the exact element that triggered the event.

NOTE: Whenever and wherever you will click, e.target will target that element. After targeting it, You can manipulate that element in any way want. 

• for example: e.target.style or e.target.(whatever I want to manipulate).

✦ Syntax : event.target


--------------------------------------------------------------------------
*/


// ➢ Example 1: Click Event on Multiple Buttons

document.addEventListener("click", function (event) {
    console.log("Clicked Element:", event.target);
});

/* 



- Clicking Button 1 logs: <button id="btn1">Button 1</button>
- Clicking Button 2 logs: <button id="btn2">Button 2</button>


--------------------------------------------------------------------------
*/


// ➢ Example 2: Changing Background Color of Clicked Element

document.addEventListener("click", function (event) {
    event.target.style.backgroundColor = "yellow"; // Changes background of clicked element
});

/*



- When you select the document and add an event listener, it listens for clicks anywhere on the page. Wherever you click,
⇡ it targets that element and changes its color to yellow.


--------------------------------------------------------------------------
*/


// ➢ Example 3: Targeting Inputs Inside a Element

divBox = document.querySelector("#divBox");
divBox.addEventListener("click", (e) => {
    console.log("Clicked Element:", e.target.id);
})

/* ------------------------------------------------------------------------------------------------------------- */

let vanish = document.querySelector(".vanish");
let vBox = document.querySelectorAll(".vBox");


vanish.addEventListener("click", (e) => {    
    if (e.target.classList.contains("vBox")) {
        e.target.style.display = "none";
    }
})


// vBox.forEach((val) => {
//     val.addEventListener("click", e => {
//         val.style.display = "none";
//     })
// });

/* ------------------------------------------------------------------------------------------------------------- */

// → shiftKey, ctrlKey & altKey

document.addEventListener("keydown", e => {
    if (e.shiftKey) {
        console.log("Shift key is pressed");
    }
    if (e.ctrlKey) {
        console.log("Control key is pressed");
    }
    if (e.altKey) {
        console.log("Alt key is pressed");
    }
})

/* 

    1. “keydown” for all keyboard keys. (include : Shift, Ctrl, Alt, Enter, Backspace, Arrow keys, etc.)

    2. “keypress” for only printable characters
        	•	Alphabets (a, b, c, … Z)
	        •	Numbers (0-9)
	        •	Symbols (@, #, $, %, etc.)
	        •	Space ( )


*/


/* 

→ Event Propagation (The Big Picture)

➢ When you click an element, the event doesn’t just stay there. It travels through the DOM in two phases:
	1.	Event Capturing (Trickling Down) → From Parent to Child
	2.	Event Bubbling (Rising Up) → From Child to Parent


    (i) Event Bubbling (Inside → Outside)
	•	The event starts from the target (clicked element) and bubbles up to its ancestors (parent, grandparent, etc.).
	•	Default behavior in JavaScript.
	•	Useful for handling events on parent elements instead of adding multiple listeners.

    (ii) Event Capturing (Outside → Inside)
	•	The event starts from the topmost parent and goes down to the target element.
	•	Not used by default, but can be activated using { capture: true }.

→ Event Delegation (Smart Trick 🎯)
	•	Instead of adding event listeners to each child element, attach one listener to the parent and check which child was clicked using e.target.
	•	Works best when elements are dynamically added (e.g., adding buttons via JavaScript).




✦ Summury :

→ Event Propagation:
	•	How events travel in the DOM (Capturing → Bubbling).

        (i) Event Bubbling:
            •	The event goes from child to parent (inside → outside).
            •	Default behavior in JavaScript.

        (ii) Event Capturing:
            •	The event goes from parent to child (outside → inside).
            •	Use { capture: true } to enable.

→ Event Delegation:
	•	Add one event listener to a parent and handle child events using e.target.
	•	Best for dynamic elements.

*/
