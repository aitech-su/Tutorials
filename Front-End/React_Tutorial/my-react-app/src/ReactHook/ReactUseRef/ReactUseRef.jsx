// useState() = Re-renders the component when the state value changes

// useRef() = "use Reference" Does not cause re-renders when its value changes.
//            When you want a component to "remember" some information,
//            but you don't want that information to trigger new renders.
           
//            1. Accessing/Interacting with DOM elements
//            2. Handling Focus, Animations, and Transitions
//            3. Managing Timers and Intervals

import React, { useState, useEffect, useRef} from "react";

function ReactUseRef(){

    // let [number, setNumber] = useState(0);
    const ref = useRef(0);
    const inputRef = useRef(null);

    useEffect(() => {
        console.log("COMPONENT RENDERED");
        console.log(inputRef);
    });

    function handleClick(){
        // setNumber(n => n + 1);
        ref.current++ ;
        inputRef.current.focus();
        console.log(ref.current);
    }

    return (
        <div>
            <button onClick={handleClick}>
                Click me!
            </button>
            <input ref={inputRef}/>
            {/* (inputRef = this html elememt)  */}
        </div>

    )
}

export default ReactUseRef