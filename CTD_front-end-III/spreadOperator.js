const idades = [10, 20, 30, 40]
const idades2 = [100, 120, 30, 20]
idades.push(50);
console.log(idades)

// spread operator (espalha os valores pra inserir algo em uma posição x)
const valores = [...idades, ...idades2, 23, 24];
console.log(valores)