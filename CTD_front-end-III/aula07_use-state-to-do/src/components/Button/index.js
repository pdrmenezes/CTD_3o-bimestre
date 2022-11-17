import './style.css'

export default function Button(props) {
  return (
    <button
      className={props.text === 'Create' ? 'button' : 'button-2'}>{props.text}

    </button>
  )
}