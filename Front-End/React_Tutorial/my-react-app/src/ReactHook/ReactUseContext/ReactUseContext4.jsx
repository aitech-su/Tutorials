// useContext() = React Hook that allows you to share values
//                between multiple levels of components
//                without passing props through each level

import React, {useContext} from "react"
import { UserContext } from "./ReactUseContext"

function ReactUseContext4(){
    
    const user = useContext(UserContext);

    return (
        <div className="box">
            <h1>ReactUseContext4</h1>
            <h2>{`Bye ${user}`}</h2>
        </div>
    )
}

export default ReactUseContext4