import Cachorro from "./Cachorro";

const data = [
  {
    nome: 'Pingo',
    idade: 1,
    sexo: 'Macho',
    tamanho: 'Pequeno'
  },
  {
    nome: 'Gisele',
    idade: 2,
    sexo: 'Fêmea',
    tamanho: 'Médio'
  },
  {
    nome: 'Pinga',
    idade: 3,
    sexo: 'Fêmea',
    tamanho: 'Grande'
  },
  {
    nome: 'Snoopy',
    idade: 4,
    sexo: 'Macho',
    tamanho: 'Pequeno'
  },
  {
    nome: 'Caramelo',
    idade: 5,
    sexo: 'Macho',
    tamanho: 'Pequeno'
  }
]

export default function App() {
  return (
    <div>
      <h1>Clientes caninos da veterniária</h1>
      {/* nível 1: passando todas as props em cada elemento individualmente */}
      <Cachorro nome="Pingo" idade={11} sexo="Macho" tamanho="Grande" />
      <Cachorro nome="Gisele" idade={13} sexo="Fêmea" tamanho="Pequeno" />
      <Cachorro nome="Pinga" idade={5} sexo="Fêmea" tamanho="Médio" />
      <Cachorro nome="Snoopy" idade={2} sexo="Macho" tamanho="Pequeno" />
      <Cachorro nome="Caramelo" idade={8} sexo="Macho" tamanho="Grande" />

      {/* nível 2: passando as props em cada elemento com base no index do array de objetos "data" */}
      <Cachorro nome={data[0].nome} idade={data[0].idade} sexo={data[0].sexo} tamanho={data[0].tamanho} />
      <Cachorro nome={data[1].nome} idade={data[1].idade} sexo={data[1].sexo} tamanho={data[1].tamanho} />
      <Cachorro nome={data[2].nome} idade={data[2].idade} sexo={data[2].sexo} tamanho={data[2].tamanho} />
      <Cachorro nome={data[3].nome} idade={data[3].idade} sexo={data[3].sexo} tamanho={data[3].tamanho} />
      <Cachorro nome={data[3].nome} idade={data[4].idade} sexo={data[4].sexo} tamanho={data[4].tamanho} />

      {/* nível 3: passando as props por meio de um map do array de objetos */}
      {data.map((i) => (
        <Cachorro nome={i.nome} idade={i.idade} sexo={i.sexo} tamanho={i.tamanho} />
      ))}

      {/* nível 4: passando o objeto inteiro "cachorro" e deixando o componente "Cachorro.js" cuidar da distribuição de cada prop */}
      {data.map((cachorro, index) => (
        <Cachorro key={index.toString()} cachorro={cachorro} />
      ))}

    </div>
  );
}