// callback = a function that is passed as an argument
//            to another function

//            used to handle asynchronous operations:
//            1.Reading a file
//            2.Network requests
//            3.Interacting with databases

//            "Hey when you're done , call this next"

function hello(callback){
    console.log("Hello!");
    callback();
}

function goodbye(){
    console.log("Goodbye!");
}

function sum(callback,x, y){
    let result = x + y;
    callback(result);
}

function displaysum(result){
    console.log(result);
}

hello(goodbye);
sum(displaysum,1,2);

// forEach() = method used to iterate over the elements
//             of an array and apply a specified function (callback)
//             to each element

//             array.forEach(callback)
//             element, index, array are provided
function uppercase(element, index, array){
    array[index] = element.toUpperCase();
}
function display(element){
    console.log(element);
}
let fruits1 = ["apple", "banana"];
fruits1.forEach(uppercase);
fruits1.forEach(display);

// .map() = accepts a callback and applies that function
//          to each element of an array, then return a new array

// .fliter() = creates a new array by filtering
//             out elements
function isEven(element){
    return element % 2 === 0;
}
let numbers = [1,2,3,4,5];
let evenNums = numbers.filter(isEven);

// .reduce() = reduce the elements of an array
//             to a single value
function sum(accumulator, element){
    return accumulator + element;
}
const prices = [5,30,10,25,15,20]
const total = prices.reduce(sum);

// function declaration
function hello(){
    console.log("Hello");
}
// function expressions = a way to define functions as
//                        values or variables
const hello = function(){
    console.log("Hello");
}
setTimeout(function(){
    console.log("Hello");
},3000);

// arrow functions = a concise way to write function expressions
//                   good for simple functions that you use only once
//                   (parameters) => some code
setTimeout( () => console.log("Hello"), 3000);

