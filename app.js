//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

  // Array para armazenar os nomes
const nomes = [];

// Função para adicionar Nome a lista
function adicionarNome() {
    const nomeInput = document.getElementById('amigo');
    const listaNomes = document.getElementById('listaNomes');
    const nome = nomeInput.value.trim();

    // Validar o campo do nome
    if (nome === "") {
        alert("Por favor, digite um nome antes de adicionar.");
        return;
    }

    // Adicionar um nome ao array
    nomes.push(nome);

    // Limpar o input
    nomeInput.value = "";

    // Atualizar a lista de nomes na página
    atualizarLista();
}

// Função para atualizar a lista de nomes na página
function atualizarLista() {
    const listaNomes = document.getElementById('listaNomes');
    listaNomes.innerHTML = ""; // Limpa a lista

    // Adicionar cada nome como um <li>
    nomes.forEach(nome => {
        const li = document.createElement('li');
        li.textContent = nome;
        listaNomes.appendChild(li);
    });
}

// Função para sortear um nome
function sortearNome() {
    const resultadoSorteio = document.getElementById('resultadoSorteio');

    if (nomes.length === 0) {
        alert("A lista está vazia. Adicione nomes antes de sortear.");
        return;
    }

    // Realizar o sorteio
    const indiceSorteado = Math.floor(Math.random() * nomes.length);
    const nomeSorteado = nomes[indiceSorteado];

    // Exibir o resultado
    resultadoSorteio.innerHTML = ""; // Limpa os resultados anteriores
    const li = document.createElement('li');
    li.textContent = `Amigo sorteado: ${nomeSorteado}`;
    resultadoSorteio.appendChild(li);
}
