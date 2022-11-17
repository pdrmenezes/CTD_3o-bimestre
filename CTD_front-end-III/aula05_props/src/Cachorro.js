export default function Cachorro(props) {

  // Desestruturando o props.cachorro
  const { nome, idade, sexo, tamanho } = props.cachorro

  return (
    <div>
      <h3>Nome: {nome}</h3>
      <ul>
        <li>Idade: {idade}</li>
        <li>Sexo: {sexo}</li>
        <li>Tamanho: {tamanho}</li>
      </ul>
    </div>
  );
}

// return (
//   <div>
//     <h3>Nome: {props.cachorro.nome}</h3>
//     <ul>
//       <li>Idade: {props.cachorro.idade}</li>
//       <li>Sexo: {props.cachorro.sexo}</li>
//       <li>Tamanho: {props.cachorro.tamanho}</li>
//     </ul>
//   </div>
// );
// }