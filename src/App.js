import "./App.css";
import { useState, useEffect } from "react";
import Test from "./Test";
function App() {
  const [myNumber, setMyNumber] = useState(1);
  return (
    <div className="App">
      {myNumber !== 5 && <Test />}
      <p>myNumber- {myNumber}</p>
      <button onClick={() => setMyNumber(myNumber + 1)}>
        Increment MyNumber
      </button>
    </div>
  );
}

export default App;
