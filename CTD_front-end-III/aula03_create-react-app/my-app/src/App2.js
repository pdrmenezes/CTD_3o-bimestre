function App() {

  // const [] = useState(0) -- sintaxe da função que atualiza um componente só
  // dentro do [] vai o nome da variável e 1 função [valor, setValor]
  // dentro do () do useState define-se o valor inicial. Um número

  const [valor, setValor] = useState(0)
  // const [nome, setNome] = useState("Pedro")
  // const [objeto, setObjeto] = useState({ objeto: chave1 })

  function alteraValor() {
    setValor(valor++);
  }

  return (
    <div className="App">
      <h1>{valor}</h1>
      <button onClick={alteraValor}>Alterar</button>
    </div >
  );
}

export default App;