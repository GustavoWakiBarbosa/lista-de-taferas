function adicionarT() {
    var areaTemplate = document.getElementById("template");

    var conteudo = document.getElementById("nova-tarefa").value;

    var novoItem = areaTemplate.content.cloneNode(true);

    var li = novoItem.querySelector("li")

    li.append(conteudo)

    // li.innerHTML = conteudo

    var lista = document.getElementById("lista");

    lista.append(novoItem);
}

function removerB() {
    // document.querySelector("li").remove();

}