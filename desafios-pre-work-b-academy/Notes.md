# Anotações das aulas do Pré-Work

#### O innerHTML faz a transformação para um código HTML. Ou seja, atribuindo um elemento com _.innerHTML_, seu valor deve ser uma tag e isso será transformado em código HTML.

Exemplo a seguir criando uma tag de título com um texto estático:

```javascript
document.querySelector('#app').innerHTML = `
  <h1>Hello Vite!</h1>`
```

#### Para fazer alteração do estado do texto de estático para dinâmico (tornando-o multável), pode ser feita a criação de uma váriavel na qual seu valor será o conteúdo da tag. Como por exemplo:

```javascript
let user = 'Pessoa'
document.querySelector('#app').innerHTML = `
<h1>Hello ${user}!</h1>`
```

Ou também criando uma função que recebe como argumento diretamente o valor da variável, esse valor muda quando um evento de click.

```javascript
function render(user) {
  document.querySelector(#app).innerHTML= `
  <h1>Hello ${user}!</h1>`
}

const link = document.querySelector('[data-js="link"]')
  link.addEventListener('click', (e) => {
  e.preventDefault()
  render('Vite')
})

render('Pessoa')
```

#### **Higher Order Function** trata-se de uma função que recebe uma função por argumento. Pode ser exemplificado da seguinte forma:

#### Pensando em reaproveitamento e reutilização de código, a função principal que faz algum tipo de iteração receberá como argumento uma outra função com a lógica a ser feita durante essa iteração, aplicando uma inversão de responsabilidade sob a função principal, sendo assim, a responsabilidade de informar qual será o retorno é dada a função passada no argumento da função principal. Como por exemplo:

```javascript
function mapping (array, logicFn) {
  const tempArray = []
  for(let i=0, i < array.lenght, i++) {
    array.push(logicFn(array[i]))
}
  return tempArray
}

```

#### No qual, quando a função for chamada, será passado como parâmetro uma função com a lógica que deverá ser executada na função doIteration, da seguinte maneira:

`mapping(arr, (item) => {return {id: item} })`

#

#### **Closure** é uma função em que suas informações que são armazenadas em seu interior não serão alteradas, ou até mesmo uma função que está dentro de outra função.

#### **Currying** é uma função que a princípio recebe determinada quantidade de argumentos e se necessitar de mais argumentos, retornará uma função. Como por exemplo:

```javascript
function sum(a) {
  return b => {
    return a + b
  }
}

//console.log(1)(2) = 3
```

#### ➡ fazer spread quando for necessário modificar valores em um objeto;

#### ➡ evitar utilizar os seguintes métodos: push, pop, shift, unshift splice, sort e reverse para manipular arrays, visto que esses métodos modificam o array original. Como alternativa, utilizar o método concat + destructuring, ou filter, slice, map e reduce.

#### Exemplo de modificação de um valor de um objeto:

```javascript
const product = {
  name: 'box'
  size: 44
  color: 'orangered'
  code: [4, 8, 2]
  }

const newProduct = {
  ...box,
  code: [...box.code, 9],
  }
```

#### Para comparar propriedades ou valores em um objeto, array.

- **Object.keys** = retorna um array com todas as chaves do objeto.
- **Object.values** = retorna um array com todos os valores do objeto.
- **Object.entries** = retorna um array com um par de valores: key e value em cada vetor sendo um array também. Sendo assim é possível percorrê-lo utilizando map, por exemplo como abaixo:

```javascript
Object.entries(product).map(entry => {
  return `${entry[0]} : ${entry[1]}`
})
```

#### ou então,

```javascript
Object.entries(product).map(([key, value]) => {
  return `${key} : ${value}`
})
```

#### O insertAdjacentHTML é uma função mais rápida se comparada ao innerHTML(), e recebe dois argumentos, sendo o segundo argumento o elemento, ou seja, o que será adicionado e o primeiro argumento é a posição que deve ser inserido o elemento, ou seja, onde o elemento será posicionado podendo ser as seguintes:

- _beforebegin_ = antes do início do elemento
- _afterend_ = depois do fim do elemento

- _afterbegin_ = depois do início do elemento, dentro da tag(mesma ideia do prepend)
- _beforeend_ = antes do fim, dentro da tag

Exemplo:

```javascript
app.inserAdjacentHTML('beforebegin', img)
```

#### Dentro do contexto do _insertAdjacent_, quando criado um elemento e adicionado um outro elemento dentro do primeiro através de appendchild, faz-se necessário a utilização do outerHTML, pois se utilizado o innerHTML somente o elemento de dentro seria adicionado. Sendo assim, para adicionar os dois elementos usa-se outerHTML. Além disso, é importante dizer que o outerHTML retorna uma string do objeto (elemento), da mesma forma que o innerHTML deve receber uma string da tag. Exemplo:

```javascript
const app = document.querySelector('[data-js="app"]')

const div = document.createElement('div')
const img = document.createElement('img')
div.appendChild(img) // nesse caso, muda-se o elemento de origem

app.insertAdjacentHTML('beforeend', div.outerHTML)
```

#### Para substituir um elemento por outro, basta fazer da seguinte forma:

```javascript
app.replaceChild(document.createElement('elementoNovo', elementoAntigo))
```

#### 💡 **Dicas:**

- _setAttribute_, seta um novo atributo no elemento e recebe como argumento: o nome do atributo e como segundo argumento o valor do atributo.
- _getAttribute_, retorna o valor do atributo, possui um argumento que deve ser informado o nome do atributo que deseja ser retornado o valor.
- Uma alternativa para retorno de valor de atributo, é utilizar o `dataset.'nomedata'`, por exemplo se o nome do atributo for 'data-js' o dataset deve ser dataset.js e ele retornará o valor do atributo data.js.

**SOBRE FORMULÁRIO** 📋

#### Para fazer manipulação de valores, ou atribuir eventos em inputs do tipo checkbok é necessário percorrer através do forEach adicionando o evento, isso se tratando de um gerenciamento manual. Da mesma maneira, funciona os inputs do tipo radio. Como por exemplo:

```javascript
const checkboxes = document.querySelectorAll('[data-js="lang"]')

//todos os checkbox no HTML contém o atributo data-js="lang"

checkboxes.forEach((checkbox) => {
checkbox.addEventListener('click', (e) => {
e.target.value = retorna o valor da label
e.target.checked = retorna um boolean se foi selecionado ou não
})
})
```

#### Entretanto, nos casos das options do select, faz-se necessário a utilização do evento 'change', como abaixo:

```javascript
const langSelect = document.querySelectorAll('[data-js="lang-select"]')

langSelect.addEventListener('change', (e) => {
e.target.value // irá retornar o valor da option que foi selecionada
})

Para obter mais de um valor dos options selecionados, é preciso mapear as options as transformando em um array. Da seguinte maneira é possível fazer isso retornando um objeto com os valores e as seleções:

langSelect.addEventListener('change' , (e) =>
[...e.target.options].map(el) => ({
value: el.value,
selected: el.selected,
}))
```

#### Ou então, somente retornando o valor dos elementos selecionados:

```javascript
langSelect.addEventListener('change', e => {
  ;[...e.target.selectedOptions].map(el => el.value)
})
```

#### 💡 **Dica:** Além de utilizar o spread, também poderia ser utilizado o Array.from(), que transforma em array os dados que se parecem com um array, ou seja, dados que possuem length e são organizados de maneira númerica, como por exemplo: nodeList, HTMLCollection. Para assim, utilizar métodos de array, como reduce, filter, map.

#

### **Promises**

#### Se trata de um novo tipo de dado que foi inserido no EcmaScript 6. Mas antes de falar sobre promises, é importante entender a diferença entre código síncrono e código assíncrono:

#### **Código Síncrono** é um código que é lido uma linha abaixo da outra, da mesma forma que aparece.

#### **Código Assíncrono** é um código que é enviado para a _thread_ chamada **event loop**, que é um lugar onde todo código assíncrono ou códigos que podem demorar a serem processados são enviados. O **event loop** envia para uma outra _thread_ para que a informação seja processada, depois desse processamento o **event loop** recebe a informação processada e encaminha para a _thread_ principal. Ou seja, o **event loop** recebe e retorna uma informação por vez. Esse tipo de código pode ser feito dentro de um `setInterval` ou `setTimeOut`.

#### Fazendo utilização do **Fetch API**, o retorno é o tipo de dado promise, no qual a ideia é de que o código seja assíncrono com uma interface padronizada, e essa é a maior vantagem de utilizar promise. E vale ressaltar que dentro de promises não se utiliza `return`.

#### Então, a promise é construída utilizando o new promise, da seguinte forma:

```javascript
const promise = new Promise()
```

#### A promise espera que seja passada uma função que é executada de forma síncrona, então:

```javascript
const promise = new Promise(() => {
  console.log('promise')
})
```

#### A promise utiliza o **resolve()** no callback, e dentro da função se utiliza o resolve passando como argumento o valor que deseja ser resolvido, e é esperado um único argumento.

#### Para consumir o valor da promise, faz-se necessário o uso do **then()** que funciona como o **eventListener**, mas o then() fica "ouvindo" quando a promise será resolvida e a função dentro do then() só será resolvida quando o resolve da promise for chamado. Além disso, o then() sempre irá retornar uma promise, podendo então ser encadeado em outro then(). Sendo assim:

```javascript
const promise = new Promise(resolve => {
  resolve({ a: 1 })
  promise.then(valorResolvido => {
    console.log('valor da promise:', valorResolvido.a) // 1
  })
})
```

#### **CallBack Hell** se refere ao encadeamento e dependências de promises, ou seja, uma promise após ser resolvida chama outra promise, e assim sucessivamente. Vale destacar que uma promise também retorna uma outra promise.

### **Tratando erros em Promises**

#### Quando a promise não é resolvida, ocorre um erro e da mesma forma que o resolve(), é possível utilizar o **reject()**. Com o reject(), ao invés de utilizar o then(), será utilizado o **catch()** que também retorna uma promise, e pega o erro.

### **Async e Await**

#### É um _sintax sugar_ para promise, é uma outra maneira de escrever a promise mas por baixo dos panos o JavaScript trata como promise.

```javascript
async function asyncFunction() {
  return 1
}
```

#### ou então:

```javascript
const asyncFunction2 = async () => {
  return 2
}
```

#### Então, implicitamente apenas inserindo a palavra reservada `async` será retornada uma _promise_, no qual o return será tratado como o resolve(). Sendo assim, para consumir o valor da _promise_ é necessário utilizar o then() da seguinte maneira:

```javascript
asyncFunction().then(result => console.log('result:', result))
```

#### A palavra-chave `await` aguarda a resolução da _promise_, então para utilizar o await é necessário obrigatoriamente estar dentro de uma função async. E em seguida da palavra await passa-se a _promise_ que se está esperando a resolução.

### **Fetch API**

#### Fetch API é uma API que nos permite comunicação com o servidor por meio do protocolo HTTP e utiliza sintaxe de _promises_. O fetch verifica se uma requisição está ok e se o ok for igual a **true** significa então que o endereço passado no fetch tem permissão para realizar request e fazer busca de dados desse servidor. Então, pode-se trazer o resultado com o método `json` que será uma _promise_. Sendo assim, é necessário utilizar um novo then() para manipular o resultado. Ou seja:

```javascript
fetch(url).then(result => result.json())
```

#### Para realizar um **POST** com fetch é necessário como primeiro argumento a url sendo a rota para qual será feita o request, e em seguida é passado um objeto com algumas opções como:

```javascript
fetch(url , {
  method: 'POST',
  headers: {
  'content-type':'application/json',
  },
  body: JSON.stringfy({
  'aqui ficam os dados que devem ser enviados'
  })
})
```
