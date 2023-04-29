import React, { useEffect, useState } from "react";

const Test = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  useEffect(() => {
    console.log("Render");

    return () => {
      console.log("In got unmounted");
    };
  }, [count, name]);

  return (
    <div style={{ border: "2px solid blue" }}>
      <p>This is Test Component</p>
      <p>Count - {count}</p>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Test;
