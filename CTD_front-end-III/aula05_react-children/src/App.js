import Button from "./Button";
import Container from "./Container";

const dataButton = {
  text: "press ",
  nickname: "this cute button"
}

// passando "children" para os componentes

function App() {
  return (
    <>

      <Container>
        <Button text={dataButton.text + dataButton.nickname} nickname={dataButton.text} />
        <h1>Hello World</h1>
        <p>lorem ipsum sit amet</p>
        <ul>
          <li>item 1</li>
          <li>item 2</li>
          <li>item 3</li>
        </ul>
      </Container>
    </>
  );
}

export default App;
