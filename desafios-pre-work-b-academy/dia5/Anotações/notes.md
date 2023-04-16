# **TypeScript**

#### A proposta do Typescript é ser baseado no JavaScript com sintaxe para tipos, ou seja, é uma linguagem com _build_ para Javascript, porém fortememente tipada. O TS é uma linguagem compilada para o JavaScript, que passa por um processo de compilação antes de ir para o browser, sendo assim, seu código final gerado é um código em JavaScript.

#

## **Vantagens em utilizar TS**

#### A vantagem principal é ter um compilador que serve como um guia durante o desenvolvimento, sinalizando onde podem haver problemas de acordo com o código criado, tornando assim, o código mais seguro. Além disso, enquanto o JavaScript possui tipagem dinâmica, o TypeScript possui tipagem estática, isto é, se, por exemplo, uma variável é declarada como tipo `number` seu valor pode ser alterado, entretanto esse valor deve ser do mesmo tipo do valor em que foi declarada a mesma.

#

## **Utilizando Tipagem**

#### É necessário apenas declarar o nome do dado, seguido de dois pontos e o tipo do dado. Como por exemplo:

```typescript
function sum(a: number, b: number): number {
  return a + b
}
```

<br>

### **_Em arrow function_**

#### É possível tipar somente os parâmetros e forçando o tipo do retorno, dessa maneira:

```typescript
const sum = (a: number, b: number): number => {
  return a + b
}
```

#### Ou então, tipando diretamente a função e seus parâmetros, assim:

```typescript
const sum: (a: number, b: number) => number = (a, b) => {
  return a + b
}
```

<br>

### **_Criando um tipo_**

#### É possível também "criar" um tipo atribuindo-o a uma variável do tipo `type` para que o código fique mais legível, dessa maneira:

```typescript
// tipando parâmetros e saída
type TipoSum = (a: number, b: number) => number
```

<br>

### **_Union Type_**

#### Refere-se a quando um determinado dado pode tanto ser um tipo ou outro tipo, sua sintaxe é feita através de um pipeline. Por exemplo:

```typescript
let v: number | string = '1'
// nesse caso, métodos de string serão liberados
let v: number | string = 1
// nesse caso, métodos de number serão liberados
```

#### Se dentro de uma função for esperado um parâmetro que possua union type, faz-se necessário utilizar o TypeGuards pois só serão liberados métodos que contemplem os dois tipos passados pelo union type.

<br>

### **_TypeGuards_**

#### É a utilização de alguma expressão do javascript que irá garantir que aquele tipo é de um tipo específico.

- `type of`: para tipos primitivos (string, number, boolean, function)
- Para arrays, basta usar 'Array.isArray(paramêtro)

<br>

### **_Tipando um array_**

#### Para tipar um dado como array, basta no momento da declaração após o nome, passar o seguinte: `number[]` ou `Array<number>`vai depender do tipo de dado que contém no interior do array e nesse formato será usado quando o array possuir valores constantes de um só tipo. Porém, se forem valores de diferentes tipos, surge a necessidade de utilizar a seguinte forma de sintaxe: `Array<number | string>`.

<br>

### **_Tupla em TS_**

#### É um novo tipo de dado, como se fosse um array mas que tem valores específicos. Geralmente, é uma tupla quando se trata de um array que possuem valores que tem o tipo distinto um do outro. Por isso, no caso desse dado, normalmente pode ser retornado dois tipos diferentes. Sua sintaxe é desenvolvida da seguinte maneira:

```typescript
const arr: [number, string] = [1, '1']
```

#### No código acima, é definido que o tipo de dado será uma tupla e que irá conter um valor tipo number e um valor tipo string. Caso seja adicionado mais de dois elementos, ocasionará em erro.

<br>

### **_Estendendo tipos_**

#### É possível também criar tipos e estendê-los para um novo tipo, por exemplo:

```typescript
type PersonName = {
name: string
}
type PersonSurname = {
surname: string
}
type PersonFullName = PersonName & PersonSurname {}
```

#

### **_Links Úteis_**

- [doc](https://www.typescriptlang.org/docs/handbook/intro.html)

- [playground](https://www.typescriptlang.org/play)
