const btnFiltrar = document.getElementById("pesquisar");

btnFiltrar.addEventListener("click", filtrar);

function filtrar() {
  const categoriaSelecionada = document.getElementById("categorias").value;
  const clientes = document.querySelectorAll(".card");

  clientes.forEach(function (cliente) {
    const categoriaCliente = cliente.dataset.categoria;

    const mostrarCliente =
      categoriaSelecionada === "" ||
      categoriaCliente === categoriaSelecionada;

    if (mostrarCliente) {
      cliente.style.display = "flex"; // Mostra os que passaram no filtro
    } else {
      cliente.style.display = "none"; // Esconde os que não passaram
    }
  });
}
