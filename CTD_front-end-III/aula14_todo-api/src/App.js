import "./App.css"
import axios from 'axios'
import { useEffect, useState } from 'react'

function App() {
  const [todo, setTodo] = useState([]);

  async function getTodo() {
    // await fetch('https://api-todo-dh.herokuapp.com/todo', {
    //   method: "POST",
    //   body: {
    //     status: false,
    //     title: "Estudar tudo",
    //     description: "Estudar HTML",
    //     date: new Date()
    //   },
    // })

    const { data } = await axios.get('https://api-todo-dh.herokuapp.com/todo');
    setTodo(data);
  }

  useEffect(() => {
    getTodo();

  }, []);

  return (
    <div>
      <button onClick={getTodo}>Get To-do</button>
      {/* <form>
        <input placeholder="Título" />
        <input placeholder="Descrição" />
        Status <input type="checkbox" />
        <input type="date" />
        <button>Salvar</button>
      </form> */}
      todo.map()
    </div>
  );
}

export default App;
