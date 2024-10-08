// useEffect() = React Hook that tells React DO SOME CODE WHEN (pick one):
//             This component re-renders
//             This component mounts
//             The state of a value

// useEffect(function, [dependencies])

// 1. useEffect(() => {}) // RUNS after every re-render
// 2. useEffect(() => {}, []) // RUNS only on mount
// 3. useEffect(() => {}, [value]) // RUNS on mount + when value changes

// USES
// #1 Event Listeners
// #2 DOM manipulation
// #3 Subscriptions (real-time updates)
// #4 Fetching Data from an API
// #5 Clean up when a component unmounts

import React, {useState, useEffect} from "react";

function ReactUseEffect(){

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        document.title = `Count: ${count}`;
    }, [count]);

    function addCount(){
        setCount(c => c + 1);
    }

    function substractCount(){
        setCount(c => c - 1);
    }

    function ChangeColor(){
        setColor(c => c === "green" ? "red" : "green");
    }

    // only one event listener added when mounted
    useEffect(() => {
        window.addEventListener("resize", handleResize);
        console.log("EVENT LISTENER ADDED");

        return () => {
            window.removeEventListener("resize", handleResize);
            console.log("EVENT LISTENER REMOVED");
        }

    },[]);

    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    return (
        <>
            <p style={{color: color}}>Count: {count}</p>
            <button onClick={addCount}>Add</button>
            <button onClick={substractCount}>Substract</button><br />
            <button onClick={ChangeColor}>Change Color</button>
            <p>Window Width: {width}px</p>
            <p>Window Height: {height}px</p>
        </>
    );
}

export default ReactUseEffect