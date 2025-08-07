/*
→ Callback

function sum(a, b) {
    console.log(a + b);
}

function calculator(a, b, sumCallback) {
    sum(a, b);
}

calculator(1, 2, sum);
*/
/* ------------------------------------------------------------------------------------------------------------- */
function getData(dataId, getNextData) {
  setTimeout(() => {
    console.log("data", dataId);
    if (getNextData) {
      getNextData();
    }
  }, 2000);
}
// callback hell
getData(1, () => {
  console.log("loading data 2...");
  getData(2, () => {
    console.log("loading data 3...");
    getData(3, () => {
      console.log("loading data 4...");
      getData(4);
    });
  });
});
