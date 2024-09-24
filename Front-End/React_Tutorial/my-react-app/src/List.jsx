
function List(){
    const fruits = [{id:1,name:"apple",calories: 150},
                    {id:2,name:"banana",calories: 100},
                    {id:3,name:"coconut",calories: 50}];
    // fruits.sort((a,b) => a.name.localeCompare(b.name));
    // fruits.sort((a,b) => a.calories - b.calories);
    const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);


    const listItems = fruits.map(fruit => <li key={fruit.id}>
                                          {fruit.name}: &nbsp;
                                          <b>{fruit.calories}</b></li>);
    
    return (<ul>{listItems}</ul>);
}

export default List



