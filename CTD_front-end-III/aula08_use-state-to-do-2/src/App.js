import Button from './components/Button';
import './style.css';
import { useState } from "react";
import tasksData from './data'
import Task from './components/Task';

function App() {
  const [inputText, setInputText] = useState("");

  const [tasks, setTasks] = useState(tasksData)
  // const [tasks, setTasks] = useState([])

  function addTask() {
    const newTask = {
      id: Date.now().toString,
      taskDescription: inputText,
      isDone: false
    }
    setTasks([...tasks, newTask])
    setInputText('')
  }

  function deleteTask(id) {
    const temp = tasks.filter((task) => task.id !== id);
    setTasks(temp);
  }

  function handleInputText(event) {
    setInputText(event.target.value)
  }

  return (
    <>
      <header className="header">
        <input value={inputText} className='input' onChange={(event) => handleInputText(event)} />
        <p>{inputText}</p>

        <div className='task-buttons'>
          <Button text='Create' onClick={addTask} />
          <Button text='Clear' />
        </div>
      </header>
      <main>


        {tasks.length > 0 ? (
          tasks.map((task) => (
            <Task
              key={task.id}
              id={task.id}
              taskDescription={task.taskDescription}
              isDone={task.isDone}
              deleteFunction={deleteTask}
            />
          )))
          : (<span> Nenhuma tarefa adicionada </span>)
        }
      </main>


    </>
  );
}
export default App;
