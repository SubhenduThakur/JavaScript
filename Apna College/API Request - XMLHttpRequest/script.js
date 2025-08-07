const btn = document.querySelector("#btn");

let apiData = null;

const requestUrl = "https://api.github.com/users/hiteshchoudhary";

const xhr = new XMLHttpRequest();

xhr.open("GET", requestUrl);

xhr.onreadystatechange = function () {
    console.log(xhr.readyState);
    if (xhr.readyState === 4) {
        apiData = JSON.parse(this.responseText);
    }

    btn.addEventListener("click", () => {
        if (apiData) {
            generate(apiData);
        }
    })
}
xhr.send();

function generate(data) {
    const card = document.querySelector(".card");
    const image = document.querySelector(".card-image");
    const followers = document.querySelector("#followers");
    const location = document.querySelector("#location");
    const name = document.querySelector("#name");
    const bio = document.querySelector("#bio");

    card.style.display = "block";
    btn.style.display = "none";

    followers.textContent = `${data.followers} Followers`;
    location.textContent = data.location
    name.textContent = data.name;
    bio.textContent = data.bio;
    image.innerHTML = `<img class="card-image" src=${data.avatar_url}/>`
}




