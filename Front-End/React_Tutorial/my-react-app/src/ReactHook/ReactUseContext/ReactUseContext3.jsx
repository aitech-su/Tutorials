// useContext() = React Hook that allows you to share values
//                between multiple levels of components
//                without passing props through each level

import React, {useContext} from "react"
import { UserContext } from "./ReactUseContext"
import ReactUseContext4 from "./ReactUseContext4"

function ReactUseContext3(){
    
    const user = useContext(UserContext);

    return (
        <div className="box">
            <h1>ReactUseContext3</h1>
            <h2>{`Hello again ${user}`}</h2>
            <ReactUseContext4></ReactUseContext4>
        </div>
    )
}

export default ReactUseContext3