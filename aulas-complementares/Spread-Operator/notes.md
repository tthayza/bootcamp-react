# **Spread Operator**

#### é um novo operador denominado pela reticências `...`, que espalha elementos. Com o intuito de evitar causar mutabilidade, o spread operator pode ser usado quando é necessário obter valores e propriedades de um objeto já existente mas que precisa ser transformado (mas é possível fazer com outros tipos de dados que sejam iteráveis).

#

### **_Spread Syntax_**

```javascript
//criando um objeto com propriedades name e age
const person = {
  name: 'Thayza',
  age: 24
}
//novo objeto que obtém as mesmas propriedades e valores de person, porém, inserindo um novo valor para a propriedade age
const personUpdated = {
  ...person,
  age: 25
}
```

#

### **_Rest Syntax_**

#### Caso seja necessário criar um novo objeto mas que não contenha alguma das propriedades do objeto de origem, é possível utilizar o destructuring assignment e nesse caso, se torna o Rest Sintax visto que ele junta o que resta para a criação do novo objeto, assim:

```javascript
const { age, ...newPerson } = person
```
