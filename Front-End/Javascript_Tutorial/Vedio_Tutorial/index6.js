// Callback Hell = Situation in Javascript where callbacks
//                 are nested within other callbacks to the
//                 degree where the code is difficult to read.
//                 Old pattern to handle asynchronous funtions.
//                 Use Promises + async/await to avoid Callback Hell

function task1(callback){
    setTimeout(() => {
        console.log("Task 1");
        callback();
    }, 2000);
}

function task2(callback){
    setTimeout(() => {
        console.log("Task 2");
        callback();
    }, 1000);
}

function task3(callback){
    setTimeout(() => {
        console.log("Task 3");
        callback();
    }, 3000);
}

task1(() => {
    task2(() => {
        task3(() => console.log("All tasks completed !"));
    })
})

// Promise = An Object that manages asynchronous operations.
//           Wrap a Promise Object around {asynchronous code}
//           "I promise to return a value"
//           PENDING -> RESOLVED or REJECTED
//           new Promises ((resolve, reject) => {asynchronous code})

// DO THESE CHORES IN ORDER

// 1. WALK THE DOG
// 2. CLEAN THE KITCHEN
// 3. TAKE OUT THE TRASH

// Async/Await = Async = makes a function return a promise
//               Await = makes an async function wait for a promise

//               Allows you write asynchronous code in a synchronous manner
//               Async doesn't have resolve or reject parameters
//               Everything after Await is placed in an event queue

function walkDog(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const dogwalked = true;

            if(dogwalked){
                resolve("You walk the dog");
            }else{
                reject("You DIDN'T walk the dog");
            }

        }, 1500);
    });
}

function cleanKitchen(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            
            const kitchenCleaned = true;

            if(kitchenCleaned){
                resolve("You clean the kitchen");
            }else{
                reject("You DIDN'T clean the kitchen");
            }

        }, 2500);
    })
}

function takeOutTrash(){

    return new Promise((resolve, reject) =>{
        setTimeout(() => {

            const trashTakenOut = true;
            if(trashTakenOut){
                resolve("You take out the trash");
            }else{
                reject("You DIDN'T take out the trash");
            }
        }, 500);
    })
}

walkDog().then(value => {console.log(value); return cleanKitchen()})
         .then(value => {console.log(value); return takeOutTrash()})
         .then(value => {console.log(value); console.log("You finished all the chores !")})
         .catch(error => console.error(error));

async function doChores(){

    try{
        const walkDogResult = await walkDog();
        console.log(walkDogResult);

        const cleanKitchenResult = await cleanKitchen();
        console.log(cleanKitchenResult);

        const takeOutTrashResult = await takeOutTrash();
        console.log(takeOutTrashResult);

        console.log("You finished all the chores!");
    }catch(error){
        console.error(error);
    }
    
}

doChores()