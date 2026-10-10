# Arrays, DOM e Eventos - Semana 04

Projeto desenvolvido como entregável da Semana 04 da disciplina de Desenvolvimento Web.

## Objetivo

O objetivo deste projeto é praticar conceitos fundamentais de JavaScript envolvendo:

- arrays;
- métodos de arrays;
- manipulação do DOM;
- eventos;
- Event Delegation;
- formulários.

## Tecnologias utilizadas

- HTML5
- JavaScript ES6+

## Estrutura do projeto

```text
javascript-arrays-dom-eventos-semana-04/
│
├── index.html
├── app.js
└── README.md
```

## Métodos de arrays

### forEach()

O método `forEach()` percorre os elementos de um array e executa uma função para cada elemento.

Ele é utilizado quando queremos realizar uma ação para cada item.

Exemplo:

```javascript
nomes.forEach((nome) => {
    console.log(nome);
});
```

### map()

O método `map()` percorre um array e cria um novo array contendo os valores transformados.

O array original não é modificado.

Exemplo:

```javascript
const nomesMaiusculos = nomes.map((nome) => {
    return nome.toUpperCase();
});
```

### filter()

O método `filter()` cria um novo array contendo apenas os elementos que atendem a uma determinada condição.

Exemplo:

```javascript
const precosAcimaDe20 = precos.filter((preco) => {
    return preco > 20;
});
```

### reduce()

O método `reduce()` percorre todos os elementos e acumula os valores em um único resultado.

No projeto, ele é utilizado para calcular a soma dos preços.

Exemplo:

```javascript
const total = precos.reduce((acumulador, preco) => {
    return acumulador + preco;
}, 0);
```

## Manipulação do DOM

O DOM representa a estrutura da página HTML carregada no navegador.

JavaScript pode acessar e modificar essa estrutura dinamicamente.

Neste projeto foram utilizados:

- `querySelector()`;
- `querySelectorAll()`;
- `innerHTML`;
- `textContent`;
- `createElement()`;
- `append()`;
- `classList.add()`;
- `classList.contains()`;
- `classList.toggle()`.

Por exemplo:

```javascript
const titulo = document.querySelector("#titulo");

titulo.textContent = "Blog do Rafael Tajra";
```

Também foram criados elementos dinamicamente:

```javascript
const item = document.createElement("li");

item.textContent = "Novo item";

lista.append(item);
```

## Eventos

O projeto utiliza `addEventListener()` para responder às ações realizadas pelo usuário.

Foram utilizados os eventos:

- `click`;
- `mouseover`;
- `keyup`;
- `submit`.

Exemplo:

```javascript
botao.addEventListener("click", () => {
    console.log("Clicou!");
});
```

## Event Delegation

Event Delegation consiste em colocar um único listener em um elemento pai e utilizar `e.target` para identificar qual elemento filho recebeu a interação.

Neste projeto, existe um único evento de clique na lista:

```javascript
lista.addEventListener("click", (e) => {

    if (e.target.tagName === "LI") {

        e.target.classList.toggle("feito");

        console.log(e.target.textContent);

    }

});
```

Essa abordagem é importante porque evita a necessidade de criar um evento para cada item da lista.

Além disso, elementos criados dinamicamente depois da criação do listener também respondem ao clique.

Isso torna o código mais eficiente, simples e escalável.

## Formulário

O formulário utiliza o evento `submit`.

O método:

```javascript
e.preventDefault();
```

impede que o navegador recarregue a página após o envio.

O valor é obtido através do campo de tarefa:

```javascript
const texto = campoTarefa.value.trim();
```

O método `trim()` remove espaços desnecessários e permite verificar se o usuário realmente digitou alguma informação.

Quando o campo possui conteúdo, um novo elemento `li` é criado e adicionado à lista.

## Como executar

1. Clone ou baixe o repositório.
2. Abra a pasta no Visual Studio Code.
3. Abra `index.html` usando o navegador ou a extensão Live Server.
4. Pressione `F12`.
5. Abra a aba `Console`.

Os resultados dos exercícios poderão ser visualizados no console do navegador.

## Autor

Rafael Tajra
