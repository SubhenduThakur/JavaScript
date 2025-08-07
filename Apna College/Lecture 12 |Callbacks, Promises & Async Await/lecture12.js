/*
→ Synchronous
console.log("fist");
console.log("second");
console.log("third");


→ Asynchronous
console.log("first");

setTimeout(() => {
    console.log("asynchronous");    
}, 3000)

console.log("second");

/* ------------------------------------------------------------------------------------------------------------- */


let val = () => {
    console.log("hello");
};

const reject = () => {
    console.log("Something wrong");
};

const getPromise = () => {
    let data = true;
    return new Promise((resolve, reject) => {
        if (data) {
            resolve(val());
        } else {
            reject(reject()); // ✦ scope chains finds reject in the promise parameter, and it's shadowing.
        }
    });
};

// const promise = getPromise();

// promise
//     .then((result) => {
//         console.log("success", result);
//     })
//     .catch((error) => {
//         console.log("Error", error);
//     });

/* 
⎜ When we create a Promise, JavaScript gives us two parameters: resolve and reject.
⎜ If we create a function inside the same scope with the same name (like reject), it shadows the original Promise reject because of scope chain and variable shadowing.
⎜ Then when we call reject(), it first runs our shadowed reject.
⎜ Because of that, Promise rejection behaves differently. 
*/

/* ------------------------------------------------------------------------------------------------------------- */

// → Promise Chain
function fetchData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success");
        }, 3000);
    });
}


fetchData(1)
    .then((result) => {
        return fetchData(2);
    })
    .then((result) => {
        return fetchData(3);
    })
    .then((result) => {
        console.log(result);
    });


