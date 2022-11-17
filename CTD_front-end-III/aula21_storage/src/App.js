import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [tasks, setTasks] = useState(["fazer café"]);
  const [input, setInput] = useState('');

  function addTask() {
    setTasks([...tasks, input]) // setState é uma operação assíncrona

    localStorage.setItem("@todo_tasks", JSON.stringify([...tasks, input]));
  }

  useEffect(() => {
    const tasksStorage = localStorage.getItem("@todo_tasks");

    if (tasksStorage) {
      const tempTasks = JSON.parse(tasksStorage);
      setTasks(tempTasks);
    }
  }, []);

  useEffect(() => {

    const data = {
      nome: "Pedro",
      nascimento: 1993,
    }
    localStorage.setItem("@nome_sistema_email_data", JSON.stringify(data))

    // localStorage.setItem("@nome_sistema_email", "email@email.com") }, []);
    const temp = localStorage.getItem("@nome_sistema_data");
    const tempJSON = JSON.parse(temp);

    console.log(temp);
    console.log(tempJSON.nome);

    localStorage.clear();
  }, []);

  return (
    <div>
      <h1>Hello World</h1>
      <input onChange={(event) => setInput(event.target.value)} />
      <button onClick={addTask}>Salvar</button>
      {tasks.map((task) => (<p>{task}</p>))}
    </div>
  );
}

export default App;
