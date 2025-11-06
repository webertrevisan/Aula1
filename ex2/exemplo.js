//Exemplo 1: Literals
const nome1 = 'weber';
console.log(`Meu nome é ${nome1}.`)

// Exemplo 2: Destructuring em Objetos
const pessoa = {
    nome: "weber",
    idade: 30,
    cidade: "São Paulo"
};

console.log(`pessoa.nome: ${pessoa.nome}`);
const {nome} = pessoa;
console.log(`Nome: ${nome}`);

//Destructuring ja adicionando o resultado
const {idade: idadeUsuario} = pessoa;
console.log(`Idade: ${idadeUsuario}`);

//Vamos usar esse Vetor em Arrays
const numeros = [10, 20, 30];

//Exemplo 3: Destructurinf em Arrays

const [primeiro, segundo] = numeros
console.log(primeiro, segundo);

//Exemplo 4: Spread em Arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2]; // ... é o operador spread, neste contexto.
console.log(`Array combinado: ${arr3}`);

// Exemplo 5: Spread em Objetos
const login = {
    nome: 'weber',
    email: 'weber@blepol.com.br'
};

const permissao = {
    admin: true,
    editor: false
};

const user = {
    ...login,
    ...permissao
}
console.log(user);

const a = [1, 2, 3];
const copia = [...a]; // copia o array
const juntou = [...a, 4, 5]; // mescla/adiciona
console.log(juntou)

//Exemplo 6: Rest em Funções

const soma1 = (...numeros1) => {
    return numeros1.reduce((total, n) => total + n, 0);
};

console.log(soma1(1, 2, 3, 4, 5));

function soma(...numeros) {
    return numeros.reduce((total, n) => total + n, 0);
}

console.log(soma(1, 2, 3, 4)); // 10

// Exemplo 7: Rest em Destructuring de Arrays

const frutas = ['maçã', 'banana', 'laranja', 'manga'];
const [primeira, segunda, ...resto] = frutas;
console.log(`Frutas: ${primeira}, ${segunda}, ${resto.join(' e ')}`);

// Exemplo 8: Rest em Destructuring de Objetos

const usuario = {
    id: 1,
    nome: 'Ana',
    idade: 28,
    cidade: 'Cuiabá'
};
const {nome: nomeUsuario, ...dadosRestantes} = usuario;
console.log(`Nome: ${nomeUsuario}`);
console.log(`Dados restantes: ${JSON.stringify(dadosRestantes)}`);
