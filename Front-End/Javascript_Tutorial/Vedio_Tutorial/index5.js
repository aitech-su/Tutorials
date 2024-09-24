// eventListener = Listen for specific events to create interactive web pages
//                 events: click, mouseover, mouseout, keydown, keyup
//                 .addEventListener(event, callback); 

const myBox = document.getElementById("myBox");
const myButton = document.getElementById("myButton");

myBox.addEventListener("click", event =>{
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "OUCH";
});

myBox.addEventListener("mouseover", event =>{
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "OUCH";
});

myBox.addEventListener("mouseout", event =>{
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "OUCH";
});


const myBox1 = document.getElementById("myBox1");
const moveAmount = 10;
let x = 0;
let y = 0;

document.addEventListener("keydown", event =>{

});

document.addEventListener("keyup", event =>{
    
});

// Show and Hide HTML
const myButton1 = document.getElementById("myButton1");
const myImg1 = document.getElementById("myImg1");
myButton1.addEventListener("click", event => {
    //myImg1.style.visibility = "hidden"; 原本預留給Img的空間不會消失

    if(myImg1.style.visibility === "hidden"){
        myImg1.style.visibility = "visible";
        myButton1.textContent = "Hide";
    }else{
        myImg1.style.visibility = "hidden";
        myButton1.textContent = "Show";
    }
});

// NodeList = Static collection of HTML elements by (id, class, element)
//            Can be created by using querySelectorAll()
//            Similar to an array, but no (map, filter, reduce)
//            NodeList won't update to automatically reflect changes 

let buttons = document.querySelectorAll(".myButtons");
//ADD HTML/CSS PROPERTIES
buttons.forEach(button => {
    button.addEventListener("click", event => {
        event.target.style.backgroundColor = "green";
    })
});

// classList = Element property in Javascript used to interact
//             with an element's list of classes (CSS classes)
//             Allows you to make reusable classes for many elements
//             across your webpage.

// add("classname")
// remove("classname")
// toggle("classname") (Remove if present, Add if not)
// replace(oldClass, newClass)
// contains("classname")

const myButton2 = document.getElementById("myButton2");

myButton2.classList.remove("enabled");
myButton2.classList.add("enabled");

myButton2.addEventListener("click", event => {
    if(event.target.classList.contains("disabled")){

    }else{

    }
    event.target.classList.replace("enable","disabled");
});











































































































































































































