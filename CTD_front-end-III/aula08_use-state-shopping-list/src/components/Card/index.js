import './style.css'

export default function Card(props) {
  return (
    <div className={props.status === 'visible' ? 'card' : 'card-invisible'}>
      <img src={props.src} />
      <p>{props.text}</p>
    </div>
  )
}