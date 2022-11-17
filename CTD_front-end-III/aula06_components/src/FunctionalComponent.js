export default function FunctionalComponent(props) {
  function handleClick() {
    alert(props.text)
  }
  return (
    <>
      <h1>Hello Functional Component</h1>
      <button onClick={handleClick}>Aperte</button>
    </>
  )
}