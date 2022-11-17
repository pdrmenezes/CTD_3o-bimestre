import './style.css'

export default function Button(props) {
  return (
    <button onClick={props.onClick}
      className={props.text === 'Create' ? 'button' : 'button-2'}>{props.text}

    </button>
  )
}