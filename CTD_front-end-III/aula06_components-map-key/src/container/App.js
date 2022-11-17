import '../styles/App.css';
import ClassComponent from '../components/ClassComponent';
import FunctionComponent from '../components/FunctionComponent';

listaDeConvidados = [
  {
    id: 1,
    nome: "Dafne",
    estaNaLista: true,
    tarefa: "batata-frita"
  },
  {
    id: 2,
    nome: "Pedro",
    estaNaLista: true,
    tarefa: "pizza"
  },
  {
    id: 1,
    nome: "Anna",
    estaNaLista: true,
    tarefa: "refris"
  },

]

export default function App() {
  return (
    <>
      <div className="App">
        <h3>Convidados:</h3>
        {listaDeConvidados.map((item) => (<ClassComponent key={item.id} nome={item.nome} estaNaLista={item.estaNaLista} />))}

        <h3>Tarefas:</h3>
        {listaDeConvidados.map((item) => (<FunctionComponent key={item.id} nome={item.nome} tarefa={item.tarefa} />))}
      </div>
    </>
  );
}
