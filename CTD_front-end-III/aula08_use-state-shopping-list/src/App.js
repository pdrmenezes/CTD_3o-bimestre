import './style.css';
import { useState } from "react";
import Card from './components/Card';

const data = [{
  id: 1,
  src: 'https://picsum.photos/200/300',
  text: 'Foto linda'
},
{
  id: 2,
  src: 'https://picsum.photos/200/300',
  text: 'Outra foto linda'
},
{
  id: 3,
  src: 'https://picsum.photos/200/300',
  text: 'Terceira foto maravilhosa',
}]

function App() {
  const [cards, setCard] = useState(data);


  function removeCard(id) {
    const filteredCards = cards.filter((id) => cards.id !== id)
    setCard(filteredCards);

  }

  return (
    <div>
      <button onClick={() => { setCard(data) }}>Reset</button>
      <ul>
        {cards.map((card) => (
          <li onClick={() => removeCard(card.id)}>
            <img src={card.src} />
            <p>{card.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;