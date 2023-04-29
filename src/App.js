import "./App.css";
import { useState } from "react";
function App() {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [fruits, setFruits] = useState([
    { name: "Apple", id: 1, quantity: 1 },
    { name: "Mango", id: 2, quantity: 1 },
    { name: "Chilly", id: 3, quantity: 1 },
  ]);

  const addThisFruit = () => {
    let temp_fruits = [...fruits];
    let indexOfThisFruit = temp_fruits.findIndex(
      (fruit) => fruit.name === name
    );
    if (indexOfThisFruit === -1) {
      temp_fruits.push({ name: name, id: id, quantity: 1 });
    } else {
      temp_fruits[indexOfThisFruit].quantity += 1;
    }
    setFruits(temp_fruits);
    setName("");
    setId(0);
  };

  const removeThisFruit = (fruit_id) => {
    let temp_fruits = [...fruits];
    // let filtered_fruits = temp_fruits.filter(filterFruit);
    let filtered_fruits = temp_fruits.filter((fruit) => fruit.id !== fruit_id);
    console.log(filtered_fruits);
    setFruits(filtered_fruits);
    // function filterFruit(fruit){
    //   return fruit.id !== fruit_id
    // }
  };

  return (
    <div className="App">
      <input
        placeholder="Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <input
        placeholder="Id"
        type="number"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button onClick={addThisFruit}>Add Fruit</button>
      {fruits.map((fruit) => (
        <div
          key={fruit.id}
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p>
            Fruit - {fruit.name} - {fruit.quantity}
          </p>
          <button onClick={() => removeThisFruit(fruit.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

export default App;
