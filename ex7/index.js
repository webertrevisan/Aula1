// <<<<<<<<<<<<<<<<<<<RECOMENDADO>>>>>>>>>>>>>>>>>>>>>

async function buscarDados() {
  try {
    const resposta = await fetch("https://jsonplaceholder.typicode.com/todos/1");

    if (!resposta.ok) {
      throw new Error("Erro na requisição");
    }

    const dados = await resposta.json();
    console.log("Dados recebidos:", dados);

  } catch (erro) {
    console.error("Erro no fetch:", erro.message);
  }
}

buscarDados();

/*Versão mais curta sem tratar erros

async function buscarDados() {
  const resposta = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const dados = await resposta.json();
  console.log(dados);
}

buscarDados();
*/

//  <<<<<<<<<<ANTIGO>>>>>>>>>>>>>

// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((resposta) => {
//     console.log(resposta);
//     if (!resposta.ok) throw new Error("Erro na requisição");
//     return resposta.json();
//   })
//   .then((dados) => console.log("Dados recebidos:", dados))
//   .catch((erro) => console.error("Erro no fetch:", erro.message))
//   .finally(() => console.log("Fetch finalizado"));



//PRECISO VER ISSO

/*2. O que você deve usar:
✔ Cadastro → POST
✔ Login → POST
✔ Buscar dados do usuário → GET (depois de logado)
✅ 3. E usando AXIOS?

O Axios só muda a forma de escrever, mas o processo é o mesmo.
Ele é mais confortável que fetch.

📌 4. Exemplo completo de service com Axios
📁 services/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "https://seu-backend.com/api",
});

export default api;

📌 5. Cadastro (POST)
export async function cadastrarUsuario(dados) {
  try {
    const resposta = await api.post("/auth/register", dados);
    return resposta.data;
  } catch (erro) {
    console.error("Erro no cadastro:", erro);
    throw erro;
  }
}


Chamando:

await cadastrarUsuario({
  nome: "Weber",
  email: "test@test.com",
  senha: "123456"
});

📌 6. Login (POST)
export async function login(email, senha) {
  try {
    const resposta = await api.post("/auth/login", {
      email,
      senha,
    });

    return resposta.data; // geralmente token JWT
  } catch (erro) {
    console.error("Erro no login:", erro);
    throw erro;
  }
}


Chamando:

const usuario = await login("test@test.com", "123456");
console.log(usuario.token);

📌 7. Enviar token para o backend

Depois do login, você recebe um token (geralmente JWT).

Você armazena no localStorage:

localStorage.setItem("token", usuario.token);


E envia em todas as requisições privadas:

api.defaults.headers.common["Authorization"] = `Bearer ${token}`;*/