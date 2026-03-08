# Projeto: Cálculo de Notas de Atletas

## Descrição

Este projeto foi desenvolvido em JavaScript com o objetivo de calcular a média válida das notas de atletas em uma competição de ginástica artística.

Cada atleta recebe cinco notas atribuídas por jurados que avaliam critérios como tempo de apresentação, originalidade da coreografia, postura, dificuldade das acrobacias e sincronismo.

De acordo com as regras da competição:

* Cada jurado atribui uma nota de **1 a 10**
* A **maior** e a **menor** nota são descartadas
* A média final é calculada utilizando **as três notas restantes**

O programa percorre uma lista de atletas, calcula a média válida para cada um e exibe os resultados no console.

---

## Estrutura de dados

A aplicação recebe uma lista de atletas no seguinte formato:

```
let atletas = [
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 }
];
```

Cada objeto contém:

* **nome**: nome do atleta
* **notas**: lista com cinco notas atribuídas pelos jurados

---

## Lógica da solução

O algoritmo segue os seguintes passos:

1. Percorrer a lista de atletas utilizando um laço `for`
2. Criar uma cópia das notas para evitar modificar o array original
3. Ordenar as notas em ordem crescente utilizando `sort()`
4. Remover a maior e a menor nota utilizando `slice()`
5. Somar as três notas restantes com `reduce()`
6. Calcular a média das notas válidas
7. Exibir os resultados no console

---

## Tecnologias utilizadas

* JavaScript
* Node.js

---

## Como executar o projeto

1. Clone este repositório:

```
git clone https://github.com/seu-usuario/notas-atletas
```

2. Acesse a pasta do projeto:

```
cd notas-atletas
```

3. Execute o arquivo com Node.js:

```
node notas-atletas.js
```

---

## Exemplo de saída

```
Atleta: Cesar Abascal
Notas Obtidas: 7.88,8.42,9.34,10,10
Média Válida: 9.253333333333334

Atleta: Fernando Puntel
Notas Obtidas: 7,8,9.33,10,10
Média Válida: 9.11
```

---

## Autor

Camila Sixel Cordeiro
Estudante de Análise e Desenvolvimento de Sistemas

GitHub: https://github.com/csixel
