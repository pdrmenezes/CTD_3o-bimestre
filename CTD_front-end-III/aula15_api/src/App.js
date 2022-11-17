import { useEffect, useState } from "react";
import { FiCheck, FiEdit, FiTrash } from "react-icons/fi";

import "./styles.css";

// const data = [
//   {
//     status: false,
//     _id: "62433f49b68ce20004a3113d",
//     title: "Estudar",
//     description: "Estudar HTML",
//     date: "2021-03-29T00:00:00.000Z",
//     __v: 0,
//   },
//   {
//     status: false,
//     _id: "62433f49b68ce20004a3113d",
//     title: "Estudar",
//     description: "Estudar HTML",
//     date: "2021-03-29T00:00:00.000Z",
//     __v: 0,
//   },
//   {
//     status: false,
//     _id: "62433f49b68ce20004a3113d",
//     title: "Estudar",
//     description: "Estudar HTML",
//     date: "2021-03-29T00:00:00.000Z",
//     __v: 0,
//   },
//   {
//     status: false,
//     _id: "62433f49b68ce20004a3113d",
//     title: "Estudar",
//     description: "Estudar HTML",
//     date: "2021-03-29T00:00:00.000Z",
//     __v: 0,
//   },
//   {
//     status: false,
//     _id: "62433f49b68ce20004a3113d",
//     title: "Estudar",
//     description: "Estudar HTML",
//     date: "2021-03-29T00:00:00.000Z",
//     __v: 0,
//   },
//   {
//     status: false,
//     _id: "62433f49b68ce20004a3113d",
//     title: "Estudar",
//     description: "Estudar HTML",
//     date: "2021-03-29T00:00:00.000Z",
//     __v: 0,
//   },
//   {
//     status: false,
//     _id: "62433f49b68ce20004a3113d",
//     title: "Estudar",
//     description: "Estudar HTML",
//     date: "2021-03-29T00:00:00.000Z",
//     __v: 0,
//   },
//   {
//     status: false,
//     _id: "62433f49b68ce20004a3113d",
//     title: "Estudar",
//     description: "Estudar HTML",
//     date: "2021-03-29T00:00:00.000Z",
//     __v: 0,
//   },
//   {
//     status: false,
//     _id: "62433f49b68ce20004a3113d",
//     title: "Estudar",
//     description: "Estudar HTML",
//     date: "2021-03-29T00:00:00.000Z",
//     __v: 0,
//   },
//   {
//     status: false,
//     _id: "62433f49b68ce20004a3113d",
//     title: "Estudar",
//     description: "Estudar HTML",
//     date: "2021-03-29T00:00:00.000Z",
//     __v: 0,
//   },
//   {
//     status: false,
//     _id: "62433f49b68ce20004a3113d",
//     title: "Estudar",
//     description: "Estudar HTML",
//     date: "2021-03-29T00:00:00.000Z",
//     __v: 0,
//   },
//   {
//     status: false,
//     _id: "62433f49b68ce20004a3113d",
//     title: "Estudar",
//     description: "Estudar HTML",
//     date: "2021-03-29T00:00:00.000Z",
//     __v: 0,
//   },
//   {
//     status: false,
//     _id: "62433f49b68ce20004a3113d",
//     title: "Estudar",
//     description: "Estudar HTML",
//     date: "2021-03-29T00:00:00.000Z",
//     __v: 0,
//   },
//   {
//     status: false,
//     _id: "62433f49b68ce20004a3113d",
//     title: "Estudar",
//     description: "Estudar HTML",
//     date: "2021-03-29T00:00:00.000Z",
//     __v: 0,
//   },
//   {
//     status: false,
//     _id: "62433f49b68ce20004a3113d",
//     title: "Estudar",
//     description: "Estudar HTML",
//     date: "2021-03-29T00:00:00.000Z",
//     __v: 0,
//   },
//   {
//     status: false,
//     _id: "62433f49b68ce20004a3113d",
//     title: "Estudar",
//     description: "Estudar HTML",
//     date: "2021-03-29T00:00:00.000Z",
//     __v: 0,
//   },
//   {
//     status: false,
//     _id: "62433f49b68ce20004a3113d",
//     title: "Estudar",
//     description: "Estudar HTML",
//     date: "2021-03-29T00:00:00.000Z",
//     __v: 0,
//   },
//   {
//     status: false,
//     _id: "62433f49b68ce20004a3113d",
//     title: "Estudar",
//     description: "Estudar HTML",
//     date: "2021-03-29T00:00:00.000Z",
//     __v: 0,
//   },
// ];

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [id, setId] = useState('');

  // com o array vazio ele executará uma vez após montagem do componente
  // com nome da variável dentro do array, o useEffect funciona toda vez que o valor da variável for alterado
  useEffect(() => { getTodos() }, [])

  async function getTodos() {
    setLoading(true);
    try {
      const data = await fetch('http://localhost:3000/api/todo')
      const { todos } = await data.json();
      // console.log(data.json().todos[1];

      setTodos(todos)

    } catch (error) {
      alert('houve um erro ao comunicar com o servidor' + error)
    }
    setLoading(false);
  }

  async function newTodo(event) {
    event.preventDefault();

    if (!title || !description || !date) {
      alert('preencha todos os campos')
    } else {
      const body = {
        // title: title,
        // description: description,
        // status: false,
        // date: date,

        // suprimindo os valores das chaves caso elas tenham o mesmo nome, o body acima vira:

        title,
        description,
        status: false,
        date
      }

      try {
        await fetch('http://localhost:3000/api/todo', { method: 'POST', body: JSON.stringify(body) })
        alert('to-do cadastrada com sucesso')
        getTodos();
        clearStates();

      } catch (error) {
        alert('erro ao cadastrar to-do' + error)
      }
    }
  }

  async function deleteTodoById(id) {
    try {
      await fetch(`http://localhost:3030/api/todo/${id}`, { method: 'DELETE' })
      alert('tarefa excluída com sucesso')
      getTodos();
    } catch (error) {
      alert('erro ao excluir tarefa' + error)

    }
  }

  function fillStates(todo) {
    setTitle(todo.title);
    setDescription(todo.description);
    setDate(todo.date.split('T'[0]));
    setId(todo.id);

  }

  async function editTodo(event) {
    event.preventDefault();
    try {
      const body = {
        title,
        description,
        date,
      }

      await fetch(`http://localhost:3000/api/todo${id}`, {
        method: 'PATCH',
        body: JSON.stringify(body)
      })
      getTodos();
      clearStates();
      alert('to-tarefa editada')
    } catch (error) {
      alert("erro ao alterar" + error)

    }
  }

  function clearStates() {
    setId('');
    setTitle('');
    setDescription('');
    setDate('');
  }

  async function setDone(id, status) {
    const body = {
      status: !status,
    }
    try {
      await fetch(`http://localhost:3000/api/todo/${id}`, { method: "PATCH", body: JSON.stringify(body) })


    } catch (error) {
      alert('erro ao marcar como concluída' + error)

    }

  }

  return (
    <div className="app">
      <form onSubmit={id ? editTodo : newTodo}>
        <h1>ToDo List - 2.0</h1>
        <div className="inputs">
          <label>
            <span>Título</span>
            <input placeholder="Titulo" value={title} onChange={(event) => setTitle(event.target.value)} />
          </label>
          <label>
            <span>Descrição</span>
            <input placeholder="Descrição" value={description} onChange={(event) => setDescription(event.target.value)} />
          </label>
          <div className="row">
            <label>
              <span>Data</span>
              <input type="date" placeholder="Data" value={date} onChange={(event) => setDate(event.target.value)} />
            </label>
          </div>
        </div>
        <div className="container-buttons">
          <button type="submit"> {id ? "Alterar" : "Salvar"}</button>
          <button type="button" onClick={clearStates}>Limpar</button>
        </div>
      </form>
      <ul>
        {loading ? (<h3>Carregando dados...</h3>) : (todos.map((todo) => (
          <li>
            <div style={todo.status ? { color: "green" } : { color: "red" }}>
              <h2>{todo.title}</h2>
              <p>{todo.description}</p>
              <p>{todo.date}</p>
            </div>
            <div className="container-buttons">
              <FiCheck size={20} color="#444" onClick={() => setDone(todo.id, todo.status)} />
              <FiEdit size={20} color="#444" onClick={() => fillStates(todo)} />
              <FiTrash size={20} color="#444" onClick={() => deleteTodoById(todo.id)} />
            </div>
          </li>)))}
        {/* apenas fazer o map das to-dos quando o loading estiver falso */}
        {/*!loading && todos.map((todo) => (<li>)*/}

        {/* enquanto o loading estiver como true, mostrar o "carregando dados" */}
        {/* {loading && <h3>Carregando dados...</h3>} */}
      </ul>
    </div >
  );
}

export default App;