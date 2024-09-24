// destructing = extract values from arrays and objects,
//               then assign them to variables in a convenient way
//               [] = to perform array destructing
//               {} = to perform object destructing

// -----------EXAMPLE1----------
// vars = [array elements]/[object elements]
function f1({name1,age1,job1="unemployed"}){

}

let a = 1; let b = 2;
[a,b] = [b,a];
console.log(a);
console.log(b);
const colors =["r","g","b","p","w"];
[colors[0], colors[4]] = [colors[4], colors[0]];
const [first, second, third, ...extraColors] = colors;
const person1 = {
    name: "A",
    age: 30,
    job: "cook"
}
const person2 = {
    name: "B",
    age: 34
}
const{name1,age1,job1} = person1;
const{name2,age2,job2="unemployed"} = person2;
f1(person1); f1(person2);

// Date objects = Objects that contain values that represent dates and times
//                 These date objects can be changed and formatted
// Date(year, month, day, hour, minute, second, ms)
// 0 = Jan
const date1 = new Date();
const date2 = new Date("2024-07-24");
const year = date1.getFullYear();
const month = date1.getMonth();
const day = date1.getDate(); //date
const hour = date1.getHours();
const minutes = date1.getMinutes();
const seconds = date1.getSeconds();
const dayOfWeek = date1.getDay() //day of a week

// closure = A function defined inside of another function,
//           the inner function has access to the vaiables
//           and scope of the outer function
//           Allow for private variables and state maintenance
//           Used frequently in JS frameworks: React, Vue, Angular
function outer(){
    let msg1 = "Hello";
    function inner(){
        console.log(msg1);
    }
    inner();
}
outer();

function createCounter(){
    let count = 0;
    function increment(){
        count++;
        console.log(`Count increased to ${count}`);
    }

    function getCount(){
        return count ;
    }
    return {increment, getCount}; //object, shortcut for {increment : increment, getCount : getCount}
}
const counter = createCounter();  //因為 count 是由閉包捕獲的變量，
                                  //所以每次調用 counter() 都會使用相同的 count 變量，
                                  //而不是每次都重新創建一個新的 count。
counter.increment();
counter.increment();
console.log(counter.count) // undefined
console.log(counter.getCount);


// setTimeout = function in JS that allows you to schedule
//              the execution of a function after an amount of time (milliseconds)
//              Timers are approximate (varies based on the workload of the JS runtime env.)

//              setTimeout(callback,delay);
function sayHello(){
    window.alert("Hello");
}

setTimeout(sayHello,3000);
































































































































































































































