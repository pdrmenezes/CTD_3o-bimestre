import { useEffect, useState } from "react";

export default function Pessoa() {

  const [nome, setNome] = useState("Pedro");
  const [idade, setIdade] = useState("28");

  // hook / função que recebe função de callback e um array de dependências
  useEffect(() => { console.log("Fui chamado") }, [nome, idade]);

  return (
    <div>
      <h1 onClick={() => setNome("Menezes")}>{nome}</h1>
      <h1 onClick={() => setIdade("29")}>{idade}</h1>
    </div>
  )
}