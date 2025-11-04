
// --Variáveis
const nome = 'weber';
let idade = 31;
var cidade = 'Ribeirao Preto';

console.log(nome, idade, cidade);

console.log(`Meu nome é ${nome} moro na ciadade ${cidade} e tenho ${idade} anos`)

// --Funções

function soma(a, b) { // função
    return a + b;    
}

// const somaArrow = (a, b) => {
//     return a + b
// };

const somaArrow = (a, b) => a + b ;
const mutiplica = x => x * 2 ;
const divide = () => 10/2;

console.log(divide());
console.log(`Soma tradicional: ${soma(2, 3)}`);
console.log(`Soma arrow function: ${somaArrow(2, 3)}`);
console.log(`multiplica por 2: ${mutiplica(5)}`)