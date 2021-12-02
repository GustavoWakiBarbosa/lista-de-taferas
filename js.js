function adicionarT() {
    var areaTemplate = document.getElementById("template");

    var conteudo = document.getElementById("nova-tarefa").value;

    var novoItem = areaTemplate.content.cloneNode(true);

    var li = novoItem.querySelector("li")

    li.appendChild(document.createTextNode(conteudo))

    // li.innerHTML = conteudo

    var lista = document.getElementById("lista");

    lista.appendChild(novoItem);







}


