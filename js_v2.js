var enter = document.getElementById("nova-tarefa");

enter.addEventListener('keyup', (e) => {

    if (e.key === "Enter") {
        adicionarT()
    }
})

var tarefas = JSON.parse(localStorage.getItem("tarefas"));

window.onload = () => {
    listarTodasTarefas();
}

function listarTodasTarefas() {
    var lista = document.getElementById("lista");
    lista.innerHTML = "";

    tarefas.forEach(function (valor, posicao) {
        var modeloItem = document.getElementById("modeloItem");
        var novoItem = modeloItem.content.cloneNode(true);

        var li = novoItem.querySelector('li');
        li.value = posicao;
        li.append(valor);

        lista.append(novoItem);
    });
}

function adicionarTarefa() {
    var novaTarefa = document.getElementById("nova-tarefa");

    tarefas.push(novaTarefa.value);
    listarTodasTarefas();

    novaTarefa.value = "";
    salvarNoBanco();
}

function remover(elemento) {
    var posicao = elemento.parentElement.value;
    tarefas.splice(posicao, 1);

    listarTodasTarefas();
    salvarNoBanco();
}

function salvarNoBanco() {
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
}

