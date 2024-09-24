import React, {useState} from "react"

function Food(){

    const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);
    const [contextMenu, setContextMenu] = useState(null);

    function handleAddFood(){
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";
        if(newFood != ""){
            // setFoods([...foods, newFood]);
            // setFoods(["Apple", "Orange", "Banana", newFood]);
            setFoods(f => [...f, newFood]);
        }
    }

    function handleRemoveFood(index){
        setFoods(foods.filter((_, idx) => idx != index));
        closeContextMenu();
    }

    function handleEditFood(index) {
        const newFood = prompt("Enter new food name:", foods[index]);
        if (newFood) {
            const newFoods = [...foods];
            newFoods[index] = newFood;
            setFoods(newFoods);
        }
        closeContextMenu();
    }

    const closeContextMenu = () => {
        setContextMenu(null);
    };

    const handleContextMenu = (event, index) => {
        event.preventDefault();
        const element = event.currentTarget;
        const rect = element.getBoundingClientRect();
        setContextMenu({
            top: rect.top + window.scrollY,
            left: rect.left + rect.width + window.scrollX,
            index: index,
        });        
    };

    return (
        <div>
            <h2>List of Food</h2>
            <ul>
                {foods.map((food, index) => 
                <li key={index} onContextMenu={(event) => handleContextMenu(event, index)}>
                    {food}
                </li>)}
            </ul>
            <input type="text" id="foodInput" placeholder="Enter food name"/>
            <button onClick={handleAddFood}>Add Food</button>
            {contextMenu !== null && (
                <div
                    style={{
                        position: 'absolute',
                        top: contextMenu.mouseY,
                        left: contextMenu.mouseX,
                        backgroundColor: 'white',
                        border: '1px solid black',
                        borderRadius: '5px',
                        zIndex: 1000,
                        cursor: 'pointer',
                    }}
                    onMouseLeave={closeContextMenu}
                >
                    <div onClick={() => handleEditFood(contextMenu.index)}>Edit</div>
                    <div onClick={() => handleRemoveFood(contextMenu.index)}>Remove</div>
                </div>
            )}
        </div>
    )
}

export default Food