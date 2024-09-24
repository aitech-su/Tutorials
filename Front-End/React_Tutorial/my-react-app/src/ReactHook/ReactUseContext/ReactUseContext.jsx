// useContext() = React Hook that allows you to share values
//                between multiple levels of components
//                without passing props through each level

// PROVIDER COMPONENT
// 1. import { createContext } from 'react'
// 2. export const MyContext = createContext()
// 3. <MyContext.Provider value={value}>
//         <Child/>
//    </MyContext.Provider>

// CONSUMER COMPONENT
// 1. import React, {useContext} from 'react'
//    import { MyContext } from "./ReactUseContext";
// 2. const value = useContext(MyContext);

import './ReactUseContext.module.css'
import React, {useState, createContext} from 'react'
import ReactUseContext2 from "./ReactUseContext2"

export const UserContext = createContext();

function ReactUseContext(){
    
    const [user, setUser] = useState("England");

    return (
        <div className="box">
            <h1>ReactUseContext</h1>
            <h2>{`Hello ${user}`}</h2>
            <UserContext.Provider value={user}>
                <ReactUseContext2></ReactUseContext2>
            </UserContext.Provider>
            
        </div>
    )
}

export default ReactUseContext