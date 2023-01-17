/* Nullish Coalescing Operator
O operador nullish coalescenting (??) é um operador lógico 
que retorna seu operando do lado direito quando seu operando do lado esquerdo 
é null ou undefined, caso contrário, retorna seu operando do lado esquerdo.

 0, '', [], false, undefined, null => falsy

 null, undefined

*/
const idade = 0;
document.body.innerText = "Sua idade é: " + (idade ?? "Não informado");

// Objetos
const user = {
  name: "Diego",
  age: 27,
  adress: { street: "Rua Teste", number: 176 },
};
document.body.innerText = "name" in user; // true
document.body.innerText = Object.keys(user) // name,age,adress --- (retorna as chaves)
document.body.innerText = Object.values(user) // Diego,27,[object Object] --- (retorna os valores) 
document.body.innerText = JSON.stringify(Object.values(user)) // ["Diego",27,{"street":"Rua Teste","number":176}] --- (retorna a estrutura de dados mais complexas)
document.body.innerText = JSON.stringify(Object.entries(user)) // [["name","Diego"],["age",27],["adress",{"street":"Rua Teste","number":176}]] --- (retorna um vetor, com vários vetores dentro(com chave e valor))

// Desestruturação
const { address, idade: age, nickname = "Fernandes" } = user;
document.body.innerText = JSON.stringify({ address, age, nickname }); // {"adress": {"street":"Rua Teste","number":176}, "age": 27, "nickname": "Fernandes" }
function mostraIdade({ idade }) {
  return idade;
}
document.body.innerText = mostraIdade(user); // 27

// Rest Operator
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const [first, , third, ...rest] = array;
document.body.innerText = JSON.stringify({ first, third, rest }); // {"first":1,"third":3,"rest":[4,5,6,7,8,9,10]}

// Short Syntax
const name1 = "Diego";
const idade1 = 27;
const user1 = { name1, idade1 };
document.body.innerText = JSON.stringify(user1); // {"name1":"Diego","idade1":27}

// Optional Chaining
const usuario = {
    name: "Diego",
    age: 27,
    adress: {
      street: "Rua Teste",
      number: 176,
    //   zip: {
    //     code: '89160000',
    //     city: 'Rio do Sul'
    //   }
    },
  };

document.body.innerText = usuario.adress ? user.adress.street : 'Não informado'
document.body.innerText = usuario.adress?.zip?.code ?? 'Não informado'

const usuario1 = {
  name: "Diego",
  age: 27,
  adress: {
    street: "Rua Teste",
    number: 176,
    zip: { code: "86160000", city: "Rio do Sul" },
    showFullAddress() {
      return "ok";
    },
  },
};
document.body.innerText = usuario1.adress?.showFullAddress?.(); // ok


// Métodos de array
const array1 = [1, 2, 3, 4, 5];

// percorrer array
// *for
for (const i of array1) {
    document.body.innerText += i; // 12345
}

// *forEach
array1.forEach(item => {
    document.body.innerText += item; // 12345
})

// *map consegue fazer um retorno de um array do mesmo tamanho
// faz operação de transformação/alteração nos itens de um array
const novoArray = array1.map(item => {
    return item * 2
})
document.body.innerText = JSON.stringify(novoArray); // [2,4,6,8,10]

// *filter
// filtra um array, não altera os valores
const novoArray1 = array1
    .filter(item => item % 2 !== 0)
    .map(item => item * 10)

document.body.innerText = JSON.stringify(novoArray1); 

// *every retorna um booleano (true or false)
// retorna true se todos(every) satisfazem a condição
const todosItensSaoNumeros = array1.every(item => typeof item === 'number');
document.body.innerText = JSON.stringify(todosItensSaoNumeros);

// *some
// pelo menos 1 item satisfaz a condição
const peloMenosUmItemENumero = array1.some(item => {
    return typeof item === 'number';
})
document.body.innerText = JSON.stringify(peloMenosUmItemENumero)

// *find
// encontra o 'primeiro' item que satisfaça a condição
const par = array1.find(item => item % 2 === 0);
document.body.innerText = JSON.stringify(par)

// *findIndex
// retorna o índice daquele valor no array
const par1 = array1.findIndex(item => item % 2 === 0);
document.body.innerText = JSON.stringify(par1)

// *reduce
// o reduce busca reduzir um array
// ele iterará por cada elemento dessa lista com o objetivo de ao final gerar um único valor (de qualquer tipo)
const soma = array1.reduce((acc, item) => {
    return acc + item
}, 0)

document.body.innerText = JSON.stringify(soma)

// Template Literals
// Interpolação de strings

const name = 'Diego';
const message = `Bem vindo, ${name ? name : 'Visitante'}!`;

document.body.innerText = message;

// Promises
// .then / .catch

fetch('https://api.github.com/users/diego3g')
    .then(response => {
        return response.json();
    })
    .then(body => {
        console.log(body);
    })
    .catch(err => {
        console.log(err);
    })
    .finally(() => {
        console.log('Deu certo!')
    })

// Async, await

async function buscaDadosNoGithub() {
    try {
        const response = await fetch('https://api.github.com/users/diego3g');
        const body = await response.json();

        console.log(body);
    } catch (err) {
        console.log(err);
    } finally {
        console.log('Deu')
    }
}

buscaDadosNoGithub();