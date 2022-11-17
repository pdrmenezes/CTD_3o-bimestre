import { useState } from "react";

function App() {
  const [numero, setNumero] = useState(0);

  function increment() {
    setNumero(numero + 1);
  }

  function decrement() {
    setNumero(numero - 1);
  }

  function setDefault() {
    setNumero(0);
  }

  function setNumberByParam(value) {
    setNumero(value);
  }

  return (
    <center>
      <h1>{numero}</h1>
      <button onClick={increment}>Incrementar</button>
      <button onClick={decrement}>Decrementar</button>
      <button onClick={setDefault}>Reset</button>
      <button onClick={() => setNumberByParam(50)}>Set to 50</button>
    </center>
  );
}
export default App;
