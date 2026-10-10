// ======================================================
// SEMANA 04 - ARRAYS, DOM E EVENTOS
// ======================================================



// ======================================================
// BLOCO 1 - ARRAYS E MÉTODOS
// ======================================================

console.log(
    "===== BLOCO 1 - ARRAYS E MÉTODOS ====="
);


// ------------------------------------------------------
// ARRAY DE NOMES
// ------------------------------------------------------

const nomes = [
    "Rafael",
    "Lucas",
    "Mariana"
];


// forEach
// Percorre cada elemento do array.

nomes.forEach((nome) => {

    console.log(
        `Olá, ${nome}!`
    );

});


// map
// Cria um novo array com os nomes em maiúsculas.

const nomesMaiusculos = nomes.map((nome) => {

    return nome.toUpperCase();

});


console.log(
    "Nomes em maiúsculas:",
    nomesMaiusculos
);



// ------------------------------------------------------
// ARRAY DE PREÇOS
// ------------------------------------------------------

const precos = [
    10,
    25,
    40,
    5,
    60
];


// filter
// Cria um novo array apenas com preços acima de 20.

const precosAcimaDe20 = precos.filter((preco) => {

    return preco > 20;

});


console.log(
    "Preços acima de 20:",
    precosAcimaDe20
);


// reduce
// Soma todos os preços.

const somaPrecos = precos.reduce(
    (acumulador, preco) => {

        return acumulador + preco;

    },
    0
);


console.log(
    "Soma de todos os preços:",
    somaPrecos
);



// ------------------------------------------------------
// ARRAY DE OBJETOS - PRODUTOS
// ------------------------------------------------------

const produtos = [

    {
        nome: "Caderno",
        preco: 15
    },

    {
        nome: "Mochila",
        preco: 80
    },

    {
        nome: "Caneta",
        preco: 5
    },

    {
        nome: "Calculadora",
        preco: 45
    }

];


// map
// Extrai apenas os nomes dos produtos.

const nomesProdutos = produtos.map((produto) => {

    return produto.nome;

});


console.log(
    "Nomes dos produtos:",
    nomesProdutos
);


// filter
// Seleciona produtos com preço menor que 50.

const produtosMenoresQue50 = produtos.filter((produto) => {

    return produto.preco < 50;

});


console.log(
    "Produtos abaixo de R$ 50:",
    produtosMenoresQue50
);


// reduce
// Soma o preço de todos os produtos.

const totalProdutos = produtos.reduce(
    (acumulador, produto) => {

        return acumulador + produto.preco;

    },
    0
);


console.log(
    "Valor total dos produtos:",
    totalProdutos
);


// forEach
// Exibe cada produto.

produtos.forEach((produto) => {

    console.log(
        `${produto.nome}: R$ ${produto.preco}`
    );

});





// ======================================================
// BLOCO 2 - MANIPULAÇÃO DO DOM
// ======================================================

console.log(
    "\n===== BLOCO 2 - MANIPULAÇÃO DO DOM ====="
);


// ------------------------------------------------------
// querySelector no título
// ------------------------------------------------------

const titulo =
    document.querySelector("#titulo");


titulo.textContent =
    "Blog do Rafael Tajra";



// ------------------------------------------------------
// querySelectorAll nos parágrafos
// ------------------------------------------------------

const paragrafos =
    document.querySelectorAll(".texto");


paragrafos.forEach((paragrafo) => {

    console.log(
        "Parágrafo:",
        paragrafo.textContent
    );

});



// ------------------------------------------------------
// Seleção da lista
// ------------------------------------------------------

const lista =
    document.querySelector("#lista");



// ------------------------------------------------------
// innerHTML
// ------------------------------------------------------

/*
O exercício solicita o uso de innerHTML
para inserir dois itens na lista.

Os três itens que estavam originalmente no HTML
foram usados para demonstrar que a lista já possuía
itens declarados diretamente no documento.

Agora o innerHTML substitui seu conteúdo.
*/

lista.innerHTML = `
    <li>Primeiro item</li>
    <li>Segundo item</li>
`;



// ------------------------------------------------------
// createElement + append
// ------------------------------------------------------

const terceiroItem =
    document.createElement("li");


terceiroItem.textContent =
    "Terceiro item";


lista.append(terceiroItem);



// ------------------------------------------------------
// classList.add
// ------------------------------------------------------

terceiroItem.classList.add(
    "destaque"
);



// ------------------------------------------------------
// classList.contains
// ------------------------------------------------------

console.log(
    'Terceiro item possui "destaque":',
    terceiroItem.classList.contains("destaque")
);



// ------------------------------------------------------
// ARRAY DE TAREFAS
// ------------------------------------------------------

const tarefas = [
    "Estudar JS",
    "Fazer exercícios",
    "Revisar DOM"
];



// ------------------------------------------------------
// Criar um li para cada tarefa
// ------------------------------------------------------

tarefas.forEach((tarefa) => {

    const item =
        document.createElement("li");


    item.textContent =
        tarefa;


    lista.append(item);

});



// ------------------------------------------------------
// Adicionar classe feito ao primeiro li
// ------------------------------------------------------

const primeiroItem =
    lista.querySelector("li");


primeiroItem.classList.add(
    "feito"
);



// ------------------------------------------------------
// Contar quantidade de itens
// ------------------------------------------------------

const quantidadeDeItens =
    lista.querySelectorAll("li").length;


console.log(
    "Quantidade total de itens:",
    quantidadeDeItens
);





// ======================================================
// BLOCO 3 - EVENTOS
// ======================================================

console.log(
    "\n===== BLOCO 3 - EVENTOS ====="
);



// ------------------------------------------------------
// CLICK
// ------------------------------------------------------

const botao =
    document.querySelector("#botao");


botao.addEventListener(
    "click",
    () => {

        console.log(
            "Clicou!"
        );

    }
);



// ------------------------------------------------------
// MOUSEOVER
// ------------------------------------------------------

botao.addEventListener(
    "mouseover",
    () => {

        botao.textContent =
            "Pode clicar!";

    }
);



// ------------------------------------------------------
// KEYUP
// ------------------------------------------------------

const campoNome =
    document.querySelector("#nome");


campoNome.addEventListener(
    "keyup",
    () => {

        console.log(
            campoNome.value
        );

    }
);



// ======================================================
// EVENT DELEGATION
// ======================================================

/*
Existe apenas UM listener na lista.

Não colocamos listeners separados
em cada li.

O e.target informa qual elemento
foi realmente clicado.
*/

lista.addEventListener(
    "click",
    (e) => {

        if (e.target.tagName === "LI") {

            e.target.classList.toggle(
                "feito"
            );


            console.log(
                "Item clicado:",
                e.target.textContent
            );

        }

    }
);



// ------------------------------------------------------
// NOVO LI CRIADO VIA JAVASCRIPT
// ------------------------------------------------------

const itemDinamico =
    document.createElement("li");


itemDinamico.textContent =
    "Item criado dinamicamente";


lista.append(itemDinamico);


/*
Não precisamos adicionar um novo
addEventListener ao item acima.

Ele funciona com o listener existente
na lista graças ao Event Delegation.
*/





// ======================================================
// FORMULÁRIO
// ======================================================

const formulario =
    document.querySelector("#formulario");


const campoTarefa =
    document.querySelector("#tarefa");



formulario.addEventListener(
    "submit",
    (e) => {

        // Impede a página de recarregar.

        e.preventDefault();


        // trim() remove espaços do começo e do final.

        const texto =
            campoTarefa.value.trim();


        // Se estiver vazio, não adiciona nada.

        if (texto === "") {

            return;

        }


        // Criar novo li.

        const novaTarefa =
            document.createElement("li");


        novaTarefa.textContent =
            texto;


        // Adicionar à lista.

        lista.append(novaTarefa);


        // Limpar o input.

        campoTarefa.value = "";

    }
);
