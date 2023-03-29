# Anotações das aulas do Pré-Work

https://youtu.be/E8XpsKvmAjw?list=PLF7Mi9HNzvVk05NdZnB44rccbg_dnWuMh&t=11899

#

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
  return `$[entry[0] : $[entry[1]`
})
```

#### ou então,

```javascript
Object.entries(product).map(([key, value]) => {
  return `${key} : ${value}`
})
```
