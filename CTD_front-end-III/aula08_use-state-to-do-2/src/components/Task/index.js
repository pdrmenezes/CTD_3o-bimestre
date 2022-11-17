export default function Task(props) {
  return (
    <div>
      <input type='checkbox' defaultChecked={props.isDone}
        style={{}} />
      <p>{props.taskDescription}</p>
      {props.isDone && (
        <button onClick={() => props.deleteFunction(props.id)} >Apagar</button>
      )}
    </div>
  )
}