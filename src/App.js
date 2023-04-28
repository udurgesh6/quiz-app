import "./App.css";
import { useState } from "react";
function App() {
  const [age, setAge] = useState(31);
  const [name, setName] = useState("Durgesh");
  const [products, setProducts] = useState(["Apple", "Mango", "Chilly"]);

  return (
    <div className="App">
      <p>
        Name= {name} Age - {age}
      </p>
      <input value={name} onChange={(event) => setName(event.target.value)} />
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <ul>
        {products.map((element, index) => (
          <li key={index}>
            ({index + 1}){element}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
