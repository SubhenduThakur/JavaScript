// function api(dataId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(`weather data ${dataId}`);
//             resolve(200);
//         }, 2000);
//     });
// }

// (async function getWeather() {
//     await api(1);
//     await api(2);
// })();

// api().then((result) => {
//     console.log(result);
// });

/* ------------------------------------------------------------------------------------------------------------- */
// async/await
async function getAllUsers() {
  try {
    const response = await fetch(
      "https://api.github.com/users/hiteshchoudhary",
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

getAllUsers();

// Promise
fetch("https://api.github.com/users/hiteshchoudhary")
  .then((response) => {
    return response.json();
  })
  .then((data) => console.log(data));
