// useContext() = React Hook that allows you to share values
//                between multiple levels of components
//                without passing props through each level

import ReactUseContext3 from "./ReactUseContext3"

function ReactUseContext2(){
    
    return (
        <div className="box">
            <h1>ReactUseContext2</h1>
            <ReactUseContext3></ReactUseContext3>
        </div>
    )
}

export default ReactUseContext2