// → fetch API

const URL = "https://jsonplaceholder.typicode.com/posts/1";

const getFacts = async () => {
    console.log("getting data....");

    let response = await fetch(URL);
    console.log(response);
    let data = response.json();
    console.log(data);
};
