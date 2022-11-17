const idades = [10, 18, 45, 90];
console.log(idades);

// MAP => precisa de uma callback | retorna um [array] | passa por todos os itens
let idadesMapDobradas = idades.map((idade) => idade * 2);
console.log(idadesMapDobradas);

let idadesMapDobradasDeAcordoComCondicao = idades.map((idade) => idade > 40 ? idade * 2 : idade);
console.log(idadesMapDobradasDeAcordoComCondicao);

// FILTER => precisa de callback | retorna um [array] | passa por todos os itens
let idadesFilter = idades.filter((idade) => idade > 40)
console.log(idadesFilter);

// REDUCE => reduz todos os valores a 1 só de acordo com a callback | callback com acumulador como parâmetro | retorna valor único | junta todos os valores do array para um só (soma tudo de acordo com o valor inicializado do acumulador depois da vírgula)
let idadesReduce = idades.reduce((acumulador, idade) => idade + acumulador, 0);
console.log(idadesReduce);

let produtos = [
  {
    id: 1,
    nome: "bicicleta",
    preco: 500
  },
  {
    id: 2,
    nome: "carrinho de rolimã",
    preco: 50
  },
  {
    id: 3,
    nome: "peão",
    preco: 5
  },
]

let precosReduce = produtos.reduce((acumulador, produto) => produto.preco + acumulador, 0);
console.log(precosReduce);

let precosMaioresQue100 = produtos.reduce((acumulador, produto) => produto.preco > 100 ? (produto.preco + acumulador) : acumulador, 0)
console.log(precosMaioresQue100);


// FIND => precisa de callback | retorna valor único de acordo com parâmetro | 
let produtoFound = produtos.find((produto) => produto.nome === "peão")
console.log(produtoFound)

// FINDINDEX => precisa de callback | retorna valor único baseado em seu index | 
let produtoPorIndex = produtos.findIndex((produto) => produto.preco === 4000);
console.log(produtoPorIndex); // retorna -1 porque não existe produto de acordo com as especificações


// PUSH => adiciona 1 ou mais itens ao final do array | retorna array
const novoProduto = {
  id: 4,
  nome: "cadeira",
  preco: "1000"
}
produtos.push(novoProduto);
console.log(produtos)

// POP =>  retira 1 ou mais elementos de acordo com parâmetros

// UNSHIFT
produtoNoComecoDoArray = {
  id: 0,
  nome: "zerinho",
  preco: 0
}
produtos.unshift(produtoNoComecoDoArray);
console.log(produtos);

// SLICE => separa o array a partir da posição (index) passada por parâmetro até a posição (index) passada como 2º parâmetro | retorna novo array
arraySlice = produtos.slice(2, 4)
console.log(arraySlice);