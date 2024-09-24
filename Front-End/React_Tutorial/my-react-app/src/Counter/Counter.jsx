import React, {useState} from "react";

function Counter(){
    const [count, setCount] = useState(0);

    function increment(){
        // Uses the CURRENT state to calculate the NEXT state.
        // set functions do not trigger an update.
        // React batches together state updates for performance reasons
        // NEXT state becomes the CURRENT state after an update
        setCount(count + 1); // 0+1
        setCount(count + 1); // 0+1
        setCount(count + 1); // 0+1
        //UPDATE
    }

    function decrement(){
        // Takes the PENDING state to calculate NEXT state.
        // React puts your updater function in a queue (waiting in line)
        // During the next render, it will call them in the same order
        setCount(c => c - 1);
         //UPDATE
        setCount(c => c - 1);
         //UPDATE
        setCount(c => c - 1);
         //UPDATE
    }

    function reset(){
        setCount(0);
    }

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
            <button onClick={increment}>Increment</button>
        </div>
    )
}

export default Counter














