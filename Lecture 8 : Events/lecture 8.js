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


