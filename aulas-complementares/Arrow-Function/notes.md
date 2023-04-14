# **Arrow Function** 🏹

#### Também conhecida como _lâmbda function_, a arrow function é como uma function, porém sua sintaxe é de expressão anônima e não como uma function literal. Sua sintaxe se inicia em um par de parênteses seguido da seta `=>` e em seguida o corpo da função sendo um par de chaves. Para fazer uso de arrow function é sempre necessário que seja atribuído a uma variável. Abaixo alguns exemplos de como arrows functions podem funcionar:

<br>

#### 💡 **Dica:** Quando há apenas um argumento não é necessário inserí-lo entre parênteses.

#

### **Exemplo 1:** Uma arrow function comum de soma

```javascript
const sum = (a, b) => {
  return a + b
}

console.log('sum:' sum(1, 2)) // sum: 3
```

#

### **Exemplo 2:** Uma função que multiplica dois valores, em uma única linha.

#### Utilizando arrow function sem utilizar a palavra-chave `return` onde é implícito que haverá determinado retorno.

```javascript
const mult = (a, b) => a * b
console.log('mult:', mult(2, 2)) // mult: 4
```

#### ❗ **Importante:** Em casos que sejam necessários retornar um objeto, deverá ser utilizado um par de parênteses envolvendo o objeto. Caso contrário, ocasionará em erro.
