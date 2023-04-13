# **ECMASCRIPT MODULES**

## **Escopo e Módulo**

- '_use strict_' é o modo estrito do JavaScript vindo do ES5 que corrige alguns problemas, como o uso do this de maneira global.

- Para sinalizar ao navegador que o script no documento `.html` será renderizado como um módulo e não como um script comum com escopo global, basta passar o **type="module"** como atributo na tag script. Dessa forma, não será necessário a utilização do '_use strict_'.

<br>

## **Importação e Exportação**

### **_Forma Default_**

#### Para utilizar funções que estão em diferentes arquivos .js basta exportar a função fora da função e no fim do arquivo, da seguinte maneira:

```javascript
export default nomeDaFuncao
```

#### O export pode ser feito também na declaração mas a função será importada como uma expressão e não como uma função literal, assim:

```javascript
export default function sum(a, b) {
  return a + b
}
```

#### No arquivo onde a função será chamada, é necessário fazer o import logo no início do arquivo. Esse import deve ser feito da seguinte forma:

```javascript
import nomeDaFuncao from './caminhoDaFuncao/nomeDoArquivo.js'
```

#

### **_Forma Nomeada_**

#### A exportação sem a palavra-chave _default_ sendo feita na declaração da função, cria a necessidade de importar e utilizar a função no arquivo desejado exatamente com o mesmo nome que ela foi declarada. Nesse caso, o import deverá ser feito dessa maneira:

```javascript
import { sum } from './calculator.js'
```

#### E o export pode ser feito da mesma maneira:

```javascript
function sum(a, b) {
  return a + b
}
function mult(a, b) {
  return a * b
}
const a = 1
export { sum, mult, a }
```

#### Sendo necessário a importação de mais funções ou variáveis que estão em um mesmo arquivo, basta incluir dentro das chaves, assim:

```javascript
import { sum, number } from './calculator.js'
```

#

### **_Renomeando diretamente_**

#### É possível importar uma função que não está no arquivo de destino e renomeá-la para um nome desejado através do import. Para isso, basta utilizar a palavra-chave `as` da seguinte maneira:

```javascript
import { sum as soma } from './calculator.js'
```

#### Dessa forma, também é possível renomear determinada função pelo export.

```javascript
export { sum as soma }
//para import o nome novo deverá ser utilizado, nesse caso 'soma'
```

#

### **_Import e Export de múltiplos valores_**

- É possível ter um export default e export nomeado em um mesmo arquivo;
- Quando há mais de um tipo de export, o import deverá ser feito da seguinte forma:

```javascript
import tipoDefault, { tipoNomeado } from './calculator.js'
```

Ou então, pode ser feito o import de todos os valores existentes em outro arquivo por meio de um asterisco. No entanto, é necessário nomear esse asterisco para que possa ser utilizado no arquivo desejado. E a utilização será feita a partir do nome que foi nomeado seguido de um ponto final, então a IDE irá sugerir os valores que há no arquivo de origem. Um exemplo disso abaixo:

```javascript
import * as calculator from './calculator.js'

console.log('sum:' calculator.sum(1, 2))
console.log('obj:' calculator.default) // default irá retornar o valor em export default
```
