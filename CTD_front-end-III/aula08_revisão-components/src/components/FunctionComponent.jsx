import React, { useState } from "react";

const FunctionComponent = (props) => {
  const [number, setNumber] = useState(0);

  function increment() {
    setNumber(number + 1);
  }

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
};
export default FunctionComponent;
