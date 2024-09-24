// JSON = (JavaScript Object Notation) data-interchange format
//        Used for exchanging data between a server and a web application
//        JSON files {key:value} OR [value1, value2, value3]

//        JSON.stringify() = CONVERT a JS object to a JSON string.
//        JSON.parse() = converts a JSON string to a JS object  

const names = ["A", "B", "C", "D"];

const jsonString = JSON.stringify(names);

console.log(names);

// fetch = Function used for making HTTP requests to fetch resources.
//         (JSON style Data, images, files)
//         Simplifies asynchronous data fetching in Javascript and
//         used for interacting with APIs to retrieve and send
//         data asynchronously over the web
//         fetch(url, {options}) 

fetch("url")
    .then(response => {
        if(!response.ok){
            throw new Error("Could not fetch resources");
        }
        return response.json(); 
    })
    .then(data => console.log(data))
    .catch(error => console.error(error));

async function fetchData(){
    
    try{
        const response = await fetch("url");
        if(!response.ok){
            throw new Error("Could not ffetch resource");
        }
        const data = await response.json();
        console.log(data);

    }catch(error){
        console.error(error);
    }
}

fetchData();












































