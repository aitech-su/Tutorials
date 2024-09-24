
// React hook = Special function that allows functional components
// to use React features without writing class components (React v16.8)
// (useState, useEffect, useContext, useReducer, useCallback, and more...)

// useState() = A React hook that allows the creation of a stateful variable
// AND a setter function to update its value in the Virtual DOM.

import React, {useState} from 'react';
import './ReactUseState.module.css';

function  ReactUseState(){
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsemployed] = useState(false);

    const updateName = () =>{
        setName("Squidward");
    }

    const incrementAge = () => {
        setAge(age + 1);
    }

    const toggleEmployedStatus = () => {
        setIsemployed(!isEmployed);
    }

    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Age: {age}</p>
            <button onClick={incrementAge}>Increment Age</button>

            <p>Is employed: {isEmployed ? "Yes" : "No"}</p>
            <button onClick={toggleEmployedStatus}>Toggle Status</button>
        </div>
    );
}

export default ReactUseState