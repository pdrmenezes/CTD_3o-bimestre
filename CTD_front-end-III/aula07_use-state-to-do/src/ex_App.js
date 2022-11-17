// sempre que precisarmos alterar um valor mostrado em tela, precisaremos de um state
import { useState } from "react";

function App() {
  const [valorInput, setValorInput] = useState("");

  return (
    <>
      <input
        style={{ border: '1px solid limegreen' }}
        onChange={(event) => setValorInput(event.target.value)}
      />
      <h3>{valorInput}</h3>
    </>

  );
}
export default App;
