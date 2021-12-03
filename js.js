
function adicionarT() {
    var conteudo = document.getElementById("nova-tarefa").value;

    var areaTemplate = document.getElementById("template");

    var novoItem = areaTemplate.content.cloneNode(true);

    var li = novoItem.querySelector("li")

    li.append(conteudo)

    // li.innerHTML = conteudo

    var lista = document.getElementById("lista");

    if (conteudo == "") {
        alert("Insira um texto");
    }
    else {
        lista.append(novoItem);
    }
}

function remover(elemento) {
    elemento.parentElement.remove();

}