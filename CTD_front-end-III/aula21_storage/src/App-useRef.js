import { useEffect, useState, useRef } from 'react';
import './App.css';

function App() {

  const [tasks, setTasks] = useState(["fazer café"]);
  // const [input, setInput] = useState('');

  // valor inicial do useRef é ~quase sempre~ "null"
  const inputRef = useRef(null);
  const divRef = useRef(null);

  function addTask() {
    const valorInput = inputRef.current.value;
    inputRef.current.focus();
    divRef.current.style.background = "red";
    console.log(valorInput);

    setTasks([...tasks, valorInput]) // setState é uma operação assíncrona
    localStorage.setItem("@todo_tasks", JSON.stringify([...tasks, valorInput]));
    inputRef.current.value = "";
  }

  useEffect(() => {
    const tasksStorage = localStorage.getItem("@todo_tasks");

    if (tasksStorage) {
      const tempTasks = JSON.parse(tasksStorage);
      setTasks(tempTasks);
    }
  }, []);

  return (
    <div ref={divRef}>
      <h1>Hello World</h1>
      <input ref={inputRef} />
      <button onClick={addTask}>Salvar</button>
      {tasks.map((task) => (<p>{task}</p>))}
    </div>
  );
}

export default App;
