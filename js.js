function adicionarT() {
    var areaTemplate = document.getElementById("template");

    var novoLi = areaTemplate.content.cloneNode(true);

    var lista = document.getElementById("lista");

    lista.appendChild(novoLi);




}