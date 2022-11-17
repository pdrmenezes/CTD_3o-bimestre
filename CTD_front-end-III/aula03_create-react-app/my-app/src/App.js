import logo from "./logo.svg"
import { Box1, Box2 } from "./Box.js"

function App() {
  const arrayDeFrutas = ["Manga", "Pêssego", "Banana", "Limão"]

  return (
    <div className="App">
      {arrayDeFrutas.map((item, index) => {
        return (<Box1 item={item} key={index.toString} />)
      })
      }
    </div >
  );
}

export default App;
