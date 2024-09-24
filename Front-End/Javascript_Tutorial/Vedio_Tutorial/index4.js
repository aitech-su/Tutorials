// synchronous = execute line by line consecutively in a sequential manner
//               code that waits for an operation to complete

// asynchronous = allows mutiple operations to be performed concurrently without waiting
//                doesn't block the execution flow and allows the program to continue
//                (I/O operation, network request, fetching data)
//                handled with: Callbacks, Promises, Async/Await  

setTimeout(()=> console.log("Task 1"),3000); //async
console.log("Task 2");
console.log("Task 3");
console.log("Task 4");

function f1(){
    setTimeout(()=> {console.log("Task 1");
                     callback()},3000);
}

function f2(){
    console.log("Task 2");
    console.log("Task 3");
    console.log("Task 4");
}
 f1(f2);

// Error  = An object that is created to represent a problem that occurs
//          Occur often with user input or establishing a connection

// try{} = encloses code that might potentially cause an error
// catch{} = catch and handle any thrown errors from try{}
// finally{} = (optional) always executes. used mostly for clean up
//              ex. close files, close connections, release resources

let x;
try{ 
    
    if(x==0){
        throw new Error("no 0!");
    }
    console.log(x);
    //NETWORK ERRORS
    //PROMISE REJECTION
    //SECURITY ERRORS
}catch(error){
    console.error(error);
}finally{
    //CLOSED FILES
    //CLOSED CONNECTIONS
    //RELEASE RESOURCES
    console.log("This always executes");
}
console.log("You have reached the end!");

// DOM = DOCUMENT OBJECT MODEL
//       Object{} that represents hte page you see in the web browser
//       and provides you with an API to interact with it
//       Web browser constructs the DOM when it loads an HTML document,
//       and structures all the elements in a tree-like representation.
//       Javascript can access the DOM to dynamically
//       change the content, structure, and style of a web page
document.getElementById("id"); //API
document.title = "My website";
document.body.style.backgroundColor = "hsl(0,0%,15%)";
console.dir(document);

// element selectors = Methods used to target and manipulate HTML elements 
//                     They allow you to select one or mutiple HTML elements
//                     from the DOM (Document Odject Model)

// 1.document.getElementById() //ELEMENT OR NULL
// 2.document.getElementsByClassName() //HTML COLLECTION
// 3.document.getElementsByTagName() //HTML COLLECTION
// 4.document.querySelector() //ELEMENT OR NULL
// 5.document.querySelectorAll() //NODELIST




// DOM Navigation = The process of navigating through the structure
//                  of an HTML document using Javascript.

// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement
// .children

const element = document.getElementById("id");
const first = element.firstElementChild;
first.style.backgroundColor = "yellow";

// Add and Change HTML 
// --------- EXAMPLE 1 <h1> ----------

//STEP 1 CREATE THE ELEMENT
const newH1 = document.createElement("h1");
//STEP2 ADD ATTRIBUTES/PROPERTIES
newH1.textContent = `I like pizza!`;
newH1.id = "myH1";
newH1.style.color = "tomato";
newH1.style.textAlign = "center";
//STEP 3 APPEND ELEMENT TO DOM
document.body.append(newH1);
document.body.prepend(newH1);
document.getElementById("id").append(newH1);

const box = document.getElementById("box");
document.body.insertBefore(newH1,box);
//REMOVE HTML ELEMENT 
document.body.removeChild(newH1); //parent.removeChild()
document.getElementById("box1").removeChild(newH1); //parent.removeChild()
























































































































































































































