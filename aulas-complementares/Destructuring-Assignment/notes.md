# **DESTRUCTURING ASSIGNMENT**

#### Basicamente é uma funcionalidade em que é possível fazer uma atribuição através de desestruturação, fazendo isso, pode-se obter os valores desejados. Um exemplo disso:

```javascript
//criando objeto com propriedades name e age
const person = {
  name: 'Thayza',
  age: 24
}

//criando variáveis const que são chamadas de name e age e recebem os valores que estão guardados nas propriedades name e age do objeto person
const { name, age } = person
console.log('name:', name) //'Thayza'
console.log('age:', age) // 24
```

#

## **_Sintaxe reduzida de objeto_**

#### A sintaxe reduzida de um objeto é muito semelhante ao que foi feito anteriormente, mas os lados ficam invertidos nesse caso. Então:

```javascript
const doors = 4
const color = 'crimson'

//criando um objeto em que se atribui as propriedades e valores já declarados antes de sua construção, que são doors e color
const car = { doors, color }
console.log('car:', car) // car: {doors: 4, color: "crimson"}
```

#### Para renomear as propriedades desse mesmo contexto, é possível utilizar a desestruturação da seguinte maneira:

```javascript
const { doors: doorsRenamed, color: colorRenamed } = car
```

#### No código acima, os valores se mantém mas os nomes das variáveis ou propriedades do objeto `car` são alterados.

#

## **_Destructuring de Arrays_**

#### A desestruturação em arrays, funciona da mesma maneira como em objetos porém ao invés do uso de chaves, será usado colchetes. Então:

```javascript
//criando um array chamado coords que na posição 0 tem o valor 100 e na posição 1 tem o valor 200.
const coords = [100, 200]

//criando variáveis com os nomes 'x' e 'y' que acessam e recebem respectivamente aos valores no array cords.
const [x, y] = coords

console.log('x:', x) // x: 100
console.log('y:', y) // x: 200
```

#### Dentro desse mesmo contexto, se for necessário obter somente o segundo valor, basta fazer da seguinte forma:

```javascript
const [, y] = coords
console.log('y:', y) // y: 200
```

#### Enquanto na desestruturação de objetos é possível renomear as variáveis ou propriedades, na desestruturação de arrays não existe e isso ocasiona em erro inesperado, visto que em array o nome não importa diferentemente de um objeto onde o nome da propriedade é importante.
