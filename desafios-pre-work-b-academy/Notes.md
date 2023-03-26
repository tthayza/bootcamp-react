# Anotações das aulas do Pré-Work

https://youtu.be/E8XpsKvmAjw?list=PLF7Mi9HNzvVk05NdZnB44rccbg_dnWuMh&t=11899

#

#### O innerHTML faz a transformação para um código HTML. Ou seja, atribuindo um elemento com _.innerHTML_, seu valor deve ser uma tag e isso será transformado em código HTML.
Exemplo a seguir criando uma tag de título com um texto estático:
~~~ javascript
document.querySelector('#app').innerHTML= `
  <h1>Hello Vite!</h1>`
~~~

#### Para fazer alteração do estado do texto de estático para dinâmico (tornando-o multável), pode ser feita a criação de uma váriavel na qual seu valor será o conteúdo da tag. Como por exemplo:
~~~ javascript
let user = 'Pessoa'
document.querySelector('#app').innerHTML= `
<h1>Hello ${user}!</h1>`
~~~

Ou também criando uma função que recebe como argumento diretamente o valor da variável, esse valor muda quando um evento de click.
~~~ javascript
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
~~~

#### __Higher Order Function__ trata-se de uma função que recebe uma função por argumento. Pode ser exemplificado da seguinte forma:
#### Pensando em reaproveitamento e reutilização de código, a função principal que faz algum tipo de iteração receberá como argumento uma outra função com a lógica a ser feita durante essa iteração, aplicando uma inversão de responsabilidade sob a função principal, sendo assim, a responsabilidade de informar qual será o retorno é dada a função passada no argumento da função principal. Como por exemplo:

~~~ javascript
function mapping (array, logicFn) {
  const tempArray = []
  for(let i=0, i < array.lenght, i++) {
    array.push(logicFn(array[i]))
}
  return tempArray
}

~~~

#### No qual, quando a função for chamada, será passado como parâmetro uma função com a lógica que deverá ser executada na função doIteration, da seguinte maneira:

```mapping(arr, (item) => {return {id: item} })```

#

#### __Closure__ é uma função em que suas informações que são armazenadas em seu interior não serão alteradas, ou até mesmo uma função que está dentro de outra função.

#### __Currying__ é uma função que a princípio recebe determinada quantidade de argumentos e se necessitar de mais argumentos, retornará uma função. Como por exemplo:

~~~ javascript
function sum(a) {
  return(b) => {
    return a + b
    }
  }

  //console.log(1)(2) = 3
~~~