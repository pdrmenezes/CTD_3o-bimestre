export default function Button({ text, handleFunction }) {
  return (
    <button onClick={handleFunction} style={{ backgroundColor: "tomato" }}>{text}</button>
  )
}