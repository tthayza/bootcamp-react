# **TypeScript**

#### A proposta do Typescript é ser baseado no JavaScript com sintaxe para tipos, ou seja, é uma linguagem com _build_ para Javascript, porém fortememente tipada. O TS é uma linguagem compilada para o JavaScript, que passa por um processo de compilação antes de ir para o browser, sendo assim, seu código final gerado é um código em JavaScript.

#

## **_Vantagens em utilizar TS_**

#### A vantagem principal é ter um compilador que serve como um guia durante o desenvolvimento, sinalizando onde podem haver problemas de acordo com o código criado, tornando assim, o código mais seguro. Além disso, enquanto o JavaScript possui tipagem dinâmica, o TypeScript possui tipagem estática, isto é, se, por exemplo, uma variável é declarada como tipo `number` seu valor pode ser alterado, entretanto esse valor deve ser do mesmo tipo do valor em que foi declarada a mesma.

#

## **_Para utilizar a tipagem_**

#### É necessário apenas declarar o nome do dado, seguido de dois pontos e o tipo do dado. Como por exemplo:

```typescript
function sum(a: number, b: number): number {
  return a + b
}
```

#

### **_Links Úteis_**

- [doc](https://www.typescriptlang.org/docs/handbook/intro.html)

- [playground](https://www.typescriptlang.org/play)
