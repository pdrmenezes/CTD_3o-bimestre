// Criando 2 componentes pra serem exportados e utlizados no app.js "Box1" e "Box2"

function Box1(props) {
  return (
    <ul>
      <li>{props.item}</li>
    </ul>)
}

function Box2() {
  return (
    <ul>
      <li>Cachorro</li>
      <li>Gato</li>
      <li>Galinha</li>
    </ul>)
}

// Ou, alternativamente, exportando 1 só componente com
export default Box1;

export {
  Box1,
  Box2
};
