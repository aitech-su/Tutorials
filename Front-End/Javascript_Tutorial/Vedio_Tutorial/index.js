document.addEventListener('DOMContentLoaded', (event) => {
    function greeting(name){
        console.log("Hello " + name);
    }

    function square(number){
        return number * number;
    }

    // window.alert('This is an alert');
    document.getElementById("h1_1").textContent = 'document.getElementById("1").textContent = "mycontent"';


    // let my_name = 'aitech_su';
    // let x = 3;
    // x = x **2;
    // const interest_rate = 0.3;
    // console.log(`My name is ${my_name}`);


    let age =window.prompt("How old are you?");
    age= Number(age);
    age += 1;
    console.log(age);

    let username;
    document.getElementById("username_submit").onclick = function(){
        username= document.getElementById("username_input").value;
        document.getElementById("h1_1").textContent = `Hello ${username}`;
    }

    let n1 = 10;
    let msg = n1 > 18 ? ">18" : "<18";

    let n2 = 1;
    switch(n2){
        case 1:
            break;
        case 2:
            break;
        default:
            break;
    }

    switch(true){
        case n1==1:
            break;
        default:
            break;
    }

    let s1="str1";
    console.log(s1.charAt(0));
    console.log(s1.indexOf("s"));
    console.log(s1.lastIndexOf("s"));
    console.log(s1.length);

    let fruits = ["apple","banana","orange"];
    fruits.push("coconut");
    fruits.pop();
    fruits.unshift("mango"); //add element to the beginning
    fruits.shift(); //remove element to the beginning
    let l = fruits.length;
    let idx = fruits.indexOf("apple");
    fruits.sort().reverse();
    for(let i =0; i< fruits.length; i++){
        console.log(fruits[i]);
    }
    for(let friut of fruits){
        console.log(friut);
    }
    // spread operator = ...allows an iterable
    //                     such as an array or string
    //                     to be expanded into seperate elements
    //                     (unpacks the elements)
    let nums1 = [1,2,3,4,5];
    let max1 = Math.max(...nums1);
    // rest parameters = (...rest) allow a function work with
    //                   a variable number of arguments by
    //                   bunding them into an array
    const n3 = 4; const n4 = 4;
    function f1(...nums2){
        console.log(nums2);
    }
    f1(n3,n4);
    // let person ={
    // let person ={
    //     name: 'aitech_su',
    //     age: 100
    // };
    // person.name= 'John';
    // person['name'] = 'Newton';
    // console.log(person.name);
    // console.log(person.age);


    // greeting('John')
    // console.log(square(5));

});